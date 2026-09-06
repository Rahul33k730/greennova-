import Icon from '@/components/primitives/Icon';
import { INDIA_MISSIONS } from '@/data/site';

/**
 * MissionBadgesSection
 * --------------------
 * Premium separator strip placed directly below the hero.
 * Mirrors reference:
 *   - Centered section title: "Aligned With India's Clean Energy Vision"
 *     (India's / Clean / Energy / Vision  — "Clean Energy Vision" is brand-green)
 *   - Horizontal row of 5 mission badges (NGHM, SATAT, Swachh Bharat 2.0,
 *     Net Zero 2070, PAT Scheme) with dividers between.
 */
export default function MissionBadgesSection() {
  return (
    <section
      id="missions"
      aria-labelledby="missions-heading"
      className="relative w-full bg-paper border-b border-line -mb-px"
    >
      {/* Visual "bridge" that softly overlaps hero's dark gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-paper"
      />

      <div className="ds-container py-12 sm:py-14 lg:py-16">
        <div className="max-w-3xl mx-auto text-center reveal-up">
          <h2
            id="missions-heading"
            className="font-display text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink text-balance"
          >
            Aligned With India's{' '}
            <span className="text-nova-600">Clean Energy Vision</span>
          </h2>
        </div>

        <ul
          role="list"
          aria-label="Indian government missions and schemes"
          className="reveal-up mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y divide-line lg:divide-y-0 lg:[&>*]:border-l lg:[&>*:first-child]:border-l-0 lg:[&>*]:border-line"
        >
          {INDIA_MISSIONS.map((m) => (
            <li
              key={m.name}
              className="group flex items-center gap-4 px-4 py-6 sm:px-6 lg:px-7 lg:py-5 hover:bg-forest-50/40 transition-colors duration-300"
            >
              <div
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-50 ring-1 ring-forest-100 text-forest-600 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 transition-all duration-300"
              >
                <Icon name={m.icon} size={24} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold tracking-tight text-ink text-[0.95rem] leading-tight">
                  {m.name}
                </div>
                {m.acronym && (
                  <div className="mt-0.5 text-[0.72rem] uppercase tracking-[0.16em] text-nova-600 font-semibold">
                    {m.acronym}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
