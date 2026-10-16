import { CountUp } from "@/components/count-up";
import type { TitleLine } from "@/content/site";

type HeadlineLinesProps = {
  lines: TitleLine[];
  /** When true, lines with `animatedValue` run the celebration-stats count-up. */
  countRun?: boolean;
};

export function HeadlineLines({ lines, countRun = false }: HeadlineLinesProps) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {line.animatedValue != null ? (
            <>
              <CountUp
                value={line.animatedValue}
                suffix={line.animatedSuffix ?? ""}
                run={countRun}
              />
              {line.text}
            </>
          ) : line.accent ? (
            <em>{line.text}</em>
          ) : (
            line.text
          )}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}
