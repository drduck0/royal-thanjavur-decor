import type { ReactNode } from "react";
import type { TitleLine } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";

type ContactCtaSectionProps = {
  id?: string;
  eyebrow: string;
  title: TitleLine[];
  description: string;
  titleId?: string;
  actions: ReactNode;
};

export function ContactCtaSection({
  id,
  eyebrow,
  title,
  description,
  titleId = "contact-title",
  actions,
}: ContactCtaSectionProps) {
  return (
    <section id={id} className="contact mt-12" aria-labelledby={titleId}>
      <div className="page-width">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>
          <HeadlineLines lines={title} />
        </h2>
        <p>{description}</p>
        {actions}
      </div>
    </section>
  );
}
