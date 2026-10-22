import type { LinkHTMLAttributes } from "react";
import heroStagePhoto from "@/assets/hero/hero-wedding-stage.jpg";
import { site, siteSeo } from "@/content/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Preload the main hero image (home page LCP only). */
  preloadLcpImage?: boolean;
};

function absoluteAssetUrl(assetPath: string): string | undefined {
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  if (!siteSeo.siteUrl) return undefined;
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${siteSeo.siteUrl}${normalized}`;
}

export function buildPageHead(input: PageSeoInput) {
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;
  const ogImage = absoluteAssetUrl(heroStagePhoto);
  const canonical = siteSeo.siteUrl ? `${siteSeo.siteUrl}${input.path}` : undefined;

  const meta = [
    { title: input.title },
    { name: "description", content: input.description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "author", content: site.businessName },
    { name: "theme-color", content: "#1a1410" },
    { property: "og:site_name", content: site.businessName },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: siteSeo.locale },
    ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
    ...(canonical ? [{ property: "og:url", content: canonical }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
  ];

  const links: LinkHTMLAttributes<HTMLLinkElement>[] = [];
  if (canonical) {
    links.push({ rel: "canonical", href: canonical });
  }
  if (input.preloadLcpImage) {
    links.push({
      rel: "preload",
      as: "image",
      href: heroStagePhoto,
      fetchPriority: "high",
    });
  }

  return { meta, links };
}
