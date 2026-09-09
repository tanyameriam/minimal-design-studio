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
  Em,
  Decision,
  Metric,
  MetricRow,
  Note,
  AssetSlot,
  Points,
} from '@/components/case-study/layrrrd/primitives';
import { CaseStudyEntry } from '@/components/case-study/slides/Slide';
import {
  AfterTimeline,
  Beside,
  BeforeAfterRows,
  Chain,
  DirectionShift,
  Fragments,
  LoopPipeline,
  Pivots,
  Progression,
  Reframe,
  SavedThenForgotten,
  ScopeBoundary,
  SynthesisColumns,
  Thumb,
  TrustFlow,
  Verdicts,
} from '@/components/case-study/layrrrd/diagrams';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * Layrrrd, told as a product story rather than as a process report.
 *
 * The page runs on its own island of tokens (`.paper-layrrrd`, see
 * index.css): cream ground, near-black ink, hairlines, low radius. It
 * deliberately does not look like the BrynQ case study, because it is not
 * the same kind of work. BrynQ is a system being reshaped inside an
 * existing company; this is nine days of deciding under pressure.
 *
 * The island is paired here with `.paper-layrrrd-page`, which is what
 * carries the dark side of that palette. `.paper-layrrrd` alone is a fixed
 * cream swatch, correct for the cover chip on the home page and wrong for a
 * whole page, which has to follow the visitor's theme. With both classes the
 * study reads as the same paper in either mode, warm rather than the site's
 * blue-black, and the ink block flips to cream so the turns still land as a
 * reversal.
 *
 * ---------------------------------------------------------------------
 * STRUCTURE
 *
 * Nineteen sections, where there used to be forty-seven slides and five
 * chapter splash pages. The splash pages are gone: they spent a full
 * screen each on a single word and told a reader nothing they could not
 * get from the rail. What replaces them is one horizontal run of the whole
 * sprint near the top, so a two-minute reader leaves with the shape of the
 * project rather than with an atmosphere.
 *
 * Two depths, as before, but the layers are drawn differently. The scan is
 * headings, metrics, product stills and the pulled-out decisions. The read
 * is the copy underneath. The page no longer ends every section with a
 * narrated verdict, because a verdict after every observation stops being
 * read as one.
 *
 * ---------------------------------------------------------------------
 * PLACEHOLDERS TO REPLACE
 *
 * Search this file for `<AssetSlot` and `<Thumb`. Every hole names the
 * exact file it is waiting for, matching the agreed asset list, so filling
 * one is a find-and-replace: swap the element for a <FadeInImage /> once
 * the file is in src/assets. Nothing here invents a product screenshot.
 *
 * The mascot artwork itself is not on this page. Rudolf appears only where
 * he appears in the real product, through product stills.
 * ---------------------------------------------------------------------
 */

const chapters: SprintChapter[] = [
  { n: '01', name: 'Finding the problem', target: 'behaviour' },
  { n: '02', name: 'Learning from use', target: 'testing' },
  { n: '03', name: 'Validating value', target: 'pricing' },
];

const storyline: Storyline = [
  {
    n: '00',
    name: 'Opening',
    slides: [
      { id: 'product', title: 'The product' },
      { id: 'summary', title: 'What happened in nine days' },
    ],
  },
  {
    n: '01',
    name: 'Finding the problem',
    target: 'behaviour',
    slides: [
      { id: 'behaviour', title: 'Good at saving, bad at finding' },
      { id: 'survey', title: 'The survey changed the problem' },
      { id: 'interviews', title: 'Why the behaviour happened' },
      { id: 'proposition', title: 'Testing the idea before building it' },
      { id: 'direction', title: 'The direction changed mid-build' },
      { id: 'scope', title: 'Defining the MVP' },
      { id: 'loop', title: 'The core product loop' },
      { id: 'system', title: 'Design rules the team could use' },
      { id: 'brand', title: 'Giving the brand a role' },
    ],
  },
  {
    n: '02',
    name: 'Learning from use',
    target: 'testing',
    slides: [
      { id: 'testing', title: 'Eight usability sessions' },
      { id: 'save-state', title: 'The save-state problem' },
      { id: 'decisions', title: 'Four decisions that changed' },
    ],
  },
  {
    n: '03',
    name: 'Validating value',
    target: 'pricing',
    slides: [
      { id: 'pricing', title: 'Asking people to pay' },
      { id: 'outcome', title: 'Nine days later, 15 people had paid' },
      { id: 'after', title: 'After day nine' },
      { id: 'today', title: 'The product today' },
      { id: 'reflection', title: 'What the nine days changed' },
    ],
  },
];

const LayrrrdCaseStudy = () => {
  usePageMeta(
    'Layrrrd',
    'From an untested idea to 15 paying customers in nine days. A zero-to-one product sprint: research, proposition, MVP, usability testing, design system, brand and paid validation in one continuous loop.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const order = useMemo(() => storylineOrder(storyline), []);
  const activeId = useActiveSlide(order);
  const [storyOpen, setStoryOpen] = useState(false);
  const closeStory = useCallback(() => setStoryOpen(false), []);

  return (
    <div className="paper-layrrrd paper-layrrrd-page min-h-screen bg-background text-foreground rail-offset">
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
        {/* ============================= 01 HERO ============================ */}
        <section id="top" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-12">
            <div>
              <StudyOpening
                slug="layrrrd"
                client="Layrrrd · Zero-to-one product · 2026"
                headline={
                  <>
                    From an untested idea to{' '}
                    <Em>15 paying customers in nine days.</Em>
                  </>
                }
              />

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                {/* The disciplines on both sides used to be listed here and
                    again in the metadata below, which is the same list twice
                    before the reader has learned anything. Prose keeps the
                    part the table cannot say: the streams ran at once. */}
                <p>
                  Layrrrd started with a behaviour we recognised in ourselves. We saved
                  articles and links constantly, and rarely returned to them. We gave
                  ourselves nine days to find out whether that was a problem worth building a
                  product around.
                </p>
                <p>
                  I led the team through the sprint. Everything happened at once, so
                  decisions moved quickly between research, design and engineering.
                </p>
                <p>
                  By day nine, Layrrrd had 126 freemium sign-ups and 15 paying customers. We
                  carried on developing the product after the sprint.
                </p>
              </div>

              <CaseStudyEntry
                storyHref="/case-study/layrrrd/story"
                scanMinutes={3}
                readMinutes={12}
              />
            </div>

            {/* The facts, moved out of the reading column and set as one card.
                As a run of dotted lists under the intro they were a third
                block of grey text on top of two others, and the split between
                what I led and what the team did, which is the point of the
                card, was invisible inside two sentences of middots. */}
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-x-8 gap-y-9">
                <Metric figure="9 days" caption="Idea to paid validation" />
                <Metric figure="15" caption="Paying customers by day nine" />
                <Metric figure="126" caption="Freemium sign-ups by day nine" />
              </div>

              <dl className="overflow-hidden rounded-[3px] bg-card">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-6 md:p-7">
                  <div>
                    <dt className="label mb-2.5 text-ink-500">Role</dt>
                    <dd className="text-base md:text-lg">Team Lead</dd>
                  </div>
                  <div>
                    <dt className="label mb-2.5 text-ink-500">Timeline</dt>
                    <dd className="text-base md:text-lg">June 2026 to present</dd>
                  </div>
                </div>

                {/* One list. It was three bands for a while, which turned a
                    hero card into an org chart: what I led, what I also
                    touched, what the team carried. The team's work is the
                    body of the page, not a column in a spec sheet. */}
                <div className="border-t border-border p-6 md:p-7">
                  <dt className="label mb-4 text-ink-500">What I led</dt>
                  <dd>
                    <ul className="space-y-2">
                      {[
                        'Product direction',
                        'UX and interaction design',
                        'Research',
                        'Engineering',
                        'Product validation',
                      ].map((item) => (
                        <li key={item} className="text-base leading-snug md:text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              <Link to="/case-study/layrrrd/story" className="rule-link self-start text-lg">
                Watch the story as slides <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== VISUAL 01 · THE PRODUCT ==================== */}
        {/* The product, before any more prose. Someone who reads one screen of
            this page should already know that it shipped. */}
        <Slide id="product" height="auto">
          <div className="grid gap-4 lg:grid-cols-[1.9fr_1fr] lg:gap-5">
            <AssetSlot
              label="Web library"
              note="layrrrd-library-current.png"
              ratio="aspect-[16/10]"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
              <AssetSlot
                label="Chrome extension"
                note="layrrrd-chrome-extension.png"
                ratio="aspect-[4/3]"
              />
              <AssetSlot
                label="Retrieval in Telegram"
                note="layrrrd-telegram-retrieval.png"
                ratio="aspect-[4/3]"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[2fr_1fr] lg:mt-5 lg:gap-5">
            <AssetSlot
              label="Weekly digest"
              note="layrrrd-weekly-digest.png"
              ratio="aspect-[21/9]"
            />
            <AssetSlot
              label="Rudolf in a loading state"
              note="layrrrd-rudolf-loading.png"
              ratio="aspect-[21/9]"
            />
          </div>

          <p className="mt-6 text-base leading-snug text-ink-600 md:text-lg">
            One product, several ways to save and return to what matters.
          </p>
        </Slide>

        {/* ================ 02 THE PROJECT IN 30 SECONDS =================== */}
        <Slide id="summary" height="auto">
          <Kicker label="The project in 30 seconds" />
          <Headline>What happened in nine days</Headline>

          <Progression
            steps={[
              {
                name: 'Observation',
                body: 'We were saving constantly and rarely returning.',
              },
              {
                name: '82-person survey',
                body: 'The stronger problem was retrieval, not saving.',
              },
              {
                name: 'Interviews',
                body: 'People wanted value without maintaining another organisation system.',
              },
              {
                name: 'Proposition test',
                body: 'We tested the idea before committing to the full product.',
              },
              {
                name: 'Working MVP',
                body: 'Capture, retrieval, library and resurfacing.',
              },
              {
                name: '8 usability tests',
                body: 'We changed onboarding, save feedback and navigation.',
              },
              {
                name: 'Payment',
                body: '15 people paid by day nine.',
              },
            ]}
          />
        </Slide>

        {/* ============= 03 STARTING WITH A BEHAVIOUR ====================== */}
        <Slide id="behaviour" chapter="01" height="auto">
          <Kicker n="01" label="Finding the problem" />

          {/* Not our line. Someone said this to us before there was a
              product, and it is where the project starts, so it is set as
              what it is: a quotation, with the observation underneath it
              rather than dressed up as our own insight. */}
          <Headline>
            &ldquo;I was good at saving things. I was bad at finding them again.&rdquo;
          </Headline>
          <p className="label mt-6 text-ink-500">The remark we started from</p>

          <Lede wide>
            We recognised it immediately. Our own browsers were full of open tabs and
            bookmarks. We sent links to ourselves on Telegram and WhatsApp, took screenshots,
            and used several notes apps. Saving something took almost no effort. Finding it
            again weeks later was different.
          </Lede>
          <Lede wide>
            Before turning that behaviour into a product idea, we needed to know whether it
            was a habit a few of us shared, or something a lot of people struggled with.
          </Lede>

          <SavedThenForgotten />
        </Slide>

        {/* ============ 04 RESEARCH CHANGED THE PROBLEM ==================== */}
        <Slide id="survey" chapter="01" height="auto">
          <Kicker label="The survey" />
          <Headline>The survey told us that saving wasn&rsquo;t the main problem.</Headline>

          <Lede wide>
            We surveyed 82 people about what they saved, where they saved it, whether they
            returned to it, and how they wanted useful content to come back.
          </Lede>

          <MetricRow>
            <Metric figure="54%" caption="Rarely revisited what they saved" />
            <Metric figure="59%" caption="Identified retrieval as an important need" />
            <Metric figure="73%" caption="Trusted recommendations from familiar sources" />
            <Metric figure="60%" caption="Selected WhatsApp as a preferred access point" />
          </MetricRow>

          <Lede wide>
            The important change for us was conceptual. We started by thinking about content
            overload. The research showed that people already had plenty of ways to save
            things. What was breaking was the journey afterwards: useful material disappeared
            into different places and became difficult to retrieve when it mattered.
          </Lede>

          {/* VISUAL 02 · the reframe, kept analytical rather than campaign-like. */}
          <Reframe
            steps={[
              { label: 'We started here', body: 'Too much content' },
              { label: 'Research showed', body: 'Saving isn’t the difficult part' },
              { label: 'We focused on', body: 'Returning to useful saved content' },
            ]}
          />

          <div className="mt-10 max-w-xs">
            <Thumb file="layrrrd-survey-results.png" ratio="aspect-[4/3]" />
            <p className="label mt-3 text-ink-500">The survey results</p>
          </div>

          <Note>
            n = 82, self-selected respondents recruited through our own networks during the
            sprint. Enough to redirect the work, not enough to size a market.
          </Note>
        </Slide>

        {/* ============ 05 INTERVIEWS EXPLAINED THE BEHAVIOUR ============== */}
        <Slide id="interviews" chapter="01" height="auto">
          <Kicker label="The conversations" />
          <Headline>
            The survey narrowed the problem. <Em>Conversations explained why it happened.</Em>
          </Headline>

          <Beside>
            <div>
              <Lede>We followed the survey with conversations about:</Lede>
              <Points
                items={[
                  'What people chose to save',
                  'When they expected to use something again',
                  'Where they looked when they could not find it',
                  'Whether they wanted organisation, retrieval or recommendations',
                  'How much maintenance they were willing to do',
                ]}
              />
            </div>
            <div>
              <Lede>
                A repeated behaviour was sending links to oneself, because messaging apps were
                already part of daily life. Another was postponing organisation indefinitely.
              </Lede>
              <Fragments
                lines={[
                  'I know I saved it somewhere.',
                  'I send links to myself.',
                  'I don’t want another folder system.',
                  'I’ll read it later.',
                ]}
              />
            </div>
          </Beside>

          <Decision label="Design implication">
            The product needed to create value before asking anyone to organise anything.
          </Decision>

          {/* VISUAL 03 · synthesis, reconstructed. The messy original sits
              underneath it at thumbnail size, as evidence rather than as art. */}
          <SynthesisColumns
            columns={[
              {
                label: 'Behaviour',
                items: ['Send links to self', 'Save quickly', 'Postpone organisation'],
              },
              {
                label: 'Problem',
                items: ['Fragmented storage', 'Weak recall', 'Effort required to return'],
              },
              {
                label: 'Design implication',
                items: ['Meet existing habits', 'Minimise filing', 'Prioritise retrieval'],
              },
            ]}
          />

          <div className="mt-10 max-w-xs">
            <Thumb file="layrrrd-research-board.png" ratio="aspect-[4/3]" />
            <p className="label mt-3 text-ink-500">The research board it came from</p>
          </div>
        </Slide>

        {/* ========= 06 TESTING THE IDEA BEFORE BUILDING THE PRODUCT ======= */}
        <Slide id="proposition" chapter="01" height="auto">
          <Kicker label="Testing the proposition" />
          <Headline>
            We used the first marketing page to test{' '}
            <Em>whether people understood the proposition.</Em>
          </Headline>

          <Beside>
            <div>
              <Lede>
                Before committing to the full MVP, we published an early version of the
                Layrrrd landing page. The goal was not visual polish.
              </Lede>
              <Lede>We wanted to see:</Lede>
              <Points
                items={[
                  'Whether someone unfamiliar with Layrrrd could explain what it did',
                  'Which part of the proposition they remembered',
                  'What they expected to happen after signing up',
                  'Whether the wording created the wrong expectation',
                  'Whether they were interested enough to leave their details',
                ]}
              />
              <Lede>
                That gave us a cheaper way to test the proposition before putting more
                engineering time behind it.
              </Lede>
            </div>

            {/* VISUAL 04 · first proposition beside the current one. */}
            <div>
              <AssetSlot
                label="The first landing page"
                note="layrrrd-first-landing-page.png"
                ratio="aspect-[4/3]"
              />
              <div className="mt-5 flex items-center gap-3">
                <span className="label text-ink-500">First proposition</span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
                <span className="label text-ink-500">Current proposition</span>
              </div>
              <div className="mt-5">
                <AssetSlot
                  label="The landing page today"
                  note="layrrrd-current-landing-page.png"
                  ratio="aspect-[4/3]"
                />
              </div>
            </div>
          </Beside>
        </Slide>

        {/* ====== 07 THE DIRECTION CHANGED BEFORE THE MVP WAS FINISHED ===== */}
        <Slide id="direction" chapter="01" height="auto">
          <Kicker label="Changing direction" />
          <Headline>
            We designed around scheduled resurfacing.{' '}
            <Em>Research pushed us toward retrieval.</Em>
          </Headline>

          <Lede wide>
            Our first concept centred on a scheduled digest: Layrrrd would periodically bring
            saved content back to the user. Research showed that some people preferred to ask
            for something when a need arose, instead of waiting for a scheduled delivery.
            That changed the product hierarchy.
          </Lede>

          {/* VISUAL 05 · the shape of the change, not a description of it. */}
          <DirectionShift
            before={{
              label: 'Early idea',
              chain: ['Saved content', 'Scheduled digest', 'User reads later'],
            }}
            after={{
              label: 'After research',
              chain: ['Saved content', 'Personal library'],
              branches: ['Ask and retrieve', 'Recommendations', 'Digest'],
            }}
          />

          <Lede wide>
            The research also showed that recommendations needed to feel relevant and grounded
            in familiar sources, rather than simply popular. Those decisions affected the MVP,
            the messaging, and the way we organised the experience.
          </Lede>
        </Slide>

        {/* ==================== 08 DEFINING THE MVP ======================== */}
        <Slide id="scope" chapter="01" height="auto">
          <Kicker label="Scope" />
          <Headline>We built only what was needed to test the core behaviour.</Headline>

          <Lede wide>
            With nine days, scope was part of the experiment. The first product needed to
            answer three questions.
          </Lede>

          <ol className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {[
              'Can saving something feel effortless?',
              'Can Layrrrd understand enough about it to make it useful later?',
              'Will people come back to retrieve it?',
            ].map((question, i) => (
              <li key={question} className="border-t-2 border-foreground pt-5">
                <span className="label tabular-nums text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-xl leading-snug md:text-2xl">{question}</p>
              </li>
            ))}
          </ol>

          <ScopeBoundary
            inScope={[
              'Capture from existing contexts',
              'Automatic summaries',
              'A personal library',
              'Retrieval',
              'Digest',
              'Lightweight onboarding',
            ]}
            outScope={[
              'Advanced organisation',
              'Large taxonomy systems',
              'Social features',
              'Collaboration',
              'Deep customisation',
              'Visual polish that did not help test the behaviour',
            ]}
          />
        </Slide>

        {/* ================== 09 THE CORE PRODUCT LOOP ==================== */}
        <Slide id="loop" chapter="01" height="auto">
          <Kicker label="The product" />
          <Headline size="large">
            Save it where you find it. Let Layrrrd do the organisation.{' '}
            <Em>Return when you need it.</Em>
          </Headline>

          <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
            {[
              {
                n: '01',
                name: 'Capture',
                body: 'People could save content from places they were already using.',
              },
              {
                n: '02',
                name: 'Understand',
                body: 'Layrrrd processed the content into useful context: summary, topic, source.',
              },
              {
                n: '03',
                name: 'Return',
                body: 'Saved material came back through the library, retrieval, recommendations or the digest.',
              },
            ].map((stage) => (
              <div key={stage.name}>
                <span className="label tabular-nums text-ink-500">{stage.n}</span>
                <h3 className="mt-2.5 text-2xl font-medium leading-none md:text-[2rem]">
                  {stage.name}
                </h3>
                <p className="mt-4 text-base leading-[1.5] text-ink-600 md:text-lg">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>

          {/* VISUAL 06 · four ways in, one library, four ways back out. */}
          <LoopPipeline
            inputs={[
              { name: 'Chrome extension', file: 'layrrrd-chrome-extension.png' },
              { name: 'Telegram', file: 'layrrrd-telegram-retrieval.png' },
              { name: 'WhatsApp', file: 'layrrrd-whatsapp-retrieval.png' },
              { name: 'Web', file: 'layrrrd-library-current.png' },
            ]}
            outputs={[
              { name: 'Library', file: 'layrrrd-library-current.png' },
              { name: 'Ask' },
              { name: 'Recommended' },
              { name: 'Digest', file: 'layrrrd-weekly-digest.png' },
            ]}
          />

          <Decision label="The decision that shaped the loop">
            Users did not have to construct an organisational system before receiving value.
          </Decision>
        </Slide>

        {/* =============== 10 DESIGN RULES THE TEAM COULD USE ============== */}
        <Slide id="system" chapter="01" height="auto">
          <Kicker label="The design system" />
          <Headline>
            The interface was changing daily, so <Em>the design rules had to be explicit.</Em>
          </Headline>

          <Beside>
            <div>
              <Lede>
                Engineering and design were happening in parallel. Relying only on finished
                Figma screens would have slowed the team down, and made the product
                inconsistent as new states and surfaces were added.
              </Lede>
              <Lede>
                So we documented the visual and interaction rules, in the repository rather
                than in a design file, and anyone could apply them without waiting on a new
                screen. Some implementation work used AI-assisted coding, which made having
                the rules written down useful there as well.
              </Lede>
              <Lede>They covered:</Lede>
              <Points
                items={[
                  'Type hierarchy and spacing',
                  'Colour usage',
                  'Component behaviour, buttons and inputs',
                  'Navigation patterns',
                  'Loading, success and error states',
                  'Where the product should stay visually quiet',
                  'Where the brand could be more expressive',
                ]}
              />
              <Decision label="What the rules were for">
                Not control over every screen. Enough shared ground that new work still felt
                like the same product.
              </Decision>
            </div>

            {/* VISUAL 07 · the system sheet. */}
            <div className="space-y-4">
              <AssetSlot
                label="Type, spacing and colour"
                note="layrrrd-design-system.png"
                ratio="aspect-[4/3]"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Thumb file="layrrrd-components.png" ratio="aspect-[4/3]" />
                <Thumb file="layrrrd-repository-design-rules.png" ratio="aspect-[4/3]" />
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <div className="rounded-[3px] bg-card p-5">
                  <p className="label mb-3 text-ink-500">Product</p>
                  <p className="text-base leading-snug md:text-lg">
                    Quiet, editorial, low distraction
                  </p>
                </div>
                <div className="rounded-[3px] bg-foreground p-5 text-background">
                  <p className="label mb-3 opacity-70">Brand moments</p>
                  <p className="text-base leading-snug md:text-lg">
                    Rudolf, membership, campaign, playful
                  </p>
                </div>
              </div>
            </div>
          </Beside>
        </Slide>

        {/* ============== 11 GIVING THE BRAND A ROLE ====================== */}
        <Slide id="brand" chapter="01" height="auto">
          <Kicker label="Brand" />
          <Headline>Rudolf gave the product personality where it was useful.</Headline>

          <Lede wide>
            We designed Rudolf as part of the Layrrrd identity, and deliberately kept the core
            interface restrained. The character appeared where personality or reassurance
            helped: loading states, empty states, retrieval conversations, Telegram and
            WhatsApp, onboarding and membership communication. That let Layrrrd have a
            recognisable character without turning every functional screen into a branded
            illustration.
          </Lede>


          {/* VISUAL 08 · one large, three small. */}
          <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-5">
            <AssetSlot
              label="Loading, while content is processing"
              note="layrrrd-rudolf-loading.png"
              ratio="aspect-[4/3]"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
              <AssetSlot
                label="Empty state"
                note="layrrrd-rudolf-empty.png"
                ratio="aspect-[16/9]"
              />
              <AssetSlot
                label="Conversational identity in WhatsApp"
                note="layrrrd-whatsapp-retrieval.png"
                ratio="aspect-[16/9]"
              />
              <AssetSlot
                label="Founding Membership"
                note="layrrrd-founding-membership.png"
                ratio="aspect-[16/9]"
              />
            </div>
          </div>
        </Slide>

        {/* ========= 12 PUTTING THE PRODUCT IN FRONT OF USERS ============== */}
        <Slide id="testing" chapter="02" height="auto">
          <Kicker n="02" label="Learning from use" />
          <Headline>
            Once people could use the product,{' '}
            <Em>we learned things interviews couldn&rsquo;t tell us.</Em>
          </Headline>

          <Lede wide>We ran eight usability sessions on the working product.</Lede>

          <MetricRow>
            <Metric figure="82" caption="Survey responses" />
            <Metric figure="8" caption="Usability tests" />
            <Metric figure="32" caption="Product sign-ups at that point" />
            <Metric figure="37" caption="People on the waitlist at that point" />
          </MetricRow>

          <Note>
            The sign-up and waitlist figures are a midway snapshot taken during usability
            testing, not the day-nine totals.
          </Note>

          <Verdicts
            worked={[
              'Retrieving saved content felt easy',
              'Saving required little effort',
              'Recommendations felt relevant rather than generic',
            ]}
            broke={[
              'Onboarding was too long',
              'People could not always tell whether saving had succeeded',
              'Reminders needed better judgment',
              'Navigation asked too much of first-time users',
            ]}
          />

          <Decision label="What testing was actually for">
            Not confirming the concept. Identifying where the main product loop still broke.
          </Decision>

          <div className="mt-10 max-w-xs">
            <Thumb file="layrrrd-usability-notes.png" ratio="aspect-[4/3]" />
            <p className="label mt-3 text-ink-500">Notes from the sessions</p>
          </div>

          {/* VISUAL 09 · what changed, as four before-and-afters. */}
          <BeforeAfterRows
            rows={[
              {
                area: 'Onboarding',
                before: 'Too many steps before the first save',
                after: 'A shortened entry into the product',
                beforeFile: 'layrrrd-onboarding-before.png',
                afterFile: 'layrrrd-onboarding-after.png',
                finding:
                  'People wanted to save something before being asked to set the product up.',
              },
              {
                area: 'Save feedback',
                before: 'Processing happened silently',
                after: 'An immediate pending state, resolving to saved',
                beforeFile: 'layrrrd-save-processing.png',
                afterFile: 'layrrrd-save-complete.png',
                finding:
                  'Without visible confirmation, testers repeated the save or assumed it had failed.',
              },
              {
                area: 'Navigation',
                before: 'Everything visible at once',
                after: 'A simpler first-use hierarchy',
                beforeFile: 'layrrrd-navigation-before.png',
                afterFile: 'layrrrd-navigation-after.png',
                finding:
                  'First-time users had to decide what mattered before they had any content to judge it with.',
              },
              {
                area: 'Reminders',
                before: 'Automatic resurfacing',
                after: 'More selective, more relevant delivery',
                beforeFile: 'layrrrd-reminders-before.png',
                afterFile: 'layrrrd-reminders-after.png',
                finding:
                  'Resurfacing something the user had already dealt with cost more trust than it earned.',
              },
            ]}
          />
        </Slide>

        {/* ============ 13 DEEP DIVE: THE SAVE-STATE PROBLEM ============== */}
        <Slide id="save-state" chapter="02" height="auto">
          <Kicker label="A closer look" />
          <Headline>
            The save was fast. <Em>The feedback wasn&rsquo;t clear enough.</Em>
          </Headline>

          <Lede wide>
            One usability issue was especially revealing. The system could process a saved
            link quickly, but the interface did not immediately show that anything had
            happened. From the user&rsquo;s side that created a simple question: did that
            save?
          </Lede>

          <TrustFlow
            before={{
              label: 'Before',
              steps: ['Save', 'Processing happens silently', 'No immediate confirmation'],
              end: 'Did that save?',
            }}
            after={{
              label: 'After',
              steps: [
                'Save',
                'Pending state appears immediately',
                'Processing stays visible',
                'The card resolves in place',
              ],
              end: 'Saved',
            }}
          />

          {/* VISUAL 10 · the sequence itself, in real frames. */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            <AssetSlot label="Save clicked" note="layrrrd-save-pending.png" ratio="aspect-[4/3]" />
            <AssetSlot label="Saving" note="layrrrd-save-processing.png" ratio="aspect-[4/3]" />
            <AssetSlot label="Processing" note="layrrrd-save-processing.png" ratio="aspect-[4/3]" />
            <AssetSlot label="Saved" note="layrrrd-save-complete.png" ratio="aspect-[4/3]" />
          </div>

          <div className="mt-10 max-w-md">
            <AssetSlot
              label="Already in your library"
              note="layrrrd-save-duplicate.png"
              ratio="aspect-[16/9]"
            />
          </div>

          <Lede wide>
            We also added explicit duplicate detection, so saving an existing item produced a
            clear response instead of silently creating another copy. It was a small interface
            change, and it solved a confidence problem without requiring the backend to become
            faster.
          </Lede>
        </Slide>

        {/* ========= 14 THE PRODUCT CHANGED BECAUSE OF WHAT WE LEARNED ===== */}
        <Slide id="decisions" chapter="02" height="auto">
          <Kicker label="What changed" />
          <Headline>Four decisions changed during the sprint.</Headline>

          <Pivots
            rows={[
              {
                from: 'Empty library',
                to: 'Useful first session',
                problem: 'A new personal library has no value in it yet.',
                change:
                  'Give people something useful immediately, instead of waiting for weeks of saved content.',
              },
              {
                from: 'Scheduled delivery',
                to: 'Retrieval first',
                problem:
                  'Some users wanted information when they needed it, not only on a schedule.',
                change: 'Retrieval moved to the centre of the experience.',
              },
              {
                from: 'Job-title audience',
                to: 'Saving behaviour',
                problem: 'The behaviour appeared across professions.',
                change:
                  'We stopped defining the initial audience mainly by profession, and focused on people who habitually save content.',
              },
              {
                from: 'Subscription setup',
                to: 'Founding Membership',
                problem:
                  'Recurring billing added overhead during a nine-day validation sprint.',
                change:
                  'We used a limited one-time Founding Membership to test whether people were willing to pay.',
              },
            ]}
          />
        </Slide>

        {/* ================== 15 ASKING PEOPLE TO PAY ===================== */}
        <Slide id="pricing" chapter="03" height="auto">
          <Kicker n="03" label="Validating value" />
          <Headline>
            Sign-ups showed interest. <Em>Payment tested commitment.</Em>
          </Headline>

          <Lede wide>
            We did not want to finish the sprint with only survey responses and people saying
            they would use the product. The evidence became progressively harder.
          </Lede>

          <Chain steps={['Interest', 'Sign-up', 'Use', 'Payment']} />

          <Beside>
            <div>
              <Lede>
                For the sprint we chose a limited Founding Membership rather than implementing
                the full recurring subscription model. It gave us a simpler way to answer the
                immediate question: did people care enough about this product to pay for it
                now?
              </Lede>
              <Points
                items={[
                  'A limited cohort',
                  'One payment',
                  'Early access',
                  'Influence over what we developed next',
                ]}
              />
              <Note>
                This was a validation instrument for the sprint, not a statement of the
                long-term commercial model.
              </Note>
            </div>

            {/* VISUAL 11 · the real commercial surfaces. */}
            <div className="grid gap-4">
              <AssetSlot
                label="Founding Membership"
                note="layrrrd-founding-membership.png"
                ratio="aspect-[4/3]"
              />
              <AssetSlot label="Checkout" note="layrrrd-checkout.png" ratio="aspect-[16/9]" />
            </div>
          </Beside>
        </Slide>

        {/* ========================= 16 OUTCOME =========================== */}
        <Slide id="outcome" chapter="03" height="auto" tone="ink">
          <p className="label opacity-70">Day nine</p>
          <h2 className="mt-6 max-w-[18ch] text-[2.5rem] font-medium leading-[1.0] md:text-[4.5rem]">
            Nine days later, 15 people had paid.
          </h2>

          <MetricRow>
            <Metric figure="15" caption="Paying customers" size="large" />
            <Metric figure="126" caption="Freemium sign-ups" size="large" />
            <Metric figure="9 days" caption="From first build to paid validation" size="large" />
          </MetricRow>

          <p className="mt-12 max-w-3xl text-base leading-[1.6] opacity-90 md:text-lg">
            Fifteen people paying for a nine-day-old product gave us enough evidence to keep
            building. The product did not stop at the sprint.
          </p>

          {/* VISUAL 12 · the evidence, rather than large typography alone. */}
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
            <AssetSlot
              label="Sign-ups in PostHog"
              note="layrrrd-posthog-signups.png"
              ratio="aspect-[16/10]"
            />
            <AssetSlot
              label="Payments, with customer details hidden"
              note="layrrrd-payments-dashboard.png"
              ratio="aspect-[16/10]"
            />
          </div>

          <Chain steps={['Day 1', 'Day 9', '15 paying customers']} dense />
        </Slide>

        {/* ======================= 17 AFTER DAY NINE ====================== */}
        <Slide id="after" chapter="03" height="auto">
          <Kicker label="After the sprint" />
          <Headline>
            The sprint ended. <Em>We kept building.</Em>
          </Headline>

          <Lede wide>
            Day nine answered whether there was enough early demand to continue. Afterwards,
            the same core product expanded into more of the places people were already saving
            and retrieving content.
          </Lede>

          <AfterTimeline
            steps={[
              'Day 9: paid validation',
              'Payments live',
              'Chrome extension',
              'Telegram',
              'WhatsApp',
              'Referral loop',
              'Trust and privacy work',
              'Today',
            ]}
          />
        </Slide>

        {/* ====================== 18 THE PRODUCT TODAY ==================== */}
        <Slide id="today" chapter="03" height="auto">
          <Kicker label="The product today" />
          <Headline>Different entry points, one product underneath.</Headline>

          <Lede wide>
            Chrome, the web app, Telegram and WhatsApp are not separate products. They are
            different ways into the same loop: save, process, retrieve, refine. Someone can
            save a link from one surface and return to it through another without learning a
            different system each time.
          </Lede>

          {/* VISUAL 13 · the second product showcase. */}
          <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-[1.6fr_1fr] lg:gap-5">
            <AssetSlot
              label="The library"
              note="layrrrd-library-current.png"
              ratio="aspect-[16/10]"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
              <AssetSlot
                label="Chrome extension"
                note="layrrrd-chrome-extension.png"
                ratio="aspect-[16/10]"
              />
              <AssetSlot
                label="Retrieval in WhatsApp"
                note="layrrrd-whatsapp-retrieval.png"
                ratio="aspect-[16/10]"
              />
            </div>
          </div>

          <div className="mt-4 lg:mt-5">
            <AssetSlot
              label="The weekly digest"
              note="layrrrd-weekly-digest.png"
              ratio="aspect-[24/7]"
            />
          </div>

          <p className="label mt-6 text-ink-500">One library</p>
        </Slide>

        {/* ======================= 19 REFLECTION ========================== */}
        <Slide id="reflection" chapter="03" height="auto">
          <Kicker label="Reflection" />
          <Headline>What the nine days changed in how I work</Headline>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-[1.6] text-ink-600 md:mt-12 md:text-lg">
            <p>
              The sprint compressed research, design, engineering, testing and commercial
              validation into one continuous loop.
            </p>
            <p>
              The biggest lesson for me was not that design can happen faster. It was that
              speed makes the order of evidence more important.
            </p>
            <p>
              We started with inexpensive evidence: observation, a survey and conversations.
              We then increased the commitment gradually, through a proposition, a working
              product, usability testing and finally payment.
            </p>
            <p>
              Several parts of the product changed along the way, because the evidence
              disagreed with our original assumptions. The product we were selling on day nine
              was not quite the product we imagined on day one.
            </p>
            <p>
              That is the part of the project I would keep. Move quickly, but make each
              decision earn the next investment.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/case-study/layrrrd/story" className="rule-link text-lg">
              The same story as slides <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/#work" className="rule-link text-lg text-ink-600">
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
