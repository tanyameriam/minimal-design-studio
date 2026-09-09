import type { ImgHTMLAttributes, SVGProps } from 'react';
import rudolf from '@/assets/rudolf.png';

/**
 * Rudolf, the Layrrrd hound.
 *
 * He is the connective tissue of the brand: mascot, narrator, loading
 * character, chat persona and pacing device. On this page he also marks
 * progress through the nine days, which is why he is a component rather
 * than an image dropped into a few slots.
 *
 * The poses used to be line-drawn stand-ins in `currentColor`, waiting for
 * the artwork to be exported from the brand file. It has been, so the
 * character now renders the real mark. Every call site passed only
 * `className` and `aria-hidden`, which is why nothing else had to change.
 *
 * The case study no longer shows him at all: the mascot is argued for there
 * in words and in product stills, not illustrated. What is left is the
 * homepage cover and the paw.
 *
 * The paw is still drawn. It is a marker rather than a portrait, it has to
 * stay legible at 16px along the sprint rail where a whole dog is a smudge,
 * and it takes the ink of whatever it sits in.
 */

type PoseProps = ImgHTMLAttributes<HTMLImageElement>;

/** The mascot, as exported from the brand file. */
const Pose = ({ className = '', ...props }: PoseProps) => (
  <img
    src={rudolf}
    alt=""
    width={149}
    height={123}
    loading="lazy"
    decoding="async"
    className={className}
    {...props}
  />
);

/** Sitting, upright, attentive. The listening pose. */
export const RudolfSitting = (props: PoseProps) => <Pose {...props} />;

/**
 * A paw print. Rudolf's other mark, and the one that scales down: it is
 * still legible at 16px, where a whole dog is a smudge. Used along the
 * sprint line and as the head of the progress rail.
 */
export const RudolfPaw = ({ className = '', ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 44 46" aria-hidden="true" className={className} {...props}>
    <g fill="currentColor" stroke="none">
      <circle cx="8" cy="20" r="5" />
      <circle cx="17" cy="11" r="5.2" />
      <circle cx="28" cy="11" r="5.2" />
      <circle cx="37" cy="20" r="5" />
      <path d="M22 20c7 0 13 5 14 11 1 6-4 10-14 10S7 37 8 31c1-6 7-11 14-11Z" />
    </g>
  </svg>
);
