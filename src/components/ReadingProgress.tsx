import { useEffect, useRef } from 'react';

/**
 * A hairline reading-progress bar in the site accent, sitting on the top
 * edge of the fixed nav. Orientation for long case studies at every
 * viewport, complementing the 2xl-only ProgressNav. Transform-only updates
 * behind requestAnimationFrame, so it costs nothing while idle.
 */
const ReadingProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[55] h-0.5">
      <div
        ref={barRef}
        className="h-full origin-left bg-[hsl(var(--accent))]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ReadingProgress;
