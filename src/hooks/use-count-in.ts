import { useEffect, useRef, useState } from 'react';

/**
 * Counts a number in once, the first time it scrolls into view, then leaves
 * it alone. Used for the headline metrics in the BrynQ narrative, where the
 * jump from months to weeks is the point and deserves a beat of attention.
 *
 * Reduced motion, or a browser without IntersectionObserver, gets the final
 * value immediately.
 */
export function useCountIn(target: number, duration = 900) {
  const ref = useRef<HTMLSpanElement>(null);
  // Starts at the final value, not at zero. The first painted frame, the
  // markup a crawler reads, and anything that never runs the effect all show
  // the real number; the animation resets to zero only once it is certain it
  // is going to run.
  const [value, setValue] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setValue(target);
      return;
    }

    // Committed to animating: wind back to zero, then count in on view.
    setValue(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;
          started.current = true;
          observer.disconnect();

          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            // Ease out cubic: fast arrival, soft landing.
            setValue(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}
