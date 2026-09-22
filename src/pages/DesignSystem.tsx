import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useReveal } from '@/hooks/use-reveal';
import {
  editorialRules,
  inkScale,
  measures,
  motion,
  signals,
  spacing,
  surfaces,
  typeRoles,
} from '@/design/system';

/**
 * The design language, on a page.
 *
 * Two reasons this exists rather than living in a Figma file or a comment.
 *
 * The first is practical. Five case studies had each grown their own set of
 * primitives, and there was no page you could point at to settle an argument
 * about which size a caption is. Now there is, and it is rendered from
 * src/design/system.ts, which is the same module the components read, so the
 * documentation cannot quietly drift away from the site.
 *
 * The second is that a design system is itself a piece of a product
 * designer's work, and this one has a point of view worth showing: the rules
 * that matter here are mostly editorial rather than visual. Which colour the
 * accent is has never been the problem with this portfolio. How many things
 * are allowed to be loud on one screen is.
 *
 * The page is deliberately set with its own medicine: one reading measure,
 * hairlines instead of cards, one thing per section.
 */

/** A section of the system. Same construction as an essay's, on purpose. */
const Band = ({
  id,
  title,
  lede,
  children,
}: {
  id: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className="reveal mt-stage scroll-mt-28 border-t border-border pt-8 md:pt-10"
    >
      <h2 className="text-3xl leading-[1.1] md:text-4xl">{title}</h2>
      <p className="mt-5 max-w-[52ch] text-xl leading-[1.45] text-ink-600">{lede}</p>
      <div className="mt-10">{children}</div>
    </section>
  );
};

/** One row of a specification table: what it is called, and what it is for. */
const Spec = ({
  name,
  meta,
  use,
  children,
}: {
  name: string;
  /** The class or token, set in mono so it can be copied by eye. */
  meta: string;
  use: string;
  /** The specimen, where the thing can be shown rather than described. */
  children?: React.ReactNode;
}) => (
  <div className="grid gap-x-10 gap-y-4 border-t border-border py-7 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]">
    <div>
      <p className="em text-lg leading-tight">{name}</p>
      <p className="label mt-2 break-words text-ink-400">{meta}</p>
    </div>
    <div>
      {children}
      <p className={`max-w-[58ch] text-base leading-[1.5] text-ink-500 ${children ? 'mt-5' : ''}`}>
        {use}
      </p>
    </div>
  </div>
);

/** A colour, painted from its own token so the swatch cannot go stale. */
const Swatch = ({ token }: { token: string }) => (
  <span
    aria-hidden="true"
    className="block h-12 w-12 shrink-0 rounded-md border border-border"
    style={{ backgroundColor: `hsl(var(${token}))` }}
  />
);

const DesignSystem = () => {
  usePageMeta(
    'Design system',
    'The design language behind this portfolio: type roles, ink scale, surfaces, spacing, and the editorial rules that decide what is allowed to be loud.'
  );

  return (
    <>
      <Navigation />

      <main id="main" className="min-h-screen bg-background">
        <article className="overflow-x-clip px-gutter pb-24 pt-masthead">
          <div className="mx-auto max-w-3xl">
            <p className="label-strong">Design system</p>

            <h1 className="mt-6 max-w-[18ch] text-4xl leading-[1.05] md:text-5xl">
              The language this portfolio is set in
              <span aria-hidden="true" className="text-accent">
                .
              </span>
            </h1>

            <p className="mt-7 max-w-[54ch] text-xl leading-[1.45] text-ink-600">
              One palette, seven type roles, five steps of ink, four surfaces, two signal colours,
              and eight rules about what is allowed to be loud. The rules are the part that does
              the work.
            </p>

            <p className="mt-6 max-w-[58ch] text-lg leading-[1.65] text-ink-800">
              Everything below is rendered from the same module the site&rsquo;s components read, so
              a swatch here is the colour a page actually paints. Where a rule is stated, it is
              stated as a constraint rather than as a principle, because a principle cannot be
              broken and a constraint can.
            </p>

            <Band
              id="rules"
              title="The rules"
              lede="The part of a system that is not a token, and the part that decides how the site feels. Each of these came out of a real piece of feedback on this portfolio."
            >
              <ol className="grid gap-0">
                {editorialRules.map((rule, i) => (
                  <li
                    key={rule.rule}
                    className="grid gap-x-8 gap-y-3 border-t border-border py-7 lg:grid-cols-[3rem_minmax(0,1fr)]"
                  >
                    <span className="label tabular-nums text-ink-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="max-w-[30ch] text-2xl leading-[1.2]">{rule.rule}</p>
                      <p className="mt-4 max-w-[58ch] text-base leading-[1.55] text-ink-500">
                        {rule.because}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Band>

            <Band
              id="type"
              title="Type"
              lede="Seven roles, and no eighth without a reason. A page that needs a distinction these do not carry is usually making a distinction the reader cannot see."
            >
              {typeRoles.map((role) => (
                <Spec key={role.name} name={role.name} meta={role.className} use={role.use}>
                  <p className={`max-w-[34ch] ${role.className}`}>{role.specimen}</p>
                </Spec>
              ))}
            </Band>

            <Band
              id="ink"
              title="Ink"
              lede="Hierarchy and nothing else. Text drops a step only when it is genuinely subordinate to the step above it."
            >
              {inkScale.map((step) => (
                <Spec key={step.name} name={step.name} meta={step.token} use={step.use}>
                  <span
                    className="text-lg leading-snug"
                    style={{ color: `hsl(var(${step.token}))` }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </Spec>
              ))}
            </Band>

            <Band
              id="surfaces"
              title="Surfaces"
              lede="The site is dark, with no light mode. A panel earns its place by grouping something; one that is only there to hold a paragraph is a box drawn around a sentence."
            >
              {surfaces.map((surface) => (
                <Spec key={surface.name} name={surface.name} meta={surface.token} use={surface.use}>
                  <Swatch token={surface.token} />
                </Spec>
              ))}
            </Band>

            <Band
              id="signal"
              title="Signal"
              lede="Two colours that mean something, and one standing rule: never in the same view. Emphasis and action look like the same instruction at a glance."
            >
              {signals.map((signal) => (
                <Spec key={signal.name} name={signal.name} meta={signal.token} use={signal.use}>
                  <Swatch token={signal.token} />
                </Spec>
              ))}
            </Band>

            <Band
              id="measure"
              title="Measure and rhythm"
              lede="The strongest control the site has over feeling texty. A paragraph's difficulty is set by its line length far more than by its word count."
            >
              {measures.map((m) => (
                <Spec key={m.name} name={m.name} meta={m.value} use={m.use} />
              ))}
              {spacing.map((s) => (
                <Spec key={s.name} name={s.name} meta={s.value} use={s.use} />
              ))}
            </Band>

            <Band
              id="motion"
              title="Motion"
              lede={motion.rule}
            >
              {motion.durations.map((d) => (
                <Spec key={d.name} name={d.name} meta={`${d.value} · ${motion.ease}`} use={d.use} />
              ))}
            </Band>
          </div>
        </article>
      </main>

      <Contact />
    </>
  );
};

export default DesignSystem;
