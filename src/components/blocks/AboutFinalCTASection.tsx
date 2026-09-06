import Button from '@/components/primitives/Button';
import useReveal from '@/hooks/useReveal';
import { WHATSAPP_HREF } from '@/data/site';

export default function AboutFinalCTASection() {
  const rootRef = useReveal<HTMLElement>({
    staggerMs: 100,
    threshold: 0.1,
  });

  return (
    <section
      ref={rootRef}
      id="about-final-cta"
      className="ds-section-lg relative isolate overflow-hidden"
      aria-labelledby="about-final-cta-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-charcoal-950"
      />
      <div
        aria-hidden
        className="absolute inset-0 tech-grid-bg-dark opacity-[0.35] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-nova-500/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] rounded-full bg-gold-500/5 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="relative">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-nova-500/40 via-white/15 to-transparent line-draw-vert reveal-up"
          />
          <div
            aria-hidden
            className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/15 to-nova-500/40 line-draw-vert reveal-up d-1"
          />

          <div
            aria-hidden
            className="absolute top-4 left-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/45"
          >
            GREEN NOVA · ENG
          </div>
          <div
            aria-hidden
            className="absolute bottom-4 right-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/45"
          >
            REF · v2.1 · 2026
          </div>

          <div className="relative text-center px-4 sm:px-8 py-14 sm:py-20 lg:py-24">
            <div className="reveal-up">
              <span className="inline-flex items-center font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-nova-300">
                NEXT STEP / START A CONVERSATION
              </span>
            </div>

            <h2
              id="about-final-cta-title"
              className="mt-6 font-display font-bold leading-[1.05] tracking-[-0.03em] text-white text-balance text-[clamp(2rem,3.5vw+1rem,4rem)] reveal-up d-1"
            >
              BUILDING WHAT INDIA'S CLEAN-ENERGY FUTURE NEEDS NEXT.
            </h2>

            <p className="mt-8 text-[1.05rem] leading-[1.75] text-white/75 max-w-3xl mx-auto reveal-up d-2">
              From renewable power and hydrogen to circular waste and water systems, Green Nova brings engineering discipline to complex infrastructure challenges.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 reveal-up d-3">
              <div className="inline-flex items-center gap-3">
                <span className="telemetry-dot" />
                <Button
                  as="a"
                  href="/services"
                  variant="accent"
                  size="lg"
                  iconRight="arrow-right"
                >
                  EXPLORE OUR SOLUTIONS
                </Button>
              </div>
              <Button
                as="a"
                href={WHATSAPP_HREF}
                variant="ghost"
                size="lg"
                inverted
                iconRight="globe"
              >
                START A PROJECT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
