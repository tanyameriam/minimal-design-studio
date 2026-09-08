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
import {
  AnnotatedPlate,
  BigQuote,
  Callout,
  Chain,
  Decisions,
  Ledger,
  Methods,
  Notes,
  Numbered,
  Plate,
  Principle,
  PrototypeLink,
  SignalMap,
  SmallQuote,
} from '@/components/case-study/educaitors/diagrams';
import { adjacentCaseStudies } from '@/data/caseStudies';
import { usePageMeta } from '@/hooks/use-page-meta';

import home from '@/assets/educaitors-home.jpg';
import calibration from '@/assets/educaitors-calibration.jpg';
import grading from '@/assets/educaitors-grading.jpg';
import appeals from '@/assets/educaitors-appeals.jpg';

/*
 * ASSET WEIGHT
 *
 * The four screenshots are 290 to 465 KB each as exported JPEGs, about
 * 1.5 MB together. Only the hero loads eagerly; the rest are lazy and
 * decoded off the main thread, and every one carries its intrinsic size so
 * the page reserves the box before the pixels land. Re-exporting them at
 * about 2000px wide as WebP would roughly halve that, but there is no image
 * tooling in this repo, so it has to happen at export.
 */

/**
 * EducAItors, told as what it actually was: an accountability system for
 * academic judgment, not an AI gradebook.
 *
 * The page runs on the portfolio's own tokens and the shared slide kit, and
 * keeps its own diagram vocabulary in components/case-study/educaitors. It
 * deliberately does not share a shape with Merry Health, the other practicum
 * study: that one argues about how an emergency moves between four parties,
 * this one argues about where a human decision enters an automated one.
 *
 * Three rules govern the writing.
 *
 * 1. Nothing here was deployed. The deliverable was a development-ready
 *    interactive prototype, so there is no adoption, accuracy or time-saving
 *    figure anywhere on the page, and the outcome section says so in as many
 *    words rather than leaving a reader to infer it.
 *
 * 2. Ownership is exact. I led the Instructor Evaluation and Supervision
 *    module, so my own decisions and leadership are first person, and team
 *    decisions are "we". Neither is inflated to meet the other.
 *
 * 3. Participants stay anonymous. Faculty are labelled by role and
 *    institution type only.
 *
 * The five source diagrams shipped as PNG exports with text overflowing
 * their boxes. They are structured content rather than drawings, so they are
 * rebuilt in HTML in the diagram kit. The four interface screenshots are
 * evidence and stay as images.
 */

const storyline: Storyline = [
  {
    n: '01',
    name: 'In 60 seconds',
    slides: [
      { id: 'overview', title: 'Not an AI gradebook' },
      { id: 'framing', title: 'Rules turned into a dependable decision system' },
    ],
  },
  {
    n: '02',
    name: 'Research',
    slides: [
      { id: 'research', title: 'How evaluation actually works in Indian colleges' },
      { id: 'reframe', title: 'The problem was defensible judgment' },
      { id: 'principles', title: 'Every finding had to change an interaction' },
    ],
  },
  {
    n: '03',
    name: 'The product',
    slides: [
      { id: 'architecture', title: 'Supervision as the connective tissue' },
      { id: 'calibration', title: 'Making disagreement useful' },
      { id: 'grading', title: 'Evidence, judgment and action together' },
      { id: 'appeals', title: 'A re-evaluation is not a support ticket' },
    ],
  },
  {
    n: '04',
    name: 'Decisions',
    slides: [
      { id: 'decisions', title: 'Transparency over theatre' },
      { id: 'outcome', title: 'What we delivered, and did not claim' },
    ],
  },
  {
    n: '05',
    name: 'Leading it',
    slides: [
      { id: 'leadership', title: 'Shared structure, distributed ownership' },
      { id: 'way-of-working', title: 'From an ambiguous brief to one product' },
      { id: 'reflection', title: 'Changing what we believed the product was' },
    ],
  },
];

const PROTOTYPE_URL = 'https://wed-one-livid.vercel.app/dashboard';

const EducaitorsCaseStudy = () => {
  const { figure, open, close } = useLightbox();
  const { prev, next } = adjacentCaseStudies('educaitors');

  usePageMeta(
    'EducAItors',
    'A product design case study on building instructor trust, control and accountability into AI-supported academic evaluation. Led the Instructor Evaluation and Supervision module, from faculty research in Indian higher education through to a development-ready prototype.'
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
        {/* ========================= 01, HERO ========================= */}
        <section id="top" className="border-t border-border">
          <div className="mx-auto w-full max-w-[var(--shell)] px-5 py-20 md:px-8 md:py-28 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_minmax(0,1fr)] lg:gap-20">
              <div>
                <StudyOpening
                  slug="educaitors"
                  client="EducAItors &middot; AI in education &middot; 2026"
                  headline={
                    <>
                      Designing the <span className="em">trust layer</span> for AI-supported
                      evaluation.
                    </>
                  }
                />

                <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                  <p>
                    When AI enters grading, accuracy is only half the problem. Instructors still
                    need to understand the evidence, supervise uncertainty, correct the system, and
                    stand behind the final decision.
                  </p>
                  <p className="text-foreground">
                    I led the product design team responsible for Instructor Evaluation and
                    Supervision within EducAItors.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                  <PrototypeLink href={PROTOTYPE_URL} className="text-lg md:text-xl">
                    View the live prototype
                  </PrototypeLink>
                  <a href="#overview" className="rule-link text-lg text-ink-600">
                    Continue to the case study <span aria-hidden="true">&darr;</span>
                  </a>
                </div>
              </div>

              <dl className="grid gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-2">
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Team lead and product designer, Instructor Evaluation &amp; Supervision
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Scope</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Research and discovery &middot; Strategy and systems thinking &middot; Product
                    design &middot; Team leadership &middot; Integration and delivery
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Context</dt>
                  <dd className="text-base leading-snug md:text-lg">MDes academic practicum</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Team</dt>
                  <dd className="text-base leading-snug md:text-lg">Cross-module design team</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Outcome</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Development-ready interactive prototype
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Domain</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    AI in education &middot; Higher education &middot; Human-in-the-loop systems
                  </dd>
                </div>
              </dl>

              <CaseStudyEntry scanMinutes={5} readMinutes={13} />
            </div>

            <Plate
              src={home}
              alt="The EducAItors instructor home screen, showing entry points for preparing an assignment, opening the grading desk and viewing result insights, alongside active assignment progress and system notifications."
              width={3059}
              height={1684}
              priority
              className="mt-16 md:mt-24"
              caption="The instructor home. Preparation, grading and result insights are three doors into the same supervision workflow, with calibration and pattern alerts surfaced rather than buried."
              onOpen={open}
            />
          </div>
        </section>

        {/* =================== 01, THE ONE-MINUTE VERSION =================== */}
        <Slide id="overview" chapter="01" height="auto">
          <Kicker n="01" label="If you have a minute, read only this chapter" />
          <Headline size="large">
            We were not designing an <span className="em">AI gradebook</span>.
          </Headline>
          <Lede wide>
            We were designing the moment an instructor decides whether an AI-supported judgment
            deserves to be trusted.
          </Lede>
          <Lede wide>
            The original brief divided EducAItors into three connected projects: submission
            readiness, instructor evaluation and supervision, and continuous improvement. I led the
            middle layer, where evidence, confidence, scoring logic and human authority had to come
            together in one workable experience.
          </Lede>
          <Lede wide>
            Our research in Indian higher education changed the emphasis. The operational pain was
            real, but speed alone was not the hardest problem. Instructors needed a system they
            could understand, supervise, correct and defend.
          </Lede>

          <Principle>
            That became our product north star: reduce verification effort without reducing
            academic judgment.
          </Principle>

          <Chain
            caption="The three connected modules of EducAItors and the moment each one owns"
            columns={3}
            items={[
              {
                name: 'Submission readiness',
                body: 'Students fix missing, blocked or unreadable evidence before grading starts.',
              },
              {
                name: 'Evaluation and supervision',
                body: 'Instructors calibrate, inspect evidence, override, approve and release.',
                emphasis: true,
              },
              {
                name: 'Continuous improvement',
                body: 'Corrections and patterns improve rubrics, teaching and future reviews.',
              },
            ]}
            footnote="Our module became the trust layer between clean student inputs and a system that learns from instructor decisions. The shaded block is the one my team owned, and we designed its handshakes with both neighbours."
          />
        </Slide>

        {/* ================== 01, THE BRIEF AND THE SYSTEM ================== */}
        <Slide id="framing" chapter="01" height="auto">
          <Kicker n="01" label="System framing" />
          <Headline>
            The brief described rules. We had to turn them into a{' '}
            <span className="em">dependable decision system</span>.
          </Headline>
          <Lede wide>
            The three project briefs were tightly connected. Student submissions had to be complete
            and readable before evaluation. Evaluation had to produce criterion-level evidence, one
            defensible level per criterion, confidence signals and explicit human approval.
            Corrections then had to feed the continuous-improvement module.
          </Lede>
          <Lede wide>
            Instead of translating every rule into a screen, we first mapped how a decision travels
            through the assessment system.
          </Lede>

          <Chain
            caption="How one grading decision travels through the assessment system"
            items={[
              {
                name: 'Assignment setup',
                body: 'The task, expected artifacts, rubric and outcome mapping are defined.',
              },
              {
                name: 'Submission',
                body: 'Work arrives, often as a photographed or scanned handwritten document.',
              },
              {
                name: 'Evaluation',
                body: 'Criterion-level evidence, one level per criterion, and a confidence signal.',
              },
              {
                name: 'Release',
                body: 'The instructor approves, adjusts or overrides, then publishes the result.',
              },
              {
                name: 'Appeal and learning',
                body: 'Re-evaluation requests and correction patterns feed the next cycle.',
              },
            ]}
          />

          <p className="label mt-16 text-ink-500 md:mt-20">The five constraints we designed to</p>
          <Numbered
            size="compact"
            items={[
              { title: 'Validate before evaluating.' },
              { title: 'Anchor every score to evidence and a rubric criterion.' },
              { title: 'Surface uncertainty rather than hiding it.' },
              { title: 'Keep the instructor as final authority.' },
              { title: 'Record changes in an auditable learning loop.' },
            ]}
          />
        </Slide>

        {/* ======================= 02, RESEARCH ======================= */}
        <Slide id="research" chapter="02" height="auto">
          <Kicker n="02" label="Research in context" />
          <Headline>
            We studied how evaluation actually works in{' '}
            <span className="em">Indian colleges</span>.
          </Headline>
          <Lede wide>
            I interviewed three faculty members at autonomous colleges in Kerala, including a vice
            principal. A teammate added perspectives from other instructors and students. We
            combined those conversations with desk research on NEP 2020, Outcome Based Education,
            Bloom&rsquo;s Taxonomy, accreditation requirements, rubric standards, AI-supported
            grading and faculty trust.
          </Lede>

          <Methods
            items={[
              'Faculty interviews',
              'Student perspectives',
              'Policy desk research',
              'Rubric and OBE standards',
              'Competitive review',
            ]}
          />

          <Notes
            items={[
              {
                title: 'Institution type changes autonomy',
                body: 'Affiliated, deemed and autonomous colleges do not create or use rubrics in the same way, so a single setup flow would have fitted almost nobody.',
              },
              {
                title: 'Evaluation is increasingly traceable',
                body: 'NEP 2020 and Outcome Based Education are pushing institutions toward Bloom’s levels, CO to PO mapping and explicit assessment criteria.',
              },
              {
                title: 'The input is not always clean',
                body: 'Handwritten assignments photographed or scanned into PDFs remain common, so extraction quality is a product problem, not an implementation detail.',
              },
              {
                title: 'Teachers grade reasoning',
                body: 'Step marking rewards the method even when the final answer is wrong, which means a single number per submission cannot represent the judgment being made.',
              },
              {
                title: 'Trust depends on visibility',
                body: 'Faculty were more open to AI support when they could inspect its evidence and remain accountable for the final grade.',
              },
            ]}
          />

          <BigQuote source="Vice principal, autonomous college">
            We are not just grading the student&rsquo;s answer. We are measuring whether our
            teaching achieved what the course was designed to achieve.
          </BigQuote>

          <SmallQuote source="Professor, Kerala">
            If students type, they use ChatGPT. So we ask them to handwrite, photograph it, and
            upload it.
          </SmallQuote>
        </Slide>

        {/* ======================= 02, THE REFRAME ======================= */}
        <Slide id="reframe" chapter="02" height="auto" invert>
          <Kicker n="02" label="The reframe" />
          <Headline size="large">
            The core problem was not grading. It was{' '}
            <span className="em">defensible judgment</span>.
          </Headline>
          <Lede wide>
            Across the briefs, interviews and whiteboarding, the same pattern kept appearing: weak
            inputs create weak evidence; weak evidence makes scoring uncertain; uncertainty creates
            rechecking; rechecking destroys the promised efficiency.
          </Lede>
          <Lede wide>
            So we reframed the product as a chain of knowledge quality rather than a collection of
            grading features.
          </Lede>

          <Chain
            caption="Grading reframed as a knowledge-quality chain"
            items={[
              {
                name: 'Usable evidence',
                body: 'Can the system actually read and access the work?',
              },
              {
                name: 'Clear standards',
                body: 'What does good look like for this criterion?',
              },
              {
                name: 'Explainable match',
                body: 'Which evidence supports which rubric level?',
              },
              {
                name: 'Human judgment',
                body: 'Where must the instructor intervene or override?',
              },
              {
                name: 'Learning loop',
                body: 'What should change before the next grading cycle?',
              },
            ]}
            footnote={
              <>
                A failure at any stage reappears later as an &ldquo;AI problem&rdquo;, a trust
                problem, or an appeal.
              </>
            }
          />

          <Statement>
            How might we let instructors supervise uncertainty at scale, without making them
            re-grade every paper?
          </Statement>

          <Footnote>
            Trust had to be earned across the workflow, not added later through a confidence badge.
          </Footnote>
        </Slide>

        {/* ================= 02, RESEARCH BECAME INTERACTION ================= */}
        <Slide id="principles" chapter="02" height="auto">
          <Kicker n="02" label="Principles" />
          <Headline>
            Every major finding had to <span className="em">change an interaction</span>.
          </Headline>
          <Lede wide>
            We used research as a decision filter. If a finding did not change the flow, hierarchy,
            content or error handling, it was not yet a design insight.
          </Lede>

          <Numbered
            items={[
              {
                title: 'Evidence before score',
                body: 'A number without its source sends instructors back to manual verification.',
              },
              {
                title: 'Uncertainty should route attention',
                body: 'Confidence matters only when it changes what the instructor reviews next.',
              },
              {
                title: 'The instructor remains the final authority',
                body: 'Accept, adjust, override and release must stay legible and accountable.',
              },
              {
                title: 'Calibration comes before scale',
                body: 'The system should learn how the instructor applies the rubric before grading a large batch.',
              },
              {
                title: 'Corrections should compound',
                body: 'Repeated interventions should improve rubrics, teaching, or future system behaviour.',
              },
            ]}
          />

          <p className="label mt-16 text-ink-500 md:mt-20">
            Research signal, design response, product moment
          </p>
          <SignalMap
            caption="How each research signal became a design response and a specific product moment"
            rows={[
              {
                signal: 'Handwritten and scanned work is common',
                response: 'Make extraction quality and missing pages visible',
                moment: 'Original and extracted document views',
              },
              {
                signal: 'Rubric freedom varies by institution',
                response: 'Support setup, normalisation and explicit criteria',
                moment: 'Assignment health and rubric setup',
              },
              {
                signal: 'Faculty cannot verify every AI score',
                response: 'Route attention to disagreement and uncertainty',
                moment: 'Calibration delta review and triage',
              },
              {
                signal: 'Step marking rewards process, not only answers',
                response: 'Keep criterion evidence and rationale inspectable',
                moment: 'Evidence-linked criterion scoring',
              },
              {
                signal: 'Overrides must remain meaningful',
                response: 'Keep instructor authority and record why it changed',
                moment: 'Adjust, accept, keep mine, and an audit trail',
              },
              {
                signal: 'Outcome Based Education requires traceability',
                response: 'Turn grading patterns into teaching and rubric actions',
                moment: 'Post-result insights',
              },
            ]}
          />
        </Slide>

        {/* ==================== 03, PRODUCT ARCHITECTURE ==================== */}
        <Slide id="architecture" chapter="03" height="auto">
          <Kicker n="03" label="Architecture" />
          <Headline>
            Supervision became the <span className="em">connective tissue</span> of the whole
            journey.
          </Headline>
          <Lede wide>
            The final prototype gives instructors control before evaluation, support while grading,
            and a way to act on patterns afterwards.
          </Lede>

          <Chain
            caption="The five moments of the instructor supervision workflow"
            items={[
              {
                name: 'Prepare',
                body: 'Define the assignment, expected artifacts, rubric and outcome mapping.',
              },
              {
                name: 'Calibrate',
                body: 'Compare instructor scoring with the system on a representative sample.',
                emphasis: true,
              },
              {
                name: 'Grade',
                body: 'Inspect the submission, criterion-level evidence, score, rationale and confidence.',
                emphasis: true,
              },
              {
                name: 'Resolve',
                body: 'Handle uncertainty, overrides, scan failures and re-evaluation requests.',
              },
              {
                name: 'Learn',
                body: 'Use repeated corrections and patterns to improve the next assessment cycle.',
              },
            ]}
            footnote="The instructor is never reduced to a final approve click. Judgment enters before, during and after evaluation. The two shaded moments are the ones this case study opens up."
          />

          <Callout label="Why the loop, not a review screen">
            A review screen alone would not solve rubric quality, calibration, appeals or repeated
            correction work. The end-to-end loop places human judgment where it adds value.
          </Callout>
        </Slide>

        {/* ======================= 03, CALIBRATION ======================= */}
        <Slide id="calibration" chapter="03" height="auto">
          <Kicker n="03" label="Key experience" />
          <Headline>
            We made <span className="em">disagreement useful</span>.
          </Headline>
          <Lede wide>
            Instead of asking instructors to inspect every AI-supported score, the calibration flow
            compares their ratings on a small sample and brings the meaningful differences forward.
            The instructor sees where the score diverged, which criterion caused it, and whether
            the gap is isolated or systematic.
          </Lede>
          <Lede wide>
            A generic confidence score would still leave the instructor asking, what do I do? So we
            designed calibration around concrete differences between human and system judgment. The
            gap itself becomes the queue, which makes review bounded and actionable.
          </Lede>

          <AnnotatedPlate
            plate={{
              src: calibration,
              alt: 'The calibration comparison screen. An aggregate delta of 29.2 percent against a 15 percent threshold sits above a matrix of four rubric criteria across six calibration papers, each cell showing the instructor score against the AI baseline and the absolute difference, with counts of perfect matches, minor variance and divergent scores below.',
              width: 3368,
              height: 1895,
              caption:
                'Calibration comparison. Six sample papers, four criteria, and the instructor score set beside the system baseline for every cell.',
              onOpen: open,
            }}
            callouts={[
              {
                title: 'Overall alignment gives context',
                body: 'The aggregate delta frames the batch. It is not permission to auto-approve, and the screen never offers that.',
              },
              {
                title: 'Criterion-level deltas show where interpretation differs',
                body: 'A single criterion out of alignment is a rubric wording problem. Four of them is a calibration problem. The matrix separates the two.',
              },
              {
                title: 'Review discrepancies turns disagreement into a task',
                body: 'The divergent cells become a finite queue with an end, rather than an instruction to look at everything again.',
              },
            ]}
          />

          <Callout label="Trust pattern">
            Do not ask users to trust the model. Let them shape the conditions under which they
            will rely on it.
          </Callout>
        </Slide>

        {/* ======================= 03, THE GRADING DESK ======================= */}
        <Slide id="grading" chapter="03" height="auto">
          <Kicker n="03" label="Key experience" />
          <Headline>
            We kept evidence, judgment and action <span className="em">together</span>.
          </Headline>
          <Lede wide>
            The grading desk was designed as a supervision surface, not a scorecard. The instructor
            can move between the original submission and the extracted content, see criterion-level
            scoring, inspect reasoning, link evidence, adjust the score, and retain internal
            context. The layout keeps the student&rsquo;s work visible while the rubric decision is
            being made.
          </Lede>

          <Plate
            src={grading}
            alt="The grading desk. A cohort triage sidebar of students with checkpoint counts sits on the left, the student submission with highlighted evidence passages fills the centre, and a rubric evaluation panel on the right shows the criterion, its score, detailed feedback, linked evidence, AI reasoning and an instructor-only notes area."
            width={2055}
            height={1158}
            className="mt-12 md:mt-16"
            caption="The grading desk. Cohort triage, the student's own work, and the criterion decision, all on screen at once, so a score can be defended without a full reread."
            onOpen={open}
          />

          <Notes
            items={[
              {
                title: 'Cohort triage',
                body: 'Directs attention to the submissions with uncertainty or validation issues, rather than presenting sixty identical rows.',
              },
              {
                title: 'Student evidence',
                body: 'Keeps the original work visible, which matters most for scanned and OCR-dependent submissions where extraction can be wrong.',
              },
              {
                title: 'Criterion control',
                body: 'Lets the instructor inspect evidence, reasoning, confidence and score, and change it, without losing the place they were reading.',
              },
            ]}
          />

          <div className="mt-14 max-w-3xl space-y-5 text-base leading-[1.6] text-ink-600 md:mt-16 md:text-lg">
            <p>
              Criterion-level evidence makes a score defensible without forcing a full reread of
              the paper.
            </p>
            <p>
              One-click adjustment preserves authority. The rationale and the audit history
              preserve accountability.
            </p>
            <p>
              Confidence is used to prioritise exceptions rather than to decorate every output.
            </p>
          </div>
        </Slide>

        {/* ==================== 03, APPEALS AND LEARNING ==================== */}
        <Slide id="appeals" chapter="03" height="auto">
          <Kicker n="03" label="Exceptions" />
          <Headline>
            A re-evaluation request is not just a <span className="em">support ticket</span>.
          </Headline>
          <Lede wide>
            An appeal may reveal a missed page, broken extraction, an ambiguous rubric, a feedback
            mismatch, a calculation issue, or a genuine grading dispute. We designed a review queue
            that separates these concerns and preserves their context, so oversight is possible
            without flattening every request into the same workflow.
          </Lede>
          <Lede wide>
            The system keeps the original score, the updated score, the reason, the evidence, the
            instructor identity and the timestamp. Post-evaluation patterns then help reveal where
            rubrics or teaching may need attention.
          </Lede>

          <AnnotatedPlate
            plate={{
              src: appeals,
              alt: 'The re-evaluation review queue. Counters for pending, due today, awaiting institutional review and resolved sit above a table of requests, each row showing the student, the assignment and criterion, the type of concern, the student reasoning, when it was submitted, and its status.',
              width: 3368,
              height: 1895,
              caption:
                'The re-evaluation desk. Each request carries its concern type, the criterion it disputes, and the student’s own reasoning, so the queue can be triaged rather than worked through in order.',
              onOpen: open,
            }}
            heading="How the queue is structured"
            callouts={[
              {
                title: 'The concern type is the sort key',
                body: 'A scan failure, an unclear rubric and a genuine dispute need different people and different fixes. Typing them at intake is what makes triage possible.',
              },
              {
                title: 'The student reasoning travels with the request',
                body: 'The instructor reads the claim in the student’s words next to the criterion it disputes, instead of opening a separate thread.',
              },
              {
                title: 'Ageing and escalation are visible',
                body: 'Overdue requests and anything awaiting institutional review are separated from new arrivals, because an appeal window is a deadline.',
              },
            ]}
          />

          <Callout label="Where the value is">
            Appeals, overrides and calibration gaps are not edge cases around the product. They are
            the product&rsquo;s highest-value learning signals.
          </Callout>
        </Slide>

        {/* ================ 04, DECISIONS AND TRADE-OFFS ================ */}
        <Slide id="decisions" chapter="04" height="auto">
          <Kicker n="04" label="Decisions" />
          <Headline>
            We chose transparency over <span className="em">theatre</span>.
          </Headline>

          <Decisions
            items={[
              {
                tension: 'Hide the AI to reduce fear?',
                verdict: 'No',
                body: 'Research showed real anxiety about replacement. But hiding the source of a recommendation would undermine informed supervision, so we name AI at decision moments and keep the instructor’s judgment primary.',
              },
              {
                tension: 'Automate missing rubric weights?',
                verdict: 'Make it visible',
                body: 'Equal weighting is treated as an assumption requiring review, not a silent default. Silent normalisation creates false confidence in a number nobody chose.',
              },
              {
                tension: 'Show every confidence signal?',
                verdict: 'No',
                body: 'Confidence appears when it changes review priority, explains uncertainty, or supports an appeal. Decorative percentages train people to ignore the ones that matter.',
              },
              {
                tension: 'Keep our module isolated?',
                verdict: 'No',
                body: 'Submission quality determines evaluation quality, and override patterns determine improvement. We designed explicit handshakes with both adjacent modules instead of three disconnected concepts.',
              },
              {
                tension: 'Optimise only for the happy path?',
                verdict: 'No',
                body: 'OCR failures, missing artifacts, ambiguous evidence, instructor and system disagreement, and appeals are core product states here, not exceptions bolted on at the end.',
              },
              {
                tension: 'Claim a time saving?',
                verdict: 'Not yet',
                body: 'Lower review effort is the intended value, but it was not measured in a field pilot. Expected value stays separate from validated outcome, on this page as well as in the product.',
              },
            ]}
          />
        </Slide>

        {/* ================= 04, OUTCOME AND VALIDATION ================= */}
        <Slide id="outcome" chapter="04" height="auto">
          <Kicker n="04" label="Outcome" />
          <Headline>
            What we delivered, and what we did not <span className="em">pretend to prove</span>.
          </Headline>

          <Ledger
            delivered={[
              'A development-ready interactive prototype spanning assignment preparation, calibration, grading, re-evaluation and result insights.',
              'Criterion-level states for evidence, confidence, scoring, overrides and internal instructor context.',
              'Cross-module data and decision handshakes, instead of three disconnected concepts.',
              'A research-backed direction grounded in Indian higher education, institution-level constraints and scanned handwritten work.',
              'Detailed workflows, error states, decision objects and audit requirements for handoff.',
            ]}
            validate={[
              {
                title: 'Comprehension',
                body: 'Can instructors explain why the system produced a score, and what needs review?',
              },
              {
                title: 'Efficiency',
                body: 'Does confidence-based triage reduce review time without increasing missed errors?',
              },
              {
                title: 'Control',
                body: 'Can instructors override and document decisions without losing context?',
              },
              {
                title: 'Consistency',
                body: 'Does calibration reduce variance across a grading batch?',
              },
              {
                title: 'Institutional fit',
                body: 'How should setup differ between affiliated and autonomous colleges?',
              },
              {
                title: 'Technical fit',
                body: 'How reliably can the product recover from handwritten OCR and missing-page failures?',
              },
            ]}
          />

          <Footnote>
            This case demonstrates workflow completeness, design rationale and a coherent
            human-in-the-loop model. It does not claim production adoption, measured accuracy, or
            measured time savings.
          </Footnote>
        </Slide>

        {/* ==================== 05, HOW I LED THE WORK ==================== */}
        <Slide id="leadership" chapter="05" height="auto">
          <Kicker n="05" label="Leadership" />
          <Headline>
            Shared structure. Distributed ownership.{' '}
            <span className="em">Frequent integration.</span>
          </Headline>
          <Lede wide>
            The project was too broad for one designer to own every workflow, but too
            interconnected for us to work as independent contributors. My role was to create enough
            structure for people to move quickly without losing the logic of one product.
          </Lede>

          <Chain
            caption="The team operating model, from a shared map to one reviewed product"
            items={[
              {
                name: 'Build the shared map',
                body: 'Research, system rules and dependencies visible to everyone.',
                emphasis: true,
              },
              {
                name: 'Assign clear ownership',
                body: 'Each designer carried a module or a critical workflow end to end.',
              },
              {
                name: 'Pair across boundaries',
                body: 'Owners reviewed adjacent flows where data and decisions crossed.',
              },
              {
                name: 'Integrate frequently',
                body: 'Shared language, states and interaction patterns stayed coherent.',
              },
              {
                name: 'Review as one product',
                body: 'The team critiqued decisions, not isolated screens or authors.',
              },
            ]}
            footnote="Ownership stayed distributed. Coherence and decision quality were the lead’s responsibility."
          />

          <p className="label mt-16 text-ink-500 md:mt-20">What I owned as lead</p>
          <ul className="mt-8 max-w-3xl space-y-5">
            {[
              'Framed the problem across the full three-module ecosystem before narrowing our scope.',
              'Led faculty research and brought institutional realities into product decisions.',
              'Facilitated whiteboarding to turn rules and findings into workflows, data objects, states and dependencies.',
              'Divided work by module and critical workflow, with clear owners and explicit handoffs.',
              'Paired designers across module boundaries and established regular peer reviews.',
              'Reviewed logic, edge cases, vocabulary and data exchanges, not only visual consistency.',
              'Integrated the final experience and protected one product narrative through the prototype and the presentation.',
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-foreground" />
                <span className="text-base leading-[1.55] md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <Principle>
            Give people ownership of the work. Keep ownership of coherence.
          </Principle>
        </Slide>

        {/* ================== 05, HOW THE TEAM MOVED ================== */}
        <Slide id="way-of-working" chapter="05" height="auto">
          <Kicker n="05" label="Way of working" />
          <Headline>
            From an ambiguous brief to <span className="em">one integrated product</span>.
          </Headline>

          <Numbered
            items={[
              {
                title: 'Ground the brief',
                body: 'Unpack the rules, assumptions and success conditions across all three projects.',
              },
              {
                title: 'Research the real context',
                body: 'Interview faculty and students. Understand policy, grading practices and institutional differences.',
              },
              {
                title: 'Externalise the system',
                body: 'Whiteboard evidence flows, rubric decisions, confidence, overrides, appeals and learning signals.',
              },
              {
                title: 'Divide by workflow, not by screen',
                body: 'Give modules and critical flows clear owners while making the dependencies explicit.',
              },
              {
                title: 'Pair and review',
                body: 'Review one another’s work where journeys and data cross module boundaries.',
              },
              {
                title: 'Converge on one product',
                body: 'Align vocabulary, states, navigation, interaction patterns and visual language.',
              },
              {
                title: 'Inspect end to end',
                body: 'Review the final prototype as an instructor journey, not a collection of assigned screens.',
              },
            ]}
          />

          <Footnote>
            Shared boards and critiques were not coordination overhead. They were how we prevented
            locally good screens from becoming a fragmented product.
          </Footnote>
        </Slide>

        {/* ====================== 05, REFLECTION ====================== */}
        <Slide id="reflection" chapter="05" height="auto" invert>
          <Kicker n="05" label="Reflection" />
          <Headline size="large">
            The best design decision was changing{' '}
            <span className="em">what we believed the product was</span>.
          </Headline>
          <Lede wide>
            At the beginning, EducAItors looked like an AI-assisted grading workflow. After
            research and system mapping, I saw it differently: it was an accountability system for
            academic judgment. That shift made calibration, evidence, re-evaluation and learning
            central rather than secondary.
          </Lede>
          <Lede wide>
            Leading the team reinforced a second lesson. Modular ownership works only when
            integration is designed into the process. Shared boards, explicit handoffs and peer
            reviews were how we kept the product coherent while letting each designer own
            meaningful work.
          </Lede>

          <p className="label mt-16 text-ink-500 md:mt-20">What I would do next</p>
          <Numbered
            size="compact"
            items={[
              {
                title: 'Test calibration language with instructors at different levels of AI familiarity.',
              },
              {
                title: 'Prototype explicitly for affiliated-college constraints, where teachers may not control the rubric.',
              },
              {
                title: 'Validate OCR recovery and missed-page workflows with real handwritten submissions.',
              },
              {
                title: 'Separate teaching signals from rubric-quality signals through longitudinal research.',
              },
              {
                title: 'Define institutional governance for overrides, appeals, audit access and escalation before production.',
              },
            ]}
          />

          <p className="mt-16 max-w-[24ch] text-[2rem] leading-[1.05] md:mt-24 md:text-[3.5rem]">
            AI earns a place in high-stakes education only when human judgment becomes more
            visible, not less.
          </p>

          <nav
            aria-label="Continue"
            className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 md:mt-20"
          >
            <PrototypeLink href={PROTOTYPE_URL} className="text-lg">
              View the live prototype
            </PrototypeLink>
            <Link to="/#work" className="rule-link text-lg text-ink-600">
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

export default EducaitorsCaseStudy;
