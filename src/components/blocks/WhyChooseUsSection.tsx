import Card from '@/components/primitives/Card';
import { SectionHeader } from '@/components/section/Section';
import { WHY } from '@/data/site';
import type { IconName } from '@/types/design-system';

/**
 * Why Choose Green Nova — 6 premium feature cards in 3×2 grid
 */
export default function WhyChooseUsSection() {
  return (
    <section id="why" className="ds-section bg-paper-warm" aria-labelledby="why-title">
      <div className="ds-container">
        <div className="mb-16 lg:mb-20 max-w-3xl mx-auto text-center reveal-up">
        <SectionHeader
          eyebrow={WHY.eyebrow}
          title={WHY.title}
          subtitle={WHY.subtitle}
          align="center"
        />
        </div>

        <div className="ds-grid-3 reveal-up">
          {WHY.features.map((f, i) => (
            <Card
              key={f.title}
              variant={i === 0 ? 'premium' : 'default'}
              icon={f.icon as IconName}
              iconVariant={i === 0 ? 'gold' : i === 2 || i === 4 ? 'forest' : 'nova'}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
