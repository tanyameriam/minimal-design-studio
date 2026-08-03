import { useEffect, useRef } from 'react';

/**
 * Reveals an element once, when it first enters the viewport.
 * Sets data-shown on the node; the .reveal class in index.css does the rest.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = '-8% 0px') {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      node.setAttribute('data-shown', 'true');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-shown', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
