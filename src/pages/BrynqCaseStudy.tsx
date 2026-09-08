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
import ReadingProgress from '@/components/ReadingProgress';
import FadeInImage from '@/components/FadeInImage';
import { StorylineNav, type Storyline } from '@/components/story/Storyline';
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
  MetricRow,
  MetricStack,
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
      { id: 'reframing', title: 'How the project changed shape' },
      { id: 'timeline', title: 'The five chapters' },
    ],
  },
  {
    n: '01',
    name: 'Understand',
    target: 'ch-understand',
    slides: [
      { id: 'discovery', title: 'Many customers saw no need for BrynQ' },
      { id: 'tension', title: 'Customer simplicity against business ambition' },
      { id: 'ia', title: 'Working out what belonged where' },
      { id: 'into-02', title: 'How is an interface actually created?' },
    ],
  },
  {
    n: '02',
    name: 'Reframe',
    target: 'ch-reframe',
    slides: [
      { id: 'journey', title: 'Following one interface from sale to launch' },
      { id: 'the-question', title: 'The interface was not created in BrynQ' },
      { id: 'artefact-scenario', title: 'The real product surface was a spreadsheet' },
      { id: 'behind', title: 'Looking behind the interface' },
      { id: 'hidden-asset', title: 'The integration encyclopaedia nobody had productised' },
      { id: 'direction', title: 'From custom implementation to reusable logic' },
      { id: 'into-explore', title: 'How much should customers do themselves?' },
    ],
  },
  {
    n: '03',
    name: 'Explore',
    target: 'ch-explore',
    slides: [
      { id: 'ai-concept', title: 'Could a conversation build an interface?' },
      { id: 'ai-interaction', title: 'The interaction model behind the chat' },
      { id: 'ai-research', title: 'Easier did not mean customers wanted to own it' },
      { id: 'ai-pivot', title: 'The better model the experiment defined' },
    ],
  },
  {
    n: '04',
    name: 'Productise',
    target: 'ch-productise',
    slides: [
      { id: 'from-ai-to-templates', title: 'From autonomous creation to assisted self-service' },
      { id: 'template-foundation', title: 'Do not rebuild what BrynQ already knows' },
      { id: 'template-model', title: 'What the template model looks like' },
      { id: 'one-to-many', title: 'One template, many customers' },
      { id: 'delivery-impact', title: 'Months of implementation become weeks' },
    ],
  },
  {
    n: '05',
    name: 'Scale',
    target: 'ch-scale',
    slides: [
      { id: 'why-it-matters', title: 'Why faster delivery would matter to the business' },
      { id: 'capacity', title: 'If 26 weeks becomes 2 weeks' },
      { id: 'business-model', title: 'From repeated service work to product capability' },
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
    'From developer-led integrations to a scalable self-service product. Turning months of custom implementation into guided, reusable templates.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Every artefact on this page is a wide board shrunk into a text column,
  // so each plate opens full size rather than asking anyone to squint.
  const { figure, open, close } = useLightbox();

  return (
    // The storyline rail is fixed in the left margin at xl and up, so the
    // page itself steps aside for it. Below that the rail is not rendered
    // and the padding collapses.
    <div className="rail-offset">
      <Navigation />
      <ReadingProgress />

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
          <div className="mx-auto flex w-full max-w-[var(--shell)] flex-1 flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pt-32 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <StudyOpening
                slug="brynq"
                client="BrynQ · B2B integration platform · 2023 to present"
                headline={
                  <>
                    From developer-led integrations to a{' '}
                    <Em>scalable self-service product.</Em>
                  </>
                }
              />

              <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
                When I joined the work around BrynQ, customers still depended heavily on
                developers and project managers to create integrations. My work started with
                product usability, and moved into redesigning how interfaces were created, how
                implementation knowledge could become reusable templates, and how customers could
                become more independent without losing the human support they valued.
              </p>

              <dl className="mt-10 grid max-w-3xl gap-x-10 gap-y-5 border-t border-border pt-6 sm:grid-cols-[auto_1fr]">
                <div>
                  <dt className="label mb-3 text-ink-500">Role</dt>
                  <dd className="text-base text-ink-600">Product Designer</dd>
                </div>
                <div>
                  <dt className="label mb-3 text-ink-500">Scope</dt>
                  <dd className="text-base leading-snug text-ink-600">
                    Research · Information architecture · Service design · Workflow redesign ·
                    Interface design · Product strategy · Template-based onboarding
                  </dd>
                </div>
              </dl>
            </div>

            {/* The four numbers, stacked as a rail rather than a card grid. */}
            <div className="lg:pt-16">
              <p className="label mb-5 text-ink-500">Design overview</p>
              <MetricStack>
                <MetricRow
                  label="Implementation cycle"
                  figure={
                    <>
                      ~6 mo <span className="text-ink-400">&rarr;</span> ~2 wk
                    </>
                  }
                  caption="Implementation cycle for a standard integration"
                />
                <MetricRow
                  label="Lead time"
                  figure={<Count to={92} suffix="%" prefix="~" />}
                  caption="Projected reduction in implementation lead time"
                />
                <MetricRow
                  label="Delivery capacity"
                  figure={<Count to={13} prefix="~" suffix="×" />}
                  caption="Projected increase in delivery capacity"
                />
                <MetricRow
                  label="Project manager feedback"
                  figure="2× easier"
                  caption="Reported by the project manager after templates were introduced"
                />
              </MetricStack>

              <Footnote>
                The first three values represent potential operational impact, based on a shift
                from roughly 26 weeks of custom implementation to roughly 2 weeks of
                template-driven setup. The fourth is stakeholder feedback.
              </Footnote>
            </div>
          </div>
          </div>

          <ScrollCue targetId="reframing" />
        </section>

        {/* Wayfinding starts once the hero is behind you. */}
        <StorylineNav chapters={storyline} />

        {/* ====================== THE CORE NARRATIVE ====================== */}
        <Slide id="reframing" height="auto">
          <Kicker label="How the project changed shape" />

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
                I joined BrynQ expecting to redesign a technical integration product.
              </p>
              <p>
                But customer conversations exposed a bigger problem: customers were barely
                operating the product themselves.
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
          <div className="mt-20 md:mt-28">
            <p className="label-strong">What I found</p>

            <div className="mt-10 md:mt-12">
              <HandoffChain
                steps={[
                  { name: 'Customer' },
                  { name: 'Project Manager', note: 'Requirements, coordination and hand-offs' },
                  { name: 'Developer', note: 'Configuration and implementation' },
                  {
                    name: 'BrynQ',
                    note: 'The product customers eventually received',
                    accent: true,
                  },
                ]}
              />
            </div>

            {/* The insight, set as a pull quote rather than another paragraph. */}
            <p className="mt-16 max-w-[38ch] text-[1.75rem] leading-[1.15] md:mt-20 md:text-[2.25rem]">
              The product wasn&rsquo;t yet the workflow.
              <br />
              The organisation around it was.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
              Customers depended on our team to get integrations configured and running, which
              meant improving individual screens would only solve part of the problem.
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
                  for customers to configure and manage{' '}
                  <br className="hidden md:inline" />
                  integrations themselves?
                </>
              }
              next="Defining the self-service model"
              nextHref="#timeline"
            >
              That reframing shifted the project from interface redesign to redesigning how BrynQ
              was delivered and used.
            </Takeaway>
          </Reveal>
        </Slide>

        {/* ==================== TRANSFORMATION TIMELINE ==================== */}
        <Slide id="timeline" height="tall">
          <Kicker label="The five chapters" />
          <Headline level={3}>The transformation journey</Headline>
          <Lede wide>
            What started as a usability problem gradually became a rethink of how BrynQ, its
            customers and its delivery teams work together. Each chapter below is a stop on that
            journey; step into any of them.
          </Lede>

          <div className="mt-14 md:mt-20">
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
                  name: 'Reframe',
                  question: 'Why did interface creation happen outside the product?',
                  href: '#ch-reframe',
                  turn: true,
                },
                {
                  n: '03',
                  name: 'Explore',
                  question: 'Could a conversational experience remove the technical barrier?',
                  href: '#ch-explore',
                },
                {
                  n: '04',
                  name: 'Productise',
                  question:
                    'How could repeatable implementation knowledge become reusable templates?',
                  href: '#ch-productise',
                },
                {
                  n: '05',
                  name: 'Scale',
                  question: 'What happens when delivery time collapses from months to weeks?',
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
          title="Product discovery and information architecture"
          question="Why weren't customers using BrynQ?"
        />

        <Slide id="discovery" chapter="01" height="tall">
          <Kicker label="The uncomfortable discovery" />
          <Headline level={3}>
            Customers didn&rsquo;t just find BrynQ technical.{' '}
            <Em>Many didn&rsquo;t feel they needed to use it at all.</Em>
          </Headline>

          <Lede>
            I started by interviewing users to understand how they perceived the product, what
            they used it for and where they struggled. I expected to find usability problems.
            What I found was more fundamental.
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
              The product had shipped widely. Reach was never the problem.
            </FigurePanel>

            <FigurePanel
              label="Active customers"
              figure="7"
              marker="accent"
              visual={<BarTrack value={7} />}
            >
              Seven opened it with any regularity, and they opened it to read integration logs.
            </FigurePanel>

            <FigurePanel
              label="User type"
              figure="Admin only"
              visual={
                <RoleSplit
                  reached={['Administrators', 'Technical users']}
                  missed={['Consultants', 'Functional users']}
                />
              }
            >
              Not the people the product had to serve for the business to stop scaling on
              headcount.
            </FigurePanel>
          </DataPanels>

          <PanelNote>
            Internal product figures for SalureConnect before the BrynQ redesign, reported by the
            team during discovery. Customer counts are approximate and describe the state at the
            time the work started.
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
            className="mt-16 md:mt-20"
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
              SalureConnect, before the work described here. Two areas of the platform: the
              dashboards overview, and the admin screen where dashboards were managed.
            </p>
            <p className="text-sm text-ink-500">Qlik GUIDs masked. Click either to open it.</p>
          </PlateAside>

          <div className="sequence mt-14 grid gap-3 md:mt-20 md:grid-cols-3 md:gap-4">
            <Quote gloss="The terminology and workflows reflected internal technical thinking.">
              This feels technical
            </Quote>
            <Quote gloss="There was little hierarchy or clear progression through the product.">
              I don&rsquo;t know what I&rsquo;m supposed to do
            </Quote>
            <Quote gloss="Developers and project managers still handled most meaningful configuration work.">
              Salure already does this for me
            </Quote>
          </div>

          <Pov kind="business">
            If customers do not meaningfully use the product themselves, the business stays
            dependent on implementation teams for every new customer. Growth costs headcount.
          </Pov>
        </Slide>

        <Slide id="tension" chapter="01" height="tall">
          <Kicker label="Customer reality vs business ambition" />
          <Headline level={3}>
            Customers wanted simplicity. <Em>The business needed self-sufficiency.</Em>
          </Headline>

          <div className="mt-14 md:mt-20">
            <Split
              left={{
                label: 'Customer reality',
                children: (
                  <div className="space-y-8">
                    <p className="text-xl leading-snug md:text-[1.75rem]">
                      &ldquo;I just want the integration to work.&rdquo;
                    </p>
                    <p className="text-xl leading-snug md:text-[1.75rem]">
                      &ldquo;I don&rsquo;t want to become an integration expert.&rdquo;
                    </p>
                    <p className="text-xl leading-snug md:text-[1.75rem]">
                      &ldquo;I still want help when I need it.&rdquo;
                    </p>
                  </div>
                ),
              }}
              right={{
                label: 'Business ambition',
                children: (
                  <div className="space-y-8">
                    <p className="text-lg leading-[1.55] text-ink-600 md:text-xl">
                      BrynQ&rsquo;s longer-term product direction required customers to become
                      increasingly capable of configuring and managing integrations themselves,
                      so that delivery stopped scaling with headcount.
                    </p>
                  </div>
                ),
              }}
              centre={
                <>
                  My job became finding the space where customer confidence and{' '}
                  <Em>business scalability could meet.</Em>
                </>
              }
            />
          </div>
        </Slide>

        <Slide id="ia" chapter="01" height="auto">
          <Kicker label="Making sense of the product" />
          <Headline level={3}>
            Before redesigning screens, I needed to understand{' '}
            <Em>what belonged where.</Em>
          </Headline>
          <Lede wide>
            I mapped the platform, grouped capabilities and compared the existing structure with
            what users expected to find in each section. That exposed where the information
            architecture was working against the people using it.
          </Lede>

          <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <IaMap
                groups={[
                  { label: 'Orientation', items: ['Home', 'Activity', 'Monitoring'] },
                  { label: 'Setting up', items: ['Connections', 'Interfaces', 'Templates'] },
                  { label: 'Data', items: ['Mapping', 'Runs'] },
                  { label: 'Governance', items: ['Settings', 'Administration'] },
                ]}
              />
              <p className="label mt-6 text-ink-500">
                Simplified for this telling. The working map is under NDA.
              </p>
            </div>

            <div className="panel p-6 md:p-8">
              <p className="label-strong">Before state · what kept surfacing</p>
              <ul className="mt-6 space-y-4">
                {[
                  'Technical terminology in customer-facing places',
                  'Unclear hierarchy between sections',
                  'No obvious place to start',
                  'The product organised around internal concepts',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-snug text-ink-600">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-ink-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12 md:mt-24">
            <p className="label-strong mb-6">Where it left me</p>
            <p className="max-w-[24ch] text-[1.5rem] leading-tight text-ink-500 md:text-[2rem]">
              The problem wasn&rsquo;t only &ldquo;How do I simplify the UI?&rdquo;
            </p>
            <p className="mt-8 max-w-[26ch] text-[2rem] leading-[1.05] md:text-[3.5rem]">
              It became: what meaningful work should actually{' '}
              <Em>happen inside BrynQ?</Em>
            </p>
          </div>
        </Slide>

        {/* Handoff into chapter 02. */}
        <Slide id="into-02" chapter="01" height="short">
          <Headline level={3}>
            That led to a bigger question:{' '}
            <Em>how is a BrynQ interface actually created?</Em>
          </Headline>
          <div className="mt-12 md:mt-16">
            <Takeaway label="Where chapter 01 left us" next="Reframe" nextHref="#ch-reframe">
              Customers were not avoiding BrynQ out of laziness; the product simply was not where
              interface creation happened. To redesign it properly, I had to follow the complete
              journey from sale to a working integration.
            </Takeaway>
          </div>
        </Slide>

        {/* ========================== 02 REFRAME ========================== */}
        <ChapterOpen
          id="ch-reframe"
          n="02"
          name="Reframe"
          title="Reimagining interface creation"
          question="Why did interface creation happen outside the product?"
        />

        <Slide id="journey" chapter="02" height="auto">
          <Kicker label="Following one interface from sale to launch" />
          <Headline level={3}>I followed what happened between signing and first value.</Headline>
          <Lede>
            A standard integration took months. Most of that time wasn&rsquo;t development.
          </Lede>

          {/*
            The whole delivery process on one line, so the expensive stretch
            is a shape rather than a claim. The costs under discovery are the
            only accent text on the slide.
          */}
          <div className="mt-14 md:mt-20">
            <PhaseTrack
              phases={[
                { name: 'Sale', steps: ['Agreement signed'] },
                {
                  name: 'Discovery and definition',
                  steps: [
                    'Customer onboarding',
                    'PM and developer discovery',
                    'Technical requirements',
                  ],
                  costs: [
                    '3 to 4 hours of meetings',
                    'Weeks of clarification',
                    'A requirements document',
                    'Repeated calls and email',
                  ],
                  emphasis: true,
                },
                {
                  name: 'Configuration',
                  steps: ['Credentials', 'Field mapping', 'Value mapping'],
                },
                {
                  name: 'Build',
                  steps: ['Development', 'Testing', 'Delivery'],
                },
              ]}
            />
          </div>

          {/*
            The number, the span it covers and what it meant, in one block so
            none of the three reads as a caption for the others.
          */}
          <div className="panel mt-16 grid gap-10 p-6 md:mt-20 md:p-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
            <div className="flex gap-5">
              <span className="panel-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                <Clock aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[2rem] leading-none md:text-[2.75rem]">~6 months</p>
                <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
                  From signature to a working integration, for a standard case
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
              The bottleneck wasn&rsquo;t writing code.{' '}
              <Em>It was repeatedly figuring out what needed to be built.</Em>
            </p>
          </div>

          <Pov kind="business">
            Every new sale created months of implementation work before the customer could fully
            use the product. Revenue arrived late, and delivery capacity, not demand, set the
            ceiling on growth.
          </Pov>
        </Slide>

        <Slide id="the-question" chapter="02" height="auto">
          <Kicker label="The real interface" />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <Headline level={3}>
                We called them BrynQ interfaces.{' '}
                <Em>But the interface wasn&rsquo;t really created in BrynQ.</Em>
              </Headline>
              <p className="mt-8 max-w-[36ch] text-base leading-[1.6] text-ink-600 md:mt-10 md:text-lg">
                The real interface lived in places that were never built to run anything. It was
                where the work happened, the decisions were made and the systems were connected.
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
                  title: 'Where the interface was actually created',
                  items: [
                    'Meetings',
                    'Spreadsheets',
                    'Configuration exchanges',
                    'Developer work',
                  ],
                },
                {
                  Icon: PlayCircle,
                  title: 'What the product ultimately did',
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
          <div className="panel mt-14 grid items-center gap-8 p-6 md:mt-16 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] lg:gap-12">
            <div className="flex items-center gap-5">
              <span className="panel-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                <Lightbulb aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </span>
              <p className="text-xl leading-snug md:text-2xl">
                So what exactly was the product doing?
              </p>
            </div>

            <p className="text-sm leading-[1.6] text-ink-600 md:text-base lg:border-l lg:border-border lg:pl-12">
              It had largely become the visual layer where finished interfaces could be run and
              watched. Creation happened everywhere else.
            </p>

            <a
              href="#artefact-scenario"
              className="panel-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-foreground hover:text-background"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
              <span className="sr-only">Where the interface lived</span>
            </a>
          </div>
        </Slide>

        <Slide id="artefact-scenario" chapter="02" height="auto">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.75fr)] lg:items-start lg:gap-14">
            <div>
              <Kicker label="Where the interface lived" />
              <Headline level={3}>
                The real product surface was <Em>a spreadsheet.</Em>
              </Headline>
              <p className="mt-8 max-w-[34ch] text-base leading-[1.6] text-ink-600 md:mt-10 md:text-lg">
                This is where the interface took shape. It held the logic, the rules, the mappings
                and the customer context, passed between the customer, the project manager and the
                developers.
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
                  The actual file. Fourteen columns to specify one integration: what the scenario
                  is, which systems, then every field on both sides with its technical name, its
                  path and its type. The yellow column is comments, where the customer, the
                  project manager and the developer argued it into shape.
                </>
              }
              onOpen={open}
            />
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {[
              {
                title: 'Every integration started here',
                note: 'Before anything was built',
                Icon: Table2,
              },
              { title: 'The contract and the specification', note: 'In the same file' },
              { title: 'The project tracker too', note: 'Status kept in its own columns' },
              {
                title: 'Filled in by three parties at once',
                note: 'Project managers, developers and customer stakeholders, none of them working in the product',
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
          <Headline level={3}>I started looking behind the interface.</Headline>
          <Lede wide>
            I shadowed project managers, worked with interface developers and spoke with
            stakeholders to understand what actually happened during those months. The goal was
            to separate what was genuinely customer-specific from what teams were repeating over
            and over.
          </Lede>

          <div className="mt-14 md:mt-20">
            <Zones
              items={[
                {
                  label: 'Customer-specific',
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
                  title: 'Rebuilt from zero, every time',
                  points: [
                    'Mapping patterns',
                    'Common transformations',
                    'Validation rules',
                    'Authentication requirements',
                  ],
                },
                {
                  label: 'Developer knowledge',
                  title: 'Held in people, not in the product',
                  points: [
                    'How systems connect',
                    'Expected fields',
                    'Common failure points',
                    'Standard integration behaviour',
                  ],
                },
              ]}
            />
          </div>

          <Pov kind="mine">
            Once the three were separated, the middle column stopped looking like work and
            started looking like a product feature nobody had built yet.
          </Pov>
        </Slide>

        <Slide id="hidden-asset" chapter="02" height="auto">
          <Kicker label="The hidden asset" />
          <Headline level={3}>
            The developers had already built{' '}
            <Em>an encyclopaedia of integration knowledge.</Em>
          </Headline>

          {/*
            The same knowledge, twice: scattered through people on the left,
            gathered into one reusable thing on the right. Only the right-hand
            panel carries the accent, because only one of the two is a product.
          */}
          <div className="mt-14 grid items-center gap-8 md:mt-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
            {[
              {
                Icon: Database,
                label: 'Where it lived',
                accent: false,
                items: [
                  { Icon: List, text: 'Expected fields' },
                  { Icon: Waypoints, text: 'Common mappings' },
                  { Icon: Sparkles, text: 'Transformations' },
                  { Icon: Share2, text: 'Connection logic' },
                  { Icon: KeyRound, text: 'Authentication patterns' },
                  { Icon: AlertTriangle, text: 'Recurring technical constraints' },
                ],
                foot: 'In people, documents and habits. Reliable, and impossible to sell twice.',
              },
              {
                Icon: Box,
                label: 'Where it could live',
                accent: true,
                items: [
                  { Icon: Tag, text: 'A named, versioned template' },
                  { Icon: Table2, text: 'Standard mappings, pre-filled' },
                  { Icon: Code2, text: 'Transformations, already written' },
                  { Icon: ShieldCheck, text: 'Validation, built in' },
                  { Icon: Route, text: 'A guided setup path' },
                ],
                foot: 'In the product. Built once, reused for every customer after.',
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
            Most customers were paying for knowledge the company already possessed. That is
            service revenue where there could be product capability.
          </Pov>

          <p className="mt-14 max-w-[24ch] text-[1.75rem] leading-tight md:mt-20 md:text-[3rem]">
            What if that knowledge became <Em>reusable product capability?</Em>
          </p>
        </Slide>

        <Slide id="direction" chapter="02" height="auto">
          <Kicker label="Before and new direction" />
          <Headline level={3}>From custom implementation to reusable product logic</Headline>

          {/*
            Seven bespoke steps against six reusable ones, with the strands
            funnelling through a single point between them. Only the right
            panel is drawn in the accent, because only one of the two is where
            the product was going.
          */}
          <div className="mt-14 grid items-stretch gap-10 md:mt-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
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
                Turning bespoke work into scalable, repeatable logic.
              </p>
            </div>

            <div className="panel flex flex-col border border-accent p-6 md:p-8">
              <p className="label inline-flex w-fit rounded-md border border-accent px-2.5 py-1.5 text-accent">
                New direction
              </p>
              <div className="mt-8 flex-1">
                <NumberedFlow
                  steps={[
                    'Known integration logic',
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

          <p className="mt-16 max-w-[22ch] text-[1.75rem] leading-tight md:mt-20 md:text-[3rem]">
            Build the known parts once. <Em>Ask customers only for what is different.</Em>
          </p>

          <Pov kind="business">
            This changed the economics: from repeating implementation effort per customer, to
            building assets that could be reused across all of them.
          </Pov>
        </Slide>

        {/* Handoff into chapter 03. */}
        <Slide id="into-explore" chapter="02" height="short">
          <Headline level={3}>But how much should customers actually do themselves?</Headline>
          <div className="mt-12 md:mt-16">
            <Takeaway label="Where chapter 02 left us" next="Explore" nextHref="#ch-explore">
              The business wanted self-sufficiency. The customers I spoke with still wanted
              reassurance and human support. Before settling anywhere in between, we went and
              tested the far end of it.
            </Takeaway>
          </div>
        </Slide>

        {/* ========================== 03 EXPLORE ========================== */}
        <ChapterOpen
          id="ch-explore"
          n="03"
          name="Explore"
          title="AI-guided interface creation"
          question="Could a conversational experience remove the technical barrier?"
        />

        <Slide id="ai-concept" chapter="03" height="auto">
          <Kicker label="The experiment" />
          <Headline level={3}>
            Could a non-technical user create an interface{' '}
            <Em>simply by having a conversation?</Em>
          </Headline>

          <div className="mt-14 grid gap-12 md:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <Pov kind="mine">
                Once we understood how much technical complexity sat in the implementation
                process, I started exploring whether that complexity could be abstracted away
                completely, so that users described what they wanted to connect in their own
                words.
              </Pov>

              <div className="mt-12 md:mt-14">
                <p className="label-strong">What the conversation would carry</p>
                <div className="mt-6">
                  <IconList
                    connected
                    items={[
                      { text: 'Selecting the HR and payroll applications' },
                      { text: 'Providing the required connection information' },
                      { text: 'Understanding which data would be transferred' },
                      { text: 'Reviewing field mappings' },
                      { text: 'Identifying missing mappings' },
                      { text: 'Applying transformations' },
                      { text: 'Validating the final configuration' },
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
                actions={['Transform', 'Map', 'Validate']}
              />
              <p className="label mt-4 text-ink-500">
                Concept · the conversation and the data model are one surface
              </p>
            </div>
          </div>

          {/*
            The concept's own question, closing the slide it belongs to rather
            than standing on its own.
          */}
          <div className="mt-16 border-t border-border pt-14 md:mt-20 md:pt-16">
            <p className="max-w-[52ch] text-base leading-[1.6] text-ink-600 md:text-lg">
              Instead of asking customers to understand the technical implementation model, the
              product would translate their intent into the required setup.
            </p>
            <p className="mt-10 max-w-[18ch] text-[2rem] leading-[1.04] md:mt-12 md:text-[3.5rem]">
              Could we hide the technical complexity <Em>behind a conversation?</Em>
            </p>
          </div>

          {/*
            Where the concept actually started. Two boards rather than one:
            the first asks where the conversation sits on the page, the second
            asks what happens after it, which turned out to be the harder
            half and the reason the model needed a summary and an error path
            before it needed better copy.
          */}
          <div className="mt-16 space-y-10 md:mt-20 md:space-y-12">
            <Plate
              src={aiConceptSketches}
              alt="An exploration board of five low-fidelity frames of the BrynQ landing page, each placing a chat panel differently against the dashboard behind it, with sticky notes underneath naming the intent of each option."
              width={2924}
              height={659}
              label="Exploration"
              caption="Five placements for the same idea. The notes under each frame name what that version is for: suggest topics, confirm, clarify, ask related questions, walk the user through creating a connector."
              onOpen={open}
            />
            <Plate
              src={aiConceptFlow}
              alt="A concept flow board tracing the conversational builder from the landing page through the chat opening, into three numbered task-summary states, with return loops for error logs and post-rectification updates."
              width={2591}
              height={873}
              label="Concept flow"
              caption="The same idea drawn end to end. The chat opens the flow, but the summary panel carries it: three states for the run, and two loops back for error logs and corrected data. The conversation was never meant to be the whole interface."
              onOpen={open}
            />
          </div>
        </Slide>

        <Slide id="ai-interaction" chapter="03" height="auto">
          <Kicker label="The interaction model" />
          <Headline level={3}>
            The conversation was not just a chatbot.{' '}
            <Em>It controlled the interface-building workflow.</Em>
          </Headline>

          <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="flex gap-5 self-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border">
                <Target aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </span>
              <p className="max-w-[34ch] self-center text-[1.375rem] leading-tight md:text-[1.75rem]">
                The goal was to let a user understand what was happening without needing to think
                like an integration developer.
              </p>
            </div>

            <div>
              <p className="label-strong mb-8">What one turn set in motion</p>
              <Cascade
                steps={[
                  {
                    name: 'Conversation',
                    note: 'You say what you want to connect.',
                  },
                  { name: 'Data preview', note: 'You see your data and mappings in context.' },
                  { name: 'Transformation', note: 'The data is shaped and prepared.' },
                  { name: 'Validation', note: 'Issues are checked for and quality confirmed.' },
                  { name: 'Ready to activate', note: 'Everything is set. You make it live.' },
                ]}
              />
            </div>
          </div>

          <Plate
            src={aiChatFrames}
            alt="Three full-screen wireframes of the conversational interface builder: the chat panel beside a scenario list, then beside a summary rail tracking systems, scenarios, schedule, mappings and settings, then beside an error panel offering fixes for each failed step."
            width={1804}
            height={474}
            label="The interaction model"
            caption="Three moments from the same screen. The chat never works alone: it sits beside the scenario list, then the summary rail that tracks systems, scenarios, schedule, mappings and settings, then the error panel. The conversation drives the workflow, and the panel beside it is how you check what the conversation just did."
            onOpen={open}
            className="mt-14 md:mt-20"
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
          <div className="mt-12 md:mt-16">
            <p className="label-strong mb-6">Every turn, end to end</p>
            <div className="grid gap-5 sm:grid-cols-3 md:gap-6">
              <Plate
                src={aiChatSteps1}
                alt="The first stretch of the conversational build: adding and authorising the two systems, describing the scenario in the user's own words, the assistant asking follow-up questions, the scenario list building up in the sidebar, and a confirmation step before field mapping begins."
                width={619}
                height={1743}
                caption="Authorise, describe, confirm."
                onOpen={open}
              />
              <Plate
                src={aiChatSteps2}
                alt="The middle stretch: mapping fields between system A and system B, setting the interface schedule with a recurrence pattern and start date, then a run of short settings prompts covering the docker image, the runfile path, the SFTP mapping and the timezone."
                width={626}
                height={1842}
                caption="Map, schedule, configure."
                onOpen={open}
              />
              <Plate
                src={aiChatSteps3}
                alt="The last stretch: an error panel listing ten issues found on the test run with severity labels, the same list resolved and ready to run again, a progress bar for the re-run, and a final confirmation that the interface has been created."
                width={670}
                height={1755}
                caption="Test, fix, create."
                onOpen={open}
              />
            </div>
            <p className="mt-5 max-w-[68ch] text-sm leading-[1.55] text-ink-500">
              Read across and the interaction stops looking like a chatbot. Most of the turns are
              the system reporting what it has done and asking for the one decision it cannot
              make, which is why the errors panel needed as much design as the conversation did.
            </p>
          </div>
        </Slide>

        <Slide id="ai-research" chapter="03" height="auto">
          <Kicker label="The research changed the direction" />
          <Headline level={3}>
            Making the process easier did not mean customers{' '}
            <Em>wanted to own all of it.</Em>
          </Headline>

          <div className="mt-14 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <Pov kind="mine">
                When I tested the broader self-service direction and kept speaking with customers,
                another pattern came up. They liked less technical complexity and faster setup.
                They did not like being the last line of defence.
              </Pov>

              <div className="mt-12 md:mt-14">
                <p className="label-strong">What they still wanted</p>
                <div className="mt-6">
                  <IconList
                    items={[
                      { text: 'A human point of contact', Icon: User },
                      { text: 'Reassurance that the setup was correct', Icon: ShieldCheck },
                      { text: 'Someone accountable when something went wrong', Icon: Users },
                      { text: 'Help with unusual situations', Icon: Wrench },
                      { text: 'Validation before going live', Icon: CheckCircle2 },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="label-strong">The insight</p>
              <p className="mt-7 text-xl leading-snug text-ink-600 md:text-2xl">
                The real barrier was not only technical complexity.
              </p>
              <p className="mt-5 text-[1.75rem] leading-tight md:text-[2.5rem]">
                It was also <Em>confidence.</Em>
              </p>

              {/* The two poles the answer sits between, before the axis below
                  places the product on them properly. */}
              <div className="mt-12 max-w-md md:mt-14">
                <AxisPair
                  left={{ label: 'Guidance', Icon: User }}
                  right={{ label: 'Autonomy', Icon: Rocket }}
                />
              </div>

              <p className="mt-14 max-w-[20ch] text-[2rem] leading-[1.05] md:text-[3rem]">
                Customers wanted independence. <Em>They did not want isolation.</Em>
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
            className="mt-16 md:mt-20"
            media={
              <Plate
                dense
                src={aiResearchSynthesis}
                alt="A research synthesis board in three rows. Painpoints in blue at the bottom cover navigation, unclear system feedback, error recovery and data transformation. Goals in orange group them into simplifying navigation, interface clarity, error handling and transformation guidance. Design ideas in purple sit above each goal."
                width={1888}
                height={1849}
                caption="Painpoints, goals, design ideas"
                onOpen={open}
              />
            }
          >
            <p>
              Interview painpoints clustered into four goals, with design ideas built on top of
              each.
            </p>
            <p>
              Read the bottom row and the same thing keeps surfacing. People were not stuck on the
              technology. They were stuck on not knowing whether what they had just done was
              right.
            </p>
            <p className="text-sm text-ink-500">Click to open it full size.</p>
          </PlateAside>

          <div className="mt-16 w-full md:mt-24">
            <Continuum
              left="Developer-led"
              right="Fully autonomous"
              marker="Assisted self-service"
              markerNote="The position the research argued for, and the one the product moved toward."
              gains={[
                { Icon: Zap, text: 'Faster setup' },
                { Icon: ShieldCheck, text: 'More confidence' },
                { Icon: TrendingUp, text: 'Better adoption' },
              ]}
            />
          </div>

          <Pov kind="business">
            A fully autonomous experience risked solving the company&rsquo;s self-service ambition
            without solving what customers actually valued. Adoption, not capability, would have
            been the thing that failed.
          </Pov>
        </Slide>

        <Slide id="ai-pivot" chapter="03" height="auto">
          <Kicker label="The pivot" />
          <Headline level={3}>The experiment helped us define the right level of self-service.</Headline>

          {/* Four beats of one decision, read left to right. */}
          <div className="mt-16 md:mt-24">
            <Stages
              items={[
                {
                  label: 'Initial hypothesis',
                  text: 'AI could guide the full interface creation process.',
                },
                {
                  label: 'What research showed',
                  text: 'Customers wanted more independence, but still wanted reassurance.',
                },
                { label: 'Product direction', text: <Em>Assisted self-service.</Em> },
                {
                  label: 'What customers touch',
                  text: 'Templates become the main customer-facing layer.',
                },
              ]}
            />
          </div>

          <div className="mt-16 md:mt-24">
            <Takeaway label="Where chapter 03 left us" next="Productise" nextHref="#ch-productise">
              The experiment did not fail. It clarified the right interaction model: the product
              should provide the known integration logic, while customers configure only what is
              specific to them.
            </Takeaway>
          </div>
        </Slide>

        {/* ========================= 04 PRODUCTISE ========================= */}
        <ChapterOpen
          id="ch-productise"
          n="04"
          name="Productise"
          title="Template-based assisted self-service"
          question="How could repeatable implementation knowledge become reusable templates?"
        />

        <Slide id="from-ai-to-templates" chapter="04" height="auto">
          <Kicker label="From autonomous creation to assisted self-service" />
          <Headline level={3}>
            The answer was not asking customers to build everything themselves.{' '}
            <Em>It was giving them a strong starting point.</Em>
          </Headline>

          <Lede wide>
            The AI exploration clarified what customers actually needed. They did not want to
            become integration experts.
          </Lede>

          <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <ColumnLabel>What customers wanted</ColumnLabel>
              <div className="mt-8 space-y-3">
                <IconRowCard Icon={Puzzle}>Less technical complexity</IconRowCard>
                <IconRowCard Icon={Clock}>Less waiting</IconRowCard>
                <IconRowCard Icon={SlidersHorizontal}>More control</IconRowCard>
                <IconRowCard Icon={User}>A human available when needed</IconRowCard>
              </div>
            </div>

            <div>
              <ColumnLabel>What the model does</ColumnLabel>
              <div className="mt-8 flex flex-col gap-3">
                <IconRowCard Icon={Sparkles} tall>
                  The product handles <Em>what is repeatable.</Em>
                </IconRowCard>
                <IconRowCard Icon={Fingerprint} tall>
                  The customer provides <Em>what is unique.</Em>
                </IconRowCard>
                <IconRowCard Icon={User} tall>
                  A human stays available <Em>where confidence matters.</Em>
                </IconRowCard>
              </div>
            </div>
          </div>

          <div className="mt-14 space-y-6 border-t border-border pt-10 md:mt-20">
            <p className="max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
              That led us toward templates. Instead of starting from a blank integration, the
              known technical logic could already be prepared.
            </p>
            {/*
              Where the AI went. The page carried a slide on this and it was
              cut for being one beat too many, but the recap at the end still
              refers to it, and the deck still tells it. One line here keeps
              all three surfaces saying the same thing.
            */}
            <p className="max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
              The AI did not leave the product either. It moved upstream, out of the customer
              flow and into the build, where it helps developers write template code faster and
              the library grows quicker than it could by hand.
            </p>
          </div>
        </Slide>

        <Slide id="template-foundation" chapter="04" height="auto">
          <Kicker label="The template foundation" />
          <Headline level={3}>
            Do not ask the customer to rebuild <Em>what BrynQ already knows.</Em>
          </Headline>
          <Lede wide>
            Reusable templates became the foundation of the assisted self-service model.
          </Lede>

          <div className="mt-14 md:mt-20">
            <StepRail />
            <div className="grid gap-3 md:grid-cols-3">
              <StepCard
                n="1"
                Icon={Database}
                title="BrynQ knows"
                points={['Known integration logic', 'Standard mappings', 'Required steps']}
              />
              <StepCard
                n="2"
                Icon={FileText}
                title="Template"
                points={['Prepared starting point', 'Guided setup', 'Built-in validation']}
              />
              <StepCard
                n="3"
                Icon={User}
                title="Customer configures"
                points={[
                  'Credentials',
                  'Organisation-specific values',
                  'Required selections',
                  'Exceptions',
                ]}
              />
            </div>
            <ConvergeFoot>Result: a working interface</ConvergeFoot>
          </div>

          {/*
            The rail above, drawn. These are exploration, not delivery, and
            they are sized that way: dense, side by side, beside a note. The
            shipped screens on the next slide get the full column.
          */}
          <PlateAside
            label="Exploration"
            className="mt-16 md:mt-20"
            media={
              <PlatePair>
                <Plate
                  dense
                  src={guidedSetupWizard}
                  alt="Three frames of the guided setup wizard, stepping through Goal, Source, Target, Data and Summarise. The source and target steps show a searchable grid of applications, and a side panel asks the user to choose or create an authorised connection."
                  width={2271}
                  height={546}
                  caption="Guided setup"
                  onOpen={open}
                />
                <Plate
                  dense
                  src={templateConfigUi}
                  alt="A board of template and configuration screens: the interface overview list, the create menu offering a new interface or a template, the template configuration form asking what the interface is for and how often it should run, and the library modal of pre-built templates filtered by source and target application."
                  width={1571}
                  height={1774}
                  caption="Template and configuration"
                  onOpen={open}
                />
              </PlatePair>
            }
          >
            <p>
              The model drawn before it was built. Setup as five named steps rather than a blank
              configuration screen, and a create menu that offers a template instead of a blank
              start.
            </p>
            <p className="text-sm text-ink-500">
              Design files, not the product. What shipped is on the next slide. Click either to
              open it full size.
            </p>
          </PlateAside>
        </Slide>

        <Slide id="template-model" chapter="04" height="auto">
          <Kicker label="What the template model looks like" />
          <Headline level={3}>
            Templates turned repeated implementation work into{' '}
            <Em>reusable product capability.</Em>
          </Headline>

          <div className="mt-14 md:mt-20">
            <div className="grid gap-3 md:grid-cols-3">
              <ProvideCard
                label="BrynQ provides"
                title="The known parts"
                points={[
                  'Known integration structure',
                  'Standard mappings',
                  'Transformations',
                  'Required connection steps',
                  'Validation logic',
                  'Guided setup',
                ]}
              />
              <ProvideCard
                label="The customer provides"
                title="Only what is theirs"
                points={[
                  'Credentials',
                  'Organisation-specific values',
                  'Required selections',
                  'Exceptions',
                ]}
              />
              <ProvideCard
                label="Human support provides"
                title="The confidence layer"
                points={['Reassurance', 'Validation', 'Escalation', 'Support for complex cases']}
              />
            </div>
            <ConvergeFoot>A working interface</ConvergeFoot>
          </div>

          <p className="mt-16 max-w-[24ch] text-[1.75rem] leading-tight md:mt-20 md:text-[3rem]">
            A custom implementation becomes <Em>guided configuration.</Em>
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
          <div className="mt-14 space-y-10 md:mt-20 md:space-y-12">
            <Plate
              src={templatePicker}
              alt="The template picker in the shipped product, headed Let's connect some Apps. The user has chosen a source application and the screen lists the matching pre-built interfaces as cards, each naming its source and target and what it transfers, with a link to build from scratch if nothing matches."
              width={1594}
              height={733}
              label="Shipped · choosing a template"
              caption="The current shipped UI. Pick the two applications and the product answers with the templates it already knows how to build between them, each described in payroll terms rather than integration ones. Building from scratch is still there, as the exception rather than the starting point. One example; what matches depends on the applications chosen."
              onOpen={open}
            />
            <Plate
              src={templateDetail}
              alt="A template detail view for a payroll connection in the shipped product. The left column names the apps used, states the licence cost change and asks the user to agree to it. The right column lists the scenarios the template covers, such as New Hire, Address and Salary, with a field count on each, and previews the fields the selected scenario carries."
              width={1601}
              height={589}
              label="Shipped · what the template carries"
              caption="The current shipped UI. Before anything is configured, the template lists the scenarios it covers and the actual fields each one moves, so the choice of template is made on what it will do rather than on its name. One example; scenarios and fields differ from template to template. Licence figure masked."
              onOpen={open}
            />
          </div>
        </Slide>

        <Slide id="one-to-many" chapter="04" height="tall">
          <Kicker label="One template, many customers" />
          <Headline level={3}>
            The same integration knowledge no longer has to be{' '}
            <Em>rebuilt customer by customer.</Em>
          </Headline>

          <div className="mt-14 md:mt-20">
            <Fan
              source={{
                label: 'One template',
                note: 'Built once by the people who already know how these systems connect.',
              }}
              targets={['Customer A', 'Customer B', 'Customer C', 'Customer D', 'Customer E']}
            />
          </div>

          <p className="mt-16 text-[2rem] leading-none md:mt-20 md:text-[3.5rem]">
            1 template <span className="text-ink-400">&rarr;</span> <Em>many customers</Em>
          </p>

          {/*
            The fan above, drawn as a library. Design-stage, so it runs at the
            same supporting size as the other exploration on this chapter.
          */}
          <PlateAside
            label="Exploration"
            className="mt-16 md:mt-20"
            media={
              <Plate
                dense
                src={templateLibrary}
                alt="The template library in the product: a row of pre-built integration templates each naming a source and target application and how many times it has been used, above a grid of recent interfaces, with a modal showing the full library filtered by source and target application."
                width={1844}
                height={1526}
                caption="Template library"
                onOpen={open}
              />
            }
          >
            <p>
              The same integration knowledge, catalogued. Each card names the systems it connects
              and how many customers have used it, so the template that gets built once is also
              the one that is easiest to find.
            </p>
            <p className="text-sm text-ink-500">Click to open it full size.</p>
          </PlateAside>

          <Pov kind="business">
            The more integration logic becomes reusable, the less each new customer requires
            proportional developer effort. Delivery cost stops tracking customer count.
          </Pov>
        </Slide>

        <Slide id="delivery-impact" chapter="04" height="auto">
          <Kicker label="Delivery impact" />
          <Headline level={3}>
            The potential shift: from months of implementation{' '}
            <Em>to weeks of setup</Em>
          </Headline>

          <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-2 lg:gap-16">
            <div className="panel p-6 md:p-8">
              <p className="label text-ink-500">Before</p>
              <p className="mt-6 text-[3rem] leading-none md:text-[4.5rem]">~6 months</p>
              <MiniFlow steps={['Discover', 'Map', 'Build', 'Test', 'Deliver']} />
              <div className="mt-8">
                <Evidence kind="observed" />
              </div>
            </div>

            {/* The arrival inverts, the same move the business Pov makes. */}
            <div className="theme-invert panel bg-card p-6 text-foreground md:p-8">
              <p className="label text-ink-500">After</p>
              <p className="mt-6 text-[3rem] leading-none md:text-[4.5rem]">~2 weeks</p>
              <MiniFlow steps={['Select template', 'Configure', 'Validate', 'Test', 'Publish live']} />
              <div className="mt-8">
                <Evidence kind="direction" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-border pt-12 md:mt-20 md:grid-cols-3">
            <Metric
              figure={<Count to={92} prefix="~" suffix="%" />}
              caption="Shorter potential implementation cycle"
            />
            <Metric
              figure={<Count to={13} prefix="~" suffix="×" />}
              caption="Theoretical delivery capacity"
            />
            <Metric figure="2× easier" caption="Reported by the project manager" />
          </div>

          <Footnote>
            The 2× easier figure is stakeholder feedback. The lead-time and capacity figures are
            illustrative, based on the transition from approximately 26 weeks to approximately 2
            weeks for a standard implementation.
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
            className="mt-16 border-t border-border pt-14 md:mt-20 md:pt-16"
            media={
              <PlatePair>
                <Plate
                  dense
                  src={brynqCurrent}
                  alt="The BrynQ interfaces screen: a list of named integrations, each showing the applications it connects, when it next runs, its schedule and whether the last run succeeded or failed."
                  width={2546}
                  height={1272}
                  caption="Interfaces"
                  onOpen={open}
                />
                <Plate
                  dense
                  src={brynqDashboards}
                  alt="The BrynQ dashboards overview: a grid of dashboard cards, each naming its dashboard, an environment chip reading Test or Development, the sheets it contains as linked chips, and when it was last updated."
                  width={2549}
                  height={1272}
                  caption="Dashboards"
                  onOpen={open}
                />
              </PlatePair>
            }
          >
            <p>
              BrynQ, now. Two areas of the platform: the interfaces that run the integrations, and
              the dashboards built on what those interfaces move.
            </p>
            <p className="text-sm text-ink-500">Click either to open it full size.</p>
          </PlateAside>
        </Slide>

        {/* =========================== 05 SCALE =========================== */}
        <ChapterOpen
          id="ch-scale"
          n="05"
          name="Scale"
          title="The projected operational impact"
          question="What could happen if delivery time collapses from months to weeks?"
        />

        <Slide id="why-it-matters" chapter="05" height="tall">
          <Kicker label="Why faster delivery would matter to the business" />
          <Headline level={3}>
            Shorter implementation is not only a UX improvement.{' '}
            <Em>It would change what the business can scale.</Em>
          </Headline>

          <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <Cascade
              steps={[
                '~2 weeks instead of ~6 months',
                'More implementation capacity',
                'More customers onboarded',
                'Growth without proportional delivery headcount',
              ]}
            />
            <div className="flex flex-col justify-center">
              <p className="max-w-md text-base leading-[1.6] text-ink-600 md:text-lg">
                Everything in this chapter is a projection of where the template model points,
                not results measured yet. The opportunity is not simply time saved: the same
                team could support more implementations.
              </p>
            </div>
          </div>
        </Slide>

        <Slide id="capacity" chapter="05" height="auto">
          <Kicker label="Projected capacity" />
          <Headline level={3}>What could happen if a 26-week process becomes a 2-week process?</Headline>

          <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-2 lg:gap-16">
            <CapacityYear
              label="Custom model"
              cycle="~26 weeks per implementation"
              count={2}
              result="~2 implementations / year"
            />
            <CapacityYear
              label="Template model"
              cycle="~2 weeks per implementation"
              count={26}
              result="~26 implementations / year"
            />
          </div>

          <div className="mt-16 grid gap-10 border-t border-border pt-12 md:mt-20 md:grid-cols-2">
            <Metric
              figure={<Count to={92} prefix="~" suffix="%" />}
              caption="Projected shorter implementation cycle"
            />
            <Metric
              figure={<Count to={13} prefix="~" suffix="×" />}
              caption="Projected delivery capacity"
            />
          </div>

          <div className="mt-12">
            <Evidence kind="illustrative" />
          </div>

          <Footnote>
            This is a cycle-time projection, not current throughput. Actual throughput would
            depend on sales demand, integration complexity, staffing, customer readiness and
            support needs.
          </Footnote>
        </Slide>

        <Slide id="business-model" chapter="05" height="auto">
          <Kicker label="Business model transformation" />
          <Headline level={3}>
            The real shift is not from six months to two weeks.{' '}
            <Em>It is from repeated service work to reusable product capability.</Em>
          </Headline>

          <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-2">
            <Ecosystem
              label="Before"
              inside={['Run interface', 'Monitor', 'Inspect logs']}
              around={[
                'PM-heavy coordination',
                'Developer-led implementation',
                'Manual mapping',
                'Customer dependency',
                'Repeated custom work',
              ]}
            />
            <Ecosystem
              label="Direction of travel"
              inside={['Select', 'Configure', 'Validate', 'Test', 'Publish live', 'Manage']}
              around={[
                'Reusable templates',
                'Guided customer setup',
                'Human support',
                'Repeatable integrations',
                'Faster onboarding',
                'Scalable delivery',
              ]}
              emphasis
            />
          </div>

          <p className="mt-16 max-w-[26ch] text-[1.75rem] leading-tight md:mt-20 md:text-[3rem]">
            From selling repeated implementation effort, to building{' '}
            <Em>reusable integration capability.</Em>
          </p>
        </Slide>

        {/* ========================== REFLECTION ========================== */}
        <Slide id="as-a-designer" chapter="05" height="tall">
          <Kicker label="What this meant for me as a designer" />
          <Headline level={3}>This stopped being only a UI problem.</Headline>

          <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <Lede wide>
                I went into the work thinking primarily about usability. The more I spoke to users
                and followed how implementation actually happened, the clearer it became that the
                interface was only one part of the problem.
              </Lede>
              <p className="label mt-12 text-ink-500">The questions that got more interesting</p>
              <ul className="mt-6 space-y-4">
                {[
                  'What should the product take responsibility for?',
                  'What should the customer be able to do?',
                  'What should remain human?',
                  'Which internal knowledge should become product functionality?',
                  'How can experience design support the business model?',
                ].map((q) => (
                  <li key={q} className="flex gap-4 text-base leading-snug text-ink-600 md:text-lg">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-ink-400" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <p className="label-strong mb-8">Where the scope went</p>
              <Ladder
                rungs={['UI', 'Workflow', 'Service', 'Product model', 'Business impact']}
              />
            </div>
          </div>
        </Slide>

        <Slide id="learned" chapter="05" height="full" invert center>
          <p className="label-strong">What I learned</p>

          <p className="mt-10 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            This project taught me that redesigning a product can mean redesigning the service
            around it. The biggest shift was understanding that customer independence does not
            necessarily mean removing people. It means making the product responsible for the
            repeatable work, giving customers control where it makes sense, and keeping human
            support where it adds confidence and expertise.
          </p>

          <p className="mt-10 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            That shift, from designing screens to shaping the product and service model together,
            became the most important part of my work on BrynQ.
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
              Read the long-form version
            </Link>
            <Link
              to="/case-study/brynq/vault"
              className="border border-border px-6 py-3.5 text-base text-ink-600 transition-colors hover:border-foreground hover:text-foreground"
            >
              Screens and detail, under NDA
            </Link>
          </div>
        </Slide>

        {/* Quick-scan recap, for anyone who scrolled fast and wants the spine. */}
        <Slide id="recap" chapter="05" height="auto">
          <Kicker label="The story in fifteen lines" />
          <ol className="grid gap-x-16 gap-y-5 md:grid-cols-2">
            {[
              'Customers barely needed to use BrynQ.',
              'I researched why.',
              'The real problem was bigger than usability.',
              'Interfaces took ~6 months and were mostly created outside BrynQ.',
              'I questioned what the product should actually own.',
              'We explored removing the technical barrier entirely, through conversation.',
              'Research said customers wanted independence, not isolation.',
              'The right model became assisted self-service.',
              'Developers already had reusable integration knowledge.',
              'We turned repeated implementation logic into templates.',
              'AI moved backstage, helping developers build those templates faster.',
              'Projected: ~6 months could become ~2 weeks, a ~92% shorter cycle.',
              'Projected: ~13× delivery capacity.',
              'More capacity would mean more customers with the same team.',
              'The project evolved from UI redesign to product and service model redesign.',
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
