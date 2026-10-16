import { useSyncExternalStore } from "react";

function subscribeMaxWidth(query: string, onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getMaxWidthSnapshot(query: string) {
  return window.matchMedia(query).matches;
}

/** `true` when the viewport width is at most `maxWidthPx` (matches `styles.css` mobile breakpoint). */
export function useMaxWidth(maxWidthPx: number) {
  const query = `(max-width: ${maxWidthPx}px)`;
  return useSyncExternalStore(
    (onStoreChange) => subscribeMaxWidth(query, onStoreChange),
    () => getMaxWidthSnapshot(query),
    () => false,
  );
}
