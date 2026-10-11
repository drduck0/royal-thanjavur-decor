import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { hero } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";
import { SiteImage } from "@/components/site-image";
import { appPaths } from "@/lib/routes";
import { Button } from "@/components/ui/button";

type LandingHeroProps = {
  onEnquiry: () => void;
};

export function LandingHero({ onEnquiry }: LandingHeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <SiteImage
        src={hero.image.src}
        className="hero-photo"
        alt={hero.image.alt}
        width={1920}
        height={1088}
        priority
        sizes="100vw"
      />
      <div className="hero-content page-width">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          <HeadlineLines lines={hero.title} />
        </h1>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-actions">
          <Button variant="gold" className="h-12 px-6 text-xs" onClick={onEnquiry}>
            {hero.primaryCta} <ArrowUpRight />
          </Button>
          <Button variant="heroOutline" asChild className="h-12 px-6 text-xs">
            <Link to={appPaths.gallery}>
              {hero.secondaryCta} <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
      <p className="hero-caption" aria-label={hero.caption}>
        <MapPin size={13} aria-hidden /> {hero.caption}
      </p>
    </section>
  );
}
