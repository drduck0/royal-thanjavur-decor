import { useEffect, type RefObject } from "react";
import { getGsap } from "@/lib/gsap";

export function useGalleryMotion(scopeRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = scopeRef.current;
    const gsap = getGsap();
    if (!root || !gsap) return;

    const ctx = gsap.context(() => {
      const ease = "power3.out";
      gsap.from(".gallery-intro .eyebrow", { y: 20, opacity: 0, duration: 0.55, ease });
      gsap.from(".gallery-intro h1", { y: 36, opacity: 0, duration: 0.8, delay: 0.1, ease });
      gsap.from(".gallery-intro p:not(.eyebrow)", {
        y: 24,
        opacity: 0,
        duration: 0.65,
        delay: 0.2,
        ease,
      });

      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease,
      });
    }, root);

    return () => ctx.revert();
  }, [scopeRef]);
}
