import { useEffect, type RefObject } from "react";
import { getGsap } from "@/lib/gsap";

export function useLandingMotion(scopeRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = scopeRef.current;
    const gsap = getGsap();
    if (!root || !gsap) return;

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      gsap.from(".hero-photo", {
        scale: 1.1,
        duration: 3.2,
        ease: "power2.out",
      });

      const heroTimeline = gsap.timeline({ defaults: { ease } });
      heroTimeline
        .from(".hero .eyebrow", { y: 32, opacity: 0, duration: 1.05 })
        .from(".hero h1", { y: 48, opacity: 0, duration: 1.35 }, "-=0.55")
        .from(".hero-description", { y: 32, opacity: 0, duration: 1.1 }, "-=0.75")
        .from(".hero-gallery-cta", { y: 24, opacity: 0, duration: 0.95 }, "-=0.65");

      gsap.from(".site-header-1--contact", {
        y: -20,
        opacity: 0,
        duration: 0.95,
        ease,
      });
      gsap.from(".site-header.page-width", {
        y: -16,
        opacity: 0,
        duration: 1,
        delay: 0.12,
        ease,
      });

      gsap.utils.toArray<HTMLElement>(".motion-section", root).forEach((section) => {
        const heading = section.querySelector(".section-heading");
        if (heading) {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
              once: true,
            },
            y: 52,
            opacity: 0,
            duration: 1.15,
            ease,
            clearProps: "transform,opacity",
          });
        }
      });

      const statsRow = root.querySelector(".celebration-stats");
      if (statsRow) {
        const stats = gsap.utils.toArray<HTMLElement>(".celebration-stat", statsRow);
        gsap.from(stats, {
          scrollTrigger: {
            trigger: statsRow,
            start: "top 88%",
            once: true,
          },
          y: 24,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease,
          clearProps: "transform,opacity",
        });
      }

      const storyInner = root.querySelector(".story-inner");
      if (storyInner) {
        const storyUsesVerticalMotion = window.matchMedia(
          "(max-width: 640px)",
        ).matches;
        gsap.from(".story-photo", {
          scrollTrigger: {
            trigger: storyInner,
            start: "top 78%",
            once: true,
          },
          x: storyUsesVerticalMotion ? 0 : -48,
          y: storyUsesVerticalMotion ? 36 : 0,
          opacity: 0,
          duration: 1.25,
          ease,
          clearProps: "transform,opacity",
        });
        gsap.from(".story-inner > div", {
          scrollTrigger: {
            trigger: storyInner,
            start: "top 78%",
            once: true,
          },
          x: storyUsesVerticalMotion ? 0 : 48,
          y: storyUsesVerticalMotion ? 28 : 0,
          opacity: 0,
          duration: 1.25,
          ease,
          clearProps: "transform,opacity",
        });
      }

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 82%",
          toggleActions: "play none none none",
        },
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease,
      });

      gsap.from(".contact .page-width > *", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease,
      });

      gsap.to(".hero-photo", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-viewport",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [scopeRef]);
}
