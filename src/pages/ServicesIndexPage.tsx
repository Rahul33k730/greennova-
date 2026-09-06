import { Link } from 'react-router-dom';
import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import Icon from '@/components/primitives/Icon';
import { SERVICES } from '@/data/site';
import useSeo from '@/hooks/useSeo';

export default function ServicesIndexPage() {

  useSeo({
    title: 'Services — Six Verticals, One Engineering Partner',
    description: 'Explore Green Nova\'s six service verticals: Green Hydrogen, Compressed Biogas, Waste-to-Energy, Environmental Engineering, Renewable Hybrid Energy and Sustainability Advisory. Each with end-to-end engineering, EPC and O&M capability.',
    keywords: ['Green Hydrogen Engineering', 'CBG Bio-CNG EPC', 'Waste to Energy', 'Environmental Engineering', 'Renewable Hybrid Solar Wind BESS', 'ESG Sustainability Advisory'],
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'Services' }],
  });

  return (
    <SiteShell>
      {/* ========== SERVICES GRID (STARTS FROM FULL VERTICAL COVERAGE) ========== */}
      <section
        id="services-grid"
        aria-labelledby="services-grid-title"
        className="ds-section bg-paper pt-[calc(var(--nav-height)+2.5rem)] pb-20 lg:pb-28"
      >
        <div className="ds-container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="inline-flex items-center gap-2 text-[0.82rem] text-ink-muted">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-forest-800 transition-colors inline-flex items-center leading-none">
                  Home
                </Link>
              </li>
              <li aria-hidden className="inline-flex items-center text-charcoal-400 opacity-60">
                <Icon name="arrow-right" size={11} />
              </li>
              <li aria-current="page" className="inline-flex items-center text-forest-900 font-semibold leading-none">
                Services
              </li>
            </ol>
          </nav>

          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow="Full Vertical Coverage"
              title="Explore Every Service Vertical in Depth."
              subtitle="Each practice area below delivers end-to-end engineering, procurement, construction, and long-term operations backed by institutional performance guarantees."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((svc) => {
              const targetHref = svc.href || '/services';
              return (
                <Link
                  key={svc.title}
                  to={targetHref}
                  className="group relative rounded-2xl border border-line bg-white overflow-hidden tactile-card flex flex-col justify-between cursor-pointer select-none"
                  aria-label={`Explore ${svc.title} — ${svc.description}`}
                >
                  <div>
                    {svc.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/20 to-transparent pointer-events-none" />
                      </div>
                    )}
                    <div className="p-6 md:p-7">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-nova-500" />
                        <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-forest-700">
                          {svc.footer}
                        </span>
                      </div>
                      <h3 className="font-display text-[1.32rem] font-semibold tracking-tight leading-snug text-ink group-hover:text-forest-900 transition-colors duration-300 mb-2.5">
                        {svc.title}
                      </h3>
                      <p className="text-[0.92rem] leading-[1.7] text-ink-muted font-normal">
                        {svc.description}
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
    </SiteShell>
  );
}
