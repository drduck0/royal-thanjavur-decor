import type { TitleLine } from "@/content/site";
import { HeadlineLines } from "@/components/headline-lines";

type SectionIntroProps = {
  eyebrow: string;
  title: TitleLine[];
  description: string;
  titleId: string;
  eyebrowClassName?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  titleId,
  eyebrowClassName = "eyebrow text-primary",
}: SectionIntroProps) {
  return (
    <div className="section-heading">
      <div>
        <p className={eyebrowClassName}>{eyebrow}</p>
        <h2 id={titleId}>
          <HeadlineLines lines={title} />
        </h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
