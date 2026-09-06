import Card from '@/components/primitives/Card';
import { SectionHeader } from '@/components/section/Section';
import { ABOUT } from '@/data/site';
import type { IconName } from '@/types/design-system';

/**
 * About Green Nova — professional company introduction
 * + 3 premium feature cards (Built for Bharat / Technology Agnostic / Bankable Delivery)
 */
export default function AboutSection() {
  return (
    <section id="about" className="ds-section" aria-labelledby="about-title">
      <div className="ds-container">
        {/* Top Header: Balanced 2-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7 reveal-up">
            <SectionHeader
              eyebrow={ABOUT.eyebrow}
              title={ABOUT.title}
              align="left"
            />
          </div>
          <div className="lg:col-span-5 reveal-up">
            <p className="text-[1.08rem] leading-[1.8] text-ink-muted">
              {ABOUT.subtitle}
            </p>
          </div>
        </div>

        {/* Three feature cards */}
        <div className="ds-grid-3 reveal-up">
          {ABOUT.features.map((f, i) => (
            <Card
              key={f.title}
              variant={i === 1 ? 'elevated' : 'default'}
              eyebrow={f.eyebrow}
              icon={f.icon as IconName}
              iconVariant={
                i === 0 ? 'forest' : i === 1 ? 'nova' : 'gold'
              }
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
