"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { GalleryDesign } from "@/content/site";
import { hero } from "@/content/site";
import { SiteImage } from "@/components/site-image";
import { canUseMotion } from "@/lib/gsap";

const defaultSlideshow = {
  intervalMs: 8000,
  crossfadeDurationMs: 1100,
};

function pickRandomIndex(length: number, exclude?: number) {
  if (length <= 0) return 0;
  if (length === 1) return 0;
  if (exclude === undefined) {
    return Math.floor(Math.random() * length);
  }
  let index = exclude;
  while (index === exclude) {
    index = Math.floor(Math.random() * length);
  }
  return index;
}

function slideAt(slides: GalleryDesign[], index: number): GalleryDesign {
  if (slides.length === 0) {
    return {
      id: "hero-fallback",
      title: hero.image.alt,
      category: "",
      image: hero.image.src,
      alt: hero.image.alt,
    };
  }
  const safe = ((index % slides.length) + slides.length) % slides.length;
  return slides[safe] ?? slides[0];
}

export function HeroGallerySlideshow() {
  const slideshow = hero.slideshow ?? defaultSlideshow;
  const { intervalMs, crossfadeDurationMs } = slideshow;

  const [slides, setSlides] = useState<GalleryDesign[]>([]);
  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(0);
  const [activeIsA, setActiveIsA] = useState(true);
  const [ready, setReady] = useState(false);
  const slideStateRef = useRef({ activeIsA, indexA, indexB, slidesLength: 0 });
  slideStateRef.current = { activeIsA, indexA, indexB, slidesLength: slides.length };

  useEffect(() => {
    let cancelled = false;

    void import("@/content/gallery-catalog").then((mod) => {
      if (cancelled) return;
      const list = mod.galleryDesigns.filter((item) => Boolean(item?.image));
      const start = list.length > 0 ? pickRandomIndex(list.length) : 0;
      setSlides(list);
      setIndexA(start);
      setIndexB(start);
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready || slides.length <= 1 || !canUseMotion()) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const advance = () => {
      const { activeIsA: isA, indexA: a, indexB: b, slidesLength } = slideStateRef.current;
      if (slidesLength <= 1) return;
      const current = isA ? a : b;
      const next = pickRandomIndex(slidesLength, current);
      if (isA) {
        setIndexB(next);
        setActiveIsA(false);
      } else {
        setIndexA(next);
        setActiveIsA(true);
      }
      timeoutId = setTimeout(advance, intervalMs);
    };

    timeoutId = setTimeout(advance, intervalMs);
    return () => clearTimeout(timeoutId);
  }, [ready, slides.length, intervalMs]);

  const crossfadeStyle = {
    "--hero-crossfade-ms": `${crossfadeDurationMs}ms`,
  } as CSSProperties;

  if (!ready) {
    return <div className="hero-photo-stack hero-photo-stack--loading" aria-hidden />;
  }

  if (slides.length === 0) {
    return (
      <SiteImage
        src={hero.image.src}
        className="hero-photo"
        alt=""
        width={1024}
        height={580}
        priority
        sizes="100vw"
      />
    );
  }

  const slideA = slideAt(slides, indexA);
  const slideB = slideAt(slides, indexB);
  const motionEnabled = canUseMotion() && slides.length > 1;

  if (!motionEnabled) {
    return (
      <SiteImage
        src={slideA.image}
        className="hero-photo"
        alt=""
        width={1024}
        height={580}
        priority
        sizes="100vw"
      />
    );
  }

  return (
    <div className="hero-photo-stack" style={crossfadeStyle} aria-hidden>
      <SiteImage
        src={slideA.image}
        className={activeIsA ? "hero-photo hero-photo--active" : "hero-photo hero-photo--inactive"}
        alt=""
        width={1024}
        height={580}
        priority={activeIsA}
        sizes="100vw"
      />
      <SiteImage
        src={slideB.image}
        className={activeIsA ? "hero-photo hero-photo--inactive" : "hero-photo hero-photo--active"}
        alt=""
        width={1024}
        height={580}
        sizes="100vw"
      />
    </div>
  );
}
