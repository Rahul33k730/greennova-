import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import useReveal from '@/hooks/useReveal';
import type { IconName } from '@/types/design-system';

interface CommitmentCard {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  delay: string;
}

const CARDS: CommitmentCard[] = [
  {
    number: '01',
    icon: 'users',
    title: 'ONE ACCOUNTABLE PARTNER',
    description:
      'Engineering, integration, execution and O&M under one accountable framework.',
    delay: 'd-1',
  },
  {
    number: '02',
    icon: 'shield',
    title: 'BANKABILITY BUILT IN',
    description:
      'Project thinking structured around technical confidence, documentation and lifecycle performance.',
    delay: 'd-2',
  },
  {
    number: '03',
    icon: 'leaf',
    title: 'TECHNOLOGY WITH PURPOSE',
    description:
      'Technology is selected based on site conditions, feedstock, economics and operational requirements.',
    delay: 'd-3',
  },
  {
    number: '04',
    icon: 'clock',
    title: 'LIFECYCLE THINKING',
    description:
      'Design decisions consider construction, commissioning, operations, maintenance and long-term asset performance.',
    delay: 'd-4',
  },
];

export default function AboutWhyGreenNovaSection() {
  const rootRef = useReveal<HTMLElement>({
    staggerMs: 100,
    threshold: 0.1,
  });

  return (
    <section
      ref={rootRef}
      id="why-green-nova"
      className="ds-section bg-white relative overflow-hidden"
      aria-labelledby="why-green-nova-title"
    >
      <div aria-hidden className="absolute inset-0 tech-grid-bg opacity-50 pointer-events-none" />

      <div className="ds-container relative">
        <div className="mb-14 lg:mb-16 max-w-3xl mx-auto text-center reveal-up">
          <SectionHeader
            eyebrow="07 / WHY GREEN NOVA"
            title="WHY GREEN NOVA?"
            subtitle="Four commitments that make clients and investors trust our engineering."
            align="center"
          />
        </div>

        <div className="ds-grid-4 mb-16 lg:mb-20">
          {CARDS.map((card) => (
            <article
              key={card.number}
              className={`ds-card card-illuminate reveal-up ${card.delay} relative group overflow-hidden p-8 lg:p-9 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-corp bg-white`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(500px circle at 50% -10%, rgba(34,184,113,0.12), transparent 60%)',
                }}
              />

              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-nova-500/40 rounded-[inherit]"
              />

              <div className="relative z-10">
                <div
                  className="font-display font-bold text-nova-500 text-[2.75rem] leading-none mb-6 tracking-tight"
                >
                  {card.number}
                </div>

                <div className="ds-icon ds-icon--lg mb-7" style={{ background: 'rgba(34,184,113,0.08)' }}>
                  <Icon name={card.icon} size={26} className="text-nova-600" />
                </div>

                <h3
                  id="why-green-nova-title"
                  className="font-display font-bold tracking-tight leading-[1.15] text-[clamp(1.1rem,0.9vw+0.8rem,1.45rem)] text-ink mb-4"
                >
                  {card.title}
                </h3>

                <p className="text-ink-muted leading-[1.75] text-[0.93rem]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-up d-4 rounded-3xl border border-forest-900/20 bg-forest-950 p-10 lg:p-14 xl:p-16 text-white relative overflow-hidden">
          <div aria-hidden className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-nova-500/20 to-transparent blur-3xl pointer-events-none" />
          <div aria-hidden className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-gold-500/10 to-transparent blur-3xl pointer-events-none" />
          <div aria-hidden className="absolute inset-0 tech-grid-bg-dark opacity-35 pointer-events-none" />

          <div className="relative ds-grid-12 items-center gap-y-10 lg:gap-y-0">
            <div className="lg:col-span-12 lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span aria-hidden className="h-px w-10 bg-gold-400/70" />
                <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                  DESIGN AMBITION
                </span>
              </div>

              <div className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-[clamp(3rem,7vw,5rem)] text-white">
                25
                <span className="block text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.02em] text-nova-300 mt-1">
                  YEARS
                </span>
              </div>
            </div>

            <div className="lg:col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
              <div className="mb-5">
                <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold-300/90">
                  LIFECYCLE READINESS
                </span>
              </div>

              <h3 className="font-display font-semibold leading-[1.2] tracking-[-0.02em] text-white text-[clamp(1.35rem,1.4vw+0.8rem,2rem)] mb-5">
                A design and operational readiness concept, not an operating track record claim.
              </h3>

              <p className="text-white/70 leading-[1.8] text-[0.97rem] mb-7 max-w-xl">
                Every Green Nova system is engineered with a 25-year lifecycle horizon — from
                material selection and corrosion margins to modular replacement strategies,
                maintenance access planning and performance de-rating modelling. This is a design
                ambition that guides specifications, QA protocols and spares philosophy from day
                one.
              </p>

              <div className="flex items-start gap-3 pt-6 border-t border-white/10 max-w-xl">
                <div className="flex-shrink-0 h-6 w-6 rounded-md border border-gold-400/30 bg-gold-400/10 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gold-300" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-xs text-white/50 leading-[1.65] tracking-wide">
                  Framed as a design and operational readiness ambition for delivered assets.
                  Actual operational life depends on site conditions, maintenance practices,
                  feedstock quality, replacement of consumables and external factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
