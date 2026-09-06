import type { ReactNode } from 'react';
import type { SectionProps } from '@/types/design-system';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  eyebrowVariant?: 'default' | 'gold';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  eyebrowVariant = 'default',
}: SectionHeaderProps) {
  return (
    <div
      className={`ds-section-head ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className={`ds-eyebrow ${eyebrowVariant === 'gold' ? 'ds-eyebrow--gold' : ''} ${align === 'center' ? 'justify-center' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="ds-section-head__title text-balance">{title}</h2>
      {subtitle && <p className="ds-section-head__subtitle">{subtitle}</p>}
    </div>
  );
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = '',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`ds-section ${className}`.trim()}>
      <div className="ds-container">
        {(eyebrow || title || subtitle) && (
          <div className="mb-14 lg:mb-16">
            <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
          </div>
        )}
        {children as ReactNode}
      </div>
    </section>
  );
}
