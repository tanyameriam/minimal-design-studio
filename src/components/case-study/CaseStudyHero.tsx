import FadeInImage from '@/components/FadeInImage';
import { useReveal } from '@/hooks/use-reveal';

interface CaseStudyHeroProps {
  src: string;
  alt: string;
}

/**
 * The case's opening visual, wider than the reading column.
 * Scenery rather than evidence, so no lightbox.
 */
const CaseStudyHero = ({ src, alt }: CaseStudyHeroProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal block-wide mt-12">
      <FadeInImage
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="w-full border border-border bg-card"
      />
    </div>
  );
};

export default CaseStudyHero;
