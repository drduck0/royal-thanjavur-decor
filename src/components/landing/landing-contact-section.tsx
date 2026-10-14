import { ArrowUpRight } from "lucide-react";
import { contactSection } from "@/content/site";
import { ContactCtaSection } from "@/components/layout/contact-cta-section";
import { homeSectionIds } from "@/lib/routes";
import { Button } from "@/components/ui/button";

export function LandingContactSection() {
  return (
    <ContactCtaSection
      id={homeSectionIds.contact}
      eyebrow={contactSection.eyebrow}
      title={contactSection.title}
      description={contactSection.description}
      actions={
        <Button variant="gold" type="button" className="h-12 px-7 text-xs">
          {contactSection.cta} <ArrowUpRight />
        </Button>
      }
    />
  );
}
