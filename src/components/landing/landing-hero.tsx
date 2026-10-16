import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";
import { SiteImage } from "@/components/site-image";
import { Button } from "@/components/ui/button";
import { appPaths } from "@/lib/routes";

export function LandingHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <SiteImage
        src={hero.image.src}
        className="hero-photo"
        alt={hero.image.alt}
        width={1024}
        height={580}
        priority
        sizes="100vw"
      />
      <div className="hero-content page-width">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">
          <HeadlineLines lines={hero.title} />
        </h1>
        <p className="hero-description">{hero.description}</p>
        <Button variant="gold" asChild className="hero-gallery-cta h-11 px-6 text-xs">
          <Link to={appPaths.gallery}>
            {hero.galleryCta}
            <ArrowUpRight aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}
