import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/landing-page";
import { appPaths } from "@/lib/routes";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageHead({
      title: "Royal Decor Thanjavur | Stage & Function Decorations",
      description:
        "Make your celebration beautiful with Royal Decor Thanjavur. Discover elegant wedding stages, reception decorations and traditional function decor.",
      path: appPaths.home,
      ogTitle: "Royal Decor Thanjavur | Made for your special moments",
      ogDescription:
        "Thoughtfully designed stage and function decorations for beautiful celebrations in Thanjavur.",
      preloadLcpImage: true,
    }),
  component: LandingPage,
});
