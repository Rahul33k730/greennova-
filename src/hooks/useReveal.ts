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
    const container = rootRef.current ?? document.body;

    const nodes = Array.from(container.querySelectorAll<HTMLElement>(optsStable.selector));

    // Immediately reveal elements that are already within or above the viewport
    nodes.forEach((n) => {
      const rect = n.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        n.classList.add('is-visible');
      }
    });

    const pending = new Set<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        if (cancelled) return;
        const visible = entries
          .filter((e) => e.isIntersecting || e.boundingClientRect.top < window.innerHeight)
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
        root: null, // Always observe against the document viewport
        rootMargin: optsStable.rootMargin || '50px 0px 50px 0px',
        threshold: optsStable.threshold,
      },
    );

    nodes.forEach((n) => {
      if (!n.classList.contains('is-visible')) {
        io.observe(n);
      }
    });

    // Observe dynamic content (e.g. added by lazy components) using a MutationObserver
    let mo: MutationObserver | undefined;
    if (typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(() => {
        const next = Array.from(container.querySelectorAll<HTMLElement>(optsStable.selector));
        for (const n of next) {
          if (!n.classList.contains('is-visible')) {
            const rect = n.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
              n.classList.add('is-visible');
            } else {
              io.observe(n);
            }
          }
        }
      });
      mo.observe(container, { childList: true, subtree: true });
    }

    return () => {
      cancelled = true;
      io.disconnect();
      mo?.disconnect();
    };
  }, [optsStable]);

  return rootRef;
}
