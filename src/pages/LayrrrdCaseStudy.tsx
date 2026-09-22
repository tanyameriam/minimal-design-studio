import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import { RudolfPaw } from '@/components/case-study/layrrrd/Rudolf';
import { type Storyline } from '@/components/story/Storyline';
import { ReadingNav } from '@/design/ReadingNav';
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
  Shot,
  Points,
} from '@/components/case-study/layrrrd/primitives';
import { CaseStudyEntry } from '@/components/case-study/slides/Slide';
import {
  Beside,
  BeforeAfterRows,
  Chain,
  DirectionShift,
  Fragments,
  Pivots,
  Progression,
  Reframe,
  SavedThenForgotten,
  ScopeBoundary,
  ShippedSince,
  SynthesisColumns,
  TrustFlow,
  Verdicts,
} from '@/components/case-study/layrrrd/diagrams';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * Layrrrd, told as a product story rather than as a process report.
 *
 * It used to run on its own island of tokens: a warm cream ground, near-black
 * ink, and a reversed block to mark the turns, all declared separately in
 * index.css. It looked good and it was a second design language. A visitor
 * moving from the home page into this study left the portfolio's palette
 * entirely, which made the strongest piece of work on the site read as
 * somebody else's. The page is now set in the portfolio's own palette like
 * every other study, and the turns are marked with `.theme-invert`, the same
 * device the other case studies use.
 *
 * ---------------------------------------------------------------------
 * STRUCTURE
 *
 * Eighteen sections, where there used to be forty-seven slides and five
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
 * IMAGERY
 *
 * Every still on this page is real, and the page no longer holds space open
 * for stills that are not. The dashed <AssetSlot> and <Thumb> frames were
 * removed on 17 Sep 2026: with eleven slots filled from the product
 * recording the remaining holes read as damage rather than as intent, and
 * a section is better ending on its argument than on an empty rectangle.
 * Both primitives still exist for the next page that needs them.
 *
 * Still owed, and worth adding as <Shot /> when they exist: the weekly
 * digest, the duplicate-save state, the empty state,
 * checkout, the first landing page, the design-system and component sheets,
 * the repository rules, the research board, the usability notes, the
 * PostHog and payments dashboards, and the four before-and-after pairs
 * (whose rows render text-only until `beforeFile`/`afterFile` come back).
 *
 * The mascot artwork itself is not on this page. Rudolf appears only where
 * he appears in the real product, through product stills.
 * ---------------------------------------------------------------------
 */

// Stills from the product walkthrough recording, which is the only source
// of real Layrrrd screens this repository has. Filenames match the agreed
// asset list, so a better export can replace one without touching the page.
import chromeExtension from '@/assets/Layrrrd/layrrrd-chrome-extension.png';
import surveyResults from '@/assets/Layrrrd/layrrrd-survey-results.png';
import currentLandingPage from '@/assets/Layrrrd/layrrrd-current-landing-page.png';
import foundingMembership from '@/assets/Layrrrd/layrrrd-founding-membership.png';
import libraryCurrent from '@/assets/Layrrrd/layrrrd-library-current.png';
import saveComplete from '@/assets/Layrrrd/layrrrd-save-complete.png';
import savePending from '@/assets/Layrrrd/layrrrd-save-pending.png';
import saveProcessing from '@/assets/Layrrrd/layrrrd-save-processing.png';
import telegramConnected from '@/assets/Layrrrd/layrrrd-telegram-connected.png';

const storyline: Storyline = [
  {
    n: '00',
    name: 'Opening',
    slides: [
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
      { id: 'direction', title: 'We changed direction halfway' },
      { id: 'scope', title: 'Deciding what to build first' },
      { id: 'loop', title: 'How the app works' },
      { id: 'brand', title: 'Giving the brand a job' },
    ],
  },
  {
    n: '02',
    name: 'Learning from use',
    target: 'testing',
    slides: [
      { id: 'testing', title: 'Eight test sessions with users' },
      { id: 'save-state', title: 'Did it save?' },
      { id: 'decisions', title: 'Four decisions that changed' },
    ],
  },
  {
    n: '03',
    name: 'Proving people want it',
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
    'Building and testing an app that helps you find what you saved. A brand-new product in nine days: research, the idea, a first version, user tests, a design system, a brand, and real customers paying.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/*
        One navigation, like every other case study.
        This page used to carry three: the fifteen-rem storyline rail down
        the left, a sticky sprint bar under the site nav naming the same
        three chapters again, and the progress hairline above both. The paw
        was the only thing the sprint bar had that nothing else did, so it
        rides the shared progress line now and the bar is gone.
      */}
      <ReadingNav
        chapters={storyline}
        marker={<RudolfPaw className="h-3.5 w-auto text-foreground" />}
      />

      <main>
        {/* ============================= 01 HERO ============================ */}
        <section id="top" className="border-t border-border">
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-gutter py-section lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <StudyOpening
                slug="layrrrd"
                client="Layrrrd · A brand-new app · 2026"
                headline={
                  <>
                    Building and testing an app that <Em>finds what you saved.</Em>
                  </>
                }
                takeaways={{
                  problem:
                    'People save articles all the time and almost never go back to them. Saving was easy. Finding things again was not.',
                  did: 'Led a nine-day push from idea to a product people paid for, doing research, design and building all at once.',
                  outcome:
                    '126 free sign-ups and 15 paying customers by day nine. We kept building after the nine days.',
                }}
              />

              {/*
                Three paragraphs, down to one.
                The first said the problem, the second said what I did and the
                third gave the numbers - which is precisely what the takeaway
                block above now says, in a form a reader can take in without
                reading. What is left is the only part the summary cannot
                carry: where the idea came from, and what nine parallel days
                actually felt like to work in.
              */}
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.6] text-ink-600 md:text-lg">
                <p>
                  Layrrrd started with a habit we saw in ourselves. We gave ourselves nine days to
                  find out if it was a problem worth building a product for. I led the team. We did
                  everything at the same time, so research, design and coding choices changed in the
                  same afternoon.
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
                <Metric figure="9 days" caption="From idea to paying customers" />
                <Metric figure="15" caption="Paying customers by day nine" />
                <Metric figure="126" caption="Free sign-ups by day nine" />
              </div>

              <dl className="overflow-hidden rounded-[3px] bg-card">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-6 md:p-7">
                  <div>
                    <dt className="label mb-2.5 text-ink-500">Role</dt>
                    <dd className="text-base md:text-lg">Team Lead</dd>
                  </div>
                  <div>
                    <dt className="label mb-2.5 text-ink-500">Timeline</dt>
                    <dd className="text-base md:text-lg">June 2026 to now</dd>
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
                        'Designing how the app works and feels',
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

        {/* ================ 02 THE PROJECT IN 30 SECONDS =================== */}
        <Slide id="summary" height="auto">
          <Kicker label="The project in 30 seconds" />
          <Headline>What happened in nine days</Headline>

          <Progression
            steps={[
              {
                name: 'Observation',
                body: 'We saved things all the time and hardly ever went back.',
              },
              {
                name: '86-person survey',
                body: 'The bigger problem was finding things, not saving them.',
              },
              {
                name: 'Interviews',
                body: 'People wanted help without having to keep things tidy themselves.',
              },
              {
                name: 'Testing the idea',
                body: 'We tested the idea before building the whole product.',
              },
              {
                name: 'A first working version',
                body: 'Saving, finding, a library, and bringing things back.',
              },
              {
                name: '8 user tests',
                body: 'We changed the first steps, the save message and the menus.',
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
            We knew the feeling right away. Our own browsers were full of open tabs and
            bookmarks. We sent links to ourselves on Telegram and WhatsApp, took screenshots,
            and used several notes apps. Saving something took almost no effort. Finding it
            again weeks later was a different story.
          </Lede>
          <Lede wide>
            Before turning that habit into a product idea, we needed to know if only a few of
            us had it, or if lots of people struggled with it.
          </Lede>

          <SavedThenForgotten />
        </Slide>

        {/* ============ 04 RESEARCH CHANGED THE PROBLEM ==================== */}
        <Slide id="survey" chapter="01" height="auto">
          <Kicker label="The survey" />
          <Headline>The survey told us that saving wasn&rsquo;t the main problem.</Headline>

          <Lede wide>
            We asked 86 people what they saved, where they saved it, whether they went back to
            it, and how they wanted useful things to come back to them.
          </Lede>

          <MetricRow>
            <Metric figure="54%" caption="Hardly ever went back to what they saved" />
            <Metric figure="59%" caption="Said finding things again really mattered" />
            <Metric figure="73%" caption="Trusted tips from sources they knew" />
            <Metric figure="60%" caption="Picked WhatsApp as a place they would like to use it" />
          </MetricRow>

          <Lede wide>
            This changed how we thought about the problem. We started out thinking people had
            too much to read. The research showed that people already had plenty of ways to
            save things. What went wrong came afterwards: useful things got lost in different
            places and were hard to find when they were needed.
          </Lede>

          {/* VISUAL 02 · the reframe, kept analytical rather than campaign-like. */}
          <Reframe
            steps={[
              { label: 'We started here', body: 'Too much content' },
              { label: 'Research showed', body: 'Saving isn’t the hard part' },
              { label: 'We focused on', body: 'Getting back to useful things you saved' },
            ]}
          />

          {/* Portrait, and three charts deep: narrower than this and the
              questions stop being readable. */}
          <div className="mt-10 max-w-sm">
            <Shot
              src={surveyResults}
              alt="The survey results: 86 answers rating how likely people were to try an app like this, 43 per cent asking to try it early, and articles and videos as the things people save most."
              caption="The survey results"
              width={1391}
              height={1872}
            />
          </div>

          <Note>
            86 people answered. They chose to take part, and we found them through people we
            knew during the nine days. That was enough to change our direction, but not enough
            to say how big the market is.
          </Note>
        </Slide>

        {/* ============ 05 INTERVIEWS EXPLAINED THE BEHAVIOUR ============== */}
        <Slide id="interviews" chapter="01" height="auto">
          <Kicker label="The conversations" />
          <Headline>
            The survey showed us the problem. <Em>Talking to people showed us why.</Em>
          </Headline>

          <Beside>
            <div>
              <Lede>After the survey, we talked to people about:</Lede>
              <Points
                items={[
                  'What people chose to save',
                  'When they expected to use something again',
                  'Where they looked when they could not find it',
                  'Whether they wanted help sorting, finding, or getting tips',
                  'How much tidying up they were willing to do',
                ]}
              />
            </div>
            <div>
              <Lede>
                Many people sent links to themselves, because they already used messaging apps
                every day. Many also kept putting off sorting things, forever.
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

          <Decision label="What this meant for the design">
            The product had to be useful before asking anyone to sort anything.
          </Decision>

          {/* VISUAL 03 · synthesis, reconstructed. The messy original sits
              underneath it at thumbnail size, as evidence rather than as art. */}
          <SynthesisColumns
            columns={[
              {
                label: 'Behaviour',
                items: ['Send links to themselves', 'Save quickly', 'Put off sorting'],
              },
              {
                label: 'Problem',
                items: ['Things saved in many places', 'Hard to remember', 'Hard work to go back'],
              },
              {
                label: 'What this meant for the design',
                items: ['Fit habits people already have', 'Keep sorting to a minimum', 'Make finding things come first'],
              },
            ]}
          />
        </Slide>

        {/* ========= 06 TESTING THE IDEA BEFORE BUILDING THE PRODUCT ======= */}
        <Slide id="proposition" chapter="01" height="auto">
          <Kicker label="Testing the idea" />
          <Headline>
            We used the first version of our website to test{' '}
            <Em>whether people understood the idea.</Em>
          </Headline>

          <Lede wide>
            Before building the whole first version, we put an early Layrrrd website online.
            The goal was not to make it look perfect.
          </Lede>
          <Lede wide>We wanted to see:</Lede>
          <Points
            items={[
              'Whether someone new to Layrrrd could explain what it did',
              'Which part of the idea they remembered',
              'What they expected to happen after signing up',
              'Whether the words made them expect the wrong thing',
              'Whether they were interested enough to leave their details',
            ]}
          />
          <Lede wide>
            That was a cheaper way to test the idea before spending more coding time on it.
          </Lede>
        </Slide>

        {/* ====== 07 THE DIRECTION CHANGED BEFORE THE MVP WAS FINISHED ===== */}
        <Slide id="direction" chapter="01" height="auto">
          <Kicker label="Changing direction" />
          <Headline>
            We designed around sending saved things back on a schedule.{' '}
            <Em>Research pushed us toward finding things when you need them.</Em>
          </Headline>

          <Lede wide>
            Our first idea was a regular digest: Layrrrd would send saved things back to you
            every so often. Research showed that some people would rather ask for something when
            they needed it, instead of waiting for a scheduled message. That changed what came
            first in the product.
          </Lede>

          {/* VISUAL 05 · the shape of the change, not a description of it. */}
          <DirectionShift
            before={{
              label: 'Early idea',
              chain: ['Saved things', 'Regular digest', 'You read it later'],
            }}
            after={{
              label: 'After research',
              chain: ['Saved things', 'Your own library'],
              branches: ['Ask and find', 'Tips', 'Digest'],
            }}
          />

          <Lede wide>
            Research also showed that tips needed to feel useful and come from sources people
            knew, not just be popular. Those choices shaped the first version, the words we
            used, and the way we organised the app.
          </Lede>
        </Slide>

        {/* ==================== 08 DEFINING THE MVP ======================== */}
        <Slide id="scope" chapter="01" height="auto">
          <Kicker label="What to build first" />
          <Headline>We built only what we needed to test the main habit.</Headline>

          <Lede wide>
            With only nine days, choosing what to build was part of the test. The first version
            had to answer three questions.
          </Lede>

          <ol className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {[
              'Can saving something feel effortless?',
              'Can Layrrrd understand enough about it to make it useful later?',
              'Will people come back to find it?',
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
              'Saving from places people already use',
              'Automatic summaries',
              'A personal library',
              'Retrieval',
              'Digest',
              'Lightweight onboarding',
            ]}
            outScope={[
              'Advanced organisation',
              'Big, complicated ways of sorting',
              'Social features',
              'Collaboration',
              'Deep customisation',
              'Making things look perfect when it did not help the test',
            ]}
          />
        </Slide>

        {/* ================== 09 THE CORE PRODUCT LOOP ==================== */}
        <Slide id="loop" chapter="01" height="auto">
          <Kicker label="The product" />
          <Headline size="large">
            Save it where you find it. Let Layrrrd do the sorting.{' '}
            <Em>Return when you need it.</Em>
          </Headline>

          <div className="mt-break grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              {
                n: '01',
                name: 'Capture',
                body: 'People could save things from places they already used.',
              },
              {
                n: '02',
                name: 'Understand',
                body: 'Layrrrd read each saved thing and added useful details: a summary, a topic and where it came from.',
              },
              {
                n: '03',
                name: 'Return',
                body: 'Saved things came back through the library, a search, tips or the digest.',
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

          <Decision label="The choice that shaped how it works">
            Users did not have to set up a way of sorting things before the app was useful.
          </Decision>
        </Slide>

        {/* ============== 10 GIVING THE BRAND A ROLE ====================== */}
        <Slide id="brand" chapter="01" height="auto">
          <Kicker label="Brand" />
          <Headline>Rudolf gave the app personality where it helped.</Headline>

          <Lede wide>
            We designed Rudolf, a cartoon dog, as part of the Layrrrd brand, and kept the main
            screens plain on purpose. Rudolf showed up where a bit of personality or comfort
            helped: while things loaded, on empty screens, in chats in Telegram, in the first
            steps, and in messages about membership. That gave Layrrrd a character people could
            recognise, without turning every working screen into a drawing.
          </Lede>

        </Slide>

        {/* ========= 11 PUTTING THE PRODUCT IN FRONT OF USERS ============== */}
        <Slide id="testing" chapter="02" height="auto">
          <Kicker n="02" label="Learning from use" />
          <Headline>
            Once people could use the product,{' '}
            <Em>we learned things interviews couldn&rsquo;t tell us.</Em>
          </Headline>

          <Lede wide>We watched eight people use the working app.</Lede>

          <MetricRow>
            <Metric figure="86" caption="Survey responses" />
            <Metric figure="8" caption="User tests" />
            <Metric figure="32" caption="Sign-ups at that point" />
            <Metric figure="37" caption="People on the waitlist at that point" />
          </MetricRow>

          <Note>
            The sign-up and waitlist numbers were taken partway through, during the user tests.
            They are not the totals from day nine.
          </Note>

          <Verdicts
            worked={[
              'Finding saved things felt easy',
              'Saving required little effort',
              'Tips felt personal, not generic',
            ]}
            broke={[
              'The first steps took too long',
              'People could not always tell if saving had worked',
              'Reminders needed to be smarter about timing',
              'The menus were confusing for first-time users',
            ]}
          />

          <Decision label="What testing was really for">
            Not proving the idea was good. Finding where the app still broke.
          </Decision>

          {/* VISUAL 09 · what changed, as four before-and-afters. */}
          <BeforeAfterRows
            rows={[
              {
                area: 'Onboarding',
                before: 'Too many steps before you could save anything',
                after: 'A shorter way in',
                finding:
                  'People wanted to save something before being asked to set things up.',
              },
              {
                area: 'Save message',
                before: 'The app worked in silence',
                after: 'A "saving…" sign right away, which turns into "saved"',
                finding:
                  'With no sign that it worked, testers saved again or thought it had failed.',
              },
              {
                area: 'Navigation',
                before: 'Everything visible at once',
                after: 'A simpler screen for first-timers',
                finding:
                  'New users had to decide what mattered before they had saved anything to judge it by.',
              },
              {
                area: 'Reminders',
                before: 'Sending things back automatically',
                after: 'Sending back fewer, better things',
                finding:
                  'Sending back something the user had already dealt with made them trust the app less.',
              },
            ]}
          />
        </Slide>

        {/* ============ 12 DEEP DIVE: THE SAVE-STATE PROBLEM ============== */}
        <Slide id="save-state" chapter="02" height="auto">
          <Kicker label="A closer look" />
          <Headline>
            The save was fast. <Em>But the app did not show it clearly.</Em>
          </Headline>

          <Lede wide>
            One problem taught us a lot. The app could handle a saved link quickly, but the
            screen did not show right away that anything had happened. So people asked
            themselves a simple question: did that save?
          </Lede>

          <TrustFlow
            before={{
              label: 'Before',
              steps: ['Save', 'The app works in silence', 'No sign that it worked'],
              end: 'Did that save?',
            }}
            after={{
              label: 'After',
              steps: [
                'Save',
                'A "saving…" sign appears right away',
                'You can see it working',
                'The card fills in where it is',
              ],
              end: 'Saved',
            }}
          />

          {/* VISUAL 10 · the sequence itself, in real frames. */}
          {/* Three frames, not the four this grid used to hold open: two of
              those slots named the same file, and the recording shows one
              processing state, not two. */}
          <div className="mt-break grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Shot
              src={savePending}
              alt="The library with an article URL pasted into the save field and the Save button not yet pressed."
              caption="Link pasted"
              width={1680}
              height={1050}
            />
            <Shot
              src={saveProcessing}
              alt="The same library a moment later: the new item is there as a blank card, still showing its web address while Layrrrd reads the page."
              caption="Processing"
              width={1680}
              height={1050}
            />
            <Shot
              src={saveComplete}
              alt="The library once processing finishes: the card now carries the article title, its image, its source and its reading time."
              caption="Saved"
              width={1680}
              height={1050}
            />
          </div>

          <Lede wide>
            We also made the app notice when you save something twice. Instead of quietly making
            another copy, it now tells you clearly. It was a small change to the screen, and it
            made people feel sure it worked, without making the app itself any faster.
          </Lede>
        </Slide>

        {/* ========= 13 THE PRODUCT CHANGED BECAUSE OF WHAT WE LEARNED ===== */}
        <Slide id="decisions" chapter="02" height="auto">
          <Kicker label="What changed" />
          <Headline>Four decisions changed during the sprint.</Headline>

          <Pivots
            rows={[
              {
                from: 'Empty library',
                to: 'Useful first session',
                problem: 'A new library has nothing useful in it yet.',
                change:
                  'Give people something useful right away, instead of making them wait weeks for saved things to pile up.',
              },
              {
                from: 'Sending on a schedule',
                to: 'Finding things first',
                problem:
                  'Some users wanted information when they needed it, not only on a schedule.',
                change: 'Finding things became the heart of the app.',
              },
              {
                from: 'Aiming at certain jobs',
                to: 'Aiming at people who save a lot',
                problem: 'People in all kinds of jobs had the same habit.',
                change:
                  'We stopped choosing our first users by their job, and focused on people who save things all the time.',
              },
              {
                from: 'Monthly payments',
                to: 'Founding Membership',
                problem:
                  'Setting up monthly payments was too much work for a nine-day test.',
                change:
                  'We offered a limited, one-time Founding Membership to see if people would pay.',
              },
            ]}
          />
        </Slide>

        {/* ================== 14 ASKING PEOPLE TO PAY ===================== */}
        <Slide id="pricing" chapter="03" height="auto">
          <Kicker n="03" label="Proving people want it" />
          <Headline>
            Sign-ups showed people were curious. <Em>Paying showed they really meant it.</Em>
          </Headline>

          <Lede wide>
            We did not want to end the nine days with only survey answers and people saying they
            would use the app. So each step asked people for a bit more.
          </Lede>

          <Chain steps={['Interest', 'Sign-up', 'Use', 'Payment']} />

          <Beside>
            <div>
              <Lede>
                For the nine days we chose a limited Founding Membership instead of building full
                monthly payments. It was a simpler way to answer the question we had right then:
                did people care enough about this app to pay for it now?
              </Lede>
              <Points
                items={[
                  'A limited cohort',
                  'One payment',
                  'Early access',
                  'A say in what we built next',
                ]}
              />
              <Note>
                This was a way to test people during the nine days. It was not our long-term plan
                for making money.
              </Note>
            </div>

            {/* VISUAL 11 · the real commercial surfaces. */}
            <Shot
              src={foundingMembership}
              alt="The founding membership page: lifetime access for a one-time payment, the launch price struck through, and what a founding member gets."
              caption="Founding Membership"
              width={1680}
              height={1050}
            />
          </Beside>
        </Slide>

        {/* ========================= 15 OUTCOME =========================== */}
        <Slide id="outcome" chapter="03" height="auto" tone="ink">
          <p className="label opacity-70">Day nine</p>
          <h2 className="mt-6 max-w-[18ch] text-[2.5rem] font-medium leading-[1.0] md:text-[4.5rem]">
            Nine days later, 15 people had paid.
          </h2>

          <MetricRow>
            <Metric figure="15" caption="Paying customers" size="large" />
            <Metric figure="126" caption="Free sign-ups" size="large" />
            <Metric figure="9 days" caption="From the first build to paying customers" size="large" />
          </MetricRow>

          <p className="mt-12 max-w-3xl text-base leading-[1.6] opacity-90 md:text-lg">
            Fifteen people paying for an app that was only nine days old was enough proof to
            keep building. The app did not stop after the nine days.
          </p>

          <Chain steps={['Day 1', 'Day 9', '15 paying customers']} dense />
        </Slide>

        {/* ======================= 16 AFTER DAY NINE ====================== */}
        <Slide id="after" chapter="03" height="auto">
          <Kicker label="After the nine days" />
          <Headline>
            The nine days ended. <Em>We kept building.</Em>
          </Headline>

          <Lede wide>
            Day nine showed there were enough early fans to keep going. After that, the same
            app grew into more of the places where people were already saving and finding
            things.
          </Lede>

          <ShippedSince
            items={[
              {
                name: 'A Chrome add-on, now live',
                note: 'Saving from the page someone is already reading.',
              },
              {
                name: 'Both chat channels',
                note: 'Telegram and WhatsApp, the two places people already sent themselves links.',
              },
              { name: 'Ways to invite friends' },
              {
                name: 'Work on trust and privacy',
                note: 'Including deleting your account so that everything really goes with it.',
              },
            ]}
          />
        </Slide>

        {/* ====================== 17 THE PRODUCT TODAY ==================== */}
        <Slide id="today" chapter="03" height="auto">
          <Kicker label="The product today" />
          <Headline>Different ways in, one app underneath.</Headline>

          <Lede wide>
            Chrome, the web app and Telegram are not separate apps. They are different ways into
            the same steps: save it, let Layrrrd read it, find it, improve it. You can save a link
            in one place and come back to it in another, without learning something new each
            time.
          </Lede>

          {/* VISUAL 13 · the four surfaces, two up. Every still here is 16:10,
              so the rows land level without cropping anything to make them,
              and `items-start` keeps a figure at its image's height rather
              than stretching it to its neighbour. */}
          <div className="mt-break grid items-start gap-4 md:grid-cols-2 md:gap-5">
            <Shot
              src={libraryCurrent}
              alt="The Layrrrd web library: saved articles as cards, each showing where it came from, how long it takes to read, key points and a bookmark button."
              caption="The library"
              width={1680}
              height={1050}
            />
            <Shot
              src={chromeExtension}
              alt="The Layrrrd browser add-on open over a TechCrunch article, showing the page it found above one Save this page button."
              caption="Chrome add-on"
              width={1680}
              height={1050}
            />
            <Shot
              src={telegramConnected}
              alt="The Rudolf bot in Telegram, confirming the chat is linked to a Layrrrd account and that any link pasted there will be saved."
              caption="Rudolf in Telegram"
              width={1290}
              height={806}
            />
            <Shot
              src={currentLandingPage}
              alt="The Layrrrd landing page: the wordmark over the line Good things, saved. Better things, fetched., with Rudolf running beside it."
              caption="The landing page today"
              width={1680}
              height={1050}
            />
          </div>

          <p className="label mt-6 text-ink-500">One library</p>
        </Slide>

        {/* ======================= 18 REFLECTION ========================== */}
        <Slide id="reflection" chapter="03" height="auto">
          <Kicker label="Reflection" />
          <Headline>How the nine days changed the way I work</Headline>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-[1.6] text-ink-600 md:mt-12 md:text-lg">
            <p>
              The nine days squeezed research, design, coding, testing and selling into one loop
              that never stopped.
            </p>
            <p>
              The biggest lesson for me was not that design can happen faster. It was that when
              you move fast, the order in which you collect proof matters even more.
            </p>
            <p>
              We started with cheap proof: watching, a survey and conversations. Then we asked a
              bit more of people each time: an idea, a working app, user tests and finally
              paying.
            </p>
            <p>
              Many parts of the app changed along the way, because what we learned did not match
              what we first believed. The app we were selling on day nine was not quite the app we
              imagined on day one.
            </p>
            <p>
              That is the part of the project I would keep. Move fast, but let each choice prove
              itself before you spend more on the next one.
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
