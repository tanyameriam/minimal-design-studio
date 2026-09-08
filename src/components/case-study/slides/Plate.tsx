import { useReveal } from '@/hooks/use-reveal';
import FadeInImage from '@/components/FadeInImage';
import type { ReactNode } from 'react';

/**
 * A real artefact placed in a slide narrative: screenshot, wireframe board,
 * research wall. Quiet frame, small caption, click to enlarge.
 *
 * This is the shared version of the plate the EducAItors study grew. Most of
 * what these pages show is a wide Figma board shrunk into a text column, so
 * the frame does two things beyond drawing a border: it reserves the box from
 * the intrinsic pixel size, so a long page does not jump as images arrive,
 * and it says out loud that the thing can be opened, since on a phone that is
 * the only way to actually read one.
 *
 * Size carries meaning here. A plate at full column width is the page
 * claiming this artefact is worth stopping on; a `dense` plate beside prose
 * is the page saying this is supporting evidence, look if you want it. The
 * shipped product runs full width, the exploration behind it runs dense.
 */

export type OpenFigure = (src: string, alt: string) => void;

interface PlateProps {
  src: string;
  alt: string;
  /** Intrinsic pixel size. Reserves the box so the page does not shift. */
  width: number;
  height: number;
  label?: string;
  caption?: ReactNode;
  onOpen?: OpenFigure;
  className?: string;
  /** Above-the-fold plates load eagerly; everything else waits. */
  priority?: boolean;
  /**
   * Supporting size: caption drops to a label and the enlarge hint is
   * dropped, because the block around a dense plate carries the prose and
   * says once that these open.
   */
  dense?: boolean;
}

export const Plate = ({
  src,
  alt,
  width,
  height,
  label,
  caption,
  onOpen,
  className = '',
  priority = false,
  dense = false,
}: PlateProps) => {
  const ref = useReveal<HTMLElement>();

  const image = (
    <FadeInImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      className="w-full"
    />
  );

  return (
    <figure ref={ref} className={`reveal ${className}`}>
      {label && <p className="label mb-3 text-ink-500">{label}</p>}
      {onOpen ? (
        <button
          type="button"
          onClick={() => onOpen(src, alt)}
          aria-label={`Enlarge: ${alt}`}
          className="block w-full cursor-zoom-in overflow-hidden rounded-[var(--radius)] border border-border bg-card"
        >
          {image}
        </button>
      ) : (
        <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-card">
          {image}
        </div>
      )}
      {caption &&
        (dense ? (
          <figcaption className="label mt-3 text-ink-500">{caption}</figcaption>
        ) : (
          <figcaption className="mt-3 max-w-[68ch] text-sm leading-[1.55] text-ink-500">
            {caption}
            {onOpen && (
              <span className="label mt-3 block text-ink-500">Open full size to read it</span>
            )}
          </figcaption>
        ))}
      {!caption && !dense && onOpen && (
        <figcaption className="label mt-3 text-ink-500">Open full size to read it</figcaption>
      )}
    </figure>
  );
};

/**
 * Artefacts set beside their explanation rather than under it.
 *
 * Used where the reading is the point and the picture is the evidence: a
 * research wall, the exploration behind a shipped screen, an old product
 * shown for the record. The prose column is deliberately narrow and the
 * media column wide, so this never reads as a two-column article.
 */
export const PlateAside = ({
  label,
  children,
  media,
  flip = false,
  className = '',
}: {
  label?: string;
  /** The prose that sits beside the artefact. */
  children: ReactNode;
  /** One `Plate`, or a `PlatePair` of them. */
  media: ReactNode;
  /** Prose on the right instead of the left. */
  flip?: boolean;
  className?: string;
}) => (
  <div
    className={`grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.55fr)] lg:gap-12 ${className}`}
  >
    <div className={flip ? 'lg:order-2' : ''}>
      {label && <p className="label-strong mb-5">{label}</p>}
      <div className="max-w-[44ch] space-y-4 text-base leading-[1.6] text-ink-600">{children}</div>
    </div>
    <div className={flip ? 'lg:order-1' : ''}>{media}</div>
  </div>
);

/**
 * Two dense plates side by side. Stacks on phones, where a pair of
 * half-width screenshots would be two unreadable strips.
 */
export const PlatePair = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">{children}</div>
);
