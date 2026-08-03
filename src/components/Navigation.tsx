import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  to: string;
  /** Section id on the home page, if this scrolls rather than navigates. */
  section?: string;
}

const navItems: NavItem[] = [
  { label: 'Work', to: '/', section: 'work' },
  { label: 'Playground', to: '/playground' },
  { label: 'About', to: '/', section: 'about' },
  { label: 'CV', to: '/cv' },
];

const Navigation = () => {
  const navigate = useNavigate();
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

  const handleClick = (item: NavItem) => (e: React.MouseEvent) => {
    setIsOpen(false);
    if (!item.section) return;

    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: item.section } });
    }
  };

  const isActive = (item: NavItem) => !item.section && location.pathname === item.to;

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
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <Link to="/" className="text-sm rule-link">
            Tanya Sunny
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleClick(item)}
                data-active={isActive(item)}
                aria-current={isActive(item) ? 'page' : undefined}
                className="nav-link text-sm text-ink-600 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="label text-ink-600 md:hidden"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-background px-6 pt-28 md:hidden">
          <div className="flex flex-col items-start gap-6">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} onClick={handleClick(item)} className="text-3xl">
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
