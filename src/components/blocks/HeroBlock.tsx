import { useEffect, useRef, useState } from 'react';
import Button from '@/components/primitives/Button';
import { HERO } from '@/data/site';

/**
 * HeroBlock — Cinematic full-viewport hero with animated 6-image slideshow
 * -------------------------------------------------------------------------
 * Features:
 *  - Cross-fade transitions between all 6 client-provided images
 *  - Ken Burns (subtle zoom + pan) effect on active slide
 *  - Auto-advance every 6s with pause-on-hover
 *  - Navigation dots at bottom for manual slide selection
 *  - Respect `prefers-reduced-motion` user preference
 *  - Gradient overlays preserved for text legibility
 */
export default function HeroBlock() {
  const [h1, h2, h3] = HERO.headline;
  const slides = HERO.slides;
  const interval = HERO.slideshowInterval;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, isPaused, slides.length, interval]);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, [slides]);

  const goTo = (idx: number) => {
    setActiveIndex(((idx % slides.length) + slides.length) % slides.length);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveIndex((i) => (i + 1) % slides.length);
      }, interval);
    }
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] w-full overflow-hidden flex items-center sm:items-end lg:items-center pt-[calc(var(--nav-height)+1.5rem)] pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pb-20 lg:pt-[calc(var(--nav-height)+2rem)] lg:pb-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* ── Animated slideshow background ── */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden>
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 hero-slide ${isActive ? 'hero-slide--active' : ''}`}
              data-slide-index={idx}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                role="presentation"
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
                className={`h-full w-full object-cover object-center lg:object-center ${isActive ? 'hero-slide__kenburns' : ''}`}
              />
            </div>
          );
        })}
      </div>

      {/* ── Gradient overlays for legibility ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950/80 via-forest-950/45 to-forest-950/55 lg:bg-gradient-to-r lg:from-forest-950/90 lg:via-forest-950/60 lg:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-forest-950/30 lg:bg-gradient-to-t lg:from-forest-950/60 lg:via-transparent lg:to-forest-950/40"
      />

      {/* ── Content ── */}
      <div className="ds-container relative w-full">
        <div className="max-w-2xl sm:max-w-3xl xl:max-w-4xl reveal-up">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center rounded-full border border-nova-400/30 bg-forest-950/60 px-3 py-1.5 sm:px-4 backdrop-blur-md text-[0.62rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-nova-300 shadow-sm">
            {HERO.eyebrow}
          </span>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-4 sm:mt-6 font-display font-semibold leading-[1.08] sm:leading-[1.02] tracking-[-0.02em] sm:tracking-[-0.035em] text-white text-balance text-[clamp(1.75rem,7.2vw,3rem)] sm:text-[clamp(2rem,6vw+0.25rem,5.5rem)]"
            style={{ textShadow: '0 10px 32px rgba(4, 19, 13, 0.5)' }}
          >
            {h1}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-nova-300 via-nova-400 to-gold-300 bg-clip-text text-transparent">{h2}</span>
            <br className="hidden sm:block" />
            {h3}
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-7 max-w-xl sm:max-w-2xl text-[0.92rem] sm:text-[1.12rem] leading-[1.65] sm:leading-[1.8] text-white/90"
            style={{ textShadow: '0 6px 22px rgba(10, 30, 21, 0.34)' }}
          >
            {HERO.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              as="a"
              href={HERO.primaryCta.href}
              variant="accent"
              size="lg"
              iconRight="arrow-right"
              className="w-full sm:w-auto justify-center"
            >
              {HERO.primaryCta.label}
            </Button>
            <Button
              as="a"
              href={HERO.secondaryCta.href}
              variant="ghost"
              size="lg"
              inverted
              iconRight="arrow-right"
              className="w-full sm:w-auto justify-center"
            >
              {HERO.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* ── Slideshow navigation dots ── */}
        <div className="mt-8 sm:mt-16 lg:mt-24 flex items-center gap-2.5 sm:gap-3" role="tablist" aria-label="Hero background slides">
          {slides.map((slide, idx) => (
            <button
              key={slide.src + '-dot'}
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Go to slide ${idx + 1} of ${slides.length}`}
              onClick={() => goTo(idx)}
              className={`group relative h-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] touch-manipulation before:absolute before:-inset-2.5 before:content-[''] ${
                idx === activeIndex
                  ? 'w-10 bg-nova-400 shadow-[0_0_14px_rgba(74,208,142,0.6)]'
                  : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            >
              {idx === activeIndex && (
                <span className="absolute inset-0 rounded-full hero-dot-progress" />
              )}
            </button>
          ))}
          <span className="ml-3 text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-white/60">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
