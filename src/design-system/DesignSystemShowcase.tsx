import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/primitives/Button';
import Card from '@/components/primitives/Card';
import Icon from '@/components/primitives/Icon';
import { SectionHeader } from '@/components/section/Section';
import { FieldInput, FieldTextarea, FieldSelect, Checkbox } from '@/components/primitives/Field';

const FOREST_SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const NOVA_SCALE   = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const CHARCOAL_SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const GOLD_SCALE   = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const SPACING = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48] as const;
const RADIUS = ['sm','md','lg','xl','2xl','3xl'] as const;
const SHADOWS: Array<{name:string, cls:string, note:string}> = [
  { name: 'xs',    cls: 'shadow-xs',    note: 'Card dividers / subtle' },
  { name: 'sm',    cls: 'shadow-sm',    note: 'Inline controls' },
  { name: 'md',    cls: 'shadow-md',    note: 'Cards default' },
  { name: 'lg',    cls: 'shadow-lg',    note: 'Cards hover' },
  { name: 'xl',    cls: 'shadow-xl',    note: 'Modals' },
  { name: '2xl',   cls: 'shadow-2xl',   note: 'Feature blocks' },
  { name: 'glow',  cls: 'shadow-glow',  note: 'CTA glow' },
];

function TokenRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14 lg:mb-20">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <span className="ds-eyebrow">{title}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function SwatchGrid({ palette, base }: { palette: readonly number[]; base: 'forest' | 'nova' | 'charcoal' | 'gold' }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
      {palette.map((n) => {
        const cls = `bg-${base}-${n}`;
        const light = n <= 300 || (base === 'gold' && n <= 300);
        return (
          <div key={`${base}-${n}`} className="flex flex-col gap-2">
            <div
              className={`${cls} aspect-[4/5] rounded-lg border border-line flex items-end p-2`}
              style={{
                // Tailwind JIT: force classes to be scanned via string literals above
              }}
            >
              <span className={`text-[0.65rem] font-mono ${light ? 'text-ink' : 'text-white'} opacity-90`}>
                {base}-{n}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DesignSystemShowcase() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 surface-grid opacity-40 mask-fade-b pointer-events-none" />
        <div className="ds-container relative pt-section-lg pb-section-lg">
          <div className="max-w-3xl">
            <span className="ds-eyebrow">Green Nova Energy</span>
            <h1 className="font-display font-semibold tracking-[-0.035em] leading-[1.04] text-ink text-balance mt-4">
              Design System &amp; Project Foundation
            </h1>
            <p className="lead mt-6">
              Minimal luxury. Corporate. Engineering. Renewable. Premium. Timeless.
              Every token, component, and layout rule for the brand lives below — ready for the
              production website build.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="primary" size="lg" iconRight="arrow-down">
                Review Tokens
              </Button>
              <Button variant="ghost" size="lg" iconRight="globe">
                Project Overview
              </Button>
            </div>
            <div className="ds-grid-4 mt-20 max-w-4xl">
              {[
                { v: '28+', l: 'Design Tokens' },
                { v: '12', l: 'Components' },
                { v: '6', l: 'Breakpoints' },
                { v: 'AAA', l: 'Contrast Ready' },
              ].map((s) => (
                <div key={s.l} className="ds-stat">
                  <div className="ds-stat__value">{s.v}</div>
                  <div className="ds-stat__label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="ds-container py-section">

        {/* ================== COLOR SYSTEM ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Color System</h2>

        <TokenRow title="Forest — Deep Brand Green">
          <SwatchGrid palette={FOREST_SCALE} base="forest" />
        </TokenRow>

        <TokenRow title="Nova — Energy Accent Green">
          <SwatchGrid palette={NOVA_SCALE} base="nova" />
        </TokenRow>

        <TokenRow title="Charcoal — Neutral Gray Scale">
          <SwatchGrid palette={CHARCOAL_SCALE} base="charcoal" />
        </TokenRow>

        <TokenRow title="Gold — Premium Accent">
          <SwatchGrid palette={GOLD_SCALE} base="gold" />
        </TokenRow>

        <TokenRow title="Semantic Aliases & States">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Ink (text)', cls: 'bg-ink text-white' },
              { name: 'Paper (surface)', cls: 'bg-paper text-ink border border-line' },
              { name: 'Paper Warm', cls: 'bg-paper-warm text-ink border border-line' },
              { name: 'Paper Grey', cls: 'bg-paper-grey text-ink' },
              { name: 'State Success', cls: 'bg-state-success text-white' },
              { name: 'State Warning', cls: 'bg-state-warning text-white' },
              { name: 'State Danger', cls: 'bg-state-danger text-white' },
              { name: 'State Info', cls: 'bg-state-info text-white' },
            ].map((c) => (
              <div key={c.name} className="rounded-lg border border-line overflow-hidden">
                <div className={`${c.cls} h-24 flex items-end p-3`}>
                  <span className="text-xs font-medium">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </TokenRow>

        {/* ================== TYPOGRAPHY ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Typography System</h2>

        <TokenRow title="Font Families">
          <div className="ds-grid-2">
            <div className="p-6 rounded-xl border border-line bg-white">
              <span className="ds-eyebrow mb-2">Inter — Sans (Body, UI)</span>
              <p className="font-sans text-5xl mt-4 font-semibold tracking-tight">Aa — 0123456789</p>
              <p className="font-sans mt-4">
                The quick brown fox jumps over the lazy dog. 1234567890
              </p>
            </div>
            <div className="p-6 rounded-xl border border-line bg-white">
              <span className="ds-eyebrow mb-2 ds-eyebrow--gold">Playfair Display — Display (H1–H5)</span>
              <p className="font-display text-5xl mt-4 font-semibold tracking-tight">Aa — 0123456789</p>
              <p className="font-display mt-4">
                The quick brown fox jumps over the lazy dog. 1234567890
              </p>
            </div>
          </div>
        </TokenRow>

        <TokenRow title="Typography Scale">
          <div className="rounded-xl border border-line overflow-hidden bg-white">
            {[
              ['Display / H1', 'h1', 'font-display text-6xl'],
              ['Display / H2', 'h2', 'font-display text-5xl'],
              ['Display / H3', 'h3', 'font-display text-3xl'],
              ['Display / H4', 'h4', 'font-display text-2xl'],
              ['Sans / H6 & Body large', 'p', 'font-sans text-xl font-medium'],
              ['Lead paragraph', 'p', 'font-sans text-lg text-ink-muted'],
              ['Body paragraph', 'p', 'font-sans text-base text-ink-light'],
              ['Small caption', 'p', 'font-sans text-sm text-ink-muted'],
              ['Eyebrow uppercase', 'span', 'ds-eyebrow'],
            ].map(([label, el, cls]) => (
              <div key={label as string} className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-line last:border-b-0 items-start">
                <div className="col-span-12 md:col-span-3 text-xs uppercase tracking-widest text-ink-muted pt-2">
                  {label}
                </div>
                <div className="col-span-12 md:col-span-9 text-balance">
                  {el === 'h1' ? (
                    <h1 className={cls as string}>Engineered for a Sustainable Tomorrow</h1>
                  ) : el === 'h2' ? (
                    <h2 className={cls as string}>Renewable Energy Solutions</h2>
                  ) : el === 'h3' ? (
                    <h3 className={cls as string}>Environmental Engineering</h3>
                  ) : el === 'h4' ? (
                    <h4 className={cls as string}>Green Hydrogen · CBG · WtE · Water</h4>
                  ) : (
                    <p className={cls as string}>
                      Green Nova Energy &amp; Environment Solutions Pvt Ltd delivers clean energy,
                      environmental engineering, green hydrogen, compressed biogas, waste-to-energy
                      and water treatment for a regenerative future.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TokenRow>

        {/* ================== SPACING / GRID / RADIUS / SHADOW ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Spacing · Grid · Radius · Elevation</h2>

        <TokenRow title="Spacing Scale (8px grid, relative tokens)">
          <div className="rounded-xl border border-line bg-white p-6 overflow-hidden">
            <div className="flex items-end gap-2">
              {SPACING.map((s) => (
                <div key={s} className="flex flex-col items-center gap-2 min-w-[48px]">
                  <div
                    className="bg-nova-500 rounded-sm"
                    style={{ width: `calc(${s} * 4px)`, height: 32 }}
                  />
                  <div className="text-[0.7rem] font-mono text-ink-muted">{s}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-paper-grey"><div className="font-semibold">gap-section</div><div className="text-ink-muted mt-1">Vertical rhythm 6rem / 96px</div></div>
              <div className="p-4 rounded-lg bg-paper-grey"><div className="font-semibold">gap-section-sm</div><div className="text-ink-muted mt-1">Mobile 4rem / 64px</div></div>
              <div className="p-4 rounded-lg bg-paper-grey"><div className="font-semibold">12-col grid</div><div className="text-ink-muted mt-1">6–10 gutters, lg:gap-x-8</div></div>
              <div className="p-4 rounded-lg bg-paper-grey"><div className="font-semibold">container</div><div className="text-ink-muted mt-1">max-w-[1280px], centered</div></div>
            </div>
          </div>
        </TokenRow>

        <TokenRow title="Border Radius Scale">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {RADIUS.map((r) => (
              <div key={r} className="flex flex-col items-center gap-3">
                <div className={`aspect-square w-full bg-gradient-to-br from-forest-700 to-nova-500 rounded-${r}`} />
                <div className="text-sm font-mono text-ink-muted">rounded-{r}</div>
              </div>
            ))}
          </div>
        </TokenRow>

        <TokenRow title="Shadow / Elevation Scale">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHADOWS.map((s) => (
              <div key={s.name} className="p-6 bg-paper-warm rounded-xl border border-line">
                <div className={`h-28 rounded-lg bg-white ${s.cls} flex items-center justify-center`}>
                  <span className="text-sm font-mono text-ink-muted">shadow-{s.name}</span>
                </div>
                <div className="mt-4 text-sm">
                  <div className="font-semibold">shadow-{s.name}</div>
                  <div className="text-ink-muted mt-0.5">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </TokenRow>

        {/* ================== ICON SYSTEM ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Icon System</h2>
        <TokenRow title="Stroke icons · 24px base · 1.75 stroke · rounded caps">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {([
              'leaf','energy','water','gas','recycle','factory','building','shield',
              'award','users','clock','globe','location','mail','phone','search',
              'arrow-right','check','close','plus',
            ] as const).map((n) => (
              <div key={n} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white border border-line hover:border-line-strong transition-colors">
                <div className="ds-icon ds-icon--forest ds-icon--lg">
                  <Icon name={n} size={24} />
                </div>
                <span className="text-[0.68rem] font-mono text-ink-muted">{n}</span>
              </div>
            ))}
          </div>
        </TokenRow>

        {/* ================== BUTTON VARIANTS ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Button Variants</h2>
        <TokenRow title="Primary · Accent · Outline · Ghost · Text — Sizes: sm / md / lg">
          <div className="rounded-xl border border-line bg-white p-8 space-y-8">
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary" size="sm">Primary SM</Button>
              <Button variant="primary">Primary MD</Button>
              <Button variant="primary" size="lg" iconRight="arrow-right">Primary LG</Button>
              <Button variant="primary" size="icon" aria-label="Add">
                <Icon name="plus" size={18} />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="accent" size="sm">Accent SM</Button>
              <Button variant="accent">Accent MD</Button>
              <Button variant="accent" size="lg" iconRight="arrow-right">Accent LG</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="outline" size="sm">Outline SM</Button>
              <Button variant="outline">Outline MD</Button>
              <Button variant="outline" size="lg" iconLeft="globe">Outline LG</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="ghost" size="sm">Ghost SM</Button>
              <Button variant="ghost">Ghost MD</Button>
              <Button variant="ghost" size="lg">Ghost LG</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="text" size="sm">Learn more →</Button>
              <Button variant="text">Explore services →</Button>
            </div>

            <hr className="ds-rule ds-rule--gradient" />

            <div className="rounded-2xl bg-forest-900 p-8">
              <div className="text-xs uppercase tracking-widest text-charcoal-400 mb-4">Inverted surface</div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="accent" size="md" iconRight="arrow-right">Accent on dark</Button>
                <Button variant="ghost" size="md" inverted>Ghost inverted</Button>
              </div>
            </div>
          </div>
        </TokenRow>

        {/* ================== CARD VARIANTS ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Card Variants</h2>
        <TokenRow title="Default · Elevated · Premium · Dark — with / without media">
          <div className="ds-grid-4">
            <Card
              eyebrow="Renewable"
              icon="energy"
              iconVariant="nova"
              title="Solar &amp; Wind Engineering"
              description="End-to-end design, EPC and performance monitoring for utility-scale renewable projects."
              footer={<Button variant="text">Learn more →</Button>}
            />
            <Card
              variant="elevated"
              eyebrow="Green Hydrogen"
              icon="gas"
              iconVariant="forest"
              title="Hydrogen Production"
              description="Alkaline and PEM electrolyser integration for industrial and mobility off-takers."
              footer={<Button variant="outline" size="sm">Explore</Button>}
            />
            <Card
              variant="premium"
              eyebrow="Water Treatment"
              icon="water"
              iconVariant="gold"
              title="Zero Liquid Discharge"
              description="Industrial effluent treatment, RO, and ZLD plants engineered for regulatory compliance."
              footer={<Button variant="primary" size="sm">Details</Button>}
            />
            <Card
              variant="dark"
              eyebrow="Waste to Energy"
              icon="recycle"
              iconVariant="dark"
              title="Biogas &amp; RNG Plants"
              description="Compressed Biogas (CBG) and organic waste conversion engineered for high BTU output."
              footer={<span className="ds-badge ds-badge--nova mt-auto">CBG · Bio-CNG</span>}
            />
          </div>
        </TokenRow>

        {/* ================== INPUT FIELDS ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Input Fields</h2>
        <TokenRow title="Text · Textarea · Select · Checkbox · Error state">
          <div className="ds-grid-2 items-start">
            <div className="rounded-xl border border-line bg-white p-8 space-y-5">
              <FieldInput label="Full Name" name="name" placeholder="Your name" required />
              <FieldInput label="Business Email" name="email" type="email" placeholder="name@company.com" hint="We never share your email." />
              <FieldSelect label="Service of Interest" name="service">
                <option>Select a service…</option>
                <option>Renewable Energy</option>
                <option>Green Hydrogen</option>
                <option>Compressed Biogas</option>
                <option>Waste-to-Energy</option>
                <option>Water Treatment</option>
              </FieldSelect>
              <FieldTextarea label="Project Details" name="msg" placeholder="Tell us about your project, timeline, and location…" rows={4} />
              <div className="flex items-center justify-between gap-4 pt-2">
                <Checkbox name="subscribe" label="I agree to the privacy policy." />
                <Button variant="primary" iconRight="arrow-right">Send enquiry</Button>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-white p-8 space-y-5">
              <div className="text-xs uppercase tracking-widest text-ink-muted">Error &amp; states</div>
              <FieldInput label="Email address" name="e2" defaultValue="hello@company" error="Please enter a valid email." />
              <FieldInput label="Company" name="c2" placeholder="Acme Industries" />
              <div className="pt-4 border-t border-line space-y-4">
                <Checkbox name="t1" label="I agree to the service terms." defaultChecked />
                <Checkbox name="t2" label="Send me quarterly sustainability insights." />
              </div>
            </div>
          </div>
        </TokenRow>

        {/* ================== NAVIGATION ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Navigation</h2>
        <TokenRow title="Sticky navbar · frosted glass · active underline · mobile drawer">
          <div className="rounded-2xl overflow-hidden border border-line">
            <div className="bg-forest-900/95 text-white text-xs uppercase tracking-widest px-6 py-3 text-charcoal-300">Desktop Navbar</div>
            <Navbar />
          </div>
        </TokenRow>

        {/* ================== FOOTER ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Footer</h2>
        <TokenRow title="4-column · Inverted theme · Brand block · Contact column · Legal row">
          <div className="rounded-2xl overflow-hidden border border-line">
            <Footer />
          </div>
        </TokenRow>

        {/* ================== SECTION LAYOUTS ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Section Layouts</h2>
        <TokenRow title="Section Header — left / center · Eyebrow + Title + Subtitle pattern">
          <div className="rounded-xl border border-line bg-white p-10 space-y-16">
            <SectionHeader
              eyebrow="Our Services"
              title="Six verticals. One engineering partner."
              subtitle="From renewable power to environmental remediation — a single accountable team for every stage of the asset lifecycle."
            />
            <div className="mx-auto max-w-3xl">
              <SectionHeader
                eyebrow="Why Green Nova"
                title="Engineering trust into every project."
                subtitle="A rigorous methodology, proven partners, and transparent execution define how we deliver energy and environmental infrastructure."
                align="center"
              />
            </div>
            <SectionHeader
              eyebrow="Featured Initiative"
              title="National Green Hydrogen Mission compliance."
              subtitle="Aligned with SIGHT, NOGF, and NSIG guidelines — bids and execution frameworks audit-ready from day zero."
              eyebrowVariant="gold"
            />
          </div>
        </TokenRow>

        {/* ================== BADGES & STATS ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Badges · Stats · Icon chips</h2>
        <TokenRow title="Semantic badges and KPI blocks">
          <div className="ds-grid-2 gap-10">
            <div className="rounded-xl border border-line bg-white p-8 space-y-3">
              <span className="ds-badge ds-badge--forest">Forest badge</span> &nbsp;
              <span className="ds-badge ds-badge--nova">Nova badge</span> &nbsp;
              <span className="ds-badge ds-badge--gold">Gold badge</span> &nbsp;
              <span className="ds-badge ds-badge--charcoal">Charcoal badge</span>
              <hr className="ds-rule my-5" />
              <div className="flex flex-wrap gap-3 items-center">
                <span className="ds-icon ds-icon--lg"><Icon name="energy" size={22} /></span>
                <span className="ds-icon ds-icon--lg ds-icon--gold"><Icon name="water" size={22} /></span>
                <span className="ds-icon ds-icon--lg ds-icon--forest"><Icon name="recycle" size={22} /></span>
                <span className="ds-icon ds-icon--lg ds-icon--outline"><Icon name="shield" size={22} /></span>
                <span className="ds-icon ds-icon--lg ds-icon--dark"><Icon name="leaf" size={22} /></span>
              </div>
            </div>
            <div className="rounded-xl bg-forest-900 p-8 text-white">
              <div className="ds-grid-4 gap-8">
                <div className="ds-stat">
                  <div className="ds-stat__value" style={{ color: 'white' }}>25+</div>
                  <div className="ds-stat__label" style={{ color: 'rgba(255,255,255,0.55)' }}>Years expertise</div>
                </div>
                <div className="ds-stat">
                  <div className="ds-stat__value ds-stat__value--accent">100%</div>
                  <div className="ds-stat__label" style={{ color: 'rgba(255,255,255,0.55)' }}>Regulatory ready</div>
                </div>
                <div className="ds-stat">
                  <div className="ds-stat__value" style={{ color: 'white' }}>6</div>
                  <div className="ds-stat__label" style={{ color: 'rgba(255,255,255,0.55)' }}>Vertical solutions</div>
                </div>
                <div className="ds-stat">
                  <div className="ds-stat__value ds-stat__value--accent">PAN</div>
                  <div className="ds-stat__label" style={{ color: 'rgba(255,255,255,0.55)' }}>India coverage</div>
                </div>
              </div>
            </div>
          </div>
        </TokenRow>

        {/* ================== GUIDELINES SUMMARY ================== */}
        <h2 className="font-display text-4xl mb-10 tracking-tight">Guidelines Summary</h2>
        <div className="ds-grid-3">
          {[
            { i: 'globe', t: 'Responsive', d: 'sm 480 · md 768 · lg 1024 · xl 1280 · 2xl 1536. Mobile-first. Sections collapse 1-col under md, 2-col at md, 4-col at lg.' },
            { i: 'shield', t: 'Accessibility', d: 'AA contrast baseline, AAA on core. Visible focus rings. Reduced-motion respected. Semantic landmarks, ARIA on inputs, keyboard-first navigation.' },
            { i: 'clock', t: 'Motion', d: 'Ease corp 0.22,1,0.36,1 for entrances; snappy for interactive. Durations 150/250/400/600/900. No parallax on mobile. Fade-up reveal on scroll.' },
            { i: 'factory', t: 'Images', d: 'Photography only — industrial, engineered, real. 16:10 cards, 4:3 banners, min 2000px wide. Gradient overlays allowed only in hero.' },
            { i: 'award', t: 'Illustration', d: 'Prohibited. Use icons, brand lines, and field photography instead. No flat illustrations. No cartoon-style elements. No AI-generated people.' },
            { i: 'users', t: 'Naming', d: 'PascalCase components (SectionHeader, PrimaryHero). camelCase hooks/utils (useScrollPosition). SCREAMING enums. BEM in CSS layers (.ds-*).' },
          ].map((b) => (
            <Card key={b.t}
              icon={b.i as any}
              iconVariant="forest"
              title={b.t}
              description={b.d}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
