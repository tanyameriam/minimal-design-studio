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
 * EducAItors, told in the language of the work rather than the language of
 * a conference talk.
 *
 * Rewritten on 9 September 2026 against Tanya's brief. The previous version
 * was accurate but reached for slogans that made concrete product work
 * sound conceptual: "the trust layer", "defensible judgment", "a chain of
 * knowledge quality", "supervise uncertainty at scale", "we made
 * disagreement useful", "transparency over theatre", "appeals are the
 * product's highest-value learning signals", and an AI-policy line to
 * close on. Every one of those ideas is still on the page. Each is now
 * stated as what was actually built and why.
 *
 * The structural changes that came with it: the calibration reasoning is
 * separated from the calibration screen so the screen can carry itself; the
 * instructor's own actions get their own section rather than being implied;
 * the outcome splits into what was delivered and what is still unvalidated;
 * and personal contribution is stated separately from the team's, because
 * this is the one study where Tanya led rather than executed alone.
 *
 * Three rules govern the writing, unchanged.
 *
 * 1. Nothing here was deployed. The deliverable was an interactive
 *    prototype, so there is no adoption, accuracy or time-saving figure
 *    anywhere on the page, and the outcome section says so in as many words
 *    rather than leaving a reader to infer it.
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
    name: 'The work',
    target: 'overview',
    slides: [{ id: 'overview', title: 'When a score deserves to be accepted' }],
  },
  {
    n: '02',
    name: 'Research',
    target: 'research',
    slides: [
      { id: 'research', title: 'How evaluation works in Indian colleges' },
      { id: 'requirements', title: 'Findings turned into requirements' },
      { id: 'question', title: 'The product question changed' },
    ],
  },
  {
    n: '03',
    name: 'The product',
    target: 'calibration',
    slides: [
      { id: 'calibration', title: 'Calibration before full-batch grading' },
      { id: 'why-calibration', title: 'Why a confidence score was not enough' },
      { id: 'grading', title: 'The grading workspace' },
      { id: 'authority', title: 'The instructor decides' },
      { id: 'appeals', title: 'Re-evaluation is part of the product' },
      { id: 'patterns', title: 'Corrections should not disappear' },
    ],
  },
  {
    n: '04',
    name: 'Scope and decisions',
    target: 'decisions',
    slides: [
      { id: 'decisions', title: 'What we chose not to automate' },
      { id: 'architecture', title: 'Connecting three modules' },
    ],
  },
  {
    n: '05',
    name: 'Leading it',
    target: 'leadership',
    slides: [
      { id: 'leadership', title: 'How I led the team' },
      { id: 'contribution', title: 'What I personally worked on' },
    ],
  },
  {
    n: '06',
    name: 'Outcome',
    target: 'outcome',
    slides: [
      { id: 'outcome', title: 'What we delivered' },
      { id: 'validate', title: 'What still needs validating' },
      { id: 'reflection', title: 'Reflection' },
      { id: 'closing', title: 'Closing' },
    ],
  },
];

const PROTOTYPE_URL = 'https://wed-one-livid.vercel.app/dashboard';

const EducaitorsCaseStudy = () => {
  const { figure, open, close } = useLightbox();
  const { prev, next } = adjacentCaseStudies('educaitors');

  usePageMeta(
    'EducAItors',
    'Designing how instructors review and control AI-supported grading. Led the Instructor Evaluation and Supervision module, from faculty research in Indian higher education through to an interactive prototype covering calibration, grading, re-evaluation and result insights.'
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
          <div className="mx-auto w-full max-w-[var(--shell)] px-5 py-20 md:px-8 md:py-28 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_minmax(0,1fr)] lg:gap-20">
              <div>
                <StudyOpening
                  slug="educaitors"
                  client="EducAItors &middot; Higher education &middot; 2026"
                  headline={
                    <>
                      Designing how instructors <span className="em">review and control</span>{' '}
                      AI-supported grading.
                    </>
                  }
                />

                <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                  <p>
                    EducAItors was an academic project exploring how AI could support assessment in
                    higher education. The broader product was divided into three connected modules:
                    submission readiness, instructor evaluation and supervision, and continuous
                    improvement.
                  </p>
                  <p className="text-foreground">
                    I led the team working on Instructor Evaluation and Supervision, the part of
                    the system where instructors review evidence, compare scores, handle
                    uncertainty, override results and approve final grades.
                  </p>
                  <p>
                    Research with faculty in Indian colleges changed the direction of the work. The
                    challenge was not simply making grading faster. Instructors needed to
                    understand how a score had been reached, and remain responsible for the final
                    decision.
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
                    Research &middot; Systems thinking &middot; Workflow design &middot; Interaction
                    design &middot; Team leadership &middot; Integration
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
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Outcome</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Interactive prototype spanning setup, calibration, grading, re-evaluation and
                    result insights
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

            <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
              <Plate
                src={calibration}
                alt="The calibration comparison screen, showing instructor scores against the system baseline across four criteria and six sample papers."
                width={3368}
                height={1895}
                caption="Calibration comparison"
                onOpen={open}
              />
              <Plate
                src={grading}
                alt="The grading desk, showing cohort triage, the student submission and a rubric evaluation panel side by side."
                width={2055}
                height={1158}
                caption="The grading desk"
                onOpen={open}
              />
              <Plate
                src={appeals}
                alt="The re-evaluation review queue, showing requests by concern type, disputed criterion, status and ageing."
                width={3368}
                height={1895}
                caption="Re-evaluation queue"
                onOpen={open}
              />
            </div>
          </div>
        </section>

        {/* ========================= 01, THE WORK =========================== */}
        <Slide id="overview" chapter="01" height="auto">
          <Kicker n="01" label="The project in 30 seconds" />
          <Headline size="large">
            The challenge was not generating a score. It was deciding when that score{' '}
            <span className="em">deserved to be accepted</span>.
          </Headline>
          <Lede wide>
            The system needed to support instructors across five moments. Our module focused mainly
            on the middle of that journey, but we designed its handoffs with the modules before and
            after it.
          </Lede>

          <Chain
            caption="The five moments of the instructor workflow, and the three our team owned most directly"
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
                body: 'Review the student’s work, the criterion-level evidence and the proposed score.',
                emphasis: true,
              },
              {
                name: 'Resolve',
                body: 'Handle uncertain cases, overrides, scan failures and re-evaluation requests.',
                emphasis: true,
              },
              {
                name: 'Learn',
                body: 'Use repeated corrections and assessment patterns to improve future grading and teaching.',
              },
            ]}
            footnote="The three shaded moments are the ones this case study opens up. The instructor is never reduced to a final approve click: judgment enters before, during and after evaluation."
          />
        </Slide>

        {/* ========================= 02, RESEARCH =========================== */}
        <Slide id="research" chapter="02" height="auto">
          <Kicker n="02" label="Starting with the real context" />
          <Headline>
            We studied how evaluation actually happens in{' '}
            <span className="em">Indian colleges</span>.
          </Headline>
          <Lede wide>
            I interviewed three faculty members at autonomous colleges in Kerala, including a vice
            principal. Other team members added perspectives from instructors and students. We
            combined those conversations with desk research on NEP 2020, Outcome Based Education,
            Bloom&rsquo;s Taxonomy, accreditation requirements, rubric standards, AI-supported
            grading and faculty trust.
          </Lede>

          <BigQuote source="Vice principal, autonomous college">
            We are not just grading the student&rsquo;s answer. We are measuring whether our
            teaching achieved what the course was designed to achieve.
          </BigQuote>

          <Methods
            items={[
              'Faculty interviews',
              'Student perspectives',
              'Policy desk research',
              'Rubric and OBE standards',
              'Competitive review',
            ]}
          />

          <p className="label mt-16 text-ink-500 md:mt-20">
            Four constraints that mattered directly to the product
          </p>
          <Notes
            columns={2}
            items={[
              {
                title: 'Institution type changes what instructors control',
                body: 'Affiliated, deemed and autonomous colleges do not all create and use rubrics in the same way. The product could not assume every instructor had full freedom over assessment setup.',
              },
              {
                title: 'Student work is not always clean digital input',
                body: 'Handwritten assignments photographed or scanned into PDFs are still common. Instructors needed access to the original submission as well as any extracted text.',
              },
              {
                title: 'Teachers often grade reasoning, not just the final answer',
                body: 'Step marking can reward method even when the final answer is wrong. Evaluation had to work at criterion and evidence level rather than reducing everything to one number.',
              },
              {
                title: 'Instructors cannot manually verify every automated score',
                body: 'If the product asked teachers to re-grade every paper, it would remove most of the intended efficiency. The interface had to help them decide where to look first.',
              },
            ]}
          />

          <SmallQuote source="Professor, Kerala">
            If students type, they use ChatGPT. So we ask them to handwrite, photograph it, and
            upload it.
          </SmallQuote>
        </Slide>

        <Slide id="requirements" chapter="02" height="auto">
          <Kicker n="02" label="Turning research into design requirements" />
          <Headline>
            Each finding had to <span className="em">change the interaction</span>.
          </Headline>
          <Lede wide>
            Rather than treating the research as background, we translated every finding into a
            specific design response and the place in the product where it shows up. If a finding
            did not change the flow, hierarchy, content or error handling, it was not yet a design
            insight.
          </Lede>

          <SignalMap
            caption="Each research finding, the design response it produced, and where it appears in the product"
            rows={[
              {
                signal: 'Extraction from handwritten and scanned work can be incomplete or wrong',
                response: 'Keep the original document available alongside the extracted content',
                moment: 'Original and extracted document views',
              },
              {
                signal: 'Not every instructor controls the assessment structure',
                response: 'Make rubric setup and assumptions explicit rather than silently normalising them',
                moment: 'Assignment health and rubric setup',
              },
              {
                signal: 'Reviewing every suggested score defeats the purpose',
                response: 'Direct attention toward disagreement, uncertainty and validation issues',
                moment: 'Calibration comparison and cohort triage',
              },
              {
                signal: 'Teachers need to understand how the answer relates to the criterion',
                response: 'Link scores to criterion-level evidence and reasoning',
                moment: 'Evidence-linked criterion scoring',
              },
              {
                signal: 'Instructors remain accountable for the final grade',
                response: 'Allow accept, adjust and override while preserving the reason and audit history',
                moment: 'Instructor actions and audit trail',
              },
              {
                signal: 'Outcome Based Education requires traceability',
                response: 'Turn grading patterns into teaching and rubric actions',
                moment: 'Post-result insights',
              },
            ]}
          />
        </Slide>

        <Slide id="question" chapter="02" height="auto" invert>
          <Kicker n="02" label="The product question changed" />
          <Headline size="large">
            We stopped treating the product as an <span className="em">automated gradebook</span>.
          </Headline>
          <Lede wide>
            The initial brief was easy to read as a grading workflow: a student submits work, the
            system evaluates it, the instructor reviews it, the result is released. Research made
            that too simplistic. A proposed score was only useful if the instructor could answer
            six questions about it.
          </Lede>

          <Numbered
            size="compact"
            items={[
              { title: 'What evidence is this based on?' },
              { title: 'Which rubric criterion is being applied?' },
              { title: 'Where is the system uncertain?' },
              { title: 'Where does my judgment differ?' },
              { title: 'Can I change it?' },
              { title: 'Will that decision be recorded?' },
            ]}
          />

          <Principle>
            Reduce unnecessary rechecking, while keeping academic judgment visible and
            controllable.
          </Principle>
        </Slide>

        {/* ======================== 03, THE PRODUCT ========================= */}
        <Slide id="calibration" chapter="03" height="auto">
          <Kicker n="03" label="Calibration before full-batch grading" />
          <Headline>
            We used <span className="em">disagreement</span> to decide what needed review.
          </Headline>
          <Lede wide>
            Before grading a full batch, the instructor reviews a smaller representative sample.
            The system then compares the instructor score against its own result at criterion
            level. Instead of showing one generic confidence score, the interface highlights where
            the two differ.
          </Lede>
          <Lede wide>
            That lets the instructor tell apart a criterion being interpreted differently, a
            disagreement repeating across several papers, a broader calibration problem, and a case
            that simply needs manual review.
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
                title: 'Overall alignment',
                body: 'The aggregate delta gives context for the sample. It is not permission to auto-approve, and the screen never offers that.',
              },
              {
                title: 'Criterion-level differences',
                body: 'One criterion out of alignment is usually a rubric wording problem. Four of them is a calibration problem. The matrix separates the two.',
              },
              {
                title: 'Review discrepancies',
                body: 'The divergent cells become a finite review queue with an end, rather than an instruction to look at everything again.',
              },
            ]}
          />
        </Slide>

        <Slide id="why-calibration" chapter="03" height="auto">
          <Kicker n="03" label="Why this mattered" />
          <Headline>
            A confidence percentage alone would not tell the instructor{' '}
            <span className="em">what to do next</span>.
          </Headline>
          <Lede wide>
            A number such as 78 percent confidence still leaves the practical question unanswered:
            should I review this paper or not? Using the differences between instructor and system
            scoring instead turns the same uncertainty into a review process someone can act on.
          </Lede>

          <Statement>
            The goal was not to ask instructors to trust the system. It was to make it easier to
            see when their judgment was needed.
          </Statement>
        </Slide>

        <Slide id="grading" chapter="03" height="auto">
          <Kicker n="03" label="The grading workspace" />
          <Headline>
            The student&rsquo;s work, the evidence and the decision,{' '}
            <span className="em">in the same view</span>.
          </Headline>
          <Lede wide>
            The grading desk was designed so the instructor did not have to jump between screens to
            verify a score. They can inspect the evidence, change the score and record the reason
            without losing their place in the submission.
          </Lede>

          <Plate
            src={grading}
            alt="The grading desk. A cohort triage sidebar of students with checkpoint counts sits on the left, the student submission with highlighted evidence passages fills the centre, and a rubric evaluation panel on the right shows the criterion, its score, detailed feedback, linked evidence, AI reasoning and an instructor-only notes area."
            width={2055}
            height={1158}
            className="mt-12 md:mt-16"
            caption="The grading desk. Cohort triage, the student's own work, and the criterion decision, all on screen at once."
            onOpen={open}
          />

          <Notes
            items={[
              {
                title: 'Cohort triage',
                body: 'Shows which submissions carry uncertainty, validation issues or another reason for review, rather than presenting sixty identical rows.',
              },
              {
                title: 'Original student evidence',
                body: 'Keeps the original document visible, which matters most for scanned and handwritten submissions where the extracted text may be incomplete.',
              },
              {
                title: 'Criterion review and action',
                body: 'Shows the criterion, the proposed score, the evidence, the reasoning, the confidence, and the instructor action, in one panel.',
              },
            ]}
          />
        </Slide>

        <Slide id="authority" chapter="03" height="auto">
          <Kicker n="03" label="Who decides" />
          <Headline>
            Automation could assist the evaluation. It could not own{' '}
            <span className="em">the final grade</span>.
          </Headline>
          <Lede wide>
            We kept explicit instructor actions in the flow, and made a changed score carry the
            record of why it changed. That made the decision traceable without forcing the
            instructor into a separate administrative workflow.
          </Lede>

          <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Accept', 'Take the proposed score as it stands.'],
              ['Adjust', 'Change the score against the criterion, in place.'],
              ['Override', 'Replace the system result with the instructor’s own judgment.'],
              ['Release', 'Publish the result. Always an instructor action.'],
            ].map(([action, body]) => (
              <div key={action} className="bg-background p-5 md:p-6">
                <p className="text-xl leading-snug md:text-2xl">{action}</p>
                <p className="mt-4 text-sm leading-[1.5] text-ink-600 md:text-base">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l border-foreground p-6 pl-6 md:p-8 md:pl-8">
            <p className="label-strong">What a changed score preserves</p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {[
                'The original value',
                'The updated value',
                'The reason',
                'The evidence',
                'Instructor identity',
                'Timestamp',
              ].map((item) => (
                <li key={item} className="text-base leading-snug md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Slide>

        <Slide id="appeals" chapter="03" height="auto">
          <Kicker n="03" label="Re-evaluation is part of the product" />
          <Headline>
            An appeal can expose <span className="em">different kinds of problems</span>.
          </Headline>
          <Lede wide>
            A re-evaluation request does not always mean the original score was wrong. It could
            point to a missing page, broken extraction, an ambiguous rubric, incorrect feedback, a
            calculation issue, or a genuine grading disagreement. So the review queue keeps those
            concerns distinct instead of flattening every request into one workflow.
          </Lede>

          <AnnotatedPlate
            plate={{
              src: appeals,
              alt: 'The re-evaluation review queue. Counters for pending, due today, awaiting institutional review and resolved sit above a table of requests, each row showing the student, the assignment and criterion, the type of concern, the student reasoning, when it was submitted, and its status.',
              width: 3368,
              height: 1895,
              caption:
                'The re-evaluation desk. Each request carries its concern type, the criterion it disputes, and the student’s own reasoning.',
              onOpen: open,
            }}
            heading="How the queue is structured"
            callouts={[
              {
                title: 'Concern type',
                body: 'A scan failure, an unclear rubric and a genuine dispute need different people and different fixes, so typing them at intake is what lets them be routed differently.',
              },
              {
                title: 'Student reasoning',
                body: 'Keeps the request attached to the actual criterion being disputed, in the student’s own words, instead of in a separate thread.',
              },
              {
                title: 'Ageing and escalation',
                body: 'Overdue requests and anything awaiting institutional review are separated from new arrivals, because an appeal window is a deadline.',
              },
            ]}
          />
        </Slide>

        <Slide id="patterns" chapter="03" height="auto">
          <Kicker n="03" label="After the case is closed" />
          <Headline>
            Repeated corrections can reveal a problem with{' '}
            <span className="em">more than one grade</span>.
          </Headline>
          <Lede wide>
            If instructors keep changing the same criterion, several things might be happening: the
            rubric wording is unclear, teaching may not align with the intended outcome, the system
            is interpreting the criterion differently, or extraction is failing consistently. That
            is why the product included a post-evaluation layer. The goal was to help instructors
            see patterns worth acting on before the next assessment cycle, rather than treating
            every override as an isolated correction.
          </Lede>

          <Plate
            src={home}
            alt="The instructor home screen, with result insights and pattern alerts surfaced alongside active assignment progress."
            width={3059}
            height={1684}
            className="mt-12 md:mt-16"
            caption="Result insights sit on the instructor home, next to the work in progress, so a pattern is something you meet rather than something you go looking for."
            onOpen={open}
          />
        </Slide>

        {/* ==================== 04, SCOPE AND DECISIONS ===================== */}
        <Slide id="decisions" chapter="04" height="auto">
          <Kicker n="04" label="Decisions" />
          <Headline>
            What we chose <span className="em">not to automate</span>.
          </Headline>
          <Lede wide>
            Several decisions were about where automation should stop. Each of these could have
            been made the other way, and each would have made the product feel smoother and trust
            it less.
          </Lede>

          <Decisions
            items={[
              {
                tension: 'Hide that AI is involved?',
                verdict: 'No',
                body: 'Research showed real anxiety about replacement. But if the system contributes to a grading recommendation, the instructor should know where that recommendation came from.',
              },
              {
                tension: 'Automatically resolve missing rubric weights?',
                verdict: 'No',
                body: 'Equal weighting may be reasonable, but it should remain an explicit assumption the instructor can see and change, rather than becoming a silent default nobody chose.',
              },
              {
                tension: 'Show confidence everywhere?',
                verdict: 'No',
                body: 'Confidence is useful when it changes what needs attention. Putting a percentage on every output would add noise, and train people to ignore the ones that matter.',
              },
              {
                tension: 'Treat OCR failures as edge cases?',
                verdict: 'No',
                body: 'Scanned and handwritten submissions were common enough that extraction failures had to be designed into the main workflow rather than bolted on at the end.',
              },
              {
                tension: 'Auto-approve when instructor and system align?',
                verdict: 'No',
                body: 'Alignment reduces review effort, which is the point of calibration. But the final release stays an instructor action.',
              },
            ]}
          />
        </Slide>

        <Slide id="architecture" chapter="04" height="auto">
          <Kicker n="04" label="Scope" />
          <Headline>
            Our module could not work <span className="em">independently</span>.
          </Headline>
          <Lede wide>
            Submission quality determines evaluation quality, and instructor corrections determine
            what improves next. Those two integration points meant we needed shared states,
            vocabulary and data handoffs across all three modules, rather than three good concepts
            that did not meet.
          </Lede>

          <Chain
            caption="The three connected modules of EducAItors and the moment each one owns"
            columns={3}
            items={[
              {
                name: 'Submission readiness',
                body: 'Student work is checked for missing, blocked or unreadable evidence before evaluation starts.',
              },
              {
                name: 'Evaluation and supervision',
                body: 'Instructors calibrate, inspect evidence, change results and release grades. My team’s primary scope.',
                emphasis: true,
              },
              {
                name: 'Continuous improvement',
                body: 'Corrections and patterns feed future rubric, teaching and evaluation decisions.',
              },
            ]}
            footnote="The shaded block is the one my team owned, and we designed its handshakes with both neighbours: submission quality flows in, instructor corrections flow out."
          />
        </Slide>

        {/* ======================== 05, LEADING IT ========================== */}
        <Slide id="leadership" chapter="05" height="auto">
          <Kicker n="05" label="How I led the team" />
          <Headline>
            The project was too connected for each designer to{' '}
            <span className="em">work independently</span>.
          </Headline>
          <Lede wide>
            The work was divided across several modules and workflows. My role as lead was not to
            design every screen. It was to make sure the pieces still became one product.
          </Lede>

          <p className="label mt-16 text-ink-500 md:mt-20">What I led</p>
          <ul className="mt-8 max-w-3xl space-y-5">
            {[
              'Framing the complete system before narrowing to our module.',
              'Part of the faculty research, and bringing institutional realities into product decisions.',
              'Whiteboarding sessions that turned rules and findings into workflows, data objects and states.',
              'Workflow and dependency mapping across the three modules.',
              'Assignment of module and workflow ownership.',
              'Cross-module reviews at the points where information crossed a boundary.',
              'Vocabulary and state alignment.',
              'Integration of the final experience.',
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-foreground" />
                <span className="text-base leading-[1.55] md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <p className="label mt-16 text-ink-500 md:mt-20">How we worked</p>
          <Numbered
            items={[
              {
                title: 'Build a shared map',
                body: 'Research, system rules and dependencies visible to the whole team.',
              },
              {
                title: 'Assign clear workflow ownership',
                body: 'Each designer carried a meaningful piece end to end.',
              },
              {
                title: 'Review across boundaries',
                body: 'Adjacent module owners reviewed the points where information crossed.',
              },
              {
                title: 'Integrate frequently',
                body: 'Navigation, vocabulary, states and interaction patterns were aligned throughout the project, not at the end.',
              },
              {
                title: 'Review as one product',
                body: 'Final critique focused on the instructor journey, not on who had designed each screen.',
              },
            ]}
          />

          <Principle>
            Give people ownership of the work. Keep ownership of coherence.
          </Principle>
        </Slide>

        <Slide id="contribution" chapter="05" height="auto">
          <Kicker n="05" label="What I personally worked on" />
          <Headline>My contribution</Headline>

          <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                'Research',
                [
                  'Faculty interviews',
                  'Synthesis',
                  'Institutional constraints',
                  'Workflow implications',
                ],
              ],
              [
                'Product framing',
                [
                  'Evaluation and supervision scope',
                  'The decision flow',
                  'Calibration logic',
                  'Review and override states',
                ],
              ],
              [
                'Interaction design',
                [
                  'Grading workflow',
                  'Calibration',
                  'Evidence review',
                  'Re-evaluation',
                  'Instructor actions',
                ],
              ],
              [
                'Leadership',
                ['Whiteboarding', 'Task ownership', 'Cross-team reviews', 'Integration'],
              ],
              [
                'Final delivery',
                [
                  'Prototype integration',
                  'Workflow completeness',
                  'Product narrative',
                  'Presentation',
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
            <div className="bg-background p-5 md:p-6">
              <p className="label text-ink-500">Developed by the team</p>
              <ul className="mt-6 space-y-2.5">
                {[
                  'The broader three-module ecosystem',
                  'Shared research',
                  'Adjacent workflows',
                  'Final visual language',
                  'The overall prototype',
                ].map((item) => (
                  <li key={item} className="text-base leading-snug text-ink-500 md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Slide>

        {/* ========================= 06, OUTCOME =========================== */}
        <Slide id="outcome" chapter="06" height="auto">
          <Kicker n="06" label="Outcome" />
          <Headline>
            An interactive prototype, and an <span className="em">academic one</span>.
          </Headline>
          <Lede wide>
            The work established a coherent direction for instructor supervision. It was a
            prototype rather than a deployed product, and the page separates those two things
            deliberately.
          </Lede>

          <Ledger
            delivered={[
              'An interactive prototype covering assignment preparation, calibration, grading, re-evaluation and result insights.',
              'Criterion-level evidence, confidence and disagreement states.',
              'Instructor overrides with the reason, the evidence and the audit information preserved.',
              'Cross-module data and decision handoffs, instead of three disconnected concepts.',
              'A research-backed direction grounded in Indian higher education, institution-level constraints and scanned handwritten work.',
              'Detailed workflows, error states, decision objects and audit requirements for handoff.',
            ]}
            notClaimed={{
              note: 'It was an academic prototype, never run with real cohorts, so none of these were measured.',
              items: [
                'Grading-time reduction',
                'Production accuracy',
                'Live adoption',
                'Improvement in consistency',
                'Instructor trust',
              ],
            }}
          />
        </Slide>

        <Slide id="validate" chapter="06" height="auto">
          <Kicker n="06" label="What still needs to be validated" />
          <Headline>
            The next questions are <span className="em">practical, not conceptual</span>.
          </Headline>

          <Notes
            items={[
              {
                title: 'Comprehension',
                body: 'Can instructors explain why a particular score was suggested?',
              },
              {
                title: 'Review effort',
                body: 'Does calibration and triage actually reduce how much work instructors need to recheck?',
              },
              {
                title: 'Control',
                body: 'Can instructors override decisions without losing context?',
              },
              {
                title: 'Consistency',
                body: 'Does calibration reduce scoring variation across a batch?',
              },
              {
                title: 'Institutional fit',
                body: 'How should the system change for affiliated colleges, where instructors may not control the rubric?',
              },
              {
                title: 'Technical fit',
                body: 'How reliable are handwritten OCR and missing-page recovery on real submissions?',
              },
            ]}
          />
        </Slide>

        <Slide id="reflection" chapter="06" height="auto">
          <Kicker n="06" label="Reflection" />
          <Headline>
            The biggest change was where we placed{' '}
            <span className="em">the instructor&rsquo;s judgment</span>.
          </Headline>
          <Lede wide>
            At the beginning we were thinking mostly about an AI-supported grading flow. After
            research and system mapping, the instructor&rsquo;s role became much more explicit.
            Their judgment needed to appear before grading, through rubric setup and calibration;
            during grading, through evidence review, adjustments and overrides; and after grading,
            through re-evaluation and repeated correction patterns. That shift changed the product
            more than any individual screen.
          </Lede>
          <Lede wide>
            The second lesson came from leading the team. Dividing the project into modules made
            the work manageable, but it also created a risk of three good concepts becoming three
            different products. Shared maps, explicit handoffs and frequent integration reviews
            were what kept the final system coherent.
          </Lede>

          <Footnote>
            Shared boards and critiques were not coordination overhead. They were how we stopped
            locally good screens from adding up to a fragmented product.
          </Footnote>
        </Slide>

        <Slide id="closing" chapter="06" height="auto" invert>
          <p className="label text-ink-500">In closing</p>

          <p className="mt-10 max-w-[22ch] text-[2rem] leading-[1.05] md:text-[3.5rem]">
            The system could propose a score.{' '}
            <span className="em">The instructor still had to understand and own the decision.</span>
          </p>

          <p className="mt-12 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            EducAItors became a project about designing the review process around automated
            evaluation, rather than automating the instructor out of it.
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
