import { useState } from 'react';
import Icon from '../primitives/Icon';
import LegalModal, { type LegalTab } from '../blocks/LegalModal';
import { COMPANY } from '@/data/site';

const SERVICE_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Renewable Hybrid Energy', href: '/services/renewable-hybrid-energy' },
  { label: 'Environmental Engineering', href: '/services/environmental-engineering' },
  { label: 'Green Hydrogen', href: '/services/green-hydrogen' },
  { label: 'Compressed Biogas', href: '/services/compressed-biogas' },
  { label: 'Waste-to-Energy', href: '/services/waste-to-energy' },
  { label: 'Sustainability Advisory', href: '/services/sustainability-advisory' },
];

const COMPANY_LINKS: Array<{ label: string; href: string }> = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS: Array<{ label: 'linkedin' | 'twitter' | 'facebook' | 'youtube'; href: string }> = [
  { label: 'linkedin', href: 'https://www.linkedin.com/company/greennovaenergy' },
  { label: 'twitter', href: 'https://twitter.com/greennovaenergy' },
  { label: 'facebook', href: 'https://www.facebook.com/greennovaenergy' },
  { label: 'youtube', href: 'https://www.youtube.com/@greennovaenergy' },
];

export interface FooterProps {
  brandTagline?: string;
  address?: string;
  email?: string;
  phone?: string;
}

const SOCIAL_LABEL_MAP: Record<string, string> = {
  linkedin: 'LinkedIn',
  twitter: 'X (Twitter)',
  facebook: 'Facebook',
  youtube: 'YouTube',
};

export default function Footer({
  brandTagline = 'Engineered for a sustainable tomorrow — delivering clean energy and environmental solutions across the nation.',
  address = COMPANY.registeredOffice,
  email = COMPANY.email,
  phone = COMPANY.phone,
}: FooterProps) {
  const year = new Date().getFullYear();
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab | null>(null);

  return (
    <footer className="ds-footer" role="contentinfo" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="ds-container ds-footer__top">
        <div className="ds-footer__about">
          <a
            href="#top"
            className="ds-footer__brand inline-flex items-center gap-3.5"
            aria-label="Green Nova — return to top of page"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white p-1.5 shadow-md">
              <img
                src="/brand/logo-emblem.png"
                alt="Green Nova Logo"
                className="h-full w-full object-contain"
                width={48}
                height={48}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-xl font-bold text-white tracking-tight leading-tight">Green Nova</span>
              <span className="text-[0.7rem] uppercase tracking-wider text-nova-300 font-medium">Energy &amp; Environment Solutions</span>
            </div>
          </a>
          <p>{brandTagline}</p>
          <ul className="ds-footer__socials flex items-center gap-3 mt-6 !p-0 !list-none" aria-label="Social media links">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label} className="!m-0 !p-0 flex items-center justify-center">
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer nofollow' : undefined}
                  aria-label={`${SOCIAL_LABEL_MAP[s.label]} (opens in a new tab)`}
                  className="ds-icon ds-icon--dark !p-0 inline-flex items-center justify-center min-w-[44px] min-h-[44px] transition-all duration-200 hover:-translate-y-0.5 hover:text-white touch-manipulation"
                >
                  <Icon name={s.label} size={18} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Services navigation in footer">
          <h4>Services</h4>
          <ul>
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company navigation in footer">
          <h4>Company</h4>
          <ul>
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading">
          <h4 id="footer-contact-heading">Contact &amp; HQ</h4>
          <address className="not-italic space-y-3.5 !text-white/70 text-[0.88rem]">
            <div className="flex items-start gap-3">
              <span className="ds-icon ds-icon--dark mt-0.5 flex-shrink-0" style={{ width: '2rem', height: '2rem' }} aria-hidden>
                <Icon name="location" size={14} />
              </span>
              <span className="leading-relaxed">{address}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="ds-icon ds-icon--dark mt-0.5 flex-shrink-0" style={{ width: '2rem', height: '2rem' }} aria-hidden>
                <Icon name="mail" size={14} />
              </span>
              <a href={`mailto:${email}`} className="break-all hover:text-white transition-colors" aria-label={`Email ${email}`}>{email}</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="ds-icon ds-icon--dark mt-0.5 flex-shrink-0" style={{ width: '2rem', height: '2rem' }} aria-hidden>
                <Icon name="phone" size={14} />
              </span>
              <div className="flex flex-col gap-1">
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors" aria-label={`Call ${phone}`}>
                  {phone}
                </a>
                {COMPANY.phoneSecondary ? (
                  <a href={`tel:${COMPANY.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-white transition-colors" aria-label={`Call ${COMPANY.phoneSecondary}`}>
                    {COMPANY.phoneSecondary}
                  </a>
                ) : null}
              </div>
            </div>
          </address>
        </section>
      </div>

      <div className="ds-container ds-footer__bottom">
        <div>© {year} {COMPANY.name}. All rights reserved.</div>
        <nav className="ds-footer__legal flex flex-wrap gap-4 text-xs" aria-label="Legal information">
          <button
            type="button"
            onClick={() => setActiveLegalTab('privacy')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline touch-manipulation"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setActiveLegalTab('terms')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline touch-manipulation"
          >
            Terms of Use
          </button>
          <button
            type="button"
            onClick={() => setActiveLegalTab('cookies')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline touch-manipulation"
          >
            Cookie Policy
          </button>
        </nav>
      </div>

      {/* DPDP Act 2023 & Institutional Governance Modal */}
      <LegalModal
        isOpen={activeLegalTab !== null}
        activeTab={activeLegalTab ?? 'privacy'}
        onClose={() => setActiveLegalTab(null)}
        onTabChange={(tab) => setActiveLegalTab(tab)}
      />
    </footer>
  );
}
