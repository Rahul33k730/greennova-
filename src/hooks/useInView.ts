import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Reveal-on-scroll hook using IntersectionObserver.
 * Pair with the `.reveal-up` + `.is-visible` utility class in styles/index.css.
 */
export function useInView<T extends HTMLElement>(opts: Options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', triggerOnce = true } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (triggerOnce) io.unobserve(entry.target);
          } else if (!triggerOnce) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView } as const;
}
