import { useState, type FormEvent, type ReactNode } from 'react';

/**
 * Password gate for NDA-protected pages, with a request-access form for
 * visitors who do not have the password yet.
 *
 * The password is never stored: the input is hashed with SHA-256 and
 * compared against `hash`. To change a gate's password, run
 *
 *   node -e "console.log(require('crypto').createHash('sha256').update('NEW-PASSWORD').digest('hex'))"
 *
 * and replace the hash where the gate is used. Note the limit of a static
 * site: this keeps the door shut and the content out of casual reach, but
 * anything rendered behind it still ships in the bundle. Keep genuinely
 * sensitive material (raw screens, customer names) out of the repo until a
 * server-side gate exists.
 *
 * The request form posts to FormSubmit (formsubmit.co), which emails the
 * name and address to ACCESS_INBOX. The visitor's address is sent as the
 * reply-to, so replying to that email with the password reaches them. The
 * very first submission makes FormSubmit send a one-time activation email to
 * the inbox; nothing is delivered until that link is clicked.
 */
const ACCESS_INBOX = 'tanyameriamsunny@gmail.com';
const ACCESS_ENDPOINT = `https://formsubmit.co/ajax/${ACCESS_INBOX}`;

interface NdaGateProps {
  /** sessionStorage key so an unlocked vault stays unlocked for the visit. */
  storageKey: string;
  /** Hex SHA-256 of the password. */
  hash: string;
  /** Shown above the prompt, e.g. "BrynQ · Detailed case studies". */
  label: string;
  /** Names what is being requested, in the access email's subject. */
  project?: string;
  /** Optional frame around the locked prompt, e.g. the page chrome. */
  wrap?: (prompt: ReactNode) => ReactNode;
  children: ReactNode;
}

const sha256Hex = async (value: string): Promise<string> => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const readGranted = (key: string) => {
  try {
    return sessionStorage.getItem(key) === 'granted';
  } catch {
    return false;
  }
};

const inputClass =
  'w-full border border-border bg-card px-4 py-3 text-base focus:border-foreground focus:outline-none';

type RequestState = 'idle' | 'sending' | 'sent' | 'failed';

const RequestAccess = ({ project }: { project: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');
  const [state, setState] = useState<RequestState>('idle');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === 'sending') return;
    // Bots fill every field; people never see this one.
    if (honey) {
      setState('sent');
      return;
    }
    setState('sending');
    try {
      const res = await fetch(ACCESS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          project,
          page: window.location.href,
          _subject: `Access request: ${project}, from ${name.trim()}`,
          _replyto: email.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      setState(res.ok && String(data.success) === 'true' ? 'sent' : 'failed');
    } catch {
      setState('failed');
    }
  };

  if (state === 'sent') {
    return (
      <div role="status" className="border border-border bg-card p-5">
        <p className="label text-ink-500">Request sent</p>
        <p className="mt-3 text-base leading-[1.55] text-ink-600">
          Thanks{name ? `, ${name.trim().split(' ')[0]}` : ''}. I will email the password to{' '}
          <span className="text-foreground">{email.trim()}</span> soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="access-name" className="label mb-2 block text-ink-500">
          Name
        </label>
        <input
          id="access-name"
          type="text"
          required
          autoComplete="name"
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="access-email" className="label mb-2 block text-ink-500">
          Email
        </label>
        <input
          id="access-email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        className="hidden"
      />
      <button
        type="submit"
        disabled={state === 'sending'}
        className="border border-foreground px-5 py-3 text-base text-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending' : 'Request access'}
      </button>
      <p aria-live="polite" className="min-h-5 text-sm text-destructive">
        {state === 'failed' ? (
          <>
            That did not go through. You can also email me at{' '}
            <a className="underline" href={`mailto:${ACCESS_INBOX}?subject=${encodeURIComponent(`Access request: ${project}`)}`}>
              {ACCESS_INBOX}
            </a>
            .
          </>
        ) : (
          ''
        )}
      </p>
    </form>
  );
};

const NdaGate = ({ storageKey, hash, label, project = label, wrap, children }: NdaGateProps) => {
  const [unlocked, setUnlocked] = useState(() => readGranted(storageKey));
  const [value, setValue] = useState('');
  const [rejected, setRejected] = useState(false);
  const [checking, setChecking] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!value || checking) return;
    setChecking(true);
    const attempt = await sha256Hex(value);
    setChecking(false);
    if (attempt === hash) {
      try {
        sessionStorage.setItem(storageKey, 'granted');
      } catch {
        /* Private mode: stays unlocked until the page reloads. */
      }
      setUnlocked(true);
    } else {
      setRejected(true);
    }
  };

  const prompt = (
    <div className="flex min-h-[70vh] items-center px-gutter py-16">
      <div className="mx-auto w-full max-w-md">
        <p className="label text-ink-500">{label}</p>
        <h1 className="mt-6 text-3xl md:text-4xl">
          This work is under <span className="em">NDA.</span>
        </h1>
        <p className="mt-5 text-base leading-[1.55] text-ink-600">
          It shows design work I can only share privately. If you have the password, type it below.
          If not, leave your name and email and I will send it to you.
        </p>

        <form onSubmit={submit} className="mt-8">
          <label htmlFor="nda-password" className="label mb-2 block text-ink-500">
            Password
          </label>
          <div className="flex gap-3">
            <input
              id="nda-password"
              type="password"
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setRejected(false);
              }}
              className={inputClass}
            />
            <button
              type="submit"
              disabled={checking}
              className="shrink-0 bg-foreground px-5 py-3 text-base text-background"
            >
              Unlock
            </button>
          </div>
          <p aria-live="polite" className="mt-3 min-h-5 text-sm text-destructive">
            {rejected ? 'That is not it. Check with me for the current password.' : ''}
          </p>
        </form>

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-xl">No password yet?</h2>
          <p className="mb-6 mt-2 text-sm leading-[1.55] text-ink-600">
            Ask for access and I will email it to you.
          </p>
          <RequestAccess project={project} />
        </div>
      </div>
    </div>
  );

  return <>{wrap ? wrap(prompt) : prompt}</>;
};

export default NdaGate;
