import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, footerSection, site } from "@/content/site";
import { SiteBrand } from "@/components/site-brand";
import { SiteNavLink } from "@/components/site-nav-link";
import { WhatsappIcon } from "@/components/whatsapp-icon";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__main page-width">
        <div className="site-footer__brand">
          <SiteBrand />
          <p className="site-footer__tagline">{site.tagline}</p>
        </div>

        <div className="site-footer__contact">
          <h2 className="site-footer__heading">{footerSection.contactHeading}</h2>
          <ul className="site-footer__contact-list">
            <li>
              <Mail aria-hidden className="site-footer__icon" />
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <Phone aria-hidden className="site-footer__icon" />
              <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            </li>
            <li>
              <a
                href={contactDetails.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__contact-row"
              >
                <WhatsappIcon className="site-footer__icon" />
                {contactDetails.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__contact-row"
              >
                <Instagram aria-hidden className="site-footer__icon" />
                {contactDetails.instagramLabel}
              </a>
            </li>
            <li>
              <MapPin aria-hidden className="site-footer__icon" />
              <span>
                {contactDetails.addressLines.join(", ")}
                <br />
                <span className="site-footer__muted">
                  {contactDetails.serviceAreaLabel}: {contactDetails.serviceArea}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <div className="site-footer__map">
          <h2 className="site-footer__heading">{footerSection.mapHeading}</h2>
          <div className="site-footer__map-frame">
            <iframe
              title={`${site.businessName} on Google Maps`}
              src={contactDetails.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            className="site-footer__maps-link"
            href={contactDetails.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactDetails.mapsLabel}
          </a>
        </div>
      </div>

      <div className="site-footer__bar page-width">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {site.businessName}. All rights reserved.
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerSection.links.map((item) => (
            <SiteNavLink key={item.label} item={item} />
          ))}
        </nav>
      </div>
    </footer>
  );
}
