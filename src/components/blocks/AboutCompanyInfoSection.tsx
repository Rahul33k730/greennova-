import Icon from '@/components/primitives/Icon';
import { COMPANY } from '@/data/site';
import useReveal from '@/hooks/useReveal';

export default function AboutCompanyInfoSection() {
  const ref = useReveal<HTMLElement>({
    selector: '.reveal-up',
    staggerMs: 60,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="company-information"
      className="ds-section bg-paper"
      aria-labelledby="company-info-title"
    >
      <div className="ds-container">
        <div className="max-w-5xl mx-auto reveal-up">
          <div className="mb-8">
            <span className="font-mono text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-charcoal-500">
              12 / COMPANY INFORMATION
            </span>
          </div>

          <div className="mb-3 reveal-up d-1">
            <h2
              id="company-info-title"
              className="font-display font-semibold leading-[1.1] tracking-[-0.025em] text-forest-950 text-[clamp(1.6rem,2.2vw+0.6rem,2.6rem)]"
            >
              LEGAL &amp; OPERATIONAL CONTACT REGISTRY
            </h2>
            <span
              aria-hidden
              className="line-draw reveal-up mt-4 block h-[2px] w-28 bg-gradient-to-r from-nova-500 via-forest-600 to-forest-400"
            />
          </div>

          <p className="reveal-up d-2 mb-10 text-[0.96rem] leading-[1.75] text-ink-muted max-w-3xl">
            {COMPANY.legalName} — Registered Indian Corporate Entity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto reveal-up d-2">
          <div className="relative rounded-3xl border border-line bg-white shadow-sm overflow-hidden">
            <div aria-hidden className="absolute inset-0 tech-grid-bg-fine opacity-50 pointer-events-none" />
            <div className="overlay relative grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 sm:p-10">
              <div className="space-y-5">
                <div className="flex flex-col gap-3">
                  <div className="ds-icon ds-icon--md ds-icon--forest">
                    <Icon name="building" size={20} />
                  </div>
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-500">
                    CORPORATE ENTITY · CERTIFIED
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold tracking-tight leading-[1.2] text-forest-950 text-[1.02rem] uppercase">
                    {COMPANY.legalName}
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <div className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-charcoal-500 mb-1.5">
                      Registered Office
                    </div>
                    <p className="text-[0.92rem] leading-[1.65] text-ink font-medium">
                      {COMPANY.registeredOffice}
                    </p>
                  </div>

                  <div className="pt-1">
                    <p className="text-[0.82rem] leading-[1.6] text-ink-muted">
                      Ministry of Corporate Affairs · Govt of India · Pune ROC
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col gap-3">
                  <div className="ds-icon ds-icon--md ds-icon--gold">
                    <Icon name="award" size={20} />
                  </div>
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-500">
                    STATUTORY IDs · VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-1">
                  <div className="rounded-xl border border-line bg-paper/60 px-4 py-3">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-charcoal-500 font-semibold">
                        CIN
                      </span>
                      <span className="font-mono text-[0.92rem] font-bold tracking-wide text-forest-950 uppercase">
                        {COMPANY.cin}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-line bg-paper/60 px-4 py-3">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-charcoal-500 font-semibold">
                        GSTIN
                      </span>
                      <span className="font-mono text-[0.92rem] font-bold tracking-wide text-forest-950 uppercase">
                        {COMPANY.gstin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-line pt-6 mt-2">
                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <div className="ds-icon ds-icon--md ds-icon--nova">
                      <Icon name="mail" size={20} />
                    </div>
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-500">
                      EXECUTIVE COMMUNICATIONS
                    </span>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="font-mono text-[0.92rem] font-semibold text-forest-900 hover:text-forest-700 transition-colors break-all"
                      >
                        {COMPANY.email}
                      </a>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <a
                        href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                        className="font-mono text-[0.9rem] font-semibold text-ink hover:text-nova-600 transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                      <a
                        href={`tel:${COMPANY.phoneSecondary.replace(/\s+/g, '')}`}
                        className="font-mono text-[0.9rem] font-semibold text-ink hover:text-nova-600 transition-colors"
                      >
                        {COMPANY.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-500">
                      GOVERNANCE · TRANSPARENT
                    </span>
                  </div>

                  <div className="space-y-4 pt-1">
                    <p className="text-[0.82rem] leading-[1.7] text-ink-muted">
                      All corporate records, statutory filings and compliance documents are available on request under formal cover note for due-diligence purposes.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="ds-badge ds-badge--forest">
                        Registered with MCA · CPCB Norms Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
