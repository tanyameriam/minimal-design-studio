import { useRef, useState } from 'react';

/**
 * "Teach me some Dutch." A visitor types one sentence, it is emailed to
 * Tanya, and the box answers with a different thank-you each time.
 *
 * The site is static, so the email goes through FormSubmit's AJAX endpoint:
 * no account or key, just the address. The first submission ever sends
 * Tanya an activation email that has to be confirmed once before messages
 * start arriving.
 */
const ENDPOINT = 'https://formsubmit.co/ajax/tanyameriamsunny@gmail.com';

type Reaction = { emoji: string; line: string; translation?: string };

/** Half Dutch, half English, so the thank-you itself is a little lesson back. */
const reactions: Reaction[] = [
  { emoji: '🤩', line: 'Wauw, dat is leuk!', translation: 'Woah, that was cool!' },
  { emoji: '🙌', line: 'Dank je wel! Weer iets nieuws geleerd.', translation: 'Thank you! I learnt something new again.' },
  { emoji: '💛', line: 'Thanks, that was lovely!' },
  { emoji: '😄', line: 'Super! Die ga ik gebruiken op kantoor.', translation: 'Brilliant! I’m using that one at the office.' },
  { emoji: '☕', line: 'Gezellig! Bedankt voor de les.', translation: 'How nice! Thanks for the lesson.' },
  { emoji: '🚀', line: 'Woah, my Dutch just levelled up!' },
  { emoji: '✨', line: 'Top! Ik oefen hem vandaag nog.', translation: 'Great! I’ll practise it today.' },
  { emoji: '🥳', line: 'Yes! Another sentence for my collection.' },
];

/*
 * A light filter, not a guarantee. It catches the common English and Dutch
 * swear words and insults (also with letters swapped for numbers or
 * symbols), plus links, which are almost always spam. Anything it catches
 * is never sent. Someone determined can still get past it.
 */
const blocked = [
  // English
  'fuck', 'shit', 'bitch', 'cunt', 'dick', 'cock', 'pussy', 'asshole', 'bastard', 'slut',
  'whore', 'retard', 'nigger', 'nigga', 'faggot', 'wanker', 'twat', 'porn', 'sex', 'nude',
  // Dutch
  'kut', 'klootzak', 'lul', 'tering', 'tyfus', 'kanker', 'godverdomme', 'hoer', 'slet',
  'mongool', 'debiel', 'flikker', 'eikel', 'kutwijf', 'pik', 'neuk', 'neuken', 'teringlijer',
];

const normalise = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/0/g, 'o')
    .replace(/[1!|]/g, 'i')
    .replace(/3/g, 'e')
    .replace(/[4@]/g, 'a')
    .replace(/[5$]/g, 's')
    .replace(/7/g, 't')
    // "f.u.c.k" and "f u c k" collapse to one word
    .replace(/\b(\w)[\s.*_-](?=\w\b)/g, '$1');

const isRude = (text: string) => {
  if (/https?:\/\/|www\.|\.(com|nl|ru|xyz)\b/i.test(text)) return true;
  const words = normalise(text).split(/[^a-z]+/);
  return words.some((w) => blocked.some((b) => w === b || (b.length > 4 && w.includes(b))));
};

type State =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent'; reaction: Reaction }
  | { kind: 'rude' }
  | { kind: 'error' };

const DutchLesson = () => {
  const [sentence, setSentence] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState<State>({ kind: 'idle' });
  // Never the same thank-you twice in a row.
  const last = useRef(-1);

  const pickReaction = () => {
    let i = Math.floor(Math.random() * reactions.length);
    if (i === last.current) i = (i + 1) % reactions.length;
    last.current = i;
    return reactions[i];
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sentence.trim() || state.kind === 'sending') return;

    // A hidden field people never fill in; bots usually do.
    const honey = new FormData(e.currentTarget).get('_honey');
    if (honey) return;

    if (isRude(`${sentence} ${name}`)) {
      setState({ kind: 'rude' });
      return;
    }

    setState({ kind: 'sending' });
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Someone taught you Dutch on your portfolio',
          _template: 'table',
          _captcha: 'false',
          sentence: sentence.trim(),
          name: name.trim() || 'Anonymous',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState({ kind: 'sent', reaction: pickReaction() });
      setSentence('');
    } catch {
      setState({ kind: 'error' });
    }
  };

  return (
    <aside
      aria-label="Teach me some Dutch"
      className="relative overflow-hidden rounded-[calc(var(--radius)*2)] border border-border bg-card p-6 md:p-7"
    >
      {/* A soft wash of the accent in one corner, so the card reads as its own thing. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
      />

      {/* A sticker, not a label: tilted, a soft tint of the accent, with a waffle that wiggles. */}
      <p className="relative inline-flex -rotate-2 items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-sm text-ink-800 transition-transform duration-300 ease-smooth hover:rotate-0">
        <span aria-hidden="true" className="dutch-wiggle inline-block">
          🧇
        </span>
        Psst! Teach me some Dutch?
      </p>
      <p lang="nl" className="relative mt-4 text-xl leading-snug text-foreground md:text-2xl">
        Wat wil je mij leren? Eén zin is genoeg!
      </p>
      <p className="relative mt-1.5 text-sm text-ink-500">What would you teach me? One sentence is enough.</p>

      {state.kind === 'sent' ? (
        <div className="relative mt-6" role="status" aria-live="polite">
          <p className="flex items-center gap-4">
            <span aria-hidden="true" className="dutch-pop inline-block text-4xl">
              {state.reaction.emoji}
            </span>
            <span>
              <span className="block text-lg text-foreground">{state.reaction.line}</span>
              {state.reaction.translation && (
                <span className="mt-1 block text-sm text-ink-500">{state.reaction.translation}</span>
              )}
            </span>
          </p>
          <button
            type="button"
            onClick={() => setState({ kind: 'idle' })}
            className="rule-link mt-5 text-base text-link"
          >
            Teach me another one &rarr;
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="relative mt-6 space-y-3">
          <label className="sr-only" htmlFor="dutch-sentence">
            Your Dutch sentence
          </label>
          <input
            id="dutch-sentence"
            lang="nl"
            required
            maxLength={200}
            value={sentence}
            onChange={(e) => {
              setSentence(e.target.value);
              if (state.kind === 'rude' || state.kind === 'error') setState({ kind: 'idle' });
            }}
            placeholder="Het is altijd tijd voor koffie."
            className="w-full rounded-[var(--radius)] border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-ink-400 focus:border-ink-500 focus:outline-none"
          />
          <label className="sr-only" htmlFor="dutch-name">
            Your name (optional)
          </label>
          <input
            id="dutch-name"
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-[var(--radius)] border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-ink-400 focus:border-ink-500 focus:outline-none"
          />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <button
            type="submit"
            disabled={state.kind === 'sending' || !sentence.trim()}
            className="w-full rounded-full bg-foreground px-6 py-3 text-base text-background transition-opacity disabled:opacity-50"
          >
            {state.kind === 'sending' ? 'Sending…' : 'Send'}
          </button>
          {state.kind === 'rude' && (
            <p className="text-sm text-ink-500" role="alert">
              Hmm, let’s keep it friendly 🙂 <span lang="nl">Probeer een andere zin!</span>
            </p>
          )}
          {state.kind === 'error' && (
            <p className="text-sm text-ink-500" role="alert">
              Oops, that did not send. Try again, or email me below.
            </p>
          )}
        </form>
      )}

      <p className="relative mt-6 border-t border-border pt-5 text-sm text-ink-500">
        Or just say hi:{' '}
        <a href="mailto:tanyameriamsunny@gmail.com" className="rule-link break-all text-link">
          tanyameriamsunny@gmail.com
        </a>
      </p>
    </aside>
  );
};

export default DutchLesson;
