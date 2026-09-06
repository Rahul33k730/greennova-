import { useState, useMemo } from 'react';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';

interface SolutionOption {
  id: string;
  name: string;
  co2Factor: number; // tons CO2 saved per MW/yr
  costFactor: number; // projected savings in lakhs per MW/yr
  badge: string;
  description: string;
}

const SOLUTIONS: SolutionOption[] = [
  {
    id: 'hybrid',
    name: 'Solar-Wind-BESS Hybrid',
    co2Factor: 1450,
    costFactor: 42,
    badge: 'Open Access / Captive',
    description: 'Utility-scale round-the-clock (RTC) green power with battery storage for peak shaving.',
  },
  {
    id: 'hydrogen',
    name: 'Green Hydrogen Electrolysis',
    co2Factor: 1800,
    costFactor: 55,
    badge: 'National H₂ Mission',
    description: 'Electrolyzer deployment replacing grey hydrogen and natural gas in industrial heat & feedstocks.',
  },
  {
    id: 'cbg',
    name: 'Compressed Biogas (CBG)',
    co2Factor: 1620,
    costFactor: 48,
    badge: 'SATAT Aligned',
    description: 'Anaerobic digestion of agro-residues & organic waste into purified Bio-CNG fuel.',
  },
  {
    id: 'wte',
    name: 'Waste-to-Energy & Thermal',
    co2Factor: 1280,
    costFactor: 38,
    badge: 'Zero Landfill',
    description: 'Refuse-derived fuel and biomass thermal energy recovery replacing high-sulfur petcoke.',
  },
];

export default function EnergyImpactCalculator() {
  const [capacityMw, setCapacityMw] = useState<number>(5);
  const [selectedSolution, setSelectedSolution] = useState<string>('hybrid');
  const [baselineFuel, setBaselineFuel] = useState<'coal' | 'diesel' | 'grid'>('grid');

  const activeSolution = useMemo(
    () => SOLUTIONS.find((s) => s.id === selectedSolution) || SOLUTIONS[0],
    [selectedSolution]
  );

  const baselineMultiplier = useMemo(() => {
    switch (baselineFuel) {
      case 'diesel':
        return 1.45;
      case 'coal':
        return 1.25;
      case 'grid':
      default:
        return 1.0;
    }
  }, [baselineFuel]);

  const metrics = useMemo(() => {
    const co2Tons = Math.round(capacityMw * activeSolution.co2Factor * baselineMultiplier);
    const costSavingsLakhs = Math.round(capacityMw * activeSolution.costFactor * (baselineMultiplier > 1 ? 1.2 : 1.0));
    const costSavingsCrores = (costSavingsLakhs / 100).toFixed(2);
    const treesEquivalent = Math.round(co2Tons * 45);
    const dieselLitersSaved = Math.round(co2Tons * 380);

    return {
      co2Tons,
      costSavingsCrores,
      treesEquivalent,
      dieselLitersSaved,
    };
  }, [capacityMw, activeSolution, baselineMultiplier]);

  return (
    <section id="impact-calculator" className="ds-section relative bg-forest-950 text-white overflow-hidden isolate">
      {/* Background aesthetics */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_50%)]" />
      <div aria-hidden className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-sky-900/20 blur-3xl -z-10" />

      <div className="ds-container relative">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 backdrop-blur-md mb-4">
            <Icon name="award" size={14} />
            Institutional Decarbonization Tool
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Clean Energy ROI &amp; Carbon Abatement Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
            Estimate your industrial facility&apos;s annual carbon emission reduction, projected power bill savings, and institutional payback when engineered by Green Nova.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">01</span>
              Configure Project Parameters
            </h3>

            {/* Slider: Capacity */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="capacity-slider" className="text-sm font-semibold text-white/90">
                  Target Project Capacity / Load
                </label>
                <span className="text-xl font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-500/30">
                  {capacityMw} MW
                </span>
              </div>
              <input
                id="capacity-slider"
                type="range"
                min="1"
                max="50"
                step="1"
                value={capacityMw}
                onChange={(e) => setCapacityMw(Number(e.target.value))}
                className="w-full h-2.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-white/40 mt-2 font-mono">
                <span>1 MW (Captive)</span>
                <span>25 MW (Industrial)</span>
                <span>50 MW (Utility-scale)</span>
              </div>
            </div>

            {/* Solution Selector */}
            <div className="mb-8">
              <label className="text-sm font-semibold text-white/90 block mb-3">
                Primary Technology Vertical
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOLUTIONS.map((sol) => (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => setSelectedSolution(sol.id)}
                    className={`text-left p-3.5 rounded-2xl border transition-all duration-250 ${
                      selectedSolution === sol.id
                        ? 'border-emerald-400 bg-emerald-500/20 text-white shadow-lg shadow-emerald-950/50'
                        : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold">{sol.name}</span>
                    </div>
                    <span className="text-[0.68rem] font-mono text-emerald-300 block">{sol.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Baseline Fuel */}
            <div>
              <label className="text-sm font-semibold text-white/90 block mb-3">
                Current Energy / Fuel Source Being Replaced
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(
                  [
                    { id: 'grid', label: 'Conventional Grid' },
                    { id: 'coal', label: 'Coal / Boilers' },
                    { id: 'diesel', label: 'Diesel / HSD' },
                  ] as const
                ).map((fuel) => (
                  <button
                    key={fuel.id}
                    type="button"
                    onClick={() => setBaselineFuel(fuel.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                      baselineFuel === fuel.id
                        ? 'border-sky-400 bg-sky-500/20 text-sky-200'
                        : 'border-white/10 text-white/60 hover:border-white/20'
                    }`}
                  >
                    {fuel.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 via-forest-900/30 to-forest-950/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Engineering Forecast
              </span>
              <span className="text-xs text-white/50 font-mono">Calibrated to Indian Standards</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="text-xs uppercase tracking-wider text-white/60 mb-1">CO₂ Abatement</div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-300">
                  {metrics.co2Tons.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-emerald-400/80 mt-1">Metric Tons / Year</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Est. Power Bill Reduction</div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                  ₹ {metrics.costSavingsCrores}
                </div>
                <div className="text-xs text-white/60 mt-1">Crores / Year (Levelized)</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Fossil Fuel Offset</div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-sky-300">
                  {metrics.dieselLitersSaved.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-sky-400/80 mt-1">Liters Eqv. / Year</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="text-xs uppercase tracking-wider text-white/60 mb-1">Afforestation Eqv.</div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-300">
                  {metrics.treesEquivalent.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-emerald-400/80 mt-1">Mature Tree Seedlings</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-6">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                <strong className="text-emerald-400">Green Nova Delivery Guarantee:</strong> All projects undergo stage-gated institutional bankability audit, MNRE/CPCB approval mapping, and turnkey commissioning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href="#contact"
                variant="accent"
                size="md"
                iconRight="arrow-right"
                className="w-full sm:w-auto justify-center"
              >
                Request Feasibility Study for {capacityMw} MW
              </Button>
              <a
                href="https://wa.me/919999999999?text=Hello%20Green%20Nova,%20I%20used%20your%20Decarbonization%20Calculator%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                Direct WhatsApp Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
