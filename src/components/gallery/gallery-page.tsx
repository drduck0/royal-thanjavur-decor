import { useRef, useState } from "react";
import { useGalleryMotion } from "@/hooks/use-gallery-motion";
import { SiteFooter } from "@/components";
import { SitePageHeader } from "@/components/layout/site-page-header";
import { ContactCtaSection } from "@/components/layout/contact-cta-section";
import { HeadlineLines } from "@/components/headline-lines";
import { galleryContact, gallerySection } from "@/content/site";
import { PlanEventCtaButton } from "@/components/plan-event-cta-button";
import { Button } from "@/components/ui/button";
import { GalleryGrid } from "./gallery-grid";
import { GalleryLightbox } from "./gallery-lightbox";

export function GalleryPage() {
  const mainRef = useRef<HTMLElement>(null);
  useGalleryMotion(mainRef);
  const categories = [gallerySection.allLabel, ...gallerySection.categories];
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState<number | null>(null);
  const visible = gallerySection.designs.filter(
    (design) => category === categories[0] || design.category === category,
  );
  const current = selected === null ? undefined : visible[selected];

  return (
    <>
      <SitePageHeader variant="gallery" />
      <main ref={mainRef} id="main-content" aria-label="Decoration gallery">
        <section className="gallery-intro" aria-labelledby="gallery-page-title">
          <div className="page-width">
            <p className="eyebrow text-gold">{gallerySection.eyebrow}</p>
            <h1 id="gallery-page-title">
              <HeadlineLines lines={gallerySection.title} />
            </h1>
            <p>{gallerySection.description}</p>
          </div>
        </section>
        <section className="page-width" aria-label="Decoration gallery">
          <div className="gallery-toolbar" role="group" aria-label="Filter decorations">
            {categories.map((item) => (
              <Button
                key={item}
                variant={category === item ? "royal" : "outline"}
                size="sm"
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  setSelected(null);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
          <GalleryGrid key={category} designs={visible} onSelect={setSelected} />
        </section>
        <ContactCtaSection
          eyebrow={galleryContact.eyebrow}
          title={galleryContact.title}
          description={galleryContact.description}
          titleId="gallery-contact-title"
          actions={<PlanEventCtaButton className="h-12 px-7 text-xs" />}
        />
      </main>
      <SiteFooter />
      <GalleryLightbox
        design={current}
        index={selected}
        total={visible.length}
        onClose={() => setSelected(null)}
        onPrevious={() =>
          setSelected((value) =>
            value === null ? 0 : (value + visible.length - 1) % visible.length,
          )
        }
        onNext={() => setSelected((value) => (value === null ? 0 : (value + 1) % visible.length))}
      />
    </>
  );
}
