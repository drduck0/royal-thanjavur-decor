import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/gallery";
import { appPaths } from "@/lib/routes";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    buildPageHead({
      title: "Decoration Gallery | Royal Decor Thanjavur",
      description:
        "Explore wedding stage, reception and traditional function decoration inspiration from Royal Decor Thanjavur.",
      path: appPaths.gallery,
      ogDescription:
        "Discover floral stages, elegant reception settings and traditional celebration decor.",
    }),
  component: GalleryPage,
});
