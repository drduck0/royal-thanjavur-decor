import type { ComponentProps } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type SiteDialogContentProps = ComponentProps<typeof DialogContent>;

export function SiteDialogContent({ className, ...props }: SiteDialogContentProps) {
  return (
    <DialogContent
      className={cn("max-h-[90dvh] overflow-y-auto max-w-[calc(100%-32px)]", className)}
      {...props}
    />
  );
}
