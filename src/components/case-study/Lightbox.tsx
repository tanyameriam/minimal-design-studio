import { useEffect, useRef, useState } from 'react';
import type { LightboxFigure } from '@/hooks/use-lightbox';

/**
 * The figure lightbox, shared by every case study.
 *
 * Lifted out of pages/CaseStudy.tsx when the Merry Health page needed the
 * same behaviour: that study leans on dense research artifacts (a service
 * blueprint, a twelve-step workflow board) which are only useful at their
 * own size, so they sit small in the page and open here.
 *
 * Behaviour is unchanged from the original: Escape closes, the body locks
 * while it is open, focus lands on Close and returns to the opener, and a
 * click on the image toggles between fit-to-screen and actual size, because
 * a diagram scaled to the viewport is a diagram nobody can read.
 */

const Lightbox = ({
  figure,
  onClose,
}: {
  figure: LightboxFigure | null;
  onClose: () => void;
}) => {
  /** Dense diagrams need natural size, not fit-to-screen. */
  const [zoomed, setZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!figure) {
      setZoomed(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // Keyboard users land on Close, and return to the figure they came from.
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      opener?.focus();
    };
  }, [figure, onClose]);

  if (!figure) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={figure.alt}
      onClick={onClose}
      className="fixed inset-0 z-[70] overflow-auto bg-background/95"
    >
      <div className="fixed right-6 top-6 z-10 flex items-center gap-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setZoomed((z) => !z);
          }}
          className="label rule-link text-ink-600"
        >
          {zoomed ? 'Fit to screen' : 'Actual size'}
        </button>
        <button ref={closeButtonRef} onClick={onClose} className="label rule-link text-ink-600">
          Close
        </button>
      </div>
      <div className="grid min-h-full min-w-full place-items-center p-6">
        <img
          src={figure.src}
          alt={figure.alt}
          onClick={(e) => {
            e.stopPropagation();
            setZoomed((z) => !z);
          }}
          className={
            zoomed
              ? 'max-w-none cursor-zoom-out'
              : 'max-h-[85vh] max-w-full cursor-zoom-in object-contain'
          }
        />
      </div>
    </div>
  );
};

export default Lightbox;
