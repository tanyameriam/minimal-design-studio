import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import FadeInImage from '@/components/FadeInImage';

/**
 * An artefact with numbered callouts on it.
 *
 * The pattern this replaces is a screenshot followed by a paragraph saying
 * what to look at, which asks the reader to hold a description in their head
 * while hunting for the thing being described. Numbering the spots and
 * putting the note under the marker closes that gap.
 *
 * Every note is also rendered as an ordinary ordered list under the image.
 * That is not a fallback, it is the primary content: the markers are a
 * convenience for a sighted reader with a pointer, and the list is what
 * survives a screen reader, a printed page, and an image that fails to load.
 * Selecting a marker highlights its entry in the list rather than hiding the
 * others, so nothing is ever behind an interaction.
 */

export interface Callout {
  /** Horizontal position on the image, as a percentage from the left. */
  x: number;
  /** Vertical position on the image, as a percentage from the top. */
  y: number;
  title: string;
  body: ReactNode;
}

export const Annotated = ({
  src,
  alt,
  notes,
  className = '',
}: {
  src: string;
  alt: string;
  notes: Callout[];
  className?: string;
}) => {
  const [active, setActive] = useState<number | null>(null);
  const id = useId();

  return (
    <div className={className}>
      <div className="panel relative overflow-hidden">
        <FadeInImage src={src} alt={alt} className="w-full" />

        {notes.map((note, i) => {
          const isActive = active === i;

          return (
            <button
              key={note.title}
              type="button"
              onClick={() => setActive(isActive ? null : i)}
              aria-expanded={isActive}
              aria-controls={`${id}-note-${i}`}
              aria-label={`Callout ${i + 1}: ${note.title}`}
              style={{ left: `${note.x}%`, top: `${note.y}%` }}
              className={`absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-sm font-medium tabular-nums shadow-md transition-transform duration-300 ease-smooth hover:scale-110 ${
                isActive
                  ? 'scale-110 bg-foreground text-background'
                  : 'bg-accent text-accent-foreground'
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {notes.map((note, i) => {
          const isActive = active === i;

          return (
            <li
              key={note.title}
              id={`${id}-note-${i}`}
              // Hovering the written note lights its marker too, so the link
              // between the two reads in both directions.
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`panel flex gap-3 p-4 transition-shadow ${
                isActive ? 'shadow-lg' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-medium tabular-nums ${
                  isActive ? 'bg-foreground text-background' : 'bg-accent text-accent-foreground'
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-base leading-snug text-ink-800">{note.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-ink-500">{note.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

/**
 * The recurring beat of a research-led case study: what we found, and what we
 * did about it, set side by side so the second is visibly answerable to the
 * first.
 *
 * Kept as one component rather than two loose columns because the pairing is
 * the argument. A finding with no consequence is trivia, and a decision with
 * no finding behind it is taste.
 */
export const InsightSolution = ({
  insight,
  solution,
}: {
  insight: ReactNode;
  solution: ReactNode;
}) => (
  <div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2">
    <div className="panel p-6 md:p-7">
      <p className="label text-ink-500">What we found</p>
      <p className="mt-4 text-lg leading-snug text-ink-800 md:text-xl">{insight}</p>
    </div>

    <div className="panel p-6 md:p-7">
      <p className="label text-ink-500">What we did</p>
      <p className="mt-4 text-lg leading-snug text-ink-800 md:text-xl">{solution}</p>
    </div>
  </div>
);
