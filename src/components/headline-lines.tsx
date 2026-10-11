import type { TitleLine } from "@/content/site";

export function HeadlineLines({ lines }: { lines: TitleLine[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {line.accent ? <em>{line.text}</em> : line.text}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}
