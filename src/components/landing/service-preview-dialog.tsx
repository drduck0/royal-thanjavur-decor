import { servicesSection, type ServiceItem } from "@/content/site";
import { SiteImage } from "@/components/site-image";
import { SiteDialogContent } from "@/components/layout/site-dialog-content";
import { Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type ServicePreviewDialogProps = {
  service: ServiceItem | null;
  onClose: () => void;
};

export function ServicePreviewDialog({ service, onClose }: ServicePreviewDialogProps) {
  return (
    <Dialog
      open={Boolean(service)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <SiteDialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl">{service?.title}</DialogTitle>
          <DialogDescription>{servicesSection.previewDescription}</DialogDescription>
        </DialogHeader>
        {service && (
          <SiteImage
            src={service.image}
            alt={`${service.title} — preview`}
            width={1024}
            height={1024}
            className="w-full max-h-[55dvh] object-cover"
            loading="eager"
          />
        )}
      </SiteDialogContent>
    </Dialog>
  );
}
