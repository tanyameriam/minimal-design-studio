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
  <div className="mt-break">
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
        Case study &middot; Merry Health &middot; Sending ambulances in an emergency
      </span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny &middot; tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-stage max-w-4xl text-[2.5rem] leading-[1.02] md:text-[4.25rem]">
      Four groups of people. <Em>One shared record of each ride.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      Emergency rides were arranged over calls, WhatsApp, paper and a dashboard. So
      hospitals, the operations team, drivers and families each had a different idea of the
      same ride. This is how we redesigned the system to work with that, not against it.
    </p>

    <ActorRow note="One change updates all four" />

    <div className="mt-break flex flex-wrap gap-3">
      {['2026', 'A team of five designers', 'A proposal, never launched'].map((chip) => (
        <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
          {chip}
        </span>
      ))}
    </div>
  </div>
);

const ContextSlide = () => (
  <div>
    <Chapter n="01" label="The project and my role" />
    <H>
      A master’s degree project, <Em>done with the company, not just about it.</Em>
    </H>
    <Body>
      Merry Health connects hospitals, the people who send ambulances, drivers and patients’
      families in smaller cities across India. We worked with the company for the whole
      project. A team of five designers came up with the research and the new way of working,
      which is why the story says “we”. Where the work was mine, it says “I”.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="What I did" title="From research to screens">
        Mapping the service, finding where the work broke down, spotting chances to improve,
        the new way of working, and then the steps and the screens.
      </Panel>
      <Panel label="The team" title="Five designers">
        Making sense of the research, the new way of working and the final system were team
        work. How I carried out my part was my own.
      </Panel>
      <Panel label="Status" title="A proposal, never launched">
        Nothing here was launched or measured. Every number about the future on this page is
        a goal, and it says so.
      </Panel>
    </div>
  </div>
);

const SituationSlide = () => (
  <div>
    <Chapter n="02" label="The starting situation" />
    <H>
      The dashboard was there. <Em>The real work happened somewhere else.</Em>
    </H>
    <Body>
      In an emergency, hospital staff grabbed the fastest tool nearby. Calls were quicker.
      WhatsApp was familiar. Staff were already walking, talking and holding three things at
      once. The official product was there, but most of the real work happened outside it.
    </Body>
    <Shot
      className="mt-10 max-w-4xl"
      src={legacyDashboard}
      alt="The old Merry Health dashboard: a wide map, six summary cards, and tables of current and finished rides."
      width={1920}
      height={1054}
      maxH="max-h-[34vh]"
      caption="The dashboard as it was. Totals, a map, and two tables of rides"
    />
    <Voice>
      The job looked like a dashboard redesign. But the dashboard was not where the work happened.
    </Voice>
  </div>
);

const ResearchSlide = () => (
  <div>
    <Chapter n="03" label="What the research found" />
    <H>
      Four problems, <Em>and not one of them was about the screens.</Em>
    </H>
    <div className="mt-break grid max-w-5xl gap-4 md:grid-cols-2">
      <Panel label="Not built for emergencies" title="&ldquo;We can&rsquo;t fill long forms when a patient is critical.&rdquo;">
        The system wanted every detail filled in before anyone could move. Under pressure,
        staff got the ambulance moving first and filled in the gaps later.
      </Panel>
      <Panel label="Everything done by hand" title="&ldquo;I call 3 to 4 drivers before one confirms.&rdquo;">
        How fast an ambulance left depended on who happened to be free, not on the system.
      </Panel>
      <Panel label="Nobody could see what was happening" title="&ldquo;Families keep calling us for ETA updates.&rdquo;">
        Nobody could see where the ambulance was or when it would arrive, so everyone filled
        the silence with a phone call. Every call pulled the operations team away from
        sending ambulances.
      </Panel>
      <Panel label="Unreliable records" title="&ldquo;We update records at the end of the day.&rdquo;">
        Information was copied between channels or filled in later, so there was no honest
        way to measure response time.
      </Panel>
    </div>
  </div>
);

const ReframeSlide = () => (
  <div>
    <Chapter n="04" label="A new way to see it" />
    <H>
      From redesigning screens to <Em>redesigning how ambulances get sent.</Em>
    </H>
    <Body>
      The way of working did not fit how people act in an emergency. Nine hand-offs were
      held together by phone calls between four groups who could not see what the others
      knew. Fixing the screens would have left every one of those hand-offs exactly where
      it was.
    </Body>
    <Voice>
      The chance was to cut down the back and forth, not the clicks.
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
      Moving hospitals off WhatsApp would have meant learning something new in the middle
      of an emergency. So we stopped treating it as a workaround, and split the service into
      two layers instead.
    </Body>
    <div className="mt-break grid max-w-4xl gap-4 md:grid-cols-2">
      <Panel label="The part people see" title="WhatsApp and text messages">
        Where hospitals, drivers and families already are. Nobody has to learn anything new
        in an emergency.
      </Panel>
      <Panel label="The part behind it" title="The Merry Health platform" strong>
        Neat ride records, rules for choosing a driver, one shared ride record, live
        operations, handling problems, reports and checks.
      </Panel>
    </div>
    <ShotRow>
      <Shot
        src={whatsappHospital}
        alt="The hospital group chat in WhatsApp, showing the case number and each step of the ride posted as an update."
        width={519}
        height={1781}
        maxH="max-h-[30vh]"
        caption="Hospital. Every step in one chat, under one case number"
      />
      <Shot
        src={whatsappDriver}
        alt="The driver chat in WhatsApp, showing a ride card with the case number, patient contact, pickup link, distance, and buttons to accept or decline."
        width={523}
        height={1168}
        maxH="max-h-[30vh]"
        caption="Driver. The case, the distance, the pickup link, accept or decline"
      />
    </ShotRow>
    <Voice>
      Before, the messages made the record. Now the record makes the messages.
    </Voice>
  </div>
);

const SystemSlide = () => (
  <div>
    <Chapter n="06" label="The system" />
    <H>
      One ride. <Em>One set of steps that updates itself.</Em>
    </H>
    <Body>
      Everyone works from the same ride record, and everything they do is saved to it. A
      driver saying yes, an ambulance leaving, an arrival: each one moves the ride to its
      next step and sends the update to whoever needs it, in the app they already use.
    </Body>
    <Shot
      className="mt-10 max-w-5xl"
      src={proposedWorkflow}
      alt="The proposed system: twelve numbered steps across the hospital admin, WhatsApp, the operations team, the driver and the patient’s family, with the data, the technology and the backup plan for each step."
      width={1600}
      height={564}
      maxH="max-h-[30vh]"
      caption="Twelve steps across five groups, each with its data, its technology and its backup plan"
    />
    <ActorRow note="One change, four people see it, no phone call needed" />
  </div>
);

const FailureSlide = () => (
  <div>
    <Chapter n="07" label="Planning for the bad day" />
    <H>
      Emergency systems need <Em>backup plans, not perfect conditions.</Em>
    </H>
    <Body>
      A system for sending ambulances that only works when everything goes right is not
      good enough. So we defined recovery paths and responsibilities for key failure
      scenarios, such as no driver saying yes, an ambulance breaking down or a message
      never arriving, instead of an error message and a shrug.
    </Body>
    <Voice>
      What happens when things go wrong is the real product. When everything goes right is the easy half.
    </Voice>
  </div>
);

const ProductSlide = () => (
  <div>
    <Chapter n="08" label="What I designed" />
    <H>
      From keeping records <Em>to running things live.</Em>
    </H>
    <Body>
      The old dashboard reported on rides that were already over. The new one is built
      around the four questions an operations team needs answered the moment they look at
      it.
    </Body>
    <div className="mt-break grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
      {[
        ['What is happening now', 'Rides on the move, by step'],
        ['What needs attention', 'Problems shown up front, not hidden'],
        ['Where are the ambulances', 'Live location and arrival time'],
        ['What changed', 'A live list of everything that happens'],
      ].map(([title, body]) => (
        <Panel key={title} label={title} >
          {body}
        </Panel>
      ))}
    </div>

    <Shot
      className="mt-10 max-w-4xl"
      src={hifiDashboard}
      alt="The new operations dashboard: cards for money earned and average response time, rides happening now, a live map and quick add tiles, a quick actions panel, and a ride list with tabs for all, finished and waiting."
      width={1371}
      height={1371}
      maxH="max-h-[32vh]"
      caption="The four questions, answered on one screen"
    />
  </div>
);

const OutcomeSlide = () => (
  <div>
    <Chapter n="09" label="What it is meant to change" />
    <H>
      Goals, <Em>clearly called goals.</Em>
    </H>
    <Body>
      Nothing here was launched or measured, so none of this is a result. These are the
      numbers the system was designed to change, and how each one would be measured if it
      were built.
    </Body>
    <div className="mt-break grid max-w-5xl gap-4 md:grid-cols-3">
      <Panel label="Goal" title="Under 3 min" strong>
        From request to a driver saying yes, compared with the 8 to 10 minutes we saw in the
        old way. The system records this time by itself.
      </Panel>
      <Panel label="Goal" title="Fewer phone calls">
        Automatic “got it” messages and step-by-step updates remove the reason for most of them.
      </Panel>
      <Panel label="Goal" title="Records that fill themselves in">
        Saved as the work happens, instead of typed in at the end of the day.
      </Panel>
    </div>
    <p className="label mt-8 text-ink-500">
      What we saw: 8 to 10 minutes to find a driver, in the old way of working. Everything else on this
      slide is a goal.
    </p>
  </div>
);

const ReflectionSlide = () => (
  <div>
    <Chapter n="10" label="What it demonstrates" />
    <H>
      The screens were <Em>only one part of it.</Em>
    </H>
    <Body>
      This project is the clearest example of something I keep finding: a request to
      redesign a screen, sitting on top of a way of working that nobody ever designed. The
      work that mattered was deciding where the information lives, who fixes each problem,
      and which habits to build on instead of fighting.
    </Body>

    <div className="mt-break flex flex-wrap items-center gap-x-10 gap-y-4">
      <Link to="/case-study/merry-health" className="rule-link text-xl md:text-2xl">
        Read the detailed study <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link to="/#work" className="rule-link label text-ink-500">
        Back to the work
      </Link>
    </div>
  </div>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'Four groups, one shared ride record', render: CoverSlide },
  // The situation
  { id: 'context', chapter: 'The situation', title: 'A university project with the company', render: ContextSlide },
  { id: 'situation', chapter: 'The situation', title: 'The real work happened outside the dashboard', render: SituationSlide },
  { id: 'research', chapter: 'The situation', title: 'Four problems, none of them about screens', render: ResearchSlide },
  // The reframe
  { id: 'reframe', chapter: 'A new view', title: 'From screens to the whole system', render: ReframeSlide },
  { id: 'decision', chapter: 'A new view', title: 'Do not replace WhatsApp, build on it', render: DecisionSlide },
  // The system
  { id: 'system', chapter: 'The system', title: 'One ride, one set of steps', render: SystemSlide },
  { id: 'failure', chapter: 'The system', title: 'Emergency systems need backup plans', render: FailureSlide },
  { id: 'product', chapter: 'The system', title: 'From keeping records to running things live', render: ProductSlide },
  // What it changes
  { id: 'outcome', chapter: 'What it changes', title: 'Goals, clearly called goals', render: OutcomeSlide },
  { id: 'reflection', chapter: 'What it changes', title: 'The screens were only one part of it', render: ReflectionSlide },
];

const MerryStory = () => {
  usePageMeta(
    'Merry Health · The story in slides',
    'A redesign of how emergency ambulances get sent: someone in charge of every hand-off, the ride visible as it happens, and WhatsApp connected to one shared ride record. A proposal, never launched.'
  );

  return (
    <Deck
      label="Merry Health · One shared ride record"
      exitHref="/case-study/merry-health"
      slides={slides}
    />
  );
};

export default MerryStory;
