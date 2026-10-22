import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";
import { HeroGallerySlideshow } from "@/components/landing/hero-gallery-slideshow";
import { Button } from "@/components/ui/button";
import { appPaths } from "@/lib/routes";

export function LandingHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroGallerySlideshow />
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
