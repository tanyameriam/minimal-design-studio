import Deck, { type DeckSlide } from '@/components/story/Deck';
import { Em, Chapter, H, Body, Voice, Panel, Shot, Spread, Words, Below } from '@/components/story/primitives';
import {
  ColumnLabel,
  ConvergeFoot,
  IconRowCard,
  StepCard,
  StepRail,
} from '@/components/case-study/slides/boards';
import {
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
 * implementation, observed; ~2 weeks under the template model;
 * ~92% shorter setup. Shown as plain numbers, without estimate labels.
 */

/** The transition, in order. Each milestone deepens on the long case study. */
const milestones = [
  { year: '2023', label: 'Joined as the only designer. The job: redesign everything.' },
  { year: '', label: 'Learned the product, then learned why nobody used it.' },
  { year: '', label: 'Interviews, mapping, and a new way of organising the product.' },
  { year: '', label: 'Salure Connect gets a new name: BrynQ.' },
  { year: '', label: 'An AI chat for setting up connections launches, and gets tested with customers.' },
  { year: '', label: 'Setting up a connection is redesigned around templates.' },
  { year: '', label: 'The AI moves behind the scenes: it now helps developers build templates faster.' },
  { year: 'Today', label: 'Six months of setup becomes about two weeks with templates.' },
];

const CoverSlide = () => (
  <Spread>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="label text-ink-500">Case study · BrynQ · Connecting HR and payroll systems</span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny · tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-12 max-w-4xl text-[2.5rem] leading-[1.02] md:text-[4.25rem]">
      The product everyone had an account for, <Em>and nobody opened.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      BrynQ connects HR and payroll systems. When I joined, every connection was built by
      hand, and customers never touched the product. This is the story of how that changed.
    </p>

    <div className="mt-12 grid max-w-2xl gap-x-12 gap-y-8 sm:grid-cols-2">
      <div>
        <p className="text-[3rem] leading-none md:text-[3.75rem]">6 mo</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          per connection when I joined, three months of it before any code
        </p>
      </div>
      <div>
        <p className="text-[3rem] leading-none md:text-[3.75rem]">~2 wk</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          per connection with templates
        </p>
      </div>
    </div>

    <div className="mt-10 flex flex-wrap gap-3">
      {['2023 to now', 'Several projects, one big change'].map((chip) => (
        <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
          {chip}
        </span>
      ))}
    </div>
  </Spread>
);

const ProjectsSlide = () => (
  <Spread>
    <Chapter n="00" label="One product, several projects" />
    <H>
      BrynQ is one big change told through <Em>four projects.</Em>
    </H>
    <Body>
      Everything from here happened after the product got its new name. The slides tell
      the projects in story order, the same order as the detailed study: the experiment
      came before the templates. Each one is told in full in the detailed study.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Panel label="Project 01" title="Platform redesign">
        A new structure, a clearer order, a new brand.
      </Panel>
      <Panel label="Project 02" title="Interface templates" strong>
        Six months down to two weeks.
      </Panel>
      <Panel label="Project 03" title="The AI chat">
        Launched, tested with customers, and what it taught us.
      </Panel>
      <Panel label="Project 04" title="AI behind the scenes">
        Where the AI is actually useful.
      </Panel>
    </div>
    <p className="label mt-8 text-ink-500">More projects are coming soon.</p>
  </Spread>
);

const ArrivalSlide = () => (
  <Spread>
    <Chapter n="01" label="Understand · Where the product was" />
    <H>
      Customers had accounts. <Em>They never logged in.</Em>
    </H>
    <Body>
      The product was called Salure Connect back then. Inside the company, admins used it.
      Customers whose connections were live had accounts but no reason to open them: the
      building, the code, the fixing, all of it was done by the developers.
    </Body>
    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
      <Ecosystem
        label="The product, when I joined"
        inside={['Admins, running and watching', 'Logs, checked by developers']}
        around={[
          'Customer accounts, unopened',
          'Connections built by hand',
          'Details swapped over calls',
          'Everything done for the customer',
        ]}
      />
      <Shot
        src={salureconnectDashboard}
        alt="The SalureConnect dashboards page: five dashboard cards, each listing the sheets inside it, with tags and when it was last refreshed."
        width={2563}
        height={1286}
        maxH="max-h-[34vh]"
        caption="Salure Connect, the product as it stood"
      />
    </div>
    <Voice>
      The job was a redesign. My first task was understanding why nobody used the thing I
      was redesigning.
    </Voice>
  </Spread>
);

const InterviewsSlide = () => (
  <Spread>
    <Chapter n="01" label="Understand · What the interviews said" />
    <H>
      Users did not dislike the product. <Em>They had no reason to open it.</Em>
    </H>
    <Body>
      I talked to users to understand what they thought of the product. Three answers kept
      coming back, and none of them was about how it looked.
    </Body>
    <div className="mt-10 max-w-3xl">
      <ColumnLabel>Heard in every interview</ColumnLabel>
      <div className="mt-6 space-y-3">
        <IconRowCard Icon={DoorClosed} tall>
          Never felt the need: <Em>the developers did everything.</Em>
        </IconRowCard>
        <IconRowCard Icon={Wrench} tall>
          Too technical: setting up a connection felt like a job for engineers.
        </IconRowCard>
        <IconRowCard Icon={Route} tall>
          No clear path: nothing showed what mattered, and no obvious steps for the few who did open it.
        </IconRowCard>
      </div>
    </div>
    <Voice>The product did not have a looks problem. It had a “why would I use this?” problem.</Voice>
  </Spread>
);

const GoalSlide = () => (
  <Spread>
    <Chapter n="01" label="Understand · The goal" />
    <H>
      The five-year goal: customers set up their own connections, <Em>without us.</Em>
    </H>
    <Body>
      That was the reason for the redesign in the first place. Not nicer screens, but
      customers who could manage on their own. A customer should be able to connect their
      HR and payroll systems themselves, in the product, without calling a developer.
    </Body>
    <div className="panel mt-10 max-w-3xl border-l-4 border-l-foreground p-6 md:p-8">
      <p className="text-xl leading-[1.3] md:text-2xl">
        Every choice in these slides comes from that one sentence.
      </p>
    </div>
  </Spread>
);

const GroundworkSlide = () => (
  <Spread>
    <Chapter n="01" label="Understand · The groundwork" />
    <H>
      Before any flow: <Em>map everything, group everything.</Em>
    </H>
    <Body>
      I mapped the whole product and regrouped it around what the interviews said people
      expected to find in each section. Then I did a second round of interviews, this time
      with managers, developers and users together, to understand the technical limits the
      new design had to work within.
    </Body>
    <div className="mt-10 grid gap-6">
      <div>
        <IaMap
          groups={[
            { label: 'Finding your way', items: ['Home', 'Activity', 'Monitoring'] },
            { label: 'Setting up', items: ['Connections', 'Interfaces', 'Templates'] },
            { label: 'Data', items: ['Mapping', 'Runs'] },
            { label: 'Rules and settings', items: ['Settings', 'Administration'] },
          ]}
        />
        <p className="label mt-5 text-ink-500">
          Made simpler for these slides. The real map is private.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel label="From users" title="Where things should live">
          The groups came from what people said in interviews, not from how the company is organised.
        </Panel>
        <Panel label="From devs" title="Where the hard limits are">
          The technical difficulty was real. The design had to work with it, not pretend it was not there.
        </Panel>
      </div>
    </div>
    <Voice>The new name, BrynQ, was coming. The new structure had to be ready for it.</Voice>
  </Spread>
);

const CostSlide = () => (
  <Spread>
    <Chapter n="02" label="Rethink · What building cost" />
    <H>
      About six months <Em>per connection.</Em>
    </H>
    <Body>
      After a sale, developers and the project manager got on calls to collect technical
      details, passwords and which fields and values match. About three months of back and
      forth before any code was written, then about three more to build it.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
      <div className="panel p-5 md:p-6">
        <p className="label text-ink-500">Before any code</p>
        <p className="mt-3 text-[2.5rem] leading-none md:text-[3rem]">~3 months</p>
        <MiniFlow
          steps={[
            'Calls after the sale',
            'Technical requirements',
            'Credentials',
            'Matching fields and values',
          ]}
        />
      </div>
      <div className="panel border-l-4 border-l-foreground p-5 md:p-6">
        <p className="label text-ink-500">Then the build</p>
        <p className="mt-3 text-[2.5rem] leading-none md:text-[3rem]">~3 months</p>
        <MiniFlow
          steps={[
            'Built by hand by developers',
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
      alt="The planning file: a spreadsheet fourteen columns wide, with columns for the task, the goal, the two systems, sync, custom and comments, then the fields on each side. Each row matches one field in the first system to one in the second, with the team's notes in the comments column."
      width={2516}
      height={1114}
      maxH="max-h-[22vh]"
      caption="What three months of calls produced: one spreadsheet, per customer, per connection"
    />
    <Voice>Every new customer cost months of developer time. That cannot keep growing.</Voice>
  </Spread>
);

const RealisationSlide = () => (
  <Spread>
    <Chapter n="02" label="Rethink · The awkward truth" />
    <H>
      Nothing really happened in the product. <Em>It was just a cover.</Em>
    </H>
    <Body>
      The connections were built by developers, outside the product. They ran through the
      product, and logs were checked there, but they did not start or end in it. The
      product was a screen on top of work that happened somewhere else.
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
      So I wondered: why do we call these BrynQ connections, when they do not start or
      end in the product at all?
    </Voice>
  </Spread>
);

const EncyclopediaSlide = () => (
  <Spread>
    <Chapter n="02" label="Rethink · Reusable knowledge within the team" />
    <H>
      The developers had a library of know-how <Em>nobody had built into the product.</Em>
    </H>
    <Body>
      Working with the developers and following the project manager around, one thing
      stood out: the repeated steps of a connection were already clear and written down.
      Know-how that lived in developers&rsquo; heads and documents could become part of the
      product.
    </Body>
    <div className="mt-10 grid max-w-4xl items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <Panel label="Today" title="Every connection built by hand">
        Each connection started from zero, no matter how many times the same systems had
        been connected before.
      </Panel>
      <Converge aria-hidden="true" className="hidden h-36 w-28 text-ink-400 lg:block" />
      <Panel label="The direction" title="Steps you can reuse" strong>
        The known steps could be prepared once and reused. The open question was how much
        customers should do on their own.
      </Panel>
    </div>
    <Voice>How much should customers do themselves? We tested the boldest answer first.</Voice>
  </Spread>
);

const AiChatSlide = () => (
  <Spread>
    <Chapter n="03" label="Explore · The AI chat" />
    <H>
      We also built the bold version: <Em>connect two systems by chatting.</Em>
    </H>
    <Body>
      A chat where you could see the fields and the data that would be sent, and change
      the data just by chatting. Anyone, even with no technical skills, guided by AI to a
      working connection. It launched before templates did.
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
        actions={['Change', 'Match', 'Check']}
      />
      <p className="label mt-4 text-ink-500">
        Idea · the chat and the data sit on one screen
      </p>
    </div>
    <Voice>So I went back to research, this time asking what customers really wanted to be in charge of.</Voice>
    <Below>
      <div className="grid gap-4 sm:grid-cols-3 sm:items-start">
        <Shot
          src={aiChatFrames}
          alt="Three simple sketches of the chat screen: the chat beside a list of tasks, then beside a summary of systems, tasks, schedule, field matches and settings, then beside a list of errors with a fix for each one."
          width={1804}
          height={474}
          maxH="max-h-[26vh]"
          caption="The chat never worked alone: a task list, then a summary, then a list of errors"
        />
        <Panel label="The promise" title="No expert needed">
          Say what you need, and the chat walks you through the fields, the matches and the
          changes to the data.
        </Panel>
        <Panel label="What we learned" title="Skill was not the problem" strong>
          Customers could follow it. What worried them was being the only one who could catch
          a mistake in their own payroll data.
        </Panel>
      </div>
    </Below>
  </Spread>
);

const AiLessonSlide = () => (
  <Spread>
    <Chapter n="03" label="Explore · What the research found" />
    <H>
      The company wanted customers to manage alone. <Em>The customers wanted a real person.</Em>
    </H>
    <Body>
      The research was clear: even with AI guiding them, customers did not want to be on
      their own with something as important as payroll data. They wanted to be able to
      finish the work themselves, with a person in charge if something went wrong.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="What the goal assumed">
        Managing alone means taking the people out of it.
      </Panel>
      <Panel label="What customers taught us" strong>
        Managing on your own means finishing it yourself, with a person you trust close by.
        Doing it yourself, not being left alone.
      </Panel>
    </div>
    <Shot
      className="mt-10 max-w-3xl"
      src={aiResearchSynthesis}
      alt="A research board in three rows. Problems in blue at the bottom: finding your way, unclear messages from the product, fixing errors and changing data. Goals in orange group them: easier navigation, clearer screens, better error help and help with changing data. Design ideas in purple sit above each goal."
      width={1888}
      height={1849}
      maxH="max-h-[30vh]"
      caption="What we learned: problems, the goals they group into, and the design ideas above each"
    />
    <Voice>The goal was right. We just understood it wrong.</Voice>
  </Spread>
);

const PivotSlide = () => (
  <Spread>
    <Chapter n="03" label="Explore · What the test taught us" />
    <H>
      The answer was not to make customers build everything themselves.{' '}
      <Em>It was giving them a strong starting point.</Em>
    </H>
    <Body>
      The AI test showed what customers really needed. They did not want to become experts
      in connecting systems.
    </Body>

    <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <ColumnLabel>What customers wanted</ColumnLabel>
        <div className="mt-6 space-y-3">
          <IconRowCard Icon={Puzzle}>Fewer technical parts</IconRowCard>
          <IconRowCard Icon={Clock}>Less waiting</IconRowCard>
          <IconRowCard Icon={SlidersHorizontal}>More control</IconRowCard>
          <IconRowCard Icon={User}>A human available when needed</IconRowCard>
        </div>
      </div>
      <div>
        <ColumnLabel>What the new approach does</ColumnLabel>
        <div className="mt-6 flex flex-col gap-3">
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

    <Voice>That led us to templates: doing it yourself with help, not doing it all alone.</Voice>
  </Spread>
);

const TemplateModelSlide = () => (
  <Spread>
    <Chapter n="04" label="Build it in · From doing it alone to doing it with help" />
    <H>
      Do not ask customers to rebuild <Em>what BrynQ already knows.</Em>
    </H>
    <Body>Ready-made templates became the base for letting customers do it themselves, with help.</Body>
    <Words>
      <Shot
        src={guidedSetupWizard}
        alt="Three screens of the step-by-step setup: Goal, Source, Target, Data and Summary. The source and target steps show a grid of apps you can search, and a side panel asks the user to pick or create a connection they have access to."
        width={2271}
        height={546}
        maxH="max-h-[24vh]"
        caption="The step-by-step setup: Goal, Source, Target, Data, Summary"
      />
    </Words>

    <div className="mt-10">
      <StepRail />
      <div className="grid gap-3 md:grid-cols-3">
        <StepCard
          compact
          n="1"
          Icon={Database}
          title="BrynQ knows"
          points={['Steps we already know', 'Standard field matches', 'Steps that are always needed']}
        />
        <StepCard
          compact
          n="2"
          Icon={FileText}
          title="Template"
          points={['A ready starting point', 'Step-by-step setup', 'Checks built in']}
        />
        <StepCard
          compact
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
      <ConvergeFoot gather={false}>Result: a working connection</ConvergeFoot>
    </div>
  </Spread>
);

const CorrectionSlide = () => (
  <Spread>
    <Chapter n="04" label="Build it in · Where the AI went" />
    <H>
      The AI did not leave. <Em>It moved behind the scenes.</Em>
    </H>
    <Body>
      The chat was taken away from customers. Templates came out with a named person to
      contact, so customers finish connections themselves with someone close by. And the AI
      now works where it is wanted: helping developers write templates faster, so the
      library grows quicker.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
      <div className="panel p-5 md:p-6">
        <p className="label text-ink-500">Before</p>
        <MiniFlow steps={['AI', 'Customer', 'Build one connection']} />
        <p className="mt-6 text-sm leading-snug text-ink-500">
          One connection, one customer, every time.
        </p>
      </div>
      <div className="panel border-l-4 border-l-foreground p-5 md:p-6">
        <p className="label text-ink-500">After</p>
        <MiniFlow steps={['AI', 'Developer', 'Build a template', 'Many customers']} />
        <p className="mt-6 text-sm leading-snug text-ink-500">
          Every template adds up: the next customer starts further ahead.
        </p>
      </div>
    </div>
    <Shot
      className="mt-10 max-w-3xl"
      src={templateLibrary}
      alt="The template library in the product: a row of ready-made templates, each naming the two apps and how many times it has been used, above a grid of recent connections."
      width={1844}
      height={1526}
      maxH="max-h-[22vh]"
      caption="The library the AI helps fill. Each template names its two systems and how often it is used"
    />
    <Voice>Customers keep a person close by. The AI helps the library grow behind them.</Voice>
  </Spread>
);

const TemplateResultSlide = () => (
  <Spread>
    <Chapter n="04" label="Build it in · The result" />
    <H>
      Six months of setup, <Em>expected to drop to about two weeks.</Em>
    </H>
    <div className="mt-12 flex max-w-3xl flex-col gap-6">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-ink-600 md:text-base">Connection built by hand</span>
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
      The repeated setup happens once, in the template. Customers add only what is theirs.
    </p>
    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-500">
      The project manager called setting up with templates twice as easy.
    </p>
    <Shot
      className="mt-10 max-w-4xl"
      src={templatePicker}
      alt="Choosing a template in the real product, under the heading Let's connect some Apps. The user has picked the first app, and the screen shows matching ready-made connections as cards, each naming the two apps and what it sends."
      width={1594}
      height={733}
      maxH="max-h-[28vh]"
      caption="Launched. Pick two apps, and the product shows what it already knows how to build"
    />
    <Voice>
      Months of back and forth became a form a customer can finish. That is the whole
      change, in one comparison.
    </Voice>
  </Spread>
);

const ScaleSlide = () => (
  <Spread>
    <Chapter n="05" label="Grow · What could change for the business" />
    <H>
      Setup could drop from about 26 weeks <Em>to about 2 weeks.</Em>
    </H>
    <Body>
      Shorter setup does not by itself mean the team can take on more customers: that also
      depends on staffing, how many projects run at once, and demand.
    </Body>

    <div className="mt-12 max-w-sm border-t border-border pt-10">
      <Metric figure="~92%" caption="Less setup time for a standard connection" />
    </div>
  </Spread>
);

const TimelineSlide = () => (
  <Spread>
    <Chapter n="06" label="Looking back · The journey, in order" />
    <H>
      From just a cover <Em>to a product customers finish themselves.</Em>
    </H>
    <Words>
      <p className="label text-ink-500">
        Each step has a longer story, with the screens and flows, in the detailed study.
      </p>
    </Words>
    <ol className="mt-10 max-w-3xl">
      {milestones.map((m, i) => (
        <li key={m.label} className="flex gap-5 border-b border-border py-3 md:gap-8">
          <span
            className={`label w-12 shrink-0 pt-1 tabular-nums ${m.year ? 'text-ink-800' : 'text-ink-400'}`}
          >
            {m.year || `0${i}`}
          </span>
          <span className="text-base leading-snug md:text-lg">{m.label}</span>
        </li>
      ))}
    </ol>
  </Spread>
);

const LessonsSlide = () => (
  <Spread>
    <Chapter n="06" label="Looking back · What BrynQ taught me" />
    <H>
      The redesign was never the real project. <Em>The change was.</Em>
    </H>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="01" title="Start with why nobody uses it">
        A request for a redesign hides a harder question. Answering that question is the real work.
      </Panel>
      <Panel label="02" title="Launch the bold version to learn from it">
        The AI chat was the fastest way to find the real limit of doing it yourself. What it
        taught us changed both the templates and where AI sits in the product.
      </Panel>
      <Panel label="03" title="Managing on your own still includes people">
        Customers did not want fewer people. They wanted to stay in control, with someone
        close by.
      </Panel>
    </div>
    <Voice>
      Three years in, the goal has not changed. The product is finally heading towards it.
    </Voice>
  </Spread>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'The product nobody opened', render: CoverSlide },
  { id: 'projects', chapter: 'Opening', title: 'One big change told through four projects', render: ProjectsSlide },
  // 01 Understand
  { id: 'arrival', chapter: 'Understand', title: 'Customers had accounts, never logged in', render: ArrivalSlide },
  { id: 'interviews', chapter: 'Understand', title: 'Nobody disliked it, they just had no reason to open it', render: InterviewsSlide },
  { id: 'goal', chapter: 'Understand', title: 'Customers set up their own connections', render: GoalSlide },
  { id: 'groundwork', chapter: 'Understand', title: 'Map everything before any flow', render: GroundworkSlide },
  // 02 Reframe
  { id: 'cost', chapter: 'Rethink', title: 'About six months per connection', render: CostSlide },
  { id: 'realisation', chapter: 'Rethink', title: 'The product was just a cover', render: RealisationSlide },
  { id: 'encyclopedia', chapter: 'Rethink', title: 'Know-how nobody had built into the product', render: EncyclopediaSlide },
  // 03 Explore
  { id: 'ai-chat', chapter: 'Explore', title: 'The bold version: connect by chatting', render: AiChatSlide },
  { id: 'ai-lesson', chapter: 'Explore', title: 'Doing it yourself, but customers wanted a real person', render: AiLessonSlide },
  { id: 'pivot', chapter: 'Explore', title: 'What the test taught us', render: PivotSlide },
  // 04 Productise
  { id: 'template-model', chapter: 'Build it in', title: 'Do not rebuild what BrynQ already knows', render: TemplateModelSlide },
  { id: 'correction', chapter: 'Build it in', title: 'The AI moved behind the scenes', render: CorrectionSlide },
  { id: 'template-result', chapter: 'Build it in', title: 'Six months, expected to drop to two weeks', render: TemplateResultSlide },
  // 05 Scale
  { id: 'scale', chapter: 'Grow', title: 'What could change for the business', render: ScaleSlide },
  // Looking back
  { id: 'timeline', chapter: 'Looking back', title: 'The journey, in order', render: TimelineSlide },
  { id: 'lessons', chapter: 'Looking back', title: 'The change was the real project', render: LessonsSlide },
];

const BrynqStory = () => {
  usePageMeta(
    'BrynQ · The story in slides',
    'BrynQ, 2023 to now: from a product nobody opened to connections customers finish themselves.',
  );

  return <Deck label="BrynQ · The transition" exitHref="/case-study/brynq" slides={slides} />;
};

export default BrynqStory;
