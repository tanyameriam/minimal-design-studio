import { useReveal } from '@/hooks/use-reveal';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tanya-sunny/' },
  { name: 'Medium', url: 'https://medium.com/@tanyameriamsunny' },
  { name: 'Dribbble', url: 'https://dribbble.com/TanyaSunny' },
  { name: 'Behance', url: 'https://www.behance.net/tanyasunny' },
];

const MAIL = 'mailto:tanyameriamsunny@gmail.com';

const Contact = () => {
  const ref = useReveal<HTMLElement>();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" ref={ref} className="reveal px-6 md:px-10 lg:px-16 pb-16">
      <div className="mx-auto max-w-3xl border-t border-border pt-10 md:pt-14">
        <h2 className="text-3xl md:text-5xl max-w-[18ch]">
          Let&rsquo;s connect. I&rsquo;m always up for a{' '}
          <span className="em-serif">chat</span>.
        </h2>

        <a
          href={MAIL}
          className="group mt-8 inline-flex items-center gap-3 text-lg md:text-xl rule-link"
        >
          tanyameriamsunny@gmail.com
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </a>

        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-500">
          I co-organise Design Reimagined Utrecht. If you would like to speak at a
          session,{' '}
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
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-500 transition-colors hover:text-foreground rule-link"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="label text-ink-400">&copy; {year} Tanya Sunny</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
