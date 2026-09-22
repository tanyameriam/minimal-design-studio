import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import Lightbox from '@/components/case-study/Lightbox';
import { useLightbox } from '@/hooks/use-lightbox';
import { type Storyline } from '@/components/story/Storyline';
import { ReadingNav } from '@/design/ReadingNav';
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
      { id: 'summary', title: 'The dashboard was only one part' },
      { id: 'service', title: 'Following one ride, end to end' },
      { id: 'evidence', title: 'Finding where it broke' },
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
    name: 'How the service works',
    target: 'intake',
    slides: [
      { id: 'intake', title: 'Ask only for what is needed now' },
      { id: 'assignment', title: 'No more calling round' },
      { id: 'lifecycle', title: 'The steps of one ride' },
      { id: 'fallbacks', title: 'Designing for when it goes wrong' },
    ],
  },
  {
    n: '04',
    name: 'The product',
    target: 'product',
    slides: [
      { id: 'product', title: 'Four screens' },
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
    'Redesigning how emergency ambulances get sent. A redesign of the Merry Health service, so nothing gets dropped, the patient is picked up, and everyone can see the ride as it happens: hospitals, the operations team, drivers and families in smaller Indian cities.'
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
                client="Merry Health &middot; Emergency ambulances &middot; 2026"
                headline={
                  <>
                    Redesigning how <span className="em">emergency ambulances get sent</span>.
                  </>
                }
                takeaways={{
                  problem:
                    'Rides were arranged over calls, WhatsApp, paper and a dashboard, so four groups each had a different idea of the same ride.',
                  did: 'Designed one shared record for each ride. People keep using WhatsApp, and every way a ride can go wrong has someone in charge of fixing it.',
                  outcome:
                    'Nine hand-offs by phone become one shared record. This is a proposal, researched with the company and never launched.',
                }}
              />

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                <p>
                  Merry Health arranges ambulance rides between hospitals, its operations team,
                  drivers and patients’ families in smaller cities across India.
                </p>
                <p>
                  At first we treated it as a product redesign. Then we mapped how a ride was really
                  sent out, and found that most of the work happened outside the dashboard: in phone
                  calls, WhatsApp, paper notes and chasing people again and again.
                </p>
                {/* The paragraph that used to close this block described the
                    dispatch model, which is what "What I did" now says three
                    lines higher. The turn is kept, because a summary cannot
                    carry the moment a project changes shape. */}
                <p className="text-foreground">That changed the project.</p>
              </div>

              <dl className="mt-12 grid max-w-2xl gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Research &middot; Seeing the whole system &middot; Design planning &middot;
                    Designing how it works &middot; Screen design
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
                    A master’s degree project with Merry Health, at JSAA
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Stage</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    A proposal. Researched with Merry Health, but never launched.
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
            The dashboard was <span className="em">only one part</span> of sending an ambulance.
          </Headline>
          <Lede wide>
            When we mapped the old way of working with the Merry Health team, one request went
            through four channels and several people before an ambulance moved. The product was
            there. But most of the work happened next to it.
          </Lede>

          <Facts
            source="From the way of working we mapped with the operations team, not measured across the whole product."
            items={[
              {
                figure: '8 to 10 min',
                note: 'From the request to a driver saying yes, in the rides we watched',
              },
              { figure: '3 to 4 calls', note: 'Driver calls before someone accepted' },
              { figure: 'Four channels', note: 'Phone, WhatsApp, paper and the dashboard' },
              {
                figure: 'No shared record',
                note: 'The hospital, operations team, driver and family could each have a different idea of the same trip',
              },
            ]}
          />
        </Slide>

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
                repeat: '3 to 4 calls, until somebody picks up and confirms',
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
                opportunity: 'Send the job to a driver, watch for a reply, and move on if the timer runs out.',
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
                actors: 'Driver, operations',
                breaks:
                  'The product wanted neat forms, staff made quick calls, and records were filled in late.',
                opportunity: 'Finish the ride when something actually happens, not when somebody remembers.',
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
            worked. That is why the numbers on this page say we saw them there, and not that
            we measured them across the whole product.
          </Footnote>
        </Slide>

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
                quote: 'We can’t fill long forms when a patient is critical.',
              },
              {
                title: 'Finding a driver meant calling again and again',
                body: 'The operations team called drivers one after another until someone answered. So how fast an ambulance left depended on who picked up, not on a clear way of choosing a driver.',
                quote: 'I call 3 to 4 drivers before one confirms.',
              },
              {
                title: 'Nobody could see the same live update',
                body: 'Nobody could easily see when the ambulance would arrive or how the ride was going, so hospitals and families called to ask. The operations team then called the driver and passed the answer back.',
                quote: 'Families keep calling us to ask when the ambulance will arrive.',
              },
              {
                title: 'Records were filled in after it was all over',
                body: 'Information moved between paper, WhatsApp, calls and the dashboard. When records were filled in later, the times on them no longer showed what had really happened.',
                quote: 'We update records at the end of the day.',
              },
            ]}
          />

          <Footnote>
            One number on the old dashboard shows the fourth problem by itself. The product’s
            own average response time says 23:41:14. That is not how long an ambulance took.
            It is what the number turns into when rides are marked done at the end of the day,
            instead of when they really end.
          </Footnote>
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
            hub="MH-REQ-1342"
            hubNote="One record that every channel reads from and writes to. Four groups, one version of the ride."
            actors={[
              {
                name: 'Hospital admin',
                needs: 'To send a request quickly, and know it got through.',
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
            use could stay the same, and the system behind it would be the same every time.
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
              alt="The Merry Health operations WhatsApp chat, showing a request typed in normal words, a case number added automatically, and a message saying the patient contact is missing, please update"
              caption="Operations. The system replies asking for the one missing detail, not the whole form."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
            <Plate
              src={whatsappHospital}
              alt="The hospital group chat, showing the case number and each step of the ride posted as an update"
              caption="Hospital. Every step lands in one chat, under one case number."
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
              alt="The family chat, showing the driver’s details, the ambulance number, a countdown to arrival and a tracking link"
              caption="Patient’s family. The driver, the ambulance, arrival time, a tracking link, arrival."
              onOpen={open}
              imageClassName="aspect-[9/16] object-cover object-top"
            />
          </div>
        </Slide>

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
                'Contact',
                'Ambulance requirement',
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
            The system asks only for what is missing. It never asks again for what it already knows.
          </Principle>
        </Slide>

        <Slide id="assignment" chapter="03" height="auto">
          <Kicker n="03" label="No more calling round the drivers" />
          <Headline>
            Finding a driver became <span className="em">something the system tracks</span>, not a phone call.
          </Headline>
          <Lede wide>
            Before, the operations team called drivers one at a time until somebody answered.
            In the new plan, the system sends the job and a timer decides when to try the next
            driver. The driver gets the case number, the patient’s contact, the distance, the
            pickup link, the equipment the trip needs, and two buttons.
          </Lede>

          <AssignmentLoop
            before={{
              label: 'Before',
              steps: ['Call a driver', 'Wait', 'No answer', 'Call the next one'],
              loop: 'Back to the start, 3 to 4 times, until somebody says yes',
            }}
            after={{
              label: 'Proposed',
              step: 'Request ready, job sent to a driver',
              branches: [
                {
                  on: 'Driver accepts',
                  then: 'The same ride record updates for the operations team, the hospital and the patient’s family.',
                },
                {
                  on: 'No reply before the timer runs out',
                  then: 'The job goes to the next driver, and the wait is written down, not kept in somebody’s head.',
                },
              ],
            }}
          />
        </Slide>

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
                captures: 'Arrival time, how long the trip took, distance travelled',
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
              alt="The proposed system: twelve numbered steps across the hospital admin, WhatsApp, the operations team, the driver and the patient’s family, with the data, the technology and the backup plan for each step"
              title="How the whole system works"
              note="Twelve steps, with the data, how it works and the backup plan for each one."
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
                then: 'The job goes out by text message, and the operations team updates the ride for the driver.',
                owner: 'Operations',
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
                when: 'The ride is never marked as done',
                then: 'If the driver stops moving, an alert goes off, and the operations team steps in or picks another driver.',
                owner: 'Operations',
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

          <div className="mt-break border-l border-foreground p-6 pl-6 md:p-8 md:pl-8">
            <p className="label-strong">Deciding how urgent it is followed a rule, not a guess</p>
            <p className="mt-5 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
              A message with the words accident, bleeding, chest pain, unconscious, stroke,
              cardiac, head injury or ventilator counts as P1, the most urgent. An emergency
              without any of those words is P2. Transfers, planned trips and non-emergencies are
              P3. Anything the rules cannot sort goes to a person to decide, instead of the system
              guessing, because a wrong automatic choice is worse than a slow human one.
            </p>
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
            Four screens came out of the new way of working, and each one answers one question.
            None of them was where we started.
          </Lede>

          <div className="mt-break grid gap-8 md:grid-cols-2 md:gap-10">
            {[
              {
                n: '01',
                name: 'Fast request',
                body: 'The most important details first, the pickup chosen on a map, and the rest filled in bit by bit while the ambulance moves.',
                src: hifiBooking,
                alt: 'The new ambulance request screen: search boxes for pickup and drop-off above a big map with a pin on it, and a ride details panel on the right with contact, type of emergency, condition, type of ambulance and equipment tags',
              },
              {
                n: '02',
                name: 'Operations dashboard',
                body: 'Rides happening now, alerts, quick actions and the rides that need attention.',
                src: hifiDashboard,
                alt: 'The new operations dashboard: cards for money earned and average response time, rides happening now, a live map and quick add tiles, a quick actions panel, and a ride list with tabs for all, finished and waiting',
              },
              {
                n: '03',
                name: 'Live ride view',
                body: 'The map, the driver, arrival time, patient details, the ride timeline and a way to get help, on one screen.',
                src: hifiTracking,
                alt: 'The live ride view: a bar showing the current step, time to pickup, last location update, distance left and the driver’s status, above a live map, a timeline of six steps, and a patient details panel',
              },
              {
                n: '04',
                name: 'Reporting',
                body: 'Number of trips, response time, time until ready again, billing and trends, taken from what happened on each ride instead of pieced together later.',
                src: hifiReports,
                alt: 'The reports screen: filters for dates, case type, status and ambulance type above total trips, billing, average response time and average time until ready again, with charts of trip numbers, trip times and ride types',
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
                  'Alerts stopped being something you look for, and became something the system tells you: stopped for over ten minutes, off route, no update in twenty.',
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

        <Slide id="dashboard" chapter="04" height="auto">
          <Kicker n="04" label="The operations dashboard" />
          <Headline>
            From writing down rides to <span className="em">running them live</span>.
          </Headline>
          <Lede wide>
            The new dashboard was meant to answer one question: what is happening now, and what
            needs attention? Instead of treating every ride the same, it shows new requests
            first, then rides waiting for a driver, then rides happening now, and then the ones
            that are late or unusual. The numbers still matter, but the screen’s job is to help
            the team act.
          </Lede>

          <Plate
            src={hifiDashboard}
            alt="The new operations dashboard: cards for money earned and average response time, rides happening now, a live map and quick add tiles, a quick actions panel, and a ride list with tabs for all, finished and waiting"
            className="mt-break"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'Quick actions is a to-do list that is always there: what needs attention, what set off an alert, what changed.',
                'Ongoing rides shows a live count next to the map, so the first thing you see is how many rides are happening.',
                'The ride list has tabs for all, finished and waiting, so a stuck request is one click away.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                An operations screen should make sense in one look, not need a long read.
              </Principle>
            </div>
          </div>
        </Slide>

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
            alt="The live ride view: a bar showing the current step, time to pickup, last location update, distance left and the driver’s status, above a live map, a timeline of six steps, and a patient details panel"
            className="mt-break"
            onOpen={open}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Callouts
              items={[
                'The current step, arrival time, last location update, distance left and the driver’s status, all on one row.',
                'The timeline shows every step and what is still to come, so there is one answer to “what has happened so far?”',
                'Call driver and get help are easy to reach, because what you do when things go wrong should not be hidden.',
              ]}
            />
            <div className="flex flex-col justify-center">
              <Principle>
                Shown in its very first step on purpose. There is no driver yet, so the map says
                what it is waiting for, instead of showing an empty grid.
              </Principle>
            </div>
          </div>
        </Slide>

        {/* ===================== 05, WHAT IT CHANGES ======================== */}
        <Slide id="before-after" chapter="05" height="auto">
          <Kicker n="05" label="Before and after" />
          <Headline>
            The same ride, handled in <span className="em">two very different ways</span>.
          </Headline>

          <SystemPanes
            before={{
              label: 'Before',
              verdict: 'People passed the news along by hand.',
              steps: [
                { text: 'Hospital calls' },
                { text: 'Operations writes down the request', relay: true },
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
              verdict: 'The system passed the news to everyone.',
              steps: [
                { text: 'Hospital requests through the channel it already uses' },
                { text: 'Ride record created' },
                { text: 'Job sent to a driver' },
                { text: 'Driver says yes, or it goes to the next one' },
                { text: 'The shared ride record updates' },
                { text: 'Updates go out to the hospital and the family' },
                { text: 'Each step is saved as it happens' },
                { text: 'Finishing the ride creates the report' },
              ],
            }}
          />
        </Slide>

        <Slide id="targets" chapter="05" height="auto">
          <Kicker n="05" label="What we would measure" />
          <Headline>
            Because the system was never launched, these are{' '}
            <span className="em">goals, not results</span>.
          </Headline>
          <Lede wide>
            Nothing here is a result. These are the goals the design was aiming for, each with
            the measurement that would prove it right or wrong. A number without that second
            part is not worth putting on a page.
          </Lede>

          <Targets
            items={[
              {
                figure: 'Under 3 min',
                outcome: 'From request to a driver saying yes',
                how: 'Compared with the 8 to 10 minutes we saw in the old way of working. Measured automatically, from request received to driver accepted, since the system now records both times itself.',
              },
              {
                figure: 'Fewer calls',
                outcome: 'Phone calls needed per ride',
                how: 'Automatic “got it” messages and step-by-step updates remove the reason for most of them. Measured as the number of calls needed after the ambulance is sent.',
              },
              {
                figure: 'More complete records',
                outcome: 'Rides that leave a full record behind',
                how: 'Saved as the work happens, instead of typed in afterwards. Measured as the share of rides with a proper start and end time.',
              },
              {
                figure: 'Everyone can see it',
                outcome: 'Updates without anyone calling the operations team',
                how: 'Measured as the share of rides where the hospital and the family got updates without having to ask.',
              },
              {
                figure: 'Reports you can trust',
                outcome: 'Response time and turnaround worked out from real events, not pieced together',
                how: 'Measured as the share of rides finished by real events, not typed in by hand afterwards.',
              },
            ]}
          />
        </Slide>

        <Slide id="contribution" chapter="05" height="auto">
          <Kicker n="05" label="What I worked on" />
          <Headline>My contribution</Headline>
          <Lede wide>
            This was a team of five designers, working with Merry Health as part of our
            master’s degree. We worked out the research, the new way of working and the final
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
            Good design for operations teams often means taking away work people should never
            have had to do by hand in the first place.
          </Statement>

          <Footnote>
            And the limit of all of it: the plan has not been tested in real emergencies.
            Everything above comes from how the work runs today and from the backup plans the
            team could think of, not from watching it hold up under real pressure. The next step
            would be to try it for real and see which ideas hold.
          </Footnote>
        </Slide>

        <Slide id="closing" chapter="05" height="auto" invert>
          <p className="label text-ink-500">In closing</p>

          <p className="mt-10 max-w-[20ch] text-[2rem] leading-[1.05] md:text-[3.5rem]">
            Design how people work together first. <span className="em">Then design the screens.</span>
          </p>

          <p className="mt-12 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            Merry Health started as a dashboard project. It became a project about the whole
            system: how one ambulance ride could stay the same for hospitals, the operations
            team, drivers and patients’ families.
          </p>

          <HeroComposition className="mt-stage w-full max-w-4xl" />

          <nav
            aria-label="Other projects"
            className="mt-stage flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8"
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
