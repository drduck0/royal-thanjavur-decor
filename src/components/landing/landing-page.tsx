import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLandingMotion } from "@/hooks/use-landing-motion";
import { EnquiryDialog, SiteFooter } from "@/components";
import { AboutSection } from "@/components/landing/about-section";
import { CelebrationStatsSection } from "@/components/landing/celebration-stats-section";
import { FaqSection } from "@/components/landing/faq-section";
import { LandingContactSection } from "@/components/landing/landing-contact-section";
import { LandingHeroViewport } from "@/components/landing/landing-hero-viewport";
import { ServicePreviewDialog } from "@/components/landing/service-preview-dialog";
import { ServicesSection } from "@/components/landing/services-section";
import { StorySection } from "@/components/landing/story-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { enquiry, type ServiceItem } from "@/content/site";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { appPaths, homeSectionIds } from "@/lib/routes";

export function LandingPage() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname, hash } = useLocation();
  useLandingMotion(mainRef);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryOccasion, setEnquiryOccasion] = useState(enquiry.defaultOccasion);
  const [previewService, setPreviewService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (pathname !== appPaths.home) return;
    const scrollToPageTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (!hash || hash === homeSectionIds.home) {
      scrollToPageTop();
      requestAnimationFrame(scrollToPageTop);
    }
  }, [pathname, hash]);

  function openEnquiry(occasion = enquiry.defaultOccasion) {
    setEnquiryOccasion(occasion);
    setEnquiryOpen(true);
  }

  return (
    <>
      <LocalBusinessJsonLd />
      <main ref={mainRef} id="main-content" aria-label="Royal Decor Thanjavur home">
        <LandingHeroViewport onEnquiry={() => openEnquiry()} />
        <AboutSection />
        <CelebrationStatsSection />
        <ServicesSection onPreviewService={setPreviewService} />
        <StorySection onEnquiry={() => openEnquiry()} />
        <TestimonialsSection />
        <FaqSection />
        <LandingContactSection onEnquiry={() => openEnquiry()} />
      </main>
      <SiteFooter />
      <ServicePreviewDialog
        service={previewService}
        onClose={() => setPreviewService(null)}
        onPlanCelebration={(occasion) => {
          setPreviewService(null);
          openEnquiry(occasion);
        }}
      />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} occasion={enquiryOccasion} />
    </>
  );
}
