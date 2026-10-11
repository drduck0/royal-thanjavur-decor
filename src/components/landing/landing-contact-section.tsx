import { ArrowUpRight } from "lucide-react";
import { contactSection } from "@/content/site";
import { ContactCtaSection } from "@/components/layout/contact-cta-section";
import { homeSectionIds } from "@/lib/routes";
import { Button } from "@/components/ui/button";

type LandingContactSectionProps = {
  onEnquiry: () => void;
};

export function LandingContactSection({ onEnquiry }: LandingContactSectionProps) {
  return (
    <ContactCtaSection
      id={homeSectionIds.contact}
      eyebrow={contactSection.eyebrow}
      title={contactSection.title}
      description={contactSection.description}
      actions={
        <Button variant="gold" className="h-12 px-7 text-xs" onClick={onEnquiry}>
          {contactSection.cta} <ArrowUpRight />
        </Button>
      }
    />
  );
}
