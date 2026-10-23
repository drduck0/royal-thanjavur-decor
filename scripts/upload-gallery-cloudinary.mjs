/**
 * Uploads src/assets/gallery to Cloudinary.
 *
 * Required env (do not commit these):
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 *
 * The site reads the cloud name at build time from VITE_CLOUDINARY_CLOUD_NAME
 * (same value as CLOUDINARY_CLOUD_NAME). Set that in Vercel, then rebuild.
 *
 * Usage: npm run upload:gallery
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "src/content/gallery-manifest.json");
const folder = "royal-decor";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();

if (!cloudName || !apiKey || !apiSecret) {
  console.error(
    "Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET, then run again.",
  );
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const organizeOnly = process.argv.includes("--organize");

function sign(params) {
  const payload =
    Object.keys(params)
      .sort()
      .map((key) => `${key}=${params[key]}`)
      .join("&") + apiSecret;
  return crypto.createHash("sha1").update(payload).digest("hex");
}

function assetFolderFor(item) {
  const categoryFolder = item.id.split("/")[0];
  return `${folder}/${categoryFolder}`;
}

function publicIdFor(item) {
  return `${folder}/${item.id}`;
}

async function organizeItem(item) {
  const timestamp = Math.floor(Date.now() / 1000);
  const params = {
    asset_folder: assetFolderFor(item),
    public_id: publicIdFor(item),
    timestamp,
    type: "upload",
  };
  const body = new URLSearchParams({
    ...Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)])),
    api_key: apiKey,
    signature: sign(params),
  });
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/explicit`, {
    method: "POST",
    body,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(`${item.id}: ${payload?.error?.message ?? response.statusText}`);
  }
  return payload.asset_folder;
}

async function uploadItem(item) {
  const relative = item.imagePath.replace("@/assets/", "src/assets/");
  const filePath = path.join(root, relative);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file for ${item.id}: ${relative}`);
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const publicId = publicIdFor(item);
  const assetFolder = assetFolderFor(item);
  const params = { asset_folder: assetFolder, overwrite: "true", public_id: publicId, timestamp };
  const body = new FormData();
  body.append("file", new Blob([fs.readFileSync(filePath)]), path.basename(filePath));
  body.append("api_key", apiKey);
  body.append("timestamp", String(timestamp));
  body.append("public_id", publicId);
  body.append("asset_folder", assetFolder);
  body.append("overwrite", "true");
  body.append("signature", sign(params));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(`${item.id}: ${payload?.error?.message ?? response.statusText}`);
  }
  return payload.asset_folder;
}

let done = 0;
for (const item of manifest) {
  const assetFolder = organizeOnly ? await organizeItem(item) : await uploadItem(item);
  done += 1;
  console.log(`${done}/${manifest.length} ${assetFolder}/${item.id.split("/").slice(1).join("/")}`);
}

console.log(
  organizeOnly
    ? `Moved ${done} images into "${folder}" category folders.`
    : `Uploaded ${done} images into "${folder}" category folders.`,
);
console.log(`Set VITE_CLOUDINARY_CLOUD_NAME=${cloudName} and rebuild so the site uses these URLs.`);
