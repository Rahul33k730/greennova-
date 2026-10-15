import { SectionHeader } from '@/components/section/Section';
import { INDUSTRIES } from '@/data/site';

/**
 * Industries We Serve — photo-rich corporate sector cards
 * Featuring authentic industrial photography, category tags and subtle micro-zoom.
 */
export default function IndustriesSection() {
  return (
    <section id="industries" className="ds-section" aria-labelledby="industries-title">
      <div className="ds-container">
        <div className="mx-auto max-w-3xl mb-16 text-center reveal-up">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Engineering Solutions Built for Every Corner of the Economy."
            subtitle="We work with sponsors, operators and corporates across core heavy industries that power India's energy transition. Our teams understand each sector's technical, commercial and regulatory demands."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up">
          {INDUSTRIES.map((ind) => (
            <article
              key={ind.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm hover:shadow-xl hover:border-nova-400/50 transition-all duration-400 ease-corp hover:-translate-y-1"
            >
              {/* Photo header with overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-semibold tracking-tight text-[1.08rem] leading-snug text-ink transition-colors duration-200 group-hover:text-forest-800">
                    {ind.name}
                  </h3>
                  {ind.detail && (
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-muted font-medium">
                      {ind.detail}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-[0.75rem] font-semibold uppercase tracking-wider text-forest-700">
                  <span>Capability Focus</span>
                  <span className="text-nova-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
