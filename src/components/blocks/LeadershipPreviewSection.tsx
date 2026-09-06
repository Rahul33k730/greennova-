import Button from '@/components/primitives/Button';
import { SectionHeader } from '@/components/section/Section';
import { LEADERSHIP } from '@/data/site';

/**
 * Founder Profile — a focused owner page with no team previews.
 */
export default function LeadershipPreviewSection() {
  return (
    <section id="founder" className="ds-section" aria-labelledby="founder-title">
      <div className="ds-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20 reveal-up">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Founder Profile"
              title="Meet the founder behind Green Nova"
              subtitle="A focused leadership profile for the company founder and principal delivery lead."
            />
          </div>
          <div className="flex-shrink-0">
            <Button as="a" href="#contact" variant="outline" size="md" iconRight="arrow-right">
              Contact the founder
            </Button>
          </div>
        </div>

        <div className="reveal-up">
          <article className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-white shadow-xl hover:shadow-2xl transition-all duration-400">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-5 relative min-h-[22rem] md:min-h-full overflow-hidden bg-forest-950">
                <img
                  src={LEADERSHIP.owner.photo}
                  alt={LEADERSHIP.owner.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  decoding="async"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-nova-300 backdrop-blur-md">
                    Founder &amp; Principal
                  </div>
                  <div className="mt-2 font-display text-xl font-bold text-white tracking-tight">
                    {LEADERSHIP.owner.role}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wider uppercase border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {LEADERSHIP.owner.function}
                  </div>
                  <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-light">
                    {LEADERSHIP.owner.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">Institutional Clean Energy Governance</p>
                    <p className="text-xs text-ink-muted">Turnkey project framing &amp; high-stakes advisory across India.</p>
                  </div>
                  <Button as="a" href="/leadership" variant="ghost" size="sm" iconRight="arrow-right">
                    View profile
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
