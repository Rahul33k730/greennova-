import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import { BenefitGrid } from '@/components/blocks/PageBuildingBlocks';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';
import { COMPANY, WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';
import { getPublishedJobs, type JobOpening } from '@/lib/jobs';

/* ===========================================================
   DATA — Career Page Content
   =========================================================== */

const CAREER_CULTURE = [
  {
    eyebrow: 'Purpose-Driven',
    title: 'Work That Matters',
    description:
      'Every project you touch contributes to India\'s clean-energy transition — from green hydrogen plants and solar parks to waste-to-energy facilities and environmental infrastructure.',
  },
  {
    eyebrow: 'Collaborative',
    title: 'One Team, Many Verticals',
    description:
      'Work alongside engineers, project managers and domain experts across six verticals. Collaboration here means real cross-functional exposure, not siloed departments.',
  },
  {
    eyebrow: 'Growth-Oriented',
    title: 'Build Your Engineering Career',
    description:
      'Structured mentorship, on-site exposure, technology training and a clear career trajectory. We invest in people who want to grow with the clean-energy sector.',
  },
  {
    eyebrow: 'PAN India',
    title: 'Opportunities Across India',
    description:
      'From our Pune headquarters to project sites across industrial corridors, coastal regions and emerging clean-energy hubs — your work takes you where it matters.',
  },
];

/* ===========================================================
   CAREER PAGE COMPONENT
   =========================================================== */

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState<JobOpening[]>(() => getPublishedJobs());

  const refreshJobs = useCallback(() => {
    setJobs(getPublishedJobs());
  }, []);

  // Keep the listings in sync with the admin job store
  useEffect(() => {
    const handler = () => refreshJobs();
    window.addEventListener('storage', handler);
    window.addEventListener('green-nova-jobs-updated', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('green-nova-jobs-updated', handler);
    };
  }, [refreshJobs]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Max 10MB limit check
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      setFileError('File size exceeds the 10 MB limit. Please select a smaller document.');
      e.target.value = '';
      setSelectedFile(null);
      return;
    }

    // Strict extension check
    const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt'];
    const fileName = file.name.toLowerCase();
    const isAllowed = allowedExtensions.some((ext) => fileName.endsWith(ext));
    if (!isAllowed) {
      setFileError('Invalid file format. Please upload a PDF, DOC, DOCX, or TXT file.');
      e.target.value = '';
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError(null);
    const input = document.getElementById('resume') as HTMLInputElement | null;
    if (input) input.value = '';
  };

  useSeo({
    title: 'Careers — Join Green Nova Energy & Environment',
    description: 'Explore career opportunities at Green Nova Energy — engineering roles across Green Hydrogen, CBG, Renewable Energy, Environmental Engineering and Sustainability Advisory. Build your career in India\'s clean-energy future.',
    keywords: ['Green Nova careers', 'clean energy jobs India', 'green hydrogen engineer', 'renewable energy jobs', 'environmental engineering careers', 'sustainability analyst jobs'],
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'Careers' }],
    image: '/images/career_frontpage.jpeg',
  });

  const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))];

  const filteredJobs = activeFilter === 'All'
    ? jobs
    : jobs.filter((j) => j.department === activeFilter);

  return (
    <SiteShell>
      {/* ========== PAGE HERO — SIDE IMAGE LAYOUT ========== */}
      <section className="relative isolate overflow-hidden bg-paper pt-[calc(var(--nav-height)+2rem)] pb-16 lg:pb-24 border-b border-line">
        <div aria-hidden className="absolute inset-0 surface-grid opacity-25 mask-fade-b pointer-events-none" />
        <div aria-hidden className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-nova-500/5 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & CTAs */}
            <div className="lg:col-span-6 reveal-up">
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-[0.82rem] font-medium text-ink-muted">
                  <li className="inline-flex items-center gap-2">
                    <Link to="/" className="text-ink-muted hover:text-ink transition-colors inline-flex items-center leading-none">
                      Home
                    </Link>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Icon name="arrow-right" size={12} className="text-charcoal-400" />
                  </li>
                  <li className="inline-flex items-center">
                    <span className="text-ink font-semibold inline-flex items-center leading-none">
                      Careers
                    </span>
                  </li>
                </ol>
              </nav>

              <span className="ds-eyebrow ds-eyebrow--gold mb-4">
                Careers at Green Nova
              </span>

              <h1 className="font-display font-bold tracking-tight text-forest-950 leading-[1.08] text-balance text-[clamp(2.2rem,3.4vw+0.8rem,3.8rem)]">
                Build Your Career in India's Clean-Energy Future.
              </h1>
              <div className="h-1.5 w-24 bg-gradient-to-r from-nova-500 via-gold-400 to-transparent rounded-full mt-5 mb-6 shadow-xs" />

              <p className="text-[1.08rem] leading-[1.8] text-ink-muted max-w-2xl">
                We are looking for engineers, project managers, analysts and domain experts who want to do meaningful work — delivering renewable energy, green fuels, environmental infrastructure and sustainability advisory across India.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#openings"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-forest-950 hover:bg-forest-900 active:bg-black text-white font-semibold text-[0.96rem] px-7 py-3.5 shadow-lg shadow-forest-950/20 hover:shadow-xl hover:shadow-forest-900/30 transition-all duration-250"
                >
                  <span>View open positions</span>
                  <Icon name="arrow-right" size={15} className="transition-transform duration-200 text-gold-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white/60 hover:border-nova-400/50 hover:bg-white text-ink font-semibold text-[0.96rem] px-7 py-3.5 transition-all duration-250"
                >
                  <span>Talk to us</span>
                  <Icon name="arrow-right" size={15} />
                </a>
              </div>
            </div>

            {/* Right: Hero Side Image */}
            <div className="lg:col-span-6 reveal-up">
              <div className="relative rounded-3xl overflow-hidden border border-line bg-forest-950 shadow-2xl group">
                <div className="relative aspect-[4/3] lg:aspect-square w-full max-h-[520px] overflow-hidden">
                  <img
                    src="/images/career_frontpage.jpeg"
                    alt="Build your career with Green Nova Energy — clean-energy engineering opportunities across India"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <BenefitGrid items={CAREER_CULTURE} eyebrowAlign="left" />
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
              subtitle={`Explore our open roles below. Can't find the right fit? Send your resume to ${COMPANY.email} — we're always interested in talented engineers and sustainability professionals.`}
            />
          </div>

          {/* Department filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {departments.map((dept) => (
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
                            href={`mailto:${COMPANY.email}?subject=Application: ${job.title}`}
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
                Send your resume to <strong>{COMPANY.email}</strong> and we'll reach out when something opens up.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========== UPLOAD YOUR RESUME ========== */}
      <section
        id="apply"
        aria-labelledby="apply-title"
        className="ds-section relative isolate overflow-hidden bg-paper-warm"
      >
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-cream-50 via-paper-warm to-gold-50/50" />
        <div aria-hidden className="absolute inset-0 surface-grid opacity-30 mask-fade-b pointer-events-none" />
        <div aria-hidden className="absolute -top-32 -right-20 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-gold-300/20 via-gold-200/10 to-transparent blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-40 -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-forest-200/25 via-forest-100/10 to-transparent blur-3xl pointer-events-none" />

        <div className="ds-container relative">
          <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-700 shadow-sm">
              <Icon name="leaf" size={12} />
              Join the team
            </span>
            <h2
              id="apply-title"
              className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-forest-950 text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
            >
              Upload Your Resume.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8] text-ink-muted max-w-2xl mx-auto">
              Don't see your dream role listed? No problem — submit your resume below with your preferred position. Our HR team will get back to you when a matching opportunity opens up.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl rounded-3xl border border-line-strong bg-white shadow-[0_30px_80px_-20px_rgba(15,42,33,0.15)] p-8 md:p-10 lg:p-12 overflow-hidden">
            <div aria-hidden className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

            <form
              action={`https://formsubmit.co/${COMPANY.email}`}
              method="POST"
              encType="multipart/form-data"
              className="relative space-y-6"
              onSubmit={(e) => {
                const form = e.currentTarget;
                const honey = (form.elements.namedItem('_honey') as HTMLInputElement | null)?.value;
                if (honey) {
                  e.preventDefault();
                  // Bot trapped!
                  window.location.href = `${window.location.origin}/careers?submitted=1`;
                  return;
                }

                if (!selectedFile) {
                  e.preventDefault();
                  setFileError('Please select a resume file (PDF, DOC, DOCX, or TXT) before submitting.');
                  return;
                }

                setIsSubmitting(true);
              }}
            >
              {/* Anti-spam Honeypot Trap (hidden from human users, traps bots) */}
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <input type="hidden" name="_subject" value="New Resume Submission — Green Nova Careers" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for applying to Green Nova! We have received your resume and will review it shortly." />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/careers?submitted=1` : ''} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-[0.82rem] font-semibold text-forest-900">
                    Full Name <span className="text-gold-600">*</span>
                  </label>
                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 transition-colors group-focus-within:text-gold-600">
                      <Icon name="users" size={15} />
                    </div>
                    <input
                      id="fullName"
                      name="Full Name"
                      type="text"
                      required
                      maxLength={120}
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full text-[1rem] rounded-xl border border-line bg-paper text-ink placeholder:text-charcoal-400 pl-11 pr-4 py-3.5 transition-all duration-200 focus:border-gold-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[0.82rem] font-semibold text-forest-900">
                    Email Address <span className="text-gold-600">*</span>
                  </label>
                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 transition-colors group-focus-within:text-gold-600">
                      <Icon name="mail" size={15} />
                    </div>
                    <input
                      id="email"
                      name="Email"
                      type="email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full text-[1rem] rounded-xl border border-line bg-paper text-ink placeholder:text-charcoal-400 pl-11 pr-4 py-3.5 transition-all duration-200 focus:border-gold-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[0.82rem] font-semibold text-forest-900">
                    Phone Number
                  </label>
                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 transition-colors group-focus-within:text-gold-600">
                      <Icon name="phone" size={15} />
                    </div>
                    <input
                      id="phone"
                      name="Phone"
                      type="tel"
                      maxLength={30}
                      autoComplete="tel"
                      placeholder={COMPANY.phone}
                      className="w-full text-[1rem] rounded-xl border border-line bg-paper text-ink placeholder:text-charcoal-400 pl-11 pr-4 py-3.5 transition-all duration-200 focus:border-gold-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                    />
                  </div>
                </div>

                {/* Position applying for */}
                <div className="space-y-2">
                  <label htmlFor="position" className="block text-[0.82rem] font-semibold text-forest-900">
                    Position Applying For
                  </label>
                  <div className="group relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 transition-colors group-focus-within:text-gold-600">
                      <Icon name="award" size={15} />
                    </div>
                    <select
                      id="position"
                      name="Position"
                      className="w-full text-[1rem] appearance-none rounded-xl border border-line bg-paper text-ink pl-11 pr-10 py-3.5 transition-all duration-200 focus:border-gold-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                      style={{ colorScheme: 'light' }}
                    >
                      <option value="General Application / Not Listed">General Application</option>
                      {jobs.map((j) => (
                        <option key={j.id} value={j.title}>{j.title}</option>
                      ))}
                      <option value="Internship">Internship (General)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-charcoal-400 group-focus-within:text-gold-600">
                      <Icon name="arrow-down" size={12} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Years of experience */}
              <div className="space-y-2">
                <label htmlFor="experience" className="block text-[0.82rem] font-semibold text-forest-900">
                  Total Experience (Years)
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 transition-colors group-focus-within:text-gold-600">
                    <Icon name="clock" size={15} />
                  </div>
                  <input
                    id="experience"
                    name="Experience"
                    type="text"
                    maxLength={60}
                    placeholder="e.g. 3-5 years, Fresher, etc."
                    className="w-full text-[1rem] rounded-xl border border-line bg-paper text-ink placeholder:text-charcoal-400 pl-11 pr-4 py-3.5 transition-all duration-200 focus:border-gold-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
              </div>

              {/* Cover letter / short message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-[0.82rem] font-semibold text-forest-900">
                  Cover Letter / Short Intro
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  maxLength={3000}
                  placeholder="Tell us briefly about yourself, why Green Nova, and which projects or domains you're most excited about..."
                  className="w-full text-[1rem] resize-y rounded-xl border border-line bg-paper text-ink placeholder:text-charcoal-400 px-4 py-3.5 transition-all duration-200 focus:border-gold-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                />
              </div>

              {/* Resume upload */}
              <div className="space-y-2">
                <label htmlFor="resume" className="block text-[0.82rem] font-semibold text-forest-900">
                  Upload Your Resume <span className="text-gold-600">*</span>
                </label>

                {fileError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800 flex items-center gap-2">
                    <Icon name="close" size={14} className="text-red-600 shrink-0" />
                    <span>{fileError}</span>
                  </div>
                )}

                {selectedFile ? (
                  <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon name="check" size={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-forest-950 text-sm truncate">
                          {selectedFile.name}
                        </div>
                        <div className="text-xs text-ink-muted">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for submission
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 bg-white border border-red-200 hover:border-red-300 rounded-lg px-3 py-2 transition-colors self-start sm:self-auto"
                    >
                      <Icon name="close" size={13} />
                      <span>Remove file</span>
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="resume"
                    className="group block cursor-pointer rounded-2xl border-2 border-dashed border-forest-200 bg-forest-50/40 hover:border-gold-400/60 hover:bg-gold-50/60 transition-all duration-200 p-8 md:p-10 touch-manipulation"
                  >
                    <input
                      id="resume"
                      name="Resume"
                      type="file"
                      required
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center text-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-gold-100 border border-gold-300/50 flex items-center justify-center text-gold-700 group-hover:scale-110 transition-transform duration-200 shadow-xs">
                        <Icon name="arrow-down" size={20} />
                      </div>
                      <div>
                        <div className="text-forest-950 font-semibold text-[0.98rem]">
                          Click or tap to upload your resume
                        </div>
                        <div className="mt-1 text-[0.78rem] text-ink-muted">
                          Accepted formats: PDF, DOC, DOCX, TXT • Max 10 MB
                        </div>
                      </div>
                    </div>
                  </label>
                )}
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[0.76rem] text-ink-muted max-w-md">
                  By submitting this form, you agree that your resume & details will be emailed directly to{' '}
                  <span className="text-forest-900 font-medium">{COMPANY.email}</span> for hiring review.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 rounded-xl bg-forest-950 hover:bg-forest-900 active:bg-black text-white font-semibold text-[0.96rem] px-7 py-3.5 shadow-lg shadow-forest-950/20 hover:shadow-xl hover:shadow-forest-900/30 transition-all duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation"
                >
                  <span>{isSubmitting ? 'Uploading resume…' : 'Send Resume to Green Nova'}</span>
                  {!isSubmitting && (
                    <Icon name="arrow-right" size={15} className="transition-transform duration-200 text-gold-300 group-hover:translate-x-1" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
