import { useState, type FormEvent, type ReactNode } from 'react';

/**
 * Password gate for NDA-protected pages.
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
 */
interface NdaGateProps {
  /** sessionStorage key so an unlocked vault stays unlocked for the visit. */
  storageKey: string;
  /** Hex SHA-256 of the password. */
  hash: string;
  /** Shown above the prompt, e.g. "BrynQ · Detailed case studies". */
  label: string;
  children: ReactNode;
}

const sha256Hex = async (value: string): Promise<string> => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const NdaGate = ({ storageKey, hash, label, children }: NdaGateProps) => {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(storageKey) === 'granted',
  );
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
      sessionStorage.setItem(storageKey, 'granted');
      setUnlocked(true);
    } else {
      setRejected(true);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center px-5 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-md">
        <p className="label text-ink-500">{label}</p>
        <h1 className="mt-6 text-3xl md:text-4xl">
          This part is under <span className="em">NDA.</span>
        </h1>
        <p className="mt-5 text-base leading-[1.55] text-ink-600">
          The detailed case studies contain design work I can only share privately. If you
          have the password, enter it below; if not, ask me for it.
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
              className="w-full border border-border bg-card px-4 py-3 text-base focus:border-foreground focus:outline-none"
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

        <a
          href="mailto:tanyameriamsunny@gmail.com?subject=Case%20study%20access"
          className="rule-link text-sm text-ink-600"
        >
          Request access <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default NdaGate;
