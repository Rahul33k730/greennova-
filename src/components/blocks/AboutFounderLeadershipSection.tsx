import Button from '@/components/primitives/Button';
import Icon from '@/components/primitives/Icon';
import useReveal from '@/hooks/useReveal';
import { LEADERSHIP, WHATSAPP_HREF } from '@/data/site';

export default function AboutFounderLeadershipSection() {
  const ref = useReveal<HTMLElement>({
    selector: '.reveal-up',
    staggerMs: 60,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="founder-leadership"
      className="ds-section"
      aria-labelledby="founder-leadership-title"
    >
      <div className="ds-container">
        <div className="mb-14 lg:mb-16 reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-nova-600">
              11 / FOUNDER &amp; LEADERSHIP
            </span>
            <span aria-hidden className="flex-1 h-px bg-line-strong max-w-[12rem]" />
          </div>
          <h2
            id="founder-leadership-title"
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-[clamp(1.8rem,2.8vw+1rem,3.25rem)]"
          >
            MEET THE FOUNDER BEHIND GREEN NOVA
          </h2>
          <p className="mt-5 text-[1.125rem] leading-[1.7] text-ink-muted max-w-3xl">
            Green Nova is built around direct leadership, engineering accountability and disciplined project execution.
          </p>
        </div>

        <div className="reveal-up">
          <article className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-5 relative min-h-[28rem] md:min-h-full overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800">
                <div aria-hidden className="absolute inset-0 tech-grid-bg-dark opacity-40 pointer-events-none" />

                <img
                  src={LEADERSHIP.owner.photo}
                  alt={LEADERSHIP.owner.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  decoding="async"
                />

                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-transparent"
                />

                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 reveal-up">
                  <span className="inline-flex items-center rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 backdrop-blur-md">
                    <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      FOUNDER / 01
                    </span>
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10">
                  <div className="reveal-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1.5 backdrop-blur-md">
                      <Icon name="award" size={14} className="text-gold-300" strokeWidth={2} />
                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-200">
                        Founder &amp; Principal
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 reveal-up">
                    <h3 className="font-display text-2xl sm:text-[1.75rem] font-bold tracking-tight text-white leading-tight">
                      {LEADERSHIP.owner.role}
                    </h3>
                  </div>

                  <div aria-hidden className="my-5 h-px w-24 line-draw reveal-up bg-gradient-to-r from-gold-400/80 to-transparent" />

                  <div className="reveal-up">
                    <p className="font-display text-[1rem] sm:text-[1.05rem] font-medium leading-[1.4] tracking-tight text-white/85 italic">
                      &ldquo;Founder-led. Engineering-driven. Accountable by design.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div className="space-y-7">
                  <div className="reveal-up">
                    <div className="inline-flex items-center gap-2.5 mb-3">
                      <span className="telemetry-dot telemetry-dot--sm telemetry-dot--gold" />
                      <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest-800">
                        STRATEGY · GOVERNANCE · EXECUTION
                      </span>
                    </div>

                    <div className="inline-flex items-center rounded-full border border-forest-900/10 bg-forest-950/5 px-3.5 py-1.5">
                      <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-forest-900/80">
                        {LEADERSHIP.owner.function}
                      </span>
                    </div>
                  </div>

                  <p className="text-[1.05rem] leading-[1.75] text-ink-light reveal-up">
                    {LEADERSHIP.owner.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 reveal-up">
                    {[
                      'Founder-led strategy',
                      'Direct senior visibility',
                      'Structured governance',
                    ].map((label) => (
                      <div
                        key={label}
                        className="rounded-xl border border-line bg-paper py-4 px-3 text-center"
                      >
                        <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-line bg-paper-warm flex items-start gap-4 p-5 sm:p-6 reveal-up">
                    <div className="ds-icon ds-icon--forest flex-shrink-0">
                      <Icon name="shield" size={20} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-[1.05rem] font-semibold tracking-tight text-forest-950 mb-1.5">
                        Direct involvement at key stages
                      </h4>
                      <p className="text-sm leading-[1.65] text-ink-muted">
                        The founder stays actively involved in scoping, OEM technology evaluation,
                        and stage-gate sign-offs to ensure execution discipline and institutional-grade compliance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4 reveal-up">
                  <div>
                    <p className="text-sm font-semibold text-ink">Institutional Clean Energy Governance</p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Turnkey project framing &amp; high-stakes advisory across India.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      as="a"
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      iconRight="arrow-right"
                    >
                      Contact Founder
                    </Button>
                    <Button
                      as="a"
                      href="/contact"
                      variant="ghost"
                      size="md"
                      iconRight="arrow-right"
                    >
                      Contact Page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
