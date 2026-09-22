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
    slides: [{ id: 'overview', title: 'When should a grade be trusted?' }],
  },
  {
    n: '02',
    name: 'Research',
    target: 'research',
    slides: [
      { id: 'research', title: 'How grading works in Indian colleges' },
      { id: 'requirements', title: 'Turning what we learned into rules for the design' },
      { id: 'question', title: 'The product question changed' },
    ],
  },
  {
    n: '03',
    name: 'The product',
    target: 'calibration',
    slides: [
      { id: 'calibration', title: 'A practice round before grading everything' },
      { id: 'why-calibration', title: 'Why a “how sure” number was not enough' },
      { id: 'grading', title: 'The grading screen' },
      { id: 'authority', title: 'The teacher decides' },
      { id: 'appeals', title: 'Regrade requests are part of the product' },
      { id: 'patterns', title: 'Corrections should not disappear' },
    ],
  },
  {
    n: '04',
    name: 'Scope and decisions',
    target: 'decisions',
    slides: [
      { id: 'decisions', title: 'What we chose not to automate' },
      { id: 'architecture', title: 'Joining up three parts' },
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
      { id: 'validate', title: 'What we still need to test' },
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
    'Helping teachers stay in charge when AI helps with grading. I led the part where teachers review grades, from research with college teachers in India to an interactive prototype covering a practice round, grading, regrade requests and what the results show.'
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
          <div className="mx-auto w-full max-w-[var(--shell)] px-gutter py-section">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_minmax(0,1fr)] lg:gap-20">
              <div>
                <StudyOpening
                  slug="educaitors"
                  client="EducAItors &middot; Colleges and universities &middot; 2026"
                  headline={
                    <>
                      Keeping <span className="em">teachers in charge</span> when AI helps with
                      grading.
                    </>
                  }
                  takeaways={{
                    problem:
                      'Teachers did not need grading to be faster. They needed to see how a grade was worked out, and to stay responsible for it.',
                    did: 'Led the part where teachers review grades: reviewing the evidence behind a suggested grade, comparing scores, changing grades and approving the final grade.',
                    outcome:
                      'An interactive prototype where the AI suggests and the teacher decides. A university project, never launched.',
                  }}
                />

                <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                  <p>
                    EducAItors was a university project about how AI could help with grading in
                    colleges. The whole product had three connected parts: checking that student work
                    is ready, teachers reviewing and approving grades, and learning from the results to
                    get better over time.
                  </p>
                  <p className="text-foreground">
                    I led the team working on the teacher review part. That is where teachers look at
                    the proof, compare scores, deal with unclear cases, change grades and approve the
                    final ones.
                  </p>
                  {/* What this paragraph said - that the problem was not speed
                      but accountability - is now the takeaway's first line. The
                      provenance is the part worth keeping: it came out of the
                      research, not out of the brief. */}
                  <p>Talking to teachers in Indian colleges changed the direction of the work.</p>
                </div>

                <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                  <PrototypeLink href={PROTOTYPE_URL} className="text-lg md:text-xl">
                    Try the interactive prototype
                  </PrototypeLink>
                  <a href="#overview" className="rule-link text-lg text-ink-600">
                    Keep reading <span aria-hidden="true">&darr;</span>
                  </a>
                </div>
              </div>

              <dl className="grid gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-2">
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Team lead and product designer, teacher review and approval
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Scope</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Research &middot; Seeing the whole system &middot; Planning how work flows &middot;
                    Designing how it works &middot; Leading the team &middot; Joining the parts up
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Context</dt>
                  <dd className="text-base leading-snug md:text-lg">A master’s degree project</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Team</dt>
                  <dd className="text-base leading-snug md:text-lg">Designers working across all three parts</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Outcome</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    An interactive prototype covering setup, a practice round, grading, regrade requests
                    and what the results show
                  </dd>
                </div>
              </dl>

              <CaseStudyEntry scanMinutes={5} readMinutes={13} />
            </div>

            <Plate
              src={home}
              alt="The EducAItors teacher home screen, with buttons to prepare an assignment, open the grading desk and see what the results show, next to the progress of current assignments and system messages."
              width={3059}
              height={1684}
              priority
              className="mt-stage"
              caption="The teacher home. Preparing, grading and results are three doors into the same review process, and warnings from the practice round and repeated patterns are shown up front, not hidden."
              onOpen={open}
            />

            <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
              <Plate
                src={calibration}
                alt="The practice round screen, showing the teacher’s scores next to the AI’s scores for four grading rules across six sample papers."
                width={3368}
                height={1895}
                caption="Practice round comparison"
                onOpen={open}
              />
              <Plate
                src={grading}
                alt="The grading desk, showing which students need attention first, the student’s work, and a grading panel side by side."
                width={2055}
                height={1158}
                caption="The grading desk"
                onOpen={open}
              />
              <Plate
                src={appeals}
                alt="The list of regrade requests, showing each one by type of problem, the grading rule in question, its status and how long it has been waiting."
                width={3368}
                height={1895}
                caption="Regrade requests"
                onOpen={open}
              />
            </div>
          </div>
        </section>

        {/* ========================= 01, THE WORK =========================== */}
        <Slide id="overview" chapter="01" height="auto">
          <Kicker n="01" label="The project in 30 seconds" />
          <Headline size="large">
            The hard part was not making a grade. It was deciding when that grade{' '}
            <span className="em">could be trusted</span>.
          </Headline>
          <Lede wide>
            The system had to help teachers at five moments. Our part focused mainly on the
            middle of that journey, but we designed how it hands over to the parts before and
            after it.
          </Lede>

          <Chain
            caption="The five moments in a teacher’s work, and the three our team was mainly in charge of"
            items={[
              {
                name: 'Prepare',
                body: 'Set up the assignment, what students should hand in, the grading rules, and what students should learn.',
              },
              {
                name: 'Calibrate',
                body: 'Compare the teacher’s grades with the AI’s on a few typical papers.',
                emphasis: true,
              },
              {
                name: 'Grade',
                body: 'Look at the student’s work, the proof for each grading rule, and the suggested grade.',
                emphasis: true,
              },
              {
                name: 'Resolve',
                body: 'Deal with unclear cases, changed grades, bad scans and regrade requests.',
                emphasis: true,
              },
              {
                name: 'Learn',
                body: 'Use repeated fixes and patterns in the grades to improve future grading and teaching.',
              },
            ]}
            footnote="The three shaded moments are the ones this study looks at closely. The teacher is never just a final “approve” button: they use their judgment before, during and after grading."
          />
        </Slide>

        {/* ========================= 02, RESEARCH =========================== */}
        <Slide id="research" chapter="02" height="auto">
          <Kicker n="02" label="Starting with real life" />
          <Headline>
            We studied how grading really happens in{' '}
            <span className="em">Indian colleges</span>.
          </Headline>
          <Lede wide>
            I talked to three teachers at colleges in Kerala that set their own exams, including
            a vice principal. Other team members talked to more teachers and to students. We
            added reading about India’s 2020 education policy, teaching aimed at clear learning
            goals, a well-known way of sorting thinking skills called Bloom’s Taxonomy, the
            rules colleges must meet, grading rules, AI grading and how much teachers trust it.
          </Lede>

          <BigQuote source="Vice principal, autonomous college">
            We are not just grading the student&rsquo;s answer. We are measuring whether our
            teaching achieved what the course was designed to achieve.
          </BigQuote>

          <Methods
            items={[
              'Faculty interviews',
              'Student perspectives',
              'Reading about education policy',
              'Grading rules and learning goals',
              'Competitive review',
            ]}
          />

          <p className="label mt-stage text-ink-500">
            Four limits that mattered for the product
          </p>
          <Notes
            columns={2}
            items={[
              {
                title: 'The type of college changes what teachers control',
                body: 'Different kinds of colleges do not all make and use grading rules the same way. The product could not assume every teacher was free to set up their own tests.',
              },
              {
                title: 'Student work is not always neat and typed',
                body: 'Handwritten work that is photographed or scanned is still common. Teachers needed to see the original work, not only the text the computer read from it.',
              },
              {
                title: 'Teachers often grade the thinking, not just the final answer',
                body: 'Giving marks for each step can reward the method even when the final answer is wrong. So grading had to work rule by rule, with proof, instead of squashing everything into one number.',
              },
              {
                title: 'Teachers cannot check every grade the AI gives',
                body: 'If teachers had to grade every paper again, the AI would save almost no time. The screen had to help them decide where to look first.',
              },
            ]}
          />

          <SmallQuote source="Professor, Kerala">
            If students type, they use ChatGPT. So we ask them to handwrite, photograph it, and
            upload it.
          </SmallQuote>
        </Slide>

        <Slide id="requirements" chapter="02" height="auto">
          <Kicker n="02" label="Turning research into rules for the design" />
          <Headline>
            Each thing we learned had to <span className="em">change how the product works</span>.
          </Headline>
          <Lede wide>
            We did not treat the research as background reading. We turned every finding into a
            clear design choice, and showed where it appears in the product. If a finding did
            not change the steps, the order, the words or how errors are handled, it was not
            useful yet.
          </Lede>

          <SignalMap
            caption="Each thing we learned, the design choice it led to, and where it appears in the product"
            rows={[
              {
                signal: 'The computer can misread handwritten and scanned work, or miss parts of it',
                response: 'Always show the original work next to the text the computer read',
                moment: 'Original and computer-read views',
              },
              {
                signal: 'Not every teacher decides how their tests are set up',
                response: 'Show the grading rules and any guesses clearly, instead of quietly changing them',
                moment: 'Assignment check and grading rules setup',
              },
              {
                signal: 'Checking every suggested grade makes the AI pointless',
                response: 'Point teachers to where they disagree with the AI, where it is unsure, and where something failed a check',
                moment: 'Practice round comparison, and sorting students by who needs attention',
              },
              {
                signal: 'Teachers need to see how the answer fits each grading rule',
                response: 'Link each score to the proof and reasons for that rule',
                moment: 'Scores for each rule, linked to proof',
              },
              {
                signal: 'Teachers are still responsible for the final grade',
                response: 'Let teachers accept, adjust or replace a grade, and keep a record of why',
                moment: 'Teacher actions and the record of changes',
              },
              {
                signal: 'Colleges need to show what students actually learned',
                response: 'Turn patterns in the grades into changes to teaching and grading rules',
                moment: 'What the results show',
              },
            ]}
          />
        </Slide>

        <Slide id="question" chapter="02" height="auto" invert>
          <Kicker n="02" label="The product question changed" />
          <Headline size="large">
            We stopped thinking of the product as <span className="em">a machine that gives grades</span>.
          </Headline>
          <Lede wide>
            At first, the brief sounded like simple grading steps: a student hands in work, the
            system grades it, the teacher checks it, and the grade goes out. Research showed that
            was too simple. A suggested grade was only useful if the teacher could answer six
            questions about it.
          </Lede>

          <Numbered
            size="compact"
            items={[
              { title: 'What proof is this based on?' },
              { title: 'Which grading rule is being used?' },
              { title: 'Where is the AI unsure?' },
              { title: 'Where does my judgment differ?' },
              { title: 'Can I change it?' },
              { title: 'Will my choice be written down?' },
            ]}
          />

          <Principle>
            Cut down on checking things twice for no reason, while teachers can still see and
            control every grading decision.
          </Principle>
        </Slide>

        {/* ======================== 03, THE PRODUCT ========================= */}
        <Slide id="calibration" chapter="03" height="auto">
          <Kicker n="03" label="A practice round before grading everything" />
          <Headline>
            We used <span className="em">disagreement</span> to decide what needed a second look.
          </Headline>
          <Lede wide>
            Before grading a whole class, the teacher grades a few typical papers first. The
            system then compares the teacher’s grade with its own, rule by rule. Instead of
            showing one general “how sure am I” number, the screen shows where the two are
            different.
          </Lede>
          <Lede wide>
            That helps the teacher tell apart four things: a rule being understood differently,
            the same disagreement on several papers, a bigger problem with how the AI grades,
            and a case that simply needs a person to check it.
          </Lede>

          <AnnotatedPlate
            plate={{
              src: calibration,
              alt: 'The practice round screen. An overall difference of 29.2 percent, against a limit of 15 percent, sits above a grid of four grading rules across six practice papers. Each square shows the teacher’s score, the AI’s score and the gap between them, with counts of exact matches, small gaps and big gaps below.',
              width: 3368,
              height: 1895,
              caption:
                'Practice round comparison. Six sample papers, four grading rules, and the teacher’s score next to the AI’s score in every square.',
              onOpen: open,
            }}
            callouts={[
              {
                title: 'How closely they agree overall',
                body: 'The overall difference gives a sense of the whole sample. It is not permission to approve everything automatically, and the screen never offers that.',
              },
              {
                title: 'Differences for each rule',
                body: 'If one rule is off, the wording of that rule is usually the problem. If four are off, the AI is grading differently. The grid shows which it is.',
              },
              {
                title: 'Check the differences',
                body: 'The squares with big gaps become a short to-do list that ends, instead of an order to look at everything again.',
              },
            ]}
          />
        </Slide>

        <Slide id="why-calibration" chapter="03" height="auto">
          <Kicker n="03" label="Why this mattered" />
          <Headline>
            A “how sure” number alone would not tell the teacher{' '}
            <span className="em">what to do next</span>.
          </Headline>
          <Lede wide>
            A number like “78 percent sure” still does not answer the real question: should I
            check this paper or not? Looking at where the teacher and the AI disagree turns the
            same doubt into a list of things someone can actually act on.
          </Lede>

          <Statement>
            The goal was not to make teachers trust the AI. It was to make it easier to see when
            their judgment was needed.
          </Statement>
        </Slide>

        <Slide id="grading" chapter="03" height="auto">
          <Kicker n="03" label="The grading screen" />
          <Headline>
            The student&rsquo;s work, the evidence and the decision,{' '}
            <span className="em">in the same view</span>.
          </Headline>
          <Lede wide>
            The grading desk was designed so the teacher did not have to jump between screens to
            check a grade. They can look at the proof, change the grade and write down why,
            without losing their place in the student’s work.
          </Lede>

          <Plate
            src={grading}
            alt="The grading desk. A list of students on the left shows who needs attention first. The student’s work, with the proof highlighted, fills the middle. A grading panel on the right shows the rule, its score, detailed feedback, linked proof, the AI’s reasons and a notes area only the teacher can see."
            width={2055}
            height={1158}
            className="mt-break"
            caption="The grading desk. Who needs attention, the student's own work, and the grade for each rule, all on screen at once."
            onOpen={open}
          />

          <Notes
            items={[
              {
                title: 'Who needs attention first',
                body: 'Shows which pieces of work are unclear, failed a check, or need a look for another reason, instead of sixty rows that all look the same.',
              },
              {
                title: 'The student’s original work',
                body: 'Keeps the original work on screen. This matters most for scanned and handwritten work, where the computer may have missed parts.',
              },
              {
                title: 'Grading each rule',
                body: 'Shows the rule, the suggested score, the proof, the reasons, how sure the AI is, and what the teacher decides, in one panel.',
              },
            ]}
          />
        </Slide>

        <Slide id="authority" chapter="03" height="auto">
          <Kicker n="03" label="Who decides" />
          <Headline>
            The AI could help with grading. It could not be in charge of{' '}
            <span className="em">the final grade</span>.
          </Headline>
          <Lede wide>
            We kept clear teacher actions in every step, and made every changed grade keep a
            record of why it changed. That made each choice easy to trace, without making the
            teacher fill in extra paperwork.
          </Lede>

          <div className="mt-break grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Accept', 'Keep the suggested grade as it is.'],
              ['Adjust', 'Change the grade for that rule, right there.'],
              ['Override', 'Replace the AI’s grade with the teacher’s own judgment.'],
              ['Release', 'Send out the grade. Only a teacher can do this.'],
            ].map(([action, body]) => (
              <div key={action} className="bg-background p-5 md:p-6">
                <p className="text-xl leading-snug md:text-2xl">{action}</p>
                <p className="mt-4 text-sm leading-[1.5] text-ink-600 md:text-base">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l border-foreground p-6 pl-6 md:p-8 md:pl-8">
            <p className="label-strong">What a changed grade keeps</p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {[
                'The first grade',
                'The new grade',
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
          <Kicker n="03" label="Regrade requests are part of the product" />
          <Headline>
            A regrade request can point to <span className="em">different kinds of problems</span>.
          </Headline>
          <Lede wide>
            A regrade request does not always mean the first grade was wrong. It could point to
            a missing page, a bad scan, an unclear grading rule, wrong feedback, a maths mistake
            in adding up marks, or a real disagreement about the grade. So the list keeps those
            problems separate, instead of treating every request the same way.
          </Lede>

          <AnnotatedPlate
            plate={{
              src: appeals,
              alt: 'The list of regrade requests. Counts for waiting, due today, waiting for the college and solved sit above a table of requests. Each row shows the student, the assignment and grading rule, the type of problem, the student’s reason, when it was sent, and its status.',
              width: 3368,
              height: 1895,
              caption:
                'The regrade desk. Each request shows the type of problem, the grading rule in question, and the student’s own reason.',
              onOpen: open,
            }}
            heading="How the list is set up"
            callouts={[
              {
                title: 'Type of problem',
                body: 'A bad scan, an unclear rule and a real disagreement need different people and different fixes. Sorting them when they arrive lets each one go to the right place.',
              },
              {
                title: 'The student’s reason',
                body: 'Keeps the request next to the exact rule the student is asking about, in their own words, instead of in a separate chat.',
              },
              {
                title: 'Waiting time and urgent cases',
                body: 'Late requests, and anything waiting for the college, are kept apart from new ones, because there is a deadline for regrades.',
              },
            ]}
          />
        </Slide>

        <Slide id="patterns" chapter="03" height="auto">
          <Kicker n="03" label="After the grades are out" />
          <Headline>
            Fixing the same thing again and again can show a problem with{' '}
            <span className="em">more than one grade</span>.
          </Headline>
          <Lede wide>
            If teachers keep changing the grade for the same rule, a few things could be going
            on: the rule is worded badly, the teaching may not match what students were meant to
            learn, the AI understands the rule differently, or the computer keeps misreading the
            work. That is why the product has a part for after grading. It helps teachers spot
            patterns worth fixing before the next test, instead of treating every changed grade
            as a one-off.
          </Lede>

          <Plate
            src={home}
            alt="The teacher home screen, with what the results show and warnings about patterns, next to the progress of current assignments."
            width={3059}
            height={1684}
            className="mt-break"
            caption="What the results show sits on the teacher home, next to the work in progress, so you come across patterns without having to go looking for them."
            onOpen={open}
          />
        </Slide>

        {/* ==================== 04, SCOPE AND DECISIONS ===================== */}
        <Slide id="decisions" chapter="04" height="auto">
          <Kicker n="04" label="Choices we made" />
          <Headline>
            What we chose <span className="em">not to automate</span>.
          </Headline>
          <Lede wide>
            Several choices were about where the AI should stop. Each could have gone the other
            way, and each time that would have made the product feel smoother but be trusted
            less.
          </Lede>

          <Decisions
            items={[
              {
                tension: 'Hide that AI is involved?',
                verdict: 'No',
                body: 'Research showed teachers really worried about being replaced. But if the AI helps suggest a grade, the teacher should know where that suggestion came from.',
              },
              {
                tension: 'Fill in missing rule weights automatically?',
                verdict: 'No',
                body: 'Giving every rule the same weight may be fine, but the teacher should be able to see it and change it, instead of it being a hidden choice nobody made.',
              },
              {
                tension: 'Show how sure the AI is everywhere?',
                verdict: 'No',
                body: 'Knowing how sure the AI is helps when it changes what needs attention. A percentage on everything would be noise, and would teach people to ignore the ones that matter.',
              },
              {
                tension: 'Treat bad scans as rare?',
                verdict: 'No',
                body: 'Scanned and handwritten work was so common that misreading had to be part of the main design, not tacked on at the end.',
              },
              {
                tension: 'Approve automatically when the teacher and the AI agree?',
                verdict: 'No',
                body: 'Agreeing means less checking, which is the point of the practice round. But only the teacher can send out the final grade.',
              },
            ]}
          />
        </Slide>

        <Slide id="architecture" chapter="04" height="auto">
          <Kicker n="04" label="How the parts fit" />
          <Headline>
            Our part could not work <span className="em">on its own</span>.
          </Headline>
          <Lede wide>
            Good grading depends on good student work coming in, and the teacher’s fixes decide
            what gets better next. Because of those two links, all three parts needed the same
            steps, the same words and the same way of passing data along. Otherwise we would have
            had three good ideas that did not fit together.
          </Lede>

          <Chain
            caption="The three connected parts of EducAItors, and the moment each one is in charge of"
            columns={3}
            items={[
              {
                name: 'Checking the work is ready',
                body: 'Student work is checked for missing, locked or unreadable parts before grading starts.',
              },
              {
                name: 'Teacher review and approval',
                body: 'Teachers do the practice round, look at the proof, change grades and send them out. This was my team’s main part.',
                emphasis: true,
              },
              {
                name: 'Getting better over time',
                body: 'Fixes and patterns help improve future grading rules, teaching and grading.',
              },
            ]}
            footnote="The shaded block is the part my team was in charge of. We designed how it connects to both neighbours: checked student work comes in, and the teacher’s fixes go out."
          />
        </Slide>

        {/* ======================== 05, LEADING IT ========================== */}
        <Slide id="leadership" chapter="05" height="auto">
          <Kicker n="05" label="How I led the team" />
          <Headline>
            The project was too connected for each designer to{' '}
            <span className="em">work alone</span>.
          </Headline>
          <Lede wide>
            The work was split into several parts and flows. My job as lead was not to design
            every screen. It was to make sure all the pieces still became one product.
          </Lede>

          <p className="label mt-stage text-ink-500">What I led</p>
          <ul className="mt-8 max-w-3xl space-y-5">
            {[
              'Looking at the whole system before focusing on our part.',
              'Doing part of the research with teachers, and bringing how colleges really work into product choices.',
              'Whiteboard sessions that turned rules and research into steps, data and screens.',
              'Mapping the steps, and how each part depends on the others, across all three parts.',
              'Deciding who was in charge of each part and each flow.',
              'Reviews with other teams wherever information passed from one part to another.',
              'Making sure everyone used the same words and steps.',
              'Putting the final product together.',
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-foreground" />
                <span className="text-base leading-[1.55] md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <p className="label mt-stage text-ink-500">How we worked</p>
          <Numbered
            items={[
              {
                title: 'Build a shared map',
                body: 'Research, system rules and links between parts, visible to the whole team.',
              },
              {
                title: 'Give each flow a clear owner',
                body: 'Each designer took a real piece from start to finish.',
              },
              {
                title: 'Check where the parts meet',
                body: 'Owners of neighbouring parts checked the points where information passed between them.',
              },
              {
                title: 'Join things up often',
                body: 'Menus, words, steps and how things behave were kept the same all the way through, not only at the end.',
              },
              {
                title: 'Review as one product',
                body: 'The final review looked at the teacher’s whole journey, not at who had designed each screen.',
              },
            ]}
          />

          <Principle>
            Let people own their piece of the work. As lead, make sure it all fits together.
          </Principle>
        </Slide>

        <Slide id="contribution" chapter="05" height="auto">
          <Kicker n="05" label="What I personally worked on" />
          <Headline>My contribution</Headline>

          <div className="mt-break grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
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
                  'What the teacher review part covers',
                  'The steps for making a decision',
                  'Calibration logic',
                  'Screens for checking and changing grades',
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
                ['Whiteboard sessions', 'Who does what', 'Reviews across teams', 'Joining the parts up'],
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
                  'The whole three-part system',
                  'Shared research',
                  'Adjacent workflows',
                  'The final look and feel',
                  'The whole interactive prototype',
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
          <Kicker n="06" label="Result" />
          <Headline>
            An interactive prototype, made <span className="em">for university</span>.
          </Headline>
          <Lede wide>
            The work set a clear direction for how teachers can review AI grades. It was a
            mock-up, not a launched product, and this page keeps those two things apart on
            purpose.
          </Lede>

          <Ledger
            delivered={[
              'An interactive prototype covering preparing an assignment, the practice round, grading, regrade requests and what the results show.',
              'Proof for each rule, and screens for how sure the AI is and for disagreements.',
              'Teachers can replace a grade, and the reason, the proof and the record of changes are kept.',
              'Data and decisions passed cleanly between the parts, instead of three ideas that do not connect.',
              'A direction based on research into Indian colleges, the limits each college has, and scanned handwritten work.',
              'Detailed steps, error screens, decision data and record-keeping rules, ready to hand to developers.',
            ]}
            notClaimed={{
              note: 'It was a university mock-up, never used with real classes, so none of these were measured.',
              items: [
                'Less time spent grading',
                'Production accuracy',
                'Live adoption',
                'Grades being more consistent',
                'Instructor trust',
              ],
            }}
          />
        </Slide>

        <Slide id="validate" chapter="06" height="auto">
          <Kicker n="06" label="What we still need to test" />
          <Headline>
            The next questions are about <span className="em">real use, not ideas</span>.
          </Headline>

          <Notes
            items={[
              {
                title: 'Comprehension',
                body: 'Can teachers explain why a grade was suggested?',
              },
              {
                title: 'Checking effort',
                body: 'Do the practice round and the “who first” list really cut how much teachers have to check again?',
              },
              {
                title: 'Control',
                body: 'Can teachers change a grade without losing track of the details?',
              },
              {
                title: 'Consistency',
                body: 'Does the practice round make grades more even across a class?',
              },
              {
                title: 'Fit with each college',
                body: 'How should the system change for colleges where teachers do not write their own grading rules?',
              },
              {
                title: 'Does the technology work?',
                body: 'How well does the computer read real handwriting, and spot missing pages?',
              },
            ]}
          />
        </Slide>

        <Slide id="reflection" chapter="06" height="auto">
          <Kicker n="06" label="Reflection" />
          <Headline>
            The biggest change was where we put{' '}
            <span className="em">the teacher&rsquo;s judgment</span>.
          </Headline>
          <Lede wide>
            At the start we were thinking mostly about AI grading steps. After the research and
            mapping, the teacher’s role became much clearer. Their judgment was needed before
            grading, when setting up rules and doing the practice round. It was needed during
            grading, when checking proof, adjusting and replacing grades. And it was needed after
            grading, with regrade requests and repeated fixes. That change shaped the product
            more than any single screen.
          </Lede>
          <Lede wide>
            The second lesson came from leading the team. Splitting the project into parts made
            the work easier to handle, but there was a risk that three good ideas would turn into
            three different products. Shared maps, clear hand-offs and joining things up often
            kept the final system working as one.
          </Lede>

          <Footnote>
            Shared boards and reviews were not extra work that slowed us down. They were how we
            stopped good screens from adding up to a product that did not fit together.
          </Footnote>
        </Slide>

        <Slide id="closing" chapter="06" height="auto" invert>
          <p className="label text-ink-500">In closing</p>

          <p className="mt-10 max-w-[22ch] text-[2rem] leading-[1.05] md:text-[3.5rem]">
            The AI could suggest a grade.{' '}
            <span className="em">The teacher still had to understand it and make the final call.</span>
          </p>

          <p className="mt-12 max-w-3xl text-base leading-[1.6] text-ink-600 md:text-lg">
            EducAItors became a project about designing how teachers check the AI’s grading,
            instead of using AI to push teachers out.
          </p>

          <nav
            aria-label="Continue"
            className="mt-stage flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8"
          >
            <PrototypeLink href={PROTOTYPE_URL} className="text-lg">
              Try the interactive prototype
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
