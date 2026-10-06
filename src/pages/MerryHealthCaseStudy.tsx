import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import { ReadNext } from '@/components/case-study/ReadNext';
import Lightbox from '@/components/case-study/Lightbox';
import { useLightbox } from '@/hooks/use-lightbox';
import { type Storyline } from '@/components/story/Storyline';
import { ReadingNav } from '@/design/ReadingNav';
import {
  Footnote,
  Headline,
  Kicker,
  Lede,
  MoreDetail,
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
import hifiTripStarted from '@/assets/merry-hifi-trip-started.png';
import hifiTrackAmbulance from '@/assets/merry-hifi-track-ambulance.png';
import deckHandover from '@/assets/merry-deck-handover.jpg';
import deckFamilyFallback from '@/assets/merry-deck-family-fallback.jpg';
import deckDriverSms from '@/assets/merry-deck-driver-sms.jpg';
import deckParallelRequests from '@/assets/merry-deck-parallel-requests.jpg';
import deckAddRide from '@/assets/merry-deck-add-ride.jpg';
import deckRideDetails from '@/assets/merry-deck-ride-details.jpg';
import deckMobile from '@/assets/merry-deck-mobile.jpg';

/*
 * ASSET WEIGHT
 *
 * Every image below the hero is lazy-loaded and decoded off the main
 * thread, but two source files are far heavier than they need to be:
 * merry-wireframes.png is 2.5 MB and merry-hifi-dashboard.png is 1.7 MB (5000px wide).
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
 * 1. Nothing here was deployed. This was an apprenticeship with Career
 *    Reactor, for the client Merry Health, so every forward-looking claim is
 *    labelled a design aim and never appears as an achieved result. The
 *    client delivery deck (Nov 2025) is the source of truth for what was
 *    designed; it carries no measured numbers, so this page has none either.
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
    target: 'service',
    slides: [
      { id: 'service', title: 'Following one ride, end to end' },
      { id: 'failures', title: 'What we found' },
    ],
  },
  {
    n: '02',
    name: 'A new way to see it',
    target: 'reframe',
    slides: [
      { id: 'reframe', title: 'One ride, one shared record' },
      { id: 'channels', title: 'Do not replace WhatsApp' },
    ],
  },
  {
    n: '03',
    name: 'When things go wrong',
    target: 'fallbacks',
    slides: [
      { id: 'fallbacks', title: 'Designing for when it goes wrong' },
    ],
  },
  {
    n: '04',
    name: 'The product',
    target: 'product',
    slides: [
      { id: 'product', title: 'Seven parts, one dashboard' },
      { id: 'handover', title: 'Closing a ride properly' },
    ],
  },
  {
    n: '05',
    name: 'Result',
    target: 'contribution',
    slides: [
      { id: 'contribution', title: 'My contribution' },
      { id: 'outcome', title: 'What we delivered' },
      { id: 'reflection', title: 'Reflection' },
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

  usePageMeta(
    'Merry Health',
    'Redesigning how emergency ambulances get sent. A redesign of the Merry Health service, with a dashboard for hospital admins and WhatsApp updates, so everyone can see the ride as it happens: hospitals, drivers and families in smaller Indian cities.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ReadingNav chapters={storyline} />

      <main>
        {/* ============================== HERO ============================== */}
        <section id="top" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-gutter py-section lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div>
              <StudyOpening
                slug="merry-health"
                client="Merry Health &middot; Emergency ambulances &middot; 2025"
                headline={
                  <>
                    Redesigning the hospital admin&rsquo;s experience for{' '}
                    <span className="em">real-time ambulance coordination</span>.
                  </>
                }
                takeaways={{
                  problem:
                    'Admins ran emergencies on scattered WhatsApp chats and calls, so help took too long to reach the patient.',
                  didLabel: 'Our solution',
                  did: 'We kept WhatsApp but gave it structure, and made the hospital dashboard the full record of every ride. Now an ambulance can be sent without chasing anyone, so help reaches the patient sooner. Delivered to the client, not launched.',
                }}
                hidePillsLabel
              />

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                <p>
                  Merry Health arranges ambulance rides for hospitals in smaller cities across
                  India. Our goal: help hospitals send ambulances successfully, and keep every
                  ride&rsquo;s record accurate.
                </p>
                <p>
                  At first we treated it as a dashboard redesign. Then we mapped how a ride was
                  really sent out, and found that most of the work happened outside the dashboard:
                  on WhatsApp, in phone calls and in people&rsquo;s memory.
                </p>
                {/* The paragraph that used to close this block described the
                    dispatch model, which is what "What I did" now says three
                    lines higher. The turn is kept, because a summary cannot
                    carry the moment a project changes shape. */}
                <p className="text-foreground">That changed the project.</p>
              </div>

              <CaseStudyEntry
                storyHref="/case-study/merry-health/story"
                scanMinutes={5}
                readMinutes={15}
              />
            </div>

            {/* The picture, with the project facts under it on the right. */}
            <div className="flex flex-col justify-center">
              <HeroComposition />

              <dl className="mt-12 grid gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Research &middot; Systems thinking &middot; Design strategy &middot; Service
                    design &middot; UI design
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Team</dt>
                  <dd className="text-base leading-snug md:text-lg">A team of 5 designers</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Tools</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Figma &middot; Miro &middot; Interactive prototypes
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Context</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    An apprenticeship with Career Reactor, for the client Merry Health
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Stage</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    A proposal. Researched with Merry Health, but never launched.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>


        <Slide id="service" chapter="01" height="auto">
          <Kicker n="01" label="Starting with the service as it was" />
          <Headline>
            We followed one ride from the first call <span className="em">to the very end</span>.
          </Headline>
          <Lede wide>
            The dashboard showed rides, maps and numbers, but it did not show how the work was
            really done. A typical emergency went roughly like this. The product was recording
            bits of the journey. People were holding the whole service together.
          </Lede>

          <CurrentFlow
            steps={[
              {
                actor: 'Patient’s family',
                act: 'Calls the hospital during an emergency',
                via: 'Phone',
              },
              {
                actor: 'Hospital admin',
                act: 'Writes down the patient’s details, often while still on the call',
                via: 'Phone, paper',
              },
              {
                actor: 'Hospital admin',
                act: 'Passes the request on to Merry Health',
                via: 'WhatsApp or a call',
              },
              {
                actor: 'Merry Health operations',
                act: 'Types the request into the dashboard as a new ride',
                via: 'Dashboard',
              },
              {
                actor: 'Merry Health operations',
                act: 'Calls drivers one by one to find someone free',
                via: 'Phone',
                repeat: 'Call after call, until somebody picks up and confirms',
              },
              { actor: 'Driver', act: 'Confirms and starts the trip', via: 'Phone' },
              {
                actor: 'Hospital and patient’s family',
                act: 'Call again to ask where the ambulance is',
                via: 'Phone',
                repeat: 'Every time anyone wants to know, because nothing has told them',
              },
              {
                actor: 'Merry Health operations',
                act: 'Calls the driver for an update, then passes it on',
                via: 'Phone',
              },
              {
                actor: 'Merry Health operations',
                act: 'Marks the ride as done on the dashboard, sometimes much later',
                via: 'Dashboard',
              },
            ]}
          />

          <p className="label mt-stage border-b border-border pb-3 text-ink-500">
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
              caption="Booking. Every box counted the same, whatever the emergency."
              onOpen={open}
            />
            <Plate
              src={legacyMap}
              alt="The existing find-ambulance map view"
              caption="Find ambulance. A map, with no ride information on it."
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

        <MoreDetail label="The research boards: flows, service map and journey maps">
        <Slide id="evidence" chapter="01" height="auto">
          <Kicker n="01" label="How we know" />
          <Headline>
            Finding where the service was <span className="em">breaking</span>.
          </Headline>
          <Lede wide>
            We checked the whole product, drew out every step of sending a ride with the
            operations team, and followed each person through it. Drawing it step by step
            showed a pattern: the same problems came up at every step. That meant they were
            built into the way things worked, not one-off mistakes.
          </Lede>

          <Methods
            items={[
              'Platform audit',
              'Stakeholder analysis',
              'Mapping how the work was done',
              'Journey mapping',
              'Opportunity mapping',
              'Scenario analysis',
            ]}
          />

          <PhaseBlueprint
            phases={[
              {
                name: 'Intake',
                actors: 'Patient’s family, hospital admin, operations',
                breaks:
                  'Lots of work done by hand. Details were written down on a call and typed in again somewhere else.',
                opportunity: 'Take the request once, in the place it already arrives.',
              },
              {
                name: 'Assign',
                actors: 'Operations, driver',
                breaks:
                  'Nobody could see what was happening right now. Finding a driver took call after call, which was slow and hard to predict.',
                opportunity: 'Send the job to a driver, watch for a reply, and move on if nobody answers.',
              },
              {
                name: 'On the way',
                actors: 'Driver, operations, hospital, patient’s family',
                breaks:
                  'Information was scattered. One ride went through WhatsApp, calls and the dashboard, and each one had a different version of it.',
                opportunity: 'One ride record that every channel reads.',
              },
              {
                name: 'Handover and finish',
                actors: 'Driver, hospital admin',
                breaks:
                  'There was no proper handover step. Staff made quick calls, and records were filled in late.',
                opportunity: 'Close the ride only when the handover is checked, not when somebody remembers.',
              },
            ]}
          />

          <p className="label mt-stage border-b border-border pb-3 text-ink-500">
            Our working boards
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Artifact
              src={currentFlow}
              alt="A flowchart of how rides were sent before, with notes on the loops and gaps we found"
              title="How it worked before"
              note="Every path, with the loops marked where the work repeats itself."
              onOpen={open}
            />
            <Artifact
              src={phaseMapping}
              alt="The service map: four steps across four groups of people, with the reason it broke down at each step"
              title="Service map"
              note="Four steps, four groups of people, and why it broke down at each step."
              onOpen={open}
            />
            <Artifact
              src={opportunityRefined}
              alt="The table of chances to improve: each gap in the work, next to the problem today, the chance to fix it and what that would change"
              title="Chances to improve"
              note="Eight gaps, each matched to a fix and the number it would change."
              onOpen={open}
            />
            <Artifact
              src={hospitalJourney}
              alt="The journey map for the hospital admin, from start to end of a ride"
              title="Hospital admin journey"
              onOpen={open}
            />
            <Artifact
              src={adminCurrentJourney}
              alt="The journey map for the Merry Health operations team, before"
              title="Operations journey, before"
              onOpen={open}
            />
            <Artifact
              src={patientCurrentJourney}
              alt="The journey map for the patient’s family, before"
              title="Family journey, before"
              onOpen={open}
            />
            <Artifact
              src={adminIdealJourney}
              alt="The journey map for the Merry Health operations team, with our changes"
              title="Operations journey, with our changes"
              onOpen={open}
            />
            <Artifact
              src={patientIdealJourney}
              alt="The journey map for the patient’s family, with our changes"
              title="Family journey, with our changes"
              onOpen={open}
            />
            <Artifact
              src={opportunityMapping}
              alt="Our working board of chances to improve"
              title="The working board"
              note="Where the eight came from."
              onOpen={open}
            />
          </div>

          <Footnote>
            These are working boards, kept small on purpose, and you can read them at full
            size. We built the before-maps with the Merry Health team, from how they really
            worked. They show what we saw there. They are not measurements across the whole
            product.
          </Footnote>
        </Slide>
        </MoreDetail>

        <Slide id="failures" chapter="01" height="auto">
          <Kicker n="01" label="What the mapping showed" />
          <Headline>
            Four problems kept coming up <span className="em">at every step</span>.
          </Headline>

          <Failures
            items={[
              {
                title: 'The product asked for too much, too soon',
                body: 'The old way wanted a complete form before anything could happen. That does not fit an emergency, where staff want to get an ambulance moving first and fill in the details later.',
                finding: '“Add Ride” was not built for emergency speed, so admins skipped fields or went back to WhatsApp.',
              },
              {
                title: 'Finding a driver meant calling again and again',
                body: 'Drivers got jobs through scattered messages and calls. So how fast an ambulance left depended on who picked up, not on a clear way of choosing a driver.',
                finding: 'Admins had to chase drivers on calls to find out what was happening.',
              },
              {
                title: 'Nobody could see the same live update',
                body: 'Nobody could easily see when the ambulance would arrive or how the ride was going, so hospitals and families called to ask. Then someone had to call the driver and pass the answer back.',
                finding: 'With no live view of the ride status, ETA or handover, people kept making follow-up calls.',
              },
              {
                title: 'Records were filled in after it was all over',
                body: 'Information moved between paper, WhatsApp, calls and the dashboard. There was no proper handover step, so rides were closed late and the times on them no longer showed what had really happened.',
                finding: 'Ride details were spread across chats, calls and memory, so records were missing or wrong.',
              },
            ]}
          />
        </Slide>

        {/* ======================== 02, THE REFRAME ========================= */}
        <Slide id="reframe" chapter="02" height="auto">
          <Kicker n="02" label="A new way to see it" />
          <Headline size="large">
            One ride. <span className="em">One shared record.</span>
          </Headline>
          <Lede wide>
            Once we could see the whole journey, it was clear that fixing one screen would not
            remove all the back and forth. Four groups were involved. Each needed something
            different, and none of them could see the same thing at the same time. So instead
            of each person keeping their own version of the ride, every channel would read from
            and write to the same record.
          </Lede>

          <ActorHub
            hub="One Case ID per ride"
            hubNote="Every ride gets its own Case ID, like MH-REQ-1342. Every channel reads from and writes to that one record, so four groups see one version of the ride. Look for it in the screens below."
            actors={[
              {
                name: 'Hospital admin',
                needs: 'To send a request quickly, see every ride coming in, and close it with a proper handover.',
              },
              {
                name: 'Merry Health operations',
                needs: 'To see every ride that is happening, know what needs attention, and step in when something goes wrong.',
              },
              {
                name: 'Driver',
                needs: 'A clear job, and as few taps as possible while driving.',
              },
              {
                name: 'Patient’s family',
                needs: 'To know help is coming, and get updates without calling again and again.',
              },
            ]}
          />
        </Slide>

        <Slide id="channels" chapter="02" height="auto" invert>
          <Kicker n="02" label="The big product choice" />
          <Headline size="large">
            We did not try to <span className="em">replace WhatsApp</span>.
          </Headline>
          <Lede wide>
            Hospital staff already used it because it was familiar, fast and always there in an
            emergency. Asking them to switch to a new app would have meant learning something new
            at exactly the wrong moment. So we split the service into two layers: the chat people
            use could stay the same, and the system behind it would be the same every time. When
            WhatsApp fails, the admin can still add the ride on the dashboard.
          </Lede>

          <div className="mt-stage">
            <Split
              left={{
                label: 'The part people see',
                children: (
                  <>
                    <p className="text-2xl leading-snug md:text-3xl">WhatsApp and SMS</p>
                    <Callouts
                      items={[
                        'The ambulance request itself',
                        'Reminders for missing details',
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
                label: 'The part behind it',
                children: (
                  <>
                    <p className="text-2xl leading-snug md:text-3xl">The Merry Health platform</p>
                    <Callouts
                      items={[
                        'Neat, complete ride records',
                        'Assignment logic',
                        'One shared ride record',
                        'Live operations',
                        'Exception handling',
                        'Reports and checks',
                      ]}
                    />
                  </>
                ),
              }}
              centre={
                <>
                  Meet people in the app they already trust, and{' '}
                  <span className="em">organise everything behind it</span>.
                </>
              }
            />
          </div>

          <div className="mt-stage grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            <Plate
              src={whatsappAdmin}
              alt="The hospital admin’s WhatsApp chat with Merry Health: a request typed in plain words gets its own Case ID, a second request gets another Case ID and a note that the patient contact is missing, and a plain hello gets the list of five details to send"
              caption="Hospital admin. Each request gets its own Case ID. The system asks only for what is missing."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappHospital}
              alt="The read-only announcement group for Felix Hospital and Merry Health: case MH-REQ-1342 posted step by step, from request received to request closed, with a note that only admins can send messages"
              caption="Announcement group. Read-only, so everyone gets the same updates, with no replies or clutter."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappDriver}
              alt="The driver chat, showing a ride card with the case number, patient contact, pickup link, distance, and buttons to accept or decline"
              caption="Driver. The case, the distance, the pickup link, accept or decline."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappPatient}
              alt="The family chat, showing the driver’s details, the ambulance number, the time to arrival, a tracking link, and then a message that the ambulance has arrived"
              caption="Patient’s family. The driver, the ambulance, arrival time and a tracking link."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
          </div>
        </Slide>

        <MoreDetail label="How a request is taken, a little at a time">
        {/* ==================== 03, THE OPERATING MODEL ===================== */}
        <Slide id="intake" chapter="03" height="auto">
          <Kicker n="03" label="Asking a little at a time" />
          <Headline>
            Ask for what is needed now. Fill in the rest{' '}
            <span className="em">while the ride moves</span>.
          </Headline>
          <Lede wide>
            Instead of holding everything up until a full form was filled in, our plan asked
            first for the few details needed to act. If something important was missing, the
            system asked for that one detail, instead of showing the whole form again.
          </Lede>

          <IntakeSplit
            now={{
              label: 'Needed immediately',
              note: 'The details that decide whether an ambulance can be sent, and which one.',
              items: [
                'Location',
                'Patient condition',
                'Patient contact',
                'Ambulance type',
                'Facilities required',
              ],
            }}
            later={{
              label: 'Can be filled in later',
              note: 'Everything that does not change the first choice of ambulance.',
              items: [
                'Extra paperwork details',
                'Operational notes',
                'Anything the record needs but sending the ambulance does not',
              ],
            }}
          />

          <Exchange
            note="The record fills itself in as the chat goes on."
            turns={[
              {
                who: 'Hospital sends',
                lines: [
                  'Pregnant lady, pickup at old bus stand, Hazratganj',
                  'Need oxygen and stretcher',
                ],
              },
              {
                who: 'System replies',
                lines: [
                  'New request MH-REQ-1343 received.',
                  'Patient contact is missing, please update.',
                ],
              },
            ]}
          />

          <Plate
            src={deckParallelRequests}
            alt="The hospital admin’s WhatsApp chat with several requests arriving within minutes: each one gets its own Case ID and its own updates, the system asks for a missing patient contact, and a hello is answered with the five details to send: location, patient condition, patient contact, ambulance type and facilities required"
            caption="Several requests at once. Each gets its own Case ID, so none get mixed up."
            className="mt-break max-w-md"
            onOpen={open}
          />

          <Principle>
            The system asks only for what is missing. It never asks again for what it already knows.
          </Principle>
        </Slide>
        </MoreDetail>

        <MoreDetail label="How a driver is chosen">
        <Slide id="assignment" chapter="03" height="auto">
          <Kicker n="03" label="No more calling round the drivers" />
          <Headline>
            Finding a driver became <span className="em">something the system tracks</span>, not a phone call.
          </Headline>
          <Lede wide>
            Before, finding a driver meant calling one at a time until somebody answered. In the
            new plan, the system sends the job and waits for a reply. The driver gets the case
            number, the patient’s contact, the distance, the pickup link, the equipment the trip
            needs, and two buttons: accept or decline.
          </Lede>

          <AssignmentLoop
            before={{
              label: 'Before',
              steps: ['Call a driver', 'Wait', 'No answer', 'Call the next one'],
              loop: 'Back to the start, again and again, until somebody says yes',
            }}
            after={{
              label: 'Proposed',
              step: 'Request ready, job sent to a driver',
              branches: [
                {
                  on: 'Driver accepts',
                  then: 'The same ride record updates for the hospital, the dashboard and the patient’s family.',
                },
                {
                  on: 'No reply',
                  then: 'The job goes to the next driver, and the wait is written down, not kept in somebody’s head.',
                },
              ],
            }}
          />
        </Slide>
        </MoreDetail>

        <MoreDetail label="Every step of a ride, and what each one records">
        <Slide id="lifecycle" chapter="03" height="auto">
          <Kicker n="03" label="The steps of one ride" />
          <Headline>
            A ride is <span className="em">a series of steps</span>, not a pile of
            messages.
          </Headline>
          <Lede wide>
            Each step starts when something really happens, not when somebody reports it, and
            each one is saved to the same record. The dashboard shows that record, the messages
            are made from it, and the reports read it later. Before, someone had to send or
            type the same information in several places.
          </Lede>

          <Lifecycle
            caption="One change, five places updated. Every filled square used to be a message somebody sent by hand."
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
              { label: 'Time saved', at: [0, 2, 4, 5, 6, 7] },
            ]}
          />

          <StateList
            states={[
              {
                phase: 'Intake',
                state: 'Request received',
                captures: 'Place, condition, contact, type of ambulance needed, time',
              },
              {
                phase: 'Assign',
                state: 'Driver assigned',
                captures: 'Driver, ambulance number, when they said yes, how long that took',
              },
              {
                phase: 'Assign',
                state: 'Trip started',
                captures: 'Start time, route opened, tracking link sent',
              },
              {
                phase: 'On the way',
                state: 'On the way',
                captures: 'Live location, arrival time, distance left, alerts if it goes off route or stops',
              },
              {
                phase: 'On the way',
                state: 'Arrived at pickup',
                captures: 'Arrival time, response time finished',
              },
              {
                phase: 'On the way',
                state: 'Patient on board',
                captures: 'Time the patient got in, equipment actually used',
              },
              {
                phase: 'Handover',
                state: 'Reached hospital',
                captures: 'Arrival time, distance from the gate, the three handover checks',
              },
              {
                phase: 'Close',
                state: 'Closed',
                captures: 'Finish time, time until ready again, bill, the whole timeline saved',
              },
            ]}
          />

          <Statement>
            Before, the messages made the record. Now the record makes the messages.
          </Statement>

          <div className="mt-break grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
            <Artifact
              src={proposedWorkflow}
              alt="The proposed system: numbered steps across the hospital admin, WhatsApp, the operations team, the driver and the patient’s family, with the data, the technology and the backup plan for each step"
              title="How the whole system works"
              note="Every step, with the data, how it works and the backup plan for each one."
              onOpen={open}
            />
            <Artifact
              src={idealFlow}
              alt="The new way of sending an ambulance, drawn from start to end, with the automatic parts highlighted"
              title="The proposed flow"
              note="The highlighted parts no longer need a person."
              onOpen={open}
            />
          </div>
        </Slide>
        </MoreDetail>

        <Slide id="fallbacks" chapter="03" height="auto">
          <Kicker n="03" label="Designing for when things go wrong" />
          <Headline>
            We treated things going wrong as <span className="em">a normal part of the job</span>.
          </Headline>
          <Lede wide>
            In an emergency you cannot count on a perfect phone signal or on people doing
            everything right. So our plan has a backup at every step. Listing what could go
            wrong was not the useful part. Each problem needed a backup plan and a person in
            charge of it. That is what makes a backup real, and not just a note on a drawing.
          </Lede>

          <EdgeGrid
            items={[
              {
                when: 'The driver does not respond',
                then: 'The system keeps track of the missing reply, and the job goes to the next driver.',
                owner: 'System',
              },
              {
                when: 'The driver has no smartphone',
                then: 'The job goes out as an SMS. The driver replies 1 to accept or 2 to reject.',
                owner: 'System',
              },
              {
                when: 'The family cannot use WhatsApp',
                then: 'They get the ambulance details by SMS, plus an automated call in their own regional language.',
                owner: 'System',
              },
              {
                when: 'WhatsApp fails at the hospital',
                then: 'The admin adds the ride on the dashboard in seconds, and it joins the same record.',
                owner: 'Hospital admin',
              },
              {
                when: 'Several requests arrive at once',
                then: 'Each request gets its own Case ID and its own updates, so none get mixed up or booked twice.',
                owner: 'System',
              },
              {
                when: 'The phone signal drops',
                then: 'The ride details are kept and sent once the signal comes back, instead of getting lost.',
                owner: 'System',
              },
              {
                when: 'GPS stops working',
                then: 'The system switches to arrival times typed in by hand, and warns the operations team.',
                owner: 'Operations',
              },
              {
                when: 'Important details are missing',
                then: 'The system asks for the one detail it needs, and nothing else.',
                owner: 'System',
              },
              {
                when: 'A ride is late or critical',
                then: 'An alert shows on the ride, and the admin can press Escalate to get help fast.',
                owner: 'Hospital admin',
              },
              {
                when: 'The system does not know the hospital’s number',
                then: 'The operations team picks the hospital by hand, and the number is saved so it works next time.',
                owner: 'Operations',
              },
              {
                when: 'The request arrives as a voice note or a photo',
                then: 'The operations team fills in the missing details, so the ride still goes into the system properly, not as a file nobody reads.',
                owner: 'Operations',
              },
              {
                when: 'A WhatsApp message does not get through',
                then: 'It tries again, then sends a text message, then warns on the dashboard, so a failed message never goes unnoticed.',
                owner: 'System',
              },
            ]}
          />

          <div className="mt-break grid gap-6 md:grid-cols-2 md:gap-8">
            <Plate
              src={deckDriverSms}
              alt="The driver’s WhatsApp chat with a ride card and Accept and Decline buttons, next to the SMS version for drivers without a smartphone: patient contact, oxygen cylinder needed, pickup location, and Send 1 to accept and 2 to reject"
              caption="Driver without a smartphone. The same job by SMS. Reply 1 to accept, 2 to reject."
              onOpen={open}
            />
            <Plate
              src={deckFamilyFallback}
              alt="The family’s WhatsApp chat with driver details, arrival time and a tracking link, next to the SMS version of the same details and an automated IVR call with the ambulance information in the regional language"
              caption="Family without WhatsApp. An SMS, plus an automated call in their own language."
              onOpen={open}
            />
          </div>
        </Slide>

        {/* ======================== 04, THE PRODUCT ========================= */}
        <Slide id="product" chapter="04" height="auto">
          <Kicker n="04" label="How the service works decided the product" />
          <Headline>
            Once the way of working was clear, the <span className="em">screens</span> were easier to
            define.
          </Headline>
          <Lede wide>
            The hospital dashboard has seven parts: home, add ride, ride list, ride details,
            handover, track ambulance and reports. Each part answers one question. Four of them
            are below.
          </Lede>

          <div className="mt-break grid gap-8 md:grid-cols-2 md:gap-10">
            {[
              {
                n: '01',
                name: 'Add ride',
                body: 'Only the essentials up front, with pickup and drop set on a map. The fields change with the request type: Emergency, Referral, Hospital Transfer or Other. Ambulance type and equipment are quick tags. A count shows what is still missing, for cleaner data.',
                src: hifiBooking,
                alt: 'The new add ride screen: pickup and drop-off with a map, and on the right the patient contact, type of request and emergency, type of ambulance, equipment tags, and a folded section for optional details showing how many are still missing',
              },
              {
                n: '02',
                name: 'Hospital dashboard',
                body: 'Made for the hospital admin. The key numbers, a map of rides coming to the hospital, a live feed of updates, and every ride in one list.',
                src: hifiDashboard,
                alt: 'The new hospital dashboard: four key numbers across the top (average response time, rides completed on time, how complete the ride details are, total rides), a map of rides coming to the hospital next to a live feed of ride updates, and a ride list with tabs for all, ongoing, pending and completed rides',
              },
              {
                n: '03',
                name: 'Ride details',
                body: 'The map, the driver, arrival time, patient details, the ride timeline and a way to get help, on one screen.',
                src: hifiTracking,
                alt: 'The live ride view for a ride that is en route: a bar showing the current status, time to pickup, last location update, distance left, the driver’s status and the patient’s condition, above a live map and a trip timeline, with Call driver and Escalate buttons and an alert that the arrival time went up',
              },
              {
                n: '04',
                name: 'Reports',
                body: 'Number of trips, response time, time until ready again, billing and trends, taken from what happened on each ride. Download as CSV, PDF or Excel.',
                src: hifiReports,
                alt: 'The analytics report: filters for date range, case type, status and ambulance type, then total trips, billing, average response time and average time until ready again, each compared with the last period, above charts of trip volume and trip times',
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

          <div className="mt-stage grid items-start gap-6 md:grid-cols-[2fr_1fr] md:gap-8">
            <Plate
              src={deckAddRide}
              alt="The Add Ride screen with numbered notes: pickup and drop set on a map, the patient contact, a request type list of Emergency, Referral, Hospital Transfer and Other, tags for ambulance type and facilities, and a folded optional section showing 5 missing"
              caption="Add ride. Only the essentials up front; optional details fold away, with a count of what is missing."
              onOpen={open}
            />
            <Plate
              src={deckMobile}
              alt="The hospital dashboard on a phone, with the Felix Hospitals logo, an Add Ride button, key numbers for the week and a map of rides coming to the hospital"
              caption="Every part also works on a phone, so admins can manage rides without a desktop."
              onOpen={open}
            />
          </div>

          <div className="mt-stage grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <Plate
              src={wireframes}
              alt="Hand-drawn sketches of the list of current rides, the ride details and the map, showing alert rows, a ride timeline and arrival times"
              label="Sketches"
              caption="Current rides, ride details and the map, worked out on paper before anything went into Figma."
              onOpen={open}
            />
            <div className="flex flex-col justify-center">
              <p className="label mb-6 text-ink-500">
                What changed between the sketches and the screens
              </p>
              <Callouts
                items={[
                  'The ride list stopped being a record of what happened, and became a to-do list of what needs attention: late, no signal, no update.',
                  'Ride details got a timeline, because the real question was never “what is happening?” but “what has happened so far?”',
                  'Alerts stopped being something you look for, and became something the system tells you, like “8 minutes ETA increased”.',
                ]}
              />
            </div>
          </div>

          <Footnote>
            The numbers on the reports screen are made-up examples from the design file. They
            are not Merry Health’s real numbers, and nothing on this page should be read as one.
            Better reports depended on fixing the data first: once each step of a ride is saved
            as it happens, response time and turnaround can come from what really happened,
            instead of being pieced together from memory at the end of a shift.
          </Footnote>

          {PROTOTYPE_URL ? (
            <a
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              className="rule-link mt-break inline-block text-lg md:text-2xl"
            >
              Try the interactive prototype <span aria-hidden="true">&#8599;</span>
            </a>
          ) : (
            import.meta.env.DEV && (
              <p className="label mt-break inline-block border border-dashed border-border px-4 py-3 text-ink-500">
                Placeholder &middot; paste the Figma prototype URL into PROTOTYPE_URL to turn this
                call to action on
              </p>
            )
          )}
        </Slide>

        <Slide id="handover" chapter="04" height="auto">
          <Kicker n="04" label="Handing over the patient" />
          <Headline>
            A ride only closes once <span className="em">the handover is checked</span>.
          </Headline>
          <Lede wide>
            Records used to be filled in after it was all over. Now, when the ambulance reaches
            the hospital, the admin sees the arrival time and how far it is from the gate. Three
            checks must be ticked: hospital staff confirmed, driver handover done, and admin
            verified. Only then can the admin press Mark Handover and close the ride. So every
            record ends complete and correct.
          </Lede>

          <Plate
            src={deckHandover}
            alt="The handover dialog for ride MH-2031, arrived at hospital: drop location, arrival time and distance from the gate, then three required checks, hospital staff confirmation, driver handover completed and admin verification, above the Mark Handover button"
            caption="Three required checks, then Mark Handover. A ride cannot close half-done."
            className="mt-break max-w-md"
            onOpen={open}
          />
        </Slide>

        <MoreDetail label="The hospital dashboard in detail">
        <Slide id="dashboard" chapter="04" height="auto">
          <Kicker n="04" label="The hospital dashboard" />
          <Headline>
            From writing down rides to <span className="em">running them live</span>.
          </Headline>
          <Lede wide>
            The new dashboard is made for the hospital admin, with the hospital’s own name on
            it. It answers one question: what is happening now, and what needs attention? The
            numbers still matter, but the screen’s job is to help the admin act. It is the full
            record of every ride, and it still works when WhatsApp fails.
          </Lede>

          <Plate
            src={hifiDashboard}
            alt="The new hospital dashboard: four key numbers across the top (average response time, rides completed on time, how complete the ride details are, total rides), a map of rides coming to the hospital next to a live feed of ride updates, and a ride list with tabs for all, ongoing, pending and completed rides"
            className="mt-break"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'Four numbers across the top: response time, rides on time, how complete the ride details are, and total rides, each compared with last week.',
                'A map of rides coming to the hospital sits next to a live feed of updates, so the first thing you see is what is moving right now.',
                'The ride list has tabs for all, ongoing, pending and completed rides, with search and filters, so a stuck request is one click away.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                A screen used in an emergency should make sense in one look, not need a long read.
              </Principle>
            </div>
          </div>
        </Slide>
        </MoreDetail>

        <MoreDetail label="The live ride screen in detail">
        <Slide id="ride" chapter="04" height="auto">
          <Kicker n="04" label="The live ride" />
          <Headline>
            One place to see <span className="em">everything about a ride</span>.
          </Headline>
          <Lede wide>
            Working out what was going on with a ride used to mean checking several channels and
            making a call. This screen shows the patient, the driver, the vehicle, the map, the
            arrival time, the timeline, the current step and a way to get help, all in one place.
            It is also honest about what it does not know yet.
          </Lede>

          <Plate
            src={hifiTracking}
            alt="The live ride view for a ride that is en route: a bar showing the current status, time to pickup, last location update, distance left, the driver’s status and the patient’s condition, above a live map and a trip timeline, with Call driver and Escalate buttons and an alert that the arrival time went up"
            className="mt-break"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'The patient’s details and condition sit up front, so the hospital can get ready sooner.',
                'The current step, arrival time, last location update, distance left and the driver’s status, all on one row.',
                'The timeline shows every step and what is still to come, so there is one answer to “what has happened so far?”',
                'Call driver is one tap away. Escalate is there for rides that are critical or late.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                The screen changes with the ride. Escalate only switches on once something can go
                wrong, and an alert explains why, like “8 minutes ETA increased”.
              </Principle>
            </div>
          </div>

          <Plate
            src={deckRideDetails}
            alt="The ride details screen with numbered notes: Call driver and Escalate buttons, a status row with the patient’s condition, a live map, the trip timeline, and an alert that the arrival time went up by 8 minutes"
            caption="Ride details, with the six things it adds: timeline, live map, patient summary, status, Call driver and Escalate."
            className="mt-10"
            onOpen={open}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <Plate
              src={hifiTripStarted}
              alt="The same ride a few minutes earlier, just after the trip started: the timeline is filled in up to Trip started, and Escalate and Mark handover are still switched off"
              caption="Earlier in the same ride. Escalate stays off until it is needed."
              onOpen={open}
            />
            <Plate
              src={hifiTrackAmbulance}
              alt="The track ambulance screen: a search bar to find a place, a large map, and a legend for pickup, ongoing and completed rides"
              caption="Track ambulance. Every ambulance on one map, coloured by where it is in the ride."
              onOpen={open}
            />
          </div>
        </Slide>
        </MoreDetail>


        <MoreDetail label="The goals">
        <Slide id="targets" chapter="05" height="auto">
          <Kicker n="05" label="The goals" />
          <Headline>
            What the design <span className="em">aims for</span>.
          </Headline>
          <Lede wide>
            Nothing here was measured. Each goal comes with the measurement that would show
            whether it works.
          </Lede>

          {/* The three impacts the client deck promised, each with how it would be measured. */}
          <Targets
            items={[
              {
                figure: 'Faster emergency handling',
                outcome: 'Admins can add a ride straight away, even when WhatsApp fails',
                how: 'Measured from request received to driver accepted, since the system now records both times itself.',
              },
              {
                figure: 'More rides completed',
                outcome: 'Live tracking, alerts and a checked handover mean fewer rides drop off',
                how: 'Measured as the share of rides that reach a checked handover, and the calls needed per ride.',
              },
              {
                figure: 'Accurate records and reports',
                outcome: 'One complete record per ride, so hospitals can download accurate reports any time',
                how: 'Measured as the share of rides closed by real events, not typed in by hand afterwards.',
              },
            ]}
          />
        </Slide>
        </MoreDetail>

        <Slide id="contribution" chapter="05" height="auto">
          <Kicker n="05" label="What I worked on" />
          <Headline>My contribution</Headline>
          <Lede wide>
            This was a team of five designers, working for the client Merry Health during an
            apprenticeship with Career Reactor. We worked out the research, the new way of working and the final
            plan together, which is why this page says “we”.
          </Lede>
          <Lede wide>
            My own work covered making sense of the research, seeing how the whole system fits
            together, and designing the screens. I helped check the product and map how rides
            were sent, and helped map the people and the chances to improve, which led to the
            idea of one shared ride record. I worked on how the service works and the backup
            plans, and I turned those choices into flows, sketches and finished screens for the
            dashboard and the chat messages.
          </Lede>

          <div className="mt-break grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                'Research',
                [
                  'Platform audit',
                  'Mapping how the work was done',
                  'Following the journeys of four groups of people',
                  'Finding the problems that kept coming back',
                ],
              ],
              [
                'Systems thinking',
                [
                  'Actor mapping',
                  'Opportunity mapping',
                  'The idea of one shared ride record',
                  'Service logic',
                  'Backup plans for when things go wrong',
                ],
              ],
              [
                'Product design',
                [
                  'Scenario mapping',
                  'Information architecture',
                  'Interaction flows',
                  'Wireframes',
                  'Finished screen designs',
                ],
              ],
              [
                'Collaboration',
                [
                  'Synthesis',
                  'Team reviews',
                  'Joining up everyone’s journeys',
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
            A full plan for sending ambulances, <span className="em">not a launched product</span>.
          </Headline>

          <Delivered
            delivered={{
              label: 'What we delivered',
              note: 'Made by studying the product and the way of working with Merry Health.',
              items: [
                'Asking for ambulance details a little at a time',
                'A clear way to choose a driver',
                'A hospital dashboard with seven parts, also on mobile',
                'Handover checks before a ride can close',
                'Shared steps for every ride',
                'Messages over WhatsApp and text',
                'Live operations',
                'Patient updates',
                'Exception handling',
                'Reports based on what really happened',
              ],
            }}
            withheld={{
              label: 'What this study does not claim',
              note: 'It was never used for real ambulance rides, so none of these were measured.',
              items: [
                'Dispatch time',
                'Call volume',
                'ETA accuracy',
                'Operational efficiency',
              ],
            }}
          />

          <Statement>
            The system would still have to prove these in real life.
          </Statement>
        </Slide>

        <Slide id="reflection" chapter="05" height="auto">
          <Kicker n="05" label="Reflection" />
          <Headline>
            The screens only made sense after we changed{' '}
            <span className="em">the way of working underneath them</span>.
          </Headline>
          <Lede wide>
            A cleaner dashboard would not have fixed a service that still ran on calls and
            WhatsApp. The more useful design work happened one level below the screens.
          </Lede>

          <div className="mt-stage grid gap-x-16 gap-y-14 md:grid-cols-2 md:gap-y-20">
            {[
              [
                'Deciding what the shared record was',
                'Everything else came from one question: what is the one record that every channel reads from and writes to? Answer that, and the dashboard, the messages and the reports stop being separate problems.',
              ],
              [
                'Deciding when a person really needed to act',
                'Most of the work was somebody moving information from one place to another. Every step the system could handle by itself removed another call, another update by hand, or another thing somebody had to remember under pressure.',
              ],
              [
                'Working with the channels people already used',
                'Working with the tools people already knew worked better than replacing them. WhatsApp had the one thing the product did not: everybody already used it, and nobody had to be taught.',
              ],
              [
                'Planning clearly for things going wrong',
                'No signal, no GPS and a driver who does not answer really happen in emergencies. Planning for those first changed what we could expect when everything goes right.',
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
            Good design for busy teams often means taking away work people should never
            have had to do by hand in the first place.
          </Statement>

          <Footnote>
            And the limit of all of it: the plan has not been tested in real emergencies.
            Everything above comes from how the work runs today and from the backup plans the
            team could think of, not from watching it hold up under real pressure. The next step
            would be to try it for real and see which ideas hold.
          </Footnote>
        </Slide>
        <ReadNext slug="merry-health" />
      </main>

      <Contact />

      <Lightbox figure={figure} onClose={close} />
    </div>
  );
};

export default MerryHealthCaseStudy;
