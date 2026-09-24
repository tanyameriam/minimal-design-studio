import { Link } from 'react-router-dom';
import Deck, { type DeckSlide } from '@/components/story/Deck';
import { Em, Chapter, H, Body, Voice, Panel, Spread } from '@/components/story/primitives';
import { usePageMeta } from '@/hooks/use-page-meta';

/**
 * Layrrrd as a slide story. Same facts as the long-form case study, retold
 * as a connected narrative: evidence first, then the bet, then the moves,
 * with a mid-story pushback beat where testing corrected the plan.
 *
 * The deck used to be set in Layrrrd's own design system - light only, zero
 * corner radius - which made it the one surface on this site that did not
 * look like this site. It runs on the portfolio's palette now, like every
 * other deck. The slide that describes Layrrrd's design system still
 * describes it; it no longer demonstrates it at the cost of the portfolio's
 * own consistency.
 */

const MOVES = ['Capture', 'Finding things', 'System and brand', 'Pricing'];

/** Where we are among the four moves. Echoes across the move slides. */
const MoveStrip = ({ active }: { active: number }) => (
  <div className="mt-break grid gap-x-6 gap-y-4 sm:grid-cols-4">
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
          {i === active ? 'Now' : i < active ? 'Done' : 'Next'}
        </p>
      </div>
    ))}
  </div>
);

const CoverSlide = () => (
  <Spread>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="label text-ink-500">Case study · Layrrrd · Saving and finding things</span>
      <span className="label hidden text-ink-500 md:block">
        Tanya Sunny · tanyameriamsunny@gmail.com
      </span>
    </div>

    <h1 className="mt-stage max-w-4xl text-[2.5rem] leading-[1.02] md:text-[4.25rem]">
      From the first line of code to paying customers in <Em>nine days.</Em>
    </h1>

    <p className="mt-8 max-w-2xl text-base leading-[1.55] text-ink-600 md:text-lg">
      Layrrrd saves the things you collect from anywhere, sums them up, and helps you find them
      again when you need them. Tested in nine days, and still growing. Live at layrrrd.com.
    </p>

    <div className="mt-break grid max-w-2xl gap-x-12 gap-y-8 sm:grid-cols-2">
      <div>
        <p className="text-[3rem] leading-none tabular-nums md:text-[3.75rem]">15</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          paying customers by day nine
        </p>
      </div>
      <div>
        <p className="text-[3rem] leading-none tabular-nums md:text-[3.75rem]">126</p>
        <p className="mt-3 text-sm leading-snug text-ink-600 md:text-base">
          free sign-ups, counted in PostHog from launch
        </p>
      </div>
    </div>

    <div className="mt-break flex flex-wrap gap-3">
      {['June 2026 to now', 'Design lead', 'Launched with paying customers'].map((chip) => (
        <span key={chip} className="label border border-border px-3 py-2 text-ink-500">
          {chip}
        </span>
      ))}
    </div>
  </Spread>
);

const GraveyardSlide = () => (
  <Spread>
    <Chapter n="01" label="Where it started" />
    <H>
      Everyone saves. <Em>Almost nothing is opened again.</Em>
    </H>
    <Body>
      Bookmarks, tabs, screenshots, notes apps, Telegram saved messages. Saving is free,
      so the pile grows every day. Going back takes effort, so it never happens.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="Saving" title="Easy">
        Happens constantly, across every app, without a second thought.
      </Panel>
      <Panel label="Revisiting" title="Almost never">
        It takes effort nobody has. Things go in, and never come out.
      </Panel>
    </div>
    <Voice>Before designing anything, we had to find out which half of that was really broken.</Voice>
  </Spread>
);

const EvidenceSlide = () => (
  <Spread>
    <Chapter n="02" label="What we already knew" />
    <H>
      Nine days is not enough time for a long research phase. So the research had to{' '}
      <Em>already exist.</Em>
    </H>
    <Body>
      We did not start with interviews. We started with proof that had been piling up for
      years, in our own phones and in the phones of the people we were building for.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="Proof 01" title="Our own forgotten piles">
        Years of saved things, and we almost never went back. Every one of us had the same forgotten pile.
      </Panel>
      <Panel label="Proof 02" title="The people we were building for">
        They drop links into Telegram saved messages and never look again. The habit is
        already there. Going back is not.
      </Panel>
    </div>
    <Voice>You do not have a problem finding things. You have a problem going back to them.</Voice>
  </Spread>
);

const PatternSlide = () => (
  <Spread>
    <Chapter n="03" label="The awkward pattern" />
    <H>
      Every app like this answers with <Em>more sorting.</Em>
    </H>
    <Body>
      Folders, tags, better search. All of it asks for more work at the exact moment
      people have none to give.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="What other apps assumed">
        Build a good enough storage box and people will come back to it.
      </Panel>
      <Panel label="What people actually did" strong>
        A better storage box still just waits. Saving was never the problem. Going back was.
      </Panel>
    </div>
  </Spread>
);

const BetSlide = () => (
  <Spread>
    <Chapter n="04" label="The bet" />
    <H>
      Stop building a better storage box. <Em>Send things back to people instead.</Em>
    </H>
    <Body>Three directions were on the table. Two of them we refused.</Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="Option A · Rejected" title="A better organiser">
        Folders, tags and search first. Every hour spent on ways of sorting rebuilds the problem we
        were trying to fix, just in nicer colours.
      </Panel>
      <Panel label="Option B · Later" title="A feed of new things to read">
        In the pitch, but on purpose not in the product. Tips without enough content behind
        them are just noise, and the main idea needed those days.
      </Panel>
      <Panel label="Option C · Chosen on day one" title="Digest first" strong>
        Sum things up when they are saved. Send a hand-picked digest back on a schedule. Our
        first bet. Research later moved finding things to the centre.
      </Panel>
    </div>
  </Spread>
);

const ConstraintSlide = () => (
  <Spread>
    <Chapter n="05" label="The constraint" />
    <H>
      Nine days to prove it. What we built had <Em>one rule.</Em>
    </H>
    <div className="mt-10 max-w-3xl border border-foreground p-6 md:p-8">
      <p className="text-xl leading-[1.3] md:text-2xl">
        Anything that makes saving easier or getting things back easier gets built.{' '}
        <Em>Anything else waits.</Em>
      </p>
    </div>
    <Body>
      Four moves fit inside that rule. Each one is there only because it helps the main idea.
    </Body>
    <MoveStrip active={-1} />
    <Voice>We made our bet on day one. Every choice about what to build came from it.</Voice>
  </Spread>
);

const CaptureSlide = () => (
  <Spread>
    <Chapter n="06" label="Move one of four · Saving" />
    <H>
      Saving went <Em>where people already save.</Em>
    </H>
    <Body>
      Fighting the Telegram habit meant trying to change how people behave, in nine days.
      So the app moved into the habit instead. Three ways to save, one system behind them.
    </Body>
    <div className="mt-10 flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-center">
      <div className="grid flex-1 gap-2">
        {['Chrome add-on', 'Paste box in the app', 'Telegram bot'].map(
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
          Saving is instant, and saving twice does no harm. The AI summary is made in the
          background. The item shows up in the library without the user having to wait.
        </p>
      </div>
    </div>
    <div className="mt-8 grid max-w-4xl gap-x-8 gap-y-4 border-t border-border pt-5 sm:grid-cols-2">
      <div>
        <p className="label mb-2 text-ink-500">What it cost</p>
        <p className="text-sm leading-relaxed text-ink-600">
          Each way to save launched with less polish, and two of them are chat bots that needed
          their own design work.
        </p>
      </div>
      <div>
        <p className="label mb-2 text-ink-500">What it bought</p>
        <p className="text-sm leading-relaxed text-ink-600">
          Saving fit into habits people already had. One polished way to save would have made a
          better bookmarking tool, which is the thing we refused to build.
        </p>
      </div>
    </div>
    <MoveStrip active={0} />
  </Spread>
);

const DigestSlide = () => (
  <Spread>
    <Chapter n="07" label="Move two of four · Finding things" />
    <H>
      We started with the digest. <Em>Research moved finding things to the centre.</Em>
    </H>
    <Body>
      On day one the plan was a weekly digest: saved items grouped by topic, summed up and
      sent back by email or Telegram. Talking to people showed that many would rather ask for
      something when they needed it than wait for a scheduled message. So finding things
      became the heart of the app, and the digest became one of several ways saved things
      come back, next to the library, search and tips.
    </Body>
    <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
      <Panel label="Holding back 01" title="Asks before it sends">
        The bot asks before sending digests. Nothing arrives that you did not ask for.
      </Panel>
      <Panel label="Holding back 02" title="Never nags">
        No surprise pings, no streaks, no guilt. The digest has to earn its place by being wanted.
      </Panel>
    </div>
    <Voice>An app that promises to respect your attention cannot waste it.</Voice>
    <MoveStrip active={1} />
  </Spread>
);

const PushbackSlide = () => (
  <Spread>
    <Chapter n="08" label="Halfway · Testing with users" />
    <H>
      Testing during the nine days showed the plan was wrong <Em>in three places.</Em>
    </H>
    <Body>
      We tested while we were building, not after. Three findings were worth acting on, and
      all three changed the app before day nine.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="Found 01" title="Nobody trusted the save">
        Nothing seemed to happen, so people thought it had failed. The fix: a “saving…” card
        appears right away and fills in where it is.
      </Panel>
      <Panel label="Found 02" title="Finding things broke after a hundred items">
        A plain library became too hard to get around. The fix: build it around a hand-picked
        feed instead of a storage box.
      </Panel>
      <Panel label="Found 03" title="The schedule felt forced on people">
        A fixed day felt like spam. The fix: each user picks their own digest day. A day you
        choose feels like a promise you made to yourself.
      </Panel>
    </div>
    <Voice>
      Acting on what we learned within nine days, instead of sticking to the plan, is the
      part of this project I would show a hiring team first.
    </Voice>
  </Spread>
);

const SystemSlide = () => (
  <Spread>
    <Chapter n="09" label="Move three of four · The system" />
    <H>
      Good taste cannot keep up with AI speed <Em>unless it is written down.</Em>
    </H>
    <Body>
      An app built in nine days with AI tools could easily have turned into a messy junk
      drawer. So we wrote the design system into the code as rules the coding tools have
      to follow. It held up through the nine days and it still does.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
      {[
        'Light only',
        'No rounded corners',
        'Thin lines, no cards, no shadows',
        'Fonts and colours written down',
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
  </Spread>
);

const BrandSlide = () => (
  <Spread>
    <Chapter n="10" label="Move three of four · The brand" />
    <H>
      One character, <Em>four jobs.</Em>
    </H>
    <Body>
      Rudolf, the dog mascot, is not just decoration. One character doing four jobs is what
      kept a brand built in nine days feeling like one thing, while the app itself stayed
      plain on purpose.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
      <Panel label="Job 01" title="The loading state">
        Rudolf keeps you company whenever the app is loading.
      </Panel>
      <Panel label="Job 02" title="The chat persona">
        The voice of the Telegram channel.
      </Panel>
      <Panel label="Job 03" title="The way we explain prices">
        Chat time is play time. Buying more is buying biscuits.
      </Panel>
      <Panel label="Job 04" title="The fun part">
        The brand only shows up where we choose it to, never by default. So the marketing
        can be loud while the app stays calm.
      </Panel>
    </div>
    <MoveStrip active={2} />
  </Spread>
);

const PricingSlide = () => (
  <Spread>
    <Chapter n="11" label="Move four of four · Prices" />
    <H>
      Monthly payments are unfair for an app you use <Em>once a week.</Em>
    </H>
    <Body>
      An app you use once a week has to prove it is worth a monthly charge before the habit
      even starts. That is a bad fight to pick at launch, so we did not pick it.
    </Body>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="Founding membership" title="One time, one hundred spots" strong>
        Early spots cost less. When they are gone, they are gone. Limited spots turn curiosity
        into commitment.
      </Panel>
      <Panel label="Free for everyone" title="Saves, summaries, digests">
        Anyone can still join. The main features are never locked behind a payment.
      </Panel>
      <Panel label="Pay as you go" title="Only chat time with Rudolf">
        The one place where it really costs us more when you use it more.
      </Panel>
    </div>
    <Voice>
      Payments went live during the nine days. That is what made day nine mean something.
    </Voice>
    <MoveStrip active={3} />
  </Spread>
);

const ResultSlide = () => (
  <Spread>
    <Chapter n="12" label="Day nine" />
    <H>
      The bet <Em>paid.</Em>
    </H>
    <div className="mt-12 grid max-w-3xl gap-x-12 gap-y-10 sm:grid-cols-2">
      <div>
        <p className="text-[4rem] leading-none tabular-nums md:text-[5.5rem]">15</p>
        <p className="mt-4 text-base leading-snug text-ink-600 md:text-lg">
          paying customers, through payments that went live during the nine days
        </p>
      </div>
      <div>
        <p className="text-[4rem] leading-none tabular-nums md:text-[5.5rem]">126</p>
        <p className="mt-4 text-base leading-snug text-ink-600 md:text-lg">
          free sign-ups on a free plan that is generous on purpose
        </p>
      </div>
    </div>
    <p className="label mt-10 text-ink-500">
      Source: PostHog, running since day one. Every number here comes from a dashboard, not from memory.
    </p>
    <Voice>
      Fifteen people paid real money for an app that was nine days old. No interview could
      have tested the bet better.
    </Voice>
  </Spread>
);

const SinceThenSlide = () => (
  <Spread>
    <Chapter n="13" label="Since then" />
    <H>
      Proving the idea was the start, <Em>not the whole story.</Em>
    </H>
    <Body>
      The same team has kept building on the idea that worked. Nothing was thrown away and
      nothing was rebuilt from scratch.
    </Body>
    <div className="mt-10 flex max-w-3xl flex-wrap gap-3">
      {[
        'A Chrome add-on, now live',
        'Referral loops',
        'Both chat channels',
        'Deleting your account really deletes everything',
      ].map((item) => (
        <span key={item} className="border border-border px-4 py-2.5 text-sm md:text-base">
          {item}
        </span>
      ))}
    </div>
    <div className="mt-8 max-w-3xl border border-border p-5 md:p-6">
      <p className="label-strong">Known problems, written down</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-600 md:text-base">
        There are no automatic tests yet. And the way the digest is built will be the first
        thing to struggle as the app grows.
      </p>
    </div>
    <Voice>Writing down the limits before you hit them turns them into a to-do list, not a surprise.</Voice>
  </Spread>
);

const LessonsSlide = () => (
  <Spread>
    <Chapter n="14" label="What it changed for me" />
    <H>
      The lessons that survived <Em>day nine.</Em>
    </H>
    <div className="mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
      <Panel label="01" title="Write the design rules down first">
        When computers write screen code this fast, written rules are the only way good taste
        can keep up.
      </Panel>
      <Panel label="02" title="Act on what you learn, even halfway through">
        The first plan mattered less than how fast we fixed it. Testing while building is
        what the nine days were for.
      </Panel>
      <Panel label="03" title="Measure from day one">
        PostHog ran from launch. That is why this story ends with numbers, not just nice words.
      </Panel>
    </div>
    <Voice>
      The app is not finished and does not pretend to be. Launching with a list of known
      problems is the part I enjoy most.
    </Voice>
  </Spread>
);

const ThanksSlide = () => (
  <div className="flex min-h-full flex-col items-center justify-center text-center">
    <p className="text-[3rem] leading-none md:text-[4.5rem]">
      Thank <Em>you.</Em>
    </p>
    <p className="mt-8 max-w-xl text-base leading-[1.55] text-ink-600 md:text-lg">
      These slides are the short version of nine days and everything since. I am happy to
      go deeper on any of it.
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
        Read the detailed study
      </Link>
    </div>
    <p className="label mt-12 text-ink-500">Tanya Sunny · Product Designer</p>
  </div>
);

const slides: DeckSlide[] = [
  // Opening
  { id: 'cover', chapter: 'Opening', title: 'First customers in nine days', render: CoverSlide },
  // The evidence
  { id: 'graveyard', chapter: 'The proof', title: 'Everyone saves, almost nothing gets opened again', render: GraveyardSlide },
  { id: 'evidence', chapter: 'The proof', title: 'Nine days leaves no time for long research', render: EvidenceSlide },
  { id: 'pattern', chapter: 'The proof', title: 'Other apps answer with more sorting', render: PatternSlide },
  // The bet
  { id: 'bet', chapter: 'The bet', title: 'Send things back, instead of storing them better', render: BetSlide },
  { id: 'constraint', chapter: 'The bet', title: 'Nine days to prove it, one rule', render: ConstraintSlide },
  // The four moves
  { id: 'capture', chapter: 'The four moves', title: 'Saving goes where people already save', render: CaptureSlide },
  { id: 'digest', chapter: 'The four moves', title: 'Digest first, then finding things moved to the centre', render: DigestSlide },
  { id: 'pushback', chapter: 'The four moves', title: 'Testing said the plan was wrong in three places', render: PushbackSlide },
  { id: 'system', chapter: 'The four moves', title: 'Good taste, written down so it keeps up', render: SystemSlide },
  { id: 'brand', chapter: 'The four moves', title: 'One character, four jobs', render: BrandSlide },
  { id: 'pricing', chapter: 'The four moves', title: 'Monthly payments are unfair for a weekly app', render: PricingSlide },
  // The outcome
  { id: 'result', chapter: 'The outcome', title: 'Day nine: the bet paid', render: ResultSlide },
  { id: 'since', chapter: 'The outcome', title: 'Since then, and the known problems', render: SinceThenSlide },
  { id: 'lessons', chapter: 'The outcome', title: 'The lessons that survived day nine', render: LessonsSlide },
  { id: 'thanks', chapter: 'The outcome', title: 'Thank you, and how to reach me', render: ThanksSlide },
];

const LayrrrdStory = () => {
  usePageMeta(
    'Layrrrd · The story in slides',
    'Layrrrd, tested in nine days: the proof, the bet, the four moves, and the numbers.',
  );

  return (
    <Deck label="Layrrrd · Tested in nine days" exitHref="/case-study/layrrrd" slides={slides} />
  );
};

export default LayrrrdStory;
