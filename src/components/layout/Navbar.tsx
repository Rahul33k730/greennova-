import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../primitives/Button';
import Icon from '../primitives/Icon';
import { NAV_LINKS, COMPANY, CTA } from '@/data/site';

export interface NavbarProps {
  transparent?: boolean;
  showCTA?: boolean;
}

export default function Navbar({
  transparent = false,
  showCTA = true,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const loc = useLocation();
  const firstFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ESC to close mobile menu / dropdowns
  useEffect(() => {
    if (!menuOpen && !openDropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, openDropdown]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (!menuOpen) return;
    const prevStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevStyle;
    };
  }, [menuOpen]);

  const translucent = transparent && !scrolled;
  const contactHref = CTA.primary.href;

  const getNavLinkClass = (isActive: boolean) =>
    [
      'ds-nav-link transition-colors duration-250 ease-snappy inline-flex items-center gap-1',
      translucent ? 'text-white/85 hover:text-white' : 'text-ink-light hover:text-forest-700',
      isActive
        ? translucent
          ? 'text-white font-semibold'
          : 'text-forest-900 font-semibold'
        : '',
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-400 ease-corp',
        translucent
          ? 'bg-transparent'
          : 'bg-paper/95 backdrop-blur-xl backdrop-saturate-150 border-b border-line',
      ].join(' ')}
      role="banner"
    >
      <div
        className="ds-container ds-nav__inner"
        style={{ height: 'var(--nav-height)' }}
      >
        <NavLink
          to="/"
          aria-label={`${COMPANY.shortName} — Home`}
          ref={firstFocusRef as React.RefObject<HTMLAnchorElement>}
          className={[
            'ds-logo transition-colors duration-250 ease-snappy inline-flex items-center gap-3',
            translucent ? 'text-white' : 'text-ink',
          ].join(' ')}
        >
          <div className="relative flex items-center justify-center h-12 w-12 rounded-2xl bg-white/95 p-1.5 shadow-sm ring-1 ring-black/5 backdrop-blur-md">
            <img
              src="/brand/logo-emblem.png"
              alt="Green Nova Logo"
              className="h-full w-full object-contain"
              width={48}
              height={48}
              loading="eager"
            />
          </div>
          <span className="ds-logo__lockup flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">{COMPANY.shortName}</span>
            <span
              className={[
                'ds-logo__tagline transition-colors duration-250 ease-snappy text-[0.72rem] tracking-wider uppercase font-semibold mt-0.5',
                translucent ? 'text-white/80' : 'text-forest-700',
              ].join(' ')}
            >
              Energy &amp; Environment
            </span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="ds-nav-links">
            {NAV_LINKS.map((l) => (
              <li
                key={l.href}
                className="relative flex items-center"
                onMouseEnter={() => l.children && setOpenDropdown(l.href)}
                onMouseLeave={() => l.children && setOpenDropdown(null)}
                onFocus={() => l.children && setOpenDropdown(l.href)}
                onBlur={(e) => {
                  if (l.children && !e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  aria-haspopup={l.children ? 'true' : undefined}
                  aria-expanded={l.children ? (openDropdown === l.href ? 'true' : 'false') : undefined}
                >
                  {l.label}
                  {l.children && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform ${
                        openDropdown === l.href ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    >
                      <path
                        d="M2.5 4.5L6 8l3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </NavLink>

                {l.children && (
                  <div
                    className={[
                      'absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[22rem] transition-all duration-250 ease-snappy',
                      openDropdown === l.href
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none',
                    ].join(' ')}
                    role="menu"
                  >
                    <div className="rounded-xl border border-line bg-white/95 backdrop-blur-xl shadow-xl p-2">
                      <ul className="flex flex-col">
                        {l.children.map((c) => (
                          <li key={c.href} role="none">
                            <NavLink
                              to={c.href}
                              role="menuitem"
                              className={({ isActive }) =>
                                [
                                  'block px-3.5 py-2.5 rounded-lg text-[0.9rem] leading-snug transition-colors',
                                  isActive
                                    ? 'bg-nova-50 text-forest-800 font-semibold'
                                    : 'text-ink-light hover:bg-paper-grey hover:text-ink',
                                ].join(' ')
                              }
                            >
                              {c.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex ds-nav__actions">
          {showCTA && (
            <Button
              as="a"
              href={contactHref}
              variant={translucent ? 'accent' : 'primary'}
              size="sm"
              iconRight="arrow-right"
            >
              Get in touch
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={[
            'ds-btn ds-btn--icon ds-btn--ghost lg:hidden',
            translucent ? 'border-white/20 text-white hover:bg-white/10' : '',
          ].join(' ')}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu-panel"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu-panel"
        className={[
          'lg:hidden ds-container pb-6 bg-paper/98 backdrop-blur-xl border-t border-line transition-[opacity,max-height,transform] duration-300 ease-corp overflow-hidden',
          menuOpen ? 'opacity-100 max-h-[80vh] translate-y-0' : 'opacity-0 max-h-0 -translate-y-1 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile primary">
          <ul className="flex flex-col gap-1 pt-5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-md px-3 py-3 text-[1rem] font-medium transition-colors',
                      isActive
                        ? 'bg-nova-50 text-forest-800 font-semibold'
                        : 'text-ink-light hover:bg-paper-grey hover:text-ink',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
                {l.children && (
                  <ul className="mt-1 ml-4 pl-3 border-l border-line flex flex-col gap-1 pb-1" aria-label={`${l.label} submenu`}>
                    {l.children.map((c) => (
                      <li key={c.href}>
                        <NavLink
                          to={c.href}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            [
                              'block rounded-md px-3 py-2 text-[0.9rem] transition-colors',
                              isActive
                                ? 'bg-nova-50 text-forest-800 font-semibold'
                                : 'text-ink-muted hover:bg-paper-grey hover:text-ink',
                            ].join(' ')
                          }
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {showCTA && (
            <div className="mt-5">
              <Button
                as="a"
                href={contactHref}
                variant="primary"
                fullWidth
                iconRight="arrow-right"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
