import { ArrowUpRight, Check } from "lucide-react";
import { storySection } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";
import { SiteImage } from "@/components/site-image";
import { homeSectionIds } from "@/lib/routes";
import { Button } from "@/components/ui/button";

type StorySectionProps = {
  onEnquiry: () => void;
};

export function StorySection({ onEnquiry }: StorySectionProps) {
  return (
    <section
      id={homeSectionIds.story}
      className="story motion-section section"
      aria-labelledby="story-title"
    >
      <div className="story-inner page-width">
        <SiteImage
          src={storySection.image.src}
          className="story-photo"
          alt={storySection.image.alt}
          width={1024}
          height={1024}
          sizes="(min-width: 900px) 45vw, 100vw"
        />
        <div>
          <p className="eyebrow text-primary">{storySection.eyebrow}</p>
          <h2 id="story-title">
            <HeadlineLines lines={storySection.title} />
          </h2>
          {storySection.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="story-values">
            {storySection.values.map((value) => (
              <span key={value}>
                <Check /> {value}
              </span>
            ))}
          </div>
          <Button variant="outline" className="h-11 text-xs" onClick={onEnquiry}>
            {storySection.cta} <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
