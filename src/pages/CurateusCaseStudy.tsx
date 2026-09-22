import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { StudyOpening } from '@/components/case-study/slides/StudyOpening';
import Contact from '@/components/Contact';
import { type Storyline } from '@/components/story/Storyline';
import { ReadingNav } from '@/design/ReadingNav';
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
      { id: 'understanding', title: 'Picked by people, not only by computers' },
      { id: 'mobile-mvp', title: 'Starting with what already existed' },
      { id: 'two-sided', title: 'One product, two people to serve' },
      { id: 'research', title: 'Every other browser add-on was built for saving' },
    ],
  },
  {
    n: '02',
    name: 'The problem',
    target: 'ch-friction',
    slides: [
      { id: 'the-break', title: 'Sharing got in the way of reading' },
      { id: 'opportunity', title: 'Showing up where sharing starts' },
      { id: 'challenge', title: 'The design challenge' },
    ],
  },
  {
    n: '03',
    name: 'The design',
    target: 'ch-design',
    slides: [
      { id: 'ideation', title: 'Sketching the interaction before the screens' },
      { id: 'flow', title: 'The steps we agreed on' },
      { id: 'principles', title: 'Four rules the add-on had to follow' },
      { id: 'lofi', title: 'From agreed steps to something clickable' },
      { id: 'team-review', title: 'Sketches as a conversation' },
      { id: 'lofi-hifi', title: 'Structure first, then the look' },
      { id: 'visual-decision', title: 'Making the add-on stand out from the page under it' },
    ],
  },
  {
    n: '04',
    name: 'The add-on',
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
      { id: 'outcome', title: 'Sharing moved to where people read' },
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
    'Sharing good articles right from the browser. My first product design project: work on the phone app, and a browser add-on that let people share an article without leaving it.'
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
          <div className="mx-auto grid w-full max-w-[var(--shell)] gap-14 px-gutter py-section lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <StudyOpening
                slug="curateus"
                client="Curateus &middot; 2021"
                headline={
                  <>
                    Sharing good articles <span className="em">right from the browser</span>.
                  </>
                }
                takeaways={{
                  problem:
                    'To share an article, people had to leave the page and go through seven steps, so most articles never got shared.',
                  did: 'Worked on the phone app, then designed a browser add-on that let people share without leaving the page.',
                  outcome: 'Seven steps down to four, counted in the add-on.',
                }}
              />

              <p className="mt-8 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
                My first real product design project. As a part-time design intern I worked with
                the product owner and the developers on the Curateus phone app. Later I designed a
                browser add-on that let people share articles without leaving the page they were
                reading.
              </p>

              <dl className="mt-12 grid max-w-2xl gap-x-10 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <dt className="label mb-2.5 text-ink-500">Role</dt>
                  <dd className="text-base md:text-lg">Part-time design intern</dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Timeline</dt>
                  <dd className="text-base md:text-lg">8+ weeks on the add-on</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="label mb-2.5 text-ink-500">Contribution</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Trying out ideas &middot; Planning the steps &middot; Sketches &middot; Screen
                    design &middot; Interactive prototypes &middot; Handing over to developers
                  </dd>
                </div>
                <div>
                  <dt className="label mb-2.5 text-ink-500">Team</dt>
                  <dd className="text-base leading-snug md:text-lg">
                    Product owner &middot; 3 developers &middot; me
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

          <ol className="mt-break grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Curateus',
                body: 'An app for finding good things to read, picked by people. People shared what was worth reading, instead of a computer guessing.',
              },
              {
                title: 'The problem',
                body: 'People found articles in the browser. Sharing one meant leaving it, opening Curateus and typing the article in again.',
              },
              {
                title: 'The idea',
                body: 'Put Curateus in the browser, right where people find things, instead of making them go to it.',
              },
              {
                title: 'My work',
                body: 'Sketches, the steps, simple layouts, the final screens, and handing it all to the developers who built it.',
              },
              {
                title: 'How it works',
                body: 'Read, open the add-on, let it spot the article, say what you think, share. The page never goes away.',
              },
              {
                title: 'What it taught me',
                body: 'Design the whole task, not just the screen. Bring developers in early. Keep sketches rough while things can still change.',
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
                body: 'Curateus used tips from real people to help others find good things to read, beyond what computers pick.',
              },
              {
                label: 'Problem',
                body: 'People often found articles in their browser, but had to switch to Curateus to share them.',
              },
              {
                label: 'My contribution',
                body: 'I turned what the product needed into steps, simple layouts and final screens, improving them again and again with the product owner and the developers.',
              },
            ].map((card) => (
              <div key={card.label} className="bg-background p-6 md:p-8">
                <p className="label text-ink-500">{card.label}</p>
                <p className="mt-5 text-lg leading-[1.45] md:text-xl">{card.body}</p>
              </div>
            ))}
          </div>

          <JourneyCompare
            caption="Same result, two routes. The add-on removed the trip, not the thinking."
            rows={[
              {
                label: 'Browser, Curateus app, share',
                steps: [
                  { text: 'Read article' },
                  { text: 'Leave the page', mark: true },
                  { text: 'Open Curateus' },
                  { text: 'Find where to share' },
                  { text: 'Type in the article again' },
                  { text: 'Say why it is good' },
                  { text: 'Recommend' },
                ],
              },
              {
                label: 'Browser, Curateus add-on, share',
                primary: true,
                steps: [
                  { text: 'Read article' },
                  { text: 'Open add-on' },
                  { text: 'Say why it is good' },
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
                Curateus was my first chance to work on a real digital product. I joined part-time
                as a design intern and worked closely with the product owner and the developers. I
                turned what they needed, and what they said about my work, into steps and screens
                people could use.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] text-ink-600 md:text-lg">
                I looked at other products, tried out early ideas for the steps, and made sketches,
                simple layouts, screen designs, interactive prototypes and files for the developers.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-[1.6] md:text-lg">
                We decided together what the product should do. My job was to turn those decisions
                into something people could actually use.
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
          question="What Curateus was for, and what it was turning into while I was there."
        />

        <Slide id="understanding" chapter="01" height="auto">
          <Kicker n="01" label="First, I had to understand the product" />
          <Headline>
            Good things to read should not only be picked by <span className="em">computers</span>.
          </Headline>
          <Lede wide>
            Curateus was built on a simple idea: people could share things they thought were
            worth someone else’s time, and their judgement was the product. A first version had
            already shown that the idea worked. How it should feel to use was still being worked
            out.
          </Lede>

          <CurationLoop />
        </Slide>

        <Slide id="mobile-mvp" chapter="01" height="auto">
          <Kicker n="01" label="Starting with the first version" />
          <Headline>Starting with what already existed.</Headline>
          <Lede wide>
            My first work was on the Curateus phone app. The first version was mainly for
            curators, the people who share articles. As the idea grew, the team wanted to make
            that better and add a side of the product for readers. Before designing screens I
            went through what the app already did, what it needed, and similar apps. That way,
            finding things, tips, saved items and settings could be designed as one thing,
            instead of six.
          </Lede>

          <div className="mt-break grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
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
            One product, <span className="em">two kinds of people</span> to serve.
          </Headline>
          <Lede wide>
            The biggest change during my time on the phone app was that Curateus was growing
            beyond a first version only for curators. Now it had to work for two connected
            groups at once.
          </Lede>

          <TwoSides
            sides={[
              {
                title: 'Curators',
                note: 'The people whose taste is the product',
                items: [
                  'Discover content',
                  'Decide if it is worth passing on',
                  'Add a few words that turn it into a real tip',
                  'Recommend it',
                ],
              },
              {
                title: 'Subscribers',
                note: 'The people those tips are for',
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
            It had to be designed as one connected whole, not a pile of screens.
          </Statement>
        </Slide>

        <Slide id="research" chapter="01" height="auto">
          <Kicker n="01" label="Learning from what people already do" />
          <Headline>Every other browser add-on was built for saving.</Headline>
          <Lede wide>
            As part of the design work I looked at similar products and browser add-ons, and
            talked to people already using Curateus. One pattern mattered more than the rest.
            Almost every add-on like this is built for saving something for yourself. A curator
            is not bookmarking. They are telling someone else “this is worth it”, and that needs
            more than a saved link.
          </Lede>

          <Cards
            items={[
              {
                title: 'Saving is not sharing',
                body: 'A bookmark only has to be easy to find again. A tip has to say enough that a stranger can decide whether to trust it.',
              },
              {
                title: 'Keep people where they are',
                body: 'People always liked actions that did not push them into another app or another tab to finish what they were doing.',
              },
              {
                title: 'Do not ask twice',
                body: 'Anything the browser already knows about the article should not have to be typed in again.',
              },
            ]}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              ['News about people picking content', 'curateus-research-headlines.png'],
              ['Similar products', 'curateus-research-landscape.png'],
              ['Other apps where people pick content', 'curateus-research-curation.png'],
            ].map(([name, file]) => (
              <ArtSlot key={name} label={name} note={file} ratio="aspect-[4/3]" />
            ))}
          </div>

          <Footnote>
            Extra material, kept small on purpose. Looking at other products helped the design;
            it was not the point of the project.
          </Footnote>
        </Slide>

        {/* ======================= CHAPTER 02, FRICTION ===================== */}
        <ChapterOpen
          id="ch-friction"
          n="02"
          name="The problem"
          question="Why the one thing the product needed people to do kept getting interrupted."
        />

        <Slide id="the-break" chapter="02" height="auto">
          <Kicker n="02" label="The problem that led to the add-on" />
          <Headline size="large">
            Sharing still got in the way of <span className="em">reading</span>.
          </Headline>
          <Lede wide>
            People were usually reading when they found something worth passing on. To share it
            they had to stop what they were doing, open Curateus, and describe the article again
            from memory. Each step was small. Together they were enough to stop the very thing
            the product needed people to do.
          </Lede>

          <JourneyCompare
            caption="The dashed step is where most shares got lost."
            rows={[
              {
                label: 'Before',
                steps: [
                  { text: 'Browsing' },
                  { text: 'Find article' },
                  { text: 'Leave the page', mark: true },
                  { text: 'Open Curateus' },
                  { text: 'Find where to share' },
                  { text: 'Type in the article details' },
                  { text: 'Recommend' },
                ],
              },
            ]}
          />
        </Slide>

        <Slide id="opportunity" chapter="02" height="full" center invert>
          <p className="label text-ink-500">The opportunity</p>
          <p className="mt-10 max-w-[18ch] text-[2.5rem] leading-[1.02] md:text-[5rem]">
            What if Curateus showed up right where sharing{' '}
            <span className="em">starts</span>?
          </p>
        </Slide>

        <Slide id="challenge" chapter="02" height="auto">
          <Kicker n="02" label="The design challenge" />
          <Headline size="large">
            How might we let people share something the moment they find it, without
            turning the add-on into <span className="em">another whole app</span>?
          </Headline>

          <Balance
            left={{
              title: 'Quick and easy',
              body: 'Few enough steps that sharing stays a quick habit, not a chore.',
              fail: 'A one-tap add-on makes bare links. That is just a bookmark, and nobody trusts a bookmark.',
            }}
            right={{
              title: 'Enough to go on',
              body: 'Enough of the curator’s opinion that the tip is worth getting.',
              fail: 'A full form in a pop-up is just the app again, in a smaller window, on top of the article.',
            }}
          />
        </Slide>

        {/* ======================== CHAPTER 03, DESIGN ====================== */}
        <ChapterOpen
          id="ch-design"
          n="03"
          name="The design"
          question="Sketches, steps, simple layouts, and everything the team changed along the way."
        />

        <Slide id="ideation" chapter="03" height="auto">
          <Kicker n="03" label="Trying out ways to share" />
          <Headline>I sketched the interaction before anyone drew a screen.</Headline>
          <Lede wide>
            I started by sketching different ways sharing could work. They were not meant to
            look good. They were there so the team could argue about the order of steps with the
            product owner and the developers, before any of us made detailed screens.
          </Lede>

          <div className="mt-break grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Opening the add-on', 'curateus-sketch-open.png'],
              ['Saying why it is good', 'curateus-sketch-context.png'],
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
          <Kicker n="03" label="Fewer steps" />
          <Headline>
            The steps we <span className="em">agreed on</span>.
          </Headline>

          <FlowLine
            steps={[
              'Read article',
              'Open the Curateus add-on',
              'It spots the article details',
              'Say why it is good',
              'Rate it and pick a topic',
              'Recommend',
            ]}
            branch={{ from: 'any step', label: 'Save as a draft, and come back to it later' }}
          />

          <div className="mt-stage grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-12">
            <div>
              <p className="label mb-3 text-ink-500">Working artifact</p>
              <ArtSlot
                label="The original Miro drawing"
                note="curateus-miro-flow.png, small on purpose"
                ratio="aspect-[4/3]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="label mb-3 text-ink-500">How it finally worked</p>
              <p className="text-base leading-[1.6] text-ink-600 md:text-lg">
                The steps went through several rounds, and it shows. What is drawn above is what we
                settled on, drawn again so you can actually read it. The messy version stays on this
                page as a small picture, because the mess shows the thinking really happened. It is
                not something to hide.
              </p>
            </div>
          </div>
        </Slide>

        <Slide id="principles" chapter="03" height="auto">
          <Kicker n="03" label="What guided the add-on design" />
          <Headline>Four rules the add-on had to follow.</Headline>

          <Cards
            columns={4}
            items={[
              {
                title: 'Stay on the page',
                body: 'The article stays on screen while you share it. The add-on never takes the page away.',
              },
              {
                title: 'Fill in what the browser already knows',
                body: 'The title, the website and the link are already there. Asking someone to type them again is asking them to do the browser’s job.',
              },
              {
                title: 'Only ask for opinions',
                body: 'The only thing worth a curator’s time is what a computer cannot give: whether this is any good, and who it is for.',
              },
              {
                title: 'Let people finish later',
                body: 'Reading gets interrupted. A half-written tip should still be there waiting later.',
              },
            ]}
          />
        </Slide>

        <Slide id="lofi" chapter="03" height="auto">
          <Kicker n="03" label="Turning the steps into screens" />
          <Headline>From agreed steps to something clickable.</Headline>
          <Lede wide>
            Once we had agreed how it should work, I turned the sketches into simple layouts in
            Figma. At this point I was working on what comes first, the order of steps, the
            buttons and the different screens. Adding colour and style would only have made the
            layouts harder to argue about.
          </Lede>

          <div className="mt-break grid gap-8 lg:grid-cols-3">
            {[
              ['Start sharing', 'curateus-lofi-start.png'],
              ['Details of the tip', 'curateus-lofi-details.png'],
              ['Preview and finish', 'curateus-lofi-preview.png'],
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
            The layouts were <span className="em">a conversation</span>, not a finished product.
          </Headline>
          <Lede wide>
            I went through them with the product owner and the developers, instead of treating
            them as done. Those talks changed both how it worked and what came first on screen.
          </Lede>

          <ChangePair
            items={[
              {
                title: 'Showing people where they were',
                before:
                  'The screen relied on the form alone to show how far along you were. If you knew the steps, that was fine. If you did not, it was not.',
                after:
                  'I added headings and clearer step information, so it was always obvious which part of sharing you were in.',
              },
              {
                title: 'Helping with features people did not know',
                before:
                  'Some features were obvious to us and not at all obvious to someone using it for the first time.',
                after:
                  'I added little “i” icons and short explanations where the extra help was really needed.',
              },
              {
                title: 'Designing what could really be built',
                before:
                  'Some of my ideas assumed the add-on could read more from the page than it really could.',
                after:
                  'The developers told us early where that would not work, and I changed the design to fit, not the other way round.',
              },
            ]}
          />

          <ReviewLoop />

          <Statement>The design grew by working together, not by handing it over once.</Statement>
        </Slide>

        <Slide id="lofi-hifi" chapter="03" height="auto">
          <Kicker n="03" label="From structure to final screens" />
          <Headline>Structure first. Then the look.</Headline>

          <div className="mt-break space-y-12 md:space-y-16">
            {[
              ['Starting a tip', 'curateus-lofi-entry.png', 'curateus-hifi-entry.png'],
              ['Rating and details', 'curateus-lofi-rating.png', 'curateus-hifi-rating.png'],
              ['The finished tip', 'curateus-lofi-final.png', 'curateus-hifi-final.png'],
            ].map(([name, lo, hi]) => (
              <div key={name}>
                <p className="label border-b border-border pb-3 text-ink-500">{name}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
                  <Shot title="Rough version">
                    <ArtSlot label={`${name}, lo-fi`} note={lo} ratio="aspect-[3/4]" />
                  </Shot>
                  <Shot title="Finished version">
                    <ArtSlot label={`${name}, hi-fi`} note={hi} ratio="aspect-[3/4]" />
                  </Shot>
                </div>
              </div>
            ))}
          </div>

          <Footnote>
            Shown in pairs, so you can see how it changed, not just how it ended up.
          </Footnote>
        </Slide>

        <Slide id="visual-decision" chapter="03" height="auto">
          <Kicker n="03" label="Standing out from the website underneath" />
          <Headline>
            The add-on could pop up on <span className="em">any website</span>.
          </Headline>
          <Lede wide>
            That makes design tricky. Whatever the add-on looked like, it must not look like part
            of the page it was sitting on. I tried a darker Curateus style for the add-on, so it
            stayed clearly separate while the article stayed visible underneath.
          </Lede>

          <PluginComposition annotate className="mt-break" />
        </Slide>

        {/* ======================== CHAPTER 04, PLUGIN ====================== */}
        <ChapterOpen
          id="ch-plugin"
          n="04"
          name="The add-on"
          question="What the curator actually does now, and how much it changed."
        />

        <Slide id="final-experience" chapter="04" height="auto">
          <Kicker n="04" label="The final experience" />
          <Headline size="large">
            Share without <span className="em">leaving the article</span>.
          </Headline>

          <div className="mt-break grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Add-on opened on the article', 'curateus-plugin-open.png'],
              ['Article details found', 'curateus-plugin-metadata.png'],
              ['Topics and tags', 'curateus-plugin-topics.png'],
              ['Rating and sharing', 'curateus-plugin-rating.png'],
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
            Moving Curateus closer to <span className="em">the moment you find something</span>.
          </Headline>

          <JourneyCompare
            rows={[
              {
                label: 'Before',
                steps: [
                  { text: 'Find it in the browser' },
                  { text: 'Leave the page', mark: true },
                  { text: 'Open Curateus' },
                  { text: 'Enter the details' },
                  { text: 'Recommend' },
                ],
              },
              {
                label: 'With the add-on',
                primary: true,
                steps: [
                  { text: 'Find it in the browser' },
                  { text: 'Curateus pops up right there' },
                  { text: 'Say what you think' },
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

          <p className="label mt-break border-b border-border pb-3 text-ink-500">
            Browser plugin
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr] md:gap-8">
            <ArtSlot
              label="The add-on, fully open"
              note="curateus-plugin-hero.png"
              ratio="aspect-[16/10]"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <ArtSlot label="Topics" note="curateus-plugin-topics.png" ratio="aspect-[4/3]" />
              <ArtSlot label="Confirmation" note="curateus-plugin-confirm.png" ratio="aspect-[4/3]" />
            </div>
          </div>

          <p className="label mt-stage border-b border-border pb-3 text-ink-500">
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
          question="The first time I saw my design leave my file and get built by someone else."
        />

        <Slide id="outcome" chapter="05" height="auto">
          <Kicker n="05" label="Outcome" />
          <Headline>
            Sharing moved to <span className="em">where people already were</span>.
          </Headline>
          <Lede wide>
            The add-on let Curateus bring one of its most important actions closer to the thing
            that started it. Instead of sharing being something a curator had to remember to do
            later, it could start while they were still reading.
          </Lede>
          <Lede wide>
            I made the final screens and the details for the developers, and handed them over in
            Zeplin. For me the project mattered for another reason too: it was the first time I
            designed a real product with a product owner and developers, and watched my sketches
            turn into something being built.
          </Lede>

          <Footnote>
            There are no usage numbers on this page. Nobody measured them while I was on the
            project, and making them up would be the easiest thing here to catch.
          </Footnote>
        </Slide>

        <Slide id="reflection" chapter="05" height="auto">
          <Kicker n="05" label="What my first product project taught me" />
          <Headline>Four things I did not know before this.</Headline>

          <ol className="mt-break divide-y divide-border border-y border-border">
            {[
              [
                'Good design can be about where, not what',
                'I used to think about making screens better. The add-on showed me that the bigger chance is sometimes moving the action to a different moment in someone’s day.',
              ],
              [
                'Design choices are made together',
                'Working with the product owner and the developers taught me that product design is not “design it, then hand it over”. What is needed, what can be built and how it feels keep changing each other.',
              ],
              [
                'Rough sketches are useful because you can throw them away',
                'Sketches and simple layouts let us change the steps again and again. Nobody fights for a drawing they made in ten minutes.',
              ],
              [
                'How it looks can fix how it works',
                'The darker add-on was not just a taste thing. It was the only way to keep Curateus easy to read on top of a website it knew nothing about.',
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
              Curateus was where I first learned what designing a real product actually means. I
              started out thinking mostly about screens. Through the project I began to understand
              steps, where people are when they use something, what can be built, and how much of
              a product is shaped by the people you design it with.
            </p>
            <p>
              The browser add-on is the clearest example of that change. Instead of asking curators
              to change their habits to fit the product, we moved the product closer to the habits
              they already had.
            </p>
          </div>

          <PluginComposition className="mt-stage w-full max-w-4xl" />

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
