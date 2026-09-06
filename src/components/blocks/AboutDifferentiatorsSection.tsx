import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import useReveal from '@/hooks/useReveal';

interface DifferentiatorCard {
  number: string;
  icon: 'globe' | 'shield' | 'award';
  title: string;
  description: string;
  techChips?: string[];
}

const CARDS: DifferentiatorCard[] = [
  {
    number: '01',
    icon: 'globe',
    title: 'BUILT FOR BHARAT',
    description:
      "Designed around India's grid, climate, feedstock, infrastructure and operating realities.",
  },
  {
    number: '02',
    icon: 'shield',
    title: 'TECHNOLOGY AGNOSTIC',
    description:
      'We select the right technology for the project instead of forcing every project into the same technology.',
    techChips: ['PEM', 'AEM', 'Alkaline', 'Anaerobic Digestion', 'Gas Upgrading', 'ZLD'],
  },
  {
    number: '03',
    icon: 'award',
    title: 'BANKABLE DELIVERY',
    description:
      'Engineering, EPC, O&M and project structures designed to support confident investment and long-term asset performance.',
  },
];

export default function AboutDifferentiatorsSection() {
  const rootRef = useReveal<HTMLElement>({
    staggerMs: 100,
    threshold: 0.1,
  });

  return (
    <section
      ref={rootRef}
      id="differentiators"
      className="ds-section bg-paper"
      aria-labelledby="diff-title"
    >
      <div className="ds-container">
        <div className="mb-14 lg:mb-16 max-w-3xl mx-auto text-center reveal-up">
          <SectionHeader
            eyebrow="03 — CORE DIFFERENTIATORS"
            title="THREE THINGS THAT MAKE GREEN NOVA DIFFERENT"
            align="center"
          />
        </div>

        <div className="ds-grid-3">
          {CARDS.map((card) => (
            <article
              key={card.number}
              className="ds-card card-illuminate reveal-up relative group overflow-hidden p-8 lg:p-9 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-corp"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(500px circle at 50% -10%, rgba(34,184,113,0.10), transparent 60%)',
                }}
              />

              <div
                aria-hidden
                className="absolute top-6 right-7 font-mono text-[0.72rem] font-semibold tracking-[0.2em] text-nova-500/70"
              >
                {card.number}
              </div>

              <div className="relative z-10">
                <div className="ds-icon ds-icon--lg mb-7" style={{ background: 'rgba(34,184,113,0.08)' }}>
                  <Icon name={card.icon} size={26} className="text-nova-600" />
                </div>

                <h3
                  id="diff-title"
                  className="font-display font-semibold tracking-tight leading-[1.1] text-[clamp(1.35rem,1.1vw+1rem,1.75rem)] text-ink mb-4"
                >
                  {card.title}
                </h3>

                <p className="text-ink-muted leading-[1.75] text-[0.95rem] mb-6">
                  {card.description}
                </p>

                {card.techChips && card.techChips.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-line/70">
                    {card.techChips.map((chip) => (
                      <span key={chip} className="tech-chip text-[0.62rem]">
                        <span className="tech-chip__dot" />
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
