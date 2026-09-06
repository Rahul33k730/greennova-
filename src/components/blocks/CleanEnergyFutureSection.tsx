import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import { INDIA_FUTURE } from '@/data/site';

/**
 * India's Clean Energy Future — national context section
 *
 * IMPORTANT: Presents POLICY and MARKET context only. Does NOT frame
 * national targets as company achievements.
 */
export default function CleanEnergyFutureSection() {
  return (
    <section
      id="india-future"
      className="ds-section bg-forest-950 text-white relative isolate overflow-hidden"
      aria-labelledby="india-future-title"
    >
      {/* Background glow + grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern opacity-[0.06] mask-fade-b pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[52rem] h-[52rem] rounded-full bg-gradient-to-br from-nova-500/20 via-forest-700/30 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="ds-container relative">
        <div className="mb-16 lg:mb-20 max-w-3xl reveal-up">
          <SectionHeader
            eyebrow={INDIA_FUTURE.eyebrow}
            title={INDIA_FUTURE.title}
            subtitle={INDIA_FUTURE.subtitle}
          />
        </div>

        <div className="ds-grid-2 lg:grid-cols-4 reveal-up">
          {INDIA_FUTURE.contextBlocks.map((b, i) => (
            <article
              key={b.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-sm transition-all duration-400 ease-corp hover:bg-white/[0.06] hover:border-nova-400/30 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="ds-badge" style={{ background: 'rgba(74,208,142,0.12)', color: '#83E5B3' }}>
                  {b.tag}
                </span>
                <span
                  className="font-mono text-[0.78rem] text-white/30 font-semibold"
                  aria-hidden
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em] leading-[1.25] text-white mb-4">
                {b.title}
              </h3>
              <p className="text-white/68 leading-[1.75] text-[0.95rem]">
                {b.body}
              </p>
              <div className="mt-auto pt-8 border-t border-white/10 mt-6">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold tracking-wide text-nova-300 hover:text-nova-200 transition-colors"
                >
                  How Green Nova fits
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
