import { useEffect } from 'react';
import Icon from '@/components/primitives/Icon';
import { COMPANY } from '@/data/site';

export type LegalTab = 'privacy' | 'terms' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onTabChange: (tab: LegalTab) => void;
}

export default function LegalModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl border border-line bg-white shadow-2xl overflow-hidden flex flex-col max-h-[88vh] z-10 animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-4 bg-paper/60 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-forest-50 border border-forest-200/60 flex items-center justify-center text-forest-800">
              <Icon name="shield" size={16} />
            </div>
            <div>
              <h2 id="legal-modal-title" className="font-display text-base font-semibold text-forest-950 leading-tight">
                Governance &amp; Statutory Disclosures
              </h2>
              <span className="text-[0.72rem] text-ink-muted">
                {COMPANY.legalName} • CIN: {COMPANY.cin}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-charcoal-400 hover:text-ink hover:bg-paper-grey transition-colors touch-manipulation"
            aria-label="Close dialog"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-line bg-paper/30 px-6 gap-2 pt-2">
          <button
            type="button"
            onClick={() => onTabChange('privacy')}
            className={`pb-3 px-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 touch-manipulation ${
              activeTab === 'privacy'
                ? 'border-forest-900 text-forest-900'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onTabChange('terms')}
            className={`pb-3 px-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 touch-manipulation ${
              activeTab === 'terms'
                ? 'border-forest-900 text-forest-900'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            Terms of Use
          </button>
          <button
            type="button"
            onClick={() => onTabChange('cookies')}
            className={`pb-3 px-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 touch-manipulation ${
              activeTab === 'cookies'
                ? 'border-forest-900 text-forest-900'
                : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            Cookie Policy
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-ink-light leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-forest-950">
                Data Privacy Policy (DPDP Act 2023 Aligned)
              </h3>
              <p className="text-xs text-charcoal-500">
                Last updated: October 2026 • Effective for PAN India operations
              </p>
              <p>
                <strong>Green Nova Energy and Environment Solutions Private Limited</strong> is committed to handling project inquiries and candidate data with institutional integrity in accordance with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023.
              </p>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                1. Data Collected
              </h4>
              <p>
                We only collect information voluntarily submitted through our Contact and Career portals:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-ink-muted text-xs">
                <li>Contact Information: Full name, company affiliation, official email, telephone number, and project location.</li>
                <li>Hiring &amp; Recruitment Data: Resumes, professional qualifications, employment history, and portfolio credentials.</li>
              </ul>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                2. Purpose of Processing
              </h4>
              <p>
                Information is utilized solely for technical scoping, DPR preparation, proposal evaluations, regulatory compliance, and recruitment assessment. We never sell, rent, or lease personal information to third-party commercial marketing entities.
              </p>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                3. Security Safeguards
              </h4>
              <p>
                All data in transit is protected using modern TLS encryption. Uploaded documents are restricted to designated human resources and engineering evaluation leadership.
              </p>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                4. Data Principal Rights &amp; Grievance Redressal
              </h4>
              <p>
                Under the DPDP Act 2023, data principals have the right to request access, correction, or erasure of their personal data by contacting our compliance desk at{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-forest-800 underline font-semibold">
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-forest-950">
                Terms of Use &amp; Professional Disclaimers
              </h3>
              <p className="text-xs text-charcoal-500">
                Applicable to all visitors and prospective partners of greennovaenergy.in
              </p>
              <p>
                The materials, metrics, case studies, and calculators on this website are provided by Green Nova Energy &amp; Environment Solutions for general informational and feasibility scoping purposes.
              </p>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                1. Engineering Feasibility &amp; Project Bankability
              </h4>
              <p>
                Project metrics produced by interactive tools (such as the Decarbonisation Calculator) are simulated estimates based on standard Indian benchmark coefficients (CEA emission baselines, solar-wind generation curves, and generic biomass yields). They do not constitute binding engineering guarantees or formal bankable DPR sign-offs until validated through a formal contractual agreement.
              </p>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                2. Intellectual Property
              </h4>
              <p>
                All brand logos, proprietary process flow diagrams, and site copy are the intellectual property of {COMPANY.legalName}. Unauthorized replication is strictly prohibited.
              </p>
              <h4 className="font-semibold text-forest-900 text-xs uppercase tracking-wider mt-4">
                3. Jurisdiction
              </h4>
              <p>
                Any legal dispute arising in relation to this platform is governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra.
              </p>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-forest-950">
                Cookie &amp; Storage Notice
              </h3>
              <p className="text-xs text-charcoal-500">
                Last reviewed: October 2026
              </p>
              <p>
                Green Nova Energy adheres to minimal, privacy-first web standards:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ink-muted text-xs">
                <li>
                  <strong className="text-forest-900">Zero Non-Essential Trackers:</strong> We do not deploy third-party advertising cookies, invasive retargeting pixels, or cross-site tracking scripts.
                </li>
                <li>
                  <strong className="text-forest-900">Strictly Necessary Storage:</strong> We only utilize native browser sessionStorage/localStorage to retain harmless UI preferences (such as submission confirmation status or reduced-motion accessibility settings).
                </li>
              </ul>
              <p className="text-xs text-ink-muted mt-4">
                You can clear cached data anytime via your browser settings without impacting core website accessibility.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-line px-6 py-4 bg-paper/60 flex items-center justify-between">
          <span className="text-xs text-ink-muted">
            HQ: {COMPANY.registeredOffice}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-semibold px-5 py-2.5 transition-colors touch-manipulation"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
