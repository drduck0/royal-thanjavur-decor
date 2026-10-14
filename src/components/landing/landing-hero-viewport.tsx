import { SitePageHeader } from "@/components/layout/site-page-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { homeSectionIds } from "@/lib/routes";

export function LandingHeroViewport() {
  return (
    <div id={homeSectionIds.home} className="hero-viewport">
      <SitePageHeader variant="landing" />
      <LandingHero />
    </div>
  );
}
