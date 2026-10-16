import { useEffect, type RefObject } from "react";
import { getGsap } from "@/lib/gsap";

/** GSAP hover on “What we specialise in” cards — kept outside scroll `gsap.context` so tweens are not reverted. */
export function useSpecialiseCardHover(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = sectionRef.current;
    const gsap = getGsap();
    if (!section || !gsap) return;

    if (!window.matchMedia("(hover: hover)").matches) return;

    const cards = gsap.utils.toArray<HTMLElement>(".service", section);
    if (cards.length === 0) return;

    section.classList.add("services-section--gsap-hover");

    const cleanups: (() => void)[] = [];
    const hoverEase = "power2.out";

    cards.forEach((card) => {
      const image = card.querySelector<HTMLElement>(".service-image img");
      if (!image) return;

      const scaleTo = gsap.quickTo(image, "scale", { duration: 0.55, ease: hoverEase });
      const liftTo = gsap.quickTo(card, "y", { duration: 0.45, ease: hoverEase });

      gsap.set(image, { transformOrigin: "center center", force3D: true });

      const onEnter = () => {
        scaleTo(1.07);
        liftTo(-6);
      };
      const onLeave = () => {
        scaleTo(1);
        liftTo(0);
      };

      card.addEventListener("pointerenter", onEnter);
      card.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => {
      section.classList.remove("services-section--gsap-hover");
      cleanups.forEach((fn) => fn());
      cards.forEach((card) => {
        gsap.killTweensOf(card);
        const image = card.querySelector(".service-image img");
        if (image) gsap.killTweensOf(image);
        gsap.set(card, { clearProps: "transform" });
        if (image) gsap.set(image, { clearProps: "transform" });
      });
    };
  }, [sectionRef]);
}
