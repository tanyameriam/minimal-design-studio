import { Link } from 'react-router-dom';
import Deck, { type DeckSlide } from '@/components/story/Deck';
import { Em, Chapter, H, Body, Voice, Panel, Shot, ShotRow, Spread } from '@/components/story/primitives';
import { usePageMeta } from '@/hooks/use-page-meta';

import legacyDashboard from '@/assets/merry-health-dashboard.png';
import whatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import whatsappDriver from '@/assets/merry-whatsapp-driver.png';
import proposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
import hifiDashboard from '@/assets/merry-hifi-dashboard.png';
import deckHandover from '@/assets/merry-deck-handover.jpg';
import deckAddRide from '@/assets/merry-deck-add-ride.jpg';
import deckRideDetails from '@/assets/merry-deck-ride-details.jpg';
import deckDriverSms from '@/assets/merry-deck-driver-sms.jpg';
import deckFamilyFallback from '@/assets/merry-deck-family-fallback.jpg';
import deckMobile from '@/assets/merry-deck-mobile.jpg';

/**
 * Merry Health as a slide story.
 *
 * The long-form page is a twenty-minute systems argument. This is the same
 * argument at reading speed: the hospital admin's experience, what broke,
 * the decision not to fight WhatsApp, and the dashboard that came out of it.
 * Every fact here is lifted from the case study and the client delivery
 * deck (Nov 2025), rather than restated more confidently, and the one rule
 * that governs both pages holds here too: it was delivered to the client and
 * never launched, so nothing forward-looking is written as a result.
 *
 * The client deck carries no measured numbers, so this deck has none either,
 * and no invented quotes. It is always called the hospital dashboard.
 */

/** The four parties the whole project is about. Recurs across slides. */
const ACTORS = ['Hospital admin', 'Merry Health team', 'Driver', 'Patient’s family'];

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
  <Spread>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="label text-ink-500">
        Case study &middot; Merry Health &middot; Emergency ambulances
      </span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny &middot; tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-stage max-w-4xl text-[2.5rem] leading-[1.02] md:text-[4.25rem]">
      Redesigning the hospital admin&rsquo;s experience for{' '}
      <Em>real-time ambulance coordination.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      Admins ran emergencies on scattered WhatsApp chats and calls, so help took too long to
      reach the patient. The dashboard was rarely used, and records were missing or wrong.
      This is how we kept WhatsApp, gave it structure, and made the dashboard the full record
      of every ride.
    </p>

    <ActorRow note="One ride, one record, the same update for all four" />

    <div className="mt-break flex flex-wrap gap-3">
      {['2025', 'A team of 5 designers', 'Delivered, never launched'].map((chip) => (
        <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
          {chip}
        </span>
      ))}
    </div>
  </Spread>
);

const ContextSlide = () => (
  <Spread>
    <Chapter n="01" label="The project and my role" />
    <H>
      An apprenticeship project, <Em>done for a real client.</Em>
    </H>
    <Body>
      Merry Health arranges ambulance rides for hospitals in smaller cities across India. We
      designed for them as the client, during an apprenticeship with Career Reactor in 2025.
      A team of 5 designers came up with the research and the new way of working, which is
      why the story says “we”. Where the work was mine, it says “I”.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="What I did" title="From research to screens">
        Mapping the service, finding where the work broke down, spotting chances to improve,
        the new way of working, and then the steps and the screens.
      </Panel>
      <Panel label="The team" title="5 designers">
        Making sense of the research, the new way of working and the final system were team
        work. How I carried out my part was my own.
      </Panel>
      <Panel label="Status" title="Delivered, never launched">
        We handed the full design to the client. It was never launched or measured, so every
        result in these slides is a goal, and it says so.
      </Panel>
    </div>
  </Spread>
);

const SituationSlide = () => (
  <Spread>
    <Chapter n="02" label="The starting situation" />
    <H>
      The dashboard was there. <Em>The real work happened somewhere else.</Em>
    </H>
    <Body>
      In an emergency, hospital admins grabbed the fastest tool nearby. WhatsApp was
      familiar. Calls were quicker. The dashboard was rarely used, so the real story of each
      ride lived in chats, calls and people&rsquo;s memory.
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
  </Spread>
);

const ResearchSlide = () => (
  <Spread>
    <Chapter n="03" label="What the research found" />
    <H>
      Four problems, <Em>and not one of them was about the screens.</Em>
    </H>
    <div className="mt-break grid max-w-5xl gap-4 md:grid-cols-2">
      <Panel label="Not built for emergencies" title="&ldquo;Add Ride&rdquo; was too slow for an emergency.">
        So admins skipped fields or went back to WhatsApp. Staff got the ambulance moving
        first and filled in the gaps later.
      </Panel>
      <Panel label="Everything done by hand" title="Admins chased drivers on calls.">
        How fast an ambulance left depended on who happened to pick up, not on the system.
      </Panel>
      <Panel label="Nobody could see what was happening" title="No live view of status, ETA or handover.">
        Nobody could see where the ambulance was or when it would arrive, so everyone filled
        the silence with another phone call.
      </Panel>
      <Panel label="Unreliable records" title="Ride details were spread across chats, calls and memory.">
        There was no proper handover step, so records were missing or wrong, and reports
        could not be trusted.
      </Panel>
    </div>
  </Spread>
);

const ReframeSlide = () => (
  <Spread>
    <Chapter n="04" label="A new way to see it" />
    <H>
      From redesigning screens to <Em>redesigning how ambulances get sent.</Em>
    </H>
    <Body>
      The way of working did not fit how people act in an emergency. Every hand-off was
      held together by phone calls between four groups who could not see what the others
      knew. Fixing the screens would have left every one of those hand-offs exactly where
      it was.
    </Body>
    <Voice>
      The chance was to cut down the back and forth, not the clicks.
    </Voice>
  </Spread>
);

const DecisionSlide = () => (
  <Spread>
    <Chapter n="05" label="The decision" />
    <H>
      Do not replace WhatsApp. <Em>Give it structure.</Em>
    </H>
    <Body>
      Moving admins off WhatsApp would have meant learning something new in the middle of an
      emergency. So we kept it, and split it into clear chats: one for the driver, one for
      the family, one for the hospital admin, and a read-only announcement group. Behind
      them sits the hospital dashboard.
    </Body>
    <div className="mt-break grid max-w-4xl gap-4 md:grid-cols-2">
      <Panel label="The part people see" title="Structured WhatsApp chats">
        Automatic updates for every step, sent to the driver, the family, the hospital admin
        and the announcement group. No more typing the same news by hand.
      </Panel>
      <Panel label="The part behind it" title="The hospital dashboard" strong>
        The full record of every ride, from adding it to the handover and the reports. And the
        backup when WhatsApp fails: the admin adds the ride here instead.
      </Panel>
    </div>
    <ShotRow>
      <Shot
        src={whatsappHospital}
        alt="The read-only announcement group for Felix Hospital in WhatsApp, showing case MH-REQ-1342 and each step of the ride posted as an update."
        width={519}
        height={1781}
        maxH="max-h-[24vh]"
        caption="Announcement group. Read-only, so everyone gets the same updates"
      />
      <Shot
        src={whatsappDriver}
        alt="The driver chat in WhatsApp, showing a ride card with the case number, patient contact, pickup link, distance, and buttons to accept or decline."
        width={523}
        height={1168}
        maxH="max-h-[24vh]"
        caption="Driver. The case, the distance, the pickup link, accept or decline"
      />
    </ShotRow>
    <Voice>
      Before, the messages made the record. Now the record makes the messages.
    </Voice>
  </Spread>
);

const SystemSlide = () => (
  <Spread>
    <Chapter n="06" label="The system" />
    <H>
      One ride. <Em>One Case ID that every channel shares.</Em>
    </H>
    <Body>
      Every ride gets its own Case ID, like MH-REQ-1342. WhatsApp, SMS and the dashboard all
      use it, so everyone sees the same ride. A driver saying yes, an ambulance leaving, an
      arrival: each one moves the ride to its next step and sends the update to whoever needs
      it.
    </Body>
    <Shot
      className="mt-10 max-w-5xl"
      src={proposedWorkflow}
      alt="The proposed system: numbered steps across the hospital admin, WhatsApp, the Merry Health team, the driver and the patient’s family, with the data, the technology and the backup plan for each step."
      width={1600}
      height={564}
      maxH="max-h-[30vh]"
      caption="Every step, with its data, its technology and its backup plan"
    />
    <ActorRow note="One change, four groups see it, no phone call needed" />
  </Spread>
);

const FailureSlide = () => (
  <Spread>
    <Chapter n="07" label="Planning for the bad day" />
    <H>
      Emergency systems need <Em>backup plans, not perfect conditions.</Em>
    </H>
    <Body>
      If WhatsApp fails, the admin adds the ride on the dashboard. A driver without a
      smartphone gets the job by SMS and replies 1 to accept or 2 to reject. A family without
      WhatsApp gets an SMS, plus an automated call (IVR) in their own regional language.
    </Body>
    <ShotRow>
      <Shot
        src={deckDriverSms}
        alt="The driver’s WhatsApp ride card with Accept and Decline buttons, next to the SMS version for drivers without a smartphone, ending with Send 1 to accept and 2 to reject."
        width={1013}
        height={1432}
        maxH="max-h-[40vh]"
        caption="Driver without a smartphone. Reply 1 to accept, 2 to reject"
      />
      <Shot
        src={deckFamilyFallback}
        alt="The family’s WhatsApp chat with driver details, arrival time and a tracking link, next to the SMS version and an automated IVR call in the regional language."
        width={1125}
        height={1395}
        maxH="max-h-[40vh]"
        caption="Family without WhatsApp. An SMS, plus a call in their own language"
      />
    </ShotRow>
    <Voice>
      What happens when things go wrong is the real product. When everything goes right is the easy half.
    </Voice>
  </Spread>
);

const ProductSlide = () => (
  <Spread>
    <Chapter n="08" label="What I designed" />
    <H>
      From keeping records <Em>to running things live.</Em>
    </H>
    <Body>
      The hospital dashboard is made for the hospital admin. It has 7 parts: home, add ride,
      ride list, ride details, handover, track ambulance and reports. Every part also works on
      a phone. Add Ride asks only for the essentials, so a ride can be sent fast.
    </Body>
    <Shot
      className="mt-10 max-w-4xl"
      src={hifiDashboard}
      alt="The new hospital dashboard: four key numbers across the top, a map of rides coming to the hospital next to a live feed of ride updates, and a ride list with tabs for all, ongoing, pending and completed rides."
      width={5000}
      height={3992}
      maxH="max-h-[30vh]"
      caption="Home. What is moving now, and what needs attention"
    />
    <div className="mt-6 grid max-w-4xl items-start gap-4 sm:grid-cols-[2fr_1fr]">
      <Shot
        src={deckAddRide}
        alt="The Add Ride screen: pickup and drop set on a map, the patient contact, a request type list, tags for ambulance type and facilities, and a folded optional section showing what is missing."
        width={1395}
        height={987}
        maxH="max-h-[24vh]"
        caption="Add Ride. Only the essentials up front"
      />
      <Shot
        src={deckMobile}
        alt="The hospital dashboard on a phone, with an Add Ride button, key numbers for the week and a map of rides coming to the hospital."
        width={962}
        height={1520}
        maxH="max-h-[24vh]"
        caption="On a phone, too"
      />
    </div>
  </Spread>
);

const HandoverSlide = () => (
  <Spread>
    <Chapter n="09" label="Tracking and handover" />
    <H>
      Watch the ride live. <Em>Close it only after a checked handover.</Em>
    </H>
    <Body>
      Ride details show the live map, the driver, the arrival time and every step so far, so
      nobody has to call to ask. When the ambulance reaches the hospital, three checks must be
      ticked. Only then can the admin press Mark Handover and close the ride.
    </Body>
    <ShotRow>
      <Shot
        src={deckRideDetails}
        alt="The ride details screen: Call driver and Escalate buttons, a status row with the patient’s condition, a live map, the trip timeline, and an alert that the arrival time went up."
        width={1353}
        height={888}
        maxH="max-h-[40vh]"
        caption="Live tracking. The map, the timeline, and help one tap away"
      />
      <Shot
        src={deckHandover}
        alt="The handover dialog: arrival details, three required checks for hospital staff confirmation, driver handover completed and admin verification, and the Mark Handover button."
        width={925}
        height={1470}
        maxH="max-h-[40vh]"
        caption="Three required checks, then Mark Handover"
      />
    </ShotRow>
    <Voice>A ride cannot close half-done, so every record ends complete.</Voice>
  </Spread>
);

const OutcomeSlide = () => (
  <Spread>
    <Chapter n="10" label="What it is meant to change" />
    <H>
      Goals, <Em>clearly called goals.</Em>
    </H>
    <Body>
      We delivered the design to Merry Health, but it was never launched or measured, so none
      of this is a result. These are the three things it was designed to change.
    </Body>
    <div className="mt-break grid max-w-5xl gap-4 md:grid-cols-3">
      <Panel label="Goal" title="Faster emergency handling" strong>
        Designed so admins can add a ride in seconds, even when WhatsApp fails.
      </Panel>
      <Panel label="Goal" title="More rides completed">
        Designed so live tracking, alerts and a checked handover mean fewer rides drop off.
      </Panel>
      <Panel label="Goal" title="Accurate records and reports">
        Designed so every ride has one complete record, and hospitals can download accurate
        reports any time.
      </Panel>
    </div>
  </Spread>
);

const ReflectionSlide = () => (
  <Spread>
    <Chapter n="11" label="What it demonstrates" />
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
  </Spread>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'The hospital admin’s experience, redesigned', render: CoverSlide },
  // The situation
  { id: 'context', chapter: 'The situation', title: 'An apprenticeship project for a client', render: ContextSlide },
  { id: 'situation', chapter: 'The situation', title: 'The real work happened outside the dashboard', render: SituationSlide },
  { id: 'research', chapter: 'The situation', title: 'Four problems, none of them about screens', render: ResearchSlide },
  // The reframe
  { id: 'reframe', chapter: 'A new view', title: 'From screens to the whole system', render: ReframeSlide },
  { id: 'decision', chapter: 'A new view', title: 'Do not replace WhatsApp, give it structure', render: DecisionSlide },
  // The system
  { id: 'system', chapter: 'The system', title: 'One ride, one Case ID', render: SystemSlide },
  { id: 'failure', chapter: 'The system', title: 'Emergency systems need backup plans', render: FailureSlide },
  { id: 'product', chapter: 'The system', title: 'The hospital dashboard, in 7 parts', render: ProductSlide },
  { id: 'handover', chapter: 'The system', title: 'Live tracking and a checked handover', render: HandoverSlide },
  // What it changes
  { id: 'outcome', chapter: 'What it changes', title: 'Goals, clearly called goals', render: OutcomeSlide },
  { id: 'reflection', chapter: 'What it changes', title: 'The screens were only one part of it', render: ReflectionSlide },
];

const MerryStory = () => {
  usePageMeta(
    'Merry Health · The story in slides',
    'Redesigning the hospital admin’s experience for real-time ambulance coordination: structured WhatsApp, one Case ID per ride, and the hospital dashboard as the full record. Delivered to the client, never launched.'
  );

  return (
    <Deck
      label="Merry Health · Real-time ambulance coordination"
      exitHref="/case-study/merry-health"
      slides={slides}
    />
  );
};

export default MerryStory;
