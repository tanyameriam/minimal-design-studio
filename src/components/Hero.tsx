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
 * NO FACE. The small round portrait beside the greeting came out; the
 * greeting stands on its own, centred above the statement.
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

/** What I practise, as tags. Part of the hero so they sit above the fold. */
const practice = ['Workflow design', 'Systems design', 'AI system design', 'Interaction design'];

/*
 * Above the fold on every screen. The section is one viewport tall, capped
 * at 46rem so a big monitor does not leave a band of empty space above the
 * text (the first projects peek in below instead), and the
 * type and the gaps between lines scale with the viewport's height as well
 * as its width, so a short laptop screen or a phone held sideways shrinks
 * the hero rather than pushing the CTAs and the tags below the fold.
 */
const gap = (min: number, vh: number, max: number) => ({
  marginTop: `clamp(${min}rem, ${vh}vh, ${max}rem)`,
});

const Hero = () => (
  <section
    id="hero"
    className="hero-field relative flex min-h-[min(100svh,46rem)] flex-col px-gutter pb-[clamp(1.25rem,4vh,3rem)] pt-[clamp(4.5rem,11vh,8.5rem)]"
  >
    <div className="relative mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center text-center">
      <p className="reveal label flex items-center gap-2.5 text-ink-500" data-shown="true">
        {/* The one moving dot on the page, and the reason the status
            line reads as current rather than as a claim left up. */}
        <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
          <span className="hero-ping absolute inline-flex h-full w-full rounded-full bg-accent" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Available for work
      </p>

      <p
        className="reveal text-foreground"
        style={{
          ...gap(0.75, 2.5, 1.5),
          fontSize: 'clamp(1rem, 2.4vh, 1.25rem)',
          transitionDelay: '60ms',
        }}
        data-shown="true"
      >
        Hi, I&rsquo;m Tanya
      </p>

      <h1
        className="reveal max-w-[20ch] font-medium leading-[0.98]"
        style={{
          ...gap(0.75, 2.5, 1.5),
          fontSize: 'clamp(2rem, min(3.3vw + 0.7rem, 7.2vh), 4rem)',
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
        className="reveal max-w-[46ch] leading-[1.45] text-ink-600"
        style={{
          ...gap(0.75, 2.5, 1.25),
          fontSize: 'clamp(1rem, min(1.2vw + 0.75rem, 2.6vh), 1.25rem)',
          transitionDelay: '160ms',
        }}
        data-shown="true"
      >
        Five years designing products, now advocating for human-centered AI in the automation era.
        Based in Utrecht, open to medior and senior product-design roles.
      </p>

      <div
        className="reveal flex flex-wrap items-center justify-center gap-3"
        style={{ ...gap(1, 3.5, 1.75), transitionDelay: '220ms' }}
        data-shown="true"
      >
        <Cta to="#work" primary>
          Explore my work
        </Cta>
        <Cta to="/cv">View CV</Cta>
      </div>
    </div>

    <ul
      aria-label="What I do"
      className="reveal relative mx-auto flex max-w-4xl flex-wrap justify-center gap-2"
      style={{ ...gap(1.25, 4, 3), transitionDelay: '280ms' }}
      data-shown="true"
    >
      {practice.map((label) => (
        <li key={label} className="label rounded-full border border-border px-3 py-1.5 text-ink-500">
          {label}
        </li>
      ))}
    </ul>
  </section>
);

export default Hero;
