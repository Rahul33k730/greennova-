import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import Icon from './Icon';
import type { ButtonVariant, ButtonSize, IconName } from '@/types/design-system';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  inverted?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  children?: ReactNode;
  /** Disabled state for buttons — also suppresses click via native disabled attr */
  disabled?: boolean;
  /** Loading state — shows a spinner; also disables the button */
  loading?: boolean;
  loadingLabel?: string;
  /** Accessible label when only icon is shown (size="icon") — for non-icon buttons it becomes aria-describedby */
  ariaLabel?: string;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & { as?: 'button' };
type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'ds-btn--primary',
  accent: 'ds-btn--accent',
  ghost: 'ds-btn--ghost',
  outline: 'ds-btn--outline',
  text: 'ds-btn--text',
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: 'ds-btn--sm',
  md: '',
  lg: 'ds-btn--lg',
  icon: 'ds-btn--icon',
};

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    inverted = false,
    iconLeft,
    iconRight,
    fullWidth = false,
    children,
    className = '',
    disabled = false,
    loading = false,
    loadingLabel,
    ariaLabel,
    as = 'button',
    ...rest
  } = props;

  const isDisabled = as === 'button' ? disabled || loading : false;

  const classes = [
    'ds-btn',
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    inverted ? 'ds-btn--inverted' : '',
    fullWidth ? 'ds-btn--full' : '',
    loading ? 'is-loading pointer-events-none opacity-80' : '',
    disabled ? 'is-disabled opacity-60 cursor-not-allowed pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const spinnerIcon = (
    <svg
      className={['animate-spin', size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'].join(' ')}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
      />
    </svg>
  );

  const content = (
    <>
      {loading ? spinnerIcon : iconLeft ? (
        <Icon name={iconLeft} size={size === 'sm' ? 14 : size === 'lg' ? 22 : 18} />
      ) : null}
      {size !== 'icon' && children}
      {!loading && iconRight && (
        <Icon name={iconRight} size={size === 'sm' ? 14 : size === 'lg' ? 22 : 18} />
      )}
    </>
  );

  if (as === 'a') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal =
      anchorProps.target === '_blank' ||
      (typeof anchorProps.href === 'string' &&
        (anchorProps.href.startsWith('http://') ||
          anchorProps.href.startsWith('https://') ||
          anchorProps.href.startsWith('//')));

    const rel = isExternal
      ? anchorProps.rel
        ? anchorProps.rel
        : 'noopener noreferrer'
      : anchorProps.rel;

    return (
      <a
        className={classes}
        aria-label={ariaLabel}
        {...anchorProps}
        rel={rel}
      >
        {loading && loadingLabel ? (
          <span className="contents">
            {spinnerIcon}
            <span className="ml-2">{loadingLabel}</span>
          </span>
        ) : (
          content
        )}
      </a>
    );
  }

  const btnProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  // Default type="button" — avoids accidental form submits in uncontrolled contexts
  const type = (btnProps.type ?? 'button') as 'button' | 'submit' | 'reset';
  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading ? 'true' : undefined}
      {...btnProps}
    >
      {loading && loadingLabel ? (
        <span className="contents">
          {spinnerIcon}
          <span className="ml-2">{loadingLabel}</span>
        </span>
      ) : (
        content
      )}
    </button>
  );
}
