import type { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { COMPANY } from '@/data/site';
import useReveal from '@/hooks/useReveal';

export interface SiteShellProps {
  transparentNav?: boolean;
  children: ReactNode;
  /** If false, disables scroll-reveal animation (performance/motion-friendly) */
  enableReveal?: boolean;
}

export default function SiteShell({ transparentNav = false, children, enableReveal = true }: SiteShellProps) {
  const ref = useReveal<HTMLDivElement>({
    selector: '.reveal-up',
    staggerMs: 50,
    threshold: 0.08,
    disabled: !enableReveal,
  });

  return (
    <div id="top" className="bg-paper text-ink min-h-screen antialiased overflow-x-hidden" ref={ref}>
      {/* A11y skip-to-main */}
      <a href="#main-content" className="ds-skip-link sr-only-focusable">
        Skip to main content
      </a>

      <Navbar transparent={transparentNav} />

      <main id="main-content" role="main" tabIndex={-1} className="outline-none page-enter">
        {children}
      </main>

      <Footer
        address={COMPANY.registeredOffice ?? `${COMPANY.name} — PAN India`}
        email={COMPANY.email ?? undefined}
        phone={COMPANY.phone ?? undefined}
      />

      <ScrollToTop />
    </div>
  );
}
