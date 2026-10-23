/** Folder used for every gallery upload and delivery URL. */
export const cloudinaryFolder = "royal-decor";

export function cloudinaryCloudName(): string {
  const value = import.meta.env["VITE_CLOUDINARY_CLOUD_NAME"];
  if (typeof value === "string" && value.trim()) return value.trim();
  return "rlxucu6k";
}

/** Resized, auto-format delivery URL. `publicId` is the manifest id, without the folder. */
export function cloudinaryImageUrl(cloudName: string, publicId: string, width = 1600): string {
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_limit,w_${width}/${cloudinaryFolder}/${publicId}`;
}
