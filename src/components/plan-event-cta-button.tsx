import { ArrowUpRight } from "lucide-react";
import { contactDetails, contactSection, siteHeader } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PlanEventCtaButtonProps = {
  variant?: "gold" | "royal";
  /** Header nav: shorter label on small screens. */
  compactOnMobile?: boolean;
  className?: string;
};

export function PlanEventCtaButton({
  variant = "gold",
  compactOnMobile = false,
  className,
}: PlanEventCtaButtonProps) {
  return (
    <Button variant={variant} asChild className={cn("plan-event-cta", className)}>
      <a
        href={contactDetails.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={contactDetails.whatsappFloatLabel}
      >
        {compactOnMobile ? (
          <>
            <span className="max-sm:hidden">{contactSection.cta}</span>
            <span className="hidden max-sm:inline">{siteHeader.primaryCtaShort}</span>
          </>
        ) : (
          contactSection.cta
        )}
        <ArrowUpRight className={compactOnMobile ? "max-sm:size-3" : undefined} aria-hidden />
      </a>
    </Button>
  );
}
