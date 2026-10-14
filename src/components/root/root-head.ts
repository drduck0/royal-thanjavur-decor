import type { LinkHTMLAttributes } from "react";
import appCss from "@/styles.css?url";

const googleFontsStylesheet =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap";

/** Default document head shared by all routes (child routes may override meta). */
export function rootHead() {
  const links: LinkHTMLAttributes<HTMLLinkElement>[] = [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    { rel: "stylesheet", href: googleFontsStylesheet },
    { rel: "stylesheet", href: appCss },
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  ];

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Royal Decor Thanjavur" },
      {
        name: "description",
        content: "Beautiful stage and function decorations by Royal Decor Thanjavur.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links,
  };
}
