import Icon from '@/components/primitives/Icon';
import { VISION_MISSION } from '@/data/site';

/**
 * Vision & Mission — Beautiful split layout
 * Left: Vision (premium dark/forest card)
 * Right: Mission (paper card with bulleted list + check marks)
 */
export default function VisionMissionSection() {
  const { vision, mission } = VISION_MISSION;

  return (
    <section id="vision-mission" className="ds-section" aria-labelledby="vision-title">
      <div className="ds-container">
        <div className="ds-grid-12 gap-y-12">
          {/* Vision panel — dark forest premium */}
          <div className="md:col-span-12 lg:col-span-6">
            <div className="relative h-full overflow-hidden rounded-2xl bg-forest-900 p-10 lg:p-14 text-white">
              {/* Decorative accents */}
              <div aria-hidden className="absolute -right-24 -top-24 w-[22rem] h-[22rem] rounded-full bg-gradient-to-br from-nova-500/25 to-transparent blur-3xl" />
              <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative reveal-up">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-nova-400/25 bg-nova-500/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-nova-200">
                  <Icon name="award" size={12} />
                  {vision.eyebrow}
                </div>
                <h2
                  id="vision-title"
                  className="mt-7 font-display font-semibold leading-[1.12] tracking-[-0.03em] text-white text-balance text-[clamp(1.75rem,2.2vw+1rem,2.75rem)]"
                >
                  {vision.title}
                </h2>
                <p className="mt-7 text-[1.05rem] leading-[1.8] text-white/75 max-w-xl">
                  {vision.description}
                </p>

                <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
                  <div className="ds-stat">
                    <div className="ds-stat__value" style={{ color: 'white' }}>10+</div>
                    <div className="ds-stat__label" style={{ color: 'rgba(255,255,255,0.55)' }}>Years Horizon</div>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div className="ds-stat">
                    <div className="ds-stat__value ds-stat__value--accent">6</div>
                    <div className="ds-stat__label" style={{ color: 'rgba(255,255,255,0.55)' }}>Core Verticals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission panel — light paper */}
          <div className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-2xl border border-line bg-white p-10 lg:p-14 reveal-up">
              <span className="ds-eyebrow ds-eyebrow--gold">{mission.eyebrow}</span>
              <h2 className="mt-5 font-display font-semibold leading-[1.15] tracking-[-0.025em] text-balance text-[clamp(1.75rem,2.2vw+1rem,2.75rem)]">
                {mission.title}
              </h2>

              {mission.description && (
                <p className="mt-7 text-[1.05rem] leading-[1.8] text-ink-muted max-w-xl">
                  {mission.description}
                </p>
              )}

              <ul className="mt-8 space-y-5">
                {mission.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="ds-icon ds-icon--forest mt-0.5" style={{ width: '2rem', height: '2rem', flexShrink: 0 }}>
                      <Icon name="check" size={16} />
                    </span>
                    <p className="text-ink-light leading-[1.75] pt-0.5">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
