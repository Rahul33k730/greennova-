import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';
import type { IconName } from '@/types/design-system';

/* ===========================================================
   PAGE HERO — Used as a consistent header block for every
   non-homepage page. Identical spacing and typography system.
   =========================================================== */
export interface PageHeroProps {
  eyebrow?: string;
  eyebrowVariant?: 'default' | 'gold';
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; to?: string }>;
  /** Optional background image — if provided, renders as dark hero */
  backgroundImage?: string;
  /** Optional CTAs */
  primaryCta?: { label: string; to: string; icon?: IconName };
  secondaryCta?: { label: string; to: string; icon?: IconName };
  /** If background image present, set dark to false if you want overlay */
  dark?: boolean;
}

export function PageHero({
  eyebrow,
  eyebrowVariant = 'default',
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  primaryCta,
  secondaryCta,
  dark = !!backgroundImage,
}: PageHeroProps) {
  const hasImage = !!backgroundImage;
  return (
    <section
      className={[
        'relative isolate w-full overflow-hidden',
        hasImage ? 'min-h-[62vh] flex items-end lg:items-center pt-[calc(var(--nav-height)+4rem)] pb-section-lg' : 'pt-[calc(var(--nav-height)+5rem)] pb-16 md:pb-20 lg:pb-28',
      ].join(' ')}
    >
      {hasImage && (
        <>
          <div className="absolute inset-0 -z-20" aria-hidden>
            <img
              src={backgroundImage!}
              alt=""
              role="presentation"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className={[
              'absolute inset-0 -z-10',
              dark
                ? 'bg-gradient-to-b from-forest-950/70 via-forest-950/55 to-forest-900/90'
                : 'bg-gradient-to-b from-forest-900/40 to-forest-900/80',
            ].join(' ')}
          />
        </>
      )}

      {!hasImage && (
        <>
          <div aria-hidden className="absolute inset-0 surface-grid opacity-25 mask-fade-b pointer-events-none -z-10" />
          <div aria-hidden className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-nova-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div aria-hidden className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-gold-400/5 rounded-full blur-3xl pointer-events-none -z-10" />
        </>
      )}

      <div className="ds-container relative w-full">
        <div className="max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-[0.82rem] font-medium text-ink-muted">
                {breadcrumbs.map((b, i) => (
                  <li key={i} className="inline-flex items-center gap-2">
                    {b.to ? (
                      <NavLink
                        to={b.to}
                        className={[
                          hasImage ? 'text-white/75 hover:text-white' : 'text-ink-muted hover:text-ink',
                          'transition-colors inline-flex items-center leading-none',
                        ].join(' ')}
                      >
                        {b.label}
                      </NavLink>
                    ) : (
                      <span className={[hasImage ? 'text-white' : 'text-ink font-semibold', 'inline-flex items-center leading-none'].join(' ')}>
                        {b.label}
                      </span>
                    )}
                    {i < breadcrumbs.length - 1 && (
                      <Icon name="arrow-right" size={12} className={hasImage ? 'text-white/40' : 'text-charcoal-400'} />
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <span
              className={[
                'ds-eyebrow mb-4',
                eyebrowVariant === 'gold' ? 'ds-eyebrow--gold' : '',
                hasImage ? (eyebrowVariant === 'gold' ? '!text-gold-300' : '!text-nova-300') : '',
              ].join(' ')}
              style={hasImage ? { color: eyebrowVariant === 'gold' ? '#DDB87F' : '#83E5B3' } : undefined}
            >
              {eyebrow}
            </span>
          )}

          <h1
            className={[
              'font-display font-semibold leading-[1.06] tracking-[-0.035em] text-balance',
              hasImage ? 'text-white text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)]' : 'text-ink text-[clamp(2rem,3.5vw+0.5rem,3.75rem)]',
            ].join(' ')}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={[
                'mt-6 text-[1.08rem] leading-[1.8] max-w-2xl',
                hasImage ? 'text-white/78' : 'text-ink-muted',
              ].join(' ')}
            >
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button
                  as="a"
                  href={primaryCta.to}
                  variant={hasImage ? 'accent' : 'primary'}
                  size="lg"
                  iconRight={primaryCta.icon ?? 'arrow-right'}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  as="a"
                  href={secondaryCta.to}
                  variant="ghost"
                  size="lg"
                  inverted={hasImage}
                  iconRight={secondaryCta.icon}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================
   BENEFITS GRID — 3/4 columns of icon + benefit pairs
   =========================================================== */
export function BenefitGrid({ items, eyebrowAlign = 'right' }: { items: Array<{ icon?: IconName; iconVariant?: 'nova' | 'forest' | 'gold' | 'outline' | 'dark'; title: string; description: string; eyebrow?: string }>; eyebrowAlign?: 'left' | 'right' }) {
  const variantClass = (v?: string) =>
    v === 'forest' ? 'ds-icon--forest' : v === 'gold' ? 'ds-icon--gold' : v === 'outline' ? 'ds-icon--outline' : v === 'dark' ? 'ds-icon--dark' : 'ds-icon--nova';
  const cols = items.length <= 3 ? 'lg:grid-cols-3' : items.length === 4 ? 'lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';
  const headerJustify = eyebrowAlign === 'left' ? 'justify-start' : 'justify-between';
  const eyebrowOrder = eyebrowAlign === 'left' ? 'order-none' : 'ml-auto';
  return (
    <div className={`grid grid-cols-1 ${cols} gap-6 lg:gap-8`}>
      {items.map((it) => (
        <div
          key={it.title}
          className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-400 ease-corp hover:-translate-y-1 hover:shadow-lg hover:border-nova-400/30 flex flex-col justify-between"
        >
          <div>
            {(it.icon || it.eyebrow) && (
              <div className={`flex items-center ${headerJustify} gap-3 mb-5`}>
                {it.icon && (
                  <div className={`ds-icon ds-icon--lg ${variantClass(it.iconVariant)}`}>
                    <Icon name={it.icon} size={22} />
                  </div>
                )}
                {!it.icon && eyebrowAlign === 'right' && <div />}
                {it.eyebrow && (
                  <span className={`text-[0.7rem] font-semibold uppercase tracking-wider text-forest-700 bg-forest-50/80 px-2.5 py-1 rounded-full border border-forest-200/50 ${eyebrowOrder}`}>
                    {it.eyebrow}
                  </span>
                )}
              </div>
            )}
            <h3 className="font-display text-[1.18rem] font-semibold tracking-tight leading-snug mb-3 text-ink">
              {it.title}
            </h3>
            <p className="text-[0.92rem] leading-[1.75] text-ink-muted font-normal">{it.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===========================================================
   APPLICATIONS / INDUSTRIES GRID — uniform icon-tile pattern
   =========================================================== */
export function AppTileGrid({ items }: { items: Array<{ icon: IconName; name: string; detail?: string }> }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
      {items.map((it) => (
        <li
          key={it.name}
          className="group relative bg-white transition-all duration-300 ease-snappy hover:bg-forest-950 hover:shadow-xl hover:z-10"
        >
          <div className="p-6 lg:p-7 flex flex-col gap-3.5 h-full transition-all duration-300 group-hover:bg-forest-950">
            <div className="ds-icon ds-icon--outline ds-icon--md transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_16px_rgba(52,211,153,0.3)]">
              <Icon name={it.icon} size={20} />
            </div>
            <div>
              <h4 className="font-sans font-semibold tracking-tight text-[0.98rem] leading-snug text-ink transition-colors duration-250 group-hover:text-emerald-300">
                {it.name}
              </h4>
              {it.detail && (
                <p className="mt-1.5 text-[0.82rem] leading-snug text-ink-muted transition-colors duration-250 group-hover:text-emerald-100/80 font-normal">
                  {it.detail}
                </p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ===========================================================
   PROCESS STEPS — vertical or horizontal timeline of steps.
   Used by the "Process" section on every service detail page.
   Mirrors the homepage Technology / Roadmap styling exactly.
   =========================================================== */
export function ProcessSteps({ steps }: { steps: Array<{ phase: string; title: string; bullets: string[]; icon?: IconName }> }) {
  const total = steps.length;
  return (
    <ol className="relative list-none">
      {/* Horizontal track (lg+) */}
      <div aria-hidden className="hidden lg:block absolute top-14 left-10 right-10 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-3">
        {steps.map((s, i) => (
          <li key={s.phase} className="relative rounded-2xl border border-line bg-white p-7 transition-all duration-400 ease-corp hover:border-nova-400/40 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="ds-badge ds-badge--nova">{s.phase}</span>
                <span aria-hidden className="font-mono text-[0.72rem] font-semibold text-charcoal-400">
                  0{i + 1}/0{total}
                </span>
              </div>
              <div className="relative ds-icon ds-icon--xl ds-icon--forest mb-5">
                <Icon name={s.icon ?? 'check'} size={24} />
                <span
                  aria-hidden
                  className="hidden lg:block absolute -top-1 -right-1 h-3 w-3 rounded-full bg-nova-500 ring-4 ring-paper"
                />
              </div>
              <h3 className="font-display text-[1.12rem] font-semibold tracking-tight leading-snug mb-4 text-ink">
                {s.title}
              </h3>
              <ul className="space-y-2 text-[0.86rem] leading-[1.65] text-ink-muted">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Icon name="check" size={14} className="mt-1 flex-shrink-0 text-nova-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </div>
    </ol>
  );
}

/* ===========================================================
   FAQ BLOCK — Accordion-style (open/close single item).
   Used by every service detail page. Same icon system.
   =========================================================== */
import { useState } from 'react';

export function FAQBlock({ items }: { items: Array<{ q: string; a: string | ReactNode }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-line bg-white overflow-hidden divide-y divide-line shadow-xs">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="w-full flex items-start justify-between gap-6 text-left px-6 md:px-8 py-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-forest-50/40 active:bg-paper-grey active:scale-[0.995]"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-4 pt-0.5">
                <span
                  className={[
                    'flex-shrink-0 font-mono text-[0.78rem] font-semibold w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    isOpen ? 'bg-nova-500 text-forest-950 scale-105 shadow-xs' : 'bg-nova-50 text-nova-700',
                  ].join(' ')}
                >
                  Q{String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold tracking-tight text-[1.02rem] leading-[1.45] text-ink transition-colors duration-300">
                  {it.q}
                </span>
              </span>
              <div
                className={[
                  'mt-1 flex-shrink-0 text-forest-700 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  isOpen ? 'rotate-180 text-nova-600' : 'rotate-0',
                ].join(' ')}
              >
                <Icon
                  name={isOpen ? 'minus' : 'plus'}
                  size={18}
                />
              </div>
            </button>
            <div
              className={[
                'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <div
                  className={[
                    'px-6 md:px-8 pb-8 pl-[5.5rem] md:pl-[6.25rem] pr-6 md:pr-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
                  ].join(' ')}
                >
                  <div className="text-[0.96rem] leading-[1.8] text-ink-muted">
                    {typeof it.a === 'string' ? <p>{it.a}</p> : it.a}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================================================
   SERVICE CTA BLOCK — Dark premium CTA variant at the bottom
   of every service page. Identical treatment to homepage CTA.
   =========================================================== */
export function ServiceCTA({ headline, subcopy, primaryLabel = 'Start a project', primaryTo = '/contact', secondaryLabel = 'See all services', secondaryTo = '/services' }: { headline: string; subcopy: string; primaryLabel?: string; primaryTo?: string; secondaryLabel?: string; secondaryTo?: string }) {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="svc-cta-title">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950" />
      <div aria-hidden className="absolute inset-0 bg-grid-pattern opacity-[0.06] mask-fade-b pointer-events-none" />
      <div aria-hidden className="absolute -top-32 -right-20 w-[44rem] h-[44rem] rounded-full bg-gradient-to-br from-nova-500/20 via-nova-400/5 to-transparent blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-40 -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-gold-400/15 to-transparent blur-3xl pointer-events-none" />

      <div className="ds-container relative py-section-lg">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 lg:p-16 overflow-hidden">
          <div aria-hidden className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-nova-400/40 to-transparent" />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-nova-400/30 bg-nova-500/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-nova-200">
              <Icon name="leaf" size={12} />
              Next step
            </span>
            <h2
              id="svc-cta-title"
              className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-white text-balance text-[clamp(1.9rem,2.5vw+1rem,3rem)]"
            >
              {headline}
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8] text-white/72">{subcopy}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button as="a" href={primaryTo} variant="accent" size="lg" iconRight="arrow-right">
                {primaryLabel}
              </Button>
              <Button as="a" href={secondaryTo} variant="ghost" size="lg" inverted iconRight="globe">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
