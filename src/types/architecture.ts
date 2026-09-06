/**
 * Green Nova Energy — React Architecture & Naming Convention
 * -----------------------------------------------------------
 * Single source of truth for folder structure, component taxonomy,
 * naming rules, and dependency boundaries.
 *
 * Import this constant to power tooling (storybook configs, generators, etc.)
 */

/**
 * FOLDER STRUCTURE
 * ----------------
 *  src/
 *   ├── assets/              # Static assets (images, fonts, SVGs used only via import)
 *   │   ├── images/
 *   │   └── svgs/
 *   ├── components/         # Reusable UI — presentational only, no route knowledge
 *   │   ├── primitives/     # ds-btn, ds-card, ds-input, ds-icon, ds-badge, ds-stat
 *   │   ├── layout/         # Navbar, Footer, SiteShell, Container, SectionShell
 *   │   ├── section/        # Section + SectionHeader — page-agnostic section wrappers
 *   │   └── blocks/         # Composite sections: StatStrip, ServiceGrid, HeroBlock, etc.
 *   ├── pages/              # Route-level containers — one file per route
 *   │   ├── HomePage.tsx
 *   │   ├── AboutPage.tsx
 *   │   ├── ServicesPage.tsx
 *   │   ├── SolutionsPage.tsx
 *   │   ├── ProjectsPage.tsx
 *   │   └── ContactPage.tsx
 *   ├── design-system/      # Design-system demos, token viewers, Storybook-like showcases
 *   ├── hooks/              # Shared React hooks — useScrollReveal, useBreakpoint, etc.
 *   ├── lib/                # Pure TS utilities (no React) — cn(), fmt, dates, validators
 *   ├── types/              # Shared TypeScript types + design-system token enums
 *   ├── data/               # Static site content arrays typed via types/* (no fake data!)
 *   ├── styles/             # Tailwind layers, CSS variables, global reset, DS components
 *   │   └── index.css
 *   ├── main.tsx            # Entry
 *   ├── App.tsx             # Router / Page mount point
 *   └── vite-env.d.ts
 */

export const FOLDER_STRUCTURE = [
  'src/assets/images',
  'src/assets/svgs',
  'src/components/primitives',
  'src/components/layout',
  'src/components/section',
  'src/components/blocks',
  'src/pages',
  'src/design-system',
  'src/hooks',
  'src/lib',
  'src/types',
  'src/data',
  'src/styles',
] as const;

/**
 * COMPONENT TAXONOMY
 * ------------------
 * Component naming follows a level system to prevent arbitrary bloat.
 * Level 0 = design tokens (no component)
 * Level 1 = primitives  (1 concern, pure presentational)
 * Level 2 = layout      (page skeleton)
 * Level 3 = blocks      (composed primitives + data contracts)
 * Level 4 = pages       (route level, assembles blocks)
 */

export const COMPONENT_LEVELS = {
  L1_PRIMITIVES: [
    'Button', 'Card', 'Icon', 'Field', 'Badge', 'Stat',
    'Divider', 'SectionHeader', 'Breadcrumbs', 'Pagination',
    'Dialog', 'Tabs', 'Accordion', 'Table', 'Tooltip',
  ],
  L2_LAYOUT: [
    'Navbar', 'Footer', 'SiteShell', 'Container', 'Grid',
  ],
  L3_BLOCKS: [
    'HeroBlock', 'StatStrip', 'ServiceGrid', 'SolutionShowcase',
    'ProcessTimeline', 'ProjectGallery', 'LeadershipRoster',
    'ContactForm', 'NewsletterStrip', 'CTABanner', 'Testimonials',
  ],
  L4_PAGES: [
    'HomePage', 'AboutPage', 'ServicesPage', 'SolutionsPage',
    'ProjectsPage', 'ContactPage',
  ],
} as const;

/**
 * NAMING CONVENTION
 * -----------------
 * Rule               Example                         Scope
 * ─────────────────────────────────────────────────────────
 * Components         PascalCase — SectionHeader.tsx   All .tsx components
 * Hooks              camelCase  — useScrollReveal     hooks/ folder
 * Utils              camelCase  — cn, formatNumber    lib/ folder
 * Constants          SCREAMING  — BREAKPOINTS         data/, types/
 * CSS classes        kebab-case + ds- prefix          styles/index.css @layer components
 * Tailwind tokens    kebab-case  — forest-700         tailwind.config.ts
 * Types / Interfaces PascalCase + no I prefix  — NavLinkItem
 */

export const NAMING_RULES = {
  COMPONENT_FILE:          'PascalCase matches default export — SectionHeader.tsx → SectionHeader',
  COMPOSITE_CHILD:         'Colocate in folder when >2 variants — Card/Card.tsx + Card.Media.tsx',
  HOOK:                    'use<Purpose> — useBreakpoint, useInView',
  UTIL:                    'verbNoun or noun. abbreviate only industry-standard (cn=classNames, fmt=format)',
  CONSTANT_TOKEN:          'ALL_CAPS_SNAKE_CASE for primitives — BREAKPOINTS, TYPOGRAPHY_SCALE',
  CSS_COMPONENT_CLASS:     'ds-<block>__<element>--<modifier> (BEM-ish)',
  CSS_UTILITY_CLASS:       'Tailwind default OR kebab-case @layer utilities',
  PROPS_TYPE:              '<ComponentName>Props — CardProps, ButtonProps',
} as const;

/**
 * DEPENDENCY GRAPH (NO CYCLES)
 * ───────────────────────────
 * pages → blocks → section → layout → primitives → types
 *   ↓        ↓
 * hooks ←───┘
 *   ↑
 * lib (zero React dep)
 *
 * styles/index.css is global; components only add classes, never override
 * ds-* class internals. To extend a component, create a new variant in the
 * CSS layer first, then expose via prop (e.g. variant="premium").
 */

export const DEPENDENCY_RULES = [
  'primitives/ MUST NOT import from layout/, blocks/, or pages/.',
  'layout/ MAY import from primitives/. MUST NOT import blocks/ or pages/.',
  'blocks/ MAY import from primitives/, layout/, section/. MUST NOT import pages/.',
  'pages/ MAY import anything below them. MUST NOT import each other.',
  'hooks/ MAY import from lib/ and types/. MUST NOT import components.',
  'lib/ MUST NOT import React or any React hooks.',
  'types/ MUST be leaf nodes — NO imports from other src/* folders.',
  'data/ MUST only import types/. No hard-coded fake projects, customers, awards.',
] as const;

/**
 * COMPONENT AUTHORING TEMPLATE
 * -----------------------------
 *   interface ButtonProps extends HTMLAttrs {
 *     variant?: 'primary' | 'ghost';
 *     size?:    'sm' | 'md' | 'lg';
 *   }
 *   export default function Button({ variant='primary', size='md' }: ButtonProps) {
 *     return <button className={clsx('ds-btn', variants[variant], sizes[size])} />;
 *   }
 *
 *  - Default every prop that reasonably can.
 *  - Spread ...rest LAST so consumers can override via className.
 *  - Prefer Tailwind utility class composition inside components; avoid inline styles.
 *  - When a visual prop would grow beyond 4 values, move to CSS layer + class variants.
 */
