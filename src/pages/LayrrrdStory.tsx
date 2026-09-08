import { Link } from 'react-router-dom';
import Deck, { type DeckSlide } from '@/components/story/Deck';
import { Em, Chapter, H, Body, Voice, Panel } from '@/components/story/primitives';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * Layrrrd as a slide story. Same facts as the long-form case study, retold
 * as a connected narrative: evidence first, then the bet, then the moves,
 * with a mid-story pushback beat where testing corrected the plan.
 *
 * The deck deliberately obeys the Layrrrd design system it describes:
 * light only, zero corner radius, hairline rules, weighted emphasis for the
 * narrator's voice. One slide points this out.
 */

const MOVES = ['Capture', 'The digest', 'System and brand', 'Pricing'];

/** Where we are among the four moves. Echoes across the move slides. */
const MoveStrip = ({ active }: { active: number }) => (
  <div className="mt-12 grid gap-x-6 gap-y-4 sm:grid-cols-4 md:mt-16">
    {MOVES.map((move, i) => (
      <div key={move}>
        <div
          aria-hidden="true"
          className={`h-px w-full ${
            i === active ? 'bg-foreground' : i < active ? 'bg-foreground/30' : 'bg-border'
          }`}
        />
        <p className={`mt-3 text-sm ${i === active ? 'text-foreground' : 'text-ink-400'}`}>
          {i + 1} · {move}
        </p>
        <p className="label mt-1.5 text-ink-500">
          {i === active ? 'In play' : i < active ? 'Done' : 'Waiting'}
        </p>
      </div>
    ))}
  </div>
);

const CoverSlide = () => (
  <div>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="label text-ink-500">Case study · Layrrrd · Content curation</span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny · tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-12 max-w-4xl text-[2.5rem] leading-[1.02] md:mt-20 md:text-[4.25rem]">
      First commit to paying customers in <Em>nine days.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      Layrrrd saves what you hoard from anywhere, summarises it, and pushes a curated digest
      back to you. Validated in nine days, still shipping. Live at layrrrd.com.
    </p>

    <div className="mt-12 grid max-w-2xl gap-x-12 gap-y-8 sm:grid-cols-2 md:mt-16">
      <div>
        <p className="text-[3rem] leading-none tabular-nums md:text-[3.75rem]">15</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          paying customers by day nine
        </p>
      </div>
      <div>
        <p className="text-[3rem] leading-none tabular-nums md:text-[3.75rem]">126</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          freemium signups, tracked in PostHog from launch
        </p>
      </div>
    </div>

    <div className="mt-12 flex flex-wrap gap-3 md:mt-16">
      {['June 2026 to present', 'Design lead', 'Live, revenue'].map((chip) => (
        <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
          {chip}
        </span>
      ))}
    </div>
  </div>
);

const GraveyardSlide = () => (
  <div>
    <Chapter n="01" label="Where it started" />
    <H>
      Everyone saves. <Em>Almost nothing is opened again.</Em>
    </H>
    <Body>
      Bookmarks, tabs, screenshots, notes apps, Telegram saved messages. Saving costs nothing,
      so the pile grows daily. Revisiting costs willpower, so it never happens.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="Saving" title="Frictionless">
        Happens constantly, across every app, without a second thought.
      </Panel>
      <Panel label="Revisiting" title="Almost never">
        Relies on willpower nobody has. The pile is write-only.
      </Panel>
    </div>
    <Voice>Before designing anything, we had to name which half of that was actually broken.</Voice>
  </div>
);

const EvidenceSlide = () => (
  <div>
    <Chapter n="02" label="What we already knew" />
    <H>
      Nine days does not buy a discovery phase. So the discovery had to{' '}
      <Em>already exist.</Em>
    </H>
    <Body>
      We did not start with interviews. We started with evidence that had been accumulating
      for years, in our own pockets and in the pockets of the people we were building for.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="Evidence 01" title="Our own graveyards">
        Years of saved content, near zero revisits. Every one of us had the same dead pile.
      </Panel>
      <Panel label="Evidence 02" title="Our target users">
        They dump links into Telegram saved messages and never look again. The habit already
        exists. The return trip does not.
      </Panel>
    </div>
    <Voice>You do not have a discovery problem. You have a revisit problem.</Voice>
  </div>
);

const PatternSlide = () => (
  <div>
    <Chapter n="03" label="The uncomfortable pattern" />
    <H>
      Every tool in the category answers with <Em>more organisation.</Em>
    </H>
    <Body>
      Folders, tags, better search. All of it asks the user for more work at exactly the
      moment they have none to give.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="What the category assumed">
        Build a good enough archive and people will come back to it.
      </Panel>
      <Panel label="What behaviour showed" strong>
        A better archive still waits. The failure was never in saving. It was in returning.
      </Panel>
    </div>
  </div>
);

const BetSlide = () => (
  <div>
    <Chapter n="04" label="The bet" />
    <H>
      Stop building a better archive. <Em>Build around the push.</Em>
    </H>
    <Body>Three directions were on the table. Two of them we refused.</Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="Option A · Rejected" title="A better organiser">
        Folders, tags, search first. Every hour spent on taxonomy rebuilds the problem we
        were solving, in nicer colours.
      </Panel>
      <Panel label="Option B · Deferred" title="A discovery feed">
        In the pitch, deliberately not in the product. Recommendations without density are
        noise, and the core loop needed the days.
      </Panel>
      <Panel label="Option C · Chosen" title="Digest first" strong>
        Summarise on save. Push a curated digest back on a schedule. The product stops
        waiting for the user to come back.
      </Panel>
    </div>
  </div>
);

const ConstraintSlide = () => (
  <div>
    <Chapter n="05" label="The constraint" />
    <H>
      Nine days to prove it. Scope had <Em>one rule.</Em>
    </H>
    <div className="mt-10 max-w-3xl border border-foreground p-6 md:p-8">
      <p className="text-xl leading-[1.3] md:text-2xl">
        Anything that makes saving easier or the digest better ships.{' '}
        <Em>Anything else waits.</Em>
      </p>
    </div>
    <Body>
      Four moves fit inside that rule. Each one exists only because it feeds the loop.
    </Body>
    <MoveStrip active={-1} />
    <Voice>The bet was placed on day one. Every scoping decision descended from it.</Voice>
  </div>
);

const CaptureSlide = () => (
  <div>
    <Chapter n="06" label="Move one of four · Capture" />
    <H>
      Capture went <Em>where saving already happens.</Em>
    </H>
    <Body>
      Fighting the Telegram habit meant winning a behaviour change war on a nine day budget.
      So the product moved into the habit instead. Four channels, one pipeline.
    </Body>
    <div className="mt-10 flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-center">
      <div className="grid flex-1 gap-2">
        {['Chrome extension', 'Paste bar in the app', 'Telegram bot', 'WhatsApp bot'].map(
          (channel) => (
            <div key={channel} className="border border-border px-4 py-3 text-sm md:text-base">
              {channel}
            </div>
          ),
        )}
      </div>
      <span aria-hidden="true" className="hidden text-2xl text-ink-400 md:block">
        &rarr;
      </span>
      <span aria-hidden="true" className="self-center text-2xl text-ink-400 md:hidden">
        &darr;
      </span>
      <div className="flex-1 border border-foreground p-5 md:p-6">
        <p className="label text-ink-800">One pipeline</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 md:text-base">
          A save is instant and idempotent. The AI summary lands in the background. The item
          appears in the library without the user waiting on it.
        </p>
      </div>
    </div>
    <div className="mt-8 grid max-w-4xl gap-x-8 gap-y-4 border-t border-border pt-5 sm:grid-cols-2">
      <div>
        <p className="label mb-2 text-ink-500">What it cost</p>
        <p className="text-sm leading-relaxed text-ink-600">
          Each channel shipped thinner, and two of them are bots whose conversational surface
          needed its own design work.
        </p>
      </div>
      <div>
        <p className="label mb-2 text-ink-500">What it bought</p>
        <p className="text-sm leading-relaxed text-ink-600">
          Capture met users inside their existing habit. One polished channel would have made
          a better bookmarking tool, the thing we refused to build.
        </p>
      </div>
    </div>
    <MoveStrip active={0} />
  </div>
);

const DigestSlide = () => (
  <div>
    <Chapter n="07" label="Move two of four · The digest" />
    <H>
      The digest is not a feature. <Em>It is the product.</Em>
    </H>
    <Body>
      Saved items grouped by topic, summarised, with the unread backlog surfaced, delivered
      over email or Telegram every week. Everything else in the product exists to feed it.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="Restraint 01" title="Asks before it sends">
        The bot asks consent before delivering digests. Nothing arrives unrequested.
      </Panel>
      <Panel label="Restraint 02" title="Never nudges">
        No proactive pings, no streaks, no guilt. The push earns its place by being wanted.
      </Panel>
    </div>
    <Voice>A product whose premise is respecting your attention cannot spend it cheaply.</Voice>
    <MoveStrip active={1} />
  </div>
);

const PushbackSlide = () => (
  <div>
    <Chapter n="08" label="Midway · User testing" />
    <H>
      Testing inside the window said the plan was wrong <Em>in three places.</Em>
    </H>
    <Body>
      We tested during the build, not after it. Three findings were worth reacting to, and
      all three changed the product before day nine.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="Found 01" title="Nobody trusted the save">
        Nothing visibly happened, so people assumed it had failed. The fix: an optimistic
        pending card appears instantly and resolves in place.
      </Panel>
      <Panel label="Found 02" title="Retrieval broke past a hundred items">
        A raw library stopped being navigable. The fix: reposition around a curated feed
        instead of an archive.
      </Panel>
      <Panel label="Found 03" title="The cadence felt imposed">
        A fixed day read as spam. The fix: each user picks their digest day. A chosen day
        reads as a commitment they made to themselves.
      </Panel>
    </div>
    <Voice>
      Reacting to evidence inside nine days, instead of defending the plan, is the part of
      this project I would show a hiring panel first.
    </Voice>
  </div>
);

const SystemSlide = () => (
  <div>
    <Chapter n="09" label="Move three of four · The system" />
    <H>
      Taste does not scale at AI speed <Em>unless it is written down.</Em>
    </H>
    <Body>
      A nine day product built with AI tools could have become a visual junk drawer. So the
      design system went into the repository as written rules the coding tools are bound to.
      It held through the nine days and is still holding.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
      {[
        'Light only',
        'Zero corner radius',
        'Hairline rules, no cards, no shadows',
        'Documented type and colour',
      ].map((rule) => (
        <div key={rule} className="border border-border p-5">
          <p className="text-sm leading-snug md:text-base">{rule}</p>
        </div>
      ))}
    </div>
    <p className="em mt-8 text-lg text-ink-600">
      These slides follow the same rules.
    </p>
    <MoveStrip active={2} />
  </div>
);

const BrandSlide = () => (
  <div>
    <Chapter n="10" label="Move three of four · The brand" />
    <H>
      One character, <Em>four jobs.</Em>
    </H>
    <Body>
      Rudolf, the dog mascot, is not decoration. One character doing four jobs is what kept a
      nine day brand coherent, while the product surface stayed quiet by rule.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
      <Panel label="Job 01" title="The loading state">
        Rudolf carries every wait in the product.
      </Panel>
      <Panel label="Job 02" title="The chat persona">
        The voice of both messaging channels, Telegram and WhatsApp.
      </Panel>
      <Panel label="Job 03" title="The pricing metaphor">
        Chat time is play time. Top-ups are biscuits.
      </Panel>
      <Panel label="Job 04" title="The expressive layer">
        Brand is opt-in by rule, never applied by default, so marketing can be loud while the
        product stays calm.
      </Panel>
    </div>
    <MoveStrip active={2} />
  </div>
);

const PricingSlide = () => (
  <div>
    <Chapter n="11" label="Move four of four · Pricing" />
    <H>
      Subscriptions punish a product you touch <Em>once a week.</Em>
    </H>
    <Body>
      A weekly-touch product has to re-earn a monthly charge before the habit even forms.
      That is a bad fight to pick at launch, so we did not pick it.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="Founding membership" title="One time, one hundred spots" strong>
        Early spots cheaper. Gone means gone. Scarcity converts curiosity into commitment.
      </Panel>
      <Panel label="Free for everyone" title="Saves, summaries, digests">
        The funnel stays open. The core loop is never behind a wall.
      </Panel>
      <Panel label="Metered" title="Only chat time with Rudolf">
        The one place where cost genuinely scales with use.
      </Panel>
    </div>
    <Voice>
      Payments went live inside the validation window. That is what made day nine mean
      something.
    </Voice>
    <MoveStrip active={3} />
  </div>
);

const ResultSlide = () => (
  <div>
    <Chapter n="12" label="Day nine" />
    <H>
      The bet <Em>paid.</Em>
    </H>
    <div className="mt-12 grid max-w-3xl gap-x-12 gap-y-10 sm:grid-cols-2">
      <div>
        <p className="text-[4rem] leading-none tabular-nums md:text-[5.5rem]">15</p>
        <p className="mt-4 text-base leading-snug text-ink-600 md:text-lg">
          paying customers, through payments that went live inside the window
        </p>
      </div>
      <div>
        <p className="text-[4rem] leading-none tabular-nums md:text-[5.5rem]">126</p>
        <p className="mt-4 text-base leading-snug text-ink-600 md:text-lg">
          freemium signups on a deliberately generous free tier
        </p>
      </div>
    </div>
    <p className="label mt-10 text-ink-500">
      Source: PostHog, running since day one. Every number here is a dashboard, not a memory.
    </p>
    <Voice>
      Fifteen people paid real money for a product that was nine days old. No interview could
      have validated the bet harder.
    </Voice>
  </div>
);

const SinceThenSlide = () => (
  <div>
    <Chapter n="13" label="Since then" />
    <H>
      Validation was the start, <Em>not the story.</Em>
    </H>
    <Body>
      The same team has kept building on the validated loop. Nothing was thrown away and
      nothing was rewritten from scratch.
    </Body>
    <div className="mt-10 flex max-w-3xl flex-wrap gap-3">
      {[
        'Published Chrome extension',
        'Referral loops',
        'Both chat channels',
        'Account deletion that actually cascades',
      ].map((item) => (
        <span key={item} className="border border-border px-4 py-2.5 text-sm md:text-base">
          {item}
        </span>
      ))}
    </div>
    <div className="mt-8 max-w-3xl border border-border p-5 md:p-6">
      <p className="label-strong">Named debts, on the record</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-600 md:text-base">
        No automated test suite yet. And the digest job, as designed, is the first known
        scaling ceiling.
      </p>
    </div>
    <Voice>Writing the ceilings down before hitting them makes them backlog, not surprises.</Voice>
  </div>
);

const LessonsSlide = () => (
  <div>
    <Chapter n="14" label="What it changed for me" />
    <H>
      The lessons that survived <Em>day nine.</Em>
    </H>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="01" title="Write the system down first">
        When machines generate interface code at validation speed, written constraints are
        the only form of taste that scales.
      </Panel>
      <Panel label="02" title="React to evidence mid-sprint">
        The original plan mattered less than the speed of correcting it. Testing during the
        build is what the window was for.
      </Panel>
      <Panel label="03" title="Instrument from day one">
        PostHog ran from launch. It is why this story ends in numbers instead of adjectives.
      </Panel>
    </div>
    <Voice>
      The product is not finished and does not claim to be. Shipping against a named debt
      list is the part I enjoy most.
    </Voice>
  </div>
);

const ThanksSlide = () => (
  <div className="flex min-h-full flex-col items-center justify-center text-center">
    <p className="text-[3rem] leading-none md:text-[4.5rem]">
      Thank <Em>you.</Em>
    </p>
    <p className="mt-8 max-w-xl text-base leading-[1.55] text-ink-600 md:text-lg">
      This deck is the short version of nine days and everything since. Happy to go deeper on
      any of it.
    </p>
    <a
      href="mailto:tanyameriamsunny@gmail.com"
      className="mt-10 border border-foreground px-6 py-3 text-base"
    >
      tanyameriamsunny@gmail.com
    </a>
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      <a
        href="https://layrrrd.com"
        target="_blank"
        rel="noreferrer"
        className="rule-link label text-ink-500"
      >
        layrrrd.com
      </a>
      <Link to="/case-study/layrrrd" className="rule-link label text-ink-500">
        Read the full case study
      </Link>
    </div>
    <p className="label mt-12 text-ink-500">Tanya Sunny · Product Designer</p>
  </div>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'First customers in nine days', render: CoverSlide },
  // The evidence
  { id: 'graveyard', chapter: 'The evidence', title: 'Everyone saves, almost nothing gets reopened', render: GraveyardSlide },
  { id: 'evidence', chapter: 'The evidence', title: 'Nine days buys no discovery phase', render: EvidenceSlide },
  { id: 'pattern', chapter: 'The evidence', title: 'The category answers with more organisation', render: PatternSlide },
  // The bet
  { id: 'bet', chapter: 'The bet', title: 'Build around the push, not the archive', render: BetSlide },
  { id: 'constraint', chapter: 'The bet', title: 'Nine days to prove it, one scope rule', render: ConstraintSlide },
  // The four moves
  { id: 'capture', chapter: 'The four moves', title: 'Capture goes where saving already happens', render: CaptureSlide },
  { id: 'digest', chapter: 'The four moves', title: 'The digest is the product', render: DigestSlide },
  { id: 'pushback', chapter: 'The four moves', title: 'Testing said the plan was wrong in three places', render: PushbackSlide },
  { id: 'system', chapter: 'The four moves', title: 'Taste written down so it scales', render: SystemSlide },
  { id: 'brand', chapter: 'The four moves', title: 'One character, four jobs', render: BrandSlide },
  { id: 'pricing', chapter: 'The four moves', title: 'Subscriptions punish a weekly product', render: PricingSlide },
  // The outcome
  { id: 'result', chapter: 'The outcome', title: 'Day nine: the bet paid', render: ResultSlide },
  { id: 'since', chapter: 'The outcome', title: 'Since then, and the debts on record', render: SinceThenSlide },
  { id: 'lessons', chapter: 'The outcome', title: 'The lessons that survived day nine', render: LessonsSlide },
  { id: 'thanks', chapter: 'The outcome', title: 'Thank you, and how to reach me', render: ThanksSlide },
];

const LayrrrdStory = () => {
  usePageMeta(
    'Layrrrd · The story in slides',
    'Layrrrd, validated in nine days: the evidence, the bet, the four moves, and the numbers.',
  );

  return (
    <Deck label="Layrrrd · Validated in nine days" exitHref="/case-study/layrrrd" slides={slides} />
  );
};

export default LayrrrdStory;
