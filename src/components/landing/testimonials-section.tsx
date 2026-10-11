import { testimonialsSection } from "@/content/site";
import { SectionIntro } from "@/components/layout/section-intro";
import { TestimonialStarRating } from "@/components/landing/testimonial-star-rating";
import { homeSectionIds } from "@/lib/routes";

export function TestimonialsSection() {
  return (
    <section
      id={homeSectionIds.testimonials}
      className="testimonials motion-section section page-width"
      aria-labelledby="testimonials-title"
    >
      <SectionIntro
        eyebrow={testimonialsSection.eyebrow}
        title={testimonialsSection.title}
        description={testimonialsSection.description}
        titleId="testimonials-title"
      />
      <div className="testimonials-grid">
        {testimonialsSection.items.map((item) => (
          <blockquote className="testimonial-card" key={item.name}>
            <TestimonialStarRating rating={item.rating} />
            <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <cite className="testimonial-name">{item.name}</cite>
              <span className="testimonial-occasion">{item.occasion}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
