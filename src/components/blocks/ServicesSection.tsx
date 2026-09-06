import { Link } from 'react-router-dom';
import Button from '@/components/primitives/Button';
import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import { SERVICES } from '@/data/site';

/**
 * ServicesSection — 6 premium service cards on Homepage
 * -----------------------------------------------------
 * Clean, uniform, institutional card presentation.
 * Fully interactive with smooth elevation and consistent styling.
 */
export default function ServicesSection() {

  return (
    <section
      id="services"
      className="ds-section bg-paper-warm"
      aria-labelledby="services-title"
    >
      {/* Decorative grid background */}
      <div
        aria-hidden
        className="absolute inset-0 surface-grid opacity-30 mask-fade-b pointer-events-none"
      />

      <div className="ds-container relative">
        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-16 reveal-up">
          <SectionHeader
            eyebrow="Our Services"
            title="Six Verticals. One Accountable Engineering Partner."
            subtitle="From green-fuel production plants to corporate decarbonisation advisory, we deliver clean energy and environmental infrastructure under one roof."
          />
          <div className="hidden md:block">
            <Button as="a" href="#contact" variant="accent" iconRight="arrow-right">
              Talk with an expert
            </Button>
          </div>
        </div>

        {/* ── Uniform service cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal-up">
          {SERVICES.map((s) => {
            const targetHref = s.href || '/services';
            return (
              <Link
                key={s.title}
                to={targetHref}
                className="group relative rounded-2xl border border-line bg-white overflow-hidden tactile-card flex flex-col justify-between cursor-pointer select-none"
                aria-label={`Explore ${s.title} — ${s.description}`}
              >
                <div>
                  {s.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                      <img
                        src={s.image}
                        alt={`${s.title} facility`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/20 to-transparent pointer-events-none" />
                    </div>
                  )}
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-nova-500" />
                      <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-forest-700">
                        {s.footer}
                      </span>
                    </div>
                    <h3 className="font-display text-[1.3rem] font-semibold tracking-tight leading-snug text-ink group-hover:text-forest-900 transition-colors duration-300 mb-2.5">
                      {s.title}
                    </h3>
                    <p className="text-[0.92rem] leading-[1.7] text-ink-muted font-normal">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-7 pb-6 pt-4 border-t border-line/70 flex items-center bg-paper-warm/30 group-hover:bg-forest-50/40 transition-colors duration-400">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-forest-900 text-white font-medium text-xs group-hover:bg-forest-800 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                    <span>Explore vertical</span>
                    <Icon name="arrow-right" size={13} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 text-emerald-300" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
