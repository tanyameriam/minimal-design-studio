import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

interface NavItem {
  label: string;
  to: string;
  /** Section id on the home page, if this scrolls rather than navigates. */
  section?: string;
  /** Route prefix that should also read as current. /writing/:slug, say. */
  match?: string;
}

/**
 * Five entries, in the order a hiring reader wants them. The creative work is
 * deliberately not one of them: it is a secondary destination reached from
 * the foot of the home page, not one of the main paths through the site.
 *
 * "Notes" is the visible label for /writing. The route keeps its name so
 * every published link to an essay still resolves.
 */
const navItems: NavItem[] = [
  { label: 'Work', to: '/#work', section: 'work' },
  { label: 'About', to: '/about', match: '/about' },
  { label: 'Notes', to: '/writing', match: '/writing' },
  { label: 'CV', to: '/cv' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock the body while the menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape closes the menu.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // The section in view on the home page, so the anchored entries show as
  // current rather than looking like dead links on the page they belong to.
  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    if (location.pathname !== '/') {
      setSection(null);
      return;
    }
    const targets = navItems
      .map((item) => item.section)
      .filter((id): id is string => Boolean(id))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSection(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleClick = (item: NavItem) => (e: React.MouseEvent) => {
    setIsOpen(false);
    if (!item.section) return;

    // On the home page this is a scroll, not a navigation. From a case study
    // it is a real route change that lands on the section, which is why the
    // href is a full /#work rather than a bare hash: middle-click and
    // "open in new tab" have to work from every page.
    if (location.pathname !== '/') return;

    const target = document.getElementById(item.section);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `/#${item.section}`);
  };

  const isActive = (item: NavItem) => {
    if (item.match) return location.pathname.startsWith(item.match);
    if (!item.section) return location.pathname === item.to;
    // Work stays current on the full work page too, which is the same
    // destination one level deeper.
    if (item.section === 'work' && location.pathname === '/work') return true;
    return location.pathname === '/' && section === item.section;
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-background focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md"
      >
        {/* Matches the hero's full-width frame; narrow pages center within it. */}
        <div className="shell flex items-center justify-between px-5 py-6 md:px-8 lg:px-12">
          <Link to="/" className="rule-link text-lg">
            Tanya Sunny
          </Link>

          {/* The switch sits outside the collapsing group on purpose: it is
              reachable at every width without opening the menu first. */}
          <div className="flex items-center gap-5 md:gap-8">
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={handleClick(item)}
                  data-active={isActive(item)}
                  aria-current={isActive(item) ? 'page' : undefined}
                  className="nav-link text-lg text-ink-600 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="-mr-2 px-2 py-2 text-base text-ink-600 md:hidden"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-background px-6 pt-28 md:hidden">
          <div className="flex flex-col items-start gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleClick(item)}
                aria-current={isActive(item) ? 'page' : undefined}
                className="text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
