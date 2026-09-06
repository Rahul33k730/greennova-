import Button from '@/components/primitives/Button';
import Icon from '@/components/primitives/Icon';
import { CTA } from '@/data/site';

/**
 * Partner With Us — Dark premium CTA section
 * Full-width, dark forest theme, glow accents, two CTAs
 */
export default function PartnerCTASection() {
  return (
    <section id="partner" className="relative isolate overflow-hidden" aria-labelledby="cta-title">
      {/* Background surfaces */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-[0.07] mask-fade-b pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-nova-500/20 via-nova-400/5 to-transparent blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-gold-400/15 to-transparent blur-3xl pointer-events-none"
      />

      <div className="ds-container relative py-section-lg">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 md:p-16 lg:p-20 overflow-hidden">
          {/* Accent lines */}
          <div
            aria-hidden
            className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-nova-400/40 to-transparent"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          <div className="relative text-center max-w-3xl mx-auto reveal-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-nova-400/30 bg-nova-500/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-nova-200">
              <Icon name="leaf" size={12} />
              {CTA.eyebrow}
            </span>

            <h2
              id="cta-title"
              className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-white text-balance text-[clamp(2rem,3vw+1rem,3.5rem)]"
            >
              {CTA.title}
            </h2>

            <p className="mt-7 text-[1.08rem] leading-[1.8] text-white/72 max-w-2xl mx-auto">
              {CTA.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                as="a"
                href={CTA.primary.href}
                variant="accent"
                size="lg"
                iconRight="arrow-right"
              >
                {CTA.primary.label}
              </Button>
              <Button
                as="a"
                href={CTA.secondary.href}
                variant="ghost"
                size="lg"
                inverted
                iconRight="globe"
              >
                {CTA.secondary.label}
              </Button>
            </div>

            <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white/60 text-[0.9rem]">
              <a
                href={`mailto:${CTA.highlight}`}
                className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <span className="ds-icon ds-icon--dark" style={{ width: '2.25rem', height: '2.25rem' }}>
                  <Icon name="mail" size={16} />
                </span>
                {CTA.highlight}
              </a>
              <span className="hidden sm:block h-6 w-px bg-white/15" />
              <div className="inline-flex items-center gap-2.5">
                <span className="ds-icon ds-icon--dark" style={{ width: '2.25rem', height: '2.25rem' }}>
                  <Icon name="location" size={16} />
                </span>
                PAN India · Headquartered in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
