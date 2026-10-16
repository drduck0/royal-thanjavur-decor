import type { TitleLine } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";
import { cn } from "@/lib/utils";

/** Left-aligned section label: gold rule before, uppercase (About, Specialise, Reviews, etc.). */
export const sectionEyebrowClassName = "eyebrow eyebrow--section text-foreground";

/** Playfair, centered, gold rule below (e.g. special works). */
export const centeredSectionEyebrowClassName =
  "eyebrow eyebrow--centered text-primary text-3xl";

type SectionIntroProps = {
  eyebrow: string;
  title: TitleLine[];
  description: string;
  titleId: string;
  eyebrowClassName?: string;
  titleCountRun?: boolean;
  centeredEyebrow?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  titleId,
  eyebrowClassName,
  titleCountRun = false,
  centeredEyebrow = false,
}: SectionIntroProps) {
  const eyebrowClass =
    eyebrowClassName ??
    (centeredEyebrow ? centeredSectionEyebrowClassName : sectionEyebrowClassName);

  return (
    <div className={cn("section-heading", centeredEyebrow && "section-heading--centered")}>
      <div>
        <p className={eyebrowClass}>{eyebrow}</p>
        {title.length > 0 ? (
          <h2 id={titleId}>
            <HeadlineLines lines={title} countRun={titleCountRun} />
          </h2>
        ) : null}
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
