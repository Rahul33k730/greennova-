import { useState } from 'react';
import Icon from '@/components/primitives/Icon';

interface Stage {
  number: string;
  name: string;
  duration: string;
  eyebrow: string;
  summary: string;
  deliverables: string[];
  bankabilityCheck: string;
}

const STAGES: Stage[] = [
  {
    number: '01',
    name: 'Feasibility & Resource Assessment',
    duration: 'Weeks 1 – 4',
    eyebrow: 'Phase 01 · Bankability Foundation',
    summary: 'High-resolution irradiance, wind-wake modelling, feedstock availability audit, water access and local interconnection grid study.',
    deliverables: ['P90/P50 Yield Modeling', 'Feedstock Supply Chain Contracts', 'Environmental Screening (EIA)', 'Preliminary CAPEX/OPEX Financial Model'],
    bankabilityCheck: 'Passed before committing development capital.',
  },
  {
    number: '02',
    name: 'Detailed Engineering & Permitting',
    duration: 'Weeks 5 – 12',
    eyebrow: 'Phase 02 · Front-End Engineering (FEED)',
    summary: '3D layout design, civil foundation geotechnical testing, electrical single-line diagrams (SLD), and statutory approvals from PESO, CPCB, and State DISCOMs.',
    deliverables: ['Complete Plant P&ID & 3D Model', 'Statutory NOCs (Pollution, Fire, Aviation, CEIG)', 'Vendor Equipment Specifications', 'Grid Connectivity Approval'],
    bankabilityCheck: 'Guarantees OEM vendor compatibility without proprietary lock-in.',
  },
  {
    number: '03',
    name: 'Turnkey Procurement & EPC Execution',
    duration: 'Months 3 – 9',
    eyebrow: 'Phase 03 · Industrial Construction',
    summary: 'Tier-1 component procurement (ALMM approved modules, European electrolyzers, CSTR digester tanks) and disciplined on-site civil and electrical assembly.',
    deliverables: ['Factory Acceptance Testing (FAT)', 'Civil Foundation & Structural Erection', 'BOP Piping & High-Voltage Transmission Line', 'SCADA / Telemetry Hardware Integration'],
    bankabilityCheck: 'Zero-harm safety record with stage-gated quality inspections.',
  },
  {
    number: '04',
    name: 'Testing, Commissioning & Grid Sync',
    duration: 'Weeks 10 – 14',
    eyebrow: 'Phase 04 · Performance Verification',
    summary: 'Cold and hot commissioning, electrical safety inspection by Chief Electrical Inspector (CEIG), pressure vessel testing, and commercial operation date (COD) declaration.',
    deliverables: ['CEIG & PESO Final Clearances', 'Capacity & Efficiency Trial Run (72h)', 'Purity & Gas Output Chromatography', 'COD Certificate & Offtaker Sign-off'],
    bankabilityCheck: 'Meets guaranteed heat rate, PLF, or gas purity criteria.',
  },
  {
    number: '05',
    name: 'O&M & Decarbonization Governance',
    duration: '25-Year Lifecycle',
    eyebrow: 'Phase 05 · Long-Term Asset Stewardship',
    summary: 'Predictive drone thermography, robotic cleaning, automated CPCB emission telemetry, preventive maintenance, and BRSR carbon credit auditing.',
    deliverables: ['24/7 Remote SCADA Monitoring', 'Preventive & Corrective Maintenance', 'Environmental Compliance Logs', 'Annual Carbon Credit Issuance'],
    bankabilityCheck: 'Maximizes asset longevity and investor internal rate of return (IRR).',
  },
];

export default function AssetLifecycleInteractive() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const current = STAGES[activeStage];

  return (
    <section id="asset-lifecycle" className="ds-section bg-paper-warm relative overflow-hidden">
      <div className="ds-container">
        <div className="max-w-3xl mb-12 reveal-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Execution Rigour
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            The 5-Stage Clean Energy Asset Lifecycle
          </h2>
          <p className="mt-2 text-base text-ink-muted">
            How Green Nova ensures institutional bankability, zero vendor lock-in, and audit-ready governance from initial concept to 25-year operations.
          </p>
        </div>

        {/* Step Progress Line */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {STAGES.map((s, idx) => (
            <button
              key={s.number}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden ${
                activeStage === idx
                  ? 'border-emerald-600 bg-white shadow-lg ring-2 ring-emerald-500/20'
                  : 'border-line bg-white/60 hover:bg-white text-ink-light'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    activeStage === idx
                      ? 'bg-emerald-600 text-white'
                      : 'bg-forest-100 text-forest-800'
                  }`}
                >
                  {s.number}
                </span>
                <span className="text-[0.68rem] text-ink-muted font-mono">{s.duration}</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-ink line-clamp-2">
                {s.name}
              </div>
              {activeStage === idx && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-emerald-600" />
              )}
            </button>
          ))}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="rounded-3xl border border-line bg-white p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-700 block mb-2">
                {current.eyebrow}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                {current.name}
              </h3>
              <p className="text-base text-ink-light leading-relaxed mb-6">
                {current.summary}
              </p>

              <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono mb-1">
                  <Icon name="check" size={14} />
                  Institutional Bankability Gate
                </div>
                <p className="text-xs sm:text-sm text-emerald-800">
                  {current.bankabilityCheck}
                </p>
              </div>
            </div>

            <div className="lg:w-80 rounded-2xl bg-paper p-5 border border-line flex-shrink-0">
              <div className="text-xs font-bold uppercase tracking-wider text-ink font-mono mb-3 flex items-center gap-2">
                <Icon name="award" size={14} />
                Key Deliverables
              </div>
              <ul className="space-y-2.5 text-xs text-ink-light">
                {current.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold text-sm leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
