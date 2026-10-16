import { contactSection } from "@/content/site";
import { ContactCtaSection } from "@/components/layout/contact-cta-section";
import { PlanEventCtaButton } from "@/components/plan-event-cta-button";
import { homeSectionIds } from "@/lib/routes";

export function LandingContactSection() {
  return (
    <ContactCtaSection
      id={homeSectionIds.contact}
      eyebrow={contactSection.eyebrow}
      title={contactSection.title}
      description={contactSection.description}
      actions={<PlanEventCtaButton className="h-12 px-7 text-xs" />}
    />
  );
}
