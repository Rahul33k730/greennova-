/**
 * Green Nova Energy — Service Detail Data
 * ----------------------------------------
 * Central data store for all 6 service verticals.
 * Each service object drives the ServiceDetailPage template.
 * Professional, institutional-grade engineering copy.
 */

import type { IconName } from '@/types/design-system';

/* ===========================================================
   SHARED TYPES
   =========================================================== */
export interface ServiceIndustry {
  icon: IconName;
  name: string;
  detail?: string;
  image?: string;
}

export interface ServiceApplication {
  icon: IconName;
  name: string;
  detail?: string;
}

export interface ServiceBenefit {
  icon: IconName;
  iconVariant?: 'nova' | 'forest' | 'gold' | 'outline' | 'dark';
  eyebrow?: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  phase: string;
  title: string;
  bullets: string[];
  icon?: IconName;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetailData {
  slug: string;
  index: string;
  icon: IconName;
  eyebrow?: string;
  title: string;
  shortTitle: string;
  tagline: string;
  overview: {
    lead: string;
    paragraphs: string[];
  };
  applications: ServiceApplication[];
  industries: ServiceIndustry[];
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faq: ServiceFAQ[];
  /** Optional hero background image for the service detail page */
  backgroundImage?: string;
  /** CTA at bottom of service detail page */
  cta: {
    headline: string;
    subcopy: string;
  };
}

/* ===========================================================
   SERVICE 01 — GREEN HYDROGEN
   =========================================================== */
export const GREEN_HYDROGEN: ServiceDetailData = {
  slug: 'green-hydrogen',
  index: '01',
  icon: 'gas',
  title: 'Green Hydrogen Engineering & Systems',
  shortTitle: 'Green Hydrogen',
  tagline: 'End-to-End Green Hydrogen Generation, Storage, Dispensing and Downstream Process Offtake',
  overview: {
    lead:
      'Green Nova engineers and delivers scalable green hydrogen production and infrastructure assets — spanning 1 MW demonstration clusters through to 100+ MW multi-vertical industrial hubs.',
    paragraphs: [
      'We integrate core electrolyser technologies, gas compression, bulk storage, manifold distribution, dispensing, and downstream process integration across refineries, green steel, ammonia synthesis, and heavy mobility.',
      'Our vendor-neutral methodology rigorously evaluates Alkaline, PEM, AEM, and Solid Oxide routes against your site conditions, power profiles, and capital structure to maximize long-term asset productivity.',
      'Every facility is delivered with institutional bankability, rigorous safety documentation including HAZOP, SIL, and QRA, third-party audited performance guarantees, and end-to-end operational readiness.',
    ],
  },
  applications: [
    { icon: 'factory', name: 'Refinery Hydrotreatment', detail: 'H₂ for FCC, HDT, and hydrocracker units' },
    { icon: 'factory', name: 'Green Steel (DRI)', detail: 'Direct reduced iron feedstock off-take' },
    { icon: 'factory', name: 'Green Ammonia Synthesis', detail: 'Haber-Bosch process front-end systems' },
    { icon: 'gas', name: 'Heavy-Duty Clean Mobility', detail: 'Refueling for heavy haulage, buses, and rail' },
    { icon: 'gas', name: 'Maritime & Aviation Fuels', detail: 'Precursor for e-methanol and SAF' },
    { icon: 'energy', name: 'Long-Duration Energy Storage', detail: 'Power-to-Gas-to-Power grid buffering' },
    { icon: 'factory', name: 'High-Temperature Heat', detail: 'Furnace, kiln, and industrial boiler decarbonisation' },
    { icon: 'gas', name: 'City Gas Grid Blending', detail: 'H₂ admixture into natural gas pipelines' },
  ],
  industries: [
    { icon: 'building', name: 'Refineries & Petrochemicals', detail: 'High-volume captive H₂ demand centres', image: '/images/industries/refinery.jpg' },
    { icon: 'factory', name: 'Steel & Metallurgical Plants', detail: 'Direct reduction and furnace routes', image: '/images/industries/steel.jpg' },
    { icon: 'factory', name: 'Fertilisers & Chemicals', detail: 'Ammonia and urea manufacturing', image: '/images/industries/refinery.jpg' },
    { icon: 'users', name: 'PSUs & Government Missions', detail: 'National Green Hydrogen Mission tenders', image: '/images/industries/power.jpg' },
    { icon: 'gas', name: 'City Gas Distribution (CGD)', detail: 'Pipeline blending & refueling skids', image: '/images/industries/gas.jpg' },
    { icon: 'globe', name: 'Ports & Industrial Hubs', detail: 'Green bunkering & export infrastructure', image: '/images/industries/ports-maritime.jpg' },
    { icon: 'building', name: 'Automotive & Logistics OEMs', detail: 'Commercial FCEV fleet depots', image: '/images/industries/automotive.jpg' },
    { icon: 'energy', name: 'Power Producers & Utilities', detail: 'Renewable curtailment conversion', image: '/images/industries/solar-wind.jpg' },
  ],
  benefits: [
    {
      icon: 'shield',
      iconVariant: 'forest',
      eyebrow: 'Technology Neutral',
      title: 'Vendor-Agnostic Selection',
      description:
        'Independent benchmarking across Alkaline, PEM, and Solid Oxide stacks based on power dynamics, duty cycles, and levelized cost of hydrogen.',
    },
    {
      icon: 'award',
      iconVariant: 'gold',
      eyebrow: 'Bankability',
      title: 'Institutional Engineering',
      description:
        'Stage-gated DPRs, detailed balance-of-plant design, and lender-ready risk registers structured to pass institutional financing review.',
    },
    {
      icon: 'energy',
      iconVariant: 'nova',
      eyebrow: 'Performance',
      title: 'Real-Cycle Simulation',
      description:
        'Front-end modelling calibrated against local renewable resource data, stack degradation curves, and parasitic balance-of-plant power loads.',
    },
    {
      icon: 'users',
      iconVariant: 'outline',
      eyebrow: 'Integration',
      title: 'Single-Source Delivery',
      description:
        'Unified engineering accountability spanning generation, gas treatment, high-pressure storage, distribution, and process integration.',
    },
    {
      icon: 'clock',
      iconVariant: 'outline',
      eyebrow: 'Process Safety',
      title: 'Rigorous Safety Architecture',
      description:
        'Formal HAZOP, SIL, and QRA safety reviews conforming to NFPA, ISO, and PESO standards from initial layout through commercial handover.',
    },
    {
      icon: 'globe',
      iconVariant: 'outline',
      eyebrow: 'Regulatory',
      title: 'Policy & Incentive Alignment',
      description:
        'Strategic alignment with the National Green Hydrogen Mission, SECI bidding frameworks, and grid open-access banking regulations.',
    },
  ],
  process: [
    {
      phase: 'Phase 01',
      title: 'Feasibility & Offtake Structuring',
      bullets: [
        'Techno-economic LCOH modelling with real renewable resource data',
        'Stack technology comparison across Alkaline, PEM, and AEM options',
        'Offtake alignment for refinery, green steel, and mobility applications',
        'Incentive mapping under the National Green Hydrogen Mission',
      ],
      icon: 'search',
    },
    {
      phase: 'Phase 02',
      title: 'Process & Detailed Engineering',
      bullets: [
        'Electrolyser balance-of-plant process flow and P&ID development',
        'Gas compression, high-pressure manifold, and storage layout',
        'Civil, structural, electrical, and process instrumentation engineering',
        'Comprehensive HAZOP, SIL, QRA, and statutory safety studies',
      ],
      icon: 'factory',
    },
    {
      phase: 'Phase 03',
      title: 'Procurement & Quality Assurance',
      bullets: [
        'Vendor-neutral OEM qualification and competitive bidding',
        'Electrolyser stack quality audits and factory acceptance testing (FAT)',
        'Compressor, valve, and piping quality control and expediting',
        'Safe shipping, delivery handling, and site preservation protocols',
      ],
      icon: 'shield',
    },
    {
      phase: 'Phase 04',
      title: 'Site Execution & Commissioning',
      bullets: [
        'Mechanical erection, interconnecting piping, and pressure testing',
        'Pre-commissioning nitrogen purge, utility readiness, and dry runs',
        'Energisation, stack ramp-up, and site acceptance testing (SAT)',
        'Full output, pressure, capacity, and gas purity sign-off',
      ],
      icon: 'energy',
    },
    {
      phase: 'Phase 05',
      title: 'Asset Handover & Long-Term O&M',
      bullets: [
        'Complete as-built engineering dossier and operational manuals',
        'Operator training and technical competency transfer programmes',
        'Real-time SCADA telemetry and predictive stack analytics',
        'Structured multi-year O&M with performance-linked uptime guarantees',
      ],
      icon: 'award',
    },
  ],
  faq: [
    {
      q: 'Which electrolyser technology do you recommend — Alkaline, PEM, or AEM?',
      a: 'We do not favor any single technology by default. Technology selection is determined by power source variability, operating duty cycles, purity requirements, pressure demands, and total cost of ownership. We evaluate each route against empirical performance data and justify the selection in writing.',
    },
    {
      q: 'Do you deliver turnkey EPC for green hydrogen facilities?',
      a: 'Yes. We provide complete EPC delivery across EPCM or lumpsum turnkey contracts, managing every stage from initial site preparation through commissioning, SAT sign-off, and statutory handover.',
    },
    {
      q: 'How does Green Nova manage process safety and statutory clearances?',
      a: 'Process safety is engineered from day one. We conduct formal HAZOP, SIL, and QRA studies aligned with NFPA, ISO, and PESO standards, and manage all statutory approvals and licensing through third-party audits.',
    },
    {
      q: 'Can you assist in structuring commercial offtake and incentives?',
      a: 'Yes. Our commercial practice collaborates with your legal and financial teams to align projects with MNRE, SECI, and mission-mode incentive programs, structuring robust offtake agreements for refineries, steelmakers, and industrial off-takers.',
    },
    {
      q: 'What project capacities does Green Nova execute?',
      a: 'Our execution capabilities span 1 MW demonstration clusters through to 100+ MW utility-scale hydrogen production facilities. We also conduct pre-FEED engineering for GW-scale pipeline developments.',
    },
    {
      q: 'Do you provide long-term operations and maintenance after commissioning?',
      a: 'Yes. We offer structured multi-year O&M contracts incorporating continuous SCADA performance monitoring, stack health diagnostics, preventative maintenance, and guaranteed plant availability.',
    },
  ],
  backgroundImage: '/images/industries/refinery.jpg',
  cta: {
    headline: 'Planning a Green Hydrogen Project? Let Us Model It First.',
    subcopy:
      'Engage our engineering practice early during concept and offtake scoping. We optimize electrolyser sizing, select the right technology route, and deliver assets engineered to institutional standards.',
  },
};

/* ===========================================================
   SERVICE 02 — COMPRESSED BIOGAS (CBG)
   =========================================================== */
export const CBG: ServiceDetailData = {
  slug: 'compressed-biogas',
  index: '02',
  icon: 'recycle',
  title: 'Compressed Biogas (CBG / Bio-CNG) Systems',
  shortTitle: 'Compressed Biogas',
  tagline: 'SATAT-Aligned CBG Infrastructure — Feedstock Strategy, Digestion, Upgradation & Grid Injection',
  overview: {
    lead:
      'Compressed Biogas (Bio-CNG) represents a commercial, scalable bridge in India’s renewable fuels transition — converting agricultural and municipal waste into pipeline-grade biomethane. We deliver bankable, high-yield CBG assets from concept through long-term operation.',
    paragraphs: [
      'Our practice covers the entire asset lifecycle: feedstock aggregation strategy, biochemical process design, anaerobic digestion, gas cleaning and upgradation, compression, cascade bottling, and city gas grid injection.',
      'We engineer specifically for diverse Indian feedstocks including agricultural residues, pressmud, cattle manure, the organic fraction of municipal solid waste, and industrial effluents, factoring in seasonal moisture and yield variations.',
      'Every project conforms to SATAT guidelines, CGD technical specifications, PESO standards, and state pollution control requirements, delivering the institutional documentation required by project finance lenders.',
    ],
  },
  applications: [
    { icon: 'gas', name: 'Retail Bio-CNG Fueling', detail: 'Automotive cascade dispensing under SATAT' },
    { icon: 'gas', name: 'City Gas Grid Injection', detail: 'Pipeline biomethane injection skids' },
    { icon: 'factory', name: 'Industrial Heat & Steam', detail: 'Clean fuel replacement for boilers and furnaces' },
    { icon: 'factory', name: 'Commercial & Institutional Heat', detail: 'Direct piped gas for industrial kitchens' },
    { icon: 'energy', name: 'Combined Heat & Power (CHP)', detail: 'High-efficiency on-site power generation' },
    { icon: 'leaf', name: 'Fermented Organic Manure', detail: 'High-grade bio-fertilizer and soil enrichment' },
    { icon: 'gas', name: 'Commercial Fleet Decarbonisation', detail: 'Dedicated depot fueling for logistics fleets' },
    { icon: 'water', name: 'Sludge Biomethane Systems', detail: 'Biogas recovery from municipal and industrial ETPs' },
  ],
  industries: [
    { icon: 'gas', name: 'City Gas Distribution (CGD)', detail: 'Grid injection and commercial off-take', image: '/images/industries/gas.jpg' },
    { icon: 'users', name: 'Oil & Gas PSUs', detail: 'SATAT commercial procurement tie-ups', image: '/images/industries/refinery.jpg' },
    { icon: 'water', name: 'Urban Local Bodies (ULBs)', detail: 'Integrated municipal solid waste processing', image: '/images/industries/municipal-waste.jpg' },
    { icon: 'leaf', name: 'Sugar Mills & Distilleries', detail: 'Pressmud and spent wash valorisation', image: '/images/industries/sugar-agro.jpg' },
    { icon: 'factory', name: 'Dairy & Livestock Farming', detail: 'Cattle manure aggregation and processing', image: '/images/industries/dairy-biogas.jpg' },
    { icon: 'factory', name: 'Agro-Processing Industry', detail: 'Food processing byproduct conversion', image: '/images/industries/food-beverage.jpg' },
    { icon: 'factory', name: 'Cement & Heavy Manufacturing', detail: 'Alternative fuel substitution', image: '/images/industries/cement.jpg' },
    { icon: 'users', name: 'Project Developers & IPPs', detail: 'Commercial waste-to-wealth project execution', image: '/images/industries/solar-wind.jpg' },
  ],
  benefits: [
    {
      icon: 'recycle',
      iconVariant: 'forest',
      eyebrow: 'Feedstock Sizing',
      title: 'Engineered for Indian Feedstocks',
      description:
        'Digestion chemistry designed specifically for pressmud, paddy straw, cow dung, and food wastes, accounting for seasonal volume and composition shifts.',
    },
    {
      icon: 'award',
      iconVariant: 'gold',
      eyebrow: 'Compliance',
      title: 'SATAT & CGD Alignment',
      description:
        'Full compliance with SATAT procurement norms, PNGRB guidelines, PESO gas storage codes, and state pollution control standards.',
    },
    {
      icon: 'gas',
      iconVariant: 'nova',
      eyebrow: 'Engineering',
      title: 'Upgradation & Injection Expertise',
      description:
        'In-house evaluation across water scrubbing, amine absorption, PSA, and membrane systems, paired with precision CGD grid injection skids.',
    },
    {
      icon: 'shield',
      iconVariant: 'outline',
      eyebrow: 'Bankability',
      title: 'Finance-Ready Documentation',
      description:
        'Techno-economic DPRs, gas yield sensitivity analyses, and financial models structured for institutional bank and NBFC underwriting.',
    },
    {
      icon: 'users',
      iconVariant: 'outline',
      eyebrow: 'Lifecycle',
      title: 'Turnkey EPC & O&M Continuity',
      description:
        'Unified accountability covering civil structures, digesters, gas clean-up, electrical, and SCADA automation with performance-backed operations.',
    },
    {
      icon: 'leaf',
      iconVariant: 'outline',
      eyebrow: 'Circular Economy',
      title: 'By-Product Valorisation',
      description:
        'Integrated solid-liquid digestate separation, bio-fertilizer pelletisation, and process water recycling engineered directly into the primary plant design.',
    },
  ],
  process: [
    {
      phase: 'Phase 01',
      title: 'Feasibility & Feedstock Strategy',
      bullets: [
        'Detailed DPR preparation with levelized cost of CBG and IRR modelling',
        'Feedstock availability surveys, sampling, and seasonality assessments',
        'Offtake structuring across retail dispensing, CGD injection, and industrial use',
        'SATAT policy incentives and central financial assistance mapping',
      ],
      icon: 'search',
    },
    {
      phase: 'Phase 02',
      title: 'Process & Detailed Engineering',
      bullets: [
        'Feedstock preparation, pre-treatment, and digester tank sizing',
        'Biogas upgradation route selection (scrubbing, PSA, membrane)',
        'Compression systems, cascade storage, and bottling manifold layout',
        'City gas grid injection, metering, and odorisation skid design',
      ],
      icon: 'factory',
    },
    {
      phase: 'Phase 03',
      title: 'Approvals & Equipment Procurement',
      bullets: [
        'Statutory clearance support for PCB, PESO, and CGD tie-in agreements',
        'Vendor-neutral selection of digester, compressor, and upgradation OEMs',
        'Factory acceptance testing (FAT) for major equipment packages',
        'Piping, instrumentation, and safety valve expediting and quality control',
      ],
      icon: 'shield',
    },
    {
      phase: 'Phase 04',
      title: 'Construction & Commissioning',
      bullets: [
        'Civil execution, tank erection, structural, and mechanical installation',
        'Hydrostatic testing, gas tightness verification, and utility readiness',
        'Biological inoculation, anaerobic ramp-up, and methane purity tuning',
        'Site acceptance testing (SAT), gas certification, and commercial handover',
      ],
      icon: 'energy',
    },
    {
      phase: 'Phase 05',
      title: 'Operations & Asset Maintenance',
      bullets: [
        'Comprehensive SOPs, operator training, and safety manuals',
        'Telemetry, yield monitoring, and cloud-connected SCADA dashboards',
        'Feedstock quality assurance and fermented manure marketing support',
        'Multi-year O&M agreements backed by uptime and yield guarantees',
      ],
      icon: 'award',
    },
  ],
  faq: [
    {
      q: 'What CBG plant capacities does Green Nova engineer and execute?',
      a: 'We work across project scales ranging from 2–5 TPD decentralized installations through to 20+ TPD commercial hubs with multi-stream feedstocks and dedicated CGD grid injection skids.',
    },
    {
      q: 'Which biogas upgradation technology is best suited for our project?',
      a: 'Upgradation selection depends on raw gas composition (H₂S, CO₂, siloxanes), required discharge pressure, CGD purity standards, water availability, and capital limits. We evaluate water wash, amine scrubbing, PSA, and membrane permeation objectively to select the optimal route.',
    },
    {
      q: 'How do you mitigate risks associated with raw feedstock supply?',
      a: 'Feedstock security is central to our feasibility phase. We conduct on-ground catchment mapping, moisture and seasonality testing, supplier contracting frameworks, and logistics planning to ensure reliable, multi-source raw material availability.',
    },
    {
      q: 'Can you handle city gas distribution (CGD) grid injection?',
      a: 'Yes. We design, procure, and commission complete injection skids, gas chromatographs, pressure reduction manifolds, and metering packages built to the exact specifications of the host CGD utility.',
    },
    {
      q: 'What solutions do you offer for digestate and slurry management?',
      a: 'Our plant layouts integrate mechanical solid-liquid separation, liquid nutrient recycling, and solid bio-slurry drying and pelletisation to produce high-value organic manure compliant with FCO standards.',
    },
    {
      q: 'Do you offer operational contracts post-commissioning?',
      a: 'Yes. We provide comprehensive 3 to 10 year operational contracts covering biology management, gas yield monitoring, scheduled overhaul, and continuous statutory compliance.',
    },
  ],
  backgroundImage: '/images/industries/gas.jpg',
  cta: {
    headline: 'Developing a CBG Facility? Build on Solid Engineering.',
    subcopy:
      'Engage our specialists during early feedstock assessment. We ensure realistic yield models, bankable technical DPRs, and seamless integration with CGD and retail off-takers.',
  },
};

/* ===========================================================
   SERVICE 03 — WASTE-TO-ENERGY
   =========================================================== */
export const WASTE_TO_ENERGY: ServiceDetailData = {
  slug: 'waste-to-energy',
  index: '03',
  icon: 'energy',
  title: 'Waste-to-Energy & Biomass Systems',
  shortTitle: 'Waste-to-Energy',
  tagline: 'Engineered Thermal & Biochemical Solutions Converting Municipal and Agricultural Residues into Clean Power',
  overview: {
    lead:
      'Converting complex waste streams into reliable clean power requires robust, ground-tested engineering. Green Nova delivers facilities across thermochemical and biochemical routes — tailored for municipal bodies, industrial clusters, and private concessionaires.',
    paragraphs: [
      'Our capability spans the complete engineering spectrum: refuse-derived fuel (RDF) sorting and combustion, agri-residue biomass boilers, biomethanation of organic waste fractions, and co-processing fuel preparation for heavy industry.',
      'We calibrate designs against empirical waste characterisation data, factoring in moisture fluctuations, plastics fractions, and inert content while ensuring strict compliance with Solid Waste Management Rules and CPCB emission limits.',
      'Our approach is entirely vendor-neutral: moving grate boilers, circulating fluidised beds, gasification, and biochemical systems are evaluated objectively based on fuel characteristics, lifecycle economics, and off-take stability.',
    ],
  },
  applications: [
    { icon: 'energy', name: 'Municipal Solid Waste RDF Power', detail: 'High-efficiency thermal power from processed RDF' },
    { icon: 'energy', name: 'Agro-Residue Biomass Energy', detail: 'Combustion of crop stubble, bagasse, and mustard stalk' },
    { icon: 'recycle', name: 'Biomethanation (OFMSW)', detail: 'High-rate anaerobic digestion of organic municipal waste' },
    { icon: 'water', name: 'Sewage Sludge-to-Energy', detail: 'Digestion and thermal conversion of municipal STP sludge' },
    { icon: 'factory', name: 'Cement Kiln Co-Processing', detail: 'Alternative fuel (AF) preparation and feeding skids' },
    { icon: 'factory', name: 'Industrial Cogeneration (CHP)', detail: 'High-pressure steam and captive electricity generation' },
    { icon: 'energy', name: 'Gasification & Syngas Systems', detail: 'Advanced thermal conversion for clean synthetic gas' },
    { icon: 'leaf', name: 'Bio-Char & Ash Upcycling', detail: 'Conversion of residual bottom ash into construction inputs' },
  ],
  industries: [
    { icon: 'water', name: 'Municipal Corporations & ULBs', detail: 'Solid Waste Management (SWM) compliance', image: '/images/industries/municipal-waste.jpg' },
    { icon: 'users', name: 'Urban Development Authorities', detail: 'Swachh Bharat Mission and AMRUT tenders', image: '/images/industries/municipal-waste.jpg' },
    { icon: 'factory', name: 'Sugar & Agro-Industrial Mills', detail: 'Bagasse, biomass, and spent wash power', image: '/images/industries/sugar-agro.jpg' },
    { icon: 'factory', name: 'Textile, Pulp & Paper', detail: 'Effluent sludge and biomass cogeneration', image: '/images/industries/textile-paper.jpg' },
    { icon: 'factory', name: 'Cement & Building Materials', detail: 'Refuse-derived fuel co-processing', image: '/images/industries/cement.jpg' },
    { icon: 'factory', name: 'Food & Beverage Processors', detail: 'High-COD organic waste valorisation', image: '/images/industries/food-beverage.jpg' },
    { icon: 'water', name: 'Wastewater Treatment Operators', detail: 'Biosolids drying and energy generation', image: '/images/industries/wastewater-plant.jpg' },
    { icon: 'users', name: 'Private Waste Concessionaires', detail: 'DBFOT and PPP infrastructure delivery', image: '/images/industries/private-waste.jpg' },
  ],
  benefits: [
    {
      icon: 'recycle',
      iconVariant: 'forest',
      eyebrow: 'Waste Characterisation',
      title: 'Calibrated to Real Waste Streams',
      description:
        'Engineered around measured calorific values, moisture levels, and seasonal variations rather than generic municipal assumptions.',
    },
    {
      icon: 'award',
      iconVariant: 'gold',
      eyebrow: 'Emission Control',
      title: 'Strict Environmental Compliance',
      description:
        'Full adherence to Solid Waste Management Rules, CPCB emission standards, and state pollution control board parameters.',
    },
    {
      icon: 'energy',
      iconVariant: 'nova',
      eyebrow: 'Technology Neutral',
      title: 'Optimal Combustion Route Selection',
      description:
        'Independent benchmarking across moving grate, fluidised bed, gasification, and biomethanation systems tailored to waste profiles.',
    },
    {
      icon: 'shield',
      iconVariant: 'outline',
      eyebrow: 'Bankability',
      title: 'DPRs for Concessionaires & ULBs',
      description:
        'Financial and operational models structured for PPP, DBFOT concessions, and institutional infrastructure financing.',
    },
    {
      icon: 'users',
      iconVariant: 'outline',
      eyebrow: 'Accountability',
      title: 'Integrated EPC & Operations',
      description:
        'Complete mechanical, boiler, turbine-generator, and flue-gas cleanup integration under a single accountable engineering team.',
    },
    {
      icon: 'leaf',
      iconVariant: 'outline',
      eyebrow: 'Zero Waste',
      title: 'Circular By-Product Strategy',
      description:
        'Systematic bottom ash utilisation, compost extraction, and heat recovery designed to minimise final landfill footprint.',
    },
  ],
  process: [
    {
      phase: 'Phase 01',
      title: 'Waste Characterisation & DPR',
      bullets: [
        'Seasonal waste sampling, proximate analysis, and calorific value testing',
        'Technology route shortlisting based on scale and fuel characteristics',
        'Power purchase agreement (PPA) and tipping fee sensitivity modelling',
        'Statutory clearance roadmap aligned with SWM Rules and CPCB guidelines',
      ],
      icon: 'search',
    },
    {
      phase: 'Phase 02',
      title: 'Detailed Engineering & Sizing',
      bullets: [
        'Waste reception, automated sorting, and RDF line specification',
        'Boiler, steam turbine-generator (STG), and condenser cycle design',
        'Multi-stage flue-gas cleanup (SNCR, lime injection, baghouse)',
        'Civil, structural, water balance, and electrical switchyard engineering',
      ],
      icon: 'factory',
    },
    {
      phase: 'Phase 03',
      title: 'Procurement & Vendor Quality',
      bullets: [
        'Competitive tendering for boiler, turbine, and sorting OEM packages',
        'Factory audits, materials inspection, and expediting protocols',
        'Statutory boiler inspectorate and environmental clearance submissions',
        'Concessionaire service level agreement (SLA) alignment',
      ],
      icon: 'shield',
    },
    {
      phase: 'Phase 04',
      title: 'Construction & Commissioning',
      bullets: [
        'Heavy civil execution, boiler structural erection, and piping works',
        'Cold mechanical trials, refractory dry-out, and steam blowing',
        'Waste firing ramp-up, combustion tuning, and grid synchronisation',
        'Comprehensive emission stack testing and commercial COD certification',
      ],
      icon: 'energy',
    },
    {
      phase: 'Phase 05',
      title: 'Long-Term Plant Operations',
      bullets: [
        'Standard operating procedures, safety governance, and crew training',
        'Continuous emission monitoring (CEMS) data streaming to regulators',
        'Bottom ash and fly ash classification and off-take management',
        'Performance-linked O&M agreements ensuring targeted plant heat rate',
      ],
      icon: 'award',
    },
  ],
  faq: [
    {
      q: 'What technology does Green Nova recommend for municipal waste processing?',
      a: 'We avoid one-size-fits-all recommendations. Moving grate mass-burn is reliable for large unsegregated municipal streams; RDF processing with fluidised bed combustion works well for high-calorific rejects; and biomethanation is optimal for segregated organic fractions. We recommend the route based on rigorous waste characterisation.',
    },
    {
      q: 'Do you prepare tender-ready DPRs for urban local bodies and municipal corporations?',
      a: 'Yes. We prepare bankable DPRs, technical specifications, and bid evaluation documentation tailored for DBFOT, PPP, and Swachh Bharat Mission concessions.',
    },
    {
      q: 'How do your designs guarantee flue-gas emission compliance?',
      a: 'Emission control is integrated directly into our combustion and flue-gas treatment design, deploying semi-dry scrubbers, activated carbon injection, baghouse filters, and selective non-catalytic reduction (SNCR) to comply with tight CPCB and European emission limits.',
    },
    {
      q: 'Do you handle agricultural residue and crop stubble biomass projects?',
      a: 'Yes. Biomass power generation using paddy straw, bagasse, mustard stalk, and agricultural waste is a core practice area, including seasonal fuel logistics and fuel QA systems.',
    },
    {
      q: 'How is residual bottom ash and fly ash handled in your designs?',
      a: 'We design dedicated ash conditioning systems that channel non-hazardous bottom ash into brick manufacture, road base aggregates, and cement plant co-processing, minimising landfill volume.',
    },
    {
      q: 'Can Green Nova manage operations after commercial COD?',
      a: 'Yes. We provide long-term O&M contracts with plant availability guarantees, continuous emissions compliance, and predictive maintenance.',
    },
  ],
  backgroundImage: '/images/industries/cement.jpg',
  cta: {
    headline: 'Turn Complex Waste Streams into Dependable Clean Power.',
    subcopy:
      'Consult our engineering team during early waste audit and scoping. We establish accurate calorific baselines and build facilities that pass environmental and financial audit.',
  },
};

/* ===========================================================
   SERVICE 04 — ENVIRONMENTAL ENGINEERING
   =========================================================== */
export const ENV_ENGG: ServiceDetailData = {
  slug: 'environmental-engineering',
  index: '04',
  icon: 'factory',
  title: 'Environmental Engineering & Industrial Compliance',
  shortTitle: 'Environmental Engineering',
  tagline: 'Turnkey Air Pollution Control, Industrial Effluent Treatment & Rigorous Regulatory Compliance',
  overview: {
    lead:
      'Environmental compliance is foundational engineered infrastructure. Our practice unites regulatory depth with process engineering to deliver EIA studies, advanced APCS, effluent treatment, and remediation assets that operate reliably year-round.',
    paragraphs: [
      'We conduct statutory Environmental Impact Assessments (EIA), Environmental Management Plans (EMP), and baseline environmental monitoring across power, heavy manufacturing, mining, infrastructure, and industrial estates.',
      'On the physical engineering side, we design and execute turnkey Air Pollution Control Systems (APCS) — including baghouses, wet and dry scrubbers, ESPs, and flue-gas desulphurisation — alongside industrial effluent treatment (ETP/STP) and Zero Liquid Discharge (ZLD) plants.',
      'We assist operating facilities through consent management, online continuous monitoring (CEMS/AQMS), environmental audits, and legacy contaminated site remediation, ensuring continuous compliance.',
    ],
  },
  applications: [
    { icon: 'factory', name: 'Environmental Impact Assessment (EIA)', detail: 'Comprehensive baseline studies, EMP, and public hearings' },
    { icon: 'factory', name: 'Air Pollution Control Systems (APCS)', detail: 'Baghouses, ESPs, wet scrubbers, and SNCR/SCR' },
    { icon: 'factory', name: 'Flue-Gas Treatment & Desulphurisation', detail: 'Precision control of SOx, NOx, particulates, and acid gases' },
    { icon: 'water', name: 'Effluent & Sewage Treatment (ETP/STP)', detail: 'Biological, chemical, and membrane-based wastewater treatment' },
    { icon: 'water', name: 'Zero Liquid Discharge (ZLD) Systems', detail: 'RO, multi-effect evaporators, and crystallisers' },
    { icon: 'leaf', name: 'Contaminated Land Remediation', detail: 'In-situ and ex-situ soil and groundwater decontamination' },
    { icon: 'globe', name: 'Online Monitoring (CEMS & AQMS)', detail: 'Statutory real-time telemetry streaming to pollution boards' },
    { icon: 'shield', name: 'Statutory Audits & Consent Filing', detail: 'CTE, CTO, hazardous waste management, and annual returns' },
  ],
  industries: [
    { icon: 'factory', name: 'Thermal Power & Cogeneration', detail: 'Flue-gas cleaning, ash handling, and ZLD systems', image: '/images/industries/power.jpg' },
    { icon: 'factory', name: 'Steel, Cement & Primary Metals', detail: 'Fume extraction, baghouses, and slag management', image: '/images/industries/steel.jpg' },
    { icon: 'factory', name: 'Chemicals, Dyes & Pharmaceuticals', detail: 'High-COD effluent treatment, VOC scrubbing, and ZLD', image: '/images/industries/refinery.jpg' },
    { icon: 'factory', name: 'Textile, Dyeing & Leather', detail: 'Colour removal, salt recovery, and membrane filtration', image: '/images/industries/textile-paper.jpg' },
    { icon: 'globe', name: 'Mining & Mineral Processing', detail: 'Dust suppression, acid mine drainage, and reclamation', image: '/images/industries/steel.jpg' },
    { icon: 'building', name: 'Industrial Parks & SEZs', detail: 'Common Effluent Treatment Plants (CETPs)', image: '/images/industries/corporate-enterprise.jpg' },
    { icon: 'building', name: 'Data Centres & Commercial Hubs', detail: 'Acoustic attenuation, STP, and indoor air quality', image: '/images/industries/datacenter.jpg' },
    { icon: 'users', name: 'Regulatory Bodies & Municipalities', detail: 'Catchment remediation and ambient air monitoring', image: '/images/industries/wastewater-plant.jpg' },
  ],
  benefits: [
    {
      icon: 'shield',
      iconVariant: 'forest',
      eyebrow: 'Regulatory Rigour',
      title: 'EIA & Compliance Audit Ready',
      description:
        'Environmental impact assessments and management plans developed to withstand regulatory scrutiny from MoEFCC, CPCB, and SPCBs.',
    },
    {
      icon: 'award',
      iconVariant: 'gold',
      eyebrow: 'Turnkey Execution',
      title: 'Complete APCS & ETP Delivery',
      description:
        'End-to-end design, fabrication, erection, and commissioning of industrial baghouses, scrubbers, ESPs, and effluent treatment systems.',
    },
    {
      icon: 'factory',
      iconVariant: 'nova',
      eyebrow: 'Process First',
      title: 'First-Principles Engineering',
      description:
        'Pollution control and zero-liquid-discharge systems sized from empirical process kinetics and gas dynamics rather than catalog approximations.',
    },
    {
      icon: 'water',
      iconVariant: 'outline',
      eyebrow: 'Water Circularity',
      title: 'Advanced ETP, STP & ZLD',
      description:
        'Multi-stage effluent and sewage treatment incorporating biological, membrane, RO, and thermal evaporation technologies.',
    },
    {
      icon: 'leaf',
      iconVariant: 'outline',
      eyebrow: 'Remediation',
      title: 'Legacy Site Reclamation',
      description:
        'Comprehensive risk assessment and implementation of in-situ/ex-situ decontamination for industrial brownfields and dumpsites.',
    },
    {
      icon: 'globe',
      iconVariant: 'outline',
      eyebrow: 'Continuous Ops',
      title: 'Continuous Monitoring & Auditing',
      description:
        'Online CEMS and AQMS instrumentation setup, statutory environmental returns, and multi-year compliance management retainers.',
    },
  ],
  process: [
    {
      phase: 'Phase 01',
      title: 'Baseline Assessment & Gap Audit',
      bullets: [
        'Baseline air, water, soil, noise, and ecological field monitoring',
        'Regulatory scoping against MoEFCC, CPCB, and state PCB standards',
        'Audit of current plant emissions, effluent loads, and process streams',
        'Techno-economic options analysis for pollution control systems',
      ],
      icon: 'search',
    },
    {
      phase: 'Phase 02',
      title: 'Process Design & Engineering',
      bullets: [
        'Mass balance, pollutant kinetics, and P&ID development',
        'Custom equipment sizing for scrubbers, baghouses, and clarifiers',
        'Structural, piping, electrical, and control instrumentation design',
        'Process safety and operability review for hazardous streams',
      ],
      icon: 'factory',
    },
    {
      phase: 'Phase 03',
      title: 'Procurement & Fabrication QC',
      bullets: [
        'Sourcing of corrosion-resistant alloys, filter media, and pumps',
        'Factory acceptance testing for blowers, ESP transformers, and valves',
        'Calibration of statutory CEMS and effluent monitoring sensors',
        'Consent-to-Establish (CTE) regulatory submission support',
      ],
      icon: 'shield',
    },
    {
      phase: 'Phase 04',
      title: 'Installation & Commissioning',
      bullets: [
        'Structural erection, ducting, piping, and electrical integration',
        'Hydro-testing, air leak testing, and cold mechanical commissioning',
        'Biological seeding, chemical dosing tuning, and stack emission trials',
        'Consent-to-Operate (CTO) compliance verification and commercial handover',
      ],
      icon: 'energy',
    },
    {
      phase: 'Phase 05',
      title: 'Ongoing Monitoring & Compliance',
      bullets: [
        'Continuous data telemetry management to regulatory servers',
        'Preventative maintenance and consumable supply for APCS and ETPs',
        'Half-yearly compliance reports, environmental audits, and returns',
        'Multi-year annual maintenance retainers for guaranteed compliance',
      ],
      icon: 'award',
    },
  ],
  faq: [
    {
      q: 'Can Green Nova handle both EIA documentation and physical turnkey execution?',
      a: 'Yes. We provide complete integration. Our environmental scientists handle EIA/EMP studies, baseline surveys, and public hearings, while our engineering team designs, fabricates, and commissions the required APCS, ETP, and ZLD systems.',
    },
    {
      q: 'What types of air pollution control systems do you execute?',
      a: 'We design and build pulse-jet baghouses, electrostatic precipitators (ESPs), venture and packed-bed scrubbers, dry sorbent injection, and SNCR systems for particulate, SOx, NOx, and acid gas abatement.',
    },
    {
      q: 'Do you deliver Zero Liquid Discharge (ZLD) systems for challenging effluents?',
      a: 'Yes. Our wastewater practice delivers complete ZLD treatment trains combining primary physico-chemical treatment, biological MBR, high-pressure reverse osmosis, multi-effect evaporation, and ATFD crystallisation.',
    },
    {
      q: 'How do you ensure data integrity for online CEMS and AQMS monitoring?',
      a: 'We install instrumentation pre-certified by CPCB and international agencies, implement automated calibration routines, and configure secure data streaming bridges to SPCB and CPCB portals.',
    },
    {
      q: 'Can you remediate legacy industrial contaminated sites and soil?',
      a: 'Yes. We conduct Phase I/II environmental site assessments, quantitative risk assessments, and deploy remediation techniques including bio-remediation, soil vapour extraction, and chemical stabilisation.',
    },
    {
      q: 'Do you provide annual compliance management retainers?',
      a: 'Yes. We offer multi-year retainers covering CTE/CTO renewals, statutory environmental statements, hazardous waste returns, and routine lab testing.',
    },
  ],
  backgroundImage: '/images/industries/steel.jpg',
  cta: {
    headline: 'Engineered Environmental Systems That Stand Up to Audit.',
    subcopy:
      'Whether you require turnkey APCS, industrial wastewater ZLD, or comprehensive EIA clearances, consult our engineering practice for compliant, high-reliability infrastructure.',
  },
};

/* ===========================================================
   SERVICE 05 — RENEWABLE HYBRID ENERGY
   =========================================================== */
export const RENEWABLE_HYBRID: ServiceDetailData = {
  slug: 'renewable-hybrid-energy',
  index: '05',
  icon: 'energy',
  title: 'Renewable Hybrid Energy — Solar, Wind & BESS',
  shortTitle: 'Renewable Hybrid Energy',
  tagline: 'Utility-Scale Solar, Wind & Battery Storage Systems Engineered for Reliable Grid Performance',
  overview: {
    lead:
      'India’s renewable power transition is rapidly shifting toward round-the-clock, storage-backed hybrid systems. We partner with industrial buyers, utilities, and IPPs to engineer and execute high-yield solar, wind, and BESS facilities.',
    paragraphs: [
      'Our practice covers the complete renewable lifecycle: satellite and ground-calibrated resource assessments, techno-economic tariff modelling, grid interconnection engineering, Tier-1 equipment selection, and turnkey EPC execution.',
      'We specialize in commercial structures including group captive, third-party open access, and utility-scale hybrid configurations, navigating state banking regulations, cross-subsidy charges, and SLDC scheduling protocols.',
      'Assets are engineered for long-term performance: bifacial gain optimisation, thermally resilient tracker design, realistic battery degradation modelling, and bankable performance ratio guarantees.',
    ],
  },
  applications: [
    { icon: 'energy', name: 'Utility-Scale Ground-Mounted Solar', detail: 'High-yield central and string inverter solar parks' },
    { icon: 'energy', name: 'Solar-Wind Co-Located Hybrids', detail: 'Complementary generation profiles sharing grid evacuation' },
    { icon: 'energy', name: 'Battery Energy Storage Systems (BESS)', detail: 'Peak-shifting, frequency response, and RTC buffering' },
    { icon: 'building', name: 'Group Captive & Open Access', detail: 'Tailored renewable power delivery for commercial clients' },
    { icon: 'building', name: 'C&I Commercial Rooftop & Carports', detail: 'Turnkey industrial on-site generation installations' },
    { icon: 'building', name: 'Data Centre RTC Power Systems', detail: 'Round-the-clock clean energy backed by battery storage' },
    { icon: 'factory', name: 'Solar Thermal & Process Steam', detail: 'Concentrating solar arrays for industrial heat' },
    { icon: 'users', name: 'Utility & Discom Tender Packages', detail: 'SECI and state utility tender design and EPC' },
  ],
  industries: [
    { icon: 'energy', name: 'Independent Power Producers (IPPs)', detail: 'Utility-scale development and EPC contracts', image: '/images/industries/solar-wind.jpg' },
    { icon: 'building', name: 'Heavy Industrial Manufacturers', detail: 'Group captive power and tariff hedging', image: '/images/industries/steel.jpg' },
    { icon: 'building', name: 'Data Centres & Cloud Infrastructure', detail: 'High-availability 24/7 renewable power', image: '/images/industries/datacenter.jpg' },
    { icon: 'users', name: 'State DISCOMs & Grid Operators', detail: 'Grid-scale hybrid and peaking storage projects', image: '/images/industries/power.jpg' },
    { icon: 'building', name: 'Commercial & Institutional Real Estate', detail: 'Rooftop and distributed solar deployment', image: '/images/industries/corporate-enterprise.jpg' },
    { icon: 'factory', name: 'Textiles, Chemicals & Heavy Processing', detail: 'High-tension open access supply', image: '/images/industries/textile-paper.jpg' },
    { icon: 'users', name: 'PSUs & Government Campuses', detail: 'Solarisation of defence and civil assets', image: '/images/industries/corporate-enterprise.jpg' },
    { icon: 'globe', name: 'Remote & Off-Grid Facilities', detail: 'Microgrid and hybrid diesel displacement', image: '/images/industries/automotive.jpg' },
  ],
  benefits: [
    {
      icon: 'energy',
      iconVariant: 'forest',
      eyebrow: 'Resource Modelling',
      title: 'Empirical Solar & Wind Sizing',
      description:
        'Yield simulations calibrated against ground meteorological data, high-resolution satellite irradiance, and local terrain dynamics.',
    },
    {
      icon: 'award',
      iconVariant: 'gold',
      eyebrow: 'Bankability',
      title: 'Institutional Due-Diligence Ready',
      description:
        'Bankable resource reports, Tier-1 OEM qualification, and finance-aligned guarantees suitable for major lenders and investors.',
    },
    {
      icon: 'shield',
      iconVariant: 'nova',
      eyebrow: 'Technology Agnostic',
      title: 'Unbiased Component Selection',
      description:
        'Objective benchmarking of TOPCon/HJT modules, central vs. string inverters, wind turbine classes, and BESS cell chemistries.',
    },
    {
      icon: 'users',
      iconVariant: 'outline',
      eyebrow: 'Commercial Power',
      title: 'PPA & Open-Access Structuring',
      description:
        'Specialized structuring for group captive, third-party sale, ISTS/InSTS transmission, banking, and scheduling frameworks.',
    },
    {
      icon: 'clock',
      iconVariant: 'outline',
      eyebrow: 'Grid Engineering',
      title: 'Interconnection & Power Quality',
      description:
        'Comprehensive load-flow, transient stability, harmonic analysis, and SLDC/RLDC compliance to ensure seamless grid integration.',
    },
    {
      icon: 'globe',
      iconVariant: 'outline',
      eyebrow: 'Asset Management',
      title: 'Precision Performance Analytics',
      description:
        'In-depth SCADA monitoring, component-level degradation tracking, and predictive maintenance protocols to sustain peak CUF.',
    },
  ],
  process: [
    {
      phase: 'Phase 01',
      title: 'Resource Assessment & Power Structuring',
      bullets: [
        'Solar and wind resource verification using satellite and on-site met masts',
        'LCOE optimisation and round-the-clock tariff modelling',
        'Open-access transmission feasibility and DISCOM regulatory review',
        'Interconnection pre-feasibility and substation capacity checks',
      ],
      icon: 'search',
    },
    {
      phase: 'Phase 02',
      title: 'Detailed Engineering Design',
      bullets: [
        'Optimised plant layout, pitch, and tracker motion kinematics',
        'Module, inverter, turbine, and BESS specification sheets',
        'High-tension electrical, switchyard, and protection relay coordination',
        'Statutory CEA, grid code, and harmonic distortion studies',
      ],
      icon: 'factory',
    },
    {
      phase: 'Phase 03',
      title: 'Procurement & Bankability Audits',
      bullets: [
        'Tier-1 manufacturer qualification and competitive tender management',
        'In-line module manufacturing inspection and flash test verification',
        'Power transformer and switchgear factory acceptance testing (FAT)',
        'Logistics coordination, customs expediting, and site preservation',
      ],
      icon: 'shield',
    },
    {
      phase: 'Phase 04',
      title: 'Turnkey EPC & Commissioning',
      bullets: [
        'Civil grading, piling, tracker erection, and module mounting',
        'HT cabling, inverter stations, substation, and transmission line build',
        'Pre-commissioning tests, SCADA configuration, and trial energisation',
        'Commercial Operation Date (COD) certification and CEIG approval',
      ],
      icon: 'energy',
    },
    {
      phase: 'Phase 05',
      title: 'Asset Management & Monitoring',
      bullets: [
        'Real-time plant telemetry, string-level diagnostics, and weather monitoring',
        'Preventative maintenance, module cleaning, and vegetation control',
        'Battery energy storage state-of-health and degradation analytics',
        'Multi-year O&M backed by performance ratio and availability warranties',
      ],
      icon: 'award',
    },
  ],
  faq: [
    {
      q: 'How does Green Nova evaluate module and inverter technologies?',
      a: 'We evaluate TOPCon, HJT, and mono PERC modules alongside central versus string inverters based on actual temperature coefficients, bifacial albedo gains, degradation profiles, and lender bankability ratings.',
    },
    {
      q: 'Can you structure group captive power plants for commercial clients?',
      a: 'Yes. We guide clients through corporate group captive arrangements compliant with Electricity Rules (26% equity ownership, 51% consumption), managing cross-subsidy exemptions and state open-access approvals.',
    },
    {
      q: 'How do you integrate battery energy storage (BESS) with solar and wind?',
      a: 'We model load profiles against intermittent solar and wind curves to size BESS capacity precisely, deploying AC or DC-coupled architectures with advanced energy management systems (EMS) for peak shaving and frequency response.',
    },
    {
      q: 'Do you conduct electrical grid interconnection studies?',
      a: 'Yes. Our electrical engineers perform dynamic load-flow, short-circuit, harmonic analysis, and transient stability simulations required for CTU/STU grid connectivity approval.',
    },
    {
      q: 'What performance guarantees do you offer for renewable projects?',
      a: 'We provide bankable performance ratio (PR) and capacity utilisation factor (CUF) guarantees benchmarked against independent meteorological data.',
    },
    {
      q: 'What does your long-term asset management service include?',
      a: 'Our O&M contracts incorporate 24/7 SCADA monitoring, thermographic drone inspections, predictive maintenance, inverter overhauls, and warranty claim management.',
    },
  ],
  backgroundImage: '/images/industries/power.jpg',
  cta: {
    headline: 'Engineered for Maximum CUF and Long-Term Generation.',
    subcopy:
      'Engage our renewable power team for site assessment and commercial structuring. We design and deliver solar, wind, and storage assets engineered for optimal returns.',
  },
};

/* ===========================================================
   SERVICE 06 — SUSTAINABILITY ADVISORY
   =========================================================== */
export const SUSTAINABILITY: ServiceDetailData = {
  slug: 'sustainability-advisory',
  index: '06',
  icon: 'leaf',
  title: 'Sustainability Advisory & Decarbonisation',
  shortTitle: 'Sustainability Advisory',
  tagline: 'Board-Level ESG Strategy, BRSR Disclosure Readiness & Engineering-Backed Net-Zero Roadmaps',
  overview: {
    lead:
      'Sustainability has evolved from discretionary disclosure to a core board mandate and capital requirement. Our practice helps corporate leaders and institutions translate climate targets into measurable, defensible, and audit-ready programmes.',
    paragraphs: [
      'We advise clients across the full ESG spectrum: stakeholder materiality, Scope 1, 2, and 3 greenhouse gas inventories, Science-Based Targets (SBTi) alignment, SEBI Business Responsibility and Sustainability Reporting (BRSR/BRSR Core), and carbon market strategy.',
      'Unlike pure-play consultancies, our advisory team works in tandem with practicing in-house engineers. Every decarbonisation pathway and capital recommendation is grounded in real plant thermodynamics, electrical integration, and achievable capex.',
      'All frameworks and disclosures conform to international standards including the GHG Protocol, ISO 14064, IPCC guidelines, and SEBI regulations, ensuring full assurance and audit readiness.',
    ],
  },
  applications: [
    { icon: 'leaf', name: 'Double Materiality Assessment', detail: 'Stakeholder-aligned ESG priority mapping' },
    { icon: 'factory', name: 'GHG Accounting (Scope 1, 2, 3)', detail: 'ISO 14064 and GHG Protocol compliant carbon inventories' },
    { icon: 'energy', name: 'Decarbonisation & Net-Zero Roadmaps', detail: 'Science-based marginal abatement cost curve modeling' },
    { icon: 'shield', name: 'SEBI BRSR & BRSR Core Reporting', detail: 'Mandatory statutory disclosure packs for listed corporations' },
    { icon: 'award', name: 'Sustainability-Linked Financing', detail: 'KPI frameworks and second-party opinion support for green loans' },
    { icon: 'globe', name: 'Carbon Market & Credit Structuring', detail: 'VCM project documentation, I-REC, and PAT trading readiness' },
    { icon: 'users', name: 'Board & Executive ESG Governance', detail: 'Director briefings, governance frameworks, and capacity training' },
    { icon: 'building', name: 'Policy & Regulatory Adaptation', detail: 'Continuous updates across MCA, SEBI, CPCB, and international mandates' },
  ],
  industries: [
    { icon: 'building', name: 'SEBI-Listed Enterprises', detail: 'Top 1000 listed entities navigating mandatory BRSR Core', image: '/images/industries/corporate-enterprise.jpg' },
    { icon: 'building', name: 'Multinational Corporations & Subsidiaries', detail: 'Alignment with parent ESG, CSRD, and global disclosures', image: '/images/industries/corporate-enterprise.jpg' },
    { icon: 'users', name: 'Public Sector Undertakings (PSUs)', detail: 'National decarbonisation mandates and ESG rating improvement', image: '/images/industries/power.jpg' },
    { icon: 'factory', name: 'Heavy Manufacturing & Processing', detail: 'Direct Scope 1 and Scope 2 industrial emission abatement', image: '/images/industries/steel.jpg' },
    { icon: 'energy', name: 'Power Producers & Utilities', detail: 'Clean energy transition strategy and green certificate trading', image: '/images/industries/solar-wind.jpg' },
    { icon: 'building', name: 'Private Equity & Financial Institutions', detail: 'ESG due-diligence, portfolio risk screening, and KPI tracking', image: '/images/industries/corporate-enterprise.jpg' },
    { icon: 'factory', name: 'Consumer Brands & Export Supply Chains', detail: 'Scope 3 supplier carbon baselining and CBAM readiness', image: '/images/industries/food-beverage.jpg' },
    { icon: 'building', name: 'Technology & Data Centre Operators', detail: 'Power usage effectiveness (PUE) and 100% renewable sourcing', image: '/images/industries/datacenter.jpg' },
  ],
  benefits: [
    {
      icon: 'leaf',
      iconVariant: 'forest',
      eyebrow: 'Standards Based',
      title: 'Recognized Global Frameworks',
      description:
        'Deliverables built on GHG Protocol, ISO 14064, IPCC guidelines, and SEBI BRSR standards for verifiable audit readiness.',
    },
    {
      icon: 'award',
      iconVariant: 'gold',
      eyebrow: 'Audit Ready',
      title: 'Seamless Disclosure Integration',
      description:
        'Reporting packs engineered for immediate board review, third-party assurance, and statutory filing across BRSR and ESG platforms.',
    },
    {
      icon: 'factory',
      iconVariant: 'nova',
      eyebrow: 'Engineering Grounded',
      title: 'Pragmatic Decarbonisation Levers',
      description:
        'Decarbonisation roadmaps developed alongside practicing EPC engineers to ensure recommendations are physically viable.',
    },
    {
      icon: 'shield',
      iconVariant: 'outline',
      eyebrow: 'Value Chain',
      title: 'Defensible Scope 3 Accounting',
      description:
        'Practical supplier engagement and hybrid data modelling to build defensible supply-chain carbon baselines over time.',
    },
    {
      icon: 'users',
      iconVariant: 'outline',
      eyebrow: 'Capacity Building',
      title: 'Executive & Operational Upskilling',
      description:
        'Structured workshops and governance playbooks empowering internal teams to manage ongoing ESG data and reporting workflows.',
    },
    {
      icon: 'globe',
      iconVariant: 'outline',
      eyebrow: 'Market Readiness',
      title: 'Regulatory & Carbon Market Agility',
      description:
        'Strategic readiness for evolving carbon credit mechanisms, PAT schemes, and sustainability-linked financing structures.',
    },
  ],
  process: [
    {
      phase: 'Phase 01',
      title: 'Materiality & Baseline Scoping',
      bullets: [
        'Double materiality assessment engaging internal and external stakeholders',
        'Organizational and operational boundary definition for reporting',
        'Initial data collection, utility billing audits, and asset inventory',
        'Peer benchmarking against domestic and global sector leaders',
      ],
      icon: 'search',
    },
    {
      phase: 'Phase 02',
      title: 'Measurement & Carbon Accounting',
      bullets: [
        'Rigorous Scope 1, 2, and material Scope 3 greenhouse gas calculations',
        'Emission factor documentation aligned with IPCC and CEA grid averages',
        'Energy, water, waste, and occupational safety baseline metrics',
        'Data uncertainty evaluation and audit trail establishment',
      ],
      icon: 'factory',
    },
    {
      phase: 'Phase 03',
      title: 'Decarbonisation Strategy & Targets',
      bullets: [
        'Techno-economic marginal abatement cost curves for abatement levers',
        'Science-based net-zero interim target-setting and timeline modeling',
        'Capital expenditure planning linked to renewable energy and energy efficiency',
        'Internal carbon pricing mechanisms and governance charters',
      ],
      icon: 'shield',
    },
    {
      phase: 'Phase 04',
      title: 'Reporting, Disclosure & Assurance',
      bullets: [
        'Compilation of SEBI BRSR and BRSR Core statutory disclosure files',
        'Drafting of comprehensive corporate sustainability reports',
        'Support for third-party reasonable and limited assurance audits',
        'Alignment with global voluntary reporting platforms (CDP, GRI, TCFD)',
      ],
      icon: 'energy',
    },
    {
      phase: 'Phase 05',
      title: 'Execution & Ongoing Governance',
      bullets: [
        'Direct linkage of advisory recommendations with in-house EPC execution',
        'Quarterly KPI monitoring dashboards and board committee packs',
        'Executive training workshops for cross-functional management teams',
        'Annual disclosure refresh and evolving regulatory compliance support',
      ],
      icon: 'award',
    },
  ],
  faq: [
    {
      q: 'How does Green Nova support mandatory SEBI BRSR Core reporting?',
      a: 'We deliver complete end-to-end BRSR and BRSR Core disclosures, structuring non-financial quantitative metrics, documentation trails, and governance statements ready for statutory filing and independent audit.',
    },
    {
      q: 'How do you calculate Scope 3 supply chain emissions reliably?',
      a: 'We apply GHG Protocol Scope 3 guidance using a pragmatic hybrid approach: combining spend-based screening to identify hot spots with activity data and tier-1 supplier engagement for material categories.',
    },
    {
      q: 'How does your advisory differ from management consulting firms?',
      a: 'Our advisory recommendations are developed in collaboration with our in-house engineering and EPC teams. This ensures decarbonisation targets, renewable adoption plans, and fuel substitutions are grounded in technical feasibility and realistic capex.',
    },
    {
      q: 'Can you assist in setting Science-Based Targets (SBTi)?',
      a: 'Yes. We model 1.5°C-aligned decarbonisation pathways, formulate near-term and long-term emission reduction targets, and compile the technical documentation required for SBTi validation.',
    },
    {
      q: 'Do you advise on sustainability-linked loans and green bonds?',
      a: 'Yes. We help borrowers define credible key performance indicators (KPIs) and sustainability performance targets (SPTs) that meet loan market association (LMA) principles and lender requirements.',
    },
    {
      q: 'Do you offer annual retainers for ongoing ESG management?',
      a: 'Yes. We provide structured annual retainers supporting continuous KPI tracking, regulatory updates, board reporting packs, and annual disclosure compilation.',
    },
  ],
  backgroundImage: '/images/industries/datacenter.jpg',
  cta: {
    headline: 'Translate ESG Commitments into Defensible, Engineering-Backed Action.',
    subcopy:
      'Partner with our advisory practice for BRSR compliance, carbon accounting, and pragmatic decarbonisation strategies that satisfy boards, lenders, and regulators.',
  },
};
