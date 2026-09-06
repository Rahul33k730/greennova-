import { useEffect, useState } from 'react';
import type { Breakpoint } from '@/types/design-system';
import { BREAKPOINTS } from '@/types/design-system';

/**
 * Returns true when the viewport is >= the given breakpoint (mobile-first).
 * Reads initial value from window on mount for SSR-safe hydration.
 */
export function useBreakpoint(target: Breakpoint): boolean {
  const [match, setMatch] = useState(() => {
    if (typeof window === 'undefined') return target === 'sm';
    return window.innerWidth >= BREAKPOINTS[target];
  });

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS[target]}px)`);
    const on = (e: MediaQueryListEvent | MediaQueryListEventMap['change']) => setMatch(e.matches);
    setMatch(mql.matches);
    mql.addEventListener('change', on);
    return () => mql.removeEventListener('change', on);
  }, [target]);

  return match;
}

export default function useIsDesktop() {
  return useBreakpoint('lg');
}
