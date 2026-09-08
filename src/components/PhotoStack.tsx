import type { CSSProperties, ReactNode } from 'react';

/**
 * A project visual presented as a stack of pages on the journal grid: the
 * cover sits square and two more pages from the same case study fan out
 * behind it. Hovering opens the fan.
 *
 * Offsets are fixed per position rather than random, so the stack looks the
 * same on every render. They are passed as custom properties so the hover
 * state can scale them without restating each value.
 */
const FAN = [
  { rotate: -3.5, x: -8, y: 6 },
  { rotate: 2.5, x: 9, y: 3 },
];

interface PhotoStackProps {
  /** Edge-only backing pages. Two is the sweet spot; more reads as clutter. */
  stack?: string[];
  /** The cover, or the deck panel for a project whose cover is still owed. */
  children: ReactNode;
}

const PhotoStack = ({ stack = [], children }: PhotoStackProps) => (
  <div className="group/stack relative w-full max-w-sm self-start">
    {stack.slice(0, 2).map((src, i) => (
      <img
        key={src}
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={
          {
            '--r': `${FAN[i].rotate}deg`,
            '--x': `${FAN[i].x}px`,
            '--y': `${FAN[i].y}px`,
            zIndex: i + 1,
          } as CSSProperties
        }
        className="absolute inset-0 h-full w-full rounded-2xl border border-border bg-card object-cover transition-transform duration-500 ease-smooth [transform:rotate(var(--r))_translate(var(--x),var(--y))] group-hover/stack:[transform:rotate(calc(var(--r)*1.5))_translate(calc(var(--x)*1.6),calc(var(--y)*1.5))]"
      />
    ))}

    {/* The cover. Sits above the fan and carries the link and the alt text. */}
    <div className="relative z-10 transition-transform duration-500 ease-smooth group-hover/stack:-translate-y-1">
      {children}
    </div>
  </div>
);

export default PhotoStack;
