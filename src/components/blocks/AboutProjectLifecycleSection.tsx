import Icon from '@/components/primitives/Icon';
import useReveal from '@/hooks/useReveal';

const STAGES = [
  {
    num: '01',
    title: 'DISCOVERY & SCOPING',
    description:
      'Site visits, stakeholder alignment, preliminary resource and off-take work, clear project charter signed off before engineering begins.',
  },
  {
    num: '02',
    title: 'FEASIBILITY & TECHNOLOGY SELECTION',
    description:
      'Independent techno-economic comparison of technologies and OEMs. Selection justified in writing — never by default.',
  },
  {
    num: '03',
    title: 'DETAILED ENGINEERING',
    description:
      'Full 3D model, P&IDs, GA drawings, BOQs, bid documents. Formal reviews (30/60/90) with client, lender and inspector.',
  },
  {
    num: '04',
    title: 'PROCUREMENT & MANUFACTURING',
    description:
      'Vendor selection, inspections, FATs, packing & shipping — all logged and visible through project controls.',
  },
  {
    num: '05',
    title: 'SITE EXECUTION',
    description:
      'Construction, erection, testing and commissioning run under formal EHS, quality and schedule systems.',
  },
  {
    num: '06',
    title: 'HANDOVER & O&M',
    description:
      'SAT, as-builts, manuals, training and O&M contract — so the asset is performant and documented on day one.',
  },
];

export default function AboutProjectLifecycleSection() {
  const ref = useReveal<HTMLElement>({
    selector: '.reveal-up',
    staggerMs: 60,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="project-lifecycle"
      className="ds-section bg-paper relative overflow-hidden"
      aria-labelledby="project-lifecycle-title"
    >
      <div aria-hidden className="absolute inset-0 tech-grid-bg opacity-50 pointer-events-none" />

      <div className="ds-container relative">
        <div className="mb-16 lg:mb-24 max-w-4xl reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-nova-600">
              10 / PROJECT LIFECYCLE
            </span>
            <span aria-hidden className="flex-1 h-px bg-line-strong max-w-[14rem]" />
          </div>
          <h2
            id="project-lifecycle-title"
            className="font-display font-semibold leading-[1.06] tracking-[-0.035em] text-[clamp(1.9rem,3.2vw+0.8rem,3.75rem)] mb-4"
          >
            FROM CONCEPT TO COMMISSIONING
          </h2>
          <p className="text-ink-muted text-[1.08rem] leading-[1.75] max-w-2xl">
            Six formal stage-gated phases. Signed-off deliverables at every boundary.
          </p>
        </div>

        {/* ============ DESKTOP HORIZONTAL TIMELINE ============ */}
        <div className="hidden md:block relative reveal-up">
          <div className="relative py-14">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-line-strong"
            />
            <div
              aria-hidden
              className="line-draw reveal-up absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-nova-500 via-nova-500 to-forest-600"
            />

            <div className="relative grid grid-cols-6 gap-x-2 lg:gap-x-4">
              {STAGES.map((stage, i) => {
                const isTop = i % 2 === 0;
                return (
                  <div
                    key={stage.num}
                    className={`relative flex flex-col items-center reveal-up d-${i + 1}`}
                  >
                    {isTop && (
                      <>
                        <div className="mb-6 w-full px-1">
                          <div className="group relative rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-nova-500/60 hover:shadow-[0_14px_36px_-18px_rgba(34,184,113,0.35)]">
                            <div className="mb-3 flex items-center justify-between">
                              <span className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-nova-600">
                                STG {stage.num}
                              </span>
                              <Icon
                                name="check"
                                size={14}
                                className="text-line-strong transition-colors duration-300 group-hover:text-nova-500"
                              />
                            </div>
                            <h3 className="font-display text-[0.98rem] font-semibold leading-snug tracking-[-0.01em] text-forest-950 mb-2">
                              {stage.title}
                            </h3>
                            <p className="text-[0.8rem] leading-[1.65] text-ink-muted opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:opacity-100 group-hover:max-h-[200px] group-hover:pt-1">
                              {stage.description}
                            </p>
                            <div aria-hidden className="absolute left-1/2 -bottom-3 w-4 h-4 -translate-x-1/2 rotate-45 border-r border-b border-line bg-white group-hover:border-nova-500/60" />
                          </div>
                        </div>

                        <div
                          aria-hidden
                          className="absolute left-1/2 top-[calc(100%-1.5rem)] -translate-x-1/2 w-px h-6 bg-line-strong"
                        />
                      </>
                    )}

                    <div className="relative z-10 flex items-center justify-center">
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-forest-950 shadow-[0_0_0_4px_#fff]">
                        <span className="font-mono text-[1rem] font-bold tracking-[-0.02em] text-forest-950">
                          {stage.num}
                        </span>
                        <span
                          aria-hidden
                          className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-nova-500 ring-[3px] ring-white"
                          style={{
                            boxShadow: '0 0 0 0 rgba(34, 184, 113, 0.55)',
                            animation: 'telemetryPulse 2200ms ease-out infinite',
                          }}
                        />
                      </div>
                    </div>

                    {!isTop && (
                      <>
                        <div
                          aria-hidden
                          className="absolute left-1/2 bottom-[calc(100%-1.5rem)] -translate-x-1/2 w-px h-6 bg-line-strong"
                        />

                        <div className="mt-6 w-full px-1">
                          <div className="group relative rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:translate-y-1 hover:border-nova-500/60 hover:shadow-[0_14px_36px_-18px_rgba(34,184,113,0.35)]">
                            <div aria-hidden className="absolute left-1/2 -top-3 w-4 h-4 -translate-x-1/2 rotate-45 border-l border-t border-line bg-white group-hover:border-nova-500/60" />
                            <div className="mb-3 flex items-center justify-between">
                              <span className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-nova-600">
                                STG {stage.num}
                              </span>
                              <Icon
                                name="check"
                                size={14}
                                className="text-line-strong transition-colors duration-300 group-hover:text-nova-500"
                              />
                            </div>
                            <h3 className="font-display text-[0.98rem] font-semibold leading-snug tracking-[-0.01em] text-forest-950 mb-2">
                              {stage.title}
                            </h3>
                            <p className="text-[0.8rem] leading-[1.65] text-ink-muted opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:opacity-100 group-hover:max-h-[200px] group-hover:pt-1">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============ MOBILE VERTICAL TIMELINE ============ */}
        <ol className="md:hidden relative list-none space-y-7 pl-12 before:absolute before:left-[1.45rem] before:top-2 before:bottom-2 before:w-[2px] before:bg-line-strong">
          <div
            aria-hidden
            className="line-draw-vert reveal-up absolute left-[1.45rem] top-2 bottom-2 w-[2px] bg-gradient-to-b from-nova-500 via-nova-500 to-forest-600"
          />
          {STAGES.map((stage, i) => (
            <li
              key={stage.num}
              className={`relative list-none reveal-up d-${i + 1}`}
            >
              <div
                aria-hidden
                className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-forest-950 shadow-[0_0_0_3px_#fff]"
              >
                <span className="font-mono text-[0.78rem] font-bold tracking-[-0.02em] text-forest-950">
                  {stage.num}
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-nova-500 ring-2 ring-white"
                  style={{
                    boxShadow: '0 0 0 0 rgba(34, 184, 113, 0.55)',
                    animation: 'telemetryPulse 2200ms ease-out infinite',
                  }}
                />
              </div>
              <div className="group rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-nova-500/60 hover:shadow-md">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-nova-600">
                    STAGE {stage.num} / 06
                  </span>
                  <Icon
                    name="check"
                    size={13}
                    className="text-line-strong transition-colors duration-300 group-hover:text-nova-500"
                  />
                </div>
                <h3 className="font-display text-[1rem] font-semibold leading-snug tracking-[-0.01em] text-forest-950 mb-2">
                  {stage.title}
                </h3>
                <p className="text-[0.85rem] leading-[1.65] text-ink-muted">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 lg:mt-20 reveal-up d-7">
          <div className="relative rounded-2xl border border-nova-500/25 bg-gradient-to-br from-white to-forest-50/60 p-7 md:p-8 overflow-hidden">
            <div aria-hidden className="absolute inset-0 tech-grid-bg-fine opacity-40 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl border border-nova-500/35 bg-nova-500/12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-nova-600" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-nova-700 mb-0.5">
                    CONTROL PROTOCOL
                  </div>
                  <div className="font-display text-[1.25rem] font-semibold tracking-[-0.015em] text-forest-950">
                    Stage-Gate Sign-Off
                  </div>
                </div>
              </div>
              <div className="flex-1 md:pl-6 md:border-l md:border-nova-500/20">
                <p className="text-ink-light text-[0.96rem] leading-[1.7]">
                  Each phase boundary requires a formal written sign-off from client, lender engineer and Green Nova project director before the next budget is released.
                  <span className="text-nova-700 font-semibold"> No gate, no spend.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
