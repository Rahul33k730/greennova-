import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import Icon from '@/components/primitives/Icon';
import { VISION_MISSION, LEADERSHIP, WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';

export default function AboutPage() {
  useSeo({
    title: 'About Green Nova — Engineering the Molecules of a Cleaner India',
    description: 'Green Nova Energy & Environment Solutions integrates Renewable Energy, Green Hydrogen, Compressed Biogas (CBG), Waste-to-Energy and Environmental Infrastructure under one accountable team.',
    keywords: ['About Green Nova', 'Engineering molecules cleaner India', 'Renewable engineering company India', 'Decarbonisation roadmap', 'Clean energy infrastructure'],
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'About' }],
  });

  return (
    <SiteShell>
      {/* ========== EXECUTIVE ABOUT HERO ========== */}
      <section className="relative isolate overflow-hidden bg-paper pt-[calc(var(--nav-height)+2rem)] pb-16 lg:pb-24 border-b border-line">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & Narratives */}
            <div className="lg:col-span-6 reveal-up">
              <h1 className="font-display text-[clamp(2.2rem,3.4vw+0.8rem,3.8rem)] font-bold tracking-tight text-forest-950 leading-[1.08] text-balance">
                Engineering the molecules of a cleaner India.
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-nova-500 via-gold-400 to-transparent rounded-full mt-5 mb-6 shadow-xs" />

              <p className="text-[1.18rem] leading-[1.5] font-bold text-forest-950 tracking-tight">
                We engineer the infrastructure behind the clean-energy transition.
              </p>

              <div className="mt-6 space-y-4 text-[1.08rem] leading-[1.78] text-ink-muted">
                <p>
                  <strong className="text-forest-900 font-bold">Green Nova Energy &amp; Environment Solutions</strong> is an Indian clean-energy and environmental infrastructure company delivering engineered solutions for a low-carbon future.
                </p>
                <p>
                  We combine <strong className="text-forest-900 font-bold">engineering, technology integration, project execution, and lifecycle operations</strong> to deliver <strong className="text-forest-900 font-bold">reliable, scalable, high-performance infrastructure</strong> across renewable energy, green hydrogen, CBG, waste-to-energy, and advanced water systems.
                </p>
              </div>
            </div>

            {/* Right: High-Tech Facility & Engineer Photograph */}
            <div className="lg:col-span-6 reveal-up">
              <div className="relative rounded-3xl overflow-hidden border border-line bg-forest-950 shadow-2xl group">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <img
                    src="/images/about-engineering-facility.jpg"
                    alt="Green Nova clean-energy engineering facility"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VISION & MISSION (VISUALLY ELEVATED) ========== */}
      <section id="vision-mission" aria-labelledby="vm-title" className="ds-section bg-paper">
        <div className="ds-container">
          <div className="mb-14 lg:mb-16 text-center reveal-up max-w-3xl mx-auto">
            <h2
              id="vm-title"
              className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-forest-950 text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
            >
              Our Vision &amp; Mission.
            </h2>
            <p className="mt-4 text-[1.05rem] text-ink-muted leading-relaxed">
              Anchored by engineering precision and designed to pass the strictest institutional scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal-up">
            {/* Vision (Dark Forest Executive Pillar) */}
            <div className="group relative lg:col-span-6 rounded-3xl bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 p-8 sm:p-12 text-white shadow-xl overflow-hidden flex flex-col justify-between border border-emerald-500/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_28px_70px_-20px_rgba(9,33,20,0.65)] cursor-default">
              {/* Top ambient glowing accent line */}
              <div aria-hidden className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Ambient corner orb */}
              <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-400/20 transition-colors duration-500" />
              
              {/* Radial spotlight on hover */}
              <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(600px_circle_at_50%_0%,rgba(52,211,153,0.12),transparent_70%)]" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-md transition-all duration-300 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/20">
                  <Icon name="leaf" size={13} className="text-emerald-400 transition-transform duration-300 group-hover:rotate-12" />
                  Our Vision
                </span>
                <h3 className="mt-6 font-display font-semibold leading-[1.15] tracking-tight text-white group-hover:text-emerald-50 transition-colors text-[clamp(1.45rem,1.8vw+0.5rem,2.15rem)]">
                  {VISION_MISSION.vision.title}
                </h3>
                <p className="mt-6 text-[1.02rem] leading-[1.85] text-white/85">
                  {VISION_MISSION.vision.description}
                </p>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-medium">
                <span>Single-Source Engineering</span>
                <span className="font-mono font-semibold text-emerald-300">Bankable Asset Standards</span>
              </div>
            </div>

            {/* Mission (Dark Forest Executive Pillar) */}
            <div className="group relative lg:col-span-6 rounded-3xl bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 p-8 sm:p-12 text-white shadow-xl overflow-hidden flex flex-col justify-between border border-emerald-500/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_28px_70px_-20px_rgba(9,33,20,0.65)] cursor-default">
              {/* Top ambient glowing accent line */}
              <div aria-hidden className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Ambient corner orb */}
              <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-400/20 transition-colors duration-500" />
              
              {/* Radial spotlight on hover */}
              <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(600px_circle_at_50%_0%,rgba(52,211,153,0.12),transparent_70%)]" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-md transition-all duration-300 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/20">
                  <Icon name="award" size={13} className="text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                  Our Mission
                </span>
                <h3 className="mt-6 font-display font-semibold leading-[1.15] tracking-tight text-white group-hover:text-emerald-50 transition-colors text-[clamp(1.45rem,1.8vw+0.5rem,2.15rem)]">
                  {VISION_MISSION.mission.title}
                </h3>
                <ul className="mt-6 space-y-4 text-[0.98rem] leading-[1.7] text-white/85">
                  {VISION_MISSION.mission.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3.5 group/item">
                      <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-emerald-400/30 bg-emerald-500/15 flex items-center justify-center transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-500/25">
                        <Icon name="check" size={12} className="text-emerald-300" />
                      </span>
                      <span className="text-white/85 group-hover/item:text-white transition-colors">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-medium">
                <span>Multi-Vertical Clean-Tech Team</span>
                <span className="font-mono font-semibold text-emerald-300">ISO &amp; CPCB/SPCB Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOUNDER & LEADERSHIP PROFILE ========== */}
      <section id="founder" aria-labelledby="founder-title" className="ds-section">
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow="Founder Leadership"
              title="Meet the Founder Behind Green Nova."
              subtitle="Direct senior leadership, institutional governance and single-point accountability across every client engagement."
            />
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_24px_80px_-40px_rgba(9,33,20,0.28)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 relative min-h-[24rem] lg:min-h-full overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800">
                <img
                  src={LEADERSHIP.owner.photo}
                  alt={LEADERSHIP.owner.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  decoding="async"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    Company Owner
                  </span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {LEADERSHIP.owner.role}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-[1.05rem] leading-[1.8] text-ink-muted">
                    {LEADERSHIP.owner.description}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      'Founder-led strategy',
                      'Direct senior visibility',
                      'Structured governance',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-line bg-paper px-4 py-4 text-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-line bg-paper-warm p-5 sm:p-6">
                    <div>
                      <h4 className="font-display text-[1rem] font-semibold tracking-tight text-ink">
                        Direct involvement at key stages
                      </h4>
                      <p className="mt-1.5 text-[0.92rem] leading-[1.7] text-ink-muted">
                        The founder stays actively involved in scoping, OEM technology evaluation, and stage-gate sign-offs to ensure execution discipline and institutional-grade compliance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">Institutional Clean Energy Governance</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={WHATSAPP_HREF}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-nova-500 px-6 text-xs font-semibold uppercase tracking-wider text-forest-950 transition hover:bg-nova-400"
                    >
                      Contact founder
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-line px-5 text-xs font-semibold uppercase tracking-wider text-ink transition hover:border-nova-400 hover:text-nova-700"
                    >
                      Contact page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

    </SiteShell>
  );
}
