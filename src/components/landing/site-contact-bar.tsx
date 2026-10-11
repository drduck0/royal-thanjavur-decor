import { Instagram, Mail, Phone } from "lucide-react";
import { contactDetails, site } from "@/content/site";

export function SiteContactBar() {
  return (
    <header className="site-header-1 site-header-1--contact" aria-label="Contact bar">
      <div className="site-header-1__contact site-header-1__contact--start">
        <Mail aria-hidden className="site-header-1__icon" />
        <a className="site-header-1__link" href={`mailto:${contactDetails.email}`}>
          <span className="site-header-1__link-text">{contactDetails.emailLabel}</span>
        </a>
      </div>
      <span className="site-header-1__title brand-title">{site.businessName}</span>
      <div className="site-header-1__contact site-header-1__contact--end">
        <Phone aria-hidden className="site-header-1__icon" />
        <a className="site-header-1__link" href={contactDetails.phoneHref}>
          <span className="site-header-1__link-text">{contactDetails.phoneDisplay}</span>
        </a>
        <a
          className="site-header-1__link site-header-1__link--icon"
          href={contactDetails.instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contactDetails.instagramLabel}
        >
          <Instagram aria-hidden className="site-header-1__icon" />
        </a>
      </div>
    </header>
  );
}
