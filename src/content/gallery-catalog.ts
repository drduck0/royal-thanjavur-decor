import manifest from "./gallery-manifest.json";
import type { GalleryDesign } from "./site";

const galleryImages = import.meta.glob<string>("../assets/gallery/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

function moduleUrl(imagePath: string): string | undefined {
  const relative = imagePath.replace("@/assets/", "../assets/");
  return galleryImages[relative];
}

export const galleryCategories = [
  "Engagement",
  "Wedding Stages",
  "Reception",
  "Birthday Events",
  "Baby Shower",
  "Puberty",
];

export const galleryDesigns: GalleryDesign[] = manifest.flatMap((item) => {
  const image = moduleUrl(item.imagePath);
  if (!image) return [];
  return [
    {
      id: item.id,
      title: item.title,
      category: item.category,
      image,
      alt: item.alt,
    },
  ];
});
