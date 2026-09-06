import type { HTMLAttributes, ReactNode } from 'react';
import type { CardVariant } from '@/types/design-system';
import Icon from './Icon';
import type { IconName } from '@/types/design-system';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  media?: ReactNode;
  eyebrow?: string;
  icon?: IconName;
  iconVariant?: 'nova' | 'forest' | 'gold' | 'outline' | 'dark';
  title?: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

const VARIANT_CLASS: Record<CardVariant, string> = {
  default: '',
  elevated: 'ds-card--elevated',
  premium: 'ds-card--premium',
  dark: 'ds-card--dark',
};

const ICON_VARIANT: Record<NonNullable<CardProps['iconVariant']>, string> = {
  nova: '',
  forest: 'ds-icon--forest',
  gold: 'ds-icon--gold',
  outline: 'ds-icon--outline',
  dark: 'ds-icon--dark',
};

export default function Card({
  variant = 'default',
  media,
  eyebrow,
  icon,
  iconVariant = 'nova',
  title,
  description,
  footer,
  children,
  className = '',
  ...rest
}: CardProps) {
  const classes = ['ds-card', VARIANT_CLASS[variant], className].join(' ').trim();

  return (
    <div className={classes} {...rest}>
      {media && <div className="ds-card__media">{media}</div>}

      {icon && !media && (
        <div className={`ds-icon ds-icon--lg ${ICON_VARIANT[iconVariant]} mb-5`}>
          <Icon name={icon} size={24} />
        </div>
      )}

      {eyebrow && <span className="ds-card__eyebrow">{eyebrow}</span>}
      {title && <h3 className="ds-card__title">{title}</h3>}
      {description && <p className="ds-card__text">{description}</p>}

      {children && <div className={title || description ? 'mt-5' : ''}>{children}</div>}

      {footer && <div className="ds-card__footer">{footer}</div>}
    </div>
  );
}
