import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * The masthead.
 *
 * The previous version was one column of left-aligned text on flat ground:
 * a status line, a headline, two paragraphs, two links. Everything it said
 * was true and it was reported as reading like a wireframe, which is fair.
 * Nothing on it had a surface, a depth or a face, so the first screen of a
 * designer's portfolio was set entirely in the default state of the design
 * system it was meant to be demonstrating.
 *
 * Three things changed.
 *
 * LIFE. There is now a ground to stand on: a slow aurora of the accent and
 * the link at very low opacity, drifting behind the type (see `.hero-field`
 * in index.css). It is the only ambient motion on the site and it is the
 * only place the two signal colours are allowed to meet, because here they
 * are light rather than instructions. Under prefers-reduced-motion it stops
 * and stays as a static wash.
 *
 * A FACE. The portrait was on /about and nowhere a first-time visitor would
 * see it. It sits in the masthead now, in a panel that tilts very slightly
 * and straightens when the pointer is near it, so the first screen responds
 * to being looked at.
 *
 * LESS TEXT. Four text blocks became two. The separate line about which
 * roles she is open to folded into the standfirst, where it was always the
 * same sentence, and the practices moved down to the strip that already
 * names them. One statement, one sentence under it, two ways on.
 *
 * Still deliberately shorter than a viewport: the philosophy has to be
 * followed immediately by evidence, so the strip below and the top of the
 * first project sit inside the first screen.
 */

/**
 * The portrait's response to the pointer.
 *
 * A few degrees of tilt, driven from the pointer's position over the frame
 * and written to custom properties so the transform itself stays in CSS.
 * Deliberately tiny: the point is that the surface is aware of the cursor,
 * not that it performs. Skipped entirely on coarse pointers and under
 * reduced motion, where the frame simply sits still.
 */
const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || still) return;

    let frame = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = el.getBoundingClientRect();
        // -1 to 1 across each axis, clamped so a pointer far from the frame
        // does not keep pushing the tilt further.
        const x = Math.max(-1, Math.min(1, (e.clientX - (box.left + box.width / 2)) / box.width));
        const y = Math.max(-1, Math.min(1, (e.clientY - (box.top + box.height / 2)) / box.height));
        el.style.setProperty('--tilt-x', `${(-y * 3.5).toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${(x * 4.5).toFixed(2)}deg`);
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return ref;
};

/** The two ways on: the work first, the CV second. */
const Cta = ({
  to,
  children,
  primary = false,
}: {
  to: string;
  children: string;
  primary?: boolean;
}) => {
  const shared =
    'group inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-base transition-colors duration-300';
  const arrow = (
    <span
      aria-hidden="true"
      className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
    >
      &rarr;
    </span>
  );

  // Internal routes get a Link; the contact anchor stays an anchor so it
  // scrolls rather than re-entering the router.
  const look = primary
    ? 'bg-foreground text-background hover:bg-foreground/90'
    : 'panel-chip text-foreground hover:bg-foreground hover:text-background';

  return to.startsWith('#') ? (
    <a href={to} className={`${shared} ${look}`}>
      {children}
      {arrow}
    </a>
  ) : (
    <Link to={to} className={`${shared} ${look}`}>
      {children}
      {arrow}
    </Link>
  );
};

const Hero = () => {
  const portrait = useTilt();

  return (
    <section
      id="hero"
      className="hero-field relative px-gutter pb-break pt-[clamp(6.5rem,min(5rem+2vw,13vh),8.5rem)]"
    >
      {/*
        The statement and the face, side by side from lg. Below that the
        portrait follows the text rather than preceding it: on a phone the
        first thing in the viewport should be the sentence, not the picture.
        The ground keeps the first screen from reading as a wireframe on a
        phone even before the portrait is scrolled to.
      */}
      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,17rem)]">
        <div>
          <p className="reveal label flex items-center gap-2.5 text-ink-500" data-shown="true">
            {/* The one moving dot on the page, and the reason the status
                line reads as current rather than as a claim left up. */}
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="hero-ping absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for work
          </p>

          <h1
            className="reveal mt-5 max-w-[19ch] font-medium leading-[0.98] md:mt-6"
            style={{
              fontSize: 'clamp(2.25rem, 3.3vw + 0.7rem, 4rem)',
              letterSpacing: '-0.035em',
              transitionDelay: '80ms',
            }}
            data-shown="true"
          >
            Hi, I&rsquo;m Tanya. Product Designer for human-centered experiences
            <span aria-hidden="true" className="text-accent">
              .
            </span>
          </h1>

          {/* One sentence, where there used to be two paragraphs. */}
          <p
            className="reveal mt-5 max-w-[46ch] text-xl leading-[1.45] text-ink-600"
            style={{ transitionDelay: '140ms' }}
            data-shown="true"
          >
            Five years designing products, now advocating for human-centered AI in the automation
            era. Based in Utrecht, open to medior and senior product-design roles.
          </p>

          <div
            className="reveal mt-7 flex flex-wrap items-center gap-3"
            style={{ transitionDelay: '200ms' }}
            data-shown="true"
          >
            <Cta to="#work" primary>
              Explore my work
            </Cta>
            <Cta to="/cv">View CV</Cta>
          </div>
        </div>

        {/*
          The portrait. A panel rather than a bare image, so it belongs to
          the same surface language as everything below it. Kept small, with
          no glow and its colour muted, so it introduces the work instead of
          competing with it.
        */}
        <div
          ref={portrait}
          className="reveal hero-portrait relative mx-auto w-full max-w-[12rem] sm:max-w-[14rem] lg:mx-0 lg:max-w-none"
          style={{ transitionDelay: '260ms' }}
          data-shown="true"
        >
          <div className="panel overflow-hidden shadow-md">
            <img
              src="/tanya-portrait.jpg"
              alt="Tanya smiling in round goggles and a dark jacket, shown with a painterly photo filter."
              width={1200}
              height={1600}
              sizes="(min-width: 1280px) 17rem, (min-width: 1024px) 15rem, 14rem"
              fetchPriority="high"
              decoding="async"
              className="aspect-[3/4] w-full object-cover grayscale-[0.85] contrast-[0.95] brightness-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
