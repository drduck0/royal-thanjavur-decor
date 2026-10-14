import { useEffect, useRef, useState } from "react";
import { celebrationStats } from "@/content/site";
import { canUseMotion } from "@/lib/gsap";
import { homeSectionIds } from "@/lib/routes";

const COUNT_DURATION_MS = 1800;
const STAGGER_MS = 120;

type CelebrationStatProps = {
  label: string;
  value: number;
  suffix: string;
  delayMs: number;
  run: boolean;
  showOnMobile?: boolean;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function CelebrationStat({
  label,
  value,
  suffix,
  delayMs,
  run,
  showOnMobile,
}: CelebrationStatProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) {
      setDisplay(0);
      return;
    }

    if (!canUseMotion()) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;
    let delayTimer: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / COUNT_DURATION_MS);
      setDisplay(Math.round(value * easeOutCubic(t)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    delayTimer = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      clearTimeout(delayTimer);
      cancelAnimationFrame(frame);
    };
  }, [run, value, delayMs]);

  return (
    <li
      className={
        showOnMobile === false
          ? "celebration-stat celebration-stat--desktop-only"
          : "celebration-stat"
      }
    >
      <p className="celebration-stat-value">
        <span className="celebration-stat-number">{display}</span>
        <span className="celebration-stat-suffix">{suffix}</span>
      </p>
      <p className="celebration-stat-label">{label}</p>
    </li>
  );
}

export function CelebrationStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!canUseMotion()) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        setAnimate(true);
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={homeSectionIds.stats}
      className="celebration-stats-section"
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
