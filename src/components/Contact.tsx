import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/use-reveal';

/**
 * The links a recruiter actually needs, in the order they need them. The
 * visual-portfolio profiles sit a step below on purpose: they are galleries,
 * and this portfolio's argument is not a gallery.
 */
const secondary = [
  { name: 'Medium', url: 'https://medium.com/@tanyameriamsunny' },
  { name: 'Dribbble', url: 'https://dribbble.com/TanyaSunny' },
  { name: 'Behance', url: 'https://www.behance.net/tanyasunny' },
];

const LINKEDIN = 'https://www.linkedin.com/in/tanya-sunny/';

const EMAIL = 'tanyameriamsunny@gmail.com';
const MAIL = `mailto:${EMAIL}`;

const Contact = () => {
  const ref = useReveal<HTMLElement>();
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number>();

  useEffect(() => () => window.clearTimeout(copiedTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable: the mailto link next to this still works.
    }
  };

  return (
    <footer id="contact" ref={ref} className="reveal shell scroll-mt-24 px-gutter pb-16">
      <div className="border-t border-border pt-break">
        <h2 className="max-w-[18ch] text-5xl">
          Let&rsquo;s connect. I&rsquo;m always up for a{' '}
          <span className="em">chat</span>.
        </h2>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <a
            href={MAIL}
            className="rule-link group inline-flex items-center gap-3 break-all text-lg md:text-xl"
          >
            {EMAIL}
            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-live="polite"
            className="label rule-link text-ink-500 hover:text-foreground"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* The other two things a hiring reader wants, at the same weight. */}
        <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="rule-link text-lg text-ink-600 transition-colors hover:text-foreground"
          >
            LinkedIn
            <span aria-hidden="true" className="ml-1 text-ink-400">
              &#8599;
            </span>
          </a>
          <Link
            to="/cv"
            className="rule-link text-lg text-ink-600 transition-colors hover:text-foreground"
          >
            CV
          </Link>
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-500">
          I help run Design Reimagined Utrecht, a meetup for designers. If you would like to give
          a talk,{' '}
          <a
            href="mailto:tanyameriamsunny@gmail.com?subject=Speaker%20Inquiry%2C%20Design%20Reimagined"
            className="text-ink-600 rule-link"
          >
            get in touch
          </a>
          .
        </p>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {/* The design language, for anyone reading the site as craft
                rather than as a list of projects. It sits here rather than
                in the nav because it is not one of the five paths a hiring
                reader is looking for. */}
            <Link
              to="/design-system"
              className="rule-link text-sm text-ink-500 transition-colors hover:text-foreground"
            >
              Design system
            </Link>
            {secondary.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-500 transition-colors hover:text-foreground rule-link"
              >
                {social.name}
                <span aria-hidden="true" className="ml-1 text-ink-400">
                  &#8599;
                </span>
              </a>
            ))}
          </div>
          <p className="label text-ink-500">&copy; {year} Tanya Sunny</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
