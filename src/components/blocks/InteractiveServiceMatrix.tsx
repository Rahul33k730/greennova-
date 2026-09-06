import { useState } from 'react';
import Icon from '@/components/primitives/Icon';
import Button from '@/components/primitives/Button';

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  image: string;
  headline: string;
  capacityRange: string;
  keyNorms: string[];
  feedstocks: string[];
  deliverables: string[];
  targetIndustries: string[];
  href: string;
}

const VERTICAL_DETAILS: ServiceDetail[] = [
  {
    id: 'h2',
    title: 'Green Hydrogen',
    category: 'Clean Fuels & Decarbonization',
    image: '/images/service-green-hydrogen.jpg',
    headline: 'High-Purity PEM & Alkaline Electrolyzer Systems for Heavy Industry',
    capacityRange: '500 kW to 25 MW modules',
    keyNorms: ['National Green Hydrogen Mission', 'PESO SMPV Rules', 'ISO 22734'],
    feedstocks: ['Demineralized Water (DM)', 'Renewable RTC Power'],
    deliverables: ['Electrolyzer Balance of Plant', 'Cryogenic & 350-Bar Storage', 'Dispensing Stations'],
    targetIndustries: ['Refineries', 'Steel & Direct Reduced Iron', 'Fertilizers', 'Heavy Mobility'],
    href: '/services/green-hydrogen',
  },
  {
    id: 'cbg',
    title: 'Compressed Biogas',
    category: 'Circular Bio-Economy',
    image: '/images/service-compressed-biogas.jpg',
    headline: 'Turnkey CBG / Bio-CNG Plants with Methane Enrichment > 96%',
    capacityRange: '5 TPD to 50 TPD Bio-CNG',
    keyNorms: ['SATAT Initiative (MoP&NG)', 'IS 16087:2016 (Automotive Fuel)', 'PESO Gas Cylinders'],
    feedstocks: ['Pressmud', 'Paddy Straw / Agro-Residue', 'Cattle Dung & Napier Grass'],
    deliverables: ['Continuous Stirred Tank Reactors (CSTR)', 'Membrane & PSA Scrubbers', 'Cascade Bottling'],
    targetIndustries: ['City Gas Distribution (CGD)', 'Commercial Fleets', 'Industrial Heating'],
    href: '/services/compressed-biogas',
  },
  {
    id: 'wte',
    title: 'Waste-to-Energy',
    category: 'Thermal & Municipal Infrastructure',
    image: '/images/service-waste-to-energy.jpg',
    headline: 'Mass-Burn & RDF Incineration with Multi-Stage Flue Gas Treatment',
    capacityRange: '300 TPD to 2,000 TPD MSW',
    keyNorms: ['Solid Waste Management Rules 2016', 'CPCB Continuous Emission Monitoring (CEMS)'],
    feedstocks: ['Segregated Municipal Solid Waste', 'RDF Pellets', 'Industrial Hazardous Sludge'],
    deliverables: ['Moving Grate Boilers', 'Steam Turbine Power Island', 'Dry Lime Injection & Baghouse'],
    targetIndustries: ['Municipal Corporations', 'Industrial Estates', 'State DISCOMs'],
    href: '/services/waste-to-energy',
  },
  {
    id: 'env',
    title: 'Environmental Engg',
    category: 'Compliance & Water Stewardship',
    image: '/images/service-environmental-engineering.jpg',
    headline: 'Zero Liquid Discharge (ZLD) Systems, ETPs & Comprehensive EIA Studies',
    capacityRange: '100 KLD to 10 MLD effluent',
    keyNorms: ['EIA Notification 2006 (MoEFCC)', 'Water & Air Acts', 'NABET Accreditation'],
    feedstocks: ['Industrial High-COD Effluents', 'Textile/Chemical Waste Streams', 'Sewage'],
    deliverables: ['MBBR & MBR Biological Reactors', 'RO & Mechanical Vapor Recompression (MVR)', 'Real-time CPCB Telemetry'],
    targetIndustries: ['Textile & Dyeing', 'Chemicals & Pharma', 'Food & Beverage', 'Industrial SEZs'],
    href: '/services/environmental-engineering',
  },
  {
    id: 'hybrid',
    title: 'Renewable Hybrid Energy',
    category: 'Utility-Scale Power',
    image: '/images/service-renewable-hybrid-energy.jpg',
    headline: 'Solar-Wind-BESS Hybrid Plants with 85%+ Plant Load Factor (PLF)',
    capacityRange: '10 MW to 250 MW portfolios',
    keyNorms: ['CERC / SERC Grid Code', 'CEA Technical Standards', 'MNRE Approved Modules (ALMM)'],
    feedstocks: ['High-Irradiance Solar', 'Class I/II/III Wind', 'Containerized LFP Battery Banks'],
    deliverables: ['Microgrid Energy Management System (EMS)', 'High-Voltage Switchyard & Substation', 'Turnkey EPC'],
    targetIndustries: ['Heavy Manufacturing', 'Commercial Real Estate', 'Data Centers', 'DISCOM PPA'],
    href: '/services/renewable-hybrid-energy',
  },
  {
    id: 'esg',
    title: 'Sustainability Advisory',
    category: 'Strategy & Governance',
    image: '/images/service-sustainability-advisory.jpg',
    headline: 'BRSR Core Audits, Decarbonization Roadmaps & Carbon Credit Readiness',
    capacityRange: 'Enterprise-wide footprint',
    keyNorms: ['SEBI BRSR Core Mandate', 'GHG Protocol Scope 1, 2 & 3', 'ISO 14064 Carbon Footprint'],
    feedstocks: ['Organizational Energy Data', 'Supply Chain Audits', 'Scope 3 Emission Inventories'],
    deliverables: ['Science-Based Targets (SBTi)', 'Carbon Credit Verification', 'Executive Board Oversight Packages'],
    targetIndustries: ['Listed BSE/NSE Corporates', 'Institutional Investors', 'Global Export Manufacturers'],
    href: '/services/sustainability-advisory',
  },
];

export default function InteractiveServiceMatrix() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeService = VERTICAL_DETAILS[activeTab];

  return (
    <section id="capabilities-matrix" className="ds-section bg-paper relative overflow-hidden">
      <div className="ds-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal-up">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Technical Capability Matrix
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Multi-Vertical Engineering Specifications
            </h2>
            <p className="mt-2 text-base text-ink-muted max-w-2xl">
              Inspect technical capacities, Indian regulatory standards, and turnkey deliverables across each specialized vertical.
            </p>
          </div>
          <div className="hidden md:block">
            <Button as="a" href="/services" variant="outline" size="sm" iconRight="arrow-right">
              View All Service Details
            </Button>
          </div>
        </div>

        {/* Horizontal Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-line">
          {VERTICAL_DETAILS.map((svc, idx) => (
            <button
              key={svc.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-forest-900 text-white shadow-md font-semibold'
                  : 'bg-white text-ink-light hover:bg-forest-50 hover:text-forest-800 border border-line'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-emerald-400' : 'bg-forest-300'}`} />
              {svc.title}
            </button>
          ))}
        </div>

        {/* Active Vertical Showcase Card */}
        <div className="rounded-3xl border border-line bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Visual column */}
          <div className="lg:col-span-5 relative min-h-[18rem] lg:min-h-full overflow-hidden bg-forest-950">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
              <span className="text-[0.7rem] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                {activeService.category}
              </span>
              <h3 className="font-display text-2xl font-bold mt-3 leading-snug">
                {activeService.title}
              </h3>
              <p className="text-xs text-white/80 mt-1 font-mono">
                Standard Capacity: {activeService.capacityRange}
              </p>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-ink leading-snug">
                {activeService.headline}
              </h4>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Standards */}
                <div className="rounded-2xl bg-paper-warm/80 border border-line/60 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-forest-800 font-mono flex items-center gap-1.5 mb-2.5">
                    <Icon name="award" size={14} />
                    Regulatory Bankability
                  </div>
                  <ul className="space-y-1.5 text-xs text-ink-light">
                    {activeService.keyNorms.map((norm) => (
                      <li key={norm} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        {norm}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Turnkey Deliverables */}
                <div className="rounded-2xl bg-paper-warm/80 border border-line/60 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-forest-800 font-mono flex items-center gap-1.5 mb-2.5">
                    <Icon name="shield" size={14} />
                    Core Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-ink-light">
                    {activeService.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-1.5">
                        <span className="text-sky-600 font-bold">•</span>
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target Sectors */}
              <div className="mt-5 pt-4 border-t border-line">
                <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider block mb-2 font-mono">
                  Primary Offtake Sectors:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.targetIndustries.map((ind) => (
                    <span
                      key={ind}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs font-medium"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-xs text-ink-muted">
                Need engineering sizing or CAPEX breakdown?
              </span>
              <div className="flex gap-2.5">
                <Button as="a" href={activeService.href} variant="outline" size="sm" iconRight="arrow-right">
                  Technical Specs
                </Button>
                <Button as="a" href="#contact" variant="accent" size="sm" iconRight="arrow-right">
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
