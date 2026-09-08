import { Link } from 'react-router-dom';

/**
 * The masthead. One column, read straight down: availability, who I am, the
 * standfirst, what I am open to, and the two ways on.
 *
 * It used to be three columns. The middle one, cashing the statement out into
 * Workflow / Systems / Interaction, moved into the section directly below,
 * and the right-hand column came down here rather than sitting beside the
 * headline, so the opening reads as one statement instead of three parallel
 * ones competing for the same glance.
 *
 * Deliberately shorter than a viewport. The philosophy has to be followed
 * immediately by evidence, so the rail below and the top of the first project
 * sit inside the first screen rather than a scroll below it. That constraint
 * is what sets the headline size: it is the largest thing on the page, but
 * not so large that a recruiter has to scroll to find a project.
 */
const Hero = () => (
  <section id="hero" className="px-5 pb-12 pt-24 md:px-8 md:pb-14 md:pt-32 lg:px-12 lg:pb-16">
    {/* Location moved into the standfirst, so it no longer sits here too. */}
    <p className="reveal label flex items-center gap-2.5 text-ink-500" data-shown="true">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      Available for work
    </p>

    <h1
      className="reveal mt-7 max-w-[22ch] font-medium leading-[0.98] md:mt-9"
      style={{
        fontSize: 'clamp(2.25rem, 4.1vw + 0.7rem, 4.75rem)',
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

    <p
      className="reveal mt-6 max-w-[58ch] text-lg leading-snug text-ink-600 md:mt-7"
      style={{ transitionDelay: '120ms' }}
      data-shown="true"
    >
      5 years designing products. Now advocating for Human-Centered AI in the automation era.
      Based in Utrecht, Netherlands.
    </p>

    <p
      className="reveal mt-7 max-w-[40ch] text-base leading-snug text-ink-600 md:mt-8"
      style={{ transitionDelay: '160ms' }}
      data-shown="true"
    >
      Open to medior to senior product-design roles.
    </p>

    {/* Side by side now that they sit in the reading column rather than a rail. */}
    <div
      className="reveal mt-7 flex flex-wrap items-center gap-x-10 gap-y-4 md:mt-8"
      style={{ transitionDelay: '200ms' }}
      data-shown="true"
    >
      <Link
        to="/cv"
        className="rule-link group inline-flex items-center gap-2.5 text-lg text-link"
      >
        View CV
        <span
          aria-hidden="true"
          className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </Link>
      <a
        href="#contact"
        className="rule-link group inline-flex items-center gap-2.5 text-lg text-link"
      >
        Let&rsquo;s talk
        <span
          aria-hidden="true"
          className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </a>
    </div>
  </section>
);

export default Hero;
