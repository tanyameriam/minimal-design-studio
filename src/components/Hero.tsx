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
 * see it. It sits in the masthead now as a small round avatar beside the
 * greeting, the way a person introduces themselves, rather than as a large
 * tilting panel competing with the statement. Everything is centred: the
 * greeting with the face, the statement under it, then the sentence and the
 * two ways on.
 *
 * LESS TEXT. Four text blocks became two. The separate line about which
 * roles she is open to folded into the standfirst, where it was always the
 * same sentence. One statement, one sentence under it, two ways on.
 *
 * Still deliberately shorter than a viewport: the philosophy has to be
 * followed immediately by evidence, so the top of the first project sits
 * inside the first screen.
 */

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

const Hero = () => (
  <section
    id="hero"
    className="hero-field relative px-gutter pb-break pt-[clamp(6.5rem,min(5rem+2vw,13vh),8.5rem)]"
  >
    <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
      <p className="reveal label flex items-center gap-2.5 text-ink-500" data-shown="true">
        {/* The one moving dot on the page, and the reason the status
            line reads as current rather than as a claim left up. */}
        <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
          <span className="hero-ping absolute inline-flex h-full w-full rounded-full bg-accent" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Available for work
      </p>

      {/* The greeting, with the face beside it as a small avatar. */}
      <p
        className="reveal mt-6 flex items-center gap-3 text-lg text-foreground md:text-xl"
        style={{ transitionDelay: '60ms' }}
        data-shown="true"
      >
        <img
          src="/tanya-portrait.jpg"
          alt="Tanya smiling in round goggles and a dark jacket."
          width={1200}
          height={1600}
          sizes="2.75rem"
          fetchPriority="high"
          decoding="async"
          className="h-10 w-10 shrink-0 rounded-full object-cover object-[50%_25%] ring-1 ring-border grayscale-[0.85] contrast-[0.95] brightness-[0.95] md:h-11 md:w-11"
        />
        Hi, I&rsquo;m Tanya
      </p>

      <h1
        className="reveal mt-5 max-w-[20ch] font-medium leading-[0.98] md:mt-6"
        style={{
          fontSize: 'clamp(2.25rem, 3.3vw + 0.7rem, 4rem)',
          letterSpacing: '-0.035em',
          transitionDelay: '100ms',
        }}
        data-shown="true"
      >
        Product Designer for human-centered experiences
        <span aria-hidden="true" className="text-accent">
          .
        </span>
      </h1>

      {/* One sentence, where there used to be two paragraphs. */}
      <p
        className="reveal mt-5 max-w-[46ch] text-xl leading-[1.45] text-ink-600"
        style={{ transitionDelay: '160ms' }}
        data-shown="true"
      >
        Five years designing products, now advocating for human-centered AI in the automation era.
        Based in Utrecht, open to medior and senior product-design roles.
      </p>

      <div
        className="reveal mt-7 flex flex-wrap items-center justify-center gap-3"
        style={{ transitionDelay: '220ms' }}
        data-shown="true"
      >
        <Cta to="#work" primary>
          Explore my work
        </Cta>
        <Cta to="/cv">View CV</Cta>
      </div>
    </div>
  </section>
);

export default Hero;
