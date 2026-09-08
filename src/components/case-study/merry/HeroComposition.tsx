import FadeInImage from '@/components/FadeInImage';
import { useReveal } from '@/hooks/use-reveal';
import dashboard from '@/assets/merry-hifi-dashboard.png';
import tracking from '@/assets/merry-hifi-tracking.png';
import patient from '@/assets/merry-whatsapp-patient.png';

/**
 * The hero visual: the operations dashboard, a live ride, and the message
 * a family gets, overlapping in one composition.
 *
 * The project's own cover asset is the Merry Health logo on white, which
 * says nothing about the work. This says the whole thing at a glance:
 * dispatch, tracking, and the channel it all still runs on.
 *
 * The three frames are positioned as percentages inside a fixed-ratio box,
 * so the composition holds its shape at every width. Below `sm` it unstacks
 * into a plain grid, because overlapping panels at 360px means three
 * illegible thumbnails.
 */
export const HeroComposition = ({ className = '' }: { className?: string }) => {
  const ref = useReveal<HTMLDivElement>('-4% 0px');

  const frames = [
    { src: dashboard, alt: 'The redesigned Merry Health operations dashboard, showing active rides, quick actions and the ride list' },
    { src: tracking, alt: 'The live ride view, showing current status, ETA, trip timeline and patient details' },
    { src: patient, alt: 'A WhatsApp thread where a patient party receives the driver details, ETA and a tracking link' },
  ];

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {/* Small screens: no overlap, just the three surfaces. */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        <div className="col-span-2 overflow-hidden border border-border bg-card">
          <FadeInImage src={frames[0].src} alt={frames[0].alt} className="w-full" />
        </div>
        <div className="overflow-hidden border border-border bg-card">
          <FadeInImage src={frames[1].src} alt={frames[1].alt} className="w-full" />
        </div>
        <div className="overflow-hidden border border-border bg-card">
          <FadeInImage src={frames[2].src} alt={frames[2].alt} className="w-full" />
        </div>
      </div>

      <div className="relative hidden aspect-[4/3.2] w-full sm:block">
        {/* Operations dashboard. The ground the other two sit on. */}
        <figure className="absolute left-0 top-0 aspect-[16/11] w-[78%] overflow-hidden border border-border bg-card">
          <FadeInImage
            src={frames[0].src}
            alt={frames[0].alt}
            className="h-full w-full object-cover object-top"
          />
        </figure>

        {/* One live ride, over the corner of the dashboard. */}
        <figure className="absolute bottom-[4%] right-0 aspect-[4/5] w-[44%] overflow-hidden border border-border bg-card">
          <FadeInImage
            src={frames[1].src}
            alt={frames[1].alt}
            className="h-full w-full object-cover object-top"
          />
        </figure>

        {/* The channel the family is actually on. */}
        <figure className="absolute bottom-0 left-[6%] aspect-[9/16] w-[19%] overflow-hidden border border-border bg-card">
          <FadeInImage
            src={frames[2].src}
            alt={frames[2].alt}
            className="h-full w-full object-cover object-top"
          />
        </figure>
      </div>

      <p className="label mt-6 text-ink-500">
        Operations dashboard &middot; Live ride &middot; Patient updates
      </p>
    </div>
  );
};

export default HeroComposition;
