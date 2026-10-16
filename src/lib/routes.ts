/**
 * Top-level routes map to files in `src/routes/` (TanStack file-based routing).
 * Landing sections on `/` use in-page hashes only — not separate routes.
 */
export const appPaths = {
  home: "/",
  gallery: "/gallery",
} as const;

export type AppPath = (typeof appPaths)[keyof typeof appPaths];

/** `id` attributes on the landing page (`src/routes/index.tsx`). */
export const homeSectionIds = {
  home: "home",
  about: "about",
  stats: "stats",
  services: "services",
  servicesPreview: "services-preview",
  specialWorks: "special-works",
  specialWorksPreview: "special-works-preview",
  story: "story",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export type HomeSectionId = (typeof homeSectionIds)[keyof typeof homeSectionIds];

/** Scroll restoration: keep `/` and `/#home` at the top; preserve other hash jumps. */
export function shouldRestoreScroll(pathname: string, hash: string): boolean {
  if (pathname !== appPaths.home) return true;
  if (!hash || hash === homeSectionIds.home) return false;
  return true;
}
