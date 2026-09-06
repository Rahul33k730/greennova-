import { useEffect, useRef, useMemo } from 'react';

/**
 * useReveal — attach to a root element to reveal children with class
 * `.reveal-up` as they enter the viewport. Lightweight IntersectionObserver.
 *
 * Options:
 *   - selector: CSS selector for reveal targets (default: `.reveal-up`)
 *   - staggerMs: delay between items in a batch (0 for no stagger)
 *   - threshold: IO threshold (default 0.1)
 *   - once: remove listener after first reveal (default true)
 */
export interface UseRevealOptions {
  selector?: string;
  staggerMs?: number;
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
  disabled?: boolean;
}

export default function useReveal<T extends HTMLElement = HTMLElement>(
  options: UseRevealOptions = {},
) {
  const {
    selector = '.reveal-up',
    staggerMs = 60,
    threshold = 0.1,
    once = true,
    rootMargin = '0px 0px -40px 0px',
    disabled = false,
  } = options;

  const rootRef = useRef<T | null>(null);
  const optsStable = useMemo(
    () => ({ selector, staggerMs, threshold, once, rootMargin, disabled }),
    [selector, staggerMs, threshold, once, rootMargin, disabled],
  );

  useEffect(() => {
    if (optsStable.disabled) return;
    if (typeof window === 'undefined') return;
    if (typeof IntersectionObserver === 'undefined') {
      // No IO support — reveal everything immediately (progressive enhancement)
      const root = rootRef.current ?? document.body;
      root.querySelectorAll<HTMLElement>(optsStable.selector).forEach((el) => {
        el.classList.add('is-visible');
        el.style.transitionDelay = '';
      });
      return;
    }

    let cancelled = false;
    const root = rootRef.current ?? document.body;

    const initial = (): HTMLElement[] => {
      const nodes = Array.from(root.querySelectorAll<HTMLElement>(optsStable.selector));
      nodes.forEach((n) => {
        if (n.classList.contains('is-visible')) n.classList.remove('is-visible');
      });
      return nodes;
    };

    const pending = new Set<Element>();
    let nodes = initial();

    const io = new IntersectionObserver(
      (entries) => {
        if (cancelled) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target)
          .sort((a, b) => {
            const ra = a.getBoundingClientRect();
            const rb = b.getBoundingClientRect();
            return ra.top - rb.top;
          });

        visible.forEach((el, idx) => {
          if (pending.has(el)) return;
          pending.add(el);
          const h = el as HTMLElement;
          if (optsStable.staggerMs > 0) {
            const delay = `${Math.min(idx, 8) * optsStable.staggerMs}ms`;
            h.style.transitionDelay = delay;
            h.style.animationDelay = delay;
          }
          requestAnimationFrame(() => {
            h.classList.add('is-visible');
            if (optsStable.once) io.unobserve(el);
            pending.delete(el);
          });
        });
      },
      {
        root: rootRef.current ?? null,
        rootMargin: optsStable.rootMargin,
        threshold: optsStable.threshold,
      },
    );

    nodes.forEach((n) => io.observe(n));

    // Observe dynamic content (e.g. added by lazy components) using a MutationObserver
    let mo: MutationObserver | undefined;
    if (typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(() => {
        const next = Array.from(root.querySelectorAll<HTMLElement>(optsStable.selector));
        const currentNodes = new Set(nodes);
        for (const n of next) {
          if (!currentNodes.has(n) && !n.classList.contains('is-visible')) {
            io.observe(n);
            nodes.push(n);
          }
        }
      });
      mo.observe(root, { childList: true, subtree: true });
    }

    return () => {
      cancelled = true;
      io.disconnect();
      mo?.disconnect();
    };
  }, [optsStable]);

  return rootRef;
}
