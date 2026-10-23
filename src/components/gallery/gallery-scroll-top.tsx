"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gallerySection } from "@/content/site";

const showAfterPx = 480;

export function GalleryScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfterPx);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={visible ? "gallery-scroll-top is-visible" : "gallery-scroll-top"}
      aria-label={gallerySection.scrollTopLabel}
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }}
    >
      <ArrowUp aria-hidden size={20} />
    </button>
  );
}
