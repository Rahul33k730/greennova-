import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import { TECHNOLOGY } from '@/data/site';
import type { IconName } from '@/types/design-system';

const ICON_BY_PHASE: Record<string, IconName> = {
  'Phase 01': 'globe',
  'Phase 02': 'factory',
  'Phase 03': 'shield',
  'Phase 04': 'building',
  'Phase 05': 'clock',
};

/**
 * Technology & Engineering — 5-phase engineering lifecycle
 * Icon-based layouts + elegant numbered card sequence
 */
export default function TechnologyEngineeringSection() {
  return (
    <section id="technology" className="ds-section" aria-labelledby="technology-title">
      <div className="ds-container">
        <div className="mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow={TECHNOLOGY.eyebrow}
              title={TECHNOLOGY.title}
              subtitle={TECHNOLOGY.subtitle}
            />
          </div>
          <div className="hidden md:block max-w-xs text-right">
            <p className="text-ink-muted leading-relaxed text-sm">
              Every engagement follows a structured, auditable sequence of engineering phases —
              from feasibility to O&M.
            </p>
          </div>
        </div>

        <ol className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[3.75rem] left-10 right-10 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
            style={{ ['--tw-gradient-from' as any]: 'transparent', ['--tw-gradient-to' as any]: 'transparent' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 reveal-up">
            {TECHNOLOGY.stages.map((stage, i) => (
              <li
                key={stage.phase}
                className="group relative list-none rounded-2xl border border-line bg-white p-7 transition-all duration-400 ease-corp hover:border-nova-400/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Top pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="ds-badge ds-badge--nova">{stage.phase}</span>
                  <span
                    aria-hidden
                    className="font-mono text-[0.72rem] font-semibold text-charcoal-400"
                  >
                    0{i + 1}/0{TECHNOLOGY.stages.length}
                  </span>
                </div>

                {/* Icon + connecting node */}
                <div className="flex items-center mb-5">
                  <div
                    className="relative ds-icon ds-icon--xl ds-icon--forest transition-all duration-300 group-hover:ds-icon--nova"
                    style={{ background: '#E0EFE7' }}
                  >
                    <Icon name={ICON_BY_PHASE[stage.phase] ?? 'award'} size={26} className="text-forest-800" />
                    <span
                      aria-hidden
                      className="hidden lg:block absolute -top-1 -right-1 h-3 w-3 rounded-full bg-nova-500 ring-4 ring-paper"
                    />
                  </div>
                </div>

                <h3 className="font-display text-[1.25rem] font-semibold tracking-tight leading-snug mb-4">
                  {stage.title}
                </h3>

                <ul className="space-y-2.5 text-[0.88rem] leading-[1.65] text-ink-muted">
                  {stage.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Icon
                        name="check"
                        size={14}
                        className="mt-1 flex-shrink-0 text-nova-600"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
