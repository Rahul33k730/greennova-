import { useState } from 'react';
import Icon from '@/components/primitives/Icon';
import type { ServiceDetailData } from '@/data/services-data';

interface ServicePracticeOverviewProps {
  service: ServiceDetailData;
}

interface PracticeSpec {
  image: string;
  routeHeadline: string;
  capacity: string;
  feedstock: string;
  standards: string[];
  deliverables: string[];
  pipeline: Array<{
    title: string;
    description: string;
    equipment: string[];
  }>;
}

const VERTICAL_SPECS: Record<string, PracticeSpec> = {
  'waste-to-energy': {
    image: '/images/service-waste-to-energy.jpg',
    routeHeadline: 'Mass-Burn & RDF Incineration with Multi-Stage Flue Gas Scrubbing',
    capacity: '300 TPD to 2,000 TPD MSW',
    feedstock: 'Segregated MSW, RDF Pellets & Agro-Residue',
    standards: ['CPCB CEMS Guidelines', 'Solid Waste Rules 2016', 'CEIG Standards', 'ISO 14001'],
    deliverables: ['Moving Grate Boilers', 'Steam Turbine Power Island', 'Dry Sorbent Injection & Baghouse', 'Ash Vitrification'],
    pipeline: [
      {
        title: 'Feedstock Ingestion & RDF Sorting',
        description: 'Empirical waste characterisation, trommel screening, ballistic separation, and shredding to RDF specification.',
        equipment: ['Trommel Screens', 'Magnetic Separators', 'Primary Shredders'],
      },
      {
        title: 'High-Temperature Thermal Island',
        description: 'Multi-stage moving grate combustion with precision air preheating, achieving >850°C for complete destruction.',
        equipment: ['Reciprocating Grate Boiler', 'Steam Drum', 'Combustion Preheaters'],
      },
      {
        title: 'Flue Gas Cleaning & CEMS',
        description: 'Dry lime/activated carbon injection, fabric baghouse filtration, and continuous emission monitoring connected to CPCB.',
        equipment: ['Dry Sorbent Injector', 'Pulse-Jet Baghouse', 'CPCB Online CEMS'],
      },
      {
        title: 'Turbine Island & Grid Evacuation',
        description: 'Condensing steam turbine-generator synchronization, high-voltage switchyard evacuation, and bottom ash upcycling.',
        equipment: ['Condensing Steam Turbine', 'Switchyard Bay', 'Ash Upcycling Unit'],
      },
    ],
  },
  'green-hydrogen': {
    image: '/images/service-green-hydrogen.jpg',
    routeHeadline: 'High-Purity PEM & Alkaline Electrolyzer Systems for Heavy Industry',
    capacity: '1 MW to 100+ MW Modules',
    feedstock: 'Ultra-Pure Demineralized Water (DM) & RTC Renewable Power',
    standards: ['National Green Hydrogen Mission', 'PESO SMPV Rules', 'ISO 22734', 'NFPA 2'],
    deliverables: ['Electrolyzer Stack BOP', 'Deoxypurifier & TSA Dryers', '350/700 Bar Compression', 'Bulk Storage & Dispensing'],
    pipeline: [
      {
        title: 'Water Demineralization & Power Ingestion',
        description: 'Reverse osmosis and electrodeionization producing <0.1 µS/cm conductivity feed, with high-efficiency rectifiers.',
        equipment: ['Two-Pass RO & EDI Skids', 'IGBT Rectifiers', 'Harmonic Filter Banks'],
      },
      {
        title: 'Electrolysis Stack Island',
        description: 'PEM / pressurized alkaline stack array generating green H₂ with precision heat recovery and liquid-gas separation.',
        equipment: ['Electrolyzer Stack Array', 'Lye Circulation Skids', 'Gas-Liquid Separators'],
      },
      {
        title: 'Gas Conditioning & Compression',
        description: 'Catalytic deoxypurification removing residual O₂ to <5 ppm and TSA drying to -70°C dew point before multi-stage compression.',
        equipment: ['Catalytic Deoxypurifier', 'TSA Desiccant Dryers', 'Diaphragm Compressors'],
      },
      {
        title: 'Storage, Dispensing & Offtake',
        description: 'Type-I/Type-IV cylinder cascades, cryogenic spherical tanks, and dual-pressure dispensing skids for industrial and mobility offtake.',
        equipment: ['350/700-Bar Storage Cascades', 'Priority Dispensing Panel', 'Pipeline Injection Skid'],
      },
    ],
  },
  'compressed-biogas': {
    image: '/images/service-compressed-biogas.jpg',
    routeHeadline: 'Turnkey CBG / Bio-CNG Plants with Methane Enrichment > 96%',
    capacity: '5 TPD to 50 TPD Bio-CNG',
    feedstock: 'Pressmud, Agri-Residue Straw, Cattle Dung & Napier Grass',
    standards: ['SATAT Initiative (MoP&NG)', 'IS 16087:2016 (Automotive Fuel)', 'PESO Gas Cylinders', 'CPCB'],
    deliverables: ['Continuous Stirred Tank Reactors (CSTR)', 'Membrane & PSA Scrubbers', 'Cascade Bottling', 'Organic Bio-Fertilizer (FOM)'],
    pipeline: [
      {
        title: 'Biomass Pre-Treatment & Feeding',
        description: 'De-stoning, enzymatic/hydrothermal biomass conditioning, and automated high-solids slurry preparation.',
        equipment: ['De-stoning Pulverizer', 'Hydrothermal Reactor', 'Heavy Slurry Pumps'],
      },
      {
        title: 'Anaerobic Digestion (CSTR)',
        description: 'Multi-stage mesophilic digestion with mechanical agitators, internal heating coils, and biological desulfurization.',
        equipment: ['Insulated CSTR Digester', 'Vertical Draft Agitators', 'Biological H2S Scrubber'],
      },
      {
        title: 'Membrane Biogas Upgrading',
        description: 'Multi-stage hollow-fiber polymer membranes purifying raw biogas to >96% pure methane with <1% methane slip.',
        equipment: ['High-Pressure Compressor', 'Multi-Stage Membranes', 'Chilled Moisture Trap'],
      },
      {
        title: 'Cascade Bottling & Bio-Manure',
        description: 'Compression to 250 bar into PESO-certified mobile cascades, plus screw press dewatering for solid/liquid bio-fertilizer.',
        equipment: ['250-Bar High-Pressure Compressor', 'PESO Filling Manifold', 'Screw Press Separator'],
      },
    ],
  },
  'environmental-engineering': {
    image: '/images/service-environmental-engineering.jpg',
    routeHeadline: 'Zero Liquid Discharge (ZLD), Industrial ETPs & Comprehensive EIA Studies',
    capacity: '100 KLD to 10 MLD Effluent',
    feedstock: 'High-COD Chemical Streams, Textile Dyeing, Refinery & Pharma Waste',
    standards: ['EIA Notification 2006 (MoEFCC)', 'Water & Air Acts', 'CPCB ZLD Directives', 'NABET / QCI'],
    deliverables: ['MBBR & MBR Biological Reactors', 'High-Recovery RO Membranes', 'MVR & Crystallizers', 'Real-Time CPCB Telemetry'],
    pipeline: [
      {
        title: 'Effluent Characterization & Equalization',
        description: 'Continuous online sensor monitoring, primary screening, chemical flash mixing, and dissolved air flotation (DAF).',
        equipment: ['DAF Clarifiers', 'Equalization Aeration Grids', 'Chemical Coagulation Skids'],
      },
      {
        title: 'Advanced Biological Treatment',
        description: 'Moving Bed Biofilm Reactors (MBBR) and ultrafiltration Membrane Bioreactors (MBR) for stubborn COD/BOD digestion.',
        equipment: ['High-Surface Media MBBR', 'Submerged Hollow-Fiber MBR', 'Fine Bubble Diffusers'],
      },
      {
        title: 'High-Recovery Membrane Desalination',
        description: 'Multi-pass reverse osmosis with energy recovery devices, achieving up to 90% water recovery for process recycling.',
        equipment: ['High-Pressure RO Vessels', 'Energy Recovery Devices (ERD)', 'Anti-Scalant Dosing Modules'],
      },
      {
        title: 'Thermal ZLD & Crystallization',
        description: 'Mechanical Vapor Recompression (MVR) falling film evaporators and forced circulation crystallizers recovering dry salts.',
        equipment: ['MVR Evaporator', 'Forced Crystallizer', 'Centrifuge Salt Dryer'],
      },
    ],
  },
  'renewable-hybrid-energy': {
    image: '/images/service-renewable-hybrid-energy.jpg',
    routeHeadline: 'Solar-Wind-BESS Hybrid Plants with High Plant Load Factor (PLF)',
    capacity: '10 MW to 250+ MW Portfolios',
    feedstock: 'High-Irradiance Solar, Class I/II/III Wind & Containerized LFP Storage',
    standards: ['CERC / SERC Grid Code', 'CEA Technical Standards', 'MNRE ALMM Mandate', 'IEC 62109 / 61400'],
    deliverables: ['Microgrid Energy Management System (EMS)', 'High-Voltage Switchyard & Substation', 'BESS Power Conditioning', 'RTC Scheduling'],
    pipeline: [
      {
        title: 'Resource Assessment & Site Simulation',
        description: 'LIDAR wind profiling, solar pyranometer data, shadow mapping, and proprietary hybrid yield optimization.',
        equipment: ['Wind LIDAR & Met Masts', 'PVSyst & WAsP Modeling', 'Terrain 3D GIS Mapping'],
      },
      {
        title: 'Co-located Generation Island',
        description: 'Bifacial TOPCon solar PV arrays with single-axis tracking alongside high-capacity utility wind turbine generators.',
        equipment: ['Bifacial PV Modules', 'Single-Axis Trackers', 'Direct-Drive Wind Turbines'],
      },
      {
        title: 'BESS & Intelligent Power Conversion',
        description: 'Containerized LFP battery arrays with liquid cooling and sub-second Power Conversion Systems (PCS) for grid stabilization.',
        equipment: ['Containerized LFP Battery Banks', 'Bi-directional Inverters / PCS', 'HVAC Liquid Cooling Modules'],
      },
      {
        title: 'Substation Evacuation & EMS Dispatch',
        description: '33kV/132kV/220kV automated AIS/GIS switchyards integrated with AI-driven Energy Management System for round-the-clock dispatch.',
        equipment: ['132/220kV Power Transformers', 'GIS / AIS Switchgear', 'SCADA & Hybrid EMS Controller'],
      },
    ],
  },
  'sustainability-advisory': {
    image: '/images/service-sustainability-advisory.jpg',
    routeHeadline: 'BRSR Core Audits, Decarbonization Roadmaps & Carbon Credit Readiness',
    capacity: 'Enterprise-Wide Footprint',
    feedstock: 'Scope 1, 2 & 3 Emission Data, Energy Audits & Supply Chain Inventories',
    standards: ['SEBI BRSR Core Framework', 'GHG Protocol Corporate Standard', 'ISO 14064 (MRV)', 'SBTi 1.5°C'],
    deliverables: ['Science-Based Targets (SBTi)', 'Scope 3 Supply Chain Audit', 'Carbon Offset Verification', 'Executive Board ESG Cockpit'],
    pipeline: [
      {
        title: 'Corporate GHG & Materiality Audit',
        description: 'Comprehensive Scope 1, 2, and 3 carbon accounting across operational facilities and upstream/downstream suppliers.',
        equipment: ['Activity Data Ingestion Engine', 'Tier-1 Emission Factor Database', 'Materiality Matrix Mapping'],
      },
      {
        title: 'Decarbonization Pathway Modeling',
        description: 'Marginal Abatement Cost (MAC) curve analysis, captive renewable power feasibility, and fuel substitution modeling.',
        equipment: ['Techno-Economic Modeling Tools', 'Abatement Scenario Simulator', 'PPA Optimization Models'],
      },
      {
        title: 'SEBI BRSR Core & SBTi Validation',
        description: 'Structuring mandatory non-financial quantitative metrics and documentation trails ready for third-party reasonable assurance.',
        equipment: ['BRSR Core Metric Engine', 'SBTi Documentation Packager', 'Audit Trail Registry'],
      },
      {
        title: 'Executive Governance & Financing',
        description: 'Board reporting dashboards, sustainability-linked loan (SLL) KPI formulation, and verified carbon credit registry onboarding.',
        equipment: ['Executive ESG Dashboard', 'Green Finance Covenant Tracking', 'Registry Issuance Documentation'],
      },
    ],
  },
};

const DEFAULT_SPEC: PracticeSpec = {
  image: '/images/hero/hero-slide-1.jpg',
  routeHeadline: 'Turnkey Industrial Infrastructure & Systems Integration',
  capacity: 'Turnkey Portfolio Scale',
  feedstock: 'Standard Industrial Feedstocks',
  standards: ['CPCB Guidelines', 'ISO 14001', 'Institutional Due Diligence'],
  deliverables: ['Detailed Engineering', 'Balance of Plant', 'Commissioning & Handover'],
  pipeline: [
    {
      title: 'Concept & Feedstock Assessment',
      description: 'Site feasibility, resource evaluation, and techno-economic modeling.',
      equipment: ['Site Survey Tools', 'Simulation Engines'],
    },
    {
      title: 'Detailed Engineering & BOP',
      description: '3D modeling, P&ID generation, and civil/electrical balance of plant.',
      equipment: ['CAD Engineering', 'Process Control Systems'],
    },
    {
      title: 'Execution & Quality Assurance',
      description: 'Vendor FATs, on-site construction, and statutory inspections.',
      equipment: ['Testing Skids', 'Telemetry Loggers'],
    },
    {
      title: 'Commissioning & Handover',
      description: 'Performance testing, grid synchronization, and operating handover.',
      equipment: ['Data Acquisition System', 'Control Room SCADA'],
    },
  ],
};

export default function ServicePracticeOverview({ service }: ServicePracticeOverviewProps) {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'pipeline' | 'governance'>('capabilities');
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);

  const spec = VERTICAL_SPECS[service.slug] || DEFAULT_SPEC;

  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className="ds-section bg-paper-warm/40 border-b border-line relative overflow-hidden"
    >
      <div className="ds-container">
        {/* =========================================================================
            1. BALANCED EXECUTIVE HEADER (NO EMPTY VOIDS OR UNFORMATTED TEXT WALLS)
           ========================================================================= */}
        <div className="mb-10 lg:mb-12">
          {/* Eyebrow badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="inline-flex items-center rounded-full border border-forest-200/80 bg-forest-50/90 px-3.5 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-forest-800 shadow-xs">
              Practice Architecture &amp; Delivery Scope
            </span>

            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-forest-800 bg-paper border border-line px-3 py-1.5 rounded-lg">
              PAN India Standard • {service.shortTitle}
            </span>
          </div>

          {/* Section Headline */}
          <h2
            id="overview-title"
            className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-[2.65rem] tracking-tight leading-[1.16]"
          >
            Turnkey Engineering Scope &amp; Technical Delivery
          </h2>

          {/* Executive Brief Callout Card */}
          <div className="mt-5 p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-[1.05rem] md:text-[1.12rem] leading-[1.75] text-ink-muted font-normal">
                {service.overview.lead}
              </p>
            </div>
            <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-forest-50 text-forest-800 border border-forest-200/80">
                <Icon name="shield" size={14} className="text-emerald-600" />
                100% Vendor Neutral
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-paper-warm text-ink-light border border-line">
                <Icon name="award" size={14} className="text-gold-600" />
                Bankable EPC Standard
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. VISUAL PLANT ENGINEERING SHOWCASE (AUTHENTIC MEDIA + HUD TELEMETRY)
           ========================================================================= */}
        <div className="mb-10 lg:mb-12 rounded-3xl border border-line bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Media Column (Left) */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[260px] lg:min-h-[340px] overflow-hidden bg-forest-950 group">
              <img
                src={spec.image}
                alt={`${service.title} facility engineering`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-forest-950/80 border border-white/20 backdrop-blur-md text-white text-[0.72rem] font-mono font-semibold tracking-wider uppercase">
                Live EPC Blueprint
              </div>

              {/* Bottom Frosted Overlay Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-forest-950/85 border border-white/15 backdrop-blur-md text-white">
                <span className="text-[0.7rem] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                  Core Process Technology Route
                </span>
                <p className="text-sm font-semibold leading-snug text-white/95">
                  {spec.routeHeadline}
                </p>
              </div>
            </div>

            {/* Live Telemetry Envelope Column (Right) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-line mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-forest-50 border border-forest-200/80 flex items-center justify-center text-forest-700">
                      <Icon name={service.icon} size={16} />
                    </div>
                    <div>
                      <span className="text-[0.7rem] font-mono font-bold uppercase tracking-wider text-forest-700 block">
                        Technical Envelope
                      </span>
                      <h3 className="font-display font-bold text-base text-ink leading-tight">
                        Operating Parameters &amp; Delivery Envelope
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md text-[0.7rem] font-mono uppercase font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Active Specification
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-paper-warm/50 border border-line/80">
                    <span className="text-[0.72rem] font-semibold text-ink-muted uppercase tracking-wider block mb-1">
                      Capacity Sizing Range
                    </span>
                    <p className="text-[0.92rem] font-bold text-forest-950 leading-snug">
                      {spec.capacity}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-paper-warm/50 border border-line/80">
                    <span className="text-[0.72rem] font-semibold text-ink-muted uppercase tracking-wider block mb-1">
                      Primary Feedstocks / Ingestion
                    </span>
                    <p className="text-[0.88rem] font-semibold text-forest-950 leading-snug">
                      {spec.feedstock}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-paper-warm/50 border border-line/80">
                    <span className="text-[0.72rem] font-semibold text-ink-muted uppercase tracking-wider block mb-1">
                      Institutional Standards
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {spec.standards.map((st) => (
                        <span
                          key={st}
                          className="px-2 py-0.5 rounded text-[0.7rem] font-medium bg-white border border-line text-ink-light"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-paper-warm/50 border border-line/80">
                    <span className="text-[0.72rem] font-semibold text-ink-muted uppercase tracking-wider block mb-1">
                      Key Balance of Plant (BOP)
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {spec.deliverables.slice(0, 3).map((del) => (
                        <span
                          key={del}
                          className="px-2 py-0.5 rounded text-[0.7rem] font-medium bg-white border border-line text-ink-light"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                <div className="mt-6 pt-4 border-t border-line/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                  Calibrated for Indian climate, feedstock variance &amp; grid dynamics.
                </span>
                <a
                  href={`https://wa.me/918550983678?text=${encodeURIComponent(`Hello Green Nova, I would like to discuss technical scoping for ${service.shortTitle}.`)}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-forest-800 hover:text-emerald-700 transition-colors"
                >
                  <span>Request Technical Scoping</span>
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. DYNAMIC INTERACTIVE PRACTICE EXPLORER (TABS & VIEWS)
           ========================================================================= */}
        <div className="mb-10 lg:mb-12">
          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-paper rounded-2xl border border-line mb-8 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('capabilities')}
              className={`flex-1 min-w-[180px] sm:min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'capabilities'
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'text-ink-light hover:text-forest-900 hover:bg-white/80'
              }`}
            >
              <Icon name="factory" size={16} />
              <span>Turnkey Capability Pillars</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('pipeline')}
              className={`flex-1 min-w-[180px] sm:min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'pipeline'
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'text-ink-light hover:text-forest-900 hover:bg-white/80'
              }`}
            >
              <Icon name="energy" size={16} />
              <span>Process Flow Pipeline</span>
              <span className="hidden md:inline-flex px-1.5 py-0.5 rounded text-[0.65rem] font-mono font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300">
                Interactive
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('governance')}
              className={`flex-1 min-w-[180px] sm:min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'governance'
                  ? 'bg-forest-900 text-white shadow-md'
                  : 'text-ink-light hover:text-forest-900 hover:bg-white/80'
              }`}
            >
              <Icon name="shield" size={16} />
              <span>Bankability &amp; Governance</span>
            </button>
          </div>

          {/* VIEW 1: CAPABILITY PILLARS */}
          {activeTab === 'capabilities' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              {[
                {
                  badge: 'Front-End Scope',
                  title: 'Plant Engineering & Systems Integration',
                  icon: 'factory' as const,
                  tags: ['Process Simulation', 'Balance of Plant (BOP)', 'Commissioning & Handover'],
                  content: service.overview.paragraphs[0],
                },
                {
                  badge: 'Methodology',
                  title: 'Technology Sizing & Site-Specific Calibration',
                  icon: 'shield' as const,
                  tags: ['Vendor-Neutral Selection', 'Feedstock Variance Calibration', 'Capex Optimization'],
                  content: service.overview.paragraphs[1],
                },
                {
                  badge: 'Governance',
                  title: 'Institutional Compliance & Performance Guarantees',
                  icon: 'award' as const,
                  tags: ['Statutory HAZOP / SIL', 'Audited Availability Agreements', 'Institutional Bankability'],
                  content: service.overview.paragraphs[2],
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:border-forest-600/50 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  <div aria-hidden className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-forest-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-forest-50 border border-forest-200/80 flex items-center justify-center text-forest-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-forest-900 group-hover:text-emerald-300 group-hover:border-forest-900">
                        <Icon name={pillar.icon} size={18} />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[0.7rem] font-semibold tracking-wider uppercase bg-paper-warm border border-line text-ink-muted group-hover:border-forest-300 group-hover:text-forest-800 transition-colors">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-[1.12rem] leading-snug text-ink group-hover:text-forest-950 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-[0.92rem] leading-[1.75] text-ink-muted font-normal mt-3.5">
                      {pillar.content}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/70 flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[0.72rem] font-medium bg-paper-warm text-ink-light border border-line/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-forest-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIEW 2: INTERACTIVE PROCESS FLOW PIPELINE */}
          {activeTab === 'pipeline' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Stepper Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {spec.pipeline.map((step, idx) => {
                  const isSelected = activePipelineStep === idx;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActivePipelineStep(idx)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? 'bg-forest-950 text-white border-forest-900 shadow-lg -translate-y-1'
                          : 'bg-white border-line text-ink hover:border-forest-300 hover:bg-forest-50/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className={`font-mono text-xs font-bold uppercase tracking-wider ${
                              isSelected ? 'text-emerald-400' : 'text-forest-700'
                            }`}
                          >
                            Stage {idx + 1} of 4
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? 'bg-emerald-400 animate-ping' : 'bg-line'
                            }`}
                          />
                        </div>
                        <h4
                          className={`font-display font-semibold text-sm sm:text-[0.95rem] leading-snug ${
                            isSelected ? 'text-white' : 'text-ink'
                          }`}
                        >
                          {step.title}
                        </h4>
                      </div>

                      <div
                        className={`mt-4 pt-3 border-t text-[0.72rem] font-medium uppercase tracking-wider flex items-center justify-between ${
                          isSelected ? 'border-white/20 text-white/70' : 'border-line text-ink-muted'
                        }`}
                      >
                        <span>{isSelected ? 'Viewing Stage' : 'Click to inspect'}</span>
                        <span>→</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Active Stage Showcase */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-line shadow-sm relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
                      Detailed Stage Inspection — Stage {activePipelineStep + 1}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-ink mb-3">
                      {spec.pipeline[activePipelineStep].title}
                    </h3>
                    <p className="text-[1.02rem] leading-relaxed text-ink-muted">
                      {spec.pipeline[activePipelineStep].description}
                    </p>
                  </div>

                  {/* Stage Equipment Systems */}
                  <div className="lg:w-80 shrink-0 p-5 rounded-2xl bg-paper-warm/70 border border-line">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-forest-900 block mb-3">
                      Integrated Systems &amp; Equipment
                    </span>
                    <ul className="space-y-2.5">
                      {spec.pipeline[activePipelineStep].equipment.map((eq) => (
                        <li key={eq} className="flex items-center gap-2.5 text-xs font-semibold text-ink">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: BANKABILITY & GOVERNANCE MATRIX */}
          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn items-stretch">
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: 'Technology Governance',
                    value: '100% Vendor Neutral',
                    desc: 'Independent OEM benchmarking — never locked to captive products or proprietary hardware.',
                    icon: 'shield' as const,
                  },
                  {
                    label: 'Regulatory & Safety',
                    value: 'Statutory Compliance Ready',
                    desc: 'HAZOP, SIL ratings, CEIG standards, and state pollution control board audit documentation.',
                    icon: 'check' as const,
                  },
                  {
                    label: 'Financing Grade',
                    value: 'Institutional Bankability',
                    desc: 'Structured to pass rigorous due-diligence by tier-1 infrastructure lenders, multilateral funds, and PE.',
                    icon: 'award' as const,
                  },
                  {
                    label: 'Delivery Model',
                    value: 'Single Accountability',
                    desc: 'End-to-end engineering responsibility spanning concept, detailed engineering through 25-year O&M.',
                    icon: 'clock' as const,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-2xl border border-line bg-white shadow-sm hover:border-forest-300 hover:bg-forest-50/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[0.74rem] font-mono font-bold text-forest-700 uppercase tracking-wider">
                          {item.label}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-forest-50 border border-forest-200/80 flex items-center justify-center text-forest-800">
                          <Icon name={item.icon} size={14} />
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-base text-ink mb-2">
                        {item.value}
                      </h4>
                      <p className="text-[0.84rem] text-ink-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Box */}
              <div className="lg:col-span-4 rounded-2xl bg-forest-950 p-7 text-white flex flex-col justify-between border border-forest-900 shadow-md">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 mb-4">
                    <Icon name={service.icon} size={20} />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Scoping a {service.shortTitle} Asset?
                  </h4>
                  <p className="text-xs sm:text-[0.84rem] leading-relaxed text-white/75 mb-6">
                    Connect directly with our senior process and design engineers for bankable techno-economic evaluation, capacity modeling, and regulatory review.
                  </p>
                </div>

                <a
                  href={`https://wa.me/918550983678?text=${encodeURIComponent(`Hello Green Nova, I would like to schedule a technical scoping review for ${service.shortTitle}.`)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-forest-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  <span>Schedule Technical Review</span>
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            4. DYNAMIC VISUAL KPI METRICS STRIP (AT-A-GLANCE COMMITMENTS)
           ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {[
            {
              value: '100%',
              label: 'Vendor Neutrality',
              sub: 'Zero captive OEM bias',
              icon: 'shield' as const,
            },
            {
              value: '>98.5%',
              label: 'Availability SLA',
              sub: 'Audited uptime warranty',
              icon: 'energy' as const,
            },
            {
              value: 'Tier-1',
              label: 'Bankability Grade',
              sub: 'Passed lender due diligence',
              icon: 'award' as const,
            },
            {
              value: '25+ Yrs',
              label: 'Asset Operating Life',
              sub: 'Complete lifecycle O&M',
              icon: 'clock' as const,
            },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-line shadow-xs hover:shadow-md hover:border-forest-300 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-display font-bold text-2xl sm:text-3xl text-forest-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {kpi.value}
                </span>
                <div className="w-8 h-8 rounded-lg bg-forest-50 border border-forest-200/60 flex items-center justify-center text-forest-700 group-hover:bg-forest-900 group-hover:text-emerald-300 transition-colors">
                  <Icon name={kpi.icon} size={15} />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-bold text-ink block">
                {kpi.label}
              </span>
              <span className="text-[0.75rem] text-ink-muted font-normal block mt-0.5">
                {kpi.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
