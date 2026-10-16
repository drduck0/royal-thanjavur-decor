import { ArrowLeft, ArrowRight } from "lucide-react";
import type { GalleryDesign } from "@/content/site";
import { SiteImage } from "@/components/site-image";
import { SiteDialogContent } from "@/components/layout/site-dialog-content";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type GalleryLightboxProps = {
  design: GalleryDesign | undefined;
  index: number | null;
  total: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function GalleryLightbox({
  design,
  index,
  total,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  return (
    <Dialog
      open={design !== undefined}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <SiteDialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">{design?.title}</DialogTitle>
          <DialogDescription>
            {design?.category} · Illustrative decoration inspiration
          </DialogDescription>
        </DialogHeader>
        {design && (
          <SiteImage
            src={design.image}
            alt={design.alt}
            width={1024}
            height={1024}
            className="gallery-lightbox-image"
            loading="eager"
          />
        )}
        <div className="gallery-lightbox-controls">
          <Button
            variant="outline"
            size="icon"
            title="Previous image"
            aria-label="Previous image"
            disabled={total < 2}
            onClick={onPrevious}
          >
            <ArrowLeft />
          </Button>
          <span className="text-xs text-muted-foreground">
            {index === null ? 0 : index + 1} / {total}
          </span>
          <Button
            variant="outline"
            size="icon"
            title="Next image"
            aria-label="Next image"
            disabled={total < 2}
            onClick={onNext}
          >
            <ArrowRight />
          </Button>
        </div>
      </SiteDialogContent>
    </Dialog>
  );
}
