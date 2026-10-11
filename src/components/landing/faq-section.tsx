import { faqSection } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { homeSectionIds } from "@/lib/routes";

export function FaqSection() {
  return (
    <section
      id={homeSectionIds.faq}
      className="faq motion-section section page-width"
      aria-labelledby="faq-title"
    >
      <SectionIntro
        eyebrow={faqSection.eyebrow}
        title={faqSection.title}
        description={faqSection.description}
        titleId="faq-title"
      />
      <div className="faq-accordion">
        {faqSection.items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary className="faq-question">{item.question}</summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
