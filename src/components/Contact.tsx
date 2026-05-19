import { ArrowUpRight, Users } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tanya-sunny/' },
  { name: 'Dribbble', url: 'https://dribbble.com/TanyaSunny' },
  { name: 'Behance', url: 'https://www.behance.net/tanyasunny' },
  { name: 'Medium', url: 'https://medium.com/@tanyameriamsunny' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 border-t-2 border-foreground">
      <div className="container mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          [ 03 ] — Contact
        </p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-12 max-w-5xl">
          Let's build
          <br />
          something <span className="text-primary">unmissable.</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanyameriamsunny@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-8 group brutal-card bg-secondary text-foreground p-8 md:p-10 flex items-center justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider mb-3">Email</p>
              <p className="font-display text-2xl md:text-4xl break-all">
                tanyameriamsunny@gmail.com
              </p>
            </div>
            <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="lg:col-span-4 brutal-card bg-primary text-primary-foreground p-8 flex flex-col justify-between">
            <div>
              <Users className="w-8 h-8 mb-4" />
              <h3 className="font-display text-xl uppercase leading-tight mb-2">
                Talks & Workshops
              </h3>
              <p className="text-sm leading-relaxed mb-4 opacity-90">
                I co-organise{' '}
                <a
                  href="https://www.linkedin.com/company/design-reimagined-utrecht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                >
                  Design Reimagined Utrecht
                </a>
                . Hosting designers in the Netherlands for case studies, sessions and workshops.
              </p>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tanyameriamsunny@gmail.com&su=Speaker%20Inquiry%20-%20Design%20Reimagined"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider underline underline-offset-4 hover:no-underline"
            >
              Pitch a talk →
            </a>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-foreground flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-tag hover:bg-foreground hover:text-background transition-colors"
              >
                {social.name} ↗
              </a>
            ))}
          </div>

          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            © 2026 Tanya Sunny — tanyasunny.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
