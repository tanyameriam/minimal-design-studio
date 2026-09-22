import { useEffect } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import {
  ScrollCue,
  StudyOpening,
  Takeaway,
} from '@/components/case-study/slides/StudyOpening';
import {
  BarTrack,
  DataPanels,
  FigurePanel,
  PanelNote,
  RoleSplit,
} from '@/components/case-study/slides/DataPanels';
import Contact from '@/components/Contact';
import FadeInImage from '@/components/FadeInImage';
import { type Storyline } from '@/components/story/Storyline';
import { ReadingNav } from '@/design/ReadingNav';
import {
  Slide,
  Kicker,
  Headline,
  Lede,
  Statement,
  Pov,
  Evidence,
  Footnote,
} from '@/components/case-study/slides/Slide';
import {
  AxisPair,
  Cascade,
  Journey,
  Continuum,
  Count,
  CapacityYear,
  Ecosystem,
  Fan,
  HandoffChain,
  IaMap,
  IconList,
  Ladder,
  MappingCanvas,
  Metric,
  MiniFlow,
  NumberedFlow,
  PhaseTrack,
  Quote,
  Split,
  Stages,
  Zones,
} from '@/components/case-study/slides/diagrams';
import { Converge } from '@/components/case-study/slides/glyphs';
import {
  ColumnLabel,
  ConvergeFoot,
  IconRowCard,
  ProvideCard,
  StepCard,
  StepRail,
} from '@/components/case-study/slides/boards';
import {
  AlertTriangle,
  ArrowRight,
  Box,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  FileText,
  Fingerprint,
  KeyRound,
  Lightbulb,
  List,
  PlayCircle,
  Puzzle,
  Rocket,
  Route,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Table2,
  Tag,
  Target,
  TrendingUp,
  User,
  Users,
  Waypoints,
  Wrench,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/use-page-meta';
import { Plate, PlateAside, PlatePair } from '@/components/case-study/slides/Plate';
import Lightbox from '@/components/case-study/Lightbox';
import { useLightbox } from '@/hooks/use-lightbox';

import salureconnectDashboard from '@/assets/brynq/salureconnect-dashboard.png';
import salureconnectAdmin from '@/assets/brynq/salureconnect-admin.png';
import brynqCurrent from '@/assets/brynq/brynq-current.png';
import brynqDashboards from '@/assets/brynq/brynq-dashboards.png';
import aiConceptSketches from '@/assets/brynq/ai-concept-sketches.png';
import aiConceptFlow from '@/assets/brynq/ai-concept-flow.png';
import aiChatFrames from '@/assets/brynq/ai-chat-frames.png';
import aiChatSteps1 from '@/assets/brynq/ai-chat-steps-1.png';
import aiChatSteps2 from '@/assets/brynq/ai-chat-steps-2.png';
import aiChatSteps3 from '@/assets/brynq/ai-chat-steps-3.png';
import aiResearchSynthesis from '@/assets/brynq/ai-research-synthesis.png';
import guidedSetupWizard from '@/assets/brynq/guided-setup-wizard.png';
import templateConfigUi from '@/assets/brynq/template-config-ui.png';
import templateLibrary from '@/assets/brynq/template-library.png';
import templatePicker from '@/assets/brynq/template-picker.png';
import templateDetail from '@/assets/brynq/template-detail.png';
import scenarioFile from '@/assets/brynq/scenario-file.png';

/**
 * BrynQ, told as a sequence of slides rather than as an article.
 *
 * The page is built to be read at two speeds. Headlines, metrics and
 * diagrams carry the whole argument on their own, so a scan gets the story
 * in about a minute; the supporting copy underneath carries the reasoning
 * for anyone who wants it. Every slide alternates between the two voices
 * the project needs: what I noticed, and what it meant commercially.
 *
 * Structure: five chapters (Understand, Reframe, Explore, Productise, Scale)
 * told as one connected transformation, not five separate projects.
 *
 * ---------------------------------------------------------------------
 * PLACEHOLDERS TO REPLACE
 *
 * Artwork: every slot on this page is filled. There are no placeholders left,
 * and nothing here should ship as a dashed frame. If an artefact is ever
 * owed again, leave the block out rather than reserving space for it.
 *
 * Real artefacts wired in, all from src/assets/brynq, every one of them
 * openable in the lightbox because they are wide boards read in a text
 * column: the old SalureConnect dashboard and admin screens beside the
 * current BrynQ interfaces list (chapter 01), the concept sketches, concept
 * flow, chat frames, chat step sequence and research synthesis wall
 * (chapter 03), the guided setup wizard and template configuration boards,
 * the shipped template picker and template detail, and the template library
 * (chapter 04).
 *
 * Redactions applied to the source PNGs, originals kept outside the repo:
 * Qlik GUIDs and the logged-in user name on salureconnect-admin, the licence
 * figure on template-detail, and joke placeholder copy replaced with lorem
 * ipsum in the three ai-chat-steps frames.
 *
 * Unused so far: ai-schedule.png, brynq-splash.png.
 *
 * The chapter 01 IA slide carried a placeholder for wireframes drawn against
 * the corrected IA. Those wireframes do not exist, so the block was removed
 * rather than shipped empty: the slide argues on its IA map, its before-state
 * panel and its closing question.
 * ---------------------------------------------------------------------
 */

const Em = ({ children }: { children: ReactNode }) => <span className="em">{children}</span>;

/**
 * A block that reveals on its own, for beats too far down a tall section to
 * ride the slide's single observer.
 */
const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>('-15% 0px');
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

/*
 * The chapter 04 boards live in slides/boards.tsx, shared with the story
 * deck so the quick read and the long read stay visually one system.
 */

const storyline: Storyline = [
  {
    n: '00',
    name: 'Opening',
    slides: [
      { id: 'hero', title: 'BrynQ, and what changed' },
      { id: 'reframing', title: 'How the project changed' },
      { id: 'timeline', title: 'The five parts' },
    ],
  },
  {
    n: '01',
    name: 'Understand',
    target: 'ch-understand',
    slides: [
      { id: 'discovery', title: 'Many customers did not think they needed BrynQ' },
      { id: 'tension', title: 'What customers wanted, and what the business needed' },
      { id: 'ia', title: 'Sorting out what goes where' },
      { id: 'into-02', title: 'How does a connection really get made?' },
    ],
  },
  {
    n: '02',
    name: 'Rethink',
    target: 'ch-reframe',
    slides: [
      { id: 'journey', title: 'Following one connection from sale to launch' },
      { id: 'the-question', title: 'Connections were not made in BrynQ' },
      { id: 'artefact-scenario', title: 'The real work happened in a spreadsheet' },
      { id: 'behind', title: 'Looking behind the screens' },
      { id: 'hidden-asset', title: 'Know-how that nobody had built into the product' },
      { id: 'direction', title: 'From one-off work to reusable steps' },
      { id: 'into-explore', title: 'How much should customers do on their own?' },
    ],
  },
  {
    n: '03',
    name: 'Explore',
    target: 'ch-explore',
    slides: [
      { id: 'ai-concept', title: 'Could a chat set up a connection?' },
      { id: 'ai-interaction', title: 'How the chat actually works' },
      { id: 'ai-research', title: 'Easier did not mean customers wanted to do it all' },
      { id: 'ai-pivot', title: 'What the test taught us' },
    ],
  },
  {
    n: '04',
    name: 'Build it in',
    target: 'ch-productise',
    slides: [
      { id: 'from-ai-to-templates', title: 'From doing it alone to doing it with help' },
      { id: 'template-foundation', title: 'Do not rebuild what BrynQ already knows' },
      { id: 'template-model', title: 'How templates work' },
      { id: 'one-to-many', title: 'One template, many customers' },
      { id: 'delivery-impact', title: 'Months of setup become weeks' },
    ],
  },
  {
    n: '05',
    name: 'Grow',
    target: 'ch-scale',
    slides: [
      { id: 'why-it-matters', title: 'Why faster setup matters to the business' },
      { id: 'capacity', title: 'If 26 weeks becomes 2 weeks' },
      { id: 'business-model', title: 'From repeating the same work to building it once' },
      { id: 'as-a-designer', title: 'What this meant for me as a designer' },
      { id: 'learned', title: 'What I learned' },
      { id: 'recap', title: 'The story in fifteen lines' },
    ],
  },
];

/** Chapter divider. Short, symbolic, and the anchor the sticky nav jumps to. */
const ChapterOpen = ({
  id,
  n,
  name,
  title,
  question,
}: {
  id: string;
  n: string;
  name: string;
  title: string;
  question: string;
}) => (
  <Slide id={id} chapter={n} height="short" invert>
    <div>
      <p className="label text-ink-500">
        Project {n} · {title}
      </p>
      <h2 className="mt-7 text-[3rem] leading-none md:text-[6rem]">{name}</h2>
      <p className="mt-8 max-w-2xl text-lg leading-snug text-ink-600 md:text-2xl">{question}</p>
    </div>
  </Slide>
);

const BrynqCaseStudy = () => {
  usePageMeta(
    'BrynQ',
    'Helping businesses connect their HR and payroll systems on their own. Turning months of one-off setup work into ready-made templates.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Every artefact on this page is a wide board shrunk into a text column,
  // so each plate opens full size rather than asking anyone to squint.
  const { figure, open, close } = useLightbox();

  return (
    // No gutter reserved. The contents list floats in the left margin only
    // at 2xl, where the centred page was not using that space anyway, so the
    // reading column and the wide diagrams keep their full width at every
    // width instead of losing fifteen rems from 1280px up.
    <div>
      <Navigation />

      <main id="main" className="min-h-screen overflow-x-clip bg-background">
        {/* ============================ HERO ============================ */}
        {/*
          Sized to exactly one viewport, so the opening, what I did and the
          four numbers are all readable before anyone scrolls.

          Built as a plain section rather than a <Slide>, which is how the
          other case studies already open: Slide fixes its own vertical
          padding on an inner element that a className cannot reach, and this
          hero has to control its own height to make the fold.
        */}
        <section id="hero" className="relative flex min-h-[100svh] flex-col">
          <div className="mx-auto flex w-full max-w-[var(--shell)] flex-1 flex-col justify-center px-gutter pb-16 pt-masthead">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <StudyOpening
                slug="brynq"
                client="BrynQ · Software that connects business systems · 2023 to now"
                headline={
                  <>
                    Letting businesses <Em>connect their systems on their own.</Em>
                  </>
                }
                takeaways={{
                  problem:
                    'Connecting two systems needed a developer and a project manager, and a standard connection took about six months.',
                  did: 'I was asked to make the screens simpler. Instead, I turned the team’s know-how into ready-made templates.',
                  outcome:
                    'With templates, a standard connection should take about two weeks. This is our estimate, not yet measured with real customers.',
                }}
              />

              <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
                When I joined BrynQ, customers still needed developers and project managers to
                connect their systems for them. I started by making the product easier to use. Then
                I moved on to bigger questions: how connections get made, how the team’s know-how
                could become ready-made templates, and how customers could do more on their own
                while still getting help from real people when they wanted it.
              </p>

              <dl className="mt-10 grid max-w-3xl gap-x-10 gap-y-5 border-t border-border pt-6 sm:grid-cols-[auto_1fr]">
                <div>
                  <dt className="label mb-3 text-ink-500">Role</dt>
                  <dd className="text-base text-ink-600">Product Designer</dd>
                </div>
                <div>
                  <dt className="label mb-3 text-ink-500">Scope</dt>
                  <dd className="text-base leading-snug text-ink-600">
                    Research · Organising the product · Service design · How the work flows ·
                    Screen design · Product planning · Templates for setup
                  </dd>
                </div>
              </dl>
            </div>

            {/*
              One number carries the case: the implementation cycle. It gets
              the panel and the display size. The other three are derived
              from it or are testimony, so they sit under it as a quiet list
              rather than as three more panels of equal weight.
            */}
            <div className="lg:pt-16">
              <p className="label mb-5 text-ink-500">Design overview</p>
              <div className="panel p-6 md:p-7">
                <p className="mb-4 text-base text-ink-600 md:text-lg">Implementation cycle</p>
                <p className="text-[2.5rem] leading-none md:text-[3.25rem]">
                  ~6 mo <span className="text-ink-400">&rarr;</span> ~2 wk
                </p>
                <p className="mt-3 text-sm leading-snug text-ink-600">
                  To set up a standard connection
                </p>
              </div>

              <dl className="mt-6 divide-y divide-border border-y border-border">
                {[
                  {
                    figure: <Count to={92} suffix="%" prefix="~" />,
                    caption: 'Expected cut in the time it takes to set up',
                  },
                  {
                    figure: <Count to={13} prefix="~" suffix="×" />,
                    caption: 'Expected number of times more setups the same team can do',
                  },
                  {
                    figure: '2× easier',
                    caption: 'What the project manager told us after templates arrived',
                  },
                ].map(({ figure, caption }) => (
                  <div
                    key={caption}
                    className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-x-4 py-3.5"
                  >
                    <dt className="text-xl leading-none tabular-nums text-foreground">{figure}</dt>
                    <dd className="text-sm leading-snug text-ink-500">{caption}</dd>
                  </div>
                ))}
              </dl>

              <Footnote>
                The first three numbers are estimates. They are based on setup going from about 26
                weeks of one-off work to about 2 weeks with a template. The fourth is what the
                project manager told us.
              </Footnote>
            </div>
          </div>
          </div>

          <ScrollCue targetId="reframing" />
        </section>

        {/* Wayfinding starts once the hero is behind you. */}
        <ReadingNav chapters={storyline} />

        {/* ====================== THE CORE NARRATIVE ====================== */}
        <Slide id="reframing" height="auto">
          <Kicker label="How the project changed" />

          {/*
            Typography and whitespace rather than panels. The section argues a
            change of question, and three equal cards would have said the
            three beats were of equal weight, which is exactly wrong: the
            reframed question is the whole point and everything above it is
            the case for it.
          */}
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
            <div className="max-w-2xl space-y-6 text-lg leading-[1.55] text-ink-600 md:text-xl">
              <p>
                I joined BrynQ expecting to redesign a technical product.
              </p>
              <p>
                But when I talked to customers, I found a bigger problem: they were hardly using
                the product themselves.
              </p>
            </div>

            {/* The superseded brief. Struck, quiet, and out of the reading column. */}
            <div className="lg:pt-2">
              <p className="label-strong text-ink-500">The brief</p>
              <p className="mt-4 max-w-[22ch] text-[1.375rem] leading-tight text-ink-400 line-through decoration-1 md:text-[1.625rem]">
                &ldquo;How do we improve this interface?&rdquo;
              </p>
            </div>
          </div>

          {/* ---------------------------- WHAT I FOUND --------------------------- */}
          <div className="mt-stage">
            <p className="label-strong">What I found</p>

            <div className="mt-10 md:mt-12">
              <HandoffChain
                steps={[
                  { name: 'Customer' },
                  { name: 'Project Manager', note: 'Collected what was needed and kept everyone in step' },
                  { name: 'Developer', note: 'Set up and built the connection' },
                  {
                    name: 'BrynQ',
                    note: 'The product customers got at the end',
                    accent: true,
                  },
                ]}
              />
            </div>

            {/* The insight, set as a pull quote rather than another paragraph. */}
            <p className="mt-stage max-w-[38ch] text-[1.75rem] leading-[1.15] md:text-[2.25rem]">
              The product was not where the work happened.
              <br />
              The people around it were.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
              Customers relied on our team to set up their connections and keep them running. So
              making single screens better would only fix part of the problem.
            </p>
          </div>

          {/* ------------------------ THE REFRAMED QUESTION ---------------------- */}
          {/*
            The question and what reaching it changed, as one block. They were
            two separate beats with a gap between them, which split the moment
            the section exists for: the reframing and its consequence are one
            arrival, so they sit in one container.
          */}
          <Reveal className="mt-24 md:mt-32">
            <Takeaway
              label="The question changed"
              headline={
                <>
                  What would BrynQ need to become{' '}
                  <br className="hidden md:inline" />
                  for customers to set up and manage{' '}
                  <br className="hidden md:inline" />
                  integrations themselves?
                </>
              }
              next="Deciding how much customers do themselves"
              nextHref="#timeline"
            >
              That new question changed the project. It was no longer about redesigning screens.
              It was about changing how BrynQ was set up and used.
            </Takeaway>
          </Reveal>
        </Slide>

        {/* ==================== TRANSFORMATION TIMELINE ==================== */}
        <Slide id="timeline" height="tall">
          <Kicker label="The five parts" />
          <Headline level={3}>How the project unfolded</Headline>
          <Lede wide>
            It started as a problem with an app that was hard to use. Bit by bit, it became a
            rethink of how BrynQ, its customers and its team work together. Each part below is
            one step along the way. You can jump into any of them.
          </Lede>

          <div className="mt-stage">
            <Journey
              stages={[
                {
                  n: '01',
                  name: 'Understand',
                  question: "Why weren't customers using BrynQ?",
                  href: '#ch-understand',
                },
                {
                  n: '02',
                  name: 'Rethink',
                  question: 'Why were connections made outside the product?',
                  href: '#ch-reframe',
                  turn: true,
                },
                {
                  n: '03',
                  name: 'Explore',
                  question: 'Could a chat take away the technical hard parts?',
                  href: '#ch-explore',
                },
                {
                  n: '04',
                  name: 'Build it in',
                  question:
                    'How could the team’s repeated know-how become ready-made templates?',
                  href: '#ch-productise',
                },
                {
                  n: '05',
                  name: 'Grow',
                  question: 'What happens when setup drops from months to weeks?',
                  href: '#ch-scale',
                },
              ]}
            />
          </div>
        </Slide>

        {/* ========================= 01 UNDERSTAND ========================= */}
        <ChapterOpen
          id="ch-understand"
          n="01"
          name="Understand"
          title="Getting to know the product, and how it is organised"
          question="Why weren't customers using BrynQ?"
        />

        <Slide id="discovery" chapter="01" height="tall">
          <Kicker label="The surprising discovery" />
          <Headline level={3}>
            Customers did not just find BrynQ technical.{' '}
            <Em>Many didn&rsquo;t feel they needed to use it at all.</Em>
          </Headline>

          <Lede>
            I started by talking to users. I wanted to know what they thought of the product,
            what they used it for and where they got stuck. I expected to find things that were
            hard to use. What I found went much deeper.
          </Lede>

          {/*
            The state of SalureConnect before the redesign, as numbers. The
            quotes below say the product felt technical; these say almost
            nobody opened it, which is the same finding with the argument
            closed.

            The first two tiles share one 0-to-100 scale on purpose. A bar run
            to the end beside a bar barely off the axis says "seven out of
            more than a hundred" faster than either number does alone, which
            is the entire reason this block exists rather than a sentence.
          */}
          <DataPanels>
            <FigurePanel
              label="Customers reached"
              figure="100+"
              marker="muted"
              visual={<BarTrack value={100} tone="muted" />}
            >
              Lots of customers had the product. Getting it to people was never the problem.
            </FigurePanel>

            <FigurePanel
              label="Active customers"
              figure="7"
              marker="accent"
              visual={<BarTrack value={7} />}
            >
              Only seven opened it often, and only to read the logs of their connections.
            </FigurePanel>

            <FigurePanel
              label="Who used it"
              figure="Admins only"
              visual={
                <RoleSplit
                  reached={['Admins', 'Technical people']}
                  missed={['Advisers', 'Everyday users']}
                />
              }
            >
              Not the people the product needed to reach so the business could grow without hiring more people.
            </FigurePanel>
          </DataPanels>

          <PanelNote>
            Numbers from inside the company about SalureConnect, before the BrynQ redesign. The
            team shared them while I was doing research. Customer counts are rough, and show how
            things were when the work started.
          </PanelNote>

          {/*
            SalureConnect, for the record. Two areas of the platform, shown
            because this chapter is about the state the work started from.

            The current UI is deliberately not here. It sits at the end of
            chapter 04, after the conversational exploration and the template
            model, where it reads as what the platform became rather than as a
            before-and-after of these screens. These are different areas of
            the product from BrynQ's interfaces, so nothing anywhere claims
            one is the redesign of the other.
          */}
          <PlateAside
            label="Previous UI"
            className="mt-stage"
            media={
              <PlatePair>
                <Plate
                  dense
                  src={salureconnectDashboard}
                  alt="The SalureConnect dashboards overview: five dashboard cards, each listing the sheets it contains, with label chips and a last-refresh state."
                  width={2563}
                  height={1286}
                  caption="Dashboards"
                  onOpen={open}
                />
                <Plate
                  dense
                  src={salureconnectAdmin}
                  alt="The SalureConnect admin screen for managing dashboards: a table keyed by Qlik GUID with a stage column reading Test or Production and icon-only actions on each row. The GUID values are masked."
                  width={2775}
                  height={1316}
                  caption="Admin"
                  onOpen={open}
                />
              </PlatePair>
            }
          >
            <p>
              SalureConnect, before this work. Two parts of the product: the overview of
              dashboards, and the admin screen where dashboards were managed.
            </p>
            <p className="text-sm text-ink-500">Private ID numbers are hidden. Click either picture to open it.</p>
          </PlateAside>

          <div className="sequence mt-stage grid gap-3 md:grid-cols-3 md:gap-4">
            <Quote gloss="The words and steps came from how the tech team thought, not how customers thought.">
              This feels technical
            </Quote>
            <Quote gloss="Nothing showed what mattered most or what to do next.">
              I don&rsquo;t know what I&rsquo;m supposed to do
            </Quote>
            <Quote gloss="Developers and project managers still did most of the real setup work.">
              Salure already does this for me
            </Quote>
          </div>

          <Pov kind="business">
            If customers do not really use the product themselves, the business needs its own
            team for every new customer. Every new customer means hiring more people.
          </Pov>
        </Slide>

        <Slide id="tension" chapter="01" height="tall">
          <Kicker label="What customers wanted vs what the business needed" />
          <Headline level={3}>
            Customers wanted things simple. <Em>The business needed customers to manage on their own.</Em>
          </Headline>

          <div className="mt-stage">
            <Split
              left={{
                label: 'What customers said',
                children: (
                  <div className="space-y-8">
                    <p className="text-xl leading-snug md:text-[1.75rem]">
                      &ldquo;I just want the integration to work.&rdquo;
                    </p>
                    <p className="text-xl leading-snug md:text-[1.75rem]">
                      &ldquo;I don&rsquo;t want to become an expert in connecting systems.&rdquo;
                    </p>
                    <p className="text-xl leading-snug md:text-[1.75rem]">
                      &ldquo;I still want help when I need it.&rdquo;
                    </p>
                  </div>
                ),
              }}
              right={{
                label: 'What the business needed',
                children: (
                  <div className="space-y-8">
                    <p className="text-lg leading-[1.55] text-ink-600 md:text-xl">
                      Over time, BrynQ needed customers to get better and better at setting up
                      and managing their own connections, so the company would not have to
                      hire more people for every new customer.
                    </p>
                  </div>
                ),
              }}
              centre={
                <>
                  My job was to find the place where customers could feel confident{' '}
                  <Em>and the business could still grow.</Em>
                </>
              }
            />
          </div>
        </Slide>

        <Slide id="ia" chapter="01" height="auto">
          <Kicker label="Making sense of the product" />
          <Headline level={3}>
            Before I redesigned any screens, I needed to understand{' '}
            <Em>what belonged where.</Em>
          </Headline>
          <Lede wide>
            I drew a map of the whole product and grouped its features. Then I compared that
            with where users expected to find things. This showed where the way the product was
            organised was getting in people’s way.
          </Lede>

          <div className="mt-stage grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <IaMap
                groups={[
                  { label: 'Finding your way', items: ['Home', 'Activity', 'Monitoring'] },
                  { label: 'Setting up', items: ['Connections', 'Interfaces', 'Templates'] },
                  { label: 'Data', items: ['Mapping', 'Runs'] },
                  { label: 'Rules and settings', items: ['Settings', 'Administration'] },
                ]}
              />
              <p className="label mt-6 text-ink-500">
                Made simpler for this page. The real map is private.
              </p>
            </div>

            <div className="panel p-6 md:p-8">
              <p className="label-strong">Before · what kept coming up</p>
              <ul className="mt-6 space-y-4">
                {[
                  'Technical words in places customers see',
                  'Hard to tell which sections matter most',
                  'No obvious place to start',
                  'The product was organised the way the team thought, not the way customers did',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-snug text-ink-600">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-ink-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-stage border-t border-border pt-12">
            <p className="label-strong mb-6">Where it left me</p>
            <p className="max-w-[24ch] text-[1.5rem] leading-tight text-ink-500 md:text-[2rem]">
              The problem wasn&rsquo;t only &ldquo;How do I make the screens simpler?&rdquo;
            </p>
            <p className="mt-8 max-w-[26ch] text-[2rem] leading-[1.05] md:text-[3.5rem]">
              It became: what real work should{' '}
              <Em>happen inside BrynQ?</Em>
            </p>
          </div>
        </Slide>

        {/* Handoff into chapter 02. */}
        <Slide id="into-02" chapter="01" height="short">
          <Headline level={3}>
            That led to a bigger question:{' '}
            <Em>how does a BrynQ connection really get made?</Em>
          </Headline>
          <div className="mt-break">
            <Takeaway label="Where part 01 left us" next="A new question" nextHref="#ch-reframe">
              Customers were not avoiding BrynQ because they were lazy. The product simply was not
              where connections got made. To redesign it properly, I had to follow the whole
              journey, from the sale to a working connection.
            </Takeaway>
          </div>
        </Slide>

        {/* ========================== 02 REFRAME ========================== */}
        <ChapterOpen
          id="ch-reframe"
          n="02"
          name="Rethink"
          title="Rethinking how connections get made"
          question="Why were connections made outside the product?"
        />

        <Slide id="journey" chapter="02" height="auto">
          <Kicker label="Following one connection from sale to launch" />
          <Headline level={3}>I followed what happened between signing the deal and the first thing working.</Headline>
          <Lede>
            A standard connection took months. Most of that time was not spent writing code.
          </Lede>

          {/*
            The whole delivery process on one line, so the expensive stretch
            is a shape rather than a claim. The costs under discovery are the
            only accent text on the slide.
          */}
          <div className="mt-stage">
            <PhaseTrack
              phases={[
                { name: 'Sale', steps: ['Agreement signed'] },
                {
                  name: 'Working out what is needed',
                  steps: [
                    'Customer onboarding',
                    'Project manager and developer ask questions',
                    'Technical requirements',
                  ],
                  costs: [
                    '3 to 4 hours of meetings',
                    'Weeks of back and forth',
                    'A requirements document',
                    'Repeated calls and email',
                  ],
                  emphasis: true,
                },
                {
                  name: 'Setting up',
                  steps: ['Passwords and access', 'Matching fields', 'Matching values'],
                },
                {
                  name: 'Build',
                  steps: ['Building', 'Testing', 'Handing over'],
                },
              ]}
            />
          </div>

          {/*
            The number, the span it covers and what it meant, in one block so
            none of the three reads as a caption for the others.
          */}
          <div className="panel mt-stage grid gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
            <div className="flex gap-5">
              <span className="panel-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                <Clock aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[2rem] leading-none md:text-[2.75rem]">~6 months</p>
                <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
                  From signing to a working connection, for a standard case
                </p>

                {/* The span drawn, so the number has a shape as well as a size. */}
                <div aria-hidden="true" className="mt-7 flex items-center gap-3">
                  <span className="label shrink-0 text-ink-500">Signature</span>
                  <span className="h-px flex-1 border-t border-dashed border-border" />
                  <span className="label shrink-0 text-ink-500">Live</span>
                </div>

                <div className="mt-6">
                  <Evidence kind="observed" />
                </div>
              </div>
            </div>

            <p className="max-w-[28ch] self-center text-[1.375rem] leading-tight lg:border-l lg:border-border lg:pl-14 md:text-[1.75rem]">
              The slow part was not writing code.{' '}
              <Em>It was working out, again and again, what needed to be built.</Em>
            </p>
          </div>

          <Pov kind="business">
            Every new sale meant months of setup work before the customer could really use the
            product. Money came in late. And the number of people on the team, not the number of
            customers who wanted it, set the limit on growth.
          </Pov>
        </Slide>

        <Slide id="the-question" chapter="02" height="auto">
          <Kicker label="The real connection" />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <Headline level={3}>
                We called them BrynQ interfaces.{' '}
                <Em>But they weren&rsquo;t really made in BrynQ.</Em>
              </Headline>
              <p className="mt-8 max-w-[36ch] text-base leading-[1.6] text-ink-600 md:mt-10 md:text-lg">
                The real work happened in places that were never built for it. That was where the
                work got done, the choices were made and the systems were joined up.
              </p>
            </div>

            {/*
              Four places against two verbs. The panes are sized to the lists
              they hold, so the imbalance is in the layout as well as the words.
            */}
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:self-end">
              {[
                {
                  Icon: Table2,
                  title: 'Where connections were really made',
                  items: [
                    'Meetings',
                    'Spreadsheets',
                    'Configuration exchanges',
                    'Developer work',
                  ],
                },
                {
                  Icon: PlayCircle,
                  title: 'What the product ended up doing',
                  items: ['Run', 'Monitor'],
                },
              ].map(({ Icon, title, items }) => (
                <div key={title} className="panel p-5 md:p-6">
                  <span className="panel-chip flex h-9 w-9 items-center justify-center rounded-md">
                    <Icon aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </span>
                  <p className="mt-5 text-base leading-snug md:text-lg">{title}</p>
                  <ul className="mt-5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 border-b border-border py-3 text-sm leading-snug text-ink-600 last:border-0 last:pb-0 md:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* The question and its answer, kept on one line so neither drifts. */}
          <div className="panel mt-stage grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] lg:gap-12">
            <div className="flex items-center gap-5">
              <span className="panel-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                <Lightbulb aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </span>
              <p className="text-xl leading-snug md:text-2xl">
                So what was the product actually doing?
              </p>
            </div>

            <p className="text-sm leading-[1.6] text-ink-600 md:text-base lg:border-l lg:border-border lg:pl-12">
              Mostly, it had become a screen where finished connections could be run and watched.
              Everything else happened somewhere else.
            </p>

            <a
              href="#artefact-scenario"
              className="panel-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-foreground hover:text-background"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              <span className="sr-only">Where the connection was really made</span>
            </a>
          </div>
        </Slide>

        <Slide id="artefact-scenario" chapter="02" height="auto">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.75fr)] lg:items-start lg:gap-14">
            <div>
              <Kicker label="Where the work really happened" />
              <Headline level={3}>
                The real work happened in <Em>a spreadsheet.</Em>
              </Headline>
              <p className="mt-8 max-w-[34ch] text-base leading-[1.6] text-ink-600 md:mt-10 md:text-lg">
                This is where each connection was planned. It held the rules, the matching fields and
                the details about the customer. The customer, the project manager and the developers passed it back and forth.
              </p>

            </div>

            {/*
              The real file, readable. Tanya's decision, made on 7 September
              2026 after the trade-off was put to her twice.

              What is on screen: vendor system field names, their technical
              names and paths, and the team's own working comments in Dutch.
              What is not on screen: any personal data, any employee record,
              any customer company name. The capture is already cropped above
              the Excel title bar, so the filename and the taskbar clock are
              out of frame.

              If it ever needs to come out again: blur everything below y=44
              by downsampling that region to a sixteenth and resampling it
              back up before blurring, so the characters are destroyed rather
              than smeared. A plain blur over readable pixels is recoverable.

              Do not "solve" this by moving the file behind NdaGate. That gate
              is client-side, so anything behind it still ships in the bundle,
              as NdaGate.tsx's own docstring says. Real protection would need
              a serverless function holding the file outside the public build.
            */}
            <Plate
              src={scenarioFile}
              alt="The scenario file: a spreadsheet fourteen columns wide, headed Scenario, Objective, Source system, Target system, Sync, Custom, Comments, Description source system, Technical field source system, Path source system, Field name target system, Technical name target system, Path target system and Field type. Row after row maps one field from the source system to the target system, with the team's working notes in the comments column."
              width={2516}
              height={1114}
              caption={
                <>
                  The real file. Fourteen columns to plan one connection: what it is for, which
                  systems it joins, and then every field on both sides, with its technical name, where
                  it lives and what type it is. The yellow column is comments, where the customer, the
                  project manager and the developer argued until it was right.
                </>
              }
              onOpen={open}
            />
          </div>

          <ul className="mt-break grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Every connection started here',
                note: 'Before anything was built',
                Icon: Table2,
              },
              { title: 'The agreement and the plan', note: 'In the same file' },
              { title: 'The progress tracker too', note: 'Progress kept in its own columns' },
              {
                title: 'Filled in by three groups at once',
                note: 'Project managers, developers and customers, and none of them were using the product',
                Icon: Users,
              },
            ].map(({ title, note, Icon }) => (
              <li key={title} className="panel flex flex-col p-5 md:p-6">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="mb-5 h-5 w-5 text-accent"
                    strokeWidth={1.5}
                  />
                )}
                <p className="text-base leading-snug md:text-lg">{title}</p>
                <p className="mt-2 text-sm leading-snug text-ink-500">{note}</p>
              </li>
            ))}
          </ul>
        </Slide>

        <Slide id="behind" chapter="02" height="auto">
          <Kicker label="Looking behind the product" />
          <Headline level={3}>I started looking behind the screens.</Headline>
          <Lede wide>
            I sat in with project managers, worked with the developers who built connections and
            talked to the people involved. I wanted to understand what really happened during
            those months. The goal was to split the work that was truly different for each
            customer from the work the team was repeating over and over.
          </Lede>

          <div className="mt-stage">
            <Zones
              items={[
                {
                  label: 'Different for each customer',
                  title: 'Different every time',
                  points: [
                    'Credentials',
                    'Company configuration',
                    'Exceptions',
                    'Internal constraints',
                  ],
                },
                {
                  label: 'Repeated every time',
                  title: 'Started from scratch, every time',
                  points: [
                    'Mapping patterns',
                    'Common transformations',
                    'Validation rules',
                    'Authentication requirements',
                  ],
                },
                {
                  label: 'What developers knew',
                  title: 'Kept in people’s heads, not in the product',
                  points: [
                    'How systems connect',
                    'Expected fields',
                    'Where things usually go wrong',
                    'How standard connections behave',
                  ],
                },
              ]}
            />
          </div>

          <Pov kind="mine">
            Once the three were split apart, the middle column stopped looking like work. It
            started looking like a feature that nobody had built yet.
          </Pov>
        </Slide>

        <Slide id="hidden-asset" chapter="02" height="auto">
          <Kicker label="The hidden treasure" />
          <Headline level={3}>
            The developers had already built up{' '}
            <Em>a whole library of know-how about connecting systems.</Em>
          </Headline>

          {/*
            The same knowledge, twice: scattered through people on the left,
            gathered into one reusable thing on the right. Only the right-hand
            panel carries the accent, because only one of the two is a product.
          */}
          <div className="mt-stage grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
            {[
              {
                Icon: Database,
                label: 'Where it lived',
                accent: false,
                items: [
                  { Icon: List, text: 'Expected fields' },
                  { Icon: Waypoints, text: 'Common mappings' },
                  { Icon: Sparkles, text: 'Transformations' },
                  { Icon: Share2, text: 'How the connection works' },
                  { Icon: KeyRound, text: 'How to log in to each system' },
                  { Icon: AlertTriangle, text: 'Technical limits that keep coming up' },
                ],
                foot: 'In people, documents and habits. It worked, but it could never be sold twice.',
              },
              {
                Icon: Box,
                label: 'Where it could live',
                accent: true,
                items: [
                  { Icon: Tag, text: 'A named template, kept up to date' },
                  { Icon: Table2, text: 'Standard field matches, already filled in' },
                  { Icon: Code2, text: 'Data changes, already written' },
                  { Icon: ShieldCheck, text: 'Checks, built in' },
                  { Icon: Route, text: 'Step-by-step setup' },
                ],
                foot: 'In the product. Built once, then reused for every customer after that.',
              },
            ].map(({ Icon, label, accent, items, foot }, i) => [
              // The connector belongs between the panels, so it is emitted
              // with the second one rather than as a third grid child.
              i === 1 ? (
                <div
                  key="converge"
                  aria-hidden="true"
                  className="hidden text-ink-400 lg:block lg:w-28 xl:w-36"
                >
                  <Converge className="h-44 w-full" />
                </div>
              ) : null,

              <div key={label} className="panel flex flex-col p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <span className="panel-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon
                      aria-hidden="true"
                      className={`h-4 w-4 ${accent ? 'text-accent' : 'text-ink-500'}`}
                      strokeWidth={1.5}
                    />
                  </span>
                  <p className={`label ${accent ? 'text-accent' : 'text-ink-500'}`}>{label}</p>
                </div>

                <ul className="mt-7 border-t border-border">
                  {items.map(({ Icon: RowIcon, text }) => (
                    <li key={text} className="flex items-center gap-4 border-b border-border py-3">
                      <span className="panel-chip flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                        <RowIcon
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 ${accent ? 'text-accent' : 'text-ink-500'}`}
                          strokeWidth={1.5}
                        />
                      </span>
                      <span className="text-base leading-snug md:text-lg">{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto max-w-[34ch] pt-7 text-sm leading-snug text-ink-500 md:text-base">
                  {foot}
                </p>
              </div>,
            ])}
          </div>

          <Pov kind="business">
            Most customers were paying for know-how the company already had. That money came
            from doing work by hand, when it could have come from the product.
          </Pov>

          <p className="mt-stage max-w-[24ch] text-[1.75rem] leading-tight md:text-[3rem]">
            What if that know-how became <Em>part of the product?</Em>
          </p>
        </Slide>

        <Slide id="direction" chapter="02" height="auto">
          <Kicker label="Before, and the new direction" />
          <Headline level={3}>From one-off setup work to steps the product can reuse</Headline>

          {/*
            Seven bespoke steps against six reusable ones, with the strands
            funnelling through a single point between them. Only the right
            panel is drawn in the accent, because only one of the two is where
            the product was going.
          */}
          <div className="mt-stage grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
            <div className="panel flex flex-col border border-border p-6 md:p-8">
              <p className="label inline-flex w-fit rounded-md border border-border px-2.5 py-1.5 text-ink-500">
                Before
              </p>
              <div className="mt-8 flex-1">
                <NumberedFlow
                  steps={[
                    'One customer',
                    'Project manager',
                    'Developer',
                    'Custom mapping',
                    'Custom implementation',
                    'Testing',
                    'Working interface',
                  ]}
                />
              </div>
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[2rem] leading-none md:text-[2.5rem]">~6 months</p>
                <div className="mt-5">
                  <Evidence kind="observed" />
                </div>
              </div>
            </div>

            {/* The turn itself: many paths in, one out. */}
            <div className="hidden lg:flex lg:w-36 lg:flex-col lg:items-center lg:justify-center xl:w-44">
              <Converge aria-hidden="true" className="h-52 w-full text-ink-400" />
              <p className="mt-8 max-w-[18ch] text-center text-sm leading-snug text-ink-500">
                Turning one-off work into steps that can be reused again and again.
              </p>
            </div>

            <div className="panel flex flex-col border border-accent p-6 md:p-8">
              <p className="label inline-flex w-fit rounded-md border border-accent px-2.5 py-1.5 text-accent">
                New direction
              </p>
              <div className="mt-8 flex-1">
                <NumberedFlow
                  steps={[
                    'Steps we already know',
                    'Reusable template',
                    'Customer configuration',
                    'Validation',
                    'Testing',
                    'Working interface',
                  ]}
                />
              </div>
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[2rem] leading-none md:text-[2.5rem]">~2 weeks</p>
                <div className="mt-5">
                  <Evidence kind="direction" />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-stage max-w-[22ch] text-[1.75rem] leading-tight md:text-[3rem]">
            Build the known parts once. <Em>Ask customers only for what is different.</Em>
          </p>

          <Pov kind="business">
            This changed how the money worked. Instead of repeating the same setup work for
            every customer, the team would build things once and reuse them for all of them.
          </Pov>
        </Slide>

        {/* Handoff into chapter 03. */}
        <Slide id="into-explore" chapter="02" height="short">
          <Headline level={3}>But how much should customers really do on their own?</Headline>
          <div className="mt-break">
            <Takeaway label="Where part 02 left us" next="Trying an idea" nextHref="#ch-explore">
              The business wanted customers to manage on their own. The customers I spoke with
              still wanted to feel safe, and to have real people to help. Before choosing a middle
              point, we tested the most extreme version first.
            </Takeaway>
          </div>
        </Slide>

        {/* ========================== 03 EXPLORE ========================== */}
        <ChapterOpen
          id="ch-explore"
          n="03"
          name="Explore"
          title="Setting up connections with the help of AI"
          question="Could a chat take away the technical hard parts?"
        />

        <Slide id="ai-concept" chapter="03" height="auto">
          <Kicker label="The experiment" />
          <Headline level={3}>
            Could someone with no technical skills set up a connection{' '}
            <Em>just by chatting?</Em>
          </Headline>

          <div className="mt-stage grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <Pov kind="mine">
                Once we saw how much technical work was hidden in the setup, I started to explore
                whether we could hide all of it, so that users could simply describe what they
                wanted to connect in their own words.
              </Pov>

              <div className="mt-break">
                <p className="label-strong">What the chat would take care of</p>
                <div className="mt-6">
                  <IconList
                    connected
                    items={[
                      { text: 'Choosing the HR and payroll apps' },
                      { text: 'Giving the details needed to connect' },
                      { text: 'Seeing which data will be sent' },
                      { text: 'Checking which fields match' },
                      { text: 'Spotting fields with no match' },
                      { text: 'Changing data into the right format' },
                      { text: 'Checking the final setup' },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Drawn from the design rather than exported from it: the concept
                needs the conversation and the mapping visible at once, which
                no single real frame shows. The real concept boards run at the
                foot of this slide. */}
            <div>
              <MappingCanvas
                source="HR system"
                target="Payroll system"
                turns={[
                  { who: 'User', said: 'Connect our HR system to payroll.' },
                  {
                    who: 'BrynQ',
                    said: 'Here is the employee data I found, and the payroll fields it needs to fill.',
                  },
                ]}
                rows={[
                  { from: 'First name', to: 'First name', state: 'auto' },
                  { from: 'Surname', to: 'Last name', state: 'input' },
                  { from: 'Employee ID', to: 'Employee number', state: 'auto' },
                  { from: 'Department', to: 'Cost centre', state: 'input' },
                  { from: 'Hire date', to: 'Start date', state: 'auto' },
                ]}
                actions={['Change', 'Match', 'Check']}
              />
              <p className="label mt-4 text-ink-500">
                Idea · the chat and the data sit on one screen
              </p>
            </div>
          </div>

          {/*
            The concept's own question, closing the slide it belongs to rather
            than standing on its own.
          */}
          <div className="mt-stage border-t border-border pt-stage">
            <p className="max-w-[52ch] text-base leading-[1.6] text-ink-600 md:text-lg">
              Instead of asking customers to understand the technical setup, the product would
              turn what they want into the setup it needs.
            </p>
            <p className="mt-10 max-w-[18ch] text-[2rem] leading-[1.04] md:mt-12 md:text-[3.5rem]">
              Could we hide the hard technical parts <Em>behind a chat?</Em>
            </p>
          </div>

          {/*
            Where the concept actually started. Two boards rather than one:
            the first asks where the conversation sits on the page, the second
            asks what happens after it, which turned out to be the harder
            half and the reason the model needed a summary and an error path
            before it needed better copy.
          */}
          <div className="mt-stage space-y-10 md:space-y-12">
            <Plate
              src={aiConceptSketches}
              alt="Five rough sketches of the BrynQ home page, each putting a chat panel in a different place over the dashboard, with sticky notes underneath saying what each version is for."
              width={2924}
              height={659}
              label="Exploration"
              caption="Five places to put the same idea. The notes under each sketch say what that version is for: suggest topics, confirm, clear things up, ask related questions, or walk the user through making a connection."
              onOpen={open}
            />
            <Plate
              src={aiConceptFlow}
              alt="A drawing of the chat idea from start to end: the home page, the chat opening, three numbered summary steps, and arrows looping back for error logs and fixes."
              width={2591}
              height={873}
              label="The idea, start to end"
              caption="The same idea drawn from start to end. The chat starts things off, but the summary panel does most of the work: three steps for the run, and two loops back for errors and fixed data. The chat was never meant to be the whole screen."
              onOpen={open}
            />
          </div>
        </Slide>

        <Slide id="ai-interaction" chapter="03" height="auto">
          <Kicker label="How the chat works" />
          <Headline level={3}>
            The chat was not just a chatbot.{' '}
            <Em>It ran the whole setup, step by step.</Em>
          </Headline>

          <div className="mt-stage grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="flex gap-5 self-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border">
                <Target aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </span>
              <p className="max-w-[34ch] self-center text-[1.375rem] leading-tight md:text-[1.75rem]">
                The goal was to let people understand what was going on without having to think
                like a developer.
              </p>
            </div>

            <div>
              <p className="label-strong mb-8">What one message set off</p>
              <Cascade
                steps={[
                  {
                    name: 'Conversation',
                    note: 'You say what you want to connect.',
                  },
                  { name: 'Data preview', note: 'You see your data and how the fields match.' },
                  { name: 'Changing the data', note: 'The data is put into the right format.' },
                  { name: 'Checking', note: 'The product looks for problems and confirms it is all correct.' },
                  { name: 'Ready to activate', note: 'Everything is set. You make it live.' },
                ]}
              />
            </div>
          </div>

          <Plate
            src={aiChatFrames}
            alt="Three simple sketches of the chat screen: the chat beside a list of tasks, then beside a summary of systems, tasks, schedule, field matches and settings, then beside a list of errors with a fix for each one."
            width={1804}
            height={474}
            label="How the chat works"
            caption="Three moments on the same screen. The chat never works alone. It sits beside the task list, then beside a summary of systems, tasks, schedule, field matches and settings, then beside the error list. The chat moves things along, and the panel beside it lets you check what the chat just did."
            onOpen={open}
            className="mt-stage"
          />

          {/*
            The cascade above, as the actual sequence of turns. Three columns
            rather than a long scroll, because the point is the shape of the
            whole exchange and not any single step. They are unreadable at
            this size on purpose: open one to follow it.

            Body copy in these frames is lorem ipsum. The originals carried
            joke placeholder text from the working file, which reads as the
            product speaking once it is enlarged.
          */}
          <div className="mt-break">
            <p className="label-strong mb-6">Every step, from start to end</p>
            <div className="grid gap-5 sm:grid-cols-3 md:gap-6">
              <Plate
                src={aiChatSteps1}
                alt="The first part of the chat: adding the two systems and giving access, describing the task in the user's own words, the assistant asking follow-up questions, the task list growing in the sidebar, and a check before matching fields begins."
                width={619}
                height={1743}
                caption="Give access, describe, confirm."
                onOpen={open}
              />
              <Plate
                src={aiChatSteps2}
                alt="The middle part: matching fields between system A and system B, choosing how often the connection runs and when it starts, then a few short technical settings, including the time zone."
                width={626}
                height={1842}
                caption="Match, schedule, set up."
                onOpen={open}
              />
              <Plate
                src={aiChatSteps3}
                alt="The last part: a list of ten problems found in the test run, marked by how serious they are, the same list fixed and ready to run again, a progress bar for the second run, and a final message saying the connection is ready."
                width={670}
                height={1755}
                caption="Test, fix, create."
                onOpen={open}
              />
            </div>
            <p className="mt-5 max-w-[68ch] text-sm leading-[1.55] text-ink-500">
              Look across all of them and it stops looking like a chatbot. In most steps, the
              product says what it has done and asks for the one choice it cannot make itself. That
              is why the error list needed as much design work as the chat did.
            </p>
          </div>
        </Slide>

        <Slide id="ai-research" chapter="03" height="auto">
          <Kicker label="The research changed the plan" />
          <Headline level={3}>
            Making things easier did not mean customers{' '}
            <Em>wanted to do all of it themselves.</Em>
          </Headline>

          <div className="mt-stage grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Pov kind="mine">
                When I tested the idea of customers doing it all themselves, and kept talking to
                them, something else came up. They liked having fewer technical parts and a faster
                setup. But they did not want to be the only ones who could catch a mistake.
              </Pov>

              <div className="mt-break">
                <p className="label-strong">What they still wanted</p>
                <div className="mt-6">
                  <IconList
                    items={[
                      { text: 'A human point of contact', Icon: User },
                      { text: 'To know for sure the setup was right', Icon: ShieldCheck },
                      { text: 'Someone in charge when something went wrong', Icon: Users },
                      { text: 'Help with unusual cases', Icon: Wrench },
                      { text: 'A check before going live', Icon: CheckCircle2 },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="label-strong">The insight</p>
              <p className="mt-7 text-xl leading-snug text-ink-600 md:text-2xl">
                The real problem was not only that it was technical.
              </p>
              <p className="mt-5 text-[1.75rem] leading-tight md:text-[2.5rem]">
                It was also <Em>confidence.</Em>
              </p>

              {/* The two poles the answer sits between, before the axis below
                  places the product on them properly. */}
              <div className="mt-break max-w-md">
                <AxisPair
                  left={{ label: 'Guidance', Icon: User }}
                  right={{ label: 'Autonomy', Icon: Rocket }}
                />
              </div>

              <p className="mt-14 max-w-[20ch] text-[2rem] leading-[1.05] md:text-[3rem]">
                Customers wanted to do things themselves. <Em>They did not want to be left alone.</Em>
              </p>
            </div>
          </div>

          {/*
            The wall the two findings above came off. Set beside its reading
            rather than under it: the board is evidence for the paragraph, and
            at full width it would read as the argument itself.
          */}
          <PlateAside
            label="Synthesis"
            className="mt-stage"
            media={
              <Plate
                dense
                src={aiResearchSynthesis}
                alt="A research board in three rows. Problems in blue at the bottom: finding your way, unclear messages from the product, fixing errors and changing data. Goals in orange group them: easier navigation, clearer screens, better error help and help with changing data. Design ideas in purple sit above each goal."
                width={1888}
                height={1849}
                caption="Problems, goals, design ideas"
                onOpen={open}
              />
            }
          >
            <p>
              Problems from the interviews fell into four goals, with design ideas built on top of each.
            </p>
            <p>
              Read the bottom row and the same thing keeps coming up. People were not stuck on the
              technology. They were stuck on not knowing whether what they had just done was right.
            </p>
            <p className="text-sm text-ink-500">Click to open it full size.</p>
          </PlateAside>

          <div className="mt-stage w-full">
            <Continuum
              left="Developers do it"
              right="Customers do it all alone"
              marker="Customers do it, with help"
              markerNote="Where the research pointed, and where the product went."
              gains={[
                { Icon: Zap, text: 'Faster setup' },
                { Icon: ShieldCheck, text: 'More confidence' },
                { Icon: TrendingUp, text: 'More people using it' },
              ]}
            />
          </div>

          <Pov kind="business">
            Letting customers do everything alone might have given the company what it wanted,
            but not what customers cared about. The problem would have been that people did not
            use it, not that it could not do the job.
          </Pov>
        </Slide>

        <Slide id="ai-pivot" chapter="03" height="auto">
          <Kicker label="The change of plan" />
          <Headline level={3}>The test showed us how much customers should do on their own.</Headline>

          {/* Four beats of one decision, read left to right. */}
          <div className="mt-stage">
            <Stages
              items={[
                {
                  label: 'What we first guessed',
                  text: 'AI could guide the whole setup.',
                },
                {
                  label: 'What research showed',
                  text: 'Customers wanted to do more themselves, but still wanted to feel safe.',
                },
                { label: 'Where the product went', text: <Em>Doing it yourself, with help.</Em> },
                {
                  label: 'What customers touch',
                  text: 'Templates become the main thing customers work with.',
                },
              ]}
            />
          </div>

          <div className="mt-stage">
            <Takeaway label="Where part 03 left us" next="Building it into the product" nextHref="#ch-productise">
              The test did not fail. It showed us the right way for it to work: the product should
              bring the steps we already know, and customers should fill in only what is
              different for them.
            </Takeaway>
          </div>
        </Slide>

        {/* ========================= 04 PRODUCTISE ========================= */}
        <ChapterOpen
          id="ch-productise"
          n="04"
          name="Build it in"
          title="Templates: doing it yourself, with help"
          question="How could the team’s repeated know-how become ready-made templates?"
        />

        <Slide id="from-ai-to-templates" chapter="04" height="auto">
          <Kicker label="From doing it alone to doing it with help" />
          <Headline level={3}>
            The answer was not to make customers build everything themselves.{' '}
            <Em>It was giving them a strong starting point.</Em>
          </Headline>

          <Lede wide>
            The AI test showed what customers really needed. They did not want to become experts
            in connecting systems.
          </Lede>

          <div className="mt-stage grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ColumnLabel>What customers wanted</ColumnLabel>
              <div className="mt-8 space-y-3">
                <IconRowCard Icon={Puzzle}>Fewer technical parts</IconRowCard>
                <IconRowCard Icon={Clock}>Less waiting</IconRowCard>
                <IconRowCard Icon={SlidersHorizontal}>More control</IconRowCard>
                <IconRowCard Icon={User}>A human available when needed</IconRowCard>
              </div>
            </div>

            <div>
              <ColumnLabel>What the new approach does</ColumnLabel>
              <div className="mt-8 flex flex-col gap-3">
                <IconRowCard Icon={Sparkles} tall>
                  The product handles <Em>what repeats.</Em>
                </IconRowCard>
                <IconRowCard Icon={Fingerprint} tall>
                  The customer adds <Em>what is only theirs.</Em>
                </IconRowCard>
                <IconRowCard Icon={User} tall>
                  A real person is there <Em>when you need to feel sure.</Em>
                </IconRowCard>
              </div>
            </div>
          </div>

          <div className="mt-stage space-y-6 border-t border-border pt-10">
            <p className="max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
              That led us to templates. Instead of starting from nothing, the technical steps we
              already knew could be ready in advance.
            </p>
            {/*
              Where the AI went. The page carried a slide on this and it was
              cut for being one beat too many, but the recap at the end still
              refers to it, and the deck still tells it. One line here keeps
              all three surfaces saying the same thing.
            */}
            <p className="max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
              The AI did not leave the product either. It moved behind the scenes, out of what the
              customer sees and into how templates get built. There it helps developers write
              templates faster, so the library grows quicker than it could by hand.
            </p>
          </div>
        </Slide>

        <Slide id="template-foundation" chapter="04" height="auto">
          <Kicker label="Templates as the base" />
          <Headline level={3}>
            Do not ask customers to rebuild <Em>what BrynQ already knows.</Em>
          </Headline>
          <Lede wide>
            Ready-made templates became the base for letting customers do it themselves, with help.
          </Lede>

          <div className="mt-stage">
            <StepRail />
            <div className="grid gap-3 md:grid-cols-3">
              <StepCard
                n="1"
                Icon={Database}
                title="BrynQ knows"
                points={['Steps we already know', 'Standard field matches', 'Steps that are always needed']}
              />
              <StepCard
                n="2"
                Icon={FileText}
                title="Template"
                points={['A ready starting point', 'Step-by-step setup', 'Checks built in']}
              />
              <StepCard
                n="3"
                Icon={User}
                title="Customer fills in"
                points={[
                  'Credentials',
                  'Details only their company has',
                  'Required selections',
                  'Exceptions',
                ]}
              />
            </div>
            <ConvergeFoot>Result: a working connection</ConvergeFoot>
          </div>

          {/*
            The rail above, drawn. These are exploration, not delivery, and
            they are sized that way: dense, side by side, beside a note. The
            shipped screens on the next slide get the full column.
          */}
          <PlateAside
            label="Exploration"
            className="mt-stage"
            media={
              <PlatePair>
                <Plate
                  dense
                  src={guidedSetupWizard}
                  alt="Three screens of the step-by-step setup: Goal, Source, Target, Data and Summary. The source and target steps show a grid of apps you can search, and a side panel asks the user to pick or create a connection they have access to."
                  width={2271}
                  height={546}
                  caption="Step-by-step setup"
                  onOpen={open}
                />
                <Plate
                  dense
                  src={templateConfigUi}
                  alt="Template and setup screens: the list of connections, the create menu offering a new connection or a template, the template form asking what the connection is for and how often it should run, and a pop-up library of ready-made templates you can filter by app."
                  width={1571}
                  height={1774}
                  caption="Templates and setup"
                  onOpen={open}
                />
              </PlatePair>
            }
          >
            <p>
              The plan, drawn before it was built. Setup as five named steps instead of one empty
              settings screen, and a create menu that offers a template instead of a blank start.
            </p>
            <p className="text-sm text-ink-500">
              These are design files, not the real product. What was launched is on the next
              slide. Click either picture to open it full size.
            </p>
          </PlateAside>
        </Slide>

        <Slide id="template-model" chapter="04" height="auto">
          <Kicker label="How templates work" />
          <Headline level={3}>
            Templates turned work the team kept repeating into{' '}
            <Em>something the product does for you.</Em>
          </Headline>

          <div className="mt-stage">
            <div className="grid gap-3 md:grid-cols-3">
              <ProvideCard
                label="BrynQ provides"
                title="The known parts"
                points={[
                  'How the connection is built',
                  'Standard mappings',
                  'Transformations',
                  'Steps needed to connect',
                  'Validation logic',
                  'Guided setup',
                ]}
              />
              <ProvideCard
                label="The customer provides"
                title="Only what is theirs"
                points={[
                  'Credentials',
                  'Details only their company has',
                  'Required selections',
                  'Exceptions',
                ]}
              />
              <ProvideCard
                label="Real people provide"
                title="The feeling of being safe"
                points={['Peace of mind', 'Checking', 'Someone to call when stuck', 'Help with hard cases']}
              />
            </div>
            <ConvergeFoot>A working connection</ConvergeFoot>
          </div>

          <p className="mt-stage max-w-[24ch] text-[1.75rem] leading-tight md:text-[3rem]">
            One-off setup work becomes <Em>step-by-step setup.</Em>
          </p>

          {/*
            The same model as it actually shipped. Two frames, because guided
            configuration is two decisions: which template, and what it will
            do once it runs.

            Both frames are one example of the live UI, not a specification.
            The counts on screen, how many templates match, how many scenarios
            a template carries, how many fields each one moves, vary by
            template and by the applications being connected. Captions here
            describe what the screen lists, never how much of it there is.
          */}
          <div className="mt-stage space-y-10 md:space-y-12">
            <Plate
              src={templatePicker}
              alt="Choosing a template in the real product, under the heading Let's connect some Apps. The user has picked the first app, and the screen shows matching ready-made connections as cards, each naming the two apps and what it sends, with a link to build from scratch if nothing fits."
              width={1594}
              height={733}
              label="Launched · choosing a template"
              caption="The real product today. Pick the two apps, and the product shows the templates it already knows how to build between them, each one described in payroll words, not technical ones. You can still build from scratch, but that is now the exception, not the start. This is one example; what shows up depends on the apps you pick."
              onOpen={open}
            />
            <Plate
              src={templateDetail}
              alt="The details of a payroll template in the real product. The left side names the apps, shows how the licence price changes and asks the user to agree. The right side lists what the template covers, such as New Hire, Address and Salary, with the number of fields in each, and shows the fields for the one selected."
              width={1601}
              height={589}
              label="Launched · what a template includes"
              caption="The real product today. Before you set anything up, the template lists what it covers and the exact fields it moves. So you choose a template by what it does, not by its name. This is one example; each template covers different things. The licence price is hidden."
              onOpen={open}
            />
          </div>
        </Slide>

        <Slide id="one-to-many" chapter="04" height="tall">
          <Kicker label="One template, many customers" />
          <Headline level={3}>
            The same know-how no longer has to be{' '}
            <Em>rebuilt for every customer.</Em>
          </Headline>

          <div className="mt-stage">
            <Fan
              source={{
                label: 'One template',
                note: 'Built once by the people who already know how these systems connect.',
              }}
              targets={['Customer A', 'Customer B', 'Customer C', 'Customer D', 'Customer E']}
            />
          </div>

          <p className="mt-stage text-[2rem] leading-none md:text-[3.5rem]">
            1 template <span className="text-ink-400">&rarr;</span> <Em>many customers</Em>
          </p>

          {/*
            The fan above, drawn as a library. Design-stage, so it runs at the
            same supporting size as the other exploration on this chapter.
          */}
          <PlateAside
            label="Exploration"
            className="mt-stage"
            media={
              <Plate
                dense
                src={templateLibrary}
                alt="The template library in the product: a row of ready-made templates, each naming the two apps and how many times it has been used, above a grid of recent connections, with a pop-up showing the full library filtered by app."
                width={1844}
                height={1526}
                caption="Template library"
                onOpen={open}
              />
            }
          >
            <p>
              The same know-how, sorted into a library. Each card names the systems it connects
              and how many customers have used it. So the template that is built once is also the
              easiest one to find.
            </p>
            <p className="text-sm text-ink-500">Click to open it full size.</p>
          </PlateAside>

          <Pov kind="business">
            The more setup steps can be reused, the less developer time each new customer
            needs. The cost of setting up stops growing with every new customer.
          </Pov>
        </Slide>

        <Slide id="delivery-impact" chapter="04" height="auto">
          <Kicker label="What it changes" />
          <Headline level={3}>
            The possible change: from months of setup work{' '}
            <Em>to weeks of setup</Em>
          </Headline>

          <div className="mt-stage grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="panel p-6 md:p-8">
              <p className="label text-ink-500">Before</p>
              <p className="mt-6 text-[3rem] leading-none md:text-[4.5rem]">~6 months</p>
              <MiniFlow steps={['Find out', 'Match', 'Build', 'Test', 'Hand over']} />
              <div className="mt-8">
                <Evidence kind="observed" />
              </div>
            </div>

            {/* The arrival inverts, the same move the business Pov makes. */}
            <div className="theme-invert panel bg-card p-6 text-foreground md:p-8">
              <p className="label text-ink-500">After</p>
              <p className="mt-6 text-[3rem] leading-none md:text-[4.5rem]">~2 weeks</p>
              <MiniFlow steps={['Pick template', 'Fill in', 'Check', 'Test', 'Go live']} />
              <div className="mt-8">
                <Evidence kind="direction" />
              </div>
            </div>
          </div>

          <div className="mt-stage grid gap-10 border-t border-border pt-12 md:grid-cols-3">
            <Metric
              figure={<Count to={92} prefix="~" suffix="%" />}
              caption="Less time to set up, if it works as planned"
            />
            <Metric
              figure={<Count to={13} prefix="~" suffix="×" />}
              caption="More setups the same team could do, on paper"
            />
            <Metric figure="2× easier" caption="What the project manager told us" />
          </div>

          <Footnote>
            The 2× easier number is what the project manager told us. The time and team numbers
            are examples, worked out from setup going from about 26 weeks to about 2 weeks for
            a standard connection.
          </Footnote>

          {/*
            Where the current UI lands: at the close of chapter 04, after the
            conversational exploration and the template model, so it reads as
            what the platform became rather than as a before-and-after of the
            SalureConnect screens in chapter 01.

            Same treatment as those screens, a pair at supporting size beside
            its explanation, mirrored so the two bands read as a set. Two
            frames because the platform is two places: the interfaces that run
            the integrations, and the dashboards built on what they move.
          */}
          <PlateAside
            label="Current UI"
            flip
            className="mt-stage border-t border-border pt-stage"
            media={
              <PlatePair>
                <Plate
                  dense
                  src={brynqCurrent}
                  alt="The BrynQ connections screen: a list of named connections, each showing the apps it joins, when it runs next, how often it runs, and whether the last run worked or failed."
                  width={2546}
                  height={1272}
                  caption="Interfaces"
                  onOpen={open}
                />
                <Plate
                  dense
                  src={brynqDashboards}
                  alt="The BrynQ dashboards page: a grid of cards, each naming a dashboard, a tag saying Test or Development, the sheets inside it as links, and when it was last updated."
                  width={2549}
                  height={1272}
                  caption="Dashboards"
                  onOpen={open}
                />
              </PlatePair>
            }
          >
            <p>
              BrynQ today. Two parts of the product: the connections that move the data, and the
              dashboards built on the data those connections move.
            </p>
            <p className="text-sm text-ink-500">Click either to open it full size.</p>
          </PlateAside>
        </Slide>

        {/* =========================== 05 SCALE =========================== */}
        <ChapterOpen
          id="ch-scale"
          n="05"
          name="Grow"
          title="What could change for the business"
          question="What could happen if setup drops from months to weeks?"
        />

        <Slide id="why-it-matters" chapter="05" height="tall">
          <Kicker label="Why faster setup matters to the business" />
          <Headline level={3}>
            Faster setup is not only about making the product nicer to use.{' '}
            <Em>It would change how far the business can grow.</Em>
          </Headline>

          <div className="mt-stage grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <Cascade
              steps={[
                '~2 weeks instead of ~6 months',
                'The team can do more setups',
                'More new customers up and running',
                'Growing without hiring someone for every new customer',
              ]}
            />
            <div className="flex flex-col justify-center">
              <p className="max-w-md text-base leading-[1.6] text-ink-600 md:text-lg">
                Everything in this part is a guess about where templates could lead, not something
                we have measured yet. The chance here is not only saving time: the same team could
                help more customers.
              </p>
            </div>
          </div>
        </Slide>

        <Slide id="capacity" chapter="05" height="auto">
          <Kicker label="What the team could do" />
          <Headline level={3}>What could happen if 26 weeks of work becomes 2 weeks?</Headline>

          <div className="mt-stage grid gap-12 lg:grid-cols-2 lg:gap-16">
            <CapacityYear
              label="The old way"
              cycle="~26 weeks per setup"
              count={2}
              result="~2 setups a year"
            />
            <CapacityYear
              label="With templates"
              cycle="~2 weeks per setup"
              count={26}
              result="~26 setups a year"
            />
          </div>

          <div className="mt-stage grid gap-10 border-t border-border pt-12 md:grid-cols-2">
            <Metric
              figure={<Count to={92} prefix="~" suffix="%" />}
              caption="Expected cut in setup time"
            />
            <Metric
              figure={<Count to={13} prefix="~" suffix="×" />}
              caption="Expected setups per person, compared with before"
            />
          </div>

          <div className="mt-12">
            <Evidence kind="illustrative" />
          </div>

          <Footnote>
            This is a guess based on how long each setup takes, not how many are done today.
            The real number would depend on sales, how hard each connection is, the size of
            the team, how ready customers are, and how much help they need.
          </Footnote>
        </Slide>

        <Slide id="business-model" chapter="05" height="auto">
          <Kicker label="How the business could change" />
          <Headline level={3}>
            The real change is not from six months to two weeks.{' '}
            <Em>It is from doing the same work by hand to building it into the product once.</Em>
          </Headline>

          <div className="mt-stage grid gap-8 lg:grid-cols-2">
            <Ecosystem
              label="Before"
              inside={['Run connection', 'Watch it', 'Read logs']}
              around={[
                'PM-heavy coordination',
                'Developers do the setup',
                'Manual mapping',
                'Customer dependency',
                'The same one-off work, again and again',
              ]}
            />
            <Ecosystem
              label="Where it is heading"
              inside={['Pick', 'Fill in', 'Check', 'Test', 'Go live', 'Manage']}
              around={[
                'Reusable templates',
                'Customers set up, step by step',
                'Human support',
                'Repeatable integrations',
                'Faster onboarding',
                'Scalable delivery',
              ]}
              emphasis
            />
          </div>

          <p className="mt-stage max-w-[26ch] text-[1.75rem] leading-tight md:text-[3rem]">
            From selling the same setup work again and again, to building{' '}
            <Em>connections the product can reuse.</Em>
          </p>
        </Slide>

        {/* ========================== REFLECTION ========================== */}
        <Slide id="as-a-designer" chapter="05" height="tall">
          <Kicker label="What this meant for me as a designer" />
          <Headline level={3}>This stopped being only about screens.</Headline>

          <div className="mt-stage grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Lede wide>
                I started out thinking mostly about making the product easy to use. The more I
                talked to users and followed how setup really happened, the clearer it became that
                the screens were only one part of the problem.
              </Lede>
              <p className="label mt-12 text-ink-500">The questions that got more interesting</p>
              <ul className="mt-6 space-y-4">
                {[
                  'What should the product take care of?',
                  'What should the customer be able to do?',
                  'What should remain human?',
                  'Which of the team’s know-how should become part of the product?',
                  'How can good design help the business make money?',
                ].map((q) => (
                  <li key={q} className="flex gap-4 text-base leading-snug text-ink-600 md:text-lg">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-ink-400" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <p className="label-strong mb-8">How the project grew</p>
              <Ladder
                rungs={['Screens', 'How work flows', 'The service', 'What the product does', 'The business']}
              />
            </div>
          </div>
        </Slide>

        <Slide id="learned" chapter="05" height="full" invert center>
          <p className="label-strong">What I learned</p>

          <p className="mt-10 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            This project taught me that redesigning a product can mean redesigning the service
            around it. The biggest lesson was that letting customers do things themselves does
            not have to mean taking people away. It means the product does the work that
            repeats, customers are in control where that makes sense, and real people stay
            there to help when it matters.
          </p>

          <p className="mt-10 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            That change, from designing screens to shaping the product and the service
            together, became the most important part of my work on BrynQ.
          </p>

          <Statement>
            I did not just redesign how BrynQ looked. <Em>I helped rethink what BrynQ should do.</Em>
          </Statement>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/case-study/brynq/story"
              className="bg-foreground px-6 py-3.5 text-base text-background transition-transform duration-500 ease-smooth hover:-translate-y-0.5"
            >
              Watch this as slides
            </Link>
            <Link
              to="/case-study/brynq/deep"
              className="border border-border px-6 py-3.5 text-base text-ink-600 transition-colors hover:border-foreground hover:text-foreground"
            >
              Read the long version
            </Link>
            <Link
              to="/case-study/brynq/vault"
              className="border border-border px-6 py-3.5 text-base text-ink-600 transition-colors hover:border-foreground hover:text-foreground"
            >
              Screens and details, kept private
            </Link>
          </div>
        </Slide>

        {/* Quick-scan recap, for anyone who scrolled fast and wants the spine. */}
        <Slide id="recap" chapter="05" height="auto">
          <Kicker label="The story in fifteen lines" />
          <ol className="grid gap-x-16 gap-y-5 md:grid-cols-2">
            {[
              'Customers hardly used BrynQ.',
              'I researched why.',
              'The real problem was bigger than a hard-to-use app.',
              'Connections took ~6 months, and were mostly made outside BrynQ.',
              'I asked what the product should really be in charge of.',
              'We tried removing the technical hard parts completely, with a chat.',
              'Research said customers wanted to do it themselves, but not alone.',
              'The answer: customers do it themselves, with help.',
              'Developers already knew a lot that could be reused.',
              'We turned the repeated setup steps into templates.',
              'AI moved behind the scenes, helping developers build templates faster.',
              'Our estimate: ~6 months could become ~2 weeks, ~92% less time.',
              'Our estimate: the same team could do ~13× more setups.',
              'That would mean more customers, with the same team.',
              'The project grew from redesigning screens to redesigning the product and the service.',
            ].map((line, i) => (
              <li key={line} className="flex gap-5 border-b border-border py-3">
                <span className="label w-6 shrink-0 pt-1.5 tabular-nums text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base leading-snug md:text-lg">{line}</span>
              </li>
            ))}
          </ol>
        </Slide>
      </main>

      <Lightbox figure={figure} onClose={close} />

      <Contact />
    </div>
  );
};

export default BrynqCaseStudy;
