import { Expand } from "lucide-react";
import type { GalleryDesign } from "@/content/site";
import { SiteImage } from "@/components/site-image";
import { Button } from "@/components/ui/button";

type GalleryGridProps = {
  designs: GalleryDesign[];
  onSelect: (index: number) => void;
};

export function GalleryGrid({ designs, onSelect }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {designs.map((design, index) => (
        <article className="gallery-item" key={design.id}>
          <Button
            variant="ghost"
            className="gallery-image-button h-auto w-full p-0"
            aria-label={`View ${design.title}`}
            onClick={() => onSelect(index)}
          >
            <SiteImage
              src={design.image}
              alt={design.alt}
              width={1024}
              height={1024}
              sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 100vw"
            />
          </Button>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2>{design.title}</h2>
              <p>{design.category}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="mt-4 shrink-0"
              aria-label={`Enlarge ${design.title}`}
              title="Enlarge image"
              onClick={() => onSelect(index)}
            >
              <Expand />
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
