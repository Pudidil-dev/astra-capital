"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a numeric portion of a label string when the element
 * enters the viewport. Preserves prefix (e.g. "$") and suffix (e.g. "M+", "+").
 *
 * Examples:
 *   "$90M+"  -> animates 0..90, returns "$<n>M+"
 *   "25+"    -> animates 0..25, returns "<n>+"
 *   "18+"    -> animates 0..18, returns "<n>+"
 */
export function useCountUp(target: string, duration = 1400) {
  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  // Parse "$90M+" -> { prefix: "$", number: 90, suffix: "M+" }
  const match = target.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const finalNumber = match ? Number(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const isInteger = Number.isInteger(finalNumber);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) {
      setDisplay(target);
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(target);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - startTime) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            const current = finalNumber * eased;
            const formatted = isInteger
              ? Math.round(current).toString()
              : current.toFixed(1);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(target);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, finalNumber, isInteger, match, prefix, suffix]);

  return { ref, display };
}
