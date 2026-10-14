import { aboutSection } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { homeSectionIds } from "@/lib/routes";

export function AboutSection() {
  return (
    <section
      id={homeSectionIds.about}
      className="about-cards motion-section section page-width"
      aria-labelledby="about-title"
    >
      <SectionIntro
        eyebrow={aboutSection.eyebrow}
        title={aboutSection.title}
        description={aboutSection.intro}
        titleId="about-title"
      />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi in, aut quae doloribus quas corrupti optio quos eveniet dicta eos incidunt veritatis? Reprehenderit accusantium expedita vero quas amet adipisci beatae.
      </div>
      <div className="about-grid">
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
              <Icon className="about-card-icon" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
