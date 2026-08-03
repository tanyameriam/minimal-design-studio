import { useState } from 'react';
import type { Figure as FigureData } from '@/data/caseStudies';
import { useReveal } from '@/hooks/use-reveal';

interface FigureProps extends FigureData {
  onOpen?: (src: string, alt: string) => void;
}

const Figure = ({ src, alt, caption, reveal, onOpen }: FigureProps) => {
  const ref = useReveal<HTMLElement>();
  const [shown, setShown] = useState(!reveal);

  return (
    <figure ref={ref} className="reveal">
      {shown ? (
        <>
          <button
            type="button"
            onClick={() => onOpen?.(src, alt)}
            className="block w-full cursor-zoom-in border border-border bg-card"
            aria-label={`Enlarge: ${alt}`}
          >
            <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full" />
          </button>
          {(caption || reveal) && (
            <figcaption className="mt-3 flex items-start justify-between gap-6 text-sm leading-relaxed text-ink-500">
              <span>{caption}</span>
              {reveal && (
                <button
                  type="button"
                  onClick={() => setShown(false)}
                  className="label rule-link shrink-0 text-ink-400"
                >
                  Hide
                </button>
              )}
            </figcaption>
          )}
        </>
      ) : (
        /* Collapsed. Dense diagrams stay out of the reading column until asked for. */
        <button
          type="button"
          onClick={() => setShown(true)}
          aria-expanded={false}
          className="group flex w-full items-center justify-between gap-6 border border-border bg-card px-5 py-4 text-left transition-colors hover:bg-muted"
        >
          <span>
            <span className="label text-ink-400 mb-2 block">Diagram</span>
            <span className="text-base leading-snug">{caption ?? alt}</span>
          </span>
          <span className="label shrink-0 text-ink-500">
            Open
            <span
              aria-hidden="true"
              className="ml-2 inline-block transition-transform duration-500 ease-smooth group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </span>
        </button>
      )}
    </figure>
  );
};

export default Figure;
