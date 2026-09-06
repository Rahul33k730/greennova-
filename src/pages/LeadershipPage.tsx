import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import Icon from '@/components/primitives/Icon';
import { LEADERSHIP, WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';


const FOUNDER_ENGAGEMENT = [
  {
    step: '01',
    title: 'Early Scoping',
    body: 'At the start of an engagement, the founder helps define the project scope, priorities and delivery path.',
  },
  {
    step: '02',
    title: 'Structured Review',
    body: 'Important decisions are reviewed against technical soundness, execution practicality and client expectations.',
  },
  {
    step: '03',
    title: 'Delivery Oversight',
    body: 'The founder stays involved at major milestones to support coordination, decisions and delivery quality.',
  },
];

export default function LeadershipPage() {
  useSeo({
    title: 'Founder Leadership — Green Nova Energy',
    description: 'Meet the founder leading Green Nova Energy & Environment Solutions across strategy, client engagement and project governance.',
    keywords: ['Green Nova founder', 'Founder leadership', 'Clean energy leadership India', 'Project governance'],
    type: 'profile',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'Leadership' }],
  });

  return (
    <SiteShell>
      {/* ========== FOUNDER PROFILE ========== */}
      <section
        id="leadership-team"
        aria-labelledby="leadership-title"
        className="ds-section"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow="Founder"
              title="Founder Profile."
              subtitle="A clear view of the founder's role, responsibilities and leadership involvement."
            />
          </div>

          <article className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_80px_-40px_rgba(9,33,20,0.32)]">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="relative min-h-[26rem] overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800">
                <img
                  src={LEADERSHIP.owner.photo}
                  alt={LEADERSHIP.owner.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  decoding="async"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/88 via-forest-950/20 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-sm">
                  <Icon name="award" size={10} />
                  Founder
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                    Company Owner
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {LEADERSHIP.owner.role}
                  </h2>
                </div>
              </div>

              <div className="relative p-7 sm:p-10 lg:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,125,87,0.08),transparent_34%)]"
                />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest-800">
                    <Icon name="shield" size={12} />
                    Founder Office
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-nova-700">
                    {LEADERSHIP.owner.function}
                  </p>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink-muted">
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
                        className="rounded-2xl border border-line bg-paper px-4 py-4 text-center text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-line bg-paper-warm p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="ds-icon ds-icon--forest ds-icon--sm shrink-0">
                        <Icon name="clock" size={16} />
                      </div>
                      <div>
                        <h3 className="font-display text-[1rem] font-semibold tracking-tight text-ink">
                          Direct involvement at key stages
                        </h3>
                        <p className="mt-2 text-[0.92rem] leading-[1.75] text-ink-muted">
                          The founder stays involved in project framing, client discussions and major review points to keep leadership visible throughout the engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={WHATSAPP_HREF}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-nova-500 px-6 text-sm font-semibold text-forest-950 transition hover:bg-nova-400"
                    >
                      Contact founder
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition hover:border-nova-400 hover:text-nova-700"
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


      {/* ========== ENGAGEMENT MODEL ========== */}
      <section id="founder-engagement" aria-labelledby="engagement-title" className="ds-section">
        <div className="ds-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <span className="ds-eyebrow ds-eyebrow--gold mb-4">How Leadership Works</span>
              <h2
                id="engagement-title"
                className="font-display text-[clamp(1.9rem,2vw+1rem,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance"
              >
                How the Founder Supports Each Engagement.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-[1.85] text-ink-muted">
                This section explains how founder involvement supports project setup, decision-making and delivery continuity.
              </p>
            </div>

            <div className="space-y-5">
              {FOUNDER_ENGAGEMENT.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-line bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-nova-500 to-forest-600 font-display text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.08rem] font-semibold tracking-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[0.92rem] leading-[1.75] text-ink-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[1.5rem] bg-forest-950 px-6 py-6 text-white sm:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                'Founder visibility at key project stages',
                'A clear single leadership contact',
                'Stronger and more professional presentation',
                'A clearer alternative to placeholder role cards',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/78">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6">
                    <Icon name="check" size={14} className="text-nova-300" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
