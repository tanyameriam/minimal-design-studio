import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import ReadingProgress from '@/components/ReadingProgress';
import SprintRail, { type SprintChapter } from '@/components/case-study/layrrrd/SprintRail';
import {
  StorylinePanel,
  StorylineRail,
  storylineOrder,
  useActiveSlide,
  type Storyline,
} from '@/components/story/Storyline';
import {
  Slide,
  Kicker,
  Headline,
  Lede,
  Statement,
  Em,
  Voice,
  Metric,
  MetricRow,
  Panel,
  Note,
  AssetSlot,
  Points,
} from '@/components/case-study/layrrrd/primitives';
import { CaseStudyEntry } from '@/components/case-study/slides/Slide';
import {
  AfterTimeline,
  Beside,
  Chain,
  CostSteps,
  DecisionChain,
  DirectionCards,
  EvidenceLadder,
  Fragments,
  Graveyard,
  Pipeline,
  Pivots,
  ProductLoop,
  Reframe,
  RudolfJobs,
  ScopeBoundary,
  SprintLine,
  Streams,
  TrustFlow,
  Verdicts,
  WideningStack,
} from '@/components/case-study/layrrrd/diagrams';
import { RudolfSitting, RudolfThinking } from '@/components/case-study/layrrrd/Rudolf';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * Layrrrd, told as a product story rather than as a process report.
 *
 * The page runs on its own island of tokens (`.paper-layrrrd`, see
 * index.css): cream ground, near-black ink, hairlines, low radius, Rudolf.
 * It deliberately does not look like the BrynQ case study, because it is
 * not the same kind of work. BrynQ is a system being reshaped inside an
 * existing company; this is nine days of deciding under pressure.
 *
 * Two speeds. The headlines, statements and metrics carry the entire
 * argument on their own, so a scan takes about a minute; the copy
 * underneath carries the reasoning. Every slide alternates the two voices
 * the project needs: what I noticed as design lead, and what the business
 * needed to prove.
 *
 * ---------------------------------------------------------------------
 * PLACEHOLDERS TO REPLACE
 *
 * Product artwork: search this file for `<AssetSlot`. Each one names the
 * exact screenshot it is waiting for. Swap the whole element for a
 * <FadeInImage /> when the file lands in src/assets. Nothing here invents a
 * product screenshot, so the gaps are visible on purpose.
 *
 * Rudolf: the real mascot artwork, wrapped in a component
 * (components/case-study/layrrrd/Rudolf.tsx). The paw is still a drawn
 * mark, because it has to hold at 16px.
 * ---------------------------------------------------------------------
 */

const chapters: SprintChapter[] = [
  { n: '01', name: 'Frame', target: 'ch-frame' },
  { n: '02', name: 'Validate', target: 'ch-validate' },
  { n: '03', name: 'Build', target: 'ch-build' },
  { n: '04', name: 'Learn', target: 'ch-learn' },
  { n: '05', name: 'Prove', target: 'ch-prove' },
];

/**
 * The same five chapters, opened out slide by slide. The sprint rail keeps
 * the coarse view and the run of days; this is what the reader sees in the
 * left rail, and it is the only place the whole argument is visible at once.
 */
const storyline: Storyline = [
  {
    n: '00',
    name: 'Opening',
    slides: [
      { id: 'sprint-line', title: 'The sprint ended, the product did not' },
      { id: 'process', title: 'The process at a glance' },
    ],
  },
  {
    n: '01',
    name: 'Frame',
    target: 'ch-frame',
    slides: [
      { id: 'observation', title: 'Hundreds saved, barely any remembered' },
      { id: 'survey', title: 'Asking the market what was broken' },
      { id: 'reframe', title: 'The problem was what happened after saving' },
    ],
  },
  {
    n: '02',
    name: 'Validate',
    target: 'ch-validate',
    slides: [
      { id: 'interviews', title: 'Behind the percentages' },
      { id: 'proposition', title: 'The marketing page as the prototype' },
      { id: 'identity', title: 'What Layrrrd should be known for' },
      { id: 'proposition-shift', title: 'Evidence moved the proposition' },
    ],
  },
  {
    n: '03',
    name: 'Build',
    target: 'ch-build',
    slides: [
      { id: 'scope', title: 'Defining the MVP' },
      { id: 'loop', title: 'Capture, understand, return' },
      { id: 'surfaces', title: 'Meeting the habit where it already is' },
      { id: 'taste', title: 'Speed against coherence' },
      { id: 'system', title: 'The design system' },
      { id: 'rudolf', title: 'One dog, several product jobs' },
    ],
  },
  {
    n: '04',
    name: 'Learn',
    target: 'ch-learn',
    slides: [
      { id: 'testing', title: 'Behaviour mattered more than opinions' },
      { id: 'verdicts', title: 'What testing said' },
      { id: 'trust', title: 'The save-state problem' },
      { id: 'pivots', title: 'Research kept interrupting the plan' },
    ],
  },
  {
    n: '05',
    name: 'Prove',
    target: 'ch-prove',
    slides: [
      { id: 'willingness', title: 'Interest is not validation' },
      { id: 'pricing', title: 'Pricing as a commitment test' },
      { id: 'day-nine', title: 'Day nine: people had paid' },
      { id: 'channels', title: 'Where the first customers came from' },
      { id: 'after', title: 'After the sprint' },
      { id: 'architecture', title: 'The product today' },
      { id: 'role', title: 'What I actually led' },
      { id: 'panel', title: 'The short version' },
      { id: 'reflection', title: 'What I learned' },
    ],
  },
];

/** Chapter divider. Number, name, and the question the chapter answers. */
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
  <Slide id={id} chapter={n} height="short" tone="ink">
    <p className="label opacity-70">Project {n}</p>
    <h2 className="mt-6 text-[3rem] font-medium leading-none md:text-[6rem]">{name}</h2>
    <p className="mt-7 max-w-2xl text-lg leading-snug opacity-80 md:text-2xl">{question}</p>
  </Slide>
);

const LayrrrdCaseStudy = () => {
  usePageMeta(
    'Layrrrd',
    'From an idea to paying customers in nine days, then not stopping. A compressed product-validation sprint: research, proposition, MVP, testing, brand, pricing and commercial validation in one loop.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const order = useMemo(() => storylineOrder(storyline), []);
  const activeId = useActiveSlide(order);
  const [storyOpen, setStoryOpen] = useState(false);
  const closeStory = useCallback(() => setStoryOpen(false), []);

  return (
    <div className="paper-layrrrd min-h-screen bg-background text-foreground rail-offset">
      <ReadingProgress />
      <Navigation />

      <StorylineRail chapters={storyline} activeId={activeId} />
      <SprintRail chapters={chapters} onOpenStoryline={() => setStoryOpen(true)} />
      <StorylinePanel
        chapters={storyline}
        activeId={activeId}
        open={storyOpen}
        onClose={closeStory}
      />

      <main>
        {/* ============================= HERO ============================= */}
        <section id="top" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-12">
            <div>
              <StudyOpening
                slug="layrrrd"
                client="Layrrrd · Content curation"
                headline={
                  <>
                    From an idea to paying customers in nine days,{' '}
                    <Em>then not stopping.</Em>
                  </>
                }
              />

              <p className="mt-8 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
                We gave ourselves nine days to find out whether a product built around
                saved-content rediscovery deserved to exist. I led design across product
                direction, experience, visual system and brand while the team researched,
                built, tested, changed direction and sold the product inside the same
                validation window.
              </p>

              <dl className="mt-12 grid max-w-2xl gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base md:text-lg">Design Lead</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Timeline</dt>
                  <dd className="text-base md:text-lg">June 2026 to present</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Scope</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Product direction · User research · UX · Design system · Brand · Product
                    validation
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Status</dt>
                  <dd className="text-base md:text-lg">
                    Live · Revenue · Ongoing ·{' '}
                    <a
                      href="https://layrrrd.com"
                      target="_blank"
                      rel="noreferrer"
                      className="rule-link"
                    >
                      layrrrd.com
                    </a>
                  </dd>
                </div>
              </dl>

              <CaseStudyEntry
                storyHref="/case-study/layrrrd/story"
                scanMinutes={6}
                readMinutes={18}
              />
            </div>

            <div className="flex flex-col justify-between gap-12">
              <RudolfSitting
                aria-hidden="true"
                className="h-32 w-auto self-start text-foreground md:h-44"
              />

              <div className="grid grid-cols-2 gap-x-8 gap-y-9">
                <Metric figure="9 days" caption="idea to paid validation" />
                <Metric figure="15" caption="paying customers by day nine" />
                <Metric figure="126" caption="freemium signups, tracked in PostHog" />
                <Metric figure="Live" caption="still shipping" />
              </div>

              <Link to="/case-study/layrrrd/story" className="rule-link self-start text-lg">
                Watch the story as slides <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* The nine days, and everything after them. */}
        <Slide id="sprint-line" height="auto">
          <Kicker label="The shape of it" />
          <Headline size="large">
            The sprint ended. <Em>The product didn&rsquo;t.</Em>
          </Headline>
          <SprintLine />
        </Slide>

        {/* ===================== PROCESS AT A GLANCE ====================== */}
        <Slide id="process" height="auto">
          <Kicker label="The process at a glance" />
          <Headline>
            Nine days did not remove discovery. <Em>It compressed the whole loop.</Em>
          </Headline>
          <Lede wide>
            The deadline is the interesting part only because of what it did not delete. We
            still surveyed, still interviewed, still tested a proposition before writing
            product code, and still let user testing change the plan afterwards.
          </Lede>

          <Chain
            steps={[
              'Observation',
              'Survey',
              'Interviews',
              'Proposition',
              'MVP',
              'Usability testing',
              'Iteration',
              'Pricing',
              'Paid',
            ]}
          />

          <EvidenceLadder
            rungs={[
              {
                level: '01',
                method: 'Survey',
                question: 'Do people say the problem exists, and where does it hurt most?',
              },
              {
                level: '02',
                method: 'Interviews',
                question: 'Why does the behaviour happen, and what do they expect instead?',
              },
              {
                level: '03',
                method: 'Marketing page',
                question: 'Do people understand the proposition, and does it interest them?',
              },
              {
                level: '04',
                method: 'MVP',
                question: 'With the thing in their hands, will they actually use it?',
              },
              {
                level: '05',
                method: 'Payment',
                question: 'Is the problem valuable enough that they part with money?',
              },
            ]}
          />

          <Statement>At every stage, we raised the cost of being wrong.</Statement>
        </Slide>

        {/* ======================= 01 FRAME ============================== */}
        <ChapterOpen
          id="ch-frame"
          n="01"
          name="Frame"
          question="Is this actually a problem worth solving?"
        />

        <Slide id="observation" chapter="01" height="auto">
          <Kicker n="01" label="The observation" />
          <Headline>
            I had hundreds of things saved. <Em>I could barely remember any of them.</Em>
          </Headline>
          <Lede>
            Bookmarks, open tabs, screenshots, links sent to myself on Telegram and WhatsApp,
            half-used notes apps. Saving costs nothing, so the pile grows every day.
            Returning costs attention, so it mostly does not happen.
          </Lede>
          <Graveyard />
          <Voice kind="mine">
            Before treating this as a product opportunity, I wanted to know whether anyone
            else lived like this, or whether I was designing for my own bad habit.
          </Voice>
          <Statement>
            We had an idea. <Em>We did not have a validated problem.</Em>
          </Statement>
        </Slide>

        <Slide id="survey" chapter="01" height="auto">
          <Kicker n="01" label="Testing the problem" />
          <Headline>
            Before designing the solution, we asked the market what was actually broken.
          </Headline>
          <Lede wide>
            The survey asked how people save, where they save, whether they ever go back,
            whether organising is the problem or retrieval is, which channels they already
            live in, and how they want things to come back to them.
          </Lede>

          <MetricRow>
            <Metric figure="82" caption="survey responses" />
            <Metric figure="54%" caption="rarely revisit what they save" />
            <Metric figure="59%" caption="named retrieval as an important need" />
            <Metric figure="73%" caption="trust recommendations from familiar sources" />
            <Metric figure="60%" caption="chose WhatsApp as a preferred access point" />
          </MetricRow>

          <Note>
            Source: our own survey, n = 82, run inside the sprint. Percentages are of all
            respondents.
          </Note>

          <Voice kind="mine">
            The survey was not there to prove our idea right. It was there to tell us which
            problem was actually worth solving.
          </Voice>
        </Slide>

        <Slide id="reframe" chapter="01" height="auto">
          <Kicker n="01" label="The first reframe" />
          <Headline>
            We thought the problem might be content overload. The stronger pattern was what
            happened <Em>after</Em> people saved something.
          </Headline>

          <Reframe
            steps={[
              { label: 'We started with', body: 'There is too much content.' },
              {
                label: 'The research showed',
                body: 'People already have ways to save. Saving is not the hard part.',
              },
              {
                label: 'The real problem',
                body: 'They do not return to what mattered.',
              },
            ]}
          />

          <Statement>
            You do not have a discovery problem. <Em>You have a revisit problem.</Em>
          </Statement>

          <Voice kind="business">
            A better bookmark manager would have entered a crowded behaviour and competed on
            an axis people had already stopped caring about. The opening was the thing every
            saving tool leaves undone: bringing it back.
          </Voice>
        </Slide>

        {/* ====================== 02 VALIDATE ============================ */}
        <ChapterOpen
          id="ch-validate"
          n="02"
          name="Validate"
          question="What exactly is broken, and what do people expect instead?"
        />

        <Slide id="interviews" chapter="02" height="auto">
          <Kicker n="02" label="Behind the percentages" />
          <Headline>
            The survey narrowed the problem. <Em>Conversations told us why.</Em>
          </Headline>

          <Beside>
            <div>
              <Lede>
                Once the survey had pointed at the strongest pain, we went and talked to
                people about it: what they save, why they save it, when they expect to need
                it, what they do when they cannot find it, and how much maintenance they are
                willing to do for a system that promises to help.
              </Lede>
              <Points
                items={[
                  'What they save, and what they never bother saving',
                  'When they expected to use it again, and what actually happened',
                  'How they search for it later, and where that search starts',
                  'Whether they wanted organisation, recommendations or retrieval',
                  'How much upkeep they would tolerate before abandoning a system',
                ]}
              />
            </div>
            <div className="flex flex-col gap-6">
              <Fragments
                lines={[
                  'I know I saved it somewhere.',
                  'I send links to myself.',
                  "I'll read it later.",
                  "I don't want another folder system.",
                ]}
              />
              <RudolfThinking
                aria-hidden="true"
                className="h-28 w-auto self-end text-foreground md:h-36"
              />
            </div>
          </Beside>

          <Voice kind="mine">
            I used the interviews to understand the behaviour behind the percentages, not to
            turn survey answers straight into a feature list.
          </Voice>
        </Slide>

        <Slide id="proposition" chapter="02" height="auto">
          <Kicker n="02" label="Testing the proposition" />
          <Headline>
            Before building the product, <Em>the marketing page was the prototype.</Em>
          </Headline>
          <Lede wide>
            We put up an early version of the Layrrrd site to explain the concept to people
            who had never heard it. The point was not polish. The point was to find out
            whether the proposition survived being read by a stranger.
          </Lede>

          <Beside>
            <AssetSlot
              label="First Layrrrd marketing page"
              note="early concept version, annotated"
              ratio="aspect-[4/3]"
            />
            <div>
              <p className="label mb-5 text-ink-500">What we were watching for</p>
              <Points
                items={[
                  'Did people understand what Layrrrd did, unprompted?',
                  'Which part of the promise did they repeat back to us?',
                  'What did they assume would happen after signing up?',
                  'Did the wording create the wrong expectation?',
                  'Would they leave their details, or just nod politely?',
                ]}
              />
            </div>
          </Beside>

          <Statement>Marketing became part of product research.</Statement>
        </Slide>

        <Slide id="identity" chapter="02" height="auto">
          <Kicker n="02" label="The hardest early question" />
          <Headline>
            The hardest question was not which feature to build. It was{' '}
            <Em>what Layrrrd should be known for.</Em>
          </Headline>
          <Lede>
            Four honest directions were open to us, and each one implied a different product,
            a different competitor set and a different reason to come back.
          </Lede>

          <DirectionCards
            options={[
              { name: 'Bookmark manager' },
              { name: 'Content recommendation platform' },
              { name: 'AI chatbot' },
              { name: 'Personal knowledge companion', kept: true },
            ]}
          />

          <Voice kind="mine">
            We were not looking for the biggest feature set. We were looking for the
            strongest behavioural promise, the one sentence the product could be held to.
          </Voice>

          <Statement>A better organiser still waits for the user to come back.</Statement>
        </Slide>

        <Slide id="proposition-shift" chapter="02" height="auto">
          <Kicker n="02" label="Evidence moved the proposition" />
          <Headline>
            The product changed <Em>before the MVP was finished.</Em>
          </Headline>

          <DecisionChain
            thought="A scheduled digest would be the main experience. We push, you read."
            evidence="A meaningful share of people said they would rather ask for something when they need it than receive it on a timetable."
            decision="Retrieval became the core interaction model, and the digest became one of its outputs."
          />

          <Beside>
            <Panel label="The second finding" title="Trust had a shape">
              Recommendations had to feel relevant, grounded and familiar. Popularity was not
              the signal people wanted; a source they already trusted was.
            </Panel>
            <Panel label="What it meant" title="Relevance over reach">
              Ranking on trusted sources and topic relevance rather than on what was popular
              made the feed defensible, and made it something a person could keep believing.
            </Panel>
          </Beside>

          <Voice kind="mine">
            The plan was allowed to change because the goal was validation, not defending the
            first concept.
          </Voice>
        </Slide>

        {/* ======================== 03 BUILD ============================= */}
        <ChapterOpen
          id="ch-build"
          n="03"
          name="Build"
          question="What is the smallest product that can test the behaviour?"
        />

        <Slide id="scope" chapter="03" height="auto">
          <Kicker n="03" label="Defining the MVP" />
          <Headline>
            Only after the problem and the proposition survived contact with users did we
            start building.
          </Headline>
          <Lede wide>
            The MVP was never meant to be a complete knowledge-management platform. It had
            one job: put the core behaviour in front of real people and see whether it held.
          </Lede>

          <ScopeBoundary
            inScope={[
              'Capture, from where people already are',
              'Automatic summaries',
              'A library worth opening',
              'Retrieval, by asking',
              'The digest',
              'Onboarding, only enough of it',
            ]}
            outScope={[
              'Advanced organisation',
              'A large taxonomy system',
              'A social feed',
              'Collaboration',
              'Deep customisation',
              'Polish that proves nothing',
            ]}
          />

          <Statement>
            If a feature did not test saving, returning or retrieval, <Em>it waited.</Em>
          </Statement>

          <Voice kind="mine">
            Nine days made scope a design decision rather than a project-management
            afterthought. Every item on the right cost something real to leave out, and
            saying so is the honest version of this slide.
          </Voice>
        </Slide>

        <Slide id="loop" chapter="03" height="auto">
          <Kicker n="03" label="The core loop" />
          <Headline size="large">Capture, understand, return.</Headline>

          <ProductLoop
            stages={[
              {
                n: '01',
                name: 'Capture',
                body: 'Save where the behaviour already exists, not where we would prefer it to be.',
                items: ['Chrome extension', 'Paste bar', 'Telegram', 'WhatsApp'],
              },
              {
                n: '02',
                name: 'Understand',
                body: 'The system reads it so the person does not have to file it.',
                items: ['Summary', 'Topic', 'Context', 'Source'],
              },
              {
                n: '03',
                name: 'Return',
                body: 'Value comes back without being chased, and answers only from your own library.',
                items: ['Library', 'Digest', 'Retrieval', 'Recommendations'],
              },
            ]}
          />

          <Statement>
            Do not make people build a system <Em>before the system helps them.</Em>
          </Statement>
        </Slide>

        <Slide id="surfaces" chapter="03" height="auto">
          <Kicker n="03" label="Meeting the habit" />
          <Headline>
            We didn&rsquo;t ask users to learn <Em>a new saving habit.</Em>
          </Headline>
          <Lede wide>
            People were already saving in messaging apps, browsers and improvised
            workarounds. Rather than trying to replace those habits, Layrrrd moved into them.
          </Lede>

          <Pipeline
            surfaces={['Chrome extension', 'Web app', 'Telegram', 'WhatsApp']}
            outputs={['Summaries', 'Library', 'Retrieval', 'Recommendations', 'Digest']}
          />

          <Beside>
            <Panel label="What it cost" title="Every surface started thinner">
              Four entry points inside one sprint meant none of them could be deep. Each one
              shipped with less than it deserved.
            </Panel>
            <Panel label="What it bought" title="A real test of the premise">
              We got to test the actual behavioural claim, that people will save from where
              they already are, instead of testing whether they would adopt a new habit
              first.
            </Panel>
          </Beside>

          <Voice kind="business">
            One beautifully polished capture surface would have made a better bookmarking
            app. That was not the thing we were trying to find out.
          </Voice>
        </Slide>

        <Slide id="taste" chapter="03" height="auto">
          <Kicker n="03" label="Speed against coherence" />
          <Headline>
            A nine-day product built with AI tools can become <Em>a visual junk drawer.</Em>
          </Headline>
          <Lede wide>
            Development was moving at validation speed. Interface code could be generated
            faster than I could review it, which meant the design system could not live in
            Figma or in my head. It had to be written where the tools would read it.
          </Lede>

          <Chain
            steps={[
              'Design decisions',
              'Written rules in the repository',
              'AI coding tools',
              'Interface that stays coherent',
            ]}
          />

          <Beside>
            <div>
              <p className="label mb-5 text-ink-500">What I wrote down</p>
              <Points
                items={[
                  'Type hierarchy and the scale it moves on',
                  'Spacing, and what is never allowed between elements',
                  'Colour, and how little of it to use',
                  'Component principles rather than component screenshots',
                  'Where brand is allowed, and where it is not',
                  'Interaction conventions, including feedback states',
                ]}
              />
            </div>
            <AssetSlot
              label="Design rules as committed to the repository"
              note="the file the coding tools are bound to"
              ratio="aspect-[4/3]"
            />
          </Beside>

          <Statement>
            If machines are producing interface code, <Em>taste has to become executable.</Em>
          </Statement>
        </Slide>

        <Slide id="system" chapter="03" height="auto">
          <Kicker n="03" label="The design system" />
          <Headline>Fast did not mean visually disposable.</Headline>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            <AssetSlot label="Type scale and hierarchy" ratio="aspect-[4/3]" />
            <AssetSlot label="Colour and hairline rules" ratio="aspect-[4/3]" />
            <AssetSlot label="Buttons, inputs, navigation" ratio="aspect-[4/3]" />
            <AssetSlot label="Feedback and loading states" ratio="aspect-[4/3]" />
            <AssetSlot label="Library and dashboard surfaces" ratio="aspect-[4/3]" />
            <AssetSlot label="Digest layout" ratio="aspect-[4/3]" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-[3px] bg-card p-6 md:p-8">
              <p className="label mb-4 text-ink-500">Product</p>
              <p className="text-2xl leading-snug md:text-[2rem]">
                Quiet, functional, editorial, low distraction.
              </p>
            </div>
            <div className="rounded-[3px] bg-foreground p-6 text-background md:p-8">
              <p className="label mb-4 opacity-70">Brand</p>
              <p className="text-2xl leading-snug md:text-[2rem]">
                Expressive, character-led, Rudolf, campaign moments.
              </p>
            </div>
          </div>

          <Statement>
            Brand is opt-in, <Em>not applied everywhere by default.</Em>
          </Statement>
        </Slide>

        <Slide id="rudolf" chapter="03" height="auto">
          <Kicker n="03" label="The mascot as infrastructure" />
          <Headline size="large">One dog. Multiple product jobs.</Headline>

          <RudolfJobs
            jobs={[
              { role: 'Mascot', body: 'The thing people recognise before they read a word.' },
              {
                role: 'Loading state',
                body: 'Turns waiting into something intentional rather than something broken.',
              },
              {
                role: 'Chat persona',
                body: 'The voice of retrieval in Telegram and WhatsApp, answering only from your library.',
              },
              {
                role: 'Commercial metaphor',
                body: 'Gives pricing and membership a language the product already speaks.',
              },
            ]}
          />

          <Voice kind="mine">
            With nine days, the brand could not afford unrelated metaphors on every surface.
            Rudolf became the connective tissue between the product, the chat channels and
            the way we asked for money.
          </Voice>

          <Statement>Character became infrastructure.</Statement>
        </Slide>

        {/* ======================== 04 LEARN ============================= */}
        <ChapterOpen
          id="ch-learn"
          n="04"
          name="Learn"
          question="What changes when real users start touching it?"
        />

        <Slide id="testing" chapter="04" height="auto">
          <Kicker n="04" label="A new kind of evidence" />
          <Headline>
            Once the product was usable, <Em>opinions mattered less than behaviour.</Em>
          </Headline>
          <Lede wide>
            The first working build exposed problems that no interview and no landing page
            could have surfaced. People stopped telling us what they would do and started
            doing it in front of us.
          </Lede>

          <MetricRow>
            <Metric figure="82" caption="survey responses" />
            <Metric figure="8" caption="usability tests on the working product" />
            <Metric figure="32" caption="product signups at that point" />
            <Metric figure="37" caption="on the waitlist" />
          </MetricRow>

          <Note>
            Snapshot taken midway through the sprint, at the point of usability testing.
            Signups kept climbing to day nine.
          </Note>

          <Chain
            dense
            steps={['Survey', 'Interviews', 'Marketing page', 'Actual product behaviour']}
          />
        </Slide>

        <Slide id="verdicts" chapter="04" height="auto">
          <Kicker n="04" label="What testing said" />
          <Headline>
            Users showed us where the product earned trust, <Em>and where it lost it.</Em>
          </Headline>

          <Verdicts
            worked={[
              'Retrieval felt effortless',
              'Saving required no thought',
              'Recommendations felt earned rather than generic',
            ]}
            broke={[
              'Onboarding ran too long',
              'People could not tell whether a save had worked',
              'Reminders arrived without judgment',
              'Navigation asked too much of new users',
            ]}
          />

          <Voice kind="mine">
            The goal was never to prove the MVP was good. It was to find whatever was
            stopping the core loop from closing, while there was still time to fix it.
          </Voice>
        </Slide>

        <Slide id="trust" chapter="04" height="auto">
          <Kicker n="04" label="The save-state problem" />
          <Headline>
            The system was fast. <Em>Users still did not trust it.</Em>
          </Headline>
          <Lede wide>
            We had treated processing latency as a technical detail. Testing showed it was a
            trust problem: a save that happens silently is, to the person who made it, a save
            that might not have happened.
          </Lede>

          <TrustFlow
            before={{
              label: 'Before',
              steps: ['User saves a link', 'Processing happens in the background', 'Nothing visible changes'],
              end: 'Did that save?',
            }}
            after={{
              label: 'After',
              steps: [
                'User saves a link',
                'A pending state appears immediately',
                'Processing is visible while it runs',
                'The card resolves in place',
              ],
              end: 'Saved.',
            }}
          />

          <Beside>
            <Panel label="What we changed" title="Confirmation, and duplicate detection">
              Save confirmations became explicit, and saving something already in the library
              says so instead of quietly making a second copy.
            </Panel>
            <Panel label="Why it counts" title="Feedback beat raw speed">
              The engineering was not the bottleneck. The absence of a signal was. This is the
              clearest example on the project of a design fix outperforming an optimisation.
            </Panel>
          </Beside>
        </Slide>

        <Slide id="pivots" chapter="04" height="auto">
          <Kicker n="04" label="Research kept interrupting" />
          <Headline>
            Research was not a phase. <Em>It kept interrupting the plan.</Em>
          </Headline>

          <Pivots
            rows={[
              {
                from: 'Empty library',
                to: 'Instant value',
                evidence:
                  'Interest in early access was high, but interest does not survive an empty product waiting to be filled.',
                unlocked: 'Retention from the first session instead of the third week.',
              },
              {
                from: 'Delivery-led',
                to: 'Retrieval-led',
                evidence:
                  'A meaningful share of respondents said they would rather ask on demand than receive a scheduled digest.',
                unlocked: 'The core mechanic the product is actually known for.',
              },
              {
                from: 'A job title',
                to: 'Serial Savers',
                evidence:
                  'The behaviour showed up across professions. The job title was never what the people had in common.',
                unlocked: 'A market that is not capped by one profession.',
              },
              {
                from: 'Subscription',
                to: 'Founding Membership',
                evidence:
                  'Recurring billing was overhead we could not justify mid-sprint, and it slowed the moment of commitment.',
                unlocked: 'Real urgency, and a faster answer to the only question that mattered.',
              },
            ]}
          />

          <Statement>
            The plan wasn&rsquo;t sacred. <Em>The evidence was.</Em>
          </Statement>
        </Slide>

        {/* ======================== 05 PROVE ============================= */}
        <ChapterOpen
          id="ch-prove"
          n="05"
          name="Prove"
          question="Will anyone actually pay for it, and is there enough evidence to keep going?"
        />

        <Slide id="willingness" chapter="05" height="auto">
          <Kicker n="05" label="Interest is not validation" />
          <Headline>People saying &ldquo;I would use this&rdquo; was not enough.</Headline>

          <CostSteps steps={['Survey interest', 'Signup', 'Usage', 'Payment']} />

          <Statement>Would they pay?</Statement>

          <Voice kind="business">
            Every step up that ladder costs the person more, which is exactly why it is worth
            more to us. A payment and a friendly interview answer are not the same evidence,
            and only one of them survives contact with a spreadsheet.
          </Voice>
        </Slide>

        <Slide id="pricing" chapter="05" height="auto">
          <Kicker n="05" label="Pricing as a mechanism" />
          <Headline>
            Pricing was designed to test commitment, <Em>not to maximise lifetime value on
            day nine.</Em>
          </Headline>

          <Beside>
            <div>
              <p className="label mb-5 text-ink-500">Considered, then set aside</p>
              <p className="text-2xl leading-snug text-ink-500 line-through decoration-ink-400 md:text-[2rem]">
                Monthly subscription
              </p>
              <p className="mt-6 text-base leading-[1.55] text-ink-600 md:text-lg">
                Recurring billing is the right model for the product. It was the wrong
                instrument for the question we had nine days to answer.
              </p>
            </div>
            <div className="rounded-[3px] bg-foreground p-6 text-background md:p-8">
              <p className="label mb-4 opacity-70">Chosen for validation</p>
              <p className="text-2xl leading-snug md:text-[2rem]">Founding Membership</p>
              <ul className="mt-6 space-y-2.5 text-base opacity-80 md:text-lg">
                <li>A limited cohort, capped on purpose</li>
                <li>One payment, no billing overhead</li>
                <li>Scarcity that is real rather than announced</li>
                <li>Early influence over what gets built next</li>
                <li>A founder identity worth keeping</li>
              </ul>
            </div>
          </Beside>

          <AssetSlot
            label="Founding Membership and checkout"
            note="pricing page and payment confirmation"
            ratio="aspect-[16/7]"
          />

          <Voice kind="mine">
            I needed to know whether people cared enough to hand over money for a product
            that was nine days old. Not whether they liked the idea in theory.
          </Voice>
        </Slide>

        <Slide id="day-nine" chapter="05" height="full" tone="ink" center>
          <p className="label opacity-70">Day nine</p>
          <h2 className="mt-8 max-w-[16ch] text-[2.5rem] font-medium leading-[1.02] md:text-[4.5rem]">
            Nine days later, people had paid.
          </h2>

          <div className="mt-14 flex flex-wrap justify-center gap-x-16 gap-y-10 md:mt-20">
            <Metric figure="15" caption="paying customers" size="large" />
            <Metric figure="126" caption="freemium signups" size="large" />
            <Metric figure="9" caption="days from first commit to paid validation" size="large" />
          </div>

          <p className="mt-14 max-w-2xl text-base leading-[1.6] opacity-80 md:text-lg">
            Real payments turned the sprint from an idea experiment into a product worth
            continuing. PostHog ran from launch, so these are dashboards rather than
            recollections.
          </p>
        </Slide>

        <Slide id="channels" chapter="05" height="auto">
          <Kicker n="05" label="Where the customers came from" />
          <Headline>
            The first customers did not all come <Em>from the same place.</Em>
          </Headline>

          <Streams
            streams={[
              {
                name: 'Organic',
                body: 'People who found the product and understood it without us in the room.',
              },
              {
                name: 'Referral',
                body: 'Existing members bringing the next ones in, unprompted.',
              },
              {
                name: 'Founder-led',
                body: 'Direct conversations, and a direct close at the end of them.',
              },
            ]}
            outcome="Three routes, converting independently."
          />

          <Voice kind="business">
            Payment showed the value was real. Channel diversity is the first hint that growth
            could become repeatable rather than heroic.
          </Voice>

          <Note>
            The open question, stated honestly: whether this mix holds once every sale is not
            being closed by hand. That is what decides whether this scales.
          </Note>
        </Slide>

        <Slide id="after" chapter="05" height="auto">
          <Kicker n="05" label="After the sprint" />
          <Headline>
            Validation bought us <Em>the right to keep building.</Em>
          </Headline>

          <AfterTimeline
            steps={[
              'Day nine, paid validation',
              'Payments live',
              'Chrome extension published',
              'Telegram',
              'WhatsApp',
              'Referral loops',
              'Trust and privacy work',
              'Today',
            ]}
          />

          <Lede wide>
            The same team kept improving the product after the deadline instead of treating
            the sprint as a demo. That continuation is the part that turns a nine-day result
            into a product.
          </Lede>

          <Statement>
            The sprint ended. <Em>The product didn&rsquo;t.</Em>
          </Statement>
        </Slide>

        <Slide id="architecture" chapter="05" height="auto">
          <Kicker n="05" label="The product today" />
          <Headline>Multiple surfaces. One product loop.</Headline>
          <Lede wide>
            The four entry points are not four products. They are doors into the same save,
            process, retrieve and refine pipeline, which is why adding the next one is
            additive rather than a second thing to maintain.
          </Lede>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
            <AssetSlot label="Chrome extension" ratio="aspect-[3/4]" />
            <AssetSlot label="Library and dashboard" ratio="aspect-[3/4]" />
            <AssetSlot label="Rudolf in Telegram" ratio="aspect-[3/4]" />
            <AssetSlot label="The weekly digest" ratio="aspect-[3/4]" />
          </div>

          <Voice kind="business">
            One engine behind every surface means a new channel costs a connector, not a
            roadmap.
          </Voice>
        </Slide>

        <Slide id="role" chapter="05" height="auto">
          <Kicker n="05" label="What I actually led" />
          <Headline>
            My role was not <Em>making the MVP look coherent.</Em>
          </Headline>

          <WideningStack
            layers={[
              'Visual design',
              'Experience design',
              'Product direction',
              'Validation decisions',
              'Brand system',
              'Build constraints',
              'Commercial framing',
            ]}
          />

          <Beside>
            <div>
              <p className="label mb-5 text-ink-500">Across the sprint that meant</p>
              <Points
                items={[
                  'Framing the problem, and testing it before committing',
                  'Survey and interview synthesis',
                  'Shaping the proposition, and the marketing page that tested it',
                  'MVP definition, flows and interaction design',
                  'The design system, and the rules the AI tools were bound to',
                  'Brand, and Rudolf across every surface',
                  'Usability testing and what we fixed first',
                  'How pricing was presented and asked for',
                ]}
              />
            </div>
            <div className="flex items-end">
              <Statement>The design role expanded with the uncertainty.</Statement>
            </div>
          </Beside>
        </Slide>

        <Slide id="panel" chapter="05" height="auto">
          <Kicker n="05" label="The short version" />
          <Headline>
            This is less about what I designed in nine days. <Em>It is about how I decided.</Em>
          </Headline>

          <ol className="mt-12 divide-y divide-border border-y border-border md:mt-16">
            {[
              'I tested the problem before committing to the solution.',
              'I used conversations to understand the behaviour behind the survey.',
              'I used the marketing site as a proposition prototype.',
              'I changed the product when the research disagreed with us.',
              'I wrote design constraints into the build system so speed would not destroy coherence.',
              'I asked people to pay before the product felt finished.',
            ].map((line, i) => (
              <li key={line} className="flex gap-5 py-5">
                <span className="label w-6 shrink-0 pt-2 tabular-nums text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg leading-snug md:text-2xl">{line}</span>
              </li>
            ))}
          </ol>

          <Lede wide>
            Layrrrd is the clearest record I have of how I make product decisions when every
            judgment call has a deadline measured in hours.
          </Lede>
        </Slide>

        <Slide id="reflection" chapter="05" height="full" tone="ink">
          <p className="label opacity-70">What I learned</p>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-[1.6] opacity-90 md:text-lg">
            <p>
              Nine days forced a different kind of discipline. There was no room to treat
              research, design, development, testing and commercial validation as separate
              phases. Each one had to feed the next immediately.
            </p>
            <p>
              The biggest lesson was that speed does not mean skipping evidence. It means
              choosing the cheapest useful evidence first, raising the cost of being wrong
              gradually, and being willing to change direction before sunk effort turns into
              attachment.
            </p>
            <p>
              The product that reached day nine was not the product we imagined on day one.
              That is exactly why the process worked.
            </p>
          </div>

          <p className="mt-14 max-w-[20ch] text-[2.25rem] font-medium leading-[1.02] md:mt-20 md:text-[4rem]">
            Fast did not mean guessing faster. It meant learning faster.
          </p>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/case-study/layrrrd/story" className="rule-link text-lg">
              The same story as slides <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/case-study/layrrrd/deep" className="rule-link text-lg opacity-80">
              The long-form write-up <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/#work" className="rule-link text-lg opacity-80">
              Back to the work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Slide>
      </main>

      <Contact />
    </div>
  );
};

export default LayrrrdCaseStudy;
