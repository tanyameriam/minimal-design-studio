import type { BlockWidth, Figure as FigureData } from '@/data/caseStudies';
import Figure from './Figure';
import { useReveal } from '@/hooks/use-reveal';

interface BeforeAfterProps {
  before: FigureData;
  after: FigureData;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  width?: BlockWidth;
  onOpen?: (src: string, alt: string) => void;
}

const widthClass = (width?: BlockWidth) =>
  width === 'wide' ? 'block-wide' : width === 'full' ? 'block-full' : '';

/**
 * A labelled comparison: two states side by side on desktop, stacked in
 * reading order on mobile, sharing one caption so the pair reads as a
 * single argument rather than two figures.
 */
const BeforeAfter = ({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption,
  width,
  onOpen,
}: BeforeAfterProps) => {
  const ref = useReveal<HTMLElement>();

  return (
    <figure ref={ref} className={`reveal ${widthClass(width)}`.trim()}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="label text-ink-400 mb-3">{beforeLabel}</p>
          <Figure src={before.src} alt={before.alt} caption={before.caption} onOpen={onOpen} />
        </div>
        <div>
          <p className="label text-ink-400 mb-3">{afterLabel}</p>
          <Figure src={after.src} alt={after.alt} caption={after.caption} onOpen={onOpen} />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">{caption}</figcaption>
      )}
    </figure>
  );
};

export default BeforeAfter;
