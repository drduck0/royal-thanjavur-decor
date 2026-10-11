import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logos.png";
import { navigation, siteHeader, siteImages } from "@/content/site";
import { SiteImage } from "@/components/site-image";
import { SiteNavLink } from "@/components/site-nav-link";
import { appPaths, homeSectionIds } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { SiteContactBar } from "@/components/landing/site-contact-bar";

type SitePageHeaderProps = {
  variant: "landing" | "gallery";
  onEnquiry?: () => void;
};

export function SitePageHeader({ variant, onEnquiry }: SitePageHeaderProps) {
  const headerClass =
    variant === "landing"
      ? "site-header site-page-header page-width"
      : "site-header-1 site-page-header page-width";

  return (
    <>
      {variant === "landing" ? <SiteContactBar /> : null}
      <header className={headerClass} aria-label="Site header">
        <Link
          to={appPaths.home}
          hash={homeSectionIds.home}
          className="site-page-header__brand"
          aria-label={siteImages.logoAlt}
        >
          <SiteImage className="logo" src={logo} alt="" width={82} height={89} loading="eager" />
        </Link>
        <nav className="desktop-nav site-page-header__nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <SiteNavLink key={item.label} item={item} />
          ))}
        </nav>
        <div className="site-page-header__actions">
          {variant === "landing" && onEnquiry ? (
            <Button
              variant="royal"
              type="button"
              className="site-header__cta h-11 px-5 text-xs max-sm:h-9 max-sm:px-3 max-sm:text-[10px]"
              onClick={onEnquiry}
            >
              <span className="max-sm:hidden">{siteHeader.primaryCta}</span>
              <span className="hidden max-sm:inline">{siteHeader.primaryCtaShort}</span>
              <ArrowUpRight className="max-sm:size-3.5" />
            </Button>
          ) : (
            <Button
              variant="royal"
              asChild
              className="site-header__cta h-11 px-5 text-xs max-sm:h-9 max-sm:px-3 max-sm:text-[10px]"
            >
              <Link to={appPaths.home} hash={homeSectionIds.contact}>
                <span className="max-sm:hidden">{siteHeader.primaryCta}</span>
                <span className="hidden max-sm:inline">{siteHeader.galleryCtaShort}</span>
                <ArrowUpRight className="max-sm:size-3.5" />
              </Link>
            </Button>
          )}
        </div>
      </header>
    </>
  );
}
