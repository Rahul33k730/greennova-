import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import useReveal from '@/hooks/useReveal';
import { VISION_MISSION } from '@/data/site';

export default function AboutVisionMissionSection() {
  const rootRef = useReveal<HTMLElement>({
    staggerMs: 100,
    threshold: 0.1,
  });

  const { vision, mission } = VISION_MISSION;

  return (
    <section
      ref={rootRef}
      id="vision-mission-premium"
      className="ds-section"
      aria-labelledby="vm-premium-title"
    >
      <div className="ds-container">
        <div className="mb-14 lg:mb-16 max-w-4xl reveal-up">
          <SectionHeader
            eyebrow="08 / VISION &amp; MISSION"
            title="TWO FOUNDATIONAL COMMITMENTS"
            subtitle="Anchored in engineering. Auditable in execution."
          />
        </div>

        <div className="ds-grid-2 items-stretch">
          {/* =============== LEFT COLUMN: VISION — DARK CINEMATIC =============== */}
          <div className="reveal-up d-1">
            <article
              className="group relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-forest-950 via-forest-900 to-charcoal-950 p-10 lg:p-14 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-32px_rgba(10,30,21,0.7)]"
              aria-labelledby="vision-premium-title"
            >
              {/* Subtle engineering-grid background */}
              <div
                aria-hidden
                className="absolute inset-0 tech-grid-bg-dark opacity-[0.45] pointer-events-none"
              />

              {/* Ambient nova-glow accent: -right-10 -top-10 w-56 h-56 bg-nova-500/10 blur-3xl */}
              <div
                aria-hidden
                className="absolute -right-10 -top-10 w-56 h-56 bg-nova-500/10 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(600px circle at 0% 0%, rgba(34,184,113,0.12), transparent 60%)',
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Eyebrow badge — "OUR VISION" nova-300 */}
                <div className="inline-flex items-center gap-2 rounded-full border border-nova-400/20 bg-nova-500/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-nova-300">
                  OUR VISION
                </div>

                {/* Large font-display bold title */}
                <h2
                  id="vision-premium-title"
                  className="mt-7 font-display font-bold leading-[1.1] tracking-[-0.03em] text-white text-balance text-[clamp(1.85rem,2.4vw+1rem,3rem)]"
                >
                  {vision.title}
                </h2>

                {/* Description */}
                <p className="mt-7 text-[1.02rem] leading-[1.85] text-white/72 max-w-xl">
                  {vision.description}
                </p>

                {/* Vision bullet points with nova checkmark badges */}
                {vision.bullets && vision.bullets.length > 0 && (
                  <ul className="mt-8 space-y-5">
                    {vision.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span
                          className="flex items-center justify-center w-8 h-8 rounded-lg bg-nova-500/15 border border-nova-400/25 mt-0.5"
                          style={{ flexShrink: 0 }}
                          aria-hidden
                        >
                          <Icon name="check" size={16} className="text-nova-300" />
                        </span>
                        <p className="text-white/80 leading-[1.78] pt-0.5">
                          {b}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom 2-column metrics strip with thin border-t */}
                <div className="mt-auto pt-10">
                  <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-7">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10"
                        aria-hidden
                      >
                        <Icon name="check" size={16} className="text-nova-300" />
                      </span>
                      <span className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white/85">
                        QUALITY FIRST
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10"
                        aria-hidden
                      >
                        <Icon name="shield" size={16} className="text-gold-300" />
                      </span>
                      <span className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white/85">
                        INSTITUTIONAL GRADE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* =============== RIGHT COLUMN: MISSION — WHITE ARCHITECTURAL =============== */}
          <div className="reveal-up d-2">
            <article
              className="group relative h-full overflow-hidden rounded-[28px] border border-line bg-white p-10 lg:p-14 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-nova-400/60 hover:shadow-[0_32px_80px_-40px_rgba(10,30,21,0.25)]"
              aria-labelledby="mission-premium-title"
            >
              {/* Subtle fine engineering-grid background */}
              <div
                aria-hidden
                className="absolute inset-0 tech-grid-bg-fine opacity-[0.55] pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(600px circle at 100% 0%, rgba(34,184,113,0.08), transparent 60%)',
                }}
              />
              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-line overflow-hidden pointer-events-none"
              >
                <div className="w-full h-full bg-nova-500 origin-left scale-x-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Gold eyebrow badge */}
                <span className="ds-badge ds-badge--gold self-start">
                  OUR MISSION
                </span>

                {/* Large font-display bold title */}
                <h2
                  id="mission-premium-title"
                  className="mt-5 font-display font-bold leading-[1.12] tracking-[-0.025em] text-forest-950 text-balance text-[clamp(1.85rem,2.4vw+1rem,3rem)]"
                >
                  {mission.title}
                </h2>

                {/* Mission description */}
                {mission.description && (
                  <p className="mt-7 text-[1.02rem] leading-[1.85] text-ink-muted max-w-xl">
                    {mission.description}
                  </p>
                )}

                {/* 4 bullet points with forest-green checkmark badges */}
                <ul className="mt-8 space-y-5">
                  {mission.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="ds-icon ds-icon--forest mt-0.5"
                        style={{ width: '2rem', height: '2rem', flexShrink: 0 }}
                        aria-hidden
                      >
                        <Icon name="check" size={16} />
                      </span>
                      <p className="text-ink-light leading-[1.78] pt-0.5">
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Bottom strip — flex justify-between */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center justify-between border-t border-line pt-6">
                    <span className="text-[0.8rem] font-semibold tracking-[0.02em] text-ink-muted">
                      Multi-Vertical Clean-Tech Team
                    </span>
                    <span className="font-mono text-[0.72rem] font-bold tracking-[0.18em] text-forest-800 uppercase">
                      ISO &amp; CPCB/SPCB READY
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
