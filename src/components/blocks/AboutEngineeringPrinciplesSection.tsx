import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import useReveal from '@/hooks/useReveal';
import type { IconName } from '@/types/design-system';

interface PrincipleCard {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  stagger: 'd-1' | 'd-2' | 'd-3' | 'd-4' | 'd-5' | 'd-6';
}

const PRINCIPLES: PrincipleCard[] = [
  {
    number: '01/06',
    icon: 'shield',
    title: 'ENGINEERING RIGOUR',
    description:
      'Engineering quality comes first — from concept to commissioning.',
    stagger: 'd-1',
  },
  {
    number: '02/06',
    icon: 'award',
    title: 'INDEPENDENT BY DESIGN',
    description:
      'Technology decisions are based on project requirements rather than unnecessary technology bias.',
    stagger: 'd-2',
  },
  {
    number: '03/06',
    icon: 'users',
    title: 'ONE ACCOUNTABLE PARTNER',
    description:
      'One integrated team from engineering through execution and O&M.',
    stagger: 'd-3',
  },
  {
    number: '04/06',
    icon: 'clock',
    title: 'TRANSPARENT GOVERNANCE',
    description:
      'Clear milestones, documentation, decision gates and accountability.',
    stagger: 'd-4',
  },
  {
    number: '05/06',
    icon: 'globe',
    title: 'BUILT FOR BHARAT',
    description:
      'Solutions designed around Indian environmental, climatic, operational and infrastructure conditions.',
    stagger: 'd-5',
  },
  {
    number: '06/06',
    icon: 'leaf',
    title: 'LIFECYCLE THINKING',
    description:
      'Every design decision considers long-term operation, maintenance and asset performance.',
    stagger: 'd-6',
  },
];

export default function AboutEngineeringPrinciplesSection() {
  const rootRef = useReveal<HTMLElement>({
    staggerMs: 0,
    threshold: 0.1,
  });

  return (
    <section
      ref={rootRef}
      id="engineering-principles"
      className="ds-section"
      aria-labelledby="principles-title"
    >
      <div className="ds-container">
        <div className="mb-14 lg:mb-16 max-w-3xl reveal-up">
          <SectionHeader
            eyebrow="09 / ENGINEERING PRINCIPLES"
            title="SIX PRINCIPLES THAT DEFINE HOW WE ENGINEER"
            subtitle="These are the non-negotiable commitments that govern every drawing, every procurement decision and every weld on a Green Nova site."
          />
        </div>

        <div className="ds-grid-3">
          {PRINCIPLES.map((card) => (
            <article
              key={card.number}
              className={`relative group bg-white border border-line rounded-2xl p-8 lg:p-9 overflow-hidden reveal-up ${card.stagger} transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:border-nova-400/50`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                style={{
                  background:
                    'radial-gradient(500px circle at 50% 0%, rgba(34,184,113,0.12), transparent 60%)',
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
                style={{
                  boxShadow:
                    '0 0 40px -12px rgba(34,184,113,0.25)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-7">
                  <div
                    aria-hidden
                    className="ds-icon ds-icon--md"
                    style={{ background: 'rgba(34,184,113,0.08)' }}
                  >
                    <Icon
                      name={card.icon}
                      size={24}
                      className="text-nova-600"
                    />
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-[0.7rem] font-semibold tracking-[0.2em] text-nova-500/70"
                  >
                    {card.number}
                  </span>
                </div>

                <h3
                  id="principles-title"
                  className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(1.25rem,1vw+0.9rem,1.65rem)] text-forest-950 mb-0"
                >
                  {card.title}
                </h3>

                <div
                  className="grid transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] grid-rows-[0fr] group-hover:grid-rows-[1fr] group-hover:mt-5"
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-muted leading-[1.75] text-[0.92rem]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-line overflow-hidden pointer-events-none"
              >
                <div className="w-full h-full bg-nova-500 origin-left scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
