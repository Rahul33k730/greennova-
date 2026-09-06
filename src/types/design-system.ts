export type ColorToken =
  | 'forest-50' | 'forest-100' | 'forest-200' | 'forest-300' | 'forest-400' | 'forest-500'
  | 'forest-600' | 'forest-700' | 'forest-800' | 'forest-900' | 'forest-950'
  | 'nova-50' | 'nova-100' | 'nova-200' | 'nova-300' | 'nova-400' | 'nova-500'
  | 'nova-600' | 'nova-700' | 'nova-800' | 'nova-900' | 'nova-950'
  | 'charcoal-50' | 'charcoal-100' | 'charcoal-200' | 'charcoal-300' | 'charcoal-400' | 'charcoal-500'
  | 'charcoal-600' | 'charcoal-700' | 'charcoal-800' | 'charcoal-900' | 'charcoal-950'
  | 'gold-50' | 'gold-100' | 'gold-200' | 'gold-300' | 'gold-400' | 'gold-500'
  | 'gold-600' | 'gold-700' | 'gold-800' | 'gold-900' | 'gold-950'
  | 'ink' | 'ink-light' | 'ink-muted'
  | 'paper' | 'paper-warm' | 'paper-grey'
  | 'success' | 'warning' | 'danger' | 'info';

export type SpacingToken = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

export type ShadowToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'glow' | 'ring' | 'inner' | 'none';

export type ButtonVariant = 'primary' | 'accent' | 'ghost' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export type CardVariant = 'default' | 'elevated' | 'premium' | 'dark';

export type IconName =
  | 'arrow-right' | 'arrow-left' | 'arrow-up' | 'arrow-down'
  | 'check' | 'close' | 'plus' | 'minus'
  | 'menu' | 'search' | 'mail' | 'phone' | 'location'
  | 'globe' | 'leaf' | 'energy' | 'water' | 'gas' | 'recycle'
  | 'building' | 'factory' | 'shield' | 'award' | 'users' | 'clock'
  | 'facebook' | 'linkedin' | 'twitter' | 'instagram' | 'youtube';

export interface NavLinkItem {
  label: string;
  href: string;
  children?: NavLinkItem[];
}

export interface StatItem {
  value: string;
  label: string;
  accent?: boolean;
}

export interface ServiceCardData {
  icon: IconName;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
}

export interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const BREAKPOINTS: Record<Breakpoint, number> = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const TYPOGRAPHY_SCALE = {
  h1: { size: 'clamp(2.5rem, 5vw + 1rem, 5rem)', weight: 600, tracking: '-0.035em', leading: 1.04, font: 'display' },
  h2: { size: 'clamp(2rem, 3.2vw + 0.8rem, 3.25rem)', weight: 600, tracking: '-0.03em', leading: 1.08, font: 'display' },
  h3: { size: 'clamp(1.5rem, 2vw + 0.5rem, 2rem)', weight: 600, tracking: '-0.025em', leading: 1.2, font: 'display' },
  h4: { size: '1.5rem', weight: 600, tracking: '-0.02em', leading: 1.25, font: 'display' },
  h5: { size: '1.25rem', weight: 600, tracking: '-0.015em', leading: 1.35, font: 'display' },
  h6: { size: '1.125rem', weight: 600, tracking: '-0.01em', leading: 1.4, font: 'sans' },
  body: { size: '1rem', weight: 400, tracking: '-0.005em', leading: 1.65, font: 'sans' },
  lead: { size: '1.125rem', weight: 400, tracking: '-0.01em', leading: 1.7, font: 'sans' },
  small: { size: '0.875rem', weight: 400, tracking: '0.01em', leading: 1.57, font: 'sans' },
  caption: { size: '0.75rem', weight: 500, tracking: '0.02em', leading: 1.5, font: 'sans' },
  eyebrow: { size: '0.75rem', weight: 600, tracking: '0.14em', leading: 1, font: 'sans' },
} as const;
