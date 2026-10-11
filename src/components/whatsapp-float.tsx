import { contactDetails } from "@/content/site";
import { WhatsappIcon } from "@/components/whatsapp-icon";

export function WhatsappFloat() {
  return (
    <a
      href={contactDetails.whatsappHref}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contactDetails.whatsappFloatLabel}
    >
      <WhatsappIcon size={26} />
    </a>
  );
}
