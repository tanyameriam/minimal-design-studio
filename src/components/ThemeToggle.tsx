import { useTheme } from '@/hooks/use-theme';

/*
 * Sun and moon, drawn here rather than pulled from the icon set so the
 * stroke matches the hairlines the rest of the site is built from.
 */
const Sun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
    <circle cx="12" cy="12" r="4.25" />
    <path
      strokeLinecap="round"
      d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"
    />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.2 14.4A8.4 8.4 0 0 1 9.6 3.8a8.4 8.4 0 1 0 10.6 10.6Z"
    />
  </svg>
);

interface ThemeToggleProps {
  /** Extra positioning classes from the surface that hosts the button. */
  className?: string;
}

/**
 * Two-state theme switch.
 *
 * The stored preference has a third value, 'system', which is the default
 * until someone states one. The control deliberately does not expose it:
 * arriving on the theme the OS already asked for is the point, and pressing
 * the button is how a visitor overrides that. So the button always reads as
 * the mode it will move to, never as a three-way cycle.
 *
 * Both icons are always rendered and crossfaded, so the box never reflows
 * and the swap has somewhere to animate from. Under reduced motion the
 * global rule collapses the duration and they simply swap.
 */
const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { resolved, setTheme } = useTheme();
  const next = resolved === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`panel-chip relative grid h-9 w-9 shrink-0 place-items-center text-ink-500 transition-colors duration-300 ease-smooth hover:text-foreground ${className}`}
    >
      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 h-[1.05rem] w-[1.05rem] transition-all duration-300 ease-smooth ${
          resolved === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
        }`}
      >
        <Moon />
      </span>
      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 h-[1.05rem] w-[1.05rem] transition-all duration-300 ease-smooth ${
          resolved === 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
        }`}
      >
        <Sun />
      </span>
    </button>
  );
};

export default ThemeToggle;
