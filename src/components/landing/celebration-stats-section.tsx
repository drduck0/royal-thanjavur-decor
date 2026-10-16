import { CountUp } from "@/components/count-up";
import { useAnimateWhenInView } from "@/hooks/use-animate-when-in-view";
import { celebrationStats } from "@/content/site";
import { homeSectionIds } from "@/lib/routes";

const STAGGER_MS = 120;

type CelebrationStatProps = {
  label: string;
  value: number;
  suffix: string;
  delayMs: number;
  run: boolean;
  showOnMobile?: boolean;
};

function CelebrationStat({
  label,
  value,
  suffix,
  delayMs,
  run,
  showOnMobile,
}: CelebrationStatProps) {
  return (
    <li
      className={
        showOnMobile === false
          ? "celebration-stat celebration-stat--desktop-only"
          : "celebration-stat"
      }
    >
      <p className="celebration-stat-value">
        <CountUp value={value} suffix={suffix} run={run} delayMs={delayMs} />
      </p>
      <p className="celebration-stat-label">{label}</p>
    </li>
  );
}

type CelebrationStatsSectionProps = {
  /** Renders at the foot of `.hero-viewport` (first screen with the hero). */
  pinToHeroViewport?: boolean;
};

export function CelebrationStatsSection({
  pinToHeroViewport = false,
}: CelebrationStatsSectionProps) {
  const { ref: sectionRef, animate: inViewAnimate } = useAnimateWhenInView<HTMLElement>();
  const animate = pinToHeroViewport ? true : inViewAnimate;

  return (
    <section
      ref={pinToHeroViewport ? undefined : sectionRef}
      id={homeSectionIds.stats}
      className={
        pinToHeroViewport
          ? "celebration-stats-section celebration-stats-section--hero-viewport"
          : "celebration-stats-section"
      }
      aria-label={celebrationStats.ariaLabel}
    >
      <div className="page-width celebration-stats-section__inner">
        <ul className="celebration-stats">
          {celebrationStats.items.map((item, index) => (
            <CelebrationStat
              key={item.label}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              delayMs={index * STAGGER_MS}
              run={animate}
              {...(item.showOnMobile === false ? { showOnMobile: false } : {})}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
