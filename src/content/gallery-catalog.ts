import manifest from "./gallery-manifest.json";
import type { GalleryDesign } from "./site";
import { cloudinaryCloudName, cloudinaryImageUrl } from "@/lib/cloudinary-image";

const cloudName = cloudinaryCloudName();

export const galleryCategories = [
  "Engagement",
  "Wedding Stages",
  "Reception",
  "Birthday Events",
  "Baby Shower",
  "Puberty",
];

export const galleryDesigns: GalleryDesign[] = manifest.map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  image: cloudinaryImageUrl(cloudName, item.id),
  alt: item.alt,
}));
