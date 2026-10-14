import { Instagram, Mail, Phone } from "lucide-react";
import { contactDetails, site } from "@/content/site";

export function SiteContactBar() {
  return (
    <header className="site-header-1 site-header-1--contact" aria-label="Contact bar">
      <span className="site-header-1__title brand-title">{site.businessName}</span>
      <div className="site-header-1__contact-all">
        <div className="site-header-1__contact-cluster">
          <Mail aria-hidden className="site-header-1__icon" />
          <a className="site-header-1__link" href={`mailto:${contactDetails.email}`}>
            <span className="site-header-1__link-text">{contactDetails.email}</span>
          </a>
        </div>
        <div className="site-header-1__contact-cluster">
          <Phone aria-hidden className="site-header-1__icon" />
          <a className="site-header-1__link" href={contactDetails.phoneHref}>
            <span className="site-header-1__link-text">{contactDetails.phoneDisplay}</span>
          </a>
        </div>
        <a
          className="site-header-1__link site-header-1__contact-cluster site-header-1__contact-cluster--instagram"
          href={contactDetails.instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contactDetails.instagramLabel}
        >
          <Instagram aria-hidden className="site-header-1__icon" />
          <span className="site-header-1__link-text">{contactDetails.instagramHandle}</span>
        </a>
      </div>
    </header>
  );
}
