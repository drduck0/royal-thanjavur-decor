import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useLandingMotion } from "@/hooks/use-landing-motion";
import { CelebrationStatsSection } from "@/components/landing/celebration-stats-section";
import { SiteFooter } from "@/components";
import { AboutSection } from "@/components/landing/about-section";
import { LandingContactSection } from "@/components/landing/landing-contact-section";
import { LandingHeroViewport } from "@/components/landing/landing-hero-viewport";
import { ServicesSection } from "@/components/landing/services-section";
import { SpecialWorksSection } from "@/components/landing/special-works-section";
import { StorySection } from "@/components/landing/story-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { appPaths, homeSectionIds } from "@/lib/routes";

export function LandingPage() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname, hash } = useLocation();
  useLandingMotion(mainRef);
  useEffect(() => {
    if (pathname !== appPaths.home) return;
    const scrollToPageTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (!hash || hash === homeSectionIds.home) {
      scrollToPageTop();
      requestAnimationFrame(scrollToPageTop);
    }
  }, [pathname, hash]);

  return (
    <>
      <LocalBusinessJsonLd />
      <main ref={mainRef} id="main-content" aria-label="Royal Decor Thanjavur home">
        <LandingHeroViewport />
        <AboutSection />
        <CelebrationStatsSection />
        <ServicesSection />
        {/* <StorySection /> */}
        <SpecialWorksSection />
        <TestimonialsSection />
        <LandingContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
