import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { servicesSection } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { useSpecialiseCardHover } from "@/hooks/use-specialise-card-hover";
import { appPaths, homeSectionIds } from "@/lib/routes";
import { SiteImage } from "@/components/site-image";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSpecialiseCardHover(sectionRef);

  return (
    <section
      ref={sectionRef}
      id={homeSectionIds.services}
      className="services-section motion-section section"
      aria-label={servicesSection.eyebrow}
    >
      <div className="page-width">
      <SectionIntro
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        description={servicesSection.description}
        titleId="services-title"
      />
      <div
        id={homeSectionIds.servicesPreview}
        className="service-grid"
        role="list"
        aria-label="What we specialise in"
      >
        {servicesSection.items.map((service) => (
          <article className="service" key={service.title} role="listitem">
            <div className="service-image">
              <SiteImage
                src={service.image}
                alt={`${service.title} — design inspiration`}
                width={1024}
                height={1024}
                sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 100vw"
              />
              <span className="card-media-overlay" aria-hidden />
            </div>
            <div className="service-card-body">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="services-section__footer">
        <p className="services-section__footnote">{servicesSection.footnote}</p>
        <Button variant="outline" asChild className="services-section__gallery-cta h-11 px-6 text-xs">
          <Link to={appPaths.gallery}>
            {servicesSection.galleryCta}
            <ArrowUpRight aria-hidden />
          </Link>
        </Button>
      </div>
      </div>
    </section>
  );
}
