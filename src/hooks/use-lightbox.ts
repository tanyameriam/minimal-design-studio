import { useCallback, useState } from 'react';

export interface LightboxFigure {
  src: string;
  alt: string;
}

/**
 * Owns the figure a case study currently has open. Kept out of the
 * Lightbox component so a page can also read the state, which the
 * data-driven study does to stop its arrow-key navigation firing while a
 * figure is up.
 */
export function useLightbox() {
  const [figure, setFigure] = useState<LightboxFigure | null>(null);
  const open = useCallback((src: string, alt: string) => setFigure({ src, alt }), []);
  const close = useCallback(() => setFigure(null), []);
  return { figure, open, close };
}
