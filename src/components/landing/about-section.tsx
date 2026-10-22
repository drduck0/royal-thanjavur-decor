import { aboutSection } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { SiteImage } from "@/components/site-image";
import { useAnimateWhenInView } from "@/hooks/use-animate-when-in-view";
import { homeSectionIds } from "@/lib/routes";

export function AboutSection() {
  const { ref, animate } = useAnimateWhenInView<HTMLDivElement>({
    threshold: 0,
    rootMargin: "0px 0px 25% 0px",
  });

  return (
    <section
      id={homeSectionIds.about}
      className="about-cards motion-section section page-width"
      aria-labelledby="about-title"
    >
      <div ref={ref} className="about-section-heading-anchor">
        <SectionIntro
          eyebrow={aboutSection.eyebrow}
          title={aboutSection.title}
          description={aboutSection.intro}
          titleId="about-title"
          titleCountRun={animate}
        />
      </div>
      <div className="about-body">
        <div className="about-prose">
          {aboutSection.openingParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <div className="about-directors">
            <h3 className="about-prose__subheading">{aboutSection.directorsHeading}</h3>
            <p>{aboutSection.directorsParagraph}</p>
          </div>
        </div>
        <aside className="about-media" aria-label="Royal Decor celebration styling">
          <SiteImage
            src={aboutSection.image.src}
            className="about-photo"
            alt={aboutSection.image.alt}
            width={1024}
            height={1024}
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        </aside>
      </div>
      <div className="about-closing" aria-label="How we serve our clients">
        {aboutSection.closingBlocks.map((block, index) => (
          <article className="about-closing-card" key={block.heading}>
            <span className="about-closing-card__index" aria-hidden>
              0{index + 1}
            </span>
            <h3 className="about-closing-card__title">{block.heading}</h3>
            <p>{block.body}</p>
          </article>
        ))}
      </div>
      {/* <div className="about-grid">
        {aboutSection.cards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              className={
                card.showOnMobile === false
                  ? "about-card about-card--desktop-only"
                  : "about-card"
              }
              key={card.title}
            >
              <Icon className="about-card-icon" aria-hidden />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div> */}
    </section>
  );
}
