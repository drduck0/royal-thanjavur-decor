import { Star } from "lucide-react";

const MAX_STARS = 5;

type TestimonialStarRatingProps = {
  rating: number;
};

function clampRating(rating: number) {
  return Math.min(MAX_STARS, Math.max(0, rating));
}

function formatRatingLabel(value: number) {
  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return `${text} out of ${MAX_STARS} stars`;
}

export function TestimonialStarRating({ rating }: TestimonialStarRatingProps) {
  const value = clampRating(rating);

  return (
    <div
      className="testimonial-stars"
      role="img"
      aria-label={formatRatingLabel(value)}
    >
      {Array.from({ length: MAX_STARS }, (_, index) => {
        const fill = Math.min(1, Math.max(0, value - index));
        return (
          <span className="testimonial-star-wrap" key={index} aria-hidden>
            <Star className="testimonial-star testimonial-star--empty" />
            {fill > 0 ? (
              <span
                className="testimonial-star-fill"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className="testimonial-star testimonial-star--filled" />
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
