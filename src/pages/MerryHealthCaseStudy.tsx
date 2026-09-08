import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import ReadingProgress from '@/components/ReadingProgress';
import Lightbox from '@/components/case-study/Lightbox';
import { useLightbox } from '@/hooks/use-lightbox';
import { StorylineNav, type Storyline } from '@/components/story/Storyline';
import {
  Footnote,
  Headline,
  Kicker,
  Lede,
  Slide,
  Statement,
  CaseStudyEntry,
} from '@/components/case-study/slides/Slide';
import { Split } from '@/components/case-study/slides/diagrams';
import {
  ActorHub,
  Artifact,
  Callouts,
  ChannelScripts,
  CurrentFlow,
  EdgeGrid,
  Facts,
  Failures,
  Lifecycle,
  Methods,
  Notes,
  Opportunities,
  PhaseBlueprint,
  Plate,
  Principle,
  StateList,
  SystemPanes,
  Targets,
} from '@/components/case-study/merry/diagrams';
import HeroComposition from '@/components/case-study/merry/HeroComposition';
import { adjacentCaseStudies } from '@/data/caseStudies';
import { usePageMeta } from '@/hooks/use-page-meta';

import legacyDashboard from '@/assets/merry-health-dashboard.png';
import legacyBooking from '@/assets/merry-health-booking.png';
import legacyMap from '@/assets/merry-health-map.png';
import legacyRides from '@/assets/merry-health-rides.png';
import currentFlow from '@/assets/merry-current-flow.png';
import idealFlow from '@/assets/merry-ideal-flow.png';
import phaseMapping from '@/assets/merry-phase-mapping.png';
import opportunityMapping from '@/assets/merry-opportunity-mapping.png';
import opportunityRefined from '@/assets/merry-opportunity-refined.png';
import proposedWorkflow from '@/assets/merry-proposed-workflow.jpg';
import hospitalJourney from '@/assets/merry-hospital-journey.jpg';
import adminCurrentJourney from '@/assets/merry-admin-current-journey.jpg';
import adminIdealJourney from '@/assets/merry-admin-ideal-journey.jpg';
import patientCurrentJourney from '@/assets/merry-patient-current-journey.jpg';
import patientIdealJourney from '@/assets/merry-patient-ideal-journey.jpg';
import wireframes from '@/assets/merry-wireframes.png';
import whatsappHospital from '@/assets/merry-whatsapp-hospital.png';
import whatsappAdmin from '@/assets/merry-whatsapp-admin.png';
import whatsappDriver from '@/assets/merry-whatsapp-driver.png';
import whatsappPatient from '@/assets/merry-whatsapp-patient.png';
import hifiBooking from '@/assets/merry-hifi-booking.png';
import hifiDashboard from '@/assets/merry-hifi-dashboard.png';
import hifiTracking from '@/assets/merry-hifi-tracking.png';
import hifiReports from '@/assets/merry-hifi-reports.png';

/*
 * ASSET WEIGHT
 *
 * Every image below the hero is lazy-loaded and decoded off the main
 * thread, but two source files are far heavier than they need to be:
 * merry-wireframes.png is 2.5 MB and merry-hifi-booking.png is 1.1 MB.
 * Both are photographs or map-heavy screenshots saved as PNG. Re-export
 * them at about 1600px wide as JPEG or WebP and the page drops roughly
 * 3 MB without any visible loss. There is no image tooling in this repo,
 * so it has to happen at export.
 */

/**
 * Merry Health, told as what it turned into: a systems-design project about
 * how an emergency moves between four parties, not a dashboard redesign.
 *
 * The page runs on the portfolio's own tokens and the shared slide kit. It
 * deliberately does not share a shape with the Curateus study, which is the
 * early-career piece: that one is a six-frame text strip and a single
 * interaction, this one leads with a seven-frame systems argument, an
 * event lifecycle drawn as a matrix, and named failure modes. The
 * progression is meant to be visible without either page claiming it.
 *
 * Three rules govern the writing.
 *
 * 1. Nothing here was deployed. This was an MDes practicum apprenticeship
 *    with the company, so every forward-looking number is labelled a design
 *    target and never appears as an achieved result.
 *
 * 2. Ownership is exact. The team was five designers, so the analysis and
 *    the operating model are "we". Tanya's own execution is first person.
 *    Neither is inflated to meet the other.
 *
 * 3. Every figure carries its provenance. The observed conditions say they
 *    were observed; the targets say they are targets.
 */

const storyline: Storyline = [
  {
    n: '01',
    name: 'In 60 seconds',
    slides: [
      { id: 'qv-bypass', title: 'Dispatch happened somewhere else' },
      { id: 'qv-mismatch', title: 'The workflow did not match the behaviour' },
      { id: 'qv-reframe', title: 'From screens to the dispatch system' },
      { id: 'qv-decision', title: 'Do not replace WhatsApp' },
      { id: 'qv-lifecycle', title: 'One ride, one shared state' },
      { id: 'qv-product', title: 'The workflow defined the architecture' },
      { id: 'qv-fallbacks', title: 'Designing for the day it goes wrong' },
    ],
  },
  {
    n: '02',
    name: 'The system',
    target: 'ch-system',
    slides: [
      { id: 'context', title: 'Coordination was happening outside the platform' },
      { id: 'research', title: 'Mapping where the system was breaking' },
      { id: 'failures', title: 'Four system failures' },
      { id: 'blueprint', title: 'The service blueprint' },
      { id: 'opportunity', title: 'Reduce coordination, not clicks' },
    ],
  },
  {
    n: '03',
    name: 'The redesign',
    target: 'ch-redesign',
    slides: [
      { id: 'principle', title: 'Do not digitise every manual step' },
      { id: 'whatsapp', title: 'The messaging layer' },
      { id: 'lifecycle-deep', title: 'One event-driven ride lifecycle' },
      { id: 'fallbacks-deep', title: 'Designing the degraded paths' },
      { id: 'surfaces', title: 'From logic to requirements' },
    ],
  },
  {
    n: '04',
    name: 'The product',
    target: 'ch-product',
    slides: [
      { id: 'module-intake', title: 'Intake: get the ambulance moving' },
      { id: 'module-dashboard', title: 'Dashboard: from records to control' },
      { id: 'module-ride', title: 'Ride view: what is happening now' },
      { id: 'module-reporting', title: 'Reporting: operations as evidence' },
    ],
  },
  {
    n: '05',
    name: 'What it changes',
    target: 'ch-change',
    slides: [
      { id: 'before-after', title: 'Before and after' },
      { id: 'targets', title: 'The design targets' },
      { id: 'contribution', title: 'Where I sat' },
      { id: 'reflection', title: 'What it changed in how I design' },
      { id: 'closing', title: 'Closing' },
    ],
  },
];

/**
 * PLACEHOLDER: the Figma prototype link is not in this repo. Paste the
 * share URL here and the call to action after the product chapter turns
 * itself on. Under `npm run dev` an unfilled link shows as a visible gap.
 */
const PROTOTYPE_URL: string = '';

/** Chapter divider. The number carries it, the question sets up the work. */
const ChapterOpen = ({
  id,
  n,
  name,
  question,
}: {
  id: string;
  n: string;
  name: string;
  question: string;
}) => (
  <Slide id={id} chapter={n} height="short">
    <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
      <p className="text-[5rem] leading-[0.8] tracking-[-0.05em] text-ink-400 md:text-[9rem]">
        {n}
      </p>
      <div>
        <h2 className="text-[2.25rem] leading-none md:text-[4rem]">{name}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-snug text-ink-600 md:text-2xl">{question}</p>
      </div>
    </div>
  </Slide>
);

const MerryHealthCaseStudy = () => {
  const { figure, open, close } = useLightbox();
  const { prev, next } = adjacentCaseStudies('merry-health');

  usePageMeta(
    'Merry Health',
    'Redesigning emergency ambulance dispatch around how hospitals actually work. A systems-design project on coordination between hospitals, dispatch operations, drivers and patient families across Tier 2 and Tier 3 India.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground rail-offset">
      <ReadingProgress />
      <Navigation />
      <StorylineNav chapters={storyline} />

      <main>
        {/* ============================== HERO ============================== */}
        <section id="top" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-12">
            <div>
              <StudyOpening
                slug="merry-health"
                client="Merry Health &middot; Emergency operations &middot; 2026"
                headline={
                  <>
                    Redesigning emergency ambulance dispatch around{' '}
                    <span className="em">how hospitals actually work</span>.
                  </>
                }
              />

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                <p>
                  Merry Health connects hospitals, dispatch teams, drivers and patient families
                  across Tier 2 and Tier 3 cities in India.
                </p>
                <p>
                  The challenge was not simply improving its dashboard. The real dispatch process
                  was happening across phone calls, WhatsApp, paper, manual follow-ups and
                  fragmented data. We redesigned the system around those operational realities
                  rather than asking anyone to abandon them.
                </p>
              </div>

              <dl className="mt-12 grid max-w-2xl gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Research and discovery &middot; Systems thinking &middot; UX strategy &middot;
                    Interaction design &middot; UI design
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Team</dt>
                  <dd className="text-base leading-snug md:text-lg">Team of 5 designers</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Tools</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Figma &middot; Miro &middot; Prototyping
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Context</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    MDes practicum apprenticeship with Merry Health, JSAA
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Stage</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Proposed system. Researched with the company, not rolled out.
                  </dd>
                </div>
              </dl>

              <CaseStudyEntry
                storyHref="/case-study/merry-health/story"
                scanMinutes={7}
                readMinutes={21}
              />
            </div>

            <div className="flex flex-col justify-center">
              <HeroComposition />
            </div>
          </div>
        </section>

        {/* ====================== 01, THE SHORT VERSION ===================== */}
        <Slide id="qv-bypass" chapter="01" height="auto">
          <Kicker n="01" label="If you have a minute, read only this chapter" />
          <Headline size="large">
            The dashboard existed. <span className="em">Dispatch happened somewhere else.</span>
          </Headline>
          <Lede wide>
            During an emergency, hospital staff reached for the fastest tool in the room. Calls
            were quicker. WhatsApp was familiar. Staff were already walking, talking and holding
            three things at once. The official product existed, and most of the actual service ran
            outside it.
          </Lede>

          <Facts
            source="Observed while mapping the current workflow with Merry Health operations. Not platform-wide instrumentation."
            items={[
              { figure: '8 to 10 min', note: 'From request to a confirmed driver, in the manual workflow we observed' },
              { figure: '3 to 4 calls', note: 'Often needed before one driver confirmed availability' },
              { figure: 'Four channels', note: 'WhatsApp, phone calls, paper and the dashboard, all at once' },
              { figure: 'No shared state', note: 'Four people, four versions of the same ride' },
            ]}
          />

          <CurrentFlow
            steps={[
              { actor: 'Patient party', act: 'Calls the hospital during an emergency', via: 'Phone' },
              { actor: 'Hospital admin', act: 'Collects patient details on the call and writes them down', via: 'Phone, paper' },
              { actor: 'Hospital admin', act: 'Forwards the request to Merry Health operations', via: 'WhatsApp or a call' },
              { actor: 'Merry Health operations', act: 'Retypes the request into the dashboard as a new ride', via: 'Dashboard' },
              {
                actor: 'Merry Health operations',
                act: 'Calls drivers one at a time to check availability',
                via: 'Phone',
                repeat: '3 to 4 calls, until somebody picks up and says yes',
              },
              { actor: 'Driver', act: 'Confirms availability and starts the trip', via: 'Phone' },
              {
                actor: 'Hospital and patient party',
                act: 'Call operations to ask where the ambulance is',
                via: 'Phone',
                repeat: 'Every time anyone wants to know, because nothing has told them',
              },
              { actor: 'Merry Health operations', act: 'Calls the driver for a status, then relays it back', via: 'Phone' },
              { actor: 'Merry Health operations', act: 'Marks the ride complete on the dashboard, often much later', via: 'Dashboard' },
            ]}
          />
        </Slide>

        <Slide id="qv-mismatch" chapter="01" height="auto">
          <Kicker n="01" label="The problem was not low adoption" />
          <Headline>
            The workflow did not match <span className="em">emergency behaviour</span>.
          </Headline>
          <Lede wide>
            Staff were not avoiding the product out of habit. They were avoiding it because it
            asked for things an emergency does not leave room for, and because using it correctly
            was slower than not using it at all.
          </Lede>

          <Notes
            items={[
              {
                title: 'Workflow mismatch',
                body: 'The system expected a complete structured form. Staff were on the phone, on their feet, and filling gaps afterwards.',
              },
              {
                title: 'Manual coordination',
                body: 'Driver assignment ran on repeated calls, so dispatch time depended on who happened to pick up.',
              },
              {
                title: 'Fragmented data',
                body: 'One ride moved through WhatsApp, calls, paper and the dashboard, and each one held a different version of it.',
              },
              {
                title: 'Visibility gaps',
                body: 'There was no dependable shared ETA or ride state, so everyone kept asking, and the asking cost more calls.',
              },
            ]}
          />
        </Slide>

        <Slide id="qv-reframe" chapter="01" height="auto">
          <Kicker n="01" label="The reframe" />
          <Headline>
            From redesigning screens to redesigning the <span className="em">dispatch system</span>.
          </Headline>
          <Lede wide>
            Once we had the full journey mapped, it was clear that no single interface could solve
            this. Four parties were coordinating an emergency and none of them could see the same
            thing at the same time. The product had to hold people, channels, ride states and data
            as one system.
          </Lede>

          <ActorHub
            hub="Shared ride state"
            hubNote="One record every channel reads from and writes to. Four seats, one version of the ride."
            actors={[
              { name: 'Hospital admin', needs: 'A request that goes through fast, and proof that it did.' },
              { name: 'Merry Health operations', needs: 'Sight of everything active, and a way to catch the ones going wrong.' },
              { name: 'Driver', needs: 'A clear assignment, and as little interaction as possible while driving.' },
              { name: 'Patient party', needs: 'An ETA that arrives without anyone having to ask for it.' },
            ]}
          />
        </Slide>

        <Slide id="qv-decision" chapter="01" height="auto" invert>
          <Kicker n="01" label="The strategic decision" />
          <Headline size="large">
            Do not replace WhatsApp. <span className="em">Make it part of the product.</span>
          </Headline>
          <Lede wide>
            Moving hospitals off WhatsApp would have added one more behaviour change to the middle
            of an emergency. So we stopped treating it as a workaround and split the experience
            into two layers instead.
          </Lede>

          <div className="mt-14 md:mt-20">
            <Split
              left={{
                label: 'Familiar interaction layer',
                children: (
                  <>
                    <p className="text-2xl leading-snug md:text-3xl">WhatsApp and SMS</p>
                    <Callouts
                      items={[
                        'The ambulance request itself',
                        'Prompts for missing information',
                        'Driver acceptance',
                        'Milestone updates',
                        'Tracking links',
                        'Patient communication',
                      ]}
                    />
                  </>
                ),
              }}
              right={{
                label: 'Operational system layer',
                children: (
                  <>
                    <p className="text-2xl leading-snug md:text-3xl">The Merry Health platform</p>
                    <Callouts
                      items={[
                        'Structured ride records',
                        'Assignment logic',
                        'Shared ride state',
                        'Live operations',
                        'Exception handling',
                        'Reporting and audit',
                      ]}
                    />
                  </>
                ),
              }}
              centre={
                <>
                  Meet people in the channel they already trust, and{' '}
                  <span className="em">structure everything behind the interaction</span>.
                </>
              }
            />
          </div>
        </Slide>

        <Slide id="qv-lifecycle" chapter="01" height="auto">
          <Kicker n="01" label="The operating model" />
          <Headline>
            One ride. <span className="em">One shared state.</span>
          </Headline>
          <Lede wide>
            Every ride became a sequence of events on a single record. A state change is not a
            message anyone composes. It is something the system detects, writes down, and then
            tells whoever needs to know.
          </Lede>

          <Lifecycle
            caption="One state change, five destinations. Every filled square used to be a message somebody sent by hand."
            stages={[
              'Request received',
              'Driver assigned',
              'Trip started',
              'En route',
              'Arrived at pickup',
              'Patient onboarded',
              'Reached hospital',
              'Closed',
            ]}
            lanes={[
              { label: 'Hospital update', at: [0, 1, 4, 5, 6, 7] },
              { label: 'Patient notification', at: [1, 3, 4, 5, 6] },
              { label: 'Driver action', at: [1, 2, 4, 5, 6] },
              { label: 'Operations dashboard', at: [0, 1, 2, 3, 4, 5, 6, 7] },
              { label: 'Reporting timestamp', at: [0, 2, 4, 5, 6, 7] },
            ]}
          />

          <Statement>
            Before, communication created the record. Now the record drives the communication.
          </Statement>
        </Slide>

        <Slide id="qv-product" chapter="01" height="auto">
          <Kicker n="01" label="What the model produced" />
          <Headline>
            The workflow defined the <span className="em">product architecture</span>.
          </Headline>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
            {[
              {
                n: '01',
                name: 'Fast intake',
                body: 'Priority information first, map-based pickup, and the rest captured progressively.',
                src: hifiBooking,
                alt: 'The redesigned ambulance request screen: a map filling most of the view with pickup and drop fields above it, and a ride details panel on the right',
              },
              {
                n: '02',
                name: 'Operational dashboard',
                body: 'Active rides, alerts, quick actions and system level visibility in one place.',
                src: hifiDashboard,
                alt: 'The redesigned operations dashboard: response time and revenue cards, quick actions, and a sortable ride list',
              },
              {
                n: '03',
                name: 'Live ride control',
                body: 'Map, ETA, ride timeline, patient details and escalation, on one screen.',
                src: hifiTracking,
                alt: 'The live ride view: current status, ETA to pickup, last location update, a live map and the trip timeline',
              },
              {
                n: '04',
                name: 'Reporting',
                body: 'Trip volume, response time, turnaround, billing and operational trends.',
                src: hifiReports,
                alt: 'The reporting module: filters, total trips, billing, average response time and turnaround, with trip volume and ride type charts',
              },
            ].map((module) => (
              <div key={module.n}>
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="label tabular-nums text-ink-500">{module.n}</span>
                  <p className="text-xl leading-snug md:text-2xl">{module.name}</p>
                </div>
                <Plate
                  src={module.src}
                  alt={module.alt}
                  onOpen={open}
                  imageClassName="aspect-[16/11] object-cover object-top"
                />
                <p className="mt-4 max-w-[42ch] text-sm leading-[1.5] text-ink-600 md:text-base">
                  {module.body}
                </p>
              </div>
            ))}
          </div>

          <Statement>
            Screens came out of the operating model. They were not the starting point.
          </Statement>
        </Slide>

        <Slide id="qv-fallbacks" chapter="01" height="auto">
          <Kicker n="01" label="Designing for the day it goes wrong" />
          <Headline>
            Emergency systems need <span className="em">fallbacks</span>, not perfect conditions.
          </Headline>
          <Lede wide>
            A dead phone, no network, a driver who does not answer. In this environment those are
            not rare. We designed the degraded paths before the happy path, and every one of them
            has a named owner and a route back to the same ride record.
          </Lede>

          <EdgeGrid
            items={[
              { when: 'The driver does not answer', then: 'Pending responses are tracked. No reply inside two minutes escalates to the next driver.' },
              { when: 'The driver has no smartphone', then: 'The assignment goes out over SMS, and operations updates the ride on their behalf.' },
              { when: 'The network drops', then: 'State is held and synced when the connection returns, rather than lost at the handoff.' },
              { when: 'GPS is unavailable', then: 'The system falls back to manual ETA updates and flags the ride for operations.' },
              { when: 'Critical data is missing', then: 'The system replies asking for the one field it needs now, and nothing else.' },
              { when: 'The ride is never closed', then: 'A stationary driver raises an alert, and operations intervenes or reassigns.' },
            ]}
          />

          <Statement>
            Failure states were part of the core design, not a section at the end of it.
          </Statement>
        </Slide>

        {/* ======================= 02, THE SYSTEM =========================== */}
        <ChapterOpen
          id="ch-system"
          n="02"
          name="The system"
          question="What the platform was actually being asked to do, and the four places it broke."
        />

        <Slide id="context" chapter="02" height="auto">
          <Kicker n="02" label="Context" />
          <Headline>
            Emergency coordination was happening <span className="em">outside the platform</span>.
          </Headline>
          <Lede wide>
            Merry Health is an ambulance management service connecting hospitals, its own
            operations team, drivers and patient families. In many Tier 2 and Tier 3 environments
            hospital staff work with limited time, uneven digital adoption and thin staffing. The
            operational workflow ran far beyond the dashboard, and the dashboard could not see any
            of it.
          </Lede>

          <p className="label mt-14 border-b border-border pb-3 text-ink-500 md:mt-20">
            Existing platform
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
            <Plate
              src={legacyDashboard}
              alt="The existing Merry Health dashboard: a wide map, six summary cards, and tables of ongoing and completed rides"
              caption="The dashboard as it was. Totals, a map, and two tables of rides."
              onOpen={open}
            />
            <Plate
              src={legacyBooking}
              alt="The existing booking form, a long single-column form of required fields"
              caption="Booking. Every field weighted the same, whatever the emergency."
              onOpen={open}
            />
            <Plate
              src={legacyMap}
              alt="The existing find-ambulance map view"
              caption="Find ambulance. A map, without a ride state attached to it."
              onOpen={open}
            />
            <Plate
              src={legacyRides}
              alt="The existing ride list, a paginated table of past and current rides"
              caption="The ride list. A record of what happened, not a view of what is happening."
              onOpen={open}
            />
          </div>

          <Footnote>
            One detail in the first screenshot carries the whole data problem. The platform&rsquo;s
            own average response time reads 23:41:14. That is not how long an ambulance took. It is
            what the number becomes when rides are closed at the end of the day instead of when
            they end.
          </Footnote>
        </Slide>

        <Slide id="research" chapter="02" height="auto">
          <Kicker n="02" label="Where the analysis went" />
          <Headline>
            Mapping where the system was <span className="em">breaking</span>.
          </Headline>
          <Lede wide>
            We audited the platform, reconstructed the dispatch workflow end to end with the
            operations team, and traced each actor through it. What made the mapping worth doing
            was not the map. It was that the same four breakdowns turned up in every phase, which
            made them structural rather than local, and meant no amount of interface work would
            reach them.
          </Lede>

          <Methods
            items={[
              'Platform audit',
              'Stakeholder analysis',
              'Current-state workflow mapping',
              'Journey mapping',
              'Opportunity mapping',
              'Scenario analysis',
            ]}
          />

          <p className="label mt-14 border-b border-border pb-3 text-ink-500 md:mt-20">
            The working artifacts
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Artifact
              src={currentFlow}
              alt="The current-state dispatch flowchart, annotated with the loops and gaps found in the workflow"
              title="Current-state flow"
              note="Every branch, with the loops marked where the process repeats itself."
              onOpen={open}
            />
            <Artifact
              src={hospitalJourney}
              alt="The hospital admin journey map across the dispatch process"
              title="Hospital admin journey"
              onOpen={open}
            />
            <Artifact
              src={adminCurrentJourney}
              alt="The Merry Health operations journey map, current state"
              title="Operations journey, current"
              onOpen={open}
            />
            <Artifact
              src={adminIdealJourney}
              alt="The Merry Health operations journey map, proposed state"
              title="Operations journey, proposed"
              onOpen={open}
            />
            <Artifact
              src={patientCurrentJourney}
              alt="The patient party journey map, current state"
              title="Patient party journey, current"
              onOpen={open}
            />
            <Artifact
              src={patientIdealJourney}
              alt="The patient party journey map, proposed state"
              title="Patient party journey, proposed"
              onOpen={open}
            />
          </div>

          <Footnote>
            These are working boards, kept small on purpose and readable at full size. The
            current-state maps were built with Merry Health operations from the workflow as they
            ran it, which is why the conditions quoted on this page say they were observed there
            rather than measured across the platform.
          </Footnote>
        </Slide>

        <Slide id="failures" chapter="02" height="auto">
          <Kicker n="02" label="What the mapping surfaced" />
          <Headline>Four system failures.</Headline>

          <Failures
            items={[
              {
                title: 'Emergency-mode mismatch',
                body: 'The system expected complete structured information before anyone could move forward. Under pressure, staff prioritised getting the ambulance moving and filled the gaps afterwards.',
                quote: 'We can’t fill long forms when a patient is critical.',
              },
              {
                title: 'Manual coordination',
                body: 'Operations contacted drivers one after another until somebody accepted, which made dispatch time a function of who happened to be free rather than of the system.',
                quote: 'I call 3 to 4 drivers before one confirms.',
              },
              {
                title: 'Visibility gaps',
                body: 'Driver movement, ETA and ride progress were not shared consistently, so every party filled the silence with a phone call, and each call took operations away from dispatching.',
                quote: 'Families keep calling us for ETA updates.',
              },
              {
                title: 'Fragile data',
                body: 'Information was copied between channels or completed later, which weakened timestamps and made response time and turnaround impossible to measure honestly.',
                quote: 'We update records at the end of the day.',
              },
            ]}
          />
        </Slide>

        <Slide id="blueprint" chapter="02" height="auto">
          <Kicker n="02" label="The service blueprint" />
          <Headline>
            The interface was only <span className="em">one part</span> of the experience.
          </Headline>
          <Lede wide>
            We blueprinted the service across four phases and all four actors. Each phase carried
            its own structural failure, and not one of them looked like an interface problem.
          </Lede>

          <PhaseBlueprint
            phases={[
              {
                name: 'Intake',
                actors: 'Patient party, hospital admin, operations',
                breaks: 'Heavy dependency on manual coordination. Details were collected on a call and retyped somewhere else.',
                opportunity: 'Capture the request once, in the channel it already arrives in.',
              },
              {
                name: 'Assign',
                actors: 'Operations, driver',
                breaks: 'No real-time visibility. Assignment ran on repeated calls, which slowed dispatch and made it unpredictable.',
                opportunity: 'Push the assignment, track the response, escalate on a timer.',
              },
              {
                name: 'En route',
                actors: 'Driver, operations, hospital, patient party',
                breaks: 'Fragmented data across channels. One ride moved through WhatsApp, calls and the dashboard, and each held a different version of it.',
                opportunity: 'One ride state, read by every channel.',
              },
              {
                name: 'Handover and close',
                actors: 'Driver, operations',
                breaks: 'Workflow mismatch with real hospital behaviour. The system expected structured entry, staff used quick calls, and records were completed late.',
                opportunity: 'Close the ride from an operational event, not from somebody remembering.',
              },
            ]}
          />

          <div className="mt-10 max-w-sm">
            <Artifact
              src={phaseMapping}
              alt="The service blueprint: four phases across four actors, with the system breakdown reason for each phase"
              title="The full service blueprint"
              note="Four phases, four actors, and the breakdown reason under each phase."
              onOpen={open}
            />
          </div>
        </Slide>

        <Slide id="opportunity" chapter="02" height="auto">
          <Kicker n="02" label="Where the work could go" />
          <Headline size="large">
            The opportunity was to reduce <span className="em">coordination</span>, not clicks.
          </Headline>
          <Lede wide>
            We took every breakdown in the workflow and asked what it would take for that step to
            stop needing a person. Four of the answers were structural, and they became the shape
            of the proposed system.
          </Lede>

          <Opportunities
            items={[
              {
                title: 'Progressive intake',
                body: 'Take enough to dispatch, then enrich the record while the ambulance is already moving.',
                replaces: 'Clarification calls',
              },
              {
                title: 'Structured assignment',
                body: 'Push the ride to a driver, track the response, and escalate automatically when nobody answers.',
                replaces: 'The driver calling loop',
              },
              {
                title: 'Shared ride state',
                body: 'One event, visible everywhere it matters, instead of relayed from person to person.',
                replaces: 'Status relay calls',
              },
              {
                title: 'Event-driven closure',
                body: 'Derive the timestamps from what actually happened on the trip, not from data entry at the end of the day.',
                replaces: 'Retrospective record keeping',
              },
            ]}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
            <Artifact
              src={opportunityRefined}
              alt="The refined opportunity mapping table: each loophole in the workflow against its current issue, mapped opportunity and expected impact"
              title="Opportunity mapping"
              note="Eight loopholes in the workflow, each mapped to an opportunity and the measure it would move."
              onOpen={open}
            />
            <Artifact
              src={opportunityMapping}
              alt="The working opportunity mapping board"
              title="The working board"
              note="Where the eight came from."
              onOpen={open}
            />
          </div>
        </Slide>

        {/* ====================== 03, THE REDESIGN ========================== */}
        <ChapterOpen
          id="ch-redesign"
          n="03"
          name="The redesign"
          question="The decision the project turned on, and the operating model that came out of it."
        />

        <Slide id="principle" chapter="03" height="full" center invert>
          <p className="label text-ink-500">The principle</p>
          <p className="mt-10 max-w-[18ch] text-[2.5rem] leading-[1.02] md:text-[5rem]">
            Do not digitise <span className="em">every manual step</span>.
          </p>
          <p className="mt-12 max-w-2xl text-lg leading-[1.5] text-ink-600 md:text-2xl">
            Automating a broken process only makes the broken process faster. We redesigned the
            underlying workflow first, and then defined the interfaces it needed.
          </p>
        </Slide>

        <Slide id="whatsapp" chapter="03" height="auto">
          <Kicker n="03" label="The messaging layer" />
          <Headline>
            Designing with <span className="em">existing behaviour</span> instead of against it.
          </Headline>
          <Lede wide>
            WhatsApp was already operational infrastructure, so we treated it as a product channel
            rather than a workaround to be removed. The system reads what a hospital sends, works
            out what is missing, and asks for that one thing. Structure becomes a side effect of a
            conversation people were already having.
          </Lede>

          <ChannelScripts
            columns={[
              {
                who: 'Hospital admin',
                note: 'Sends the request the way they already would',
                steps: [
                  'Sends location, condition and contact, in whatever form',
                  'System reads what is there and creates the request',
                  'System asks only for the fields still missing',
                  'Case ID and confirmation come back',
                  'Milestone updates arrive on the same thread',
                ],
              },
              {
                who: 'Driver',
                note: 'One card, two buttons, then almost nothing',
                steps: [
                  'Receives a structured ride card with distance and pickup link',
                  'Accepts or declines in one tap',
                  'Gets the pickup link',
                  'Marks the milestones as they happen',
                  'Ride closes',
                ],
              },
              {
                who: 'Patient party',
                note: 'Told, rather than kept asking',
                steps: [
                  'Confirmation that the request was received',
                  'Driver name, number and ambulance number',
                  'ETA, and the ETA again as it changes',
                  'A live tracking link',
                  'Arrival',
                ],
              },
            ]}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16 md:gap-8">
            <Plate
              src={whatsappAdmin}
              alt="The Merry Health operations WhatsApp thread, showing an incoming free-text request, an automatic case ID, and a prompt reading patient contact is missing please update"
              caption="Operations. The system replies asking for the one missing field, not the whole form."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappHospital}
              alt="The hospital announcement group, showing the case ID and each ride milestone posted as a status update"
              caption="Hospital. Every milestone lands on one thread, against one case ID."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappDriver}
              alt="The driver thread, showing a ride card with case ID, patient contact, pickup link, distance, and accept or decline buttons"
              caption="Driver. Case, distance, pickup link, accept or decline."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappPatient}
              alt="The patient party thread, showing driver details, ambulance number, arrival countdown and a tracking link"
              caption="Patient party. Driver, ambulance, ETA, tracking link, arrival."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
          </div>

          <Principle>
            The system asks for what is missing. It never asks again for what it already has.
          </Principle>
        </Slide>

        <Slide id="lifecycle-deep" chapter="03" height="auto">
          <Kicker n="03" label="The proposed system" />
          <Headline>
            One <span className="em">event-driven</span> ride lifecycle.
          </Headline>
          <Lede wide>
            Each state is entered by something happening in the world rather than by somebody
            reporting it, and each one writes to the same record. That record is what the
            dashboard renders, what the messages are generated from, and what reporting reads
            later.
          </Lede>

          <StateList
            states={[
              { phase: 'Intake', state: 'Request received', captures: 'Location, condition, contact, requested ambulance type, timestamp' },
              { phase: 'Assign', state: 'Driver assigned', captures: 'Driver, ambulance number, acceptance, time to acceptance' },
              { phase: 'Assign', state: 'Trip started', captures: 'Start timestamp, route opened, tracking link issued' },
              { phase: 'En route', state: 'En route', captures: 'Live position, ETA, distance remaining, deviation and halt alerts' },
              { phase: 'En route', state: 'Arrived at pickup', captures: 'Arrival timestamp, response time closed out' },
              { phase: 'En route', state: 'Patient onboarded', captures: 'Onboarding timestamp, facilities actually used' },
              { phase: 'Handover', state: 'Reached hospital', captures: 'Arrival timestamp, journey duration, distance travelled' },
              { phase: 'Close', state: 'Closed', captures: 'Closure timestamp, turnaround, billing record, full timeline stored' },
            ]}
          />

          <div className="mt-12 border border-border p-6 md:mt-16 md:p-8">
            <p className="label-strong">What holds it together</p>
            <p className="mt-5 max-w-3xl text-lg leading-snug md:text-2xl">
              Every message on every channel carries the same case ID, so the hospital thread, the
              driver card, the patient updates and the dashboard row are all views of one record.
            </p>
            <p className="label mt-6 text-ink-500">MH-REQ-1342</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
            <Artifact
              src={proposedWorkflow}
              alt="The proposed system workflow: twelve numbered steps across hospital admin, WhatsApp API, operations, driver and patient party, with the data, technology and edge-case fallback attached to each"
              title="The full system logic"
              note="Twelve steps, with the data, the mechanism and the fallback named at each one."
              onOpen={open}
            />
            <Artifact
              src={idealFlow}
              alt="The proposed dispatch flow drawn end to end, with the automatic stretches highlighted"
              title="The proposed flow"
              note="The highlighted stretches are the parts that no longer need a person."
              onOpen={open}
            />
          </div>
        </Slide>

        <Slide id="fallbacks-deep" chapter="03" height="auto">
          <Kicker n="03" label="Designing the degraded paths" />
          <Headline>
            The system also had to work when <span className="em">things went wrong</span>.
          </Headline>
          <Lede wide>
            The workflow above carries a fallback at every step, because in this environment the
            exception is the operating condition. These are six of them. Each names what the
            system does instead and who is responsible for it, which is the part that makes a
            fallback real rather than a note on a diagram.
          </Lede>

          <EdgeGrid
            columns={2}
            items={[
              {
                when: 'The hospital number is not mapped',
                then: 'Operations picks the hospital manually, and the number is mapped so it resolves next time.',
                owner: 'Operations',
              },
              {
                when: 'The wrong pickup location is shared',
                then: 'The hospital or the family sends a new location, and the backend recalculates the ETA against the same ride.',
                owner: 'System',
              },
              {
                when: 'The hospital has no WhatsApp',
                then: 'They call Merry Health, and operations creates the trip by hand against the same record. The channel changes, the record does not.',
                owner: 'Operations',
              },
              {
                when: 'The request arrives as a voice note or a photo',
                then: 'Operations fills the missing fields, and the ride still enters the system as structured data rather than as an attachment.',
                owner: 'Operations',
              },
              {
                when: 'A WhatsApp template fails to deliver',
                then: 'Automatic retry, then SMS, then a dashboard alert, so a failed message never fails silently.',
                owner: 'System',
              },
              {
                when: 'No drivers are available in the area',
                then: 'Operations sources manually from partners, and tracking falls back to GPS only for that trip.',
                owner: 'Operations',
              },
            ]}
          />

          <div className="mt-12 border-l border-foreground p-6 pl-6 md:mt-16 md:p-8 md:pl-8">
            <p className="label-strong">Triage was a rule, not a judgement call</p>
            <p className="mt-5 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
              A message containing accident, bleeding, chest pain, unconscious, stroke, cardiac,
              head injury or ventilator classifies as P1 critical. An emergency without a critical
              keyword is P2. Transfers, planned trips and non-emergencies are P3. Anything the
              rules cannot classify goes to manual triage rather than being guessed at, because a
              wrong automatic priority is worse than a slow human one.
            </p>
          </div>
        </Slide>

        <Slide id="surfaces" chapter="03" height="auto">
          <Kicker n="03" label="From logic to requirements" />
          <Headline>
            The operating model told us <span className="em">which surfaces to build</span>.
          </Headline>
          <Lede wide>
            With the model settled, we mapped scenarios to work out what each person needed to see
            and do, across the desktop platform and the messaging channels. Four surfaces came out
            of it, and each one answers a single question.
          </Lede>

          <dl className="mt-12 divide-y divide-border border-y border-border md:mt-16">
            {[
              ['Dashboard', 'What is active, and what needs attention right now?'],
              ['Add ride', 'How fast can a request become a dispatchable record?'],
              ['Ride list and tracking', 'What is happening with this ambulance, and what has already happened?'],
              ['Reporting', 'How is the operation performing, and can we trust the number?'],
            ].map(([surface, question]) => (
              <div key={surface} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-10 md:py-6">
                <dt className="text-lg leading-snug md:text-xl">{surface}</dt>
                <dd className="text-base leading-snug text-ink-600 md:text-xl">{question}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <Plate
              src={wireframes}
              alt="Hand-drawn wireframes of the active rides list, ride details and map view, showing alert rows, a ride timeline and ETA metrics"
              label="Sketches"
              caption="Active rides, ride details and the map view, worked out on paper before anything became a Figma file."
              onOpen={open}
            />
            <div className="flex flex-col justify-center">
              <p className="label mb-6 text-ink-500">What changed between here and the final screens</p>
              <Callouts
                items={[
                  'The ride list stopped being a record of what happened and became a queue of what needs attention: delayed, no signal, no update.',
                  'Ride details gained a timeline, because the question was never what is the status, it was what has happened so far.',
                  'Alerts moved from something you go looking for to something the system raises: halted over ten minutes, route deviation, no update in twenty.',
                ]}
              />
            </div>
          </div>
        </Slide>

        {/* ======================= 04, THE PRODUCT ========================== */}
        <ChapterOpen
          id="ch-product"
          n="04"
          name="The product"
          question="Four surfaces, and the question each one exists to answer."
        />

        <Slide id="module-intake" chapter="04" height="auto">
          <Kicker n="04" label="Module 01" />
          <Headline>
            Get the ambulance <span className="em">moving first</span>.
          </Headline>
          <Lede wide>
            The legacy booking screen treated every field as equally important, which is why staff
            went around it. The redesign asks for what is needed to start the ride and lets the
            rest arrive progressively, while the ambulance is already on its way.
          </Lede>

          <Plate
            src={hifiBooking}
            alt="The redesigned ambulance request screen: pickup and drop search above a full-width map with a dropped pin, and a ride details panel on the right carrying contact, emergency type, condition, ambulance type and facility chips"
            className="mt-12 md:mt-16"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'Pickup and drop are set on the map, because an address typed under pressure is the field that fails most often.',
                'Contact, emergency type and condition come first. They are what determines the dispatch.',
                'Ambulance type and required facilities are chips, not a form: oxygen, ventilator, cardiac monitor, stretcher.',
                'Everything else sits behind additional details, collapsed, with a visible count of what is still missing.',
                'Nothing blocks submission that does not have to. The record can be completed later, the ride cannot.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>Dispatch first. Complete the record progressively.</Principle>
            </div>
          </div>
        </Slide>

        <Slide id="module-dashboard" chapter="04" height="auto">
          <Kicker n="04" label="Module 02" />
          <Headline>
            From record keeping to <span className="em">operational control</span>.
          </Headline>
          <Lede wide>
            The old dashboard reported on rides that had finished. This one is built around the
            four questions an operations team needs answered the moment they look at it. What is
            active. What needs attention. Where are the ambulances. What changed.
          </Lede>

          <Plate
            src={hifiDashboard}
            alt="The redesigned operations dashboard: revenue and average response time cards, ongoing rides, live map and quick add tiles, a quick actions panel, and a ride list tabbed by all, completed and pending"
            className="mt-12 md:mt-16"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'Ongoing rides carries a live count, so the first thing on the screen is how much is in the air.',
                'Live map and quick add sit beside it, because those are the two things an operator reaches for next.',
                'Quick actions is a standing queue: what needs attention, what raised an alert, what changed.',
                'Average response time is present as an operational measure rather than a vanity number.',
                'The ride list is tabbed by all, completed and pending, so a stalled request is one click away.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                An operations screen should be answerable at a glance, not readable at leisure.
              </Principle>
            </div>
          </div>
        </Slide>

        <Slide id="module-ride" chapter="04" height="auto">
          <Kicker n="04" label="Module 03" />
          <Headline>
            One place to understand <span className="em">what is happening now</span>.
          </Headline>
          <Lede wide>
            Reconstructing the state of a ride used to mean checking several channels and making a
            call. This view holds the operational context in one place, and it is honest about
            what it does not yet know.
          </Lede>

          <Plate
            src={hifiTracking}
            alt="The live ride view: a status bar carrying current status, ETA to pickup, last location update, distance remaining and driver status, above a live map, a trip timeline of six states, and a patient info panel"
            className="mt-12 md:mt-16"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'Current status, ETA, last location update, distance remaining and driver status, on one row.',
                'The trip timeline shows every state and what is still pending, so the question what has happened so far has one answer.',
                'Patient info carries the details that decide the pickup: ambulance type, facilities, lift, floor.',
                'Call driver and escalate are within reach, because the exception path should not be buried.',
                'Shown here in its earliest state on purpose. No driver yet, so the map says what it is waiting for instead of showing an empty grid.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                The screen answers one question: what is happening with this ambulance, right now?
              </Principle>
            </div>
          </div>
        </Slide>

        <Slide id="module-reporting" chapter="04" height="auto">
          <Kicker n="04" label="Module 04" />
          <Headline>
            Turn operations into <span className="em">evidence</span>.
          </Headline>
          <Lede wide>
            Better reporting depended on fixing the data upstream. Once ride milestones are
            structured events, response time and turnaround can be derived from what happened
            rather than reconstructed from memory at the end of a shift.
          </Lede>

          <Plate
            src={hifiReports}
            alt="The reporting module: date range, case type, status and ambulance type filters above total trips, billing, average response time and average turnaround, with trip volume, journey time and ride type charts, and an export and share menu"
            className="mt-12 md:mt-16"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'Total trips, billing, average response time and average turnaround as the four operational headlines.',
                'Trip volume over the selected range, and journey time from pickup to destination.',
                'Ride types split across emergency, non-emergency, scheduled and transfer.',
                'Filters on date range, case type, status and ambulance type, so a claim can be checked rather than taken.',
                'Export to CSV, PDF or Excel, or share a link, because these numbers get discussed outside the product.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                Reporting quality starts in the workflow, not in the reporting screen.
              </Principle>
            </div>
          </div>

          <Footnote>
            The figures on this screen are placeholder data from the design file. They are not
            Merry Health&rsquo;s operating numbers, and nothing on this page should be read as one.
          </Footnote>

          {PROTOTYPE_URL ? (
            <a
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              className="rule-link mt-12 inline-block text-lg md:mt-16 md:text-2xl"
            >
              Explore the prototype <span aria-hidden="true">&#8599;</span>
            </a>
          ) : (
            import.meta.env.DEV && (
              <p className="label mt-12 inline-block border border-dashed border-border px-4 py-3 text-ink-500 md:mt-16">
                Placeholder &middot; paste the Figma prototype URL into PROTOTYPE_URL to turn this
                call to action on
              </p>
            )
          )}
        </Slide>

        {/* ===================== 05, WHAT IT CHANGES ======================== */}
        <ChapterOpen
          id="ch-change"
          n="05"
          name="What it changes"
          question="The system before and after, what we would measure, and what I took from it."
        />

        <Slide id="before-after" chapter="05" height="auto">
          <Kicker n="05" label="Before and after" />
          <Headline>
            The same ride, held together <span className="em">two different ways</span>.
          </Headline>

          <SystemPanes
            before={{
              label: 'Before',
              verdict: 'Human coordination holds the system together.',
              steps: [
                { text: 'Hospital calls' },
                { text: 'Operations records the request', relay: true },
                { text: 'Operations calls drivers', relay: true },
                { text: 'A driver confirms' },
                { text: 'Hospital asks for an update', relay: true },
                { text: 'Patient party asks for an update', relay: true },
                { text: 'Operations calls the driver', relay: true },
                { text: 'Dashboard updated by hand', relay: true },
                { text: 'Ride closed, later' },
              ],
            }}
            after={{
              label: 'Proposed',
              verdict: 'The system coordinates the workflow.',
              steps: [
                { text: 'Hospital requests, in the channel it already uses' },
                { text: 'Ride record created' },
                { text: 'Assignment triggered' },
                { text: 'Driver accepts or it escalates' },
                { text: 'Shared ride state updates' },
                { text: 'Notifications propagate to all four parties' },
                { text: 'Ride events captured as they happen' },
                { text: 'Closure creates the reporting record' },
              ],
            }}
          />

          <Statement>
            From people relaying status, to events propagating status.
          </Statement>
        </Slide>

        <Slide id="targets" chapter="05" height="auto">
          <Kicker n="05" label="Design targets" />
          <Headline>
            What the redesigned system is <span className="em">intended</span> to change.
          </Headline>
          <Lede wide>
            Nothing here was deployed, so nothing here is a result. These are the targets the
            design was aimed at, each with the measurement that would confirm it or kill it. A
            number without that second half is not worth putting on a page.
          </Lede>

          <Targets
            items={[
              {
                figure: 'Under 3 min',
                outcome: 'Request to a confirmed driver',
                how: 'Against the 8 to 10 minutes observed in the manual flow. Measured as the time from request received to driver accepted, which the lifecycle now timestamps on its own.',
              },
              {
                figure: 'Fewer calls',
                outcome: 'Coordination calls per ride',
                how: 'Automatic acknowledgement and milestone updates remove the reason for most of them. Measured as follow-up calls per dispatch.',
              },
              {
                figure: 'Higher completeness',
                outcome: 'Rides that leave a full record',
                how: 'Captured as a side effect of normal operation rather than typed in afterwards. Measured as the share of trips with complete start and end timestamps.',
              },
              {
                figure: 'Shared visibility',
                outcome: 'Live ride state and ETA, without anyone asking',
                how: 'Measured as the share of rides where the hospital and the patient party received updates without contacting operations.',
              },
              {
                figure: 'Usable reporting',
                outcome: 'Response time and turnaround derived, not reconstructed',
                how: 'Measured as the share of rides closed by an operational event rather than by manual entry at the end of the day.',
              },
            ]}
          />
        </Slide>

        <Slide id="contribution" chapter="05" height="auto">
          <Kicker n="05" label="Where I sat" />
          <Headline>My contribution</Headline>
          <Lede wide>
            This was a team of five designers, on an MDes practicum apprenticeship with Merry
            Health. The analysis, the operating model and the final system were arrived at
            together, which is why the sections above say we.
          </Lede>
          <Lede wide>
            My work spanned research synthesis, systems thinking and design execution. I
            contributed to mapping the current service, identifying the workflow breakdowns,
            defining the opportunity areas, developing the proposed operating model, and
            translating those decisions into interaction flows and product screens.
          </Lede>

          <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Research and discovery', ['Platform audit', 'Journey analysis', 'Workflow analysis']],
              ['Systems thinking', ['Actor mapping', 'Opportunity mapping', 'Service logic', 'Fallback scenarios']],
              ['Product design', ['Scenario mapping', 'Information architecture', 'Interaction flows', 'Wireframes', 'High-fidelity UI']],
              ['Collaboration', ['Team design reviews', 'Synthesis', 'Prototype refinement', 'Final storytelling']],
            ].map(([title, items]) => (
              <div key={title as string} className="bg-background p-5 md:p-6">
                <p className="label text-ink-500">{title as string}</p>
                <ul className="mt-6 space-y-2.5">
                  {(items as string[]).map((item) => (
                    <li key={item} className="text-base leading-snug text-ink-600 md:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Slide>

        <Slide id="reflection" chapter="05" height="auto">
          <Kicker n="05" label="What this changed in how I design" />
          <Headline>
            What I took <span className="em">out of it</span>.
          </Headline>

          <div className="mt-12 grid gap-x-16 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-y-20">
            {[
              [
                'Design the service, not only the interface',
                'A cleaner dashboard would not have solved a workflow that was still happening over the phone. The screens only became the right screens once the workflow underneath them changed.',
              ],
              [
                'Adoption starts with existing behaviour',
                'Integrating with a familiar workflow can be more effective than replacing it. WhatsApp had the one thing the product did not: everybody was already using it, and nobody had to be taught.',
              ],
              [
                'Failure states belong in the core experience',
                'No network, missing GPS and an unresponsive driver are not theoretical in emergency operations. Designing the degraded paths first changed what the happy path was allowed to assume.',
              ],
              [
                'Operational UX removes invisible work',
                'Every reliable system event eliminates another call, another manual update, or another thing somebody has to remember while under pressure. That work is invisible until somebody counts it.',
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-t-2 border-foreground pt-6">
                <p className="max-w-[20ch] text-[1.5rem] leading-[1.1] md:text-[2.25rem]">{title}</p>
                <p className="mt-6 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <Footnote>
            And the limit of all of it: this system has never met a real dispatch. Everything above
            is reasoned from how the work runs today and from the fallbacks the team could name,
            not from a week of watching it hold up under load. That is the test it has not taken.
          </Footnote>
        </Slide>

        <Slide id="closing" chapter="05" height="auto" invert>
          <p className="label text-ink-500">In closing</p>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-[1.6] text-ink-600 md:text-lg">
            <p>Merry Health started as a dashboard problem.</p>
            <p>
              It became a systems-design project about making emergency dispatch faster, more
              observable and more resilient, across people, channels and the operational
              constraints of the places it runs in.
            </p>
          </div>

          <p className="mt-14 max-w-[24ch] text-[2rem] leading-[1.05] md:mt-20 md:text-[3.5rem]">
            The goal was not to digitise every step. It was to remove the coordination that should
            never have needed a person in the first place.
          </p>

          <HeroComposition className="mt-16 w-full max-w-4xl md:mt-24" />

          <nav
            aria-label="Other projects"
            className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 md:mt-20"
          >
            <Link to="/#work" className="rule-link text-lg">
              Back to the work <span aria-hidden="true">&rarr;</span>
            </Link>
            {prev && (
              <Link to={`/case-study/${prev.slug}`} className="rule-link text-lg text-ink-600">
                {prev.title} <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
            {next && (
              <Link to={`/case-study/${next.slug}`} className="rule-link text-lg text-ink-600">
                {next.title} <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </nav>
        </Slide>
      </main>

      <Contact />

      <Lightbox figure={figure} onClose={close} />
    </div>
  );
};

export default MerryHealthCaseStudy;
