import { useSyncExternalStore } from 'react';

/**
 * Theme preference. 'system' is the default and follows the OS setting for
 * as long as the visitor never states one; the moment they pick a side it
 * is stored and the OS stops being consulted.
 */
export type Theme = 'light' | 'dark' | 'system';

/** What the page actually renders as, once 'system' has been resolved. */
export type ResolvedTheme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

/*
 * The colour behind the browser chrome on mobile. These are the two
 * --background tokens from index.css, flattened to hex, because the meta tag
 * cannot read a custom property. Keep them in step with the tokens, and with
 * the inline boot script in index.html, which sets the same pair before
 * React mounts so the first paint is never the wrong colour.
 */
const THEME_COLOR: Record<ResolvedTheme, string> = {
  light: '#f3f4f6',
  dark: '#09090b',
};

const listeners = new Set<() => void>();

const media = () =>
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

function readStored(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {
    // Private mode, or storage disabled. Fall through to the system default.
  }
  return 'system';
}

function systemTheme(): ResolvedTheme {
  return media()?.matches ? 'dark' : 'light';
}

function resolve(value: Theme): ResolvedTheme {
  return value === 'system' ? systemTheme() : value;
}

interface Snapshot {
  theme: Theme;
  resolved: ResolvedTheme;
}

/*
 * The snapshot is cached and carries the resolved side as well as the stated
 * preference. Both matter: on 'system', an OS flip changes only `resolved`,
 * and if the snapshot did not change identity React would bail out of the
 * re-render and the toggle would keep showing the old icon.
 */
let snapshot: Snapshot =
  typeof window === 'undefined'
    ? { theme: 'system', resolved: 'dark' }
    : (() => {
        const theme = readStored();
        return { theme, resolved: resolve(theme) };
      })();

/**
 * The one place the document is mutated. `dark` drives the token island in
 * index.css; `color-scheme` gets the scrollbars, form controls and the
 * default canvas to match, which the class alone does not do.
 */
function apply(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.style.colorScheme = resolved;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[resolved]);
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', resolved);
}

/** Recomputes the snapshot from `theme`, writes the document, notifies. */
function commit(theme: Theme) {
  snapshot = { theme, resolved: resolve(theme) };
  apply(snapshot.resolved);
  listeners.forEach((l) => l());
}

export function setTheme(next: Theme) {
  try {
    if (next === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // The preference is not persisted, but the session still honours it.
  }
  commit(next);
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // While the preference is 'system', an OS-level switch has to move the
  // page with it. The handler is always attached and checks the mode when
  // it fires, so there is no subscribe/unsubscribe dance on every change.
  const mq = media();
  const onSystemChange = () => {
    if (snapshot.theme === 'system') commit('system');
  };
  mq?.addEventListener('change', onSystemChange);

  // Another tab stating a preference should move this one too. A cleared
  // storage event arrives with a null key and means the same thing.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== null && e.key !== THEME_STORAGE_KEY) return;
    commit(readStored());
  };
  window.addEventListener('storage', onStorage);

  return () => {
    listeners.delete(listener);
    mq?.removeEventListener('change', onSystemChange);
    window.removeEventListener('storage', onStorage);
  };
}

const getSnapshot = () => snapshot;

/**
 * Reads the current theme and returns the setter. No provider: the store is
 * a module-level singleton, so a toggle in the nav and one on the CV page
 * stay in step without wrapping the tree.
 */
export function useTheme() {
  const { theme, resolved } = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return { theme, resolved, setTheme };
}

// The inline boot script in index.html has normally done this already. Doing
// it again on import is idempotent, and keeps the page correct if that script
// is ever dropped or blocked.
if (typeof document !== 'undefined') apply(snapshot.resolved);
