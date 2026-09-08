import { Link } from 'react-router-dom';
import Deck, { type DeckSlide } from '@/components/story/Deck';
import { Em, Chapter, H, Body, Voice, Panel, Shot, ShotRow } from '@/components/story/primitives';
import { usePageMeta } from '@/hooks/use-page-meta';

import legacyDashboard from '@/assets/merry-health-dashboard.png';
import whatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import whatsappDriver from '@/assets/merry-whatsapp-driver.png';
import proposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
import hifiDashboard from '@/assets/merry-hifi-dashboard.png';

/**
 * Merry Health as a slide story.
 *
 * The long-form page is a twenty-minute systems argument. This is the same
 * argument at reading speed: what the service actually did, what broke, the
 * decision not to fight the behaviour, and the operating model that came out
 * of it. Every fact here is lifted from the case study rather than restated
 * more confidently, and the one rule that governs both pages holds here too:
 * nothing was deployed, so nothing forward-looking is written as a result.
 *
 * Facts are quoted from the research on the long-form page. They are not
 * paraphrased into stronger claims.
 */

/** The four parties the whole project is about. Recurs across slides. */
const ACTORS = ['Hospital', 'Operations', 'Driver', 'Patient family'];

const ActorRow = ({ note }: { note: string }) => (
  <div className="mt-12 md:mt-16">
    <div className="grid gap-x-6 gap-y-4 sm:grid-cols-4">
      {ACTORS.map((actor) => (
        <div key={actor}>
          <div aria-hidden="true" className="h-px w-full bg-foreground" />
          <p className="mt-3 text-sm md:text-base">{actor}</p>
        </div>
      ))}
    </div>
    <p className="label mt-5 text-ink-500">{note}</p>
  </div>
);

const CoverSlide = () => (
  <div>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="label text-ink-500">
        Case study &middot; Merry Health &middot; Emergency ambulance dispatch
      </span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny &middot; tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-12 max-w-4xl text-[2.5rem] leading-[1.02] md:mt-20 md:text-[4.25rem]">
      Four parties. <Em>One shared ride state.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      Emergency dispatch ran across calls, WhatsApp, paper and a dashboard, so hospitals,
      operations, drivers and patient families each held a different version of the same ride.
      This is how we redesigned the system around that rather than against it.
    </p>

    <ActorRow note="One state change updates all four" />

    <div className="mt-12 flex flex-wrap gap-3 md:mt-16">
      {['2026', 'Team of five designers', 'Proposed system, not deployed'].map((chip) => (
        <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
          {chip}
        </span>
      ))}
    </div>
  </div>
);

const ContextSlide = () => (
  <div>
    <Chapter n="01" label="Context and role" />
    <H>
      An MDes practicum apprenticeship, <Em>with the company, not about it.</Em>
    </H>
    <Body>
      Merry Health connects hospitals, dispatch teams, drivers and patient families across Tier 2
      and Tier 3 cities in India. We worked with the company for the length of the practicum. The
      analysis and the operating model were arrived at by a team of five designers, which is why
      the story says we. Where the work was mine, it says I.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="What I did" title="Research through to screens">
        Service mapping, workflow breakdown analysis, opportunity definition, the proposed
        operating model, then interaction flows and product screens.
      </Panel>
      <Panel label="The team" title="Five designers">
        Synthesis, the operating model and the final system were team work. My execution was my
        own.
      </Panel>
      <Panel label="Status" title="Proposed, never rolled out">
        Nothing here was deployed or instrumented. Every forward-looking number on this page is a
        design target and says so.
      </Panel>
    </div>
  </div>
);

const SituationSlide = () => (
  <div>
    <Chapter n="02" label="The starting situation" />
    <H>
      The dashboard existed. <Em>Dispatch happened somewhere else.</Em>
    </H>
    <Body>
      During an emergency, hospital staff reached for the fastest tool in the room. Calls were
      quicker. WhatsApp was familiar. Staff were already walking, talking and holding three things
      at once. The official product existed, and most of the actual service ran outside it.
    </Body>
    <Shot
      className="mt-10 max-w-4xl"
      src={legacyDashboard}
      alt="The existing Merry Health dashboard: a wide map, six summary cards, and tables of ongoing and completed rides."
      width={1920}
      height={1054}
      maxH="max-h-[34vh]"
      caption="The dashboard as it was. Totals, a map, and two tables of rides"
    />
    <Voice>
      The brief looked like a dashboard redesign. The dashboard was not where the service lived.
    </Voice>
  </div>
);

const ResearchSlide = () => (
  <div>
    <Chapter n="03" label="What the research found" />
    <H>
      Four failures, <Em>and not one of them was an interface problem.</Em>
    </H>
    <div className="mt-10 grid max-w-5xl gap-4 md:mt-14 md:grid-cols-2">
      <Panel label="Emergency-mode mismatch" title="&ldquo;We can&rsquo;t fill long forms when a patient is critical.&rdquo;">
        The system wanted complete structured information before anyone could move. Under
        pressure, staff got the ambulance moving and filled the gaps afterwards.
      </Panel>
      <Panel label="Manual coordination" title="&ldquo;I call 3 to 4 drivers before one confirms.&rdquo;">
        Dispatch time was a function of who happened to be free, not of the system.
      </Panel>
      <Panel label="Visibility gaps" title="&ldquo;Families keep calling us for ETA updates.&rdquo;">
        Movement and ETA were not shared, so every party filled the silence with a phone call, and
        each call took operations away from dispatching.
      </Panel>
      <Panel label="Fragile data" title="&ldquo;We update records at the end of the day.&rdquo;">
        Information was copied between channels or completed later, which made response time
        impossible to measure honestly.
      </Panel>
    </div>
  </div>
);

const ReframeSlide = () => (
  <div>
    <Chapter n="04" label="The reframe" />
    <H>
      From redesigning screens to <Em>redesigning the dispatch system.</Em>
    </H>
    <Body>
      The workflow did not match emergency behaviour. Nine handoffs were being held together by
      phone calls between four parties who could not see each other&rsquo;s state. Fixing the
      screens would have left every one of those handoffs exactly where it was.
    </Body>
    <Voice>
      The opportunity was to reduce coordination, not clicks.
    </Voice>
  </div>
);

const DecisionSlide = () => (
  <div>
    <Chapter n="05" label="The decision" />
    <H>
      Do not replace WhatsApp. <Em>Make it part of the product.</Em>
    </H>
    <Body>
      Moving hospitals off WhatsApp would have added one more behaviour change to the middle of an
      emergency. So we stopped treating it as a workaround and split the experience into two
      layers instead.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:mt-14 md:grid-cols-2">
      <Panel label="Interaction layer" title="WhatsApp and SMS">
        Where hospitals, drivers and families already are. Nobody is asked to learn anything
        mid-emergency.
      </Panel>
      <Panel label="Operational system layer" title="The Merry Health platform" strong>
        Structured ride records, assignment logic, shared ride state, live operations, exception
        handling, reporting and audit.
      </Panel>
    </div>
    <ShotRow>
      <Shot
        src={whatsappHospital}
        alt="The hospital announcement group in WhatsApp, showing the case ID and each ride milestone posted as a status update."
        width={519}
        height={1781}
        maxH="max-h-[30vh]"
        caption="Hospital. Every milestone on one thread, against one case ID"
      />
      <Shot
        src={whatsappDriver}
        alt="The driver thread in WhatsApp, showing a ride card with case ID, patient contact, pickup link, distance, and accept or decline buttons."
        width={523}
        height={1168}
        maxH="max-h-[30vh]"
        caption="Driver. Case, distance, pickup link, accept or decline"
      />
    </ShotRow>
    <Voice>
      Before, communication created the record. Now the record drives the communication.
    </Voice>
  </div>
);

const SystemSlide = () => (
  <div>
    <Chapter n="06" label="The system" />
    <H>
      One ride. <Em>One event-driven lifecycle.</Em>
    </H>
    <Body>
      Every party acts on the same ride record, and every action is an event on it. A driver
      accepting, an ambulance departing, an arrival: each one moves the ride to a new state and
      pushes that state to whoever needs it, in whichever channel they already use.
    </Body>
    <Shot
      className="mt-10 max-w-5xl"
      src={proposedWorkflow}
      alt="The proposed system workflow: twelve numbered steps across hospital admin, WhatsApp API, operations, driver and patient party, with the data, technology and edge-case fallback attached to each."
      width={1600}
      height={564}
      maxH="max-h-[30vh]"
      caption="Twelve steps across five lanes, each carrying its data, its technology and its fallback"
    />
    <ActorRow note="One state change, four views of it, no phone call required" />
  </div>
);

const FailureSlide = () => (
  <div>
    <Chapter n="07" label="Designing for the bad day" />
    <H>
      Emergency systems need <Em>fallbacks, not perfect conditions.</Em>
    </H>
    <Body>
      A dispatch system that only works when everything works is not a dispatch system. Every way
      a ride can fail, no driver accepts, a vehicle breaks down, a message never lands, has a
      named owner and a defined recovery route rather than an error state and a shrug.
    </Body>
    <Voice>
      The degraded path is the product. The happy path is the easy half.
    </Voice>
  </div>
);

const ProductSlide = () => (
  <div>
    <Chapter n="08" label="What I designed" />
    <H>
      From record keeping <Em>to operational control.</Em>
    </H>
    <Body>
      The old dashboard reported on rides that had finished. The redesigned one is built around
      the four questions an operations team needs answered the moment they look at it.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:mt-14 md:grid-cols-4">
      {[
        ['What is active', 'Rides in flight, by state'],
        ['What needs attention', 'Exceptions surfaced, not buried'],
        ['Where are the ambulances', 'Live position and ETA'],
        ['What changed', 'The event log, as it happens'],
      ].map(([title, body]) => (
        <Panel key={title} label={title} >
          {body}
        </Panel>
      ))}
    </div>

    <Shot
      className="mt-10 max-w-4xl"
      src={hifiDashboard}
      alt="The redesigned operations dashboard: revenue and average response time cards, ongoing rides, live map and quick add tiles, a quick actions panel, and a ride list tabbed by all, completed and pending."
      width={1371}
      height={1371}
      maxH="max-h-[32vh]"
      caption="The four questions, answered on one screen"
    />
  </div>
);

const OutcomeSlide = () => (
  <div>
    <Chapter n="09" label="What it is intended to change" />
    <H>
      Targets, <Em>stated as targets.</Em>
    </H>
    <Body>
      Nothing here was deployed or instrumented, so none of this is a result. These are the
      numbers the system was designed to move, and the way each one would be measured if it were
      built.
    </Body>
    <div className="mt-10 grid max-w-5xl gap-4 md:mt-14 md:grid-cols-3">
      <Panel label="Design target" title="Under 3 min" strong>
        Request to a confirmed driver, against the 8 to 10 minutes observed in the manual flow.
        The lifecycle timestamps this on its own.
      </Panel>
      <Panel label="Design target" title="Fewer coordination calls">
        Automatic acknowledgement and milestone updates remove the reason for most of them.
      </Panel>
      <Panel label="Design target" title="Records that complete themselves">
        Captured as a side effect of normal operation rather than typed in at the end of the day.
      </Panel>
    </div>
    <p className="label mt-8 text-ink-500">
      Observed: 8 to 10 minutes to confirm a driver, in the manual flow. Everything else on this
      slide is a target.
    </p>
  </div>
);

const ReflectionSlide = () => (
  <div>
    <Chapter n="10" label="What it demonstrates" />
    <H>
      The interface was <Em>one part of the experience.</Em>
    </H>
    <Body>
      This project is the clearest example of the thing I keep finding: a request to redesign a
      screen, sitting on top of an operating model that was never designed. The work that mattered
      was deciding where state lives, who owns each failure, and which existing behaviour to build
      on instead of fight.
    </Body>

    <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 md:mt-16">
      <Link to="/case-study/merry-health" className="rule-link text-xl md:text-2xl">
        Read the detailed case study <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link to="/#work" className="rule-link label text-ink-500">
        Back to the work
      </Link>
    </div>
  </div>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'Four parties, one shared ride state', render: CoverSlide },
  // The situation
  { id: 'context', chapter: 'The situation', title: 'An apprenticeship with the company', render: ContextSlide },
  { id: 'situation', chapter: 'The situation', title: 'Dispatch happened outside the dashboard', render: SituationSlide },
  { id: 'research', chapter: 'The situation', title: 'Four failures, none of them interface problems', render: ResearchSlide },
  // The reframe
  { id: 'reframe', chapter: 'The reframe', title: 'From screens to the dispatch system', render: ReframeSlide },
  { id: 'decision', chapter: 'The reframe', title: 'Do not replace WhatsApp, absorb it', render: DecisionSlide },
  // The system
  { id: 'system', chapter: 'The system', title: 'One ride, one event-driven lifecycle', render: SystemSlide },
  { id: 'failure', chapter: 'The system', title: 'Emergency systems need fallbacks', render: FailureSlide },
  { id: 'product', chapter: 'The system', title: 'From record keeping to operational control', render: ProductSlide },
  // What it changes
  { id: 'outcome', chapter: 'What it changes', title: 'Targets, stated as targets', render: OutcomeSlide },
  { id: 'reflection', chapter: 'What it changes', title: 'The interface was one part of the experience', render: ReflectionSlide },
];

const MerryStory = () => {
  usePageMeta(
    'Merry Health · The story in slides',
    'Emergency ambulance dispatch, redesigned around how hospitals actually work: WhatsApp as an interaction layer on one shared ride state. A proposed system, not deployed.'
  );

  return (
    <Deck
      label="Merry Health · One shared ride state"
      exitHref="/case-study/merry-health"
      slides={slides}
    />
  );
};

export default MerryStory;
