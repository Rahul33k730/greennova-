import { useState } from 'react';
import SiteShell from '@/components/layout/SiteShell';
import { PageHero } from '@/components/blocks/PageBuildingBlocks';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';
import { FieldInput, FieldTextarea, FieldSelect, Checkbox } from '@/components/primitives/Field';
import { COMPANY, WHATSAPP_HREF } from '@/data/site';
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // No network call — demo form. Simulate submission.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <SiteShell>
      {/* ========== PAGE HERO ========== */}
      <PageHero
        eyebrow="Get in touch"
        eyebrowVariant="default"
        title="Start a Conversation With Our Team."
        subtitle="Whether you are scoping a project, evaluating technologies, planning a decarbonisation roadmap or selecting an EPC partner — a structured, no-obligation scoping conversation is the best way to understand if Green Nova is the right fit. We respond within two business days."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
        primaryCta={{ label: 'WhatsApp us directly', to: WHATSAPP_HREF }}
        secondaryCta={{ label: 'Explore services first', to: '/services', icon: 'globe' }}
      />

      {/* ========== CONTACT GRID — FORM + CARDS ========== */}
      <section
        id="contact-form"
        aria-labelledby="contact-title"
        className="ds-section"
      >
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* ——— LEFT: CONTACT INFO CARDS ——— */}
            <aside className="lg:col-span-5 space-y-6" aria-label="Company contact details">
              <div className="mb-2">
                <span className="ds-eyebrow mb-3">Contact information</span>
                <h2
                  id="contact-title"
                  className="mt-2 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance text-[clamp(1.75rem,2vw+0.5rem,2.4rem)]"
                >
                  Multiple Ways to Reach Us, One Accountable Team.
                </h2>
                <p className="mt-4 text-[0.96rem] leading-[1.8] text-ink-muted">
                  You can contact Green Nova through any of the channels below. Every enquiry is routed through a single point of contact so there is no run-around between verticals, functions or offices.
                </p>
              </div>

              {/* WhatsApp */}
              <div className="relative rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--forest flex-shrink-0">
                    <Icon name="phone" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500 mb-1">
                      WhatsApp
                    </div>
                    <a
                      href={COMPANY.whatsapp.href}
                      className="font-display text-[1.15rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors"
                    >
                      {COMPANY.whatsapp.label}
                    </a>
                    <p className="mt-2 text-[0.86rem] leading-[1.7] text-ink-muted">
                      For fast enquiries and direct business conversations, message us on WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary email / central comms */}
              <div className="relative rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--nova flex-shrink-0">
                    <Icon name="mail" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500 mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-display text-[1.15rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors break-all"
                    >
                      {COMPANY.email}
                    </a>
                    <p className="mt-2 text-[0.86rem] leading-[1.7] text-ink-muted">
                      For general enquiries, RFPs, partnership proposals and media — our central inbox is monitored daily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="relative rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--forest flex-shrink-0">
                    <Icon name="phone" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500 mb-1">
                      Phone Lines
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <a
                        href="tel:+918550983678"
                        className="font-display text-[1.12rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors"
                      >
                        +91 8550983678
                        <span className="ml-2 text-xs font-mono font-normal text-nova-600">(Primary / WhatsApp)</span>
                      </a>
                      <a
                        href="tel:+917276817964"
                        className="font-display text-[1.12rem] font-semibold tracking-tight text-ink hover:text-forest-700 transition-colors"
                      >
                        +91 7276817964
                        <span className="ml-2 text-xs font-mono font-normal text-charcoal-500">(Direct Line)</span>
                      </a>
                    </div>
                    <p className="mt-2.5 text-[0.86rem] leading-[1.7] text-ink-muted">
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
              <div className="relative rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start gap-4">
                  <div className="ds-icon ds-icon--xl ds-icon--outline flex-shrink-0">
                    <Icon name="clock" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500 mb-2">
                      Business hours
                    </div>
                    <ul className="divide-y divide-line/70">
                      {[
                        { d: 'Monday — Friday', h: '09:00 – 18:30 IST', open: true },
                        { d: 'Saturday', h: '10:00 – 15:00 IST (Projects only)', open: true },
                        { d: 'Sunday & Public holidays', h: 'Closed', open: false },
                      ].map((day) => (
                        <li key={day.d} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                          <span className="text-[0.92rem] font-medium text-ink">{day.d}</span>
                          <span className={['text-[0.86rem]', day.open ? 'text-ink-muted' : 'text-charcoal-500'].join(' ')}>
                            {day.h}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[0.8rem] leading-[1.7] text-charcoal-500">
                      Site and project teams operate outside standard hours as required by site construction and commissioning schedules.
                    </p>
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
                      A short description is enough for us to scope the first conversation. We will respond within two business days and route your enquiry to the most relevant engineering and commercial leads.
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
                        We have received your enquiry and our team will respond within two business days. For urgent matters, please write to{' '}
                        <a href={`mailto:${COMPANY.email}`} className="font-semibold text-forest-700 hover:underline">
                          {COMPANY.email}
                        </a>
                        {' '}or message us on{' '}
                        <a href={COMPANY.whatsapp.href} className="font-semibold text-forest-700 hover:underline">
                          WhatsApp
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
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldInput
                          label="Full name"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                          autoComplete="name"
                        />
                        <FieldInput
                          label="Company / Organisation"
                          name="company"
                          id="company"
                          type="text"
                          placeholder="Company name"
                          autoComplete="organization"
                        />
                        <FieldInput
                          label="Business email"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                          autoComplete="email"
                        />
                        <FieldInput
                          label="Phone (with country code)"
                          name="phone"
                          id="phone"
                          type="tel"
                          placeholder="+91 98000 00000"
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
                        placeholder="A short description: scope, scale (MW / TPD / TPD), location, timeline and the stage (concept / feasibility / tender / execution) is a great starting point."
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FieldInput
                          label="Project location (city / state)"
                          name="location"
                          id="location"
                          type="text"
                          placeholder="e.g. Kutch, Gujarat"
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
                              I agree that my information may be used by {COMPANY.shortName} to respond to this enquiry and for related legitimate business purposes, in line with the company\'s data-handling practices.
                            </>
                          }
                        />
                        <Checkbox
                          id="newsletter"
                          name="newsletter"
                          label="Subscribe me to occasional capability & thought leadership updates (max 1–2 per quarter, unsubscribe anytime)."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2">
                        <p className="text-[0.8rem] leading-[1.7] text-charcoal-500">
                          Fields marked with <span className="text-charcoal-500">*</span> are required.
                          <br className="hidden sm:block" />
                          For urgent matters, email{' '}
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
                            {submitting ? 'Sending enquiry…' : 'Send enquiry'}
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
