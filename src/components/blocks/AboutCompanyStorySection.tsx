import useReveal from '@/hooks/useReveal';

const CAPABILITIES = [
  {
    num: '01',
    title: 'Engineering',
    description:
      'Front-end engineering design (FEED) and detailed engineering for solar, wind, hybrid & storage systems.',
  },
  {
    num: '02',
    title: 'Technology Selection',
    description:
      'Vendor-agnostic technology evaluation and selection — matching the right modules, inverters, BOS for site conditions.',
  },
  {
    num: '03',
    title: 'EPC',
    description:
      'Turnkey engineering, procurement & construction with disciplined stage-gate execution.',
  },
  {
    num: '04',
    title: 'Project Integration',
    description:
      'Civil, electrical, SCADA, grid-connect and control systems integration for a single-point-of-truth system.',
  },
  {
    num: '05',
    title: 'Compliance',
    description:
      'Permits, MNRE guidelines, state regulations, statutory approvals and net-metering paperwork handled end-to-end.',
  },
  {
    num: '06',
    title: 'Commissioning',
    description:
      'Rigorous SAT/FAT protocols, grid-sync, performance testing, and documentation handover with auditable trails.',
  },
  {
    num: '07',
    title: 'Long-term O&M',
    description:
      'Predictive O&M, spares, availability SLAs and performance optimization across the 25+ year asset lifecycle.',
  },
];

export default function AboutCompanyStorySection() {
  const ref = useReveal<HTMLElement>({
    selector: '.reveal-up',
    staggerMs: 60,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="company-story"
      className="ds-section bg-white relative overflow-hidden"
      aria-labelledby="company-story-title"
    >
      <div aria-hidden className="absolute inset-0 tech-grid-bg opacity-60 pointer-events-none" />

      <div className="ds-container relative">
        <div className="mb-14 lg:mb-20 reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-nova-600">
              03 / COMPANY STORY
            </span>
            <span aria-hidden className="flex-1 h-px bg-line-strong max-w-[12rem]" />
          </div>
          <h2
            id="company-story-title"
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-[clamp(1.8rem,2.8vw+1rem,3.25rem)]"
          >
            FROM CHALLENGE TO INFRASTRUCTURE
          </h2>
        </div>

        <div className="ds-grid-12 items-start gap-y-14 lg:gap-y-0">
          <div className="lg:col-span-12 lg:col-span-5">
            <div className="reveal-up">
              <div className="relative inline-flex items-center gap-2 rounded-full border border-forest-900/10 bg-forest-950/5 px-3 py-1.5 mb-8">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-nova-500" />
                <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-forest-900/70">
                  THESIS / 001
                </span>
              </div>

              <div className="rounded-3xl border border-line bg-forest-950 p-10 lg:p-14 text-white relative overflow-hidden">
                <div aria-hidden className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-nova-500/20 to-transparent blur-3xl" />
                <div aria-hidden className="absolute inset-0 tech-grid-bg-dark opacity-40 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-8">
                  <span aria-hidden className="h-px w-8 bg-nova-500" />
                  <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-nova-300">
                    CORE BELIEF
                  </span>
                </div>

                <p className="font-display font-semibold leading-[1.18] tracking-[-0.025em] text-white text-[clamp(1.6rem,1.9vw+0.9rem,2.5rem)]">
                  India's energy transition is not only a technology challenge.{' '}
                  <span className="text-nova-400">It is an engineering challenge.</span>
                </p>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/50 mb-2">
                        DELTA
                      </div>
                      <div className="font-display text-3xl font-semibold text-white">
                        7×
                      </div>
                      <div className="text-xs text-white/60 mt-1 leading-snug">
                        End-to-end<br />capabilities
                      </div>
                    </div>
                    <div className="h-16 w-16 rounded-xl border border-nova-500/30 bg-nova-500/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 text-nova-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 lg:col-span-7 lg:pl-6 xl:pl-10">
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-[0.95rem] top-1 bottom-1 w-px bg-gradient-to-b from-nova-500/80 via-nova-500/40 to-nova-500/10 line-draw-vert reveal-up"
              />

              <ol className="relative space-y-7">
                {CAPABILITIES.map((cap, i) => (
                  <li
                    key={cap.num} className={`relative list-none reveal-up d-${i + 1}`}>
                    <div className="flex gap-5 md:gap-6 pl-0">
                      <div className="relative flex-shrink-0 flex flex-col items-center pt-1.5">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-forest-950 bg-white shadow-[0_0_0_4px_#fff]">
                          <span className="h-2.5 w-2.5 rounded-full bg-nova-500" />
                        </span>
                      </div>

                      <div className="flex-1 pb-1">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-forest-900/60">
                            {cap.num} / 07
                          </span>
                          <span aria-hidden className="h-px flex-1 bg-line max-w-[3rem]" />
                        </div>
                        <h3 className="font-display text-[1.25rem] font-semibold tracking-tight leading-snug text-forest-950 mb-2">
                          {cap.title}
                        </h3>
                        <p className="text-ink-muted leading-[1.72] text-[0.95rem]">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 ml-14 md:ml-[3.5rem] reveal-up d-7">
              <div className="relative rounded-2xl border border-nova-500/30 bg-gradient-to-br from-forest-950 to-forest-900 p-7 text-white overflow-hidden">
                <div aria-hidden className="absolute inset-0 tech-grid-bg-dark opacity-30 pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl border border-nova-500/40 bg-nova-500/15 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-nova-400" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-nova-300 mb-1.5">
                      OUTCOME
                    </div>
                    <p className="text-white/85 leading-[1.65]">
                      Policy ambition becomes shovel-ready infrastructure —
                      <span className="text-nova-300 font-semibold"> delivered, on-spec, and underwritten for decades of performance.</span>
                    </p>
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
