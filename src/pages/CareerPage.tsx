import { useState } from 'react';
import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import { PageHero, FAQBlock, BenefitGrid } from '@/components/blocks/PageBuildingBlocks';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';
import { COMPANY, WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';
import type { IconName } from '@/types/design-system';

/* ===========================================================
   DATA — Career Page Content
   =========================================================== */

const CAREER_CULTURE = [
  {
    icon: 'energy' as IconName,
    iconVariant: 'nova' as const,
    eyebrow: 'Purpose-Driven',
    title: 'Work That Matters',
    description:
      'Every project you touch contributes to India\'s clean-energy transition — from green hydrogen plants and solar parks to waste-to-energy facilities and environmental infrastructure.',
  },
  {
    icon: 'users' as IconName,
    iconVariant: 'forest' as const,
    eyebrow: 'Collaborative',
    title: 'One Team, Many Verticals',
    description:
      'Work alongside engineers, project managers and domain experts across six verticals. Collaboration here means real cross-functional exposure, not siloed departments.',
  },
  {
    icon: 'award' as IconName,
    iconVariant: 'gold' as const,
    eyebrow: 'Growth-Oriented',
    title: 'Build Your Engineering Career',
    description:
      'Structured mentorship, on-site exposure, technology training and a clear career trajectory. We invest in people who want to grow with the clean-energy sector.',
  },
  {
    icon: 'globe' as IconName,
    iconVariant: 'outline' as const,
    eyebrow: 'PAN India',
    title: 'Opportunities Across India',
    description:
      'From our Pune headquarters to project sites across industrial corridors, coastal regions and emerging clean-energy hubs — your work takes you where it matters.',
  },
];

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'sr-process-engineer',
    title: 'Sr. Process Engineer — Green Hydrogen',
    department: 'Green Hydrogen',
    location: 'Pune / Project Site',
    type: 'Full-Time',
    experience: '5–10 years',
    description:
      'Lead process design for alkaline and PEM electrolyser systems, hydrogen compression, storage and dispensing infrastructure. Work directly with OEMs and site teams.',
    responsibilities: [
      'Develop P&IDs, heat & mass balances and process simulations for H₂ plants',
      'Lead HAZOP, safety studies and design reviews',
      'Coordinate with procurement for OEM evaluation and FAT',
      'Support site commissioning and performance testing',
    ],
    qualifications: [
      'B.Tech/M.Tech in Chemical / Electrochemical Engineering',
      '5+ years in process plant design (oil & gas, chemicals or green hydrogen)',
      'Familiarity with ASPEN, HYSYS or equivalent simulation tools',
      'Willingness to travel to project sites across India',
    ],
  },
  {
    id: 'project-manager-re',
    title: 'Project Manager — Renewable Energy',
    department: 'Renewable Hybrid Energy',
    location: 'Pune / Site-Based',
    type: 'Full-Time',
    experience: '6–12 years',
    description:
      'Manage utility-scale solar, wind and solar-wind-BESS hybrid projects from feasibility through commissioning and handover. Own schedule, quality and stakeholder delivery.',
    responsibilities: [
      'End-to-end project execution from mobilisation to COD',
      'Manage subcontractors, vendors and site teams',
      'Monthly reporting, MIS and client presentations',
      'EHS governance and quality assurance on site',
    ],
    qualifications: [
      'B.E./B.Tech in Electrical, Mechanical or Civil Engineering',
      '6+ years in solar/wind EPC project management',
      'PMP or equivalent certification preferred',
      'Strong understanding of grid interconnection and CERC/SERC regulations',
    ],
  },
  {
    id: 'env-engineer',
    title: 'Environmental Engineer',
    department: 'Environmental Engineering',
    location: 'Pune',
    type: 'Full-Time',
    experience: '3–6 years',
    description:
      'Conduct EIA studies, air and noise pollution assessments, and environmental compliance audits for industrial and infrastructure projects across India.',
    responsibilities: [
      'Prepare EIA/EMP reports for MoEFCC and SEIAA submissions',
      'Design air pollution control systems (APCS) and stack monitoring plans',
      'Coordinate with regulatory bodies for environmental clearances',
      'Support clients with compliance monitoring and reporting',
    ],
    qualifications: [
      'M.Tech/M.Sc in Environmental Engineering or Environmental Science',
      '3+ years in EIA consulting or environmental compliance',
      'Knowledge of MoEFCC notification, CPCB/SPCB standards',
      'Proficiency in GIS tools and environmental modelling software',
    ],
  },
  {
    id: 'sustainability-analyst',
    title: 'Sustainability Analyst — ESG Advisory',
    department: 'Sustainability Advisory',
    location: 'Pune (Hybrid)',
    type: 'Full-Time',
    experience: '2–5 years',
    description:
      'Support corporate clients with GHG inventories, BRSR reporting, decarbonisation roadmaps and net-zero target setting across scope 1, 2 and 3 emissions.',
    responsibilities: [
      'Conduct GHG emission inventories using GHG Protocol',
      'Draft BRSR/BRSR Core disclosures for listed entities',
      'Develop net-zero pathways and science-based targets',
      'Research carbon credit mechanisms and I-REC markets',
    ],
    qualifications: [
      'MBA / M.Tech with specialisation in Sustainability or Energy',
      '2+ years in ESG consulting, sustainability reporting or carbon advisory',
      'Familiarity with SEBI BRSR, GRI, TCFD and SBTi frameworks',
      'Strong analytical and client-facing skills',
    ],
  },
  {
    id: 'cbg-intern',
    title: 'Graduate Engineer Trainee — CBG',
    department: 'Compressed Biogas',
    location: 'Pune / Project Site',
    type: 'Internship',
    experience: 'Fresher / 0–1 year',
    description:
      'Join our Compressed Biogas team to learn anaerobic digestion plant design, feedstock analysis and biogas upgrading systems. Ideal for recent graduates passionate about green fuels.',
    responsibilities: [
      'Assist with feedstock characterisation and lab testing',
      'Support process design documentation and BOQ preparation',
      'Participate in site visits and vendor coordination',
      'Contribute to techno-economic feasibility models',
    ],
    qualifications: [
      'B.Tech in Biotechnology, Chemical, or Environmental Engineering',
      'Strong interest in biogas, biomass and circular economy',
      'Good communication and documentation skills',
      'Willingness to work on-site for project durations',
    ],
  },
];

const DEPARTMENTS = ['All', ...Array.from(new Set(JOB_OPENINGS.map((j) => j.department)))];

const CAREER_FAQ = [
  {
    q: 'How do I apply for a position at Green Nova?',
    a: 'You can apply by clicking the "Apply Now" button on any open position listed on this page. Alternatively, send your resume and a cover letter to connect@greennovaenergy.in with the position title in the subject line.',
  },
  {
    q: 'What is the interview process like?',
    a: 'Our process typically includes: (1) Resume screening, (2) Technical phone interview with the hiring manager, (3) On-site or video panel interview with the team, and (4) Final discussion with leadership. The entire process takes 2–3 weeks.',
  },
  {
    q: 'Do you offer internship or apprenticeship programmes?',
    a: 'Yes. We offer structured internships for final-year engineering students and recent graduates across our verticals — particularly in Green Hydrogen, CBG, Renewable Energy and Environmental Engineering. Internships include mentorship, site exposure and a clear path to full-time conversion.',
  },
  {
    q: 'What locations does Green Nova hire for?',
    a: 'Our corporate office is in Pune, Maharashtra. However, many roles involve travel to or placement at project sites across India — including industrial corridors, coastal regions, semi-arid zones and urban centres depending on the project.',
  },
  {
    q: 'What benefits does Green Nova offer?',
    a: 'We offer competitive compensation, health insurance, performance-linked incentives, structured learning and development budgets, site allowances for field roles, and the opportunity to work on meaningful clean-energy and environmental projects that shape India\'s future.',
  },
];

/* ===========================================================
   CAREER PAGE COMPONENT
   =========================================================== */

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  useSeo({
    title: 'Careers — Join Green Nova Energy & Environment',
    description: 'Explore career opportunities at Green Nova Energy — engineering roles across Green Hydrogen, CBG, Renewable Energy, Environmental Engineering and Sustainability Advisory. Build your career in India\'s clean-energy future.',
    keywords: ['Green Nova careers', 'clean energy jobs India', 'green hydrogen engineer', 'renewable energy jobs', 'environmental engineering careers', 'sustainability analyst jobs'],
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'Careers' }],
  });

  const filteredJobs = activeFilter === 'All'
    ? JOB_OPENINGS
    : JOB_OPENINGS.filter((j) => j.department === activeFilter);

  return (
    <SiteShell>
      {/* ========== PAGE HERO ========== */}
      <PageHero
        eyebrow="Careers at Green Nova"
        eyebrowVariant="gold"
        title="Build Your Career in India's Clean-Energy Future."
        subtitle="We are looking for engineers, project managers, analysts and domain experts who want to do meaningful work — delivering renewable energy, green fuels, environmental infrastructure and sustainability advisory across India."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Careers' },
        ]}
        primaryCta={{ label: 'View open positions', to: '#openings' }}
        secondaryCta={{ label: 'Talk to us', to: WHATSAPP_HREF }}
      />

      {/* ========== WHY JOIN US ========== */}
      <section
        id="culture"
        aria-labelledby="culture-title"
        className="ds-section"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow="Why Green Nova"
              title="Why Engineers Choose to Build Here."
              subtitle="We offer more than jobs — we offer the chance to work on projects that matter, with a team that values engineering rigour, cross-vertical exposure and genuine career growth."
            />
          </div>
          <BenefitGrid items={CAREER_CULTURE} />
        </div>
      </section>

      {/* ========== OPEN POSITIONS ========== */}
      <section
        id="openings"
        aria-labelledby="openings-title"
        className="ds-section bg-paper-warm"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow="Open Positions"
              title="Current Opportunities."
              subtitle="Explore our open roles below. Can't find the right fit? Send your resume to connect@greennovaenergy.in — we're always interested in talented engineers and sustainability professionals."
            />
          </div>

          {/* Department filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveFilter(dept)}
                className={[
                  'px-4 py-2 rounded-full text-[0.82rem] font-semibold tracking-wide transition-all duration-300',
                  activeFilter === dept
                    ? 'bg-forest-950 text-white shadow-md'
                    : 'bg-white border border-line text-ink-muted hover:border-nova-400/50 hover:text-ink',
                ].join(' ')}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className={[
                    'rounded-2xl border bg-white overflow-hidden transition-all duration-400 ease-corp',
                    isExpanded ? 'border-nova-400/50 shadow-lg' : 'border-line hover:border-nova-400/30 hover:shadow-md',
                  ].join(' ')}
                >
                  {/* Job header — always visible */}
                  <button
                    type="button"
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    className="w-full text-left px-6 md:px-8 py-6 flex items-start md:items-center justify-between gap-4 transition-colors hover:bg-paper-grey"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={[
                          'text-[0.68rem] font-semibold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full',
                          job.type === 'Full-Time'
                            ? 'bg-nova-50 text-nova-700'
                            : job.type === 'Internship'
                              ? 'bg-gold-50 text-gold-700'
                              : 'bg-blue-50 text-blue-700',
                        ].join(' ')}>
                          {job.type}
                        </span>
                        <span className="text-[0.78rem] font-medium text-ink-muted">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="font-display text-[1.1rem] md:text-[1.2rem] font-semibold tracking-tight leading-snug text-ink">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-[0.82rem] text-ink-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="building" size={13} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="clock" size={13} />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className={[
                      'flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300',
                      isExpanded ? 'bg-forest-950 text-white rotate-180' : 'bg-paper text-ink-muted',
                    ].join(' ')}>
                      <Icon name="arrow-down" size={14} />
                    </div>
                  </button>

                  {/* Expandable detail */}
                  <div
                    className={[
                      'grid transition-[grid-template-rows] duration-400 ease-corp',
                      isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    ].join(' ')}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 border-t border-line pt-6">
                        <p className="text-[0.96rem] leading-[1.8] text-ink-muted mb-6">
                          {job.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-display text-[0.95rem] font-semibold tracking-tight mb-3 flex items-center gap-2">
                              <span className="h-6 w-6 rounded-full bg-nova-50 flex items-center justify-center flex-shrink-0">
                                <Icon name="check" size={12} className="text-nova-600" />
                              </span>
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="flex items-start gap-2.5 text-[0.88rem] leading-[1.65] text-ink-muted">
                                  <Icon name="arrow-right" size={12} className="mt-1.5 flex-shrink-0 text-nova-500" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Qualifications */}
                          <div>
                            <h4 className="font-display text-[0.95rem] font-semibold tracking-tight mb-3 flex items-center gap-2">
                              <span className="h-6 w-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0">
                                <Icon name="award" size={12} className="text-gold-600" />
                              </span>
                              Qualifications
                            </h4>
                            <ul className="space-y-2">
                              {job.qualifications.map((q) => (
                                <li key={q} className="flex items-start gap-2.5 text-[0.88rem] leading-[1.65] text-ink-muted">
                                  <Icon name="arrow-right" size={12} className="mt-1.5 flex-shrink-0 text-gold-500" />
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Apply CTA */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                          <Button
                            as="a"
                            href={`mailto:connect@greennovaenergy.in?subject=Application: ${job.title}`}
                            variant="accent"
                            size="md"
                            iconRight="arrow-right"
                          >
                            Apply Now
                          </Button>
                          <Button
                            as="a"
                            href={WHATSAPP_HREF}
                            variant="ghost"
                            size="md"
                            iconRight="arrow-right"
                          >
                            Ask a question
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="ds-icon ds-icon--xl ds-icon--outline mx-auto mb-5">
                <Icon name="search" size={28} />
              </div>
              <h3 className="font-display text-[1.2rem] font-semibold tracking-tight mb-2">
                No openings in this department right now
              </h3>
              <p className="text-[0.94rem] text-ink-muted">
                Send your resume to <strong>connect@greennovaenergy.in</strong> and we'll reach out when something opens up.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========== APPLICATION PROCESS ========== */}
      <section
        id="process"
        aria-labelledby="process-title"
        className="ds-section"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrow="How to Join"
              title="Our Hiring Process."
              subtitle="A transparent, structured process designed to find the right fit — for you and for us."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3">
            {[
              { phase: '01', title: 'Application Review', body: 'Submit your resume and cover letter. Our team reviews every application against role requirements within 5 business days.', icon: 'search' as IconName },
              { phase: '02', title: 'Technical Interview', body: 'A 45–60 minute conversation with the hiring manager focused on your technical depth, problem-solving approach and domain experience.', icon: 'users' as IconName },
              { phase: '03', title: 'Panel Discussion', body: 'Meet the team — cross-functional panellists assess culture fit, collaboration style and alignment with our engineering standards.', icon: 'building' as IconName },
              { phase: '04', title: 'Offer & Onboarding', body: 'Receive your offer, complete onboarding, and start building India\'s clean-energy infrastructure from day one.', icon: 'award' as IconName },
            ].map((p, i) => (
              <div
                key={p.phase}
                className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-400 ease-corp hover:border-nova-400/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="ds-badge ds-badge--nova">Step {p.phase}</span>
                  <span aria-hidden className="font-mono text-[0.72rem] font-semibold text-charcoal-400">
                    0{i + 1}/04
                  </span>
                </div>
                <div className="relative ds-icon ds-icon--xl ds-icon--forest mb-5">
                  <Icon name={p.icon} size={24} />
                  <span aria-hidden className="hidden lg:block absolute -top-1 -right-1 h-3 w-3 rounded-full bg-nova-500 ring-4 ring-paper" />
                </div>
                <h3 className="font-display text-[1.18rem] font-semibold tracking-tight leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.75] text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CAREER FAQ ========== */}
      <section
        id="career-faq"
        aria-labelledby="career-faq-title"
        className="ds-section bg-paper-warm"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="ds-eyebrow ds-eyebrow--gold justify-center">Frequently Asked Questions</span>
            <h2
              id="career-faq-title"
              className="mt-4 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
            >
              Career FAQs.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-muted">
              Common questions from candidates about working at Green Nova.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQBlock items={CAREER_FAQ} />
          </div>
        </div>
      </section>

      {/* ========== DARK CTA ========== */}
      <section className="relative isolate overflow-hidden" aria-labelledby="career-cta-title">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950" />
        <div aria-hidden className="absolute inset-0 bg-grid-pattern opacity-[0.06] mask-fade-b pointer-events-none" />
        <div aria-hidden className="absolute -top-32 -right-20 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-nova-500/20 via-nova-400/5 to-transparent blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-40 -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-gold-400/15 to-transparent blur-3xl pointer-events-none" />

        <div className="ds-container relative py-section-lg">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 lg:p-16 overflow-hidden">
            <div aria-hidden className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-nova-400/40 to-transparent" />
            <div className="relative max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-nova-400/30 bg-nova-500/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-nova-200">
                <Icon name="users" size={12} />
                Join the team
              </span>
              <h2
                id="career-cta-title"
                className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-white text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
              >
                Don't See Your Role? We Still Want to Hear from You.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-white/72">
                We're always looking for talented engineers and sustainability professionals. Send your resume to{' '}
                <a href={`mailto:${COMPANY.email}?subject=Career Application — Engineering`} className="text-white font-semibold underline underline-offset-4 decoration-nova-400">
                  {COMPANY.email}
                </a>{' '}
                or reach out directly at +91 8550983678 / +91 7276817964.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button as="a" href={`mailto:${COMPANY.email}?subject=Career Application — Engineering`} variant="accent" size="lg" iconRight="arrow-right">
                  Send your resume
                </Button>
                <Button as="a" href={WHATSAPP_HREF} variant="ghost" size="lg" inverted iconRight="arrow-right">
                  WhatsApp us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
