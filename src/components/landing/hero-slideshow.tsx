"use client";

import { useEffect, useRef, useState } from "react";
import { galleryDesigns } from "@/content/gallery-catalog";
import { hero } from "@/content/site";

const intervalMs = hero.slideshowIntervalMs;
const fadeMs = hero.slideshowFadeMs;
const opening = hero.image.src;

const slides = galleryDesigns
  .filter((design) => design.category !== "Birthday Events" && Boolean(design.image))
  .map((design) => design.image);

const pool = slides.length > 0 ? slides : [opening];

function pickRandomIndex(length: number, exclude?: number) {
  if (length <= 1) return 0;
  if (exclude === undefined) return Math.floor(Math.random() * length);
  let index = exclude;
  while (index === exclude) {
    index = Math.floor(Math.random() * length);
  }
  return index;
}

function preload(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export function HeroSlideshow() {
  const [layerA, setLayerA] = useState(opening);
  const [layerB, setLayerB] = useState(opening);
  const [activeIsA, setActiveIsA] = useState(true);
  const indexRef = useRef(Math.max(0, pool.indexOf(opening)));
  const activeIsARef = useRef(true);

  useEffect(() => {
    if (pool.length < 2) return;

    let cancelled = false;
    let queued = pickRandomIndex(pool.length, indexRef.current);
    let queuedReady = preload(pool[queued]);

    const showNext = async () => {
      await queuedReady;
      if (cancelled) return;
      const nextSrc = pool[queued];
      indexRef.current = queued;
      if (activeIsARef.current) {
        setLayerB(nextSrc);
        setActiveIsA(false);
        activeIsARef.current = false;
      } else {
        setLayerA(nextSrc);
        setActiveIsA(true);
        activeIsARef.current = true;
      }
      queued = pickRandomIndex(pool.length, queued);
      queuedReady = preload(pool[queued]);
    };

    const timer = window.setInterval(() => {
      void showNext();
    }, intervalMs);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="hero-photo" aria-hidden>
      <img
        src={layerA}
        alt=""
        className={activeIsA ? "hero-photo-layer is-active" : "hero-photo-layer"}
        style={{ transitionDuration: `${fadeMs}ms` }}
        fetchPriority="high"
        decoding="async"
      />
      <img
        src={layerB}
        alt=""
        className={activeIsA ? "hero-photo-layer" : "hero-photo-layer is-active"}
        style={{ transitionDuration: `${fadeMs}ms` }}
        decoding="async"
      />
    </div>
  );
}
