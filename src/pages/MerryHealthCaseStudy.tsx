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
  AssignmentLoop,
  Callouts,
  CurrentFlow,
  Delivered,
  EdgeGrid,
  Exchange,
  Facts,
  Failures,
  IntakeSplit,
  Lifecycle,
  Methods,
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
 * Merry Health, told once and in order.
 *
 * This page was restructured on 9 September 2026 against Tanya's rewrite
 * brief. The previous version opened with a seven-slide "in 60 seconds"
 * chapter and then said the same things again across four deep chapters,
 * so the reader met the reframe, the WhatsApp decision, the lifecycle, the
 * product and the fallbacks twice. The two-minute version already exists
 * as its own surface at /case-study/merry-health/story, which is what made
 * the duplication redundant rather than merely repetitive.
 *
 * The rule now is that each idea is stated once, at the altitude where it
 * has evidence behind it. That removed the quick-view chapter, the
 * standalone "do not digitise every manual step" title page, the four
 * chapter dividers (the storyline rail already does that wayfinding), the
 * opportunity grid that pre-announced the three model sections, and the
 * channel scripts that narrated in prose what the WhatsApp screenshots
 * show directly.
 *
 * Three rules govern the writing, unchanged.
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
    name: 'The service',
    target: 'summary',
    slides: [
      { id: 'summary', title: 'The dashboard was one part of it' },
      { id: 'service', title: 'Following one ride, end to end' },
      { id: 'evidence', title: 'Mapping where it broke' },
      { id: 'failures', title: 'What the mapping showed' },
    ],
  },
  {
    n: '02',
    name: 'The reframe',
    target: 'reframe',
    slides: [
      { id: 'reframe', title: 'One ride, one shared state' },
      { id: 'channels', title: 'Do not replace WhatsApp' },
    ],
  },
  {
    n: '03',
    name: 'The operating model',
    target: 'intake',
    slides: [
      { id: 'intake', title: 'Ask for what is needed now' },
      { id: 'assignment', title: 'Replacing the calling loop' },
      { id: 'lifecycle', title: 'One ride lifecycle' },
      { id: 'fallbacks', title: 'Designing for when it goes wrong' },
    ],
  },
  {
    n: '04',
    name: 'The product',
    target: 'product',
    slides: [
      { id: 'product', title: 'Four surfaces' },
      { id: 'dashboard', title: 'The operations dashboard' },
      { id: 'ride', title: 'The live ride' },
    ],
  },
  {
    n: '05',
    name: 'What it changes',
    target: 'before-after',
    slides: [
      { id: 'before-after', title: 'The same ride, two ways' },
      { id: 'targets', title: 'What we would measure' },
      { id: 'contribution', title: 'My contribution' },
      { id: 'outcome', title: 'What we delivered' },
      { id: 'reflection', title: 'Reflection' },
      { id: 'closing', title: 'Closing' },
    ],
  },
];

/**
 * PLACEHOLDER: the Figma prototype link is not in this repo. Paste the
 * share URL here and the call to action after the product section turns
 * itself on. Under `npm run dev` an unfilled link shows as a visible gap.
 */
const PROTOTYPE_URL: string = '';

const MerryHealthCaseStudy = () => {
  const { figure, open, close } = useLightbox();
  const { prev, next } = adjacentCaseStudies('merry-health');

  usePageMeta(
    'Merry Health',
    'Redesigning ambulance dispatch around how hospitals actually work. A systems-design project on coordination between hospitals, dispatch operations, drivers and patient families across Tier 2 and Tier 3 India.'
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
                    Redesigning ambulance dispatch around{' '}
                    <span className="em">how hospitals actually work</span>.
                  </>
                }
              />

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                <p>
                  Merry Health coordinates ambulance requests between hospitals, its operations
                  team, drivers and patient families across Tier 2 and Tier 3 cities in India.
                </p>
                <p>
                  We approached it as a product redesign. Then we mapped how a ride was actually
                  dispatched, and found that most of the service happened outside the dashboard:
                  in phone calls, WhatsApp, paper notes and repeated manual follow-ups.
                </p>
                <p className="text-foreground">That changed the project.</p>
                <p>
                  Instead of redesigning individual screens, we worked on a dispatch model where
                  one ride record could coordinate the people, channels and status changes an
                  emergency actually involves.
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
                    Proposed system. Researched with Merry Health, not deployed.
                  </dd>
                </div>
              </dl>

              <CaseStudyEntry
                storyHref="/case-study/merry-health/story"
                scanMinutes={5}
                readMinutes={15}
              />
            </div>

            <div className="flex flex-col justify-center">
              <HeroComposition />
            </div>
          </div>
        </section>

        {/* ======================== 01, THE SERVICE ========================= */}
        <Slide id="summary" chapter="01" height="auto">
          <Kicker n="01" label="The project in 30 seconds" />
          <Headline size="large">
            The dashboard was <span className="em">one part</span> of the dispatch process.
          </Headline>
          <Lede wide>
            When we mapped the existing workflow with Merry Health operations, a single request
            crossed four channels and several people before an ambulance moved. The product
            existed. Most of the service ran beside it.
          </Lede>

          <Facts
            source="From the workflow we mapped with the operations team, not from platform-wide instrumentation."
            items={[
              {
                figure: '8 to 10 min',
                note: 'From request to a confirmed driver, in the workflow we observed',
              },
              { figure: '3 to 4 calls', note: 'Driver calls before someone accepted' },
              { figure: 'Four channels', note: 'Phone, WhatsApp, paper and the dashboard' },
              {
                figure: 'No shared state',
                note: 'Hospital, operations, driver and family could each hold a different version of the same trip',
              },
            ]}
          />
        </Slide>

        <Slide id="service" chapter="01" height="auto">
          <Kicker n="01" label="Starting with the existing service" />
          <Headline>
            We followed one ride from the first call <span className="em">to closure</span>.
          </Headline>
          <Lede wide>
            The dashboard showed rides, maps and operational data, but it did not represent how the
            work was happening. A typical emergency moved roughly like this. The system was
            recording parts of the journey. People were holding the service together.
          </Lede>

          <CurrentFlow
            steps={[
              {
                actor: 'Patient party',
                act: 'Calls the hospital during an emergency',
                via: 'Phone',
              },
              {
                actor: 'Hospital admin',
                act: 'Collects patient details, often while still on the call',
                via: 'Phone, paper',
              },
              {
                actor: 'Hospital admin',
                act: 'Forwards the request to Merry Health',
                via: 'WhatsApp or a call',
              },
              {
                actor: 'Merry Health operations',
                act: 'Enters the request into the dashboard as a new ride',
                via: 'Dashboard',
              },
              {
                actor: 'Merry Health operations',
                act: 'Calls drivers one by one to check availability',
                via: 'Phone',
                repeat: '3 to 4 calls, until somebody picks up and confirms',
              },
              { actor: 'Driver', act: 'Confirms and starts the trip', via: 'Phone' },
              {
                actor: 'Hospital and patient party',
                act: 'Call again to ask where the ambulance is',
                via: 'Phone',
                repeat: 'Every time anyone wants to know, because nothing has told them',
              },
              {
                actor: 'Merry Health operations',
                act: 'Calls the driver for a status, then relays it back',
                via: 'Phone',
              },
              {
                actor: 'Merry Health operations',
                act: 'Closes the ride on the dashboard, sometimes much later',
                via: 'Dashboard',
              },
            ]}
          />

          <p className="label mt-14 border-b border-border pb-3 text-ink-500 md:mt-20">
            The platform as it was
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
            <Plate
              src={legacyDashboard}
              alt="The existing Merry Health dashboard: a wide map, six summary cards, and tables of ongoing and completed rides"
              caption="The dashboard. Totals, a map, and two tables of rides."
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
        </Slide>

        <Slide id="evidence" chapter="01" height="auto">
          <Kicker n="01" label="How we know" />
          <Headline>
            Mapping where the system was <span className="em">breaking</span>.
          </Headline>
          <Lede wide>
            We audited the platform, reconstructed the dispatch workflow end to end with the
            operations team, and traced each actor through it. Blueprinting it by phase was what
            made the pattern visible: the same breakdowns turned up in every phase, which made
            them structural rather than local.
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

          <PhaseBlueprint
            phases={[
              {
                name: 'Intake',
                actors: 'Patient party, hospital admin, operations',
                breaks:
                  'Heavy dependency on manual coordination. Details were collected on a call and retyped somewhere else.',
                opportunity: 'Capture the request once, in the channel it already arrives in.',
              },
              {
                name: 'Assign',
                actors: 'Operations, driver',
                breaks:
                  'No real-time visibility. Assignment ran on repeated calls, which slowed dispatch and made it unpredictable.',
                opportunity: 'Push the assignment, track the response, escalate on a timer.',
              },
              {
                name: 'En route',
                actors: 'Driver, operations, hospital, patient party',
                breaks:
                  'Fragmented data across channels. One ride moved through WhatsApp, calls and the dashboard, and each held a different version of it.',
                opportunity: 'One ride state, read by every channel.',
              },
              {
                name: 'Handover and close',
                actors: 'Driver, operations',
                breaks:
                  'The system expected structured entry, staff used quick calls, and records were completed late.',
                opportunity: 'Close the ride from an operational event, not from somebody remembering.',
              },
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
              src={phaseMapping}
              alt="The service blueprint: four phases across four actors, with the system breakdown reason for each phase"
              title="Service blueprint"
              note="Four phases, four actors, and the breakdown reason under each phase."
              onOpen={open}
            />
            <Artifact
              src={opportunityRefined}
              alt="The refined opportunity mapping table: each loophole in the workflow against its current issue, mapped opportunity and expected impact"
              title="Opportunity mapping"
              note="Eight loopholes, each mapped to an opportunity and the measure it would move."
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
              src={patientCurrentJourney}
              alt="The patient party journey map, current state"
              title="Patient party journey, current"
              onOpen={open}
            />
            <Artifact
              src={adminIdealJourney}
              alt="The Merry Health operations journey map, proposed state"
              title="Operations journey, proposed"
              onOpen={open}
            />
            <Artifact
              src={patientIdealJourney}
              alt="The patient party journey map, proposed state"
              title="Patient party journey, proposed"
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

          <Footnote>
            These are working boards, kept small on purpose and readable at full size. The
            current-state maps were built with Merry Health operations from the workflow as they
            ran it, which is why the conditions quoted on this page say they were observed there
            rather than measured across the platform.
          </Footnote>
        </Slide>

        <Slide id="failures" chapter="01" height="auto">
          <Kicker n="01" label="What the mapping showed" />
          <Headline>
            Four problems kept appearing <span className="em">across the workflow</span>.
          </Headline>

          <Failures
            items={[
              {
                title: 'The system expected too much information too early',
                body: 'The existing flow wanted a complete structured request before anything could move. That did not match an emergency, where staff were trying to get an ambulance moving first and complete the details later.',
                quote: 'We can’t fill long forms when a patient is critical.',
              },
              {
                title: 'Driver assignment depended on repeated calls',
                body: 'Operations called drivers one after another until someone responded, so dispatch time depended on who picked up rather than on a predictable assignment process.',
                quote: 'I call 3 to 4 drivers before one confirms.',
              },
              {
                title: 'Nobody shared the same live status',
                body: 'ETA and ride progress were not consistently visible, so hospitals and families called for updates. Operations then called the driver and relayed the answer back.',
                quote: 'Families keep calling us for ETA updates.',
              },
              {
                title: 'Data was being completed after the event',
                body: 'Information moved between paper, WhatsApp, calls and the dashboard. When records were completed later, the timestamps stopped representing what had actually happened.',
                quote: 'We update records at the end of the day.',
              },
            ]}
          />

          <Footnote>
            One number in the existing dashboard carries the fourth problem on its own. The
            platform&rsquo;s own average response time reads 23:41:14. That is not how long an
            ambulance took. It is what the figure becomes when rides are closed at the end of the
            day instead of when they end.
          </Footnote>
        </Slide>

        {/* ======================== 02, THE REFRAME ========================= */}
        <Slide id="reframe" chapter="02" height="auto">
          <Kicker n="02" label="The reframe" />
          <Headline size="large">
            One ride. <span className="em">One shared state.</span>
          </Headline>
          <Lede wide>
            Once we could see the complete journey, it was clear that improving one interface would
            not remove the coordination work. Four groups were involved, each with a different
            need, and none of them could see the same thing at the same time. Instead of each
            person maintaining their own version of the ride, every channel would read from and
            write to the same record.
          </Lede>

          <ActorHub
            hub="MH-REQ-1342"
            hubNote="One record every channel reads from and writes to. Four seats, one version of the ride."
            actors={[
              {
                name: 'Hospital admin',
                needs: 'To send a request quickly, and know it has been received.',
              },
              {
                name: 'Merry Health operations',
                needs: 'To see every active ride, know what needs attention, and intervene when something goes wrong.',
              },
              {
                name: 'Driver',
                needs: 'A clear assignment, and as little interaction as possible while driving.',
              },
              {
                name: 'Patient family',
                needs: 'To know help is coming, and get updates without repeatedly calling.',
              },
            ]}
          />
        </Slide>

        <Slide id="channels" chapter="02" height="auto" invert>
          <Kicker n="02" label="The key product decision" />
          <Headline size="large">
            We did not try to <span className="em">replace WhatsApp</span>.
          </Headline>
          <Lede wide>
            Hospital staff were already using it because it was familiar, fast and available during
            an emergency. Asking them to move into a new interface would have introduced another
            behaviour change at exactly the wrong moment. So we separated the service into two
            layers: the channel could stay familiar, and the structure behind it became consistent.
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
                label: 'Operational layer',
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

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-20 md:gap-8">
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
        </Slide>

        {/* ==================== 03, THE OPERATING MODEL ===================== */}
        <Slide id="intake" chapter="03" height="auto">
          <Kicker n="03" label="Progressive intake" />
          <Headline>
            Ask for what is needed now. Complete the rest{' '}
            <span className="em">while the ride moves</span>.
          </Headline>
          <Lede wide>
            Instead of blocking dispatch until a complete form was filled, the proposed flow
            prioritised the minimum information needed to act. If something essential was missing,
            the system asked for that field specifically rather than presenting the whole form
            again.
          </Lede>

          <IntakeSplit
            now={{
              label: 'Needed immediately',
              note: 'The fields that determine whether an ambulance can be sent, and which one.',
              items: [
                'Location',
                'Patient condition',
                'Contact',
                'Ambulance requirement',
              ],
            }}
            later={{
              label: 'Can be completed afterwards',
              note: 'Everything that does not change the first dispatch decision.',
              items: [
                'Additional administrative details',
                'Operational notes',
                'Anything the record needs but the dispatch does not',
              ],
            }}
          />

          <Exchange
            note="The record becomes structured as part of the conversation."
            turns={[
              {
                who: 'Hospital sends',
                lines: [
                  'Emergency, ambulance needed',
                  'Patient contact',
                  'Location',
                  'Condition',
                ],
              },
              {
                who: 'System replies',
                lines: [
                  'Request MH-REQ-1342 received.',
                  'Please confirm the required ambulance type.',
                ],
              },
            ]}
          />

          <Principle>
            The system asks only for what is missing. It never asks again for what it already has.
          </Principle>
        </Slide>

        <Slide id="assignment" chapter="03" height="auto">
          <Kicker n="03" label="Replacing the driver-calling loop" />
          <Headline>
            Assignment became a <span className="em">tracked process</span>, not a phone call.
          </Headline>
          <Lede wide>
            Previously, operations called drivers one at a time until somebody answered. The
            redesigned model treats assignment as an explicit system state, with a timer deciding
            when it escalates. The driver receives the case ID, patient contact, distance, pickup
            link, the equipment the trip needs, and two buttons.
          </Lede>

          <AssignmentLoop
            before={{
              label: 'Before',
              steps: ['Call a driver', 'Wait', 'No answer', 'Call the next one'],
              loop: 'Back to the top, 3 to 4 times, until somebody says yes',
            }}
            after={{
              label: 'Proposed',
              step: 'Request ready, assignment sent',
              branches: [
                {
                  on: 'Driver accepts',
                  then: 'The same ride record updates for operations, the hospital and the patient family.',
                },
                {
                  on: 'No response inside the defined window',
                  then: 'The assignment escalates to the next driver, and the wait is on the record rather than in somebody’s head.',
                },
              ],
            }}
          />
        </Slide>

        <Slide id="lifecycle" chapter="03" height="auto">
          <Kicker n="03" label="One ride lifecycle" />
          <Headline>
            A ride is a <span className="em">sequence of events</span>, not a collection of
            messages.
          </Headline>
          <Lede wide>
            Each state is entered by something happening in the world rather than by somebody
            reporting it, and each one writes to the same record. That record is what the dashboard
            renders, what the messages are generated from, and what reporting reads later.
            Previously, someone had to send or enter the same information in several places.
          </Lede>

          <Lifecycle
            caption="One state change, five destinations. Every filled square used to be a message somebody sent by hand."
            highlight={1}
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
              { label: 'Hospital updated', at: [0, 1, 4, 5, 6, 7] },
              { label: 'Patient notified', at: [1, 3, 4, 5, 6] },
              { label: 'Driver action', at: [1, 2, 4, 5, 6] },
              { label: 'Dashboard updated', at: [0, 1, 2, 3, 4, 5, 6, 7] },
              { label: 'Timestamp stored', at: [0, 2, 4, 5, 6, 7] },
            ]}
          />

          <StateList
            states={[
              {
                phase: 'Intake',
                state: 'Request received',
                captures: 'Location, condition, contact, requested ambulance type, timestamp',
              },
              {
                phase: 'Assign',
                state: 'Driver assigned',
                captures: 'Driver, ambulance number, acceptance, time to acceptance',
              },
              {
                phase: 'Assign',
                state: 'Trip started',
                captures: 'Start timestamp, route opened, tracking link issued',
              },
              {
                phase: 'En route',
                state: 'En route',
                captures: 'Live position, ETA, distance remaining, deviation and halt alerts',
              },
              {
                phase: 'En route',
                state: 'Arrived at pickup',
                captures: 'Arrival timestamp, response time closed out',
              },
              {
                phase: 'En route',
                state: 'Patient onboarded',
                captures: 'Onboarding timestamp, facilities actually used',
              },
              {
                phase: 'Handover',
                state: 'Reached hospital',
                captures: 'Arrival timestamp, journey duration, distance travelled',
              },
              {
                phase: 'Close',
                state: 'Closed',
                captures: 'Closure timestamp, turnaround, billing record, full timeline stored',
              },
            ]}
          />

          <Statement>
            Before, communication created the record. Now the record drives the communication.
          </Statement>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-2xl md:mt-16">
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

        <Slide id="fallbacks" chapter="03" height="auto">
          <Kicker n="03" label="Designing for when things go wrong" />
          <Headline>
            We treated failure states as part of <span className="em">normal operation</span>.
          </Headline>
          <Lede wide>
            Emergency operations cannot assume perfect connectivity or perfect user behaviour, so
            the proposed workflow carries a fallback at every step. Listing the failures was not
            the useful part. Each one needed a fallback and an owner, which is what makes a
            fallback real rather than a note on a diagram.
          </Lede>

          <EdgeGrid
            items={[
              {
                when: 'The driver does not respond',
                then: 'The pending response is tracked, and the assignment escalates to the next driver.',
                owner: 'System',
              },
              {
                when: 'The driver has no smartphone',
                then: 'The assignment goes out over SMS, and operations updates the ride on their behalf.',
                owner: 'Operations',
              },
              {
                when: 'The network drops',
                then: 'State is held and synced when connectivity returns, rather than lost at the handoff.',
                owner: 'System',
              },
              {
                when: 'GPS becomes unavailable',
                then: 'The system falls back to manual ETA updates and alerts operations.',
                owner: 'Operations',
              },
              {
                when: 'Critical information is missing',
                then: 'The system asks for the one required field, and nothing else.',
                owner: 'System',
              },
              {
                when: 'The ride is never closed',
                then: 'A stationary driver raises an alert, and operations intervenes or reassigns.',
                owner: 'Operations',
              },
              {
                when: 'The hospital number is not mapped',
                then: 'Operations picks the hospital manually, and the number is mapped so it resolves next time.',
                owner: 'Operations',
              },
              {
                when: 'The request arrives as a voice note or a photo',
                then: 'Operations fills the missing fields, so the ride still enters the system as structured data rather than as an attachment.',
                owner: 'Operations',
              },
              {
                when: 'A WhatsApp template fails to deliver',
                then: 'Automatic retry, then SMS, then a dashboard alert, so a failed message never fails silently.',
                owner: 'System',
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

        {/* ======================== 04, THE PRODUCT ========================= */}
        <Slide id="product" chapter="04" height="auto">
          <Kicker n="04" label="The operating model defined the product" />
          <Headline>
            Once the workflow was clear, the <span className="em">interfaces</span> were easier to
            define.
          </Headline>
          <Lede wide>
            Four surfaces came out of the operating model, and each one answers a single question.
            None of them was the starting point.
          </Lede>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
            {[
              {
                n: '01',
                name: 'Fast intake',
                body: 'Priority information first, map-based pickup, and the rest completed progressively while the ambulance moves.',
                src: hifiBooking,
                alt: 'The redesigned ambulance request screen: pickup and drop search above a full-width map with a dropped pin, and a ride details panel on the right carrying contact, emergency type, condition, ambulance type and facility chips',
              },
              {
                n: '02',
                name: 'Operations dashboard',
                body: 'Active rides, alerts, quick actions and the rides that need attention.',
                src: hifiDashboard,
                alt: 'The redesigned operations dashboard: revenue and average response time cards, ongoing rides, live map and quick add tiles, a quick actions panel, and a ride list tabbed by all, completed and pending',
              },
              {
                n: '03',
                name: 'Live ride control',
                body: 'Map, driver status, ETA, patient information, ride timeline and escalation, on one screen.',
                src: hifiTracking,
                alt: 'The live ride view: a status bar carrying current status, ETA to pickup, last location update, distance remaining and driver status, above a live map, a trip timeline of six states, and a patient info panel',
              },
              {
                n: '04',
                name: 'Reporting',
                body: 'Trip volume, response time, turnaround, billing and operational trends, derived from ride events rather than reconstructed later.',
                src: hifiReports,
                alt: 'The reporting module: date range, case type, status and ambulance type filters above total trips, billing, average response time and average turnaround, with trip volume, journey time and ride type charts',
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

          <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <Plate
              src={wireframes}
              alt="Hand-drawn wireframes of the active rides list, ride details and map view, showing alert rows, a ride timeline and ETA metrics"
              label="Sketches"
              caption="Active rides, ride details and the map view, worked out on paper before anything became a Figma file."
              onOpen={open}
            />
            <div className="flex flex-col justify-center">
              <p className="label mb-6 text-ink-500">
                What changed between the sketches and the screens
              </p>
              <Callouts
                items={[
                  'The ride list stopped being a record of what happened and became a queue of what needs attention: delayed, no signal, no update.',
                  'Ride details gained a timeline, because the question was never what is the status, it was what has happened so far.',
                  'Alerts moved from something you go looking for to something the system raises: halted over ten minutes, route deviation, no update in twenty.',
                ]}
              />
            </div>
          </div>

          <Footnote>
            The figures on the reporting screen are placeholder data from the design file. They are
            not Merry Health&rsquo;s operating numbers, and nothing on this page should be read as
            one. Better reporting depended on fixing the data upstream: once ride milestones are
            structured events, response time and turnaround can be derived from what happened
            rather than reconstructed from memory at the end of a shift.
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

        <Slide id="dashboard" chapter="04" height="auto">
          <Kicker n="04" label="The operations dashboard" />
          <Headline>
            From recording rides to <span className="em">managing live operations</span>.
          </Headline>
          <Lede wide>
            The redesigned dashboard was meant to answer one question: what is happening now, and
            what needs attention? Instead of treating every ride equally, the hierarchy is new
            requests, rides waiting for assignment, active rides, and the ones that are delayed or
            unusual. Operational metrics still matter, but the job of the screen is to help the
            team act.
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
                'Quick actions is a standing queue: what needs attention, what raised an alert, what changed.',
                'Ongoing rides carries a live count beside the map, so the first thing on the screen is how much is in the air.',
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

        <Slide id="ride" chapter="04" height="auto">
          <Kicker n="04" label="The live ride" />
          <Headline>
            One place to understand <span className="em">the full situation</span>.
          </Headline>
          <Lede wide>
            Reconstructing the state of a ride used to mean checking several channels and making a
            call. This view holds the patient, the driver, the vehicle, the map, the ETA, the
            timeline, the current state and the escalation in one place, and it is honest about
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
                'The trip timeline shows every state and what is still pending, so what has happened so far has one answer.',
                'Call driver and escalate are within reach, because the exception path should not be buried.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                Shown in its earliest state on purpose. No driver yet, so the map says what it is
                waiting for instead of showing an empty grid.
              </Principle>
            </div>
          </div>
        </Slide>

        {/* ===================== 05, WHAT IT CHANGES ======================== */}
        <Slide id="before-after" chapter="05" height="auto">
          <Kicker n="05" label="Before and after" />
          <Headline>
            The same ride, coordinated in <span className="em">two very different ways</span>.
          </Headline>

          <SystemPanes
            before={{
              label: 'Before',
              verdict: 'People relayed the state.',
              steps: [
                { text: 'Hospital calls' },
                { text: 'Operations records the request', relay: true },
                { text: 'Operations calls drivers', relay: true },
                { text: 'Someone confirms' },
                { text: 'Hospital asks for status', relay: true },
                { text: 'Patient family asks for status', relay: true },
                { text: 'Operations calls the driver', relay: true },
                { text: 'Dashboard updated by hand', relay: true },
                { text: 'Ride closed, later' },
              ],
            }}
            after={{
              label: 'Proposed',
              verdict: 'The ride state propagated through the system.',
              steps: [
                { text: 'Hospital requests through the channel it already uses' },
                { text: 'Ride record created' },
                { text: 'Assignment triggered' },
                { text: 'Driver accepts, or it escalates' },
                { text: 'Shared ride state updates' },
                { text: 'Hospital and patient updates are generated' },
                { text: 'Ride events captured as they happen' },
                { text: 'Closure creates the reporting record' },
              ],
            }}
          />
        </Slide>

        <Slide id="targets" chapter="05" height="auto">
          <Kicker n="05" label="What we would measure" />
          <Headline>
            Because the system was not deployed, these are{' '}
            <span className="em">design targets</span>.
          </Headline>
          <Lede wide>
            Nothing here is an outcome. These are the targets the design was aimed at, each with
            the measurement that would confirm it or kill it. A number without that second half is
            not worth putting on a page.
          </Lede>

          <Targets
            items={[
              {
                figure: 'Under 3 min',
                outcome: 'Request to a confirmed driver',
                how: 'Against the 8 to 10 minutes observed in the mapped manual workflow. Measured automatically from request received to driver accepted, which the lifecycle now timestamps on its own.',
              },
              {
                figure: 'Fewer calls',
                outcome: 'Coordination calls per ride',
                how: 'Automatic acknowledgement and milestone updates remove the reason for most of them. Measured as the number of calls required after dispatch starts.',
              },
              {
                figure: 'Higher completeness',
                outcome: 'Rides that leave a full operational record',
                how: 'Captured as a side effect of normal operation rather than typed in afterwards. Measured as the share of rides containing valid start and end events.',
              },
              {
                figure: 'Shared visibility',
                outcome: 'Status without anyone calling operations',
                how: 'Measured as the share of rides where the hospital and the patient family received updates without an inbound status request.',
              },
              {
                figure: 'Usable reporting',
                outcome: 'Response time and turnaround derived, not reconstructed',
                how: 'Measured as the share of rides closed through lifecycle events rather than retrospective manual entry.',
              },
            ]}
          />
        </Slide>

        <Slide id="contribution" chapter="05" height="auto">
          <Kicker n="05" label="What I worked on" />
          <Headline>My contribution</Headline>
          <Lede wide>
            This was a team of five designers, on an MDes practicum apprenticeship with Merry
            Health. The analysis, the operating model and the final proposal were developed
            collaboratively, which is why the sections above say we.
          </Lede>
          <Lede wide>
            My own work spanned research synthesis, systems thinking and design execution. I
            contributed to auditing the platform and mapping the current dispatch workflow, to the
            actor and opportunity mapping that produced the shared ride-state model, to the service
            logic and the fallback scenarios, and to translating those decisions into the
            interaction flows, wireframes and high-fidelity screens for the dashboard and the
            messaging journeys.
          </Lede>

          <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                'Research and discovery',
                [
                  'Platform audit',
                  'Current-workflow mapping',
                  'Journey analysis across four actors',
                  'Identifying the recurring breakdowns',
                ],
              ],
              [
                'Systems thinking',
                [
                  'Actor mapping',
                  'Opportunity mapping',
                  'The shared ride-state model',
                  'Service logic',
                  'Fallback and degraded scenarios',
                ],
              ],
              [
                'Product design',
                [
                  'Scenario mapping',
                  'Information architecture',
                  'Interaction flows',
                  'Wireframes',
                  'High-fidelity UI',
                ],
              ],
              [
                'Collaboration',
                [
                  'Synthesis',
                  'Team reviews',
                  'Integrating the individual journeys',
                  'Prototype refinement',
                  'Final storytelling',
                ],
              ],
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

        <Slide id="outcome" chapter="05" height="auto">
          <Kicker n="05" label="Outcome" />
          <Headline>
            A proposed end-to-end dispatch system, <span className="em">not a deployment</span>.
          </Headline>

          <Delivered
            delivered={{
              label: 'What we delivered',
              note: 'Developed through platform analysis and workflow work with Merry Health.',
              items: [
                'Progressive ambulance intake',
                'Structured driver assignment',
                'A shared ride lifecycle',
                'WhatsApp and SMS communication',
                'Live operations',
                'Patient updates',
                'Exception handling',
                'Reporting based on operational events',
              ],
            }}
            withheld={{
              label: 'What this case study does not claim',
              note: 'It was never rolled out into live dispatch operations, so none of these were measured.',
              items: [
                'Dispatch time',
                'Call volume',
                'ETA accuracy',
                'Operational efficiency',
              ],
            }}
          />

          <Statement>
            Those remain things the system would have to prove in the field.
          </Statement>
        </Slide>

        <Slide id="reflection" chapter="05" height="auto">
          <Kicker n="05" label="Reflection" />
          <Headline>
            The screens only became clear after we changed{' '}
            <span className="em">the workflow underneath them</span>.
          </Headline>
          <Lede wide>
            A cleaner dashboard would not have solved a dispatch process still being coordinated
            through calls and WhatsApp. The more useful design work happened one level below the
            interface.
          </Lede>

          <div className="mt-12 grid gap-x-16 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-y-20">
            {[
              [
                'Defining what the shared state was',
                'Everything else followed from one question: what is the single record that every channel reads from and writes to? Answer that and the dashboard, the messages and the reporting stop being separate problems.',
              ],
              [
                'Deciding when a person really needed to act',
                'Most of the coordination work was somebody moving information between two places. Every reliable system event removed another call, another manual update, or another thing somebody had to remember under pressure.',
              ],
              [
                'Working with the channels people already used',
                'Integrating with a familiar workflow turned out to be more effective than replacing it. WhatsApp had the one thing the product did not: everybody was already using it, and nobody had to be taught.',
              ],
              [
                'Making failure paths explicit',
                'No network, missing GPS and an unresponsive driver are not theoretical in emergency operations. Designing the degraded paths first changed what the happy path was allowed to assume.',
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-t-2 border-foreground pt-6">
                <p className="max-w-[20ch] text-[1.5rem] leading-[1.1] md:text-[2.25rem]">
                  {title}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <Statement>
            Good operational UX often means removing work people should never have had to do
            manually in the first place.
          </Statement>

          <Footnote>
            And the limit of all of it: the proposed system has not been tested in live emergency
            operations. Everything above is reasoned from how the work runs today and from the
            fallbacks the team could name, not from watching it hold up under real dispatch
            pressure. The next step would be to run it there and see which assumptions hold.
          </Footnote>
        </Slide>

        <Slide id="closing" chapter="05" height="auto" invert>
          <p className="label text-ink-500">In closing</p>

          <p className="mt-10 max-w-[20ch] text-[2rem] leading-[1.05] md:text-[3.5rem]">
            Design the coordination first. <span className="em">Then design the screens.</span>
          </p>

          <p className="mt-12 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            Merry Health started as a dashboard project. It became a systems-design project about
            how one ambulance ride could stay consistent across hospitals, operations, drivers and
            patient families.
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
