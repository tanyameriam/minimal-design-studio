import Deck, { type DeckSlide } from '@/components/story/Deck';
import { Em, Chapter, H, Body, Voice, Panel, Shot } from '@/components/story/primitives';
import {
  ColumnLabel,
  ConvergeFoot,
  IconRowCard,
  StepCard,
  StepRail,
} from '@/components/case-study/slides/boards';
import {
  CapacityYear,
  Ecosystem,
  IaMap,
  MappingCanvas,
  Metric,
  MiniFlow,
} from '@/components/case-study/slides/diagrams';
import { Caret, Converge } from '@/components/case-study/slides/glyphs';
import {
  Clock,
  Database,
  DoorClosed,
  FileText,
  Fingerprint,
  Puzzle,
  Route,
  SlidersHorizontal,
  Sparkles,
  User,
  Wrench,
} from 'lucide-react';
import { usePageMeta } from '@/hooks/use-page-meta';

import salureconnectDashboard from '@/assets/brynq/salureconnect-dashboard.png';
import scenarioFile from '@/assets/brynq/scenario-file.png';
import aiChatFrames from '@/assets/brynq/ai-chat-frames.png';
import aiResearchSynthesis from '@/assets/brynq/ai-research-synthesis.png';
import guidedSetupWizard from '@/assets/brynq/guided-setup-wizard.png';
import templateLibrary from '@/assets/brynq/template-library.png';
import templatePicker from '@/assets/brynq/template-picker.png';

/**
 * BrynQ as a slide story.
 *
 * The deck used to end on a password gate, on the premise that the screens
 * were not publishable. The long case study publishes them, so the gate was
 * telling a reader the opposite of what the next click would show them. The
 * screens are in the deck now, at slide size: enough to see the product, not
 * enough to read a mapping table. The full-size versions, and the reasoning
 * around each one, are one link away in the header.
 *
 * The deck is the quick read of /case-study/brynq and follows it exactly:
 * the same five chapters in the same order (Understand, Reframe, Explore,
 * Productise, Scale), the same board visuals from slides/boards.tsx, and
 * the same projection rules. If the long page changes, this deck changes.
 *
 * The AI chat is never presented as a failure, here or on the long page. It
 * was an explored interaction model that settled the right level of
 * self-service, and the AI did not disappear: it moved upstream to help
 * developers build templates faster. The deck used to say "it never took
 * off", "why it failed" and "a shipped failure is still evidence", which
 * contradicted the long page. Do not reintroduce that language.
 *
 * Figures are standardised with the long page: ~6 months of custom
 * implementation, observed; ~2 weeks under the template model, projected;
 * ~92% and ~13x, projected. Nothing here claims a measured result.
 */

/** The transition, in order. Each milestone deepens on the long case study. */
const milestones = [
  { year: '2023', label: 'Joined as the solo designer. The ask: a full redesign.' },
  { year: '', label: 'Learned the platform, then learned why nobody used it.' },
  { year: '', label: 'Interviews, mapping, and a new information architecture.' },
  { year: '', label: 'Salure Connect rebrands to BrynQ.' },
  { year: '', label: 'An AI chat for building interfaces ships, and gets tested with customers.' },
  { year: '', label: 'The interface creation flow is reimagined as templates.' },
  { year: '', label: 'The AI moves backstage: it now helps devs build templates faster.' },
  { year: 'Today', label: 'Six months of implementation, on a modelled path to about two weeks.' },
];

const CoverSlide = () => (
  <div>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="label text-ink-500">Case study · BrynQ · HR and payroll integrations</span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny · tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-12 max-w-4xl text-[2.5rem] leading-[1.02] md:mt-20 md:text-[4.25rem]">
      The platform everyone had an account for, <Em>and nobody opened.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      BrynQ connects HRM and payroll systems. When I joined, every interface was built by
      hand and customers never touched the product. This is the story of that changing.
    </p>

    <div className="mt-12 grid max-w-2xl gap-x-12 gap-y-8 sm:grid-cols-2 md:mt-16">
      <div>
        <p className="text-[3rem] leading-none md:text-[3.75rem]">6 mo</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          per interface when I joined, three months of it before any code
        </p>
      </div>
      <div>
        <p className="text-[3rem] leading-none md:text-[3.75rem]">~2 wk</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          per interface on the template-led model, projected rather than measured
        </p>
      </div>
    </div>

    <div className="mt-12 flex flex-wrap gap-3 md:mt-16">
      {['2023 to present', 'Solo designer, in-house', 'Multiple projects, one transition'].map(
        (chip) => (
          <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
            {chip}
          </span>
        ),
      )}
    </div>
  </div>
);

const ProjectsSlide = () => (
  <div>
    <Chapter n="00" label="One product, several projects" />
    <H>
      BrynQ is one transition told through <Em>four projects.</Em>
    </H>
    <Body>
      Everything from here happened inside the rebranded product. The deck tells the projects
      in story order, the same order as the full case study: the experiment came before the
      templates. Each of them is told in full on the case study.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Panel label="Project 01" title="Platform redesign">
        New structure, new hierarchy, new brand.
      </Panel>
      <Panel label="Project 02" title="Interface templates" strong>
        The six-months-to-two-weeks projection.
      </Panel>
      <Panel label="Project 03" title="The AI chat">
        Shipped, tested with customers, and what it settled.
      </Panel>
      <Panel label="Project 04" title="AI backstage">
        Where the AI actually earns its keep.
      </Panel>
    </div>
    <p className="label mt-8 text-ink-500">More projects are being written up.</p>
  </div>
);

const ArrivalSlide = () => (
  <div>
    <Chapter n="01" label="Understand · Where the product stood" />
    <H>
      Customers had accounts. <Em>They never logged in.</Em>
    </H>
    <Body>
      The platform was then called Salure Connect. Internally, admins used it. Externally,
      customers whose interfaces were live had accounts and no reason to open them: the
      building, the code, the fixing, all of it was done by the developers.
    </Body>
    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
      <Ecosystem
        label="The platform, when I joined"
        inside={['Admins, running and monitoring', 'Logs, checked by developers']}
        around={[
          'Customer accounts, unopened',
          'Interfaces built by hand',
          'Requirements traded over calls',
          'Everything done for the customer',
        ]}
      />
      <Shot
        src={salureconnectDashboard}
        alt="The SalureConnect dashboards overview: five dashboard cards, each listing the sheets it contains, with label chips and a last-refresh state."
        width={2563}
        height={1286}
        maxH="max-h-[34vh]"
        caption="Salure Connect, the product as it stood"
      />
    </div>
    <Voice>
      The ask was a redesign. My first job was understanding why nobody used the thing I was
      redesigning.
    </Voice>
  </div>
);

const InterviewsSlide = () => (
  <div>
    <Chapter n="01" label="Understand · What the interviews said" />
    <H>
      Users did not dislike the platform. <Em>They had no reason to enter it.</Em>
    </H>
    <Body>
      I interviewed users to understand how they perceived the product. Three answers kept
      returning, and none of them was about visual design.
    </Body>
    <div className="mt-10 max-w-3xl">
      <ColumnLabel>Heard in every interview</ColumnLabel>
      <div className="mt-6 space-y-3">
        <IconRowCard Icon={DoorClosed} tall>
          Never felt the need: <Em>the developers did everything.</Em>
        </IconRowCard>
        <IconRowCard Icon={Wrench} tall>
          Too technical: building an interface read as engineering work.
        </IconRowCard>
        <IconRowCard Icon={Route} tall>
          No clear path: no hierarchy, no obvious steps for the few who did enter.
        </IconRowCard>
      </div>
    </div>
    <Voice>The product did not have a looks problem. It had a reason-to-exist problem.</Voice>
  </div>
);

const GoalSlide = () => (
  <div>
    <Chapter n="01" label="Understand · The goal" />
    <H>
      The five year goal: customers build their own interfaces, <Em>without us.</Em>
    </H>
    <Body>
      That was why the redesign was on the table at all. Not nicer screens: self-sufficiency.
      A customer should be able to connect their HRM and payroll systems themselves, in the
      product, without a developer on call.
    </Body>
    <div className="panel mt-10 max-w-3xl border-l-4 border-l-foreground p-6 md:p-8">
      <p className="text-xl leading-[1.3] md:text-2xl">
        Every decision that follows in this deck descends from that one sentence.
      </p>
    </div>
  </div>
);

const GroundworkSlide = () => (
  <div>
    <Chapter n="01" label="Understand · The groundwork" />
    <H>
      Before any flow: <Em>map everything, group everything.</Em>
    </H>
    <Body>
      I mapped the whole platform and regrouped it against what the interviews said people
      expected to find in each section. Then a second round of interviews, this time with
      stakeholders, developers, and users together, to understand the technical limits the
      new design had to respect.
    </Body>
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
      <div>
        <IaMap
          groups={[
            { label: 'Orientation', items: ['Home', 'Activity', 'Monitoring'] },
            { label: 'Setting up', items: ['Connections', 'Interfaces', 'Templates'] },
            { label: 'Data', items: ['Mapping', 'Runs'] },
            { label: 'Governance', items: ['Settings', 'Administration'] },
          ]}
        />
        <p className="label mt-5 text-ink-500">
          Simplified for this telling. The working map is under NDA.
        </p>
      </div>
      <div className="grid gap-4">
        <Panel label="From users" title="Where things should live">
          The grouping came from expectations heard in interviews, not from the org chart.
        </Panel>
        <Panel label="From devs" title="Where the hard limits are">
          The technical complexity was real. The design had to work with it, not wish it away.
        </Panel>
      </div>
    </div>
    <Voice>The rebrand to BrynQ was coming. The new structure had to be ready for it.</Voice>
  </div>
);

const CostSlide = () => (
  <div>
    <Chapter n="02" label="Reframe · What building cost" />
    <H>
      About six months <Em>per interface.</Em>
    </H>
    <Body>
      After sales signed, developers and the project manager got on calls to gather technical
      requirements, credentials, field mappings, value mappings. Around three months of back
      and forth before a line of code, then around three more to build.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
      <div className="panel p-6 md:p-8">
        <p className="label text-ink-500">Before any code</p>
        <p className="mt-5 text-[2.5rem] leading-none md:text-[3rem]">~3 months</p>
        <MiniFlow
          steps={[
            'Calls after the sale',
            'Technical requirements',
            'Credentials',
            'Field and value mappings',
          ]}
        />
      </div>
      <div className="panel border-l-4 border-l-foreground p-6 md:p-8">
        <p className="label text-ink-500">Then the build</p>
        <p className="mt-5 text-[2.5rem] leading-none md:text-[3rem]">~3 months</p>
        <MiniFlow
          steps={[
            'Hand-built by developers',
            'One customer at a time',
            'Tested and delivered',
            'Developers watch the logs',
          ]}
        />
      </div>
    </div>
    <Shot
      className="mt-10 max-w-4xl"
      src={scenarioFile}
      alt="The scenario file: a spreadsheet fourteen columns wide, headed Scenario, Objective, Source system, Target system, Sync, Custom and Comments, then the source and target field columns. Row after row maps one field from the source system to the target system, with the team's working notes in the comments column."
      width={2516}
      height={1114}
      maxH="max-h-[30vh]"
      caption="What three months of calls produced: one spreadsheet, per customer, per interface"
    />
    <Voice>Every new customer bought months of developer time. That does not scale.</Voice>
  </div>
);

const RealisationSlide = () => (
  <div>
    <Chapter n="02" label="Reframe · The uncomfortable realisation" />
    <H>
      Nothing actually lived in the platform. <Em>It was an outer cover.</Em>
    </H>
    <Body>
      The interfaces were built by developers, outside the product. They ran through the
      platform, and logs were checked there, but they neither started nor ended in it. The
      platform was a visual layer over work that happened somewhere else.
    </Body>
    <div className="mt-10 flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-center">
      <div className="panel flex-1 p-6">
        <p className="label text-ink-500">Built</p>
        <p className="mt-3 text-lg leading-snug md:text-xl">Outside, by developers</p>
      </div>
      <Caret aria-hidden="true" className="mx-auto w-8 shrink-0 rotate-90 text-ink-400 md:rotate-0" />
      <div className="flex-1 rounded-[var(--radius)] border border-dashed border-ink-400/60 p-6">
        <p className="label text-ink-500">The platform</p>
        <p className="mt-3 text-lg leading-snug md:text-xl">Only the logs lived here</p>
      </div>
      <Caret aria-hidden="true" className="mx-auto w-8 shrink-0 rotate-90 text-ink-400 md:rotate-0" />
      <div className="panel flex-1 p-6">
        <p className="label text-ink-500">Fixed</p>
        <p className="mt-3 text-lg leading-snug md:text-xl">Outside, by developers</p>
      </div>
    </div>
    <Voice>
      So I wondered: why do we even call these the interfaces, when the interfaces do not
      start or end in the platform at all?
    </Voice>
  </div>
);

const EncyclopediaSlide = () => (
  <div>
    <Chapter n="02" label="Reframe · The hidden asset" />
    <H>
      The developers had an encyclopedia <Em>nobody had productised.</Em>
    </H>
    <Body>
      Working with the interface team and shadowing the project manager, one thing stood
      out: the repetitive steps of a connection were already well defined and documented.
      Knowledge that lived in developers&rsquo; heads and documents could be productised.
    </Body>
    <div className="mt-10 grid max-w-4xl items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <Panel label="Today" title="Every interface hand-built">
        Each connection started from zero, no matter how many times the same systems had
        been connected before.
      </Panel>
      <Converge aria-hidden="true" className="hidden h-36 w-28 text-ink-400 lg:block" />
      <Panel label="The direction" title="Reusable integration logic" strong>
        The known steps could be prepared once and reused. The open question was how much of
        it customers should do themselves.
      </Panel>
    </div>
    <Voice>How much should customers do themselves? We tested the most ambitious answer first.</Voice>
  </div>
);

const AiChatSlide = () => (
  <div>
    <Chapter n="03" label="Explore · The AI chat" />
    <H>
      We also built the ambitious version: <Em>connect two systems by chatting.</Em>
    </H>
    <Body>
      A conversational flow where the fields and the data to be transferred were visualised,
      and transformations could be applied through chat. Any user, however non-technical,
      guided by AI through mappings to a working interface. It shipped before templates did.
    </Body>
    <div className="mt-10 max-w-4xl">
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
        ]}
        actions={['Transform', 'Map', 'Validate']}
      />
      <p className="label mt-4 text-ink-500">
        Concept · the conversation and the data model are one surface
      </p>
      <Shot
        className="mt-6"
        src={aiChatFrames}
        alt="Three full-screen wireframes of the conversational interface builder: the chat panel beside a scenario list, then beside a summary rail tracking systems, scenarios, schedule, mappings and settings, then beside an error panel offering fixes for each failed step."
        width={1804}
        height={474}
        maxH="max-h-[26vh]"
        caption="The chat never worked alone: scenario list, then summary rail, then the error panel"
      />
    </div>
    <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
      <Panel label="The promise" title="No expertise needed">
        Describe what you need; the chat walks you through fields, mappings, and
        transformations.
      </Panel>
      <Panel label="What we learned" title="Capability was not the barrier" strong>
        Customers could follow it. What they hesitated over was being the last line of defence
        on their own payroll data.
      </Panel>
    </div>
    <Voice>So I went back to research, this time asking what customers actually wanted to own.</Voice>
  </div>
);

const AiLessonSlide = () => (
  <div>
    <Chapter n="03" label="Explore · What the research found" />
    <H>
      The company wanted self-sufficient customers. <Em>The customers wanted a human.</Em>
    </H>
    <Body>
      The research was blunt: even with an AI guiding them, customers did not want to be
      alone with something as consequential as their payroll data. They wanted to be able to
      finish the work themselves, with a person accountable when something went wrong.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="What the goal assumed">
        Self-sufficiency means removing the humans from the process.
      </Panel>
      <Panel label="What customers taught us" strong>
        Self-sufficiency means being able to finish yourself, with a person you trust within
        reach. Independence, not isolation.
      </Panel>
    </div>
    <Shot
      className="mt-10 max-w-3xl"
      src={aiResearchSynthesis}
      alt="A research synthesis board in three rows. Painpoints in blue at the bottom cover navigation, unclear system feedback, error recovery and data transformation. Goals in orange group them into simplifying navigation, interface clarity, error handling and transformation guidance. Design ideas in purple sit above each goal."
      width={1888}
      height={1849}
      maxH="max-h-[30vh]"
      caption="The synthesis: painpoints, the goals they group into, the design ideas above each"
    />
    <Voice>The goal was right. The definition of it was wrong.</Voice>
  </div>
);

const PivotSlide = () => (
  <div>
    <Chapter n="03" label="Explore · The better model the experiment defined" />
    <H>
      The answer was not asking customers to build everything themselves.{' '}
      <Em>It was giving them a strong starting point.</Em>
    </H>
    <Body>
      The AI exploration clarified what customers actually needed. They did not want to
      become integration experts.
    </Body>

    <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <ColumnLabel>What customers wanted</ColumnLabel>
        <div className="mt-6 space-y-3">
          <IconRowCard Icon={Puzzle}>Less technical complexity</IconRowCard>
          <IconRowCard Icon={Clock}>Less waiting</IconRowCard>
          <IconRowCard Icon={SlidersHorizontal}>More control</IconRowCard>
          <IconRowCard Icon={User}>A human available when needed</IconRowCard>
        </div>
      </div>
      <div>
        <ColumnLabel>What the model does</ColumnLabel>
        <div className="mt-6 flex flex-col gap-3">
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

    <Voice>That led us toward templates: assisted self-service, not autonomous creation.</Voice>
  </div>
);

const TemplateModelSlide = () => (
  <div>
    <Chapter n="04" label="Productise · From autonomous creation to assisted self-service" />
    <H>
      Do not ask the customer to rebuild <Em>what BrynQ already knows.</Em>
    </H>
    <Body>Reusable templates became the foundation of the assisted self-service model.</Body>

    <div className="mt-10">
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

    <Shot
      className="mt-10"
      src={guidedSetupWizard}
      alt="Three frames of the guided setup wizard, stepping through Goal, Source, Target, Data and Summarise. The source and target steps show a searchable grid of applications, and a side panel asks the user to choose or create an authorised connection."
      width={2271}
      height={546}
      maxH="max-h-[24vh]"
      caption="The guided setup: Goal, Source, Target, Data, Summarise"
    />
  </div>
);

const CorrectionSlide = () => (
  <div>
    <Chapter n="04" label="Productise · Where the AI went" />
    <H>
      The AI did not leave. <Em>It moved backstage.</Em>
    </H>
    <Body>
      The chat was recalled from customers. Templates rolled out with an assigned human
      point of contact, so customers finish interfaces themselves with a person in reach.
      And the AI now works where it is wanted: helping developers build the template code
      faster, so the library grows quicker.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
      <div className="panel p-6 md:p-8">
        <p className="label text-ink-500">Before</p>
        <MiniFlow steps={['AI', 'Customer', 'Build one interface']} />
        <p className="mt-6 text-sm leading-snug text-ink-500">
          One interface, one customer, every time.
        </p>
      </div>
      <div className="panel border-l-4 border-l-foreground p-6 md:p-8">
        <p className="label text-ink-500">After</p>
        <MiniFlow steps={['AI', 'Developer', 'Build a template', 'Many customers']} />
        <p className="mt-6 text-sm leading-snug text-ink-500">
          Every template compounds: the next customer starts further ahead.
        </p>
      </div>
    </div>
    <Shot
      className="mt-10 max-w-3xl"
      src={templateLibrary}
      alt="The template library in the product: a row of pre-built integration templates each naming a source and target application and how many times it has been used, above a grid of recent interfaces."
      width={1844}
      height={1526}
      maxH="max-h-[28vh]"
      caption="The library the AI feeds. Each template names its two systems and its usage count"
    />
    <Voice>Customers keep a person in reach. The AI accelerates the library behind them.</Voice>
  </div>
);

const TemplateResultSlide = () => (
  <div>
    <Chapter n="04" label="Productise · The result" />
    <H>
      Six months of implementation, <Em>projected down to about two weeks.</Em>
    </H>
    <div className="mt-12 flex max-w-3xl flex-col gap-6">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-ink-600 md:text-base">Hand-built interface</span>
          <span className="label tabular-nums text-ink-500">~6 months</span>
        </div>
        <div aria-hidden="true" className="mt-2 h-2 w-full bg-border" />
      </div>
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-ink-600 md:text-base">From a template</span>
          <span className="label tabular-nums">~2 weeks</span>
        </div>
        <div aria-hidden="true" className="mt-2 h-2 w-[8%] min-w-4 bg-foreground" />
      </div>
    </div>
    <p className="label mt-8 text-ink-500">
      Repetitive setup happens once, in the template. Customers supply only what is theirs.
    </p>
    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-500">
      The two-week figure is projected from the template-led delivery model, not measured in
      production. What was reported, rather than modelled: the project manager called
      template-led setup twice as easy.
    </p>
    <Shot
      className="mt-10 max-w-4xl"
      src={templatePicker}
      alt="The template picker in the shipped product, headed Let's connect some Apps. The user has chosen a source application and the screen lists the matching pre-built interfaces as cards, each naming its source and target and what it transfers."
      width={1594}
      height={733}
      maxH="max-h-[28vh]"
      caption="Shipped. Pick two applications, and the product answers with what it already knows how to build"
    />
    <Voice>
      Months of back and forth became a form a customer can finish. That is the whole
      transition, in one comparison.
    </Voice>
  </div>
);

const ScaleSlide = () => (
  <div>
    <Chapter n="05" label="Scale · The projected operational impact" />
    <H>
      What could happen if a 26-week process <Em>becomes a 2-week process?</Em>
    </H>
    <Body>
      Everything in this chapter is a projection of where the template model points, not
      results measured yet. The opportunity is not simply time saved: the same team could
      support more implementations.
    </Body>

    <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
      <CapacityYear
        label="Custom model"
        cycle="~26 weeks per implementation"
        count={2}
        result="~2 implementations / year"
      />
      <CapacityYear
        label="Template model, projected"
        cycle="~2 weeks per implementation"
        count={26}
        result="~26 implementations / year"
      />
    </div>

    <div className="mt-12 grid max-w-2xl gap-x-12 gap-y-8 border-t border-border pt-10 sm:grid-cols-2">
      <Metric figure="~92%" caption="Projected shorter implementation cycle" />
      <Metric figure={<>~13&times;</>} caption="Projected delivery capacity" />
    </div>

    <p className="label mt-10 inline-block border border-dashed border-border px-2 py-1 text-ink-400">
      Illustrative
    </p>
    <Voice>More capacity would mean more customers with the same team.</Voice>
  </div>
);

const TimelineSlide = () => (
  <div>
    <Chapter n="06" label="Looking back · The journey, in order" />
    <H>
      From outer cover <Em>to the product customers finish themselves.</Em>
    </H>
    <ol className="mt-10 max-w-3xl">
      {milestones.map((m, i) => (
        <li key={m.label} className="flex gap-5 border-b border-border py-4 md:gap-8">
          <span
            className={`label w-12 shrink-0 pt-1 tabular-nums ${m.year ? 'text-ink-800' : 'text-ink-400'}`}
          >
            {m.year || `0${i}`}
          </span>
          <span className="text-base leading-snug md:text-lg">{m.label}</span>
        </li>
      ))}
    </ol>
    <p className="label mt-8 text-ink-500">
      Each milestone has a deeper story, with the screens and flows, on the case study.
    </p>
  </div>
);

const LessonsSlide = () => (
  <div>
    <Chapter n="06" label="Looking back · What BrynQ taught me" />
    <H>
      The redesign was never the project. <Em>The transition was.</Em>
    </H>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="01" title="Start with why nobody uses it">
        A redesign brief hides a harder question. Answering that question is the work.
      </Panel>
      <Panel label="02" title="Ship the ambitious version to learn from it">
        The AI chat was the fastest way to find the real limit of self-service, and what it
        taught reshaped both the templates and where AI lives in the product.
      </Panel>
      <Panel label="03" title="Self-sufficiency includes people">
        Customers did not want fewer humans. They wanted to keep control while one stayed
        within reach.
      </Panel>
    </div>
    <Voice>
      Three years in, the goal has not changed. The product finally points at it.
    </Voice>
  </div>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'The platform nobody opened', render: CoverSlide },
  { id: 'projects', chapter: 'Opening', title: 'One transition told through four projects', render: ProjectsSlide },
  // 01 Understand
  { id: 'arrival', chapter: 'Understand', title: 'Customers had accounts, never logged in', render: ArrivalSlide },
  { id: 'interviews', chapter: 'Understand', title: 'No dislike, just no reason to enter', render: InterviewsSlide },
  { id: 'goal', chapter: 'Understand', title: 'Customers build their own interfaces', render: GoalSlide },
  { id: 'groundwork', chapter: 'Understand', title: 'Map everything before any flow', render: GroundworkSlide },
  // 02 Reframe
  { id: 'cost', chapter: 'Reframe', title: 'About six months per interface', render: CostSlide },
  { id: 'realisation', chapter: 'Reframe', title: 'The platform was an outer cover', render: RealisationSlide },
  { id: 'encyclopedia', chapter: 'Reframe', title: 'The integration encyclopedia nobody had productised', render: EncyclopediaSlide },
  // 03 Explore
  { id: 'ai-chat', chapter: 'Explore', title: 'The ambitious version: connect by chatting', render: AiChatSlide },
  { id: 'ai-lesson', chapter: 'Explore', title: 'Self-service, but customers wanted a human', render: AiLessonSlide },
  { id: 'pivot', chapter: 'Explore', title: 'The better model the experiment defined', render: PivotSlide },
  // 04 Productise
  { id: 'template-model', chapter: 'Productise', title: 'Do not rebuild what BrynQ already knows', render: TemplateModelSlide },
  { id: 'correction', chapter: 'Productise', title: 'The AI moved backstage', render: CorrectionSlide },
  { id: 'template-result', chapter: 'Productise', title: 'Six months, projected down to two weeks', render: TemplateResultSlide },
  // 05 Scale
  { id: 'scale', chapter: 'Scale', title: 'The projected operational impact', render: ScaleSlide },
  // Looking back
  { id: 'timeline', chapter: 'Looking back', title: 'The journey, in order', render: TimelineSlide },
  { id: 'lessons', chapter: 'Looking back', title: 'The transition was the project', render: LessonsSlide },
];

const BrynqStory = () => {
  usePageMeta(
    'BrynQ · The story in slides',
    'BrynQ, 2023 to present: from a platform nobody opened to interfaces customers finish themselves.',
  );

  return <Deck label="BrynQ · The transition" exitHref="/case-study/brynq" slides={slides} />;
};

export default BrynqStory;
