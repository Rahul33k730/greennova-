import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import { ROADMAP } from '@/data/site';

/**
 * Roadmap — Professional horizontal timeline
 * 6 stages: Discovery → Feasibility → Engineering → Procurement → Execution → Handover
 * Horizontal on lg+, collapses to vertical timeline on mobile/tablet
 */
export default function RoadmapSection() {
  const total = ROADMAP.items.length;

  return (
    <section
      id="roadmap"
      className="ds-section bg-paper-warm"
      aria-labelledby="roadmap-title"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="ds-container relative">
        <div className="mb-16 lg:mb-20 max-w-3xl reveal-up">
          <SectionHeader
            eyebrow={ROADMAP.eyebrow}
            title={ROADMAP.title}
            subtitle="A disciplined, stage-gated process — so every project is predictable, documentable, and audit-ready from concept through to long-term operations."
          />
        </div>

        {/* Timeline wrapper */}
        <div className="relative reveal-up">
          {/* ============ DESKTOP HORIZONTAL TIMELINE ============ */}
          <div className="hidden lg:block">
            {/* Track line */}
            <div
              aria-hidden
              className="absolute top-14 left-0 right-0 h-[2px] bg-line-strong"
            />
            {/* Progress fill (visual only) */}
            <div
              aria-hidden
              className="absolute top-14 left-0 w-full h-[2px] bg-gradient-to-r from-nova-500 via-forest-600 to-nova-500 opacity-20"
            />

            <ol className="relative grid grid-cols-6 gap-x-3">
              {ROADMAP.items.map((item, i) => (
                <li key={item.stage} className="relative list-none">
                  {/* Node */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 flex items-center justify-center w-28 h-28 mb-4">
                      {/* Node circle */}
                      <div
                        className="absolute inset-0 rounded-full bg-white border-2 border-forest-800/15 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-[1.04] hover:border-nova-500 hover:shadow-glow"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-display text-[1.6rem] font-semibold text-forest-900 leading-none">
                            {item.stage}
                          </span>
                          <span className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-600">
                            Stage
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-center font-display text-[1.1rem] font-semibold tracking-tight leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-center text-[0.85rem] leading-[1.7] text-ink-muted px-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Connector arrow between nodes */}
                  {i < total - 1 && (
                    <div
                      aria-hidden
                      className="absolute top-14 -right-[10px] z-20 text-nova-500"
                    >
                      <Icon name="arrow-right" size={16} />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* ============ MOBILE / TABLET VERTICAL TIMELINE ============ */}
          <ol className="lg:hidden relative list-none space-y-8 pl-10 md:pl-14 before:absolute before:left-[1.2rem] md:before:left-[1.7rem] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-nova-500 before:via-forest-500 before:to-nova-500 before:opacity-60">
            {ROADMAP.items.map((item) => (
              <li key={item.stage} className="relative">
                <div
                  aria-hidden
                  className="absolute -left-10 md:-left-14 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-nova-500 shadow-md flex items-center justify-center"
                >
                  <span className="font-display font-semibold text-forest-800">
                    {item.stage}
                  </span>
                </div>
                <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
                  <h3 className="font-display text-[1.15rem] font-semibold tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.7] text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
