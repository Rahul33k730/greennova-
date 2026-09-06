import { useState } from 'react';
import Icon from '@/components/primitives/Icon';
import type { IconName } from '@/types/design-system';

interface FlowNode {
  id: string;
  title: string;
  category: 'input' | 'core' | 'output';
  icon: IconName;
  pathway: 'hydrogen' | 'bio' | 'water' | 'all';
  specs: string;
  badge?: string;
}

const NODES: FlowNode[] = [
  // INPUTS
  {
    id: 'in-re',
    title: 'Solar PV & Wind Energy',
    category: 'input',
    icon: 'energy',
    pathway: 'hydrogen',
    specs: 'Direct PPA & Captive Generation',
    badge: 'Clean Electrons',
  },
  {
    id: 'in-bio',
    title: 'Agricultural & Organic Residue',
    category: 'input',
    icon: 'leaf',
    pathway: 'bio',
    specs: 'Paddy Straw, Pressmud, Cow Dung',
    badge: 'Feedstock',
  },
  {
    id: 'in-waste',
    title: 'Municipal Solid Waste (MSW)',
    category: 'input',
    icon: 'recycle',
    pathway: 'bio',
    specs: 'Segregated Non-Recyclables',
    badge: 'Refuse Fuel',
  },
  {
    id: 'in-water',
    title: 'Industrial & Municipal Effluent',
    category: 'input',
    icon: 'water',
    pathway: 'water',
    specs: 'High COD/BOD Chemical & Urban Wastewater',
    badge: 'Raw Effluent',
  },

  // CORE ENGINEERING
  {
    id: 'core-h2',
    title: 'Electrolyzer & H₂ Processing',
    category: 'core',
    icon: 'gas',
    pathway: 'hydrogen',
    specs: 'PEM & Alkaline Stacks + 350/700 bar Compression',
    badge: 'Vertical 01',
  },
  {
    id: 'core-cbg',
    title: 'CSTR Digestion & Gas Upgrading',
    category: 'core',
    icon: 'leaf',
    pathway: 'bio',
    specs: 'Continuous Stirred Tank + Membrane Separation',
    badge: 'Vertical 02',
  },
  {
    id: 'core-wte',
    title: 'High-Efficiency WtE Boilers',
    category: 'core',
    icon: 'factory',
    pathway: 'bio',
    specs: 'Controlled Gasification + Flue Gas Cleaning',
    badge: 'Vertical 03',
  },
  {
    id: 'core-zld',
    title: 'ZLD & Water Reclamation',
    category: 'core',
    icon: 'water',
    pathway: 'water',
    specs: 'MBBR + Ultrafiltration + RO + Evaporator',
    badge: 'Vertical 04',
  },
  {
    id: 'core-hybrid',
    title: 'BESS & Smart Dispatch Control',
    category: 'core',
    icon: 'shield',
    pathway: 'hydrogen',
    specs: 'SCADA Telemetry & 24/7 Grid Balancing',
    badge: 'Vertical 05',
  },

  // OUTPUTS
  {
    id: 'out-power',
    title: 'Round-the-Clock (RTC) Power',
    category: 'output',
    icon: 'energy',
    pathway: 'hydrogen',
    specs: 'Industrial Captive & Grid Wheel',
    badge: 'Bankable Power',
  },
  {
    id: 'out-cbg',
    title: 'Grid-Injected CBG & Bio-CNG',
    category: 'output',
    icon: 'gas',
    pathway: 'bio',
    specs: '96%+ CH₄ Purity for City Gas Networks',
    badge: 'Green Molecule',
  },
  {
    id: 'out-h2',
    title: 'Green Hydrogen (Transport & Industrial)',
    category: 'output',
    icon: 'globe',
    pathway: 'hydrogen',
    specs: 'Zero-Carbon Fuel for Refineries & Mobility',
    badge: 'Pure H₂',
  },
  {
    id: 'out-water',
    title: 'Reclaimed Water & Zero Sludge',
    category: 'output',
    icon: 'water',
    pathway: 'water',
    specs: '100% Water Circularity + Mineral Byproducts',
    badge: 'Zero Discharge',
  },
  {
    id: 'out-esg',
    title: 'Verified ESG & Carbon Credits',
    category: 'output',
    icon: 'award',
    pathway: 'all',
    specs: 'BRSR Core & Institutional Audit Readiness',
    badge: 'Compliance',
  },
];

type PathwayFilter = 'all' | 'hydrogen' | 'bio' | 'water';

export default function DecarbonisationDiagram() {
  const [activePathway, setActivePathway] = useState<PathwayFilter>('all');

  const filterNode = (n: FlowNode) => {
    if (activePathway === 'all') return true;
    return n.pathway === activePathway || n.pathway === 'all';
  };

  const inputs = NODES.filter((n) => n.category === 'input' && filterNode(n));
  const cores = NODES.filter((n) => n.category === 'core' && filterNode(n));
  const outputs = NODES.filter((n) => n.category === 'output' && filterNode(n));

  return (
    <section
      id="architecture-diagram"
      aria-labelledby="diagram-title"
      className="ds-section bg-paper-warm relative overflow-hidden"
    >
      <div className="ds-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
            <Icon name="shield" size={12} />
            System Architecture
          </span>
          <h2
            id="diagram-title"
            className="mt-5 font-display text-[clamp(1.85rem,2.4vw+0.8rem,2.75rem)] font-bold tracking-tight text-forest-950 text-balance leading-[1.12]"
          >
            The Green Nova Integrated Decarbonisation Engine.
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
            We connect disparate resource inputs — renewable power, organic agricultural waste, municipal refuse, and industrial effluent — into a unified, stage-gated conversion architecture that yields bankable, audit-grade commodities.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted mr-1">
              Select Flow:
            </span>
            {(
              [
                { id: 'all', label: 'Complete Ecosystem' },
                { id: 'hydrogen', label: 'Renewables & Green H₂' },
                { id: 'bio', label: 'CBG & Waste-to-Energy' },
                { id: 'water', label: 'ZLD & Water Reclamation' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActivePathway(tab.id)}
                className={[
                  'rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300',
                  activePathway === tab.id
                    ? 'bg-forest-900 text-white shadow-md ring-2 ring-nova-400'
                    : 'bg-white border border-line text-ink-muted hover:border-forest-300 hover:text-forest-900',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* The 3-Stage Interactive Pipeline */}
        <div className="relative rounded-3xl border border-line bg-white/90 backdrop-blur-md p-6 sm:p-8 lg:p-12 shadow-xl reveal-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* COLUMN 1: UPSTREAM INPUTS */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div className="mb-4 pb-3 border-b border-line flex items-center justify-between">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500">
                  Phase 01
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[0.68rem] font-bold uppercase tracking-wider border border-emerald-200">
                  Upstream Inputs
                </span>
              </div>
              <div className="space-y-3.5">
                {inputs.map((node) => (
                  <div
                    key={node.id}
                    className="group rounded-2xl border border-line bg-paper p-4 transition-all duration-300 hover:border-nova-400 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="ds-icon ds-icon--sm ds-icon--forest shrink-0">
                        <Icon name={node.icon} size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[0.68rem] font-semibold text-nova-700 uppercase tracking-wider">
                          {node.badge}
                        </div>
                        <h4 className="font-display text-[0.92rem] font-semibold text-ink leading-snug">
                          {node.title}
                        </h4>
                      </div>
                    </div>
                    <p className="mt-2 text-[0.78rem] text-ink-muted leading-relaxed">
                      {node.specs}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONNECTOR ARROW (DESKTOP) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-forest-200 via-nova-400 to-forest-200 relative">
                  <span className="absolute -top-1.5 right-0 text-nova-500">▶</span>
                </div>
              </div>
              <span className="mt-2 text-[0.65rem] font-mono font-semibold uppercase text-forest-700 text-center tracking-wider">
                Feed
              </span>
            </div>

            {/* COLUMN 2: GREEN NOVA CORE ENGINE (HERO CONTAINER) */}
            <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-emerald-500/20">
              <div aria-hidden className="absolute -right-16 -bottom-16 w-56 h-56 bg-nova-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] font-semibold text-nova-300">
                    Phase 02 · Integration Core
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-nova-500/20 text-nova-200 text-[0.68rem] font-bold uppercase tracking-wider border border-nova-400/30 backdrop-blur-sm">
                    Green Nova Engine
                  </span>
                </div>

                <p className="text-[0.82rem] leading-relaxed text-white/80 mb-5">
                  Single-responsibility integration covering technology selection, OEM coordination, multi-physics modeling, and EPC execution.
                </p>

                <div className="space-y-3">
                  {cores.map((node) => (
                    <div
                      key={node.id}
                      className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-nova-400/60 hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[0.68rem] font-semibold text-nova-300 uppercase tracking-wider">
                          {node.badge}
                        </span>
                        <Icon name={node.icon} size={14} className="text-nova-400" />
                      </div>
                      <h4 className="font-display text-[0.92rem] font-semibold text-white mt-1">
                        {node.title}
                      </h4>
                      <p className="mt-1 text-[0.76rem] text-white/70">
                        {node.specs}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[0.7rem] font-mono text-nova-300">
                <span>Governed by 6-Stage Gates</span>
                <span className="text-white/60">FAT · SAT · OPR</span>
              </div>
            </div>

            {/* CONNECTOR ARROW (DESKTOP) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-forest-200 via-nova-400 to-forest-200 relative">
                  <span className="absolute -top-1.5 right-0 text-nova-500">▶</span>
                </div>
              </div>
              <span className="mt-2 text-[0.65rem] font-mono font-semibold uppercase text-forest-700 text-center tracking-wider">
                Output
              </span>
            </div>

            {/* COLUMN 3: DOWNSTREAM BANKABLE OFFTAKES */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div className="mb-4 pb-3 border-b border-line flex items-center justify-between">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] font-semibold text-charcoal-500">
                  Phase 03
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 text-[0.68rem] font-bold uppercase tracking-wider border border-amber-200">
                  Bankable Offtakes
                </span>
              </div>
              <div className="space-y-3.5">
                {outputs.map((node) => (
                  <div
                    key={node.id}
                    className="group rounded-2xl border border-line bg-paper p-4 transition-all duration-300 hover:border-gold-400 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="ds-icon ds-icon--sm ds-icon--gold shrink-0">
                        <Icon name={node.icon} size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[0.68rem] font-semibold text-gold-700 uppercase tracking-wider">
                          {node.badge}
                        </div>
                        <h4 className="font-display text-[0.92rem] font-semibold text-ink leading-snug">
                          {node.title}
                        </h4>
                      </div>
                    </div>
                    <p className="mt-2 text-[0.78rem] text-ink-muted leading-relaxed">
                      {node.specs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Architectural Assurance Strip */}
          <div className="mt-10 pt-8 border-t border-line grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-nova-500 mt-2 shrink-0" />
              <div>
                <h5 className="font-display text-sm font-semibold text-ink">
                  Single Accountability Surface
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Clients avoid the risk of six uncoordinated vendors. One warranty, one delivery schedule, zero finger-pointing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-forest-600 mt-2 shrink-0" />
              <div>
                <h5 className="font-display text-sm font-semibold text-ink">
                  Bankable Due Diligence
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Technical feasibility packages, HAZOP reviews, and financial modeling structured to survive lender audit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
              <div>
                <h5 className="font-display text-sm font-semibold text-ink">
                  25-Year Lifecycle Readiness
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Designed for real Indian operating conditions — temperature extremes, grid fluctuations, and feedstock seasonal variations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
