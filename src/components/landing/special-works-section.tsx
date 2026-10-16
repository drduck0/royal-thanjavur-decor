import { specialWorksSection } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { homeSectionIds } from "@/lib/routes";
import { SiteImage } from "@/components/site-image";

export function SpecialWorksSection() {
  return (
    <section
      id={homeSectionIds.specialWorks}
      className="special-works-section motion-section section page-width"
      aria-label={specialWorksSection.eyebrow}
    >
      <SectionIntro
        eyebrow={specialWorksSection.eyebrow}
        title={specialWorksSection.title}
        description={specialWorksSection.description}
        titleId="special-works-title"
      />
      <div
        id={homeSectionIds.specialWorksPreview}
        className="special-works-grid"
        role="list"
        aria-label="Our special works in weddings"
      >
        {specialWorksSection.items.map((item) => (
          <article className="service" key={item.title} role="listitem">
            <div className="service-image">
              <SiteImage
                src={item.image}
                alt={`${item.title} — design inspiration`}
                width={1024}
                height={1024}
                sizes="(min-width: 1100px) 22vw, (min-width: 700px) 45vw, 100vw"
              />
              <span className="card-media-overlay" aria-hidden />
            </div>
            <h3 className="special-works-item-title">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
