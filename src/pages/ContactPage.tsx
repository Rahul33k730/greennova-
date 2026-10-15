import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteShell from '@/components/layout/SiteShell';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';
import { FieldInput, FieldTextarea, FieldSelect, Checkbox } from '@/components/primitives/Field';
import { COMPANY } from '@/data/site';
import useSeo from '@/hooks/useSeo';

export default function ContactPage() {
  useSeo({
    title: 'Contact Green Nova — Capability Discussion & Enquiries',
    description: 'Contact Green Nova Energy & Environment Solutions for a scoping conversation on Green Hydrogen, CBG, Waste-to-Energy, Renewable Hybrid, Environmental Engineering or ESG / Sustainability Advisory. PAN India offices.',
    keywords: ['Contact Green Nova', 'Green Nova address', 'Energy consultant contact', 'Renewable EPC enquiry'],
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'Contact' }],
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('submitted') === '1';
    }
    return false;
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCopyEmail = (emailText: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailText);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Check honeypot field for bot mitigation
    const honey = (form.elements.namedItem('_honey') as HTMLInputElement | null)?.value;
    if (honey) {
      // Bot trapped! Silently complete without triggering inbox notification
      setSubmitted(true);
      form.reset();
      return;
    }

    // HTML5 validation check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY.email}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== 'false') {
        setSubmitted(true);
        form.reset();
      } else {
        // Fallback to standard form post
        form.submit();
      }
    } catch {
      // Fallback to standard form post
      form.submit();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      {/* ========== CONTACT GRID — FORM + CARDS ========== */}
      <section
        id="contact-form"
        aria-labelledby="contact-title"
        className="ds-section pt-[calc(var(--nav-height)+2rem)] lg:pt-[calc(var(--nav-height)+3rem)]"
      >
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* ——— LEFT: CONTACT INFO CARDS ——— */}
            <aside className="lg:col-span-5 space-y-6" aria-label="Company contact details">
              <div className="mb-2">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-4">
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
                        Contact
                      </span>
                    </li>
                  </ol>
                </nav>

                <span className="ds-eyebrow mb-3">Contact information</span>
                <h1
                  id="contact-title"
                  className="mt-2 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance text-[clamp(1.75rem,2vw+0.5rem,2.4rem)]"
                >
                  Multiple Ways to Reach Us, One Accountable Team.
                </h1>
                <p className="mt-4 text-[0.96rem] leading-[1.8] text-ink-muted">
                  You can contact Green Nova through any of the channels below. Every enquiry is routed through a single point of contact so there is no run-around between verticals, functions or offices.
                </p>
              </div>

              {/* WhatsApp */}
              <div className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-md hover:border-emerald-300/60">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--whatsapp flex-shrink-0 shadow-sm">
                    <Icon name="whatsapp" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-emerald-700 mb-1">
                      WhatsApp
                    </div>
                    <a
                      href={COMPANY.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-[1.15rem] font-semibold tracking-tight text-ink hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
                    >
                      <span>{COMPANY.whatsapp.label}</span>
                      <Icon name="arrow-right" size={14} className="text-emerald-600 transition-transform group-hover:translate-x-1" />
                    </a>
                    <p className="mt-2 text-[0.86rem] leading-[1.7] text-ink-muted">
                      For fast enquiries and direct business conversations, message our leadership team on WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary email / central comms */}
              <div className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-md hover:border-forest-300/60 overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--nova flex-shrink-0 shadow-sm">
                    <Icon name="mail" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500">
                        Email Address
                      </div>
                      <span className="text-[0.7rem] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 shrink-0">
                        Official Inbox
                      </span>
                    </div>

                    {/* Clean email link with graceful word break */}
                    <div className="mt-2">
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="font-display text-[1.02rem] sm:text-[1.12rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors block leading-snug break-words"
                        title={COMPANY.email}
                      >
                        {COMPANY.email.split('@')[0]}<wbr />@{COMPANY.email.split('@')[1]}
                      </a>
                    </div>

                    {/* Action buttons row */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(COMPANY.email)}
                        className="text-xs font-semibold text-forest-800 hover:text-forest-950 px-3 py-1.5 rounded-lg bg-paper border border-line shadow-2xs hover:bg-forest-50 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        <Icon name={copiedEmail ? 'check' : 'mail'} size={13} className={copiedEmail ? 'text-emerald-600' : 'text-forest-600'} />
                        <span>{copiedEmail ? 'Copied' : 'Copy email'}</span>
                      </button>

                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-xs font-semibold text-white bg-forest-900 hover:bg-forest-800 px-3.5 py-1.5 rounded-lg shadow-2xs transition-all inline-flex items-center gap-1.5"
                        title="Send email to Green Nova"
                      >
                        <span>Send email</span>
                        <Icon name="arrow-right" size={12} className="text-emerald-300" />
                      </a>
                    </div>

                    <p className="mt-3 text-[0.84rem] leading-[1.7] text-ink-muted">
                      For general enquiries, RFPs, commercial proposals and official communications — monitored daily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-md hover:border-forest-300/60">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--forest flex-shrink-0 shadow-sm">
                    <Icon name="phone" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500 mb-1">
                      Phone Lines
                    </div>
                    <div className="flex flex-col gap-2.5 mt-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <a
                          href="tel:+918550983678"
                          className="font-display text-[1.12rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors inline-flex items-center gap-2"
                        >
                          <Icon name="phone" size={15} className="text-forest-700 shrink-0" />
                          <span>+91 8550983678</span>
                        </a>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[0.72rem] font-semibold border border-emerald-200/80">
                          <Icon name="whatsapp" size={12} className="text-[#25D366] shrink-0" />
                          Primary / WhatsApp
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <a
                          href="tel:+917276817964"
                          className="font-display text-[1.12rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors inline-flex items-center gap-2"
                        >
                          <Icon name="phone" size={15} className="text-forest-700 shrink-0" />
                          <span>+91 7276817964</span>
                        </a>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-paper text-charcoal-700 text-[0.72rem] font-semibold border border-line">
                          Direct Line
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-[0.86rem] leading-[1.7] text-ink-muted">
                      Direct executive and technical scoping line. Business days, Monday — Friday (09:00 – 18:30 IST).
                    </p>
                  </div>
                </div>
              </div>

              {/* Registered Corporate Headquarters & Statutory Compliance */}
              <div className="relative rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--gold flex-shrink-0">
                    <Icon name="location" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500 mb-1">
                      Corporate Headquarters
                    </div>
                    <div className="font-display text-[1.12rem] font-semibold tracking-tight text-ink leading-snug">
                      {COMPANY.name}
                    </div>
                    <p className="mt-2 text-[0.88rem] leading-[1.7] text-ink-muted font-medium">
                      {COMPANY.registeredOffice}
                    </p>

                    {/* Statutory Credentials (CIN & GSTIN) */}
                    <div className="mt-4 pt-4 border-t border-line/70 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                      <div className="rounded-lg bg-paper px-3 py-2 border border-line">
                        <span className="text-charcoal-500 block text-[0.68rem] uppercase font-sans font-semibold">GSTIN</span>
                        <span className="font-bold text-forest-900">{COMPANY.gstin}</span>
                      </div>
                      <div className="rounded-lg bg-paper px-3 py-2 border border-line">
                        <span className="text-charcoal-500 block text-[0.68rem] uppercase font-sans font-semibold">CIN</span>
                        <span className="font-bold text-forest-900">{COMPANY.cin}</span>
                      </div>
                    </div>

                    <div className="mt-3.5 flex flex-wrap gap-2 text-xs">
                      <span className="ds-badge ds-badge--gold">PAN India delivery</span>
                      <span className="ds-badge ds-badge--nova">Govt Registered Entity</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:shadow-md hover:border-gold-400/50">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--gold flex-shrink-0 shadow-sm">
                    <Icon name="clock" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500">
                        Operational Hours
                      </div>
                      <span className="text-[0.7rem] font-mono font-medium text-forest-800 bg-forest-50 px-2.5 py-0.5 rounded-full border border-forest-200/60">
                        IST (UTC +5:30)
                      </span>
                    </div>

                    <div className="mt-3 space-y-2">
                      {/* Mon - Fri */}
                      <div className="p-3 rounded-xl bg-paper border border-line/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <div>
                          <span className="text-[0.88rem] font-semibold text-forest-950 block">
                            Monday — Friday
                          </span>
                          <span className="text-[0.72rem] text-ink-muted">Standard Engineering &amp; Commercial Desk</span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-forest-900 bg-white px-2.5 py-1 rounded-lg border border-line shadow-2xs self-start sm:self-auto shrink-0">
                          09:00 – 18:30 IST
                        </span>
                      </div>

                      {/* Saturday */}
                      <div className="p-3 rounded-xl bg-paper border border-line/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <div>
                          <span className="text-[0.88rem] font-semibold text-forest-950 block">
                            Saturday
                          </span>
                          <span className="text-[0.72rem] text-ink-muted">Project Feasibility &amp; Scoping</span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-forest-900 bg-white px-2.5 py-1 rounded-lg border border-line shadow-2xs self-start sm:self-auto shrink-0">
                          10:00 – 15:00 IST
                        </span>
                      </div>

                      {/* Sunday */}
                      <div className="p-3 rounded-xl bg-paper/60 border border-line/60 flex items-center justify-between gap-2">
                        <div>
                          <span className="text-[0.88rem] font-medium text-ink-muted block">
                            Sunday &amp; Public Holidays
                          </span>
                          <span className="text-[0.72rem] text-charcoal-400">Headquarters Closed for Enquiries</span>
                        </div>
                        <span className="font-mono text-[0.72rem] font-semibold text-charcoal-500 bg-white px-2.5 py-1 rounded-lg border border-line shadow-2xs shrink-0">
                          Closed
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 p-3 rounded-xl bg-forest-950/5 border border-forest-900/10 flex items-start gap-2.5">
                      <Icon name="shield" size={16} className="text-forest-700 mt-0.5 shrink-0" />
                      <p className="text-[0.8rem] leading-[1.6] text-forest-900">
                        <strong>24/7 Site Support:</strong> Field commissioning personnel and plant site teams operate continuously across project sites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ——— RIGHT: FORM ——— */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-line bg-white shadow-sm p-8 md:p-10 lg:p-12 overflow-hidden">
                <div aria-hidden className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-nova-400/40 to-transparent" />

                <div className="relative">
                  <div className="mb-8">
                    <span className="ds-eyebrow ds-eyebrow--gold mb-3">Enquiry form</span>
                    <h2 className="font-display font-semibold leading-[1.08] tracking-[-0.025em] text-ink text-balance text-[clamp(1.5rem,1.7vw+0.5rem,2rem)]">
                      Tell Us About Your Project or Requirement.
                    </h2>
                    <p className="mt-3 text-[0.94rem] leading-[1.8] text-ink-muted">
                      A short description is enough for us to scope the first conversation. Your enquiry will be delivered directly to our team at{' '}
                      <span className="font-semibold text-ink">{COMPANY.email}</span>. We respond within two business days.
                    </p>
                  </div>

                  {submitted ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className="rounded-2xl border border-nova-300 bg-nova-50 p-8 text-center"
                    >
                      <div className="mx-auto w-14 h-14 rounded-full bg-nova-500 flex items-center justify-center text-white mb-5">
                        <Icon name="check" size={28} strokeWidth={2.25} />
                      </div>
                      <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
                        Thank you — enquiry received.
                      </h3>
                      <p className="mt-3 text-[0.96rem] leading-[1.8] text-ink-muted max-w-xl mx-auto">
                        Your project requirement has been delivered directly to our team at{' '}
                        <strong className="text-ink">{COMPANY.email}</strong>. We will review the details and respond within two business days. For urgent matters, write directly to{' '}
                        <a href={`mailto:${COMPANY.email}`} className="font-semibold text-forest-700 hover:underline">
                          {COMPANY.email}
                        </a>
                        {' '}or message us on{' '}
                        <a href={COMPANY.whatsapp.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-700 hover:underline inline-flex items-center gap-1">
                          <Icon name="whatsapp" size={14} className="text-[#25D366]" />
                          <span>WhatsApp</span>
                        </a>
                        .
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button as="a" href="/services" variant="primary" size="md" iconRight="globe">
                          Explore our services
                        </Button>
                        <Button as="a" href="/about" variant="outline" size="md" iconRight="users">
                          About Green Nova
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form
                      action={`https://formsubmit.co/${COMPANY.email}`}
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-6"
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

                      {/* FormSubmit routing configuration */}
                      <input type="hidden" name="_subject" value="New Project Requirement — Green Nova Energy" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="hidden"
                        name="_autoresponse"
                        value="Thank you for reaching out to Green Nova Energy & Environment Solutions. We have received your project requirement and our engineering and commercial teams will review it and respond within two business days."
                      />
                      <input
                        type="hidden"
                        name="_next"
                        value={typeof window !== 'undefined' ? `${window.location.origin}/contact?submitted=1` : ''}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldInput
                          label="Full name"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                          maxLength={120}
                          autoComplete="name"
                        />
                        <FieldInput
                          label="Company / Organisation"
                          name="company"
                          id="company"
                          type="text"
                          placeholder="Company name"
                          maxLength={120}
                          autoComplete="organization"
                        />
                        <FieldInput
                          label="Business email"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          maxLength={150}
                          autoComplete="email"
                        />
                        <FieldInput
                          label="Phone (with country code)"
                          name="phone"
                          id="phone"
                          type="tel"
                          placeholder="+91 98000 00000"
                          maxLength={30}
                          autoComplete="tel"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldSelect
                          label="Enquiry type"
                          name="enquiryType"
                          id="enquiryType"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select enquiry type…
                          </option>
                          <option value="project-epc">Project EPC / Engineering</option>
                          <option value="feasibility-study">Feasibility & Study</option>
                          <option value="esg-advisory">ESG / Sustainability Advisory</option>
                          <option value="operations-maintenance">O&M / Long-term Operations</option>
                          <option value="partnership">Partnership / Collaboration</option>
                          <option value="tender-rfp">Tender / RFP response</option>
                          <option value="media">Media & Press</option>
                          <option value="other">Other</option>
                        </FieldSelect>

                        <FieldSelect
                          label="Service vertical of interest"
                          name="vertical"
                          id="vertical"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select vertical (optional)…
                          </option>
                          <option value="green-hydrogen">Green Hydrogen</option>
                          <option value="cbg">Compressed Biogas (CBG)</option>
                          <option value="wte">Waste-to-Energy</option>
                          <option value="env-engg">Environmental Engineering</option>
                          <option value="re-hybrid">Renewable Hybrid Energy</option>
                          <option value="esg-advisory">Sustainability Advisory</option>
                          <option value="multiple">Multiple verticals</option>
                          <option value="unsure">Unsure — help me scope</option>
                        </FieldSelect>
                      </div>

                      <FieldTextarea
                        label="Tell us about your project or requirement"
                        name="message"
                        id="message"
                        rows={6}
                        required
                        maxLength={3000}
                        placeholder="A short description: scope, scale (MW / TPD / TPD), location, timeline and the stage (concept / feasibility / tender / execution) is a great starting point."
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldInput
                          label="Project location (city / state)"
                          name="location"
                          id="location"
                          type="text"
                          placeholder="e.g. Kutch, Gujarat"
                          maxLength={120}
                          autoComplete="address-level2"
                        />
                        <FieldSelect
                          label="Project stage"
                          name="stage"
                          id="stage"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select stage (optional)…
                          </option>
                          <option value="concept">Concept / Scoping</option>
                          <option value="feasibility">Feasibility & DPR</option>
                          <option value="detailed-engineering">Detailed engineering</option>
                          <option value="tender">Tender / Bid preparation</option>
                          <option value="execution">EPC / Execution</option>
                          <option value="commissioning">Commissioning & handover</option>
                          <option value="om">O&M / Operations</option>
                        </FieldSelect>
                      </div>

                      <div className="rounded-2xl border border-line bg-paper-warm p-5 space-y-3">
                        <Checkbox
                          id="privacy"
                          name="privacy"
                          required
                          label={
                            <>
                              I agree that my information may be used by {COMPANY.shortName} to respond to this enquiry and for related legitimate business purposes, in line with the company's data-handling practices.
                            </>
                          }
                        />
                        <Checkbox
                          id="newsletter"
                          name="newsletter"
                          label="Subscribe me to occasional capability & thought leadership updates (max 1–2 per quarter, unsubscribe anytime)."
                        />
                      </div>

                      {submitError && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-[0.88rem] text-red-800 flex items-start gap-3">
                          <Icon name="mail" size={18} className="text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Unable to dispatch enquiry automatically.</p>
                            <p className="mt-1 text-[0.84rem]">
                              Please email your requirement directly to{' '}
                              <a href={`mailto:${COMPANY.email}`} className="font-semibold underline">
                                {COMPANY.email}
                              </a>{' '}
                              or message us on{' '}
                              <a href={COMPANY.whatsapp.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                                WhatsApp
                              </a>.
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2">
                        <p className="text-[0.8rem] leading-[1.7] text-charcoal-500">
                          Fields marked with <span className="text-charcoal-500">*</span> are required.
                          <br className="hidden sm:block" />
                          Delivers directly to{' '}
                          <a href={`mailto:${COMPANY.email}`} className="font-semibold text-forest-700 hover:underline">
                            {COMPANY.email}
                          </a>
                          .
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                          <Button
                            type="reset"
                            variant="outline"
                            size="lg"
                          >
                            Reset
                          </Button>
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            iconRight={submitting ? undefined : 'arrow-right'}
                            disabled={submitting}
                          >
                            {submitting ? 'Sending to Gmail…' : 'Send requirement'}
                          </Button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
