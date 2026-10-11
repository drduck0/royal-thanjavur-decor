import { SitePageHeader } from "@/components/layout/site-page-header";
import { LandingHero } from "@/components/landing/landing-hero";

type LandingHeroViewportProps = {
  onEnquiry: () => void;
};

export function LandingHeroViewport({ onEnquiry }: LandingHeroViewportProps) {
  return (
    <div className="hero-viewport">
      <SitePageHeader variant="landing" onEnquiry={onEnquiry} />
      <LandingHero onEnquiry={onEnquiry} />
    </div>
  );
}
