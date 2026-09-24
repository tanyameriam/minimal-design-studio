import { useMemo, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefetchRoute } from '@/lib/prefetch';

/** The card shell. One border, one surface, one hover state, everywhere. */
export const SHELL =
  'reveal group/card flex cursor-pointer flex-col rounded-2xl border border-border bg-card transition-[border-color,transform] duration-500 ease-smooth hover:-translate-y-0.5 hover:border-ink-400';

/**
 * The whole card as one click target.
 *
 * A handler rather than the usual stretched-link pseudo-element, because an
 * overlay covering the card would make every paragraph on it unselectable,
 * and these cards are mostly prose: the outcome sentence, the role line and
 * the numbers are all meant to be readable and quotable.
 *
 * The real links inside are untouched and still handle their own clicks, so
 * this adds no tab stop, no duplicate destination in the accessibility tree
 * and nothing for a keyboard user to get caught on. It is a pointer
 * convenience layered on top of navigation that already worked.
 */
export const useCardNavigation = (href: string | null) => {
  const navigate = useNavigate();

  return useMemo(() => {
    if (!href) return {};

    /**
     * A click the card should act on: not already handled by a link or
     * button inside it, and not the click that ends a text selection.
     */
    const isCardClick = (event: MouseEvent<HTMLElement>) => {
      if (event.defaultPrevented) return false;
      if ((event.target as Element | null)?.closest('a, button, [role="button"]')) return false;

      const selection = window.getSelection();
      return !(
        selection &&
        !selection.isCollapsed &&
        selection.anchorNode &&
        event.currentTarget.contains(selection.anchorNode)
      );
    };

    return {
      onClick: (event: MouseEvent<HTMLElement>) => {
        if (!isCardClick(event)) return;
        // Modifier-click opens a tab, the way it would on the real link.
        if (event.metaKey || event.ctrlKey) {
          window.open(href, '_blank', 'noopener');
          return;
        }
        navigate(href);
      },
      // Middle click, same bargain.
      onAuxClick: (event: MouseEvent<HTMLElement>) => {
        if (event.button !== 1 || !isCardClick(event)) return;
        window.open(href, '_blank', 'noopener');
      },
      onMouseEnter: () => prefetchRoute(href),
    };
  }, [href, navigate]);
};
