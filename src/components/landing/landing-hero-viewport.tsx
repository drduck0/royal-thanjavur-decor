import { SitePageHeader } from "@/components/layout/site-page-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { homeSectionIds } from "@/lib/routes";

type LandingHeroViewportProps = {
  onEnquiry: () => void;
};

export function LandingHeroViewport({ onEnquiry }: LandingHeroViewportProps) {
  return (
    <div id={homeSectionIds.home} className="hero-viewport">
      <SitePageHeader variant="landing" onEnquiry={onEnquiry} />
      <LandingHero onEnquiry={onEnquiry} />
    </div>
  );
}
