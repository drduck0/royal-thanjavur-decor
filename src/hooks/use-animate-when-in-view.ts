import { useEffect, useRef, useState } from "react";
import { canUseMotion } from "@/lib/gsap";

type UseAnimateWhenInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useAnimateWhenInView<T extends HTMLElement>(
  options: UseAnimateWhenInViewOptions = {},
) {
  const { threshold = 0.25, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, animate };
}
