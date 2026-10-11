import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { servicesSection, type ServiceItem } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { appPaths, homeSectionIds } from "@/lib/routes";
import { SiteImage } from "@/components/site-image";
import { Button } from "@/components/ui/button";

type ServicesSectionProps = {
  onPreviewService: (service: ServiceItem) => void;
};

export function ServicesSection({ onPreviewService }: ServicesSectionProps) {
  return (
    <section
      id={homeSectionIds.services}
      className="motion-section section page-width"
      aria-labelledby="services-title"
    >
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
        aria-label="Decoration specialities"
      >
        {servicesSection.items.map((service, index) => (
          <article className="service" key={service.title} role="listitem">
            <Button
              type="button"
              variant="ghost"
              className="service-image service-image-button h-auto w-full p-0"
              aria-label={`View ${service.title}`}
              onClick={() => onPreviewService(service)}
            >
              <SiteImage
                src={service.image}
                alt={`${service.title} — design inspiration`}
                width={1024}
                height={1024}
                sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 100vw"
              />
              <span className="image-index">0{index + 1}</span>
            </Button>
            <div className="service-title">
              <h3>{service.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                aria-label={`View ${service.title}`}
                title={`View ${service.title}`}
                onClick={() => onPreviewService(service)}
              >
                <ArrowUpRight />
              </Button>
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="text-[10px] text-muted-foreground">{servicesSection.footnote}</p>
        <Button variant="outline" asChild>
          <Link to={appPaths.gallery}>
            {servicesSection.galleryCta} <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
