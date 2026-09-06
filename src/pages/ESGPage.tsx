import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import { PageHero, FAQBlock } from '@/components/blocks/PageBuildingBlocks';
import Icon from '@/components/primitives/Icon';
import { INDIA_FUTURE, WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';

const ESG_POSITIONING = [
  {
    tag: '01',
    icon: 'leaf',
    title: 'Engineering-Led ESG',
    body: 'We link ESG outcomes to real assets, operating systems and measurable project decisions.',
  },
  {
    tag: '02',
    icon: 'shield',
    title: 'Disclosure & Governance',
    body: 'We support reporting, governance structures and defensible internal control around ESG data.',
  },
  {
    tag: '03',
    icon: 'energy',
    title: 'Decarbonisation Execution',
    body: 'Roadmaps are grounded in practical engineering, capex logic and implementation reality.',
  },
  {
    tag: '04',
    icon: 'globe',
    title: 'India-Aligned Delivery',
    body: 'Our work aligns with Indian regulation, national missions and sector-specific operating conditions.',
  },
];

const ESG_FRAMEWORKS = [
  'GHG Protocol',
  'BRSR / BRSR Core',
  'Net-Zero Roadmaps',
  'Scope 1 / 2 / 3',
  'ESG Governance',
  'Audit-Ready Documentation',
];

export default function ESGPage() {
  useSeo({
    title: 'ESG — Environment, Social & Governance at Green Nova',
    description: 'For Green Nova, ESG is not disclosure — it is built into every asset delivered. Environmental outcomes, social impact, governance and national alignment engineered from concept to O&M across India.',
    keywords: ['ESG', 'BRSR', 'Net Zero India', 'Sustainability reporting', 'GHG inventory', 'Environmental outcomes', 'Green Hydrogen ESG', 'CBG ESG'],
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'ESG' }],
  });

  return (
    <SiteShell>
      {/* ========== PAGE HERO ========== */}
      <PageHero
        eyebrow="Environmental, Social & Governance"
        eyebrowVariant="gold"
        title="ESG is Engineered Into Every Asset We Deliver."
        subtitle="For Green Nova, ESG is built into how assets are designed, delivered and governed. We connect environmental outcomes, social responsibility and governance discipline to real engineering decisions from concept through long-term operations."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'ESG' },
        ]}
        primaryCta={{ label: 'Sustainability Advisory', to: '/services/sustainability-advisory' }}
        secondaryCta={{ label: 'Contact our ESG team', to: WHATSAPP_HREF }}
      />

      <section className="relative -mt-6 lg:-mt-10 z-10">
        <div className="ds-container">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_80px_-40px_rgba(9,33,20,0.22)]">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div className="p-7 sm:p-8 lg:p-10">
                <span className="ds-eyebrow ds-eyebrow--gold">ESG Positioning</span>
                <h2 className="mt-4 font-display text-[clamp(1.5rem,1.8vw+1rem,2.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance">
                  A More Structured ESG Presentation for Clients, Investors and Institutional Review.
                </h2>
                <p className="mt-5 max-w-2xl text-[1rem] leading-[1.85] text-ink">
                  We position ESG as an operating discipline, not a brochure claim. That means clearer governance, better disclosure readiness and stronger linkage between sustainability strategy and on-ground execution.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {ESG_FRAMEWORKS.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-line bg-paper px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>

              <div className="border-t border-line bg-paper-warm p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 flex flex-col justify-between">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 mb-6">
                  {[
                    'Built for board review',
                    'Aligned with project execution',
                    'Clearer than generic ESG messaging',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 shadow-sm">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-950">
                        <Icon name="check" size={12} className="text-nova-300" />
                      </span>
                      <span className="text-[0.88rem] font-medium text-ink">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl overflow-hidden border border-line shadow-md">
                  <img
                    src="/images/esg-environment.jpg"
                    alt="Ecological conservation and renewable clean energy integration"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-2.5 bg-white text-[0.72rem] text-ink-muted font-mono flex items-center justify-between border-t border-line">
                    <span>Ecosystem Integrity</span>
                    <span>100% Watershed Protection</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px border-t border-line bg-line md:grid-cols-2 xl:grid-cols-4">
              {ESG_POSITIONING.map((item) => (
                <article key={item.tag} className="bg-white p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="ds-icon ds-icon--lg ds-icon--forest">
                      <Icon name={item.icon as any} size={20} />
                    </div>
                    <span className="font-mono text-[0.74rem] font-semibold text-charcoal-400">
                      {item.tag}/04
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.75] text-ink">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOCIAL ========== */}
      <section
        id="social"
        aria-labelledby="social-title"
        className="ds-section bg-paper-warm"
      >
        <div className="ds-container">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Pillar 02 — Social"
              title="People, Communities and Workforce Capability."
              subtitle="Clean-energy and environmental projects affect communities, site teams and long-term plant operators. Our social approach focuses on safe working conditions, practical skill development and responsible stakeholder engagement."
            />
            <div className="mt-8 rounded-3xl overflow-hidden border border-line shadow-lg relative max-h-96">
              <img
                src="/images/esg-social.jpg"
                alt="Green Nova site engineers reviewing solar project execution with safety PPE"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
                <span className="font-semibold uppercase tracking-wider">Zero-Harm Site Safety Protocol &amp; Local Employment</span>
                <span className="hidden sm:inline">Certified Technical Workforce</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                n: 'S.01',
                icon: 'users',
                title: 'Workforce & Site Employment',
                body: 'Our sites prioritise local and regional employment where skills allow, with structured training pathways for semi-skilled and operator roles — so the community around a plant participates in running it, not only in constructing it.',
              },
              {
                n: 'S.02',
                icon: 'shield',
                title: 'HSSEQ & Welfare Standards',
                body: 'Our HSSEQ policy applies across offices, sites, vendors and subcontractors — training, PPE, welfare, emergency response and incident management systems are audited both internally and independently.',
              },
              {
                n: 'S.03',
                icon: 'factory',
                title: 'Operator Competence Transfer',
                body: 'An asset is only as good as its operator. Our projects deliver structured training, SOPs, manuals, competence assessment and refresher programmes so the operations team is set up for success from day one.',
              },
              {
                n: 'S.04',
                icon: 'globe',
                title: 'Community & Stakeholder Engagement',
                body: 'From public hearing support (EIA) through to surrounding-village liaison, CSR-linked initiatives and grievance redressal, our projects engage local stakeholders as part of governance, not as paperwork.',
              },
              {
                n: 'S.05',
                icon: 'award',
                title: 'Skill Development & Apprenticeship',
                body: 'For suitably scoped engagements, we work with clients and agencies to build apprenticeship, on-the-job training and structured skill programmes aligned with RE, CBG, WtE and environmental sectors.',
              },
              {
                n: 'S.06',
                icon: 'building',
                title: 'Diversity, Inclusion & Safety',
                body: 'Our recruitment, workplace and site practices uphold non-discrimination, gender diversity, inclusion for persons with disabilities and a zero-tolerance stance on harassment and unsafe behaviour.',
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-400 ease-corp hover:-translate-y-0.5 hover:shadow-lg hover:border-nova-400/30"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="ds-icon ds-icon--xl ds-icon--gold">
                    <Icon name={s.icon as any} size={24} />
                  </div>
                  <span className="font-mono text-[0.75rem] font-semibold text-charcoal-400">
                    {s.n}/06
                  </span>
                </div>
                <h3 className="font-display text-[1.1rem] font-semibold tracking-tight leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.75] text-ink">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GOVERNANCE ========== */}
      <section
        id="governance"
        aria-labelledby="gov-title"
        className="ds-section"
      >
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-5">
                {[
                  { t: 'G.01 — Code of Conduct & Ethics', d: 'A formal code of conduct covers bribery, anti-corruption, gifts & hospitality, conflicts of interest, whistle-blower channels and fair competition. Applies across directors, employees and contractual staff.' },
                  { t: 'G.02 — Corporate Governance', d: 'Board governance, committee charters, delegated authorities, financial reporting, internal audit, statutory audit and review cadence are structured as the company scales.' },
                  { t: 'G.03 — Quality & Compliance Systems', d: 'Engineering quality, procurement quality, HSSEQ, project systems, document control and record management are governed through cross-functional systems, not individual habits.' },
                  { t: 'G.04 — Risk & Contracts', d: 'Formal risk registers per project, contract reviews, insurance, subcontractor governance, warranty tracking and dispute-resolution frameworks are part of the standard project system.' },
                ].map((g) => (
                  <div
                    key={g.t}
                    className="relative rounded-2xl border border-line bg-white p-6 transition-all duration-400 ease-corp hover:border-nova-400/40 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="ds-icon ds-icon--sm ds-icon--forest flex-shrink-0 mt-1">
                        <Icon name="shield" size={16} />
                      </div>
                      <div>
                        <h4 className="font-display text-[1rem] font-semibold tracking-tight leading-snug mb-1.5">
                          {g.t}
                        </h4>
                        <p className="text-[0.86rem] leading-[1.7] text-ink">{g.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-50 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-700"
              >
                <Icon name="shield" size={12} />
                Pillar 03 — Governance
              </span>
              <h2
                id="gov-title"
                className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance text-[clamp(1.8rem,2.3vw+0.5rem,2.75rem)]"
              >
                Governance Quality Matters as Much as Engineering Quality.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.9] text-ink-muted">
                Lenders, investors, PSUs and large corporate clients do not review engineering capability alone. They also assess governance quality, systems discipline and the likelihood of predictable delivery. Our governance approach is built to stand up to that level of scrutiny.
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden border border-line shadow-lg">
                <img
                  src="/images/esg-governance.jpg"
                  alt="Green Nova executive board and audit committee reviewing ESG governance frameworks"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-paper-warm border-t border-line text-xs text-ink-muted font-mono flex items-center justify-between">
                  <span>BRSR Core &amp; Statutory Audit Readiness</span>
                  <span>Board Oversight Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NATIONAL ALIGNMENT (DARK SECTION) ========== */}
      <section
        id="national"
        aria-labelledby="nat-title"
        className="relative isolate overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950" />
        <div aria-hidden className="absolute inset-0 bg-grid-pattern opacity-[0.06] mask-fade-b pointer-events-none" />
        <div aria-hidden className="absolute -top-32 -right-20 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-nova-500/20 via-nova-400/5 to-transparent blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-40 -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-gold-400/15 to-transparent blur-3xl pointer-events-none" />

        <div className="ds-container relative py-section-lg">
          <div className="mb-14 lg:mb-16 text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-nova-400/30 bg-nova-500/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-nova-200"
            >
              <Icon name="globe" size={12} />
              Pillar 04 — National Alignment
            </span>
            <h2
              id="nat-title"
              className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-white text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
            >
              Our ESG Work Aligns with India\'s National Priorities.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8] text-white/85">
              The infrastructure we support is tied to national missions, sector policies and regulatory frameworks shaping India\'s next decade of energy and environmental investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {INDIA_FUTURE.contextBlocks.map((c, i) => (
              <div
                key={c.title}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 overflow-hidden transition-all duration-400 ease-corp hover:-translate-y-0.5 hover:border-nova-400/30"
              >
                <div aria-hidden className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-nova-400/30 to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                      <Icon name="globe" size={11} />
                      {c.tag}
                    </span>
                    <span className="font-mono text-[0.72rem] font-semibold text-white/40">
                      0{i + 1}/04
                    </span>
                  </div>
                  <h3 className="font-display text-[1.25rem] md:text-[1.4rem] font-semibold leading-[1.18] tracking-tight text-white mb-4">
                    {c.title}
                  </h3>
                  <p className="text-[0.96rem] leading-[1.8] text-white/85">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* National policy chips (reference only — no invented participation) */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {[
              'Panchamrit Commitments',
              'Net-Zero 2070',
              'National Green Hydrogen Mission',
              'SATAT (CBG)',
              'SWM & MSW Rules',
              'EIA Notification',
              'SEBI BRSR / BRSR Core',
              'RE Capacity Trajectory',
              'Solar & Wind Auctions',
              'AMRUT & SBM Missions',
              'PAT (Perform, Achieve & Trade)',
              'GC / I-REC Markets',
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[0.72rem] font-medium tracking-wide text-white/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-nova-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SUSTAINABILITY & ESG FAQ ========== */}
      <section
        id="sustainability"
        aria-labelledby="sust-title"
        className="ds-section bg-paper-warm"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="ds-eyebrow ds-eyebrow--gold justify-center">Pillar 05 — Sustainability</span>
            <h2
              id="sust-title"
              className="mt-4 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
            >
              Sustainability as an Operating Practice.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-muted">
              Through our Sustainability Advisory practice, we help corporates, listed entities, PSUs and multinational subsidiaries convert ESG commitments into measurable, engineering-backed programmes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQBlock
              items={[
                {
                  q: 'Does Green Nova publish its own ESG or sustainability report?',
                  a: 'Green Nova is building its internal ESG measurement, data capture and governance systems as the company scales. Structured disclosures, including appropriate ESG reporting, are planned as engagement scales and reporting requirements mature — alongside internal targets and KPIs where the data is defensible and complete.',
                },
                {
                  q: 'Do you help clients with their own ESG / BRSR reporting?',
                  a: 'Yes — through our Sustainability Advisory practice. We support SEBI BRSR and BRSR Core disclosures, GHG inventories (Scope 1/2/3), decarbonisation and net-zero roadmaps, ESG-linked finance KPIs and other ESG deliverables. See our Sustainability Advisory service page for full details.',
                },
                {
                  q: 'How do you measure avoided emissions and impact from the projects you build?',
                  a: 'For suitably scoped engagements we support clients with project-specific GHG / avoided-emissions calculations using recognised standards (GHG Protocol, relevant IFC/AC guidance) — including the appropriate treatment of grid emission factors, baselines, leakage and attribution — alongside lifecycle considerations where required.',
                },
                {
                  q: 'Do you work with ESG auditors or assurance providers?',
                  a: 'Yes. We prepare our advisory work products for third-party assurance readiness where clients require it, and work alongside the client\'s chosen assurance or audit providers during their review cycles.',
                },
                {
                  q: 'Can ESG support be combined with an EPC or engineering engagement?',
                  a: 'Absolutely. Many clients combine an engineering or EPC engagement (RE, H₂, CBG, WtE, Environmental) with ESG / net-zero advisory support — so the same implementation team delivers both the asset and the internal ESG programme that measures and reports it.',
                },
              ]}
            />
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
