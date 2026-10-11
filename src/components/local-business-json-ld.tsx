import { localBusinessJsonLd } from "@/content/site";

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Safe: static JSON from site content, no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}
