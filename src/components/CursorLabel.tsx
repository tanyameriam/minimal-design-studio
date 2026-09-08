import { useEffect, useRef } from 'react';

/**
 * A pointer-following label. Any element carrying data-cursor="..." shows its
 * value next to the cursor and hides the native pointer while hovering, so a
 * project visual reads as "view project" without needing an overlay.
 *
 * Position is written straight to the DOM inside a rAF rather than held in
 * state: a pointermove handler that re-renders React would fire dozens of
 * times a second. Only fine pointers get it at all.
 */
const CursorLabel = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let x = 0;
    let y = 0;
    let frame = 0;
    let current = '';

    const paint = () => {
      frame = 0;
      wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      const target = (event.target as Element | null)?.closest<HTMLElement>('[data-cursor]');
      const next = target?.dataset.cursor ?? '';
      if (next !== current) {
        current = next;
        if (next) text.textContent = next;
        wrap.dataset.shown = next ? 'true' : 'false';
      }

      if (!frame) frame = requestAnimationFrame(paint);
    };

    // A label left mid-screen after the pointer leaves the window reads as stuck.
    const onLeave = () => {
      current = '';
      wrap.dataset.shown = 'false';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      data-shown="false"
      className="cursor-label pointer-events-none fixed left-0 top-0 z-[70]"
    >
      <span
        ref={textRef}
        className="label absolute whitespace-nowrap rounded-full bg-card/90 px-4 py-2.5 text-foreground shadow-md backdrop-blur-sm"
      />
    </div>
  );
};

export default CursorLabel;
