import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import ReadingProgress from '@/components/ReadingProgress';
import { StorylineNav, type Storyline } from '@/components/story/Storyline';
import {
  ArtSlot,
  Footnote,
  Headline,
  Kicker,
  Lede,
  Slide,
  Statement,
  CaseStudyEntry,
} from '@/components/case-study/slides/Slide';
import {
  Balance,
  Cards,
  ChangePair,
  CurationLoop,
  FlowLine,
  JourneyCompare,
  ReviewLoop,
  Shot,
  Triad,
  TwoSides,
} from '@/components/case-study/curateus/diagrams';
import { PluginComposition } from '@/components/case-study/curateus/PluginComposition';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * Curateus, told as the project it actually was: the first real product I
 * worked on, as a part-time UI/UX intern beside a Product Owner and three
 * developers.
 *
 * The page runs on the portfolio's own tokens and the shared slide kit
 * (components/case-study/slides), not a private design system, because
 * this study has no reason to look like a different website.
 *
 * Two rules govern the writing:
 *
 * 1. Ownership is stated precisely. Product decisions were collaborative
 *    and say so. Design work I executed is claimed in the first person
 *    without hedging. Neither is inflated to meet the other.
 *
 * 2. Nothing is invented. There are no outcome metrics on this page,
 *    because none were measured. The only figures are step counts, which
 *    come from the flows themselves.
 *
 * ---------------------------------------------------------------------
 * ARTWORK STILL OWED
 *
 * There is not a single Curateus image in src/assets yet, so every product
 * visual is an <ArtSlot> naming the exact export it wants. Search this file
 * for `<ArtSlot` to find them all, drop the files into src/assets, and swap
 * each slot for a <FadeInImage />. The dashed frames are deliberately
 * visible: a fabricated screenshot would be far worse than an obvious gap.
 * docs/curateus-assets.md is the shopping list.
 * ---------------------------------------------------------------------
 */

const storyline: Storyline = [
  {
    n: '00',
    name: 'Opening',
    slides: [
      { id: 'short-version', title: 'The whole project in six frames' },
      { id: 'overview', title: 'At a glance' },
      { id: 'my-role', title: 'Where I sat' },
    ],
  },
  {
    n: '01',
    name: 'The product',
    target: 'ch-product',
    slides: [
      { id: 'understanding', title: 'Found by people, not only by algorithm' },
      { id: 'mobile-mvp', title: 'Starting with what already shipped' },
      { id: 'two-sided', title: 'One product, two people to serve' },
      { id: 'research', title: 'Every other extension was built for saving' },
    ],
  },
  {
    n: '02',
    name: 'The friction',
    target: 'ch-friction',
    slides: [
      { id: 'the-break', title: 'Recommending broke the curator workflow' },
      { id: 'opportunity', title: 'Appearing where the recommendation starts' },
      { id: 'challenge', title: 'The design challenge' },
    ],
  },
  {
    n: '03',
    name: 'The design',
    target: 'ch-design',
    slides: [
      { id: 'ideation', title: 'Sketching the interaction before the screens' },
      { id: 'flow', title: 'The flow we converged on' },
      { id: 'principles', title: 'Four rules the plugin had to keep' },
      { id: 'lofi', title: 'From an agreed flow to something clickable' },
      { id: 'team-review', title: 'Wireframes as a conversation' },
      { id: 'lofi-hifi', title: 'Structure first, then the interface' },
      { id: 'visual-decision', title: 'Separating the plugin from the page under it' },
    ],
  },
  {
    n: '04',
    name: 'The plugin',
    target: 'ch-plugin',
    slides: [
      { id: 'final-experience', title: 'Recommend without leaving the article' },
      { id: 'before-after', title: 'Before and after' },
      { id: 'gallery', title: 'Selected Curateus work' },
    ],
  },
  {
    n: '05',
    name: 'What it taught me',
    target: 'ch-learned',
    slides: [
      { id: 'outcome', title: 'The interaction moved to the behaviour' },
      { id: 'reflection', title: 'Four things I did not know before' },
      { id: 'closing', title: 'Closing' },
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
  <Slide id={id} chapter={n} height="short" invert>
    <p className="label text-ink-500">Chapter {n}</p>
    <h2 className="mt-6 text-[3rem] leading-none md:text-[6rem]">{name}</h2>
    <p className="mt-7 max-w-2xl text-lg leading-snug text-ink-600 md:text-2xl">{question}</p>
  </Slide>
);

const CurateusCaseStudy = () => {
  usePageMeta(
    'Curateus',
    'Making content curation part of the browsing experience. My first product-design project: mobile work on a curator-first MVP, and a browser plugin that let curators recommend an article without leaving it.'
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
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
            <div>
              <StudyOpening
                slug="curateus"
                client="Curateus &middot; 2021"
                headline={
                  <>
                    Making content curation part of the{' '}
                    <span className="em">browsing experience</span>.
                  </>
                }
              />

              <p className="mt-8 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
                My first real product-design project. As a part-time UI/UX intern I worked with
                the product owner and developers on the Curateus mobile experience, and later
                designed a browser plugin that let curators recommend content without leaving
                the page they were reading.
              </p>

              <dl className="mt-12 grid max-w-2xl gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base md:text-lg">Part-time UI/UX Design Intern</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Timeline</dt>
                  <dd className="text-base md:text-lg">8+ weeks on the plugin work</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Contribution</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    UX exploration &middot; User flows &middot; Wireframes &middot; UI design
                    &middot; Prototyping &middot; Developer handoff
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Team</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Product Owner / PM &middot; 3 developers &middot; me
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Tools</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Figma &middot; Miro &middot; InVision &middot; Zeplin &middot; Illustrator
                  </dd>
                </div>
              </dl>

              <CaseStudyEntry scanMinutes={4} readMinutes={11} />
            </div>

            <div className="flex flex-col justify-center">
              <PluginComposition />
            </div>
          </div>
        </section>

        {/* ========================= THE SHORT VERSION ====================== */}
        <Slide id="short-version" height="auto">
          <Kicker label="If you have a minute, read only this" />
          <Headline>
            The whole project in <span className="em">six frames</span>.
          </Headline>

          <ol className="mt-12 grid gap-px border border-border bg-border md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Curateus',
                body: 'A human-curated discovery platform. People recommended what was worth reading, instead of an algorithm guessing.',
              },
              {
                title: 'The friction',
                body: 'Curators found articles in the browser. Recommending one meant leaving it, opening Curateus and typing the article back in.',
              },
              {
                title: 'The idea',
                body: 'Put Curateus in the browser, at the moment of discovery, instead of asking curators to travel to it.',
              },
              {
                title: 'My work',
                body: 'Sketches, user flows, wireframes, the final interface, and the handoff to the developers building it.',
              },
              {
                title: 'The interaction',
                body: 'Read, open the plugin, let it detect the article, add your judgement, recommend. The page never goes away.',
              },
              {
                title: 'What it taught me',
                body: 'Design the workflow, not just the screen. Bring engineering in early. Stay low fidelity while things can still change.',
              },
            ].map((frame, i) => (
              <li key={frame.title} className="flex flex-col bg-background p-6 md:p-8">
                <span className="label tabular-nums text-ink-500">{`0${i + 1}`}</span>
                <p className="mt-5 text-xl leading-snug md:text-2xl">{frame.title}</p>
                <p className="mt-3 text-sm leading-[1.55] text-ink-600 md:text-base">
                  {frame.body}
                </p>
              </li>
            ))}
          </ol>
        </Slide>

        {/* ============================ OVERVIEW ============================ */}
        <Slide id="overview" height="auto">
          <Kicker label="At a glance" />

          <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
            {[
              {
                label: 'Context',
                body: 'Curateus used human recommendations to help people discover useful content beyond algorithmic feeds.',
              },
              {
                label: 'Problem',
                body: 'Curators often found articles in their browser, but had to switch into Curateus to recommend them.',
              },
              {
                label: 'My contribution',
                body: 'I translated product requirements into flows, wireframes and final interfaces, iterating with the PO and the developers.',
              },
            ].map((card) => (
              <div key={card.label} className="bg-background p-6 md:p-8">
                <p className="label text-ink-500">{card.label}</p>
                <p className="mt-5 text-lg leading-[1.45] md:text-xl">{card.body}</p>
              </div>
            ))}
          </div>

          <JourneyCompare
            caption="Same outcome, two routes. The plugin removed the travel, not the judgement."
            rows={[
              {
                label: 'Browser, Curateus app, recommend',
                steps: [
                  { text: 'Read article' },
                  { text: 'Leave the page', mark: true },
                  { text: 'Open Curateus' },
                  { text: 'Find the flow' },
                  { text: 'Re-enter the article' },
                  { text: 'Add context' },
                  { text: 'Recommend' },
                ],
              },
              {
                label: 'Browser, Curateus plugin, recommend',
                primary: true,
                steps: [
                  { text: 'Read article' },
                  { text: 'Open plugin' },
                  { text: 'Add context' },
                  { text: 'Recommend' },
                ],
              },
            ]}
          />
        </Slide>

        {/* ============================= MY ROLE ============================ */}
        <Slide id="my-role" height="auto">
          <Kicker label="Where I sat" />
          <Headline>My role</Headline>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
                Curateus was my first opportunity to work on a real digital product. I joined
                part-time as a UI/UX Design Intern and worked closely with the Product Owner and
                the developers, turning requirements and feedback into usable flows and
                interfaces.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
                My contribution covered competitor review, early flow exploration, sketches,
                wireframes, interface design, prototyping and developer handoff.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] md:text-lg">
                Decisions about product direction and functionality were made collaboratively.
                My responsibility was how those decisions became an experience someone could
                use.
              </p>
            </div>

            <div className="flex items-center">
              <Triad />
            </div>
          </div>
        </Slide>

        {/* ======================= CHAPTER 01, PRODUCT ====================== */}
        <ChapterOpen
          id="ch-product"
          n="01"
          name="The product"
          question="What Curateus was for, and what it was becoming while I was there."
        />

        <Slide id="understanding" chapter="01" height="auto">
          <Kicker n="01" label="First, I had to understand the product" />
          <Headline>
            Useful content should not only be found by <span className="em">algorithm</span>.
          </Headline>
          <Lede wide>
            Curateus was built on a simple idea: people could recommend content they thought
            was worth someone else’s time, and that judgement was the product. The idea
            had already been validated as an MVP. The experience was still being worked out.
          </Lede>

          <CurationLoop />
        </Slide>

        <Slide id="mobile-mvp" chapter="01" height="auto">
          <Kicker n="01" label="Starting with the existing MVP" />
          <Headline>Starting with what already shipped.</Headline>
          <Lede wide>
            My first work was on the Curateus mobile product. The first version mainly served
            curators. As the concept developed, the team wanted to improve that experience and
            introduce a subscriber-facing side of the product. Before designing screens I went
            through the existing functionality, the requirements and the competing products, so
            that discovery, recommendations, saved content and preferences could be designed as
            one thing rather than six.
          </Lede>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 md:gap-8">
            {[
              ['Discover', 'curateus-mobile-discover.png'],
              ['Preferences', 'curateus-mobile-preferences.png'],
              ['Bookmarks', 'curateus-mobile-bookmarks.png'],
              ['Home feed', 'curateus-mobile-home.png'],
              ['Drafts', 'curateus-mobile-drafts.png'],
              ['Curator profile', 'curateus-mobile-profile.png'],
            ].map(([name, file]) => (
              <Shot key={name} title={name}>
                <ArtSlot label={name} note={file} ratio="aspect-[9/16]" />
              </Shot>
            ))}
          </div>

          <Footnote>
            Some of the mobile experiences I worked on while the product was growing past its
            curator-only MVP. Export these from the Curateus Figma file at full width rather
            than cropping them out of the old Miro board, which is too low resolution to carry
            a screen this size.
          </Footnote>
        </Slide>

        <Slide id="two-sided" chapter="01" height="auto">
          <Kicker n="01" label="From a curator tool to a broader product" />
          <Headline>
            One product, <span className="em">two people</span> to serve.
          </Headline>
          <Lede wide>
            The biggest change during my time on the mobile product was that Curateus was
            growing beyond a curator-only MVP. It now had to support two related experiences at
            once.
          </Lede>

          <TwoSides
            sides={[
              {
                title: 'Curators',
                note: 'The people whose judgement is the product',
                items: [
                  'Discover content',
                  'Evaluate whether it is worth passing on',
                  'Add the context that makes it a recommendation',
                  'Recommend it',
                ],
              },
              {
                title: 'Subscribers',
                note: 'The people that judgement is for',
                items: [
                  'Follow interests',
                  'Discover recommendations',
                  'Save what is useful',
                  'Explore curators and topics',
                ],
              },
            ]}
          />

          <Statement>
            It had to be designed as one connected system, not a pile of screens.
          </Statement>
        </Slide>

        <Slide id="research" chapter="01" height="auto">
          <Kicker n="01" label="Learning from existing behaviour" />
          <Headline>Every other extension was built for saving.</Headline>
          <Lede wide>
            As part of the design work I reviewed competitor products and browser extensions,
            and spoke with existing Curateus users. One pattern mattered more than the rest.
            Almost every extension in this space is built around saving something for yourself.
            A curator is not bookmarking. They are vouching for something on someone
            else’s behalf, and that needs more than a saved link.
          </Lede>

          <Cards
            items={[
              {
                title: 'Saving is not recommending',
                body: 'A bookmark only has to be findable again. A recommendation has to carry enough context that a stranger can decide whether to trust it.',
              },
              {
                title: 'Keep people in context',
                body: 'People consistently preferred actions that did not push them into another application or another tab to finish a thought.',
              },
              {
                title: 'Do not ask twice',
                body: 'Anything the browser already knows about the article should not be typed in again by the person recommending it.',
              },
            ]}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              ['Press on human curation', 'curateus-research-headlines.png'],
              ['Competitive landscape', 'curateus-research-landscape.png'],
              ['Human-curation players', 'curateus-research-curation.png'],
            ].map(([name, file]) => (
              <ArtSlot key={name} label={name} note={file} ratio="aspect-[4/3]" />
            ))}
          </div>

          <Footnote>
            Supporting artifacts, kept small on purpose. The competitor work informed the
            design; it was not the point of the project.
          </Footnote>
        </Slide>

        {/* ======================= CHAPTER 02, FRICTION ===================== */}
        <ChapterOpen
          id="ch-friction"
          n="02"
          name="The friction"
          question="Why the behaviour the product depended on kept getting interrupted."
        />

        <Slide id="the-break" chapter="02" height="auto">
          <Kicker n="02" label="The problem that led to the plugin" />
          <Headline size="large">
            Recommending still broke the <span className="em">curator’s workflow</span>.
          </Headline>
          <Lede wide>
            Curators were usually reading when they found something worth passing on. To
            recommend it they had to leave what they were doing, open Curateus, and describe
            the article again from memory. Each step was small. Together they were enough to
            interrupt the exact behaviour the product depended on.
          </Lede>

          <JourneyCompare
            caption="The dashed step is where the recommendation was most often lost."
            rows={[
              {
                label: 'Before',
                steps: [
                  { text: 'Browsing' },
                  { text: 'Find article' },
                  { text: 'Leave the context', mark: true },
                  { text: 'Open Curateus' },
                  { text: 'Find the recommendation flow' },
                  { text: 'Enter the content details' },
                  { text: 'Recommend' },
                ],
              },
            ]}
          />
        </Slide>

        <Slide id="opportunity" chapter="02" height="full" center invert>
          <p className="label text-ink-500">The opportunity</p>
          <p className="mt-10 max-w-[18ch] text-[2.5rem] leading-[1.02] md:text-[5rem]">
            What if Curateus appeared where the recommendation actually{' '}
            <span className="em">starts</span>?
          </p>
        </Slide>

        <Slide id="challenge" chapter="02" height="auto">
          <Kicker n="02" label="The design challenge" />
          <Headline size="large">
            How might we let curators recommend something the moment they find it, without
            turning the plugin into <span className="em">another whole app</span>?
          </Headline>

          <Balance
            left={{
              title: 'Low friction',
              body: 'Few enough steps that recommending stays a reflex rather than a task.',
              fail: 'A one-tap plugin produces bare links. That is a bookmark, and nobody trusts a bookmark.',
            }}
            right={{
              title: 'Enough context',
              body: 'Enough of the curator’s judgement attached that the recommendation is worth receiving.',
              fail: 'A full form in a popup is just the app again, in a smaller window, on top of the article.',
            }}
          />
        </Slide>

        {/* ======================== CHAPTER 03, DESIGN ====================== */}
        <ChapterOpen
          id="ch-design"
          n="03"
          name="The design"
          question="Sketches, flows, wireframes, and everything the team changed along the way."
        />

        <Slide id="ideation" chapter="03" height="auto">
          <Kicker n="03" label="Exploring the recommendation flow" />
          <Headline>I sketched the interaction before anyone drew a screen.</Headline>
          <Lede wide>
            I started by sketching different ways the recommendation could work. These were not
            meant to look good. They existed so the team could argue about the sequence with the
            PO and the developers before any of us committed to detailed screens.
          </Lede>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
            {[
              ['Opening the plugin', 'curateus-sketch-open.png'],
              ['Adding context', 'curateus-sketch-context.png'],
              ['Previewing it', 'curateus-sketch-preview.png'],
              ['Saving or publishing', 'curateus-sketch-save.png'],
            ].map(([name, file]) => (
              <Shot key={name} title={name}>
                <ArtSlot label={name} note={file} ratio="aspect-[4/3]" />
              </Shot>
            ))}
          </div>

          <Footnote>
            Crop these individually out of the original Miro board. The board itself is a
            working artifact, not a portfolio image.
          </Footnote>
        </Slide>

        <Slide id="flow" chapter="03" height="auto">
          <Kicker n="03" label="Reducing the journey" />
          <Headline>
            The flow we <span className="em">converged on</span>.
          </Headline>

          <FlowLine
            steps={[
              'Read article',
              'Open Curateus plugin',
              'Article information detected',
              'Add recommendation context',
              'Rate and categorise',
              'Recommend',
            ]}
            branch={{ from: 'any step', label: 'Save as draft, and come back to it later' }}
          />

          <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-[1fr_1.6fr] md:gap-12">
            <div>
              <p className="label mb-3 text-ink-500">Working artifact</p>
              <ArtSlot
                label="Original Miro flow"
                note="curateus-miro-flow.png, small on purpose"
                ratio="aspect-[4/3]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="label mb-3 text-ink-500">Final interaction model</p>
              <p className="text-base leading-[1.6] text-ink-600 md:text-lg">
                The working flow went through several rounds and looked like it. What is drawn
                above is the logic we settled on, redrawn so it can actually be read. The messy
                version stays in the case study at thumbnail size, because the mess is evidence
                that the thinking happened, not something to hide.
              </p>
            </div>
          </div>
        </Slide>

        <Slide id="principles" chapter="03" height="auto">
          <Kicker n="03" label="What guided the plugin design" />
          <Headline>Four rules the plugin had to keep.</Headline>

          <Cards
            columns={4}
            items={[
              {
                title: 'Stay in context',
                body: 'The article stays visible while it is being recommended. The plugin never takes the page away.',
              },
              {
                title: 'Pre-fill what the browser knows',
                body: 'Title, source and link are already available. Asking a curator to retype them is asking them to do the browser’s job.',
              },
              {
                title: 'Ask only for judgement',
                body: 'The only input worth a curator’s time is the part a machine cannot supply: whether this is any good, and who for.',
              },
              {
                title: 'Support unfinished work',
                body: 'Reading gets interrupted. A half-written recommendation should survive that and be waiting later.',
              },
            ]}
          />
        </Slide>

        <Slide id="lofi" chapter="03" height="auto">
          <Kicker n="03" label="Turning the flow into screens" />
          <Headline>From an agreed flow to something clickable.</Headline>
          <Lede wide>
            Once the interaction model was settled I translated the sketches into low-fidelity
            wireframes in Figma. At this stage I was working on hierarchy, sequence, actions and
            states. Styling would have only made the wireframes harder to argue with.
          </Lede>

          <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-3">
            {[
              ['Start a recommendation', 'curateus-lofi-start.png'],
              ['Recommendation details', 'curateus-lofi-details.png'],
              ['Preview and completion', 'curateus-lofi-preview.png'],
            ].map(([name, file], i) => (
              <Shot key={name} n={`0${i + 1}`} title={name}>
                <ArtSlot label={name} note={file} ratio="aspect-[3/4]" />
              </Shot>
            ))}
          </div>
        </Slide>

        <Slide id="team-review" chapter="03" height="auto">
          <Kicker n="03" label="Designing with the team" />
          <Headline>
            The wireframes were a <span className="em">conversation</span>, not a deliverable.
          </Headline>
          <Lede wide>
            I reviewed them with the PO and the developers rather than treating them as
            finished. Those sessions changed both the interaction and the information hierarchy.
          </Lede>

          <ChangePair
            items={[
              {
                title: 'Telling people where they were',
                before:
                  'The interface leaned on the form itself to communicate progress. If you knew the flow it was fine. If you did not, it was not.',
                after:
                  'I added headers and clearer step and context information, so it was always obvious which part of the recommendation you were in.',
              },
              {
                title: 'Supporting unfamiliar features',
                before:
                  'Some functionality was obvious to us and not at all obvious to a first-time user.',
                after:
                  'I introduced information icons and short supporting explanations at the points where the extra context actually helped.',
              },
              {
                title: 'Designing against what was buildable',
                before:
                  'Some of the interaction I explored assumed the plugin could reliably pull more from the page than it could.',
                after:
                  'The developers told us early where that broke, and I adjusted the interaction rather than the other way round.',
              },
            ]}
          />

          <ReviewLoop />

          <Statement>The design evolved through collaboration, not through one handoff.</Statement>
        </Slide>

        <Slide id="lofi-hifi" chapter="03" height="auto">
          <Kicker n="03" label="From structure to final interface" />
          <Headline>Structure first. Then the interface.</Headline>

          <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
            {[
              ['Recommendation entry', 'curateus-lofi-entry.png', 'curateus-hifi-entry.png'],
              ['Rating and metadata', 'curateus-lofi-rating.png', 'curateus-hifi-rating.png'],
              ['Final recommendation', 'curateus-lofi-final.png', 'curateus-hifi-final.png'],
            ].map(([name, lo, hi]) => (
              <div key={name}>
                <p className="label border-b border-border pb-3 text-ink-500">{name}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
                  <Shot title="Low fidelity">
                    <ArtSlot label={`${name}, lo-fi`} note={lo} ratio="aspect-[3/4]" />
                  </Shot>
                  <Shot title="High fidelity">
                    <ArtSlot label={`${name}, hi-fi`} note={hi} ratio="aspect-[3/4]" />
                  </Shot>
                </div>
              </div>
            ))}
          </div>

          <Footnote>
            Matched pairs, so the point is the progression rather than the finished UI.
          </Footnote>
        </Slide>

        <Slide id="visual-decision" chapter="03" height="auto">
          <Kicker n="03" label="Creating separation from the website underneath" />
          <Headline>
            The plugin could land on <span className="em">any website</span>.
          </Headline>
          <Lede wide>
            That is a real visual constraint. Whatever the plugin looked like, it had to stop
            reading as part of the page it was sitting on. I explored a darker Curateus
            treatment for the plugin so the interaction layer stayed clearly separate while the
            article itself remained visible underneath.
          </Lede>

          <PluginComposition annotate className="mt-12 md:mt-16" />
        </Slide>

        {/* ======================== CHAPTER 04, PLUGIN ====================== */}
        <ChapterOpen
          id="ch-plugin"
          n="04"
          name="The plugin"
          question="What the curator actually ends up doing, and how far it moved."
        />

        <Slide id="final-experience" chapter="04" height="auto">
          <Kicker n="04" label="The final experience" />
          <Headline size="large">
            Recommend without <span className="em">leaving the article</span>.
          </Headline>

          <div className="mt-12 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Plugin opened on the article', 'curateus-plugin-open.png'],
              ['Article details detected', 'curateus-plugin-metadata.png'],
              ['Topics and tags', 'curateus-plugin-topics.png'],
              ['Rating and recommendation', 'curateus-plugin-rating.png'],
              ['Confirmation', 'curateus-plugin-confirm.png'],
              ['Saved for later', 'curateus-plugin-draft.png'],
            ].map(([name, file], i) => (
              <Shot key={name} n={`0${i + 1}`} title={name}>
                <ArtSlot label={name} note={file} ratio="aspect-[4/3]" />
              </Shot>
            ))}
          </div>

          <Footnote>
            These are the screens that should carry the most visual weight on the page. Export
            them from Figma rather than cropping the Miro board.
          </Footnote>
        </Slide>

        <Slide id="before-after" chapter="04" height="auto">
          <Kicker n="04" label="Before and after" />
          <Headline>
            Moving Curateus closer to the <span className="em">moment of discovery</span>.
          </Headline>

          <JourneyCompare
            rows={[
              {
                label: 'Before',
                steps: [
                  { text: 'Discover in the browser' },
                  { text: 'Leave the context', mark: true },
                  { text: 'Open Curateus' },
                  { text: 'Enter the details' },
                  { text: 'Recommend' },
                ],
              },
              {
                label: 'With the plugin',
                primary: true,
                steps: [
                  { text: 'Discover in the browser' },
                  { text: 'Curateus appears in context' },
                  { text: 'Add judgement' },
                  { text: 'Recommend' },
                ],
              },
            ]}
          />

          <Statement>
            Less distance between finding something good and passing it on.
          </Statement>
        </Slide>

        <Slide id="gallery" chapter="04" height="auto">
          <Kicker n="04" label="Selected Curateus work" />
          <Headline>The work, in one place.</Headline>

          <p className="label mt-12 border-b border-border pb-3 text-ink-500 md:mt-16">
            Browser plugin
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr] md:gap-8">
            <ArtSlot
              label="Plugin, full state"
              note="curateus-plugin-hero.png"
              ratio="aspect-[16/10]"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <ArtSlot label="Topics" note="curateus-plugin-topics.png" ratio="aspect-[4/3]" />
              <ArtSlot label="Confirmation" note="curateus-plugin-confirm.png" ratio="aspect-[4/3]" />
            </div>
          </div>

          <p className="label mt-14 border-b border-border pb-3 text-ink-500 md:mt-16">
            Mobile product
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-6 md:gap-8">
            {[
              ['Discover', 'curateus-mobile-discover.png'],
              ['Home feed', 'curateus-mobile-home.png'],
              ['Preferences', 'curateus-mobile-preferences.png'],
              ['Bookmarks', 'curateus-mobile-bookmarks.png'],
              ['Drafts', 'curateus-mobile-drafts.png'],
              ['Curator profile', 'curateus-mobile-profile.png'],
            ].map(([name, file]) => (
              <ArtSlot key={name} label={name} note={file} ratio="aspect-[9/16]" />
            ))}
          </div>
        </Slide>

        {/* ======================= CHAPTER 05, LEARNED ===================== */}
        <ChapterOpen
          id="ch-learned"
          n="05"
          name="What it taught me"
          question="The first time I saw a design leave my file and become someone else’s problem to build."
        />

        <Slide id="outcome" chapter="05" height="auto">
          <Kicker n="05" label="Outcome" />
          <Headline>
            The interaction moved to where the <span className="em">behaviour already was</span>.
          </Headline>
          <Lede wide>
            The plugin gave Curateus a way to bring one of its most important interactions
            closer to the thing that triggered it. Instead of a recommendation being something a
            curator had to remember to go and do later, it could start while they were still
            reading.
          </Lede>
          <Lede wide>
            I prepared the final screens and specifications for the developers and handed them
            over through Zeplin. For me the project mattered for a second reason: it was the
            first time I designed a real product alongside a PO and engineers, and watched
            sketches turn into something being built.
          </Lede>

          <Footnote>
            There are no adoption or conversion numbers on this page. None were measured while I
            was on the project, and inventing them would be the easiest thing on here to catch.
          </Footnote>
        </Slide>

        <Slide id="reflection" chapter="05" height="auto">
          <Kicker n="05" label="What my first product project taught me" />
          <Headline>Four things I did not know before this.</Headline>

          <ol className="mt-12 divide-y divide-border border-y border-border md:mt-16">
            {[
              [
                'Good UX can be a question of where, not what',
                'I used to think about improving screens. The plugin showed me that the bigger opportunity is sometimes moving the interaction to a different place in someone’s day.',
              ],
              [
                'Design decisions are collaborative',
                'Working with the PO and the developers taught me that product design is not design then handoff. Requirements, feasibility and experience keep rewriting each other.',
              ],
              [
                'Low fidelity is useful because it is disposable',
                'Sketches and wireframes let us change the flow repeatedly. Nobody defends a drawing they made in ten minutes.',
              ],
              [
                'UI decisions solve interaction problems',
                'The darker plugin treatment was not a preference. It was the only way to keep Curateus legible on top of a website it knew nothing about.',
              ],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-5 py-6 md:gap-7">
                <span className="label w-6 shrink-0 pt-2 tabular-nums text-ink-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-lg leading-snug md:text-2xl">{title}</p>
                  <p className="mt-3 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Slide>

        <Slide id="closing" chapter="05" height="auto" invert>
          <p className="label text-ink-500">In closing</p>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-[1.6] text-ink-600 md:text-lg">
            <p>
              Curateus was where I first learned what designing a real product actually meant. I
              started out thinking mostly about screens. Through the project I began to
              understand flows, user context, technical constraints, and how much of an
              experience is shaped by the people you are designing with.
            </p>
            <p>
              The browser plugin is the clearest example of that shift. Rather than asking
              curators to adapt to the product, we moved the product closer to the behaviour
              they already had.
            </p>
          </div>

          <PluginComposition className="mt-14 w-full max-w-4xl md:mt-20" />

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/#work" className="rule-link text-lg">
              Back to the work <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/case-study/layrrrd" className="rule-link text-lg text-ink-600">
              Layrrrd, five years later <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Slide>
      </main>

      <Contact />
    </div>
  );
};

export default CurateusCaseStudy;
