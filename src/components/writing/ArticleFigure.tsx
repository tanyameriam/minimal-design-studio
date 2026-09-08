import type { ArticleFigure as FigureData } from '@/data/writing';
import FadeInImage from '@/components/FadeInImage';
import { useReveal } from '@/hooks/use-reveal';

interface ArticleFigureProps {
  figure: FigureData;
  /** Breaks the figure out of the reading column. Diagrams need the width. */
  wide?: boolean;
  onOpen?: (src: string, alt: string) => void;
}

/**
 * A process visual, in one of two states.
 *
 * When the export exists it renders as an image that opens full size, the
 * same behaviour as a case-study figure: these are dense workflow diagrams
 * and a diagram scaled to a reading column is a diagram nobody can read.
 *
 * Until then it renders as a reserved frame carrying the caption and the
 * filename the export has to arrive under. That is deliberately not a grey
 * box with a broken-image icon and it is deliberately not stock imagery:
 * the essays argue from process evidence, so a missing piece of evidence
 * should read as missing, at the size it will eventually occupy.
 */
const ArticleFigure = ({ figure, wide, onOpen }: ArticleFigureProps) => {
  const ref = useReveal<HTMLElement>();
  const { src, alt, caption, asset, width, height } = figure;

  return (
    <figure ref={ref} className={`reveal my-12 md:my-16 ${wide ? 'lg:block-wide' : ''}`}>
      {src ? (
        <button
          type="button"
          onClick={() => onOpen?.(src, alt)}
          aria-label={`Enlarge: ${alt}`}
          className="block w-full cursor-zoom-in border border-border bg-card"
        >
          <FadeInImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </button>
      ) : (
        /*
         * Deliberately short. Reserving the export's full height would put a
         * screen-tall void in the middle of an essay three times over, which
         * reads as a broken page rather than as an honest gap. The slot says
         * what is missing and under what name, and the caption below it
         * carries the point the figure would make, so the argument survives
         * the absence.
         */
        <div className="flex w-full flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border border-dashed border-border bg-card px-6 py-7 md:px-8">
          <p className="label text-ink-500">Figure to come</p>
          <p className="font-mono text-sm text-ink-500">{asset}</p>
        </div>
      )}
      <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500">
        {caption}
      </figcaption>
    </figure>
  );
};

export default ArticleFigure;
