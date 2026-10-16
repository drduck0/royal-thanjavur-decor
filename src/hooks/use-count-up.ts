import { useEffect, useState } from "react";
import { canUseMotion } from "@/lib/gsap";

export const COUNT_UP_DURATION_MS = 1800;

export function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(value: number, run: boolean, delayMs = 0) {
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
      const t = Math.min(1, elapsed / COUNT_UP_DURATION_MS);
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

  return display;
}
