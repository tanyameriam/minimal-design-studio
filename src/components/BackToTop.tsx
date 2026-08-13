import { useEffect, useState } from 'react';

/**
 * A quiet way back up, appearing only after a full viewport of scroll.
 * Styled as a label chip to match the metadata voice of the site rather
 * than a floating action button.
 */
const BackToTop = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setShown(window.scrollY > window.innerHeight);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={`label fixed bottom-6 right-6 z-40 border border-border bg-background/80 px-3 py-2 text-ink-500 backdrop-blur-md transition-all duration-500 ease-smooth hover:text-foreground ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      Top
      <span aria-hidden="true" className="ml-2 inline-block">
        &uarr;
      </span>
    </button>
  );
};

export default BackToTop;
