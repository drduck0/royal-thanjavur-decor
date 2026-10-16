import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { navigation, siteHeader, siteImages } from "@/content/site";
import { SiteImage } from "@/components/site-image";
import { SiteNavLink } from "@/components/site-nav-link";
import { appPaths, homeSectionIds } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { SiteContactBar } from "@/components/landing/site-contact-bar";

type SitePageHeaderProps = {
  variant: "landing" | "gallery";
};

export function SitePageHeader({ variant }: SitePageHeaderProps) {
  const headerClass =
    variant === "landing"
      ? "site-header site-page-header page-width"
      : "site-header-1 site-page-header";
  const innerClass = variant === "gallery" ? "page-width site-page-header__inner" : undefined;

  const headerContent = (
    <>
      <Link
        to={appPaths.home}
        hash={homeSectionIds.home}
        className="site-page-header__brand"
        aria-label={siteImages.logoAlt}
      >
        <SiteImage
          className="logo"
          src={siteImages.logo}
          alt=""
          width={82}
          height={89}
          loading="eager"
        />
      </Link>
      <nav className="desktop-nav site-page-header__nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <SiteNavLink key={item.label} item={item} />
        ))}
      </nav>
      <div className="site-page-header__actions">
        {variant === "landing" ? (
          <Button
            variant="royal"
            type="button"
            className="site-header__cta h-11 px-5 text-xs max-sm:h-7 max-sm:min-h-7 max-sm:px-2 max-sm:py-1 max-sm:text-[8px]"
          >
            <span className="max-sm:hidden">{siteHeader.primaryCta}</span>
            <span className="hidden max-sm:inline">{siteHeader.primaryCtaShort}</span>
            <ArrowUpRight className="max-sm:size-3" />
          </Button>
        ) : (
          <Button
            variant="royal"
            asChild
            className="site-header__cta h-11 px-5 text-xs max-sm:h-7 max-sm:min-h-7 max-sm:px-2 max-sm:py-1 max-sm:text-[8px]"
          >
            <Link to={appPaths.home} hash={homeSectionIds.contact}>
              <span className="max-sm:hidden">{siteHeader.primaryCta}</span>
              <span className="hidden max-sm:inline">{siteHeader.primaryCtaShort}</span>
              <ArrowUpRight className="max-sm:size-3" />
            </Link>
          </Button>
        )}
      </div>
    </>
  );

  return (
    <>
      {variant === "landing" ? <SiteContactBar /> : null}
      <header className={headerClass} aria-label="Site header">
        {innerClass ? <div className={innerClass}>{headerContent}</div> : headerContent}
      </header>
    </>
  );
}
