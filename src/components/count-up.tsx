import { useCountUp } from "@/hooks/use-count-up";

type CountUpProps = {
  value: number;
  suffix?: string;
  run: boolean;
  delayMs?: number;
};

export function CountUp({ value, suffix = "", run, delayMs = 0 }: CountUpProps) {
  const display = useCountUp(value, run, delayMs);

  return (
    <span className="count-up">
      <span className="celebration-stat-number">{display}</span>
      {suffix ? <span className="celebration-stat-suffix">{suffix}</span> : null}
    </span>
  );
}
