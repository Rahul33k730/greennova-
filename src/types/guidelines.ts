/**
 * Green Nova Energy — Design System Guidelines
 * =============================================
 * Responsive breakpoints · Accessibility · Animation · Images · Illustrations
 *
 * Source of truth consumed by both developers and QA. Values are intentionally
 * exported so they can be used in code (tests, hooks, storybook parameters).
 */

import type { Breakpoint } from './design-system';

/* ===========================================================
   RESPONSIVE BREAKPOINTS (mobile-first)
   =========================================================== */
export const BREAKPOINTS: Record<Breakpoint, number> = {
  sm:  480,   // small phones (above)
  md:  768,   // tablets
  lg:  1024,  // small laptops
  xl:  1280,  // standard desktops — design target
  '2xl': 1536, // large desktops — max container caps at 1280px
};

export const GRID_RULES = {
  COLUMNS_DESKTOP: 12,
  COLUMNS_TABLET: 6,
  COLUMNS_MOBILE: 4,
  GUTTER_DESKTOP: '32px (lg:gap-x-8)',
  GUTTER_TABLET: '24px (md:gap-x-6)',
  GUTTER_MOBILE: '16px (gap-4)',
  CONTAINER_MAX: '1280px (--container-max)',
  CONTAINER_PADDING_X: {
    DEFAULT: '24px (1.5rem)',
    sm:  '32px (2rem)',
    lg:  '48px (3rem)',
    xl:  '64px (4rem)',
    '2xl': '96px (6rem)',
  },
  LAYOUT_SECTION_PADDING_Y: {
    DEFAULT: '96px (6rem)  — py-section',
    SM:      '64px (4rem)  — py-section-sm (mobile fallback)',
    LG:      '128px (8rem) — py-section-lg (hero/feature areas)',
  },
};

export const LAYOUT_MOBILE_RULES = [
  'Nav height collapses to 64px (--nav-height-mobile).',
  'Footer grid collapses to 2-col < md, 1-col < sm.',
  'All multi-column grids default to single column < md.',
  'Section padding reduces to 4rem (<= 768px).',
  'Typography clamp() handles headlines; never drop below body 15px.',
  'Touch targets ≥ 44×44px (Buttons, Icon-only buttons, Checkboxes).',
  'Hide decorative surfaces (grid patterns) on low-DPI / low-power via prefers-reduced-motion.',
];

export const LAYOUT_DESKTOP_RULES = [
  'Design anchors at 1440×900 viewport, container 1280px wide.',
  'Navbar sticky, frosted blur; top-border reveals on scroll > 8px.',
  'Hero headline clamp() tops out at 5rem (80px).',
  'Feature grids use 12-col: 4/8 split, 3×, or 4× patterns.',
  'Maximum 65ch per paragraph line length (leverage max-w-prose equivalents).',
  'Images are 16:10 cards, 4:3 section features, 21:9 hero strip.',
];

/* ===========================================================
   ACCESSIBILITY RULES (WCAG 2.1 AA minimum, AAA on core UI)
   =========================================================== */
export const A11Y_RULES = {
  CONTRAST: {
    BODY: '4.5:1 minimum (all body copy meets AA automatically via Ink / Paper tokens).',
    LARGE_TEXT: '3:1 minimum.',
    NON_TEXT: '3:1 minimum — focus rings, icons next to labels.',
    CORE_UI: 'AAA 7:1 target for buttons, form labels, navbar links.',
  },
  FOCUS: {
    DEFAULT: 'Visible focus-visible: 3px nova-600 ring + inner 1px border.',
    RADII: 'Focus ring radius matches element (rounded corners).',
    NEVER: 'Never outline: none without a replacement.',
  },
  SEMANTICS: [
    'Use <header>, <nav>, <main>, <section>, <footer>, <aside>, <article> landmarks.',
    'Each page has exactly one <h1>. Section titles use <h2>. No skipping levels.',
    'Buttons: <button>. Links: <a>. Divs only as last resort (and add role + tabIndex).',
    'Images: alt="" for decor, descriptive alt for content (max ~125 chars).',
    'Inputs tied to <label htmlFor>. Hint/error linked via aria-describedby.',
    'aria-current="page" on active nav link.',
  ],
  KEYBOARD: [
    'All interactive elements reachable via Tab in logical order.',
    'Skip-link: #main-content as first focusable element on every page.',
    'Modals trap focus, ESC closes, aria-modal, aria-labelledby/desribedby.',
    'Carousels — pause on hover/focus, arrow keys, pause/play visible control.',
  ],
  MOTION: [
    'Respect prefers-reduced-motion: drop all transform animations except fades.',
    'Autoplay video/carousel is FORBIDDEN.',
    'No flashing content (3 flashes/s threshold).',
  ],
  FORMS: [
    'Required indicators (* in label) + aria-required when applicable.',
    'Inline validation; aria-invalid + role="alert" on error text.',
    'Submit buttons always have explicit type="submit".',
    'Autocomplete attribute: name, email, tel, postal-code, etc.',
  ],
  SCREEN_READER: [
    'Status messages use role="status" / aria-live="polite".',
    'No "click here" links — link text describes the destination.',
    'Icon-only buttons: aria-label required.',
  ],
};

/* ===========================================================
   ANIMATION RULES
   =========================================================== */
export const ANIMATION_RULES = {
  EASINGS: {
    CORP:   'cubic-bezier(0.22, 1, 0.36, 1)   — entrance, reveal, section lines (ease-corp)',
    SNAPPY: 'cubic-bezier(0.4, 0, 0.2, 1)      — micro-interactions, hover (ease-snappy)',
  },
  DURATIONS: {
    FAST:   '150ms — focus rings, toggle states.',
    BASE:   '250ms — button hover, border colors.',
    SLOW:   '400ms — card elevation, icon color.',
    LEISURE:'600ms — page reveal, fade-up on scroll.',
    GRANDE: '900ms — hero entrance, staggered lists.',
  },
  PERMITTED_PROPERTIES: [
    'opacity, transform (translate/scale/skew), filter, background-color, border-color, color.',
    'Avoid layout-triggering properties (top/left, width/height, margin) in animations.',
  ],
  PATTERNS: [
    'Reveal-up on scroll via IntersectionObserver — .reveal-up + .is-visible class.',
    'Hero entrance: staggered 60ms delay per child (header → eyebrow → CTA → stats).',
    'Image zoom on card hover: transform: scale(1.03) at dur-leisure ease-corp.',
    'Nav underline: transform-origin LEFT, scaleX(0→1) dur-slow ease-corp.',
    'Button micro-feedback: translateY(1px) :active, translateY(0) idle.',
  ],
  PROHIBITED: [
    'No page-transition wipes / "cinematic" full-screen loaders.',
    'No particle backgrounds, no parallax, no 3D perspective on mobile.',
    'No shake / bounce / spring-style animations on error states.',
    'Error: short fade + gentle border/pulse ONLY.',
    'No infinite animation loops other than subtle "shimmer" skeletons (max 2.4s).',
  ],
};

/* ===========================================================
   IMAGE & ILLUSTRATION GUIDELINES
   =========================================================== */
export const IMAGE_GUIDELINES = {
  STYLE: 'Authentic industrial photography. No stock-photo smileys. No AI humans.',
  COMPOSITION: [
    'Prefer engineering, hardware, construction, infrastructure in-situ shots.',
    'Workers in PPE acceptable if shot is documentary, not posed.',
    'Dramatic backlight / golden hour acceptable — 10-20% of hero imagery.',
    'Primary palette: greens, slate-grey, sky blue, warm asphalt tones.',
  ],
  FORMATS: {
    DELIVERY:  'AVIF first, WebP fallback, <picture> element.',
    FALLBACK:  'JPEG for legacy clients at quality 82.',
    RESOLUTION_MIN_WIDTH: {
      HERO: '2400px wide (for 21:9 strips).',
      CARD: '1600px wide (16:10).',
      FEATURE: '2000px wide (4:3).',
      LOGO: 'SVG always, @2x PNG fallback only if needed.',
    },
  },
  OVERLAYS: [
    'Gradient overlays allowed ONLY on hero — dark gradient bottom 30% with opacity 0→0.55.',
    'Section backgrounds: grid-pattern or dots at opacity ≤ 0.06; mask-fade-b to fade out.',
    'Images must retain legibility: text on dark images has 80% opacity backdrop tint.',
  ],
  PLACEHOLDER_WHILE_AWAITING_ASSETS: [
    'Use SVG geometric compositions ONLY — not Unsplash imagery.',
    'Palettes: forest-900 + nova-400 gradient diagonal; thin gold-300 1px lines.',
    'Client assets MUST replace placeholders before launch.',
  ],
};

export const ILLUSTRATION_RULES = {
  POLICY: 'Flat / cartoon / isometric illustrations are EXPLICITLY PROHIBITED.',
  INSTEAD_USE: [
    'The icon system (stroke 1.75, rounded caps).',
    'Brand line patterns (grid/dot surfaces + masks).',
    'Photography.',
    'Technical drawings / engineering diagrams (provided by client).',
    'Data visualisation — clean, minimal, nova + charcoal palette.',
  ],
  ICONOGRAPHY: {
    SET: 'Single 24px base set — stroke icons, rounded caps/joins.',
    WEIGHT: '1.75 default; 1.5 for size 16; 2 for size ≥ 28.',
    COLOUR_RULES: [
      'On paper: nova-700 on nova-100 background chip.',
      'On dark backgrounds: nova-300 on rgba(255,255,255,0.06).',
      'Premium sections: gold-700 on gold-100.',
    ],
    USAGE: [
      'No more than one icon chip per card (top-left).',
      'Do not intermix filled icons with stroke icons.',
      'Do not custom-draw icons; extend the Icon component switch statement.',
    ],
  },
};

/* ===========================================================
   CONTENT POLICY
   =========================================================== */
export const CONTENT_POLICY = [
  'Do NOT invent customers, awards, certifications, case studies, project values.',
  'Use client-provided profile ONLY. If data is missing — remove the section, don\'t fake it.',
  'Placeholder copy may use generic benefit language; never fake metrics.',
  'Numbers (e.g. "25+ years") — ONLY IF present in client profile / Phase inputs.',
  'Legal copy (Privacy/Terms) is client responsibility — provide standard skeleton only.',
];
