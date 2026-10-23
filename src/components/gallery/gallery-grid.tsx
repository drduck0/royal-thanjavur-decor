import { useEffect, useRef, useState } from "react";
import { Expand } from "lucide-react";
import type { GalleryDesign } from "@/content/site";
import { Button } from "@/components/ui/button";

type GalleryGridProps = {
  designs: GalleryDesign[];
  onSelect: (index: number) => void;
};

function GalleryPhoto({ src, alt, eager }: { src: string; alt: string; eager: boolean }) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <span className="gallery-photo">
      {loaded ? null : <span className="gallery-photo-skeleton" aria-hidden />}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        className={loaded ? "is-loaded" : undefined}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 100vw"
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth > 0) setLoaded(true);
        }}
      />
    </span>
  );
}

export function GalleryGrid({ designs, onSelect }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {designs.map((design, index) => (
        <article className="gallery-item" key={design.id}>
          <Button
            variant="ghost"
            className="gallery-image-button relative !block aspect-square !h-auto w-full overflow-hidden !p-0"
            aria-label={`View ${design.title}`}
            onClick={() => onSelect(index)}
          >
            <GalleryPhoto key={design.image} src={design.image} alt={design.alt} eager={index < 6} />
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
