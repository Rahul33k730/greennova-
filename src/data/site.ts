/**
 * Green Nova Energy — Homepage Content
 * -----------------------------------
 * All content sourced from the client profile provided in Phase 2.
 * We DO NOT invent customers, awards, certifications, or specific KPIs.
 * Numbers & claims are framed as national context where applicable;
 * company-specific values remain generic unless client-provided.
 */

import type { NavLinkItem, ServiceCardData, StatItem, IconName } from '@/types/design-system';

const WHATSAPP_NUMBER = '918550983678';
const WHATSAPP_MESSAGE = 'Hello Green Nova, I would like to discuss a project.';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const COMPANY = {
  name: 'Green Nova Energy and Environment Solutions Private Limited',
  legalName: 'Green Nova Energy and Environment Solutions Private Limited',
  shortName: 'Green Nova',
  tagline: 'Engineered for a sustainable tomorrow.',
  verticals: [
    'Renewable Energy',
    'Environmental Engineering',
    'Green Hydrogen',
    'Compressed Biogas',
    'Waste-to-Energy',
    'Water Treatment',
  ],
  registeredOffice: 'H.NO. 3621 Dhore Wada, Vadgaon Mawal, Pune 412106',
  hq: 'H.NO. 3621 Dhore Wada, Vadgaon Mawal, Pune 412106',
  email: 'greennovaenergyandenvironment@gmail.com',
  phone: '+91 8550983678',
  phoneSecondary: '+91 7276817964',
  phones: ['+91 8550983678', '+91 7276817964'] as const,
  gstin: '27AAMCG7884M1ZL',
  cin: 'U28120PN2026PTC252092',
  whatsapp: {
    label: '+91 8550983678',
    href: WHATSAPP_HREF,
  },
  website: 'greennovaenergy.in',
} as const;

/** Primary nav structure — uses proper page paths in Phase 3 (multi-page) */
export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Green Hydrogen', href: '/services/green-hydrogen' },
      { label: 'Compressed Biogas', href: '/services/compressed-biogas' },
      { label: 'Waste-to-Energy', href: '/services/waste-to-energy' },
      { label: 'Environmental Engineering', href: '/services/environmental-engineering' },
      { label: 'Renewable Hybrid Energy', href: '/services/renewable-hybrid-energy' },
      { label: 'Sustainability Advisory', href: '/services/sustainability-advisory' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

/* ===========================================================
   HERO
   =========================================================== */
export const HERO = {
  eyebrow: 'ENGINEERING INDIA\'S NET-ZERO FUTURE',
  headline: [
    'Powering India\'s',
    'Net-Zero',
    'Future.',
  ] as [string, string, string],
  subtitle:
    'Delivering sustainable energy, environmental engineering and clean infrastructure solutions for a greener, stronger and self-reliant India.',
  primaryCta: { label: 'Explore Solutions', href: '#services' },
  secondaryCta: { label: 'Learn More About Us', href: '#about' },
  quickLinks: [
    {
      icon: 'leaf' as IconName,
      title: 'Clean Energy',
      caption: 'Sustainable & Renewable',
      href: '/services/renewable-hybrid-energy',
    },
    {
      icon: 'gas' as IconName,
      title: 'Green Hydrogen',
      caption: 'Powering Industries',
      href: '/services/green-hydrogen',
    },
    {
      icon: 'recycle' as IconName,
      title: 'Waste to Energy',
      caption: 'Turning Waste into Value',
      href: '/services/waste-to-energy',
    },
    {
      icon: 'water' as IconName,
      title: 'Water Solutions',
      caption: 'Cleaner Water for Tomorrow',
      href: '/services/environmental-engineering',
    },
  ],
  /* Cinematic hero background: Ultra-sharp utility-scale renewable clean energy park */
  backgroundImage: '/images/hero-clean-energy.jpg',
  /* Animated hero slideshow — project visuals (slide 3 swapped for City Gas Distribution) */
  slideshowInterval: 6000,
  slides: [
    { src: '/images/service-compressed-biogas.jpg',         alt: 'Compressed Biogas (CBG / Bio-CNG) processing plant' },
    { src: '/images/service-waste-to-energy.jpg',           alt: 'Waste-to-Energy plant converting MSW to power' },
    { src: '/images/industries/gas.jpg',                    alt: 'City Gas Distribution — CBG Injection, Grid Skid, Gas Networks' },
    { src: '/images/industries/water.jpg',                  alt: 'Municipal & Urban — MSW Processing, Advanced STP, Water Reuse' },
  ],
};

/* ===========================================================
   INDIA MISSION BADGES — separator strip below hero
   =========================================================== */
export const INDIA_MISSIONS: Array<{
  icon: IconName;
  name: string;
  acronym?: string;
}> = [
  { icon: 'gas', name: 'National Green Hydrogen Mission', acronym: 'H₂' },
  { icon: 'leaf', name: 'SATAT Initiative' },
  { icon: 'check', name: 'Swachh Bharat 2.0' },
  { icon: 'globe', name: 'Net Zero 2070' },
  { icon: 'award', name: 'PAT Scheme' },
];

/* ===========================================================
   ABOUT GREEN NOVA
   =========================================================== */
export const ABOUT = {
  eyebrow: 'About Green Nova',
  title: 'A Single Engineering Partner for the Full Sustainable-Asset Lifecycle.',
  subtitle:
    'Green Nova Energy & Environment Solutions is a multi-vertical engineering company focused on renewable energy, environmental infrastructure and the emerging green-fuel economy. We bring together design, procurement, construction, commissioning and long-term operational rigour under one accountable team — so our clients do not have to manage six different consultants.',
  features: [
    {
      icon: 'globe' as IconName,
      eyebrow: 'Built for Bharat',
      title: 'Engineered for India\'s Geography & Climate.',
      description:
        'Our design methodology is calibrated to Indian irradiance, rainfall zones, coastal salinity, grid conditions and regulatory frameworks — from high-altitude states to industrial corridors.',
    },
    {
      icon: 'shield' as IconName,
      eyebrow: 'Technology Agnostic',
      title: 'Right Technology, Right Vendor, Every Project.',
      description:
        'No captive manufacturing — we select the optimal OEM, process and equipment for each site. Independent technical evaluation gives you outcomes, not vendor lock-in.',
    },
    {
      icon: 'award' as IconName,
      eyebrow: 'Bankable Delivery',
      title: 'Processes, Documentation & Governance that Pass Audit.',
      description:
        'Stage-gated delivery, quality checklists, third-party inspection, financial close reporting and O&M handover packages designed to meet lender and institutional investor standards.',
    },
  ],
};

/* ===========================================================
   SERVICES — 6 premium cards
   =========================================================== */
export const SERVICES: (ServiceCardData & { footer?: string })[] = [
  {
    icon: 'gas',
    title: 'Green Hydrogen Engineering & Systems',
    description:
      'Engineering solutions for green hydrogen production, storage and dispensing — covering system design, renewable power integration, compression, safety systems and downstream applications across industrial and mobility sectors.',
    footer: 'Hydrogen Production · Storage · Compression · Dispensing',
    href: '/services/green-hydrogen',
    image: '/images/industries/refinery.jpg',
  },
  {
    icon: 'recycle',
    title: 'Compressed Biogas & Bio-CNG Systems',
    description:
      'End-to-end CBG solutions covering feedstock assessment, digester design, biogas purification and upgrading, compression and Bio-CNG integration — with organic manure recovery to create value from both gas and digestate.',
    footer: 'Biogas · Upgrading · Bio-CNG · Digestate',
    href: '/services/compressed-biogas',
    image: '/images/industries/gas.jpg',
  },
  {
    icon: 'energy',
    title: 'Waste-to-Value & Biomass Systems',
    description:
      'Integrated waste and biomass solutions covering organic waste processing, composting, RDF, biomass utilisation and resource recovery — converting waste streams into useful products, renewable energy and measurable environmental value.',
    footer: 'Organic Waste · Biomass · RDF · Resource Recovery',
    href: '/services/waste-to-energy',
    image: '/images/industries/cement.jpg',
  },
  {
    icon: 'factory',
    title: 'Environmental Engineering & Compliance',
    description:
      'Environmental solutions covering air pollution control, effluent treatment, dust suppression, environmental monitoring, remediation and regulatory compliance — from project assessment and approvals through implementation and ongoing reporting.',
    footer: 'Pollution Control · Water · Remediation · Compliance',
    href: '/services/environmental-engineering',
    image: '/images/industries/steel.jpg',
  },
  {
    icon: 'energy',
    title: 'Renewable & Hybrid Energy Systems',
    description:
      'Solar, wind, battery storage and hybrid energy solutions for captive, open-access and utility applications — covering feasibility, system design, grid studies, project execution and performance monitoring.',
    footer: 'Solar · Wind · BESS · Hybrid Systems',
    href: '/services/renewable-hybrid-energy',
    image: '/images/industries/power.jpg',
  },
  {
    icon: 'leaf',
    title: 'Sustainability & Decarbonisation Advisory',
    description:
      'Engineering-backed sustainability solutions covering GHG inventories, ESG strategy, BRSR readiness, decarbonisation roadmaps, carbon-market opportunities and measurable environmental performance improvement.',
    footer: 'Sustainability & ESG · Carbon · Net-Zero · BRSR',
    href: '/services/sustainability-advisory',
    image: '/images/industries/datacenter.jpg',
  },
];

export interface IndustryItem {
  icon: IconName;
  name: string;
  detail?: string;
  image: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    icon: 'building',
    name: 'Refineries & Petrochemical',
    detail: 'H₂ · CBG · Carbon Decarbonisation',
    image: '/images/industries/refinery.jpg',
  },
  {
    icon: 'factory',
    name: 'Steel & Heavy Metals',
    detail: 'Green Steel · Arc Furnace · Waste Heat',
    image: '/images/industries/steel.jpg',
  },
  {
    icon: 'energy',
    name: 'Power & Utilities',
    detail: 'Renewable Hybrid · Substation · BESS',
    image: '/images/industries/power.jpg',
  },
  {
    icon: 'gas',
    name: 'City Gas Distribution',
    detail: 'CBG Injection · Grid Skid · Gas Networks',
    image: '/images/industries/gas.jpg',
  },
  {
    icon: 'factory',
    name: 'Cement & Heavy Industry',
    detail: 'WtE Fuel · Rotary Kiln · Emissions Abatement',
    image: '/images/industries/cement.jpg',
  },
  {
    icon: 'water',
    name: 'Municipal & Urban Bodies',
    detail: 'MSW Processing · Advanced STP · Water Reuse',
    image: '/images/industries/water.jpg',
  },
  {
    icon: 'building',
    name: 'Data Centers & Real Estate',
    detail: 'Clean Power · Open Access · Net-Zero Campus',
    image: '/images/industries/datacenter.jpg',
  },
  {
    icon: 'globe',
    name: 'Automotive & Clean Mobility',
    detail: 'Green Hydrogen · EV Infra · Clean Fleets',
    image: '/images/industries/automotive.jpg',
  },
];

/* ===========================================================
   WHY CHOOSE GREEN NOVA
   =========================================================== */
export const WHY = {
  eyebrow: 'Why Green Nova',
  title: 'Engineering that Holds Up Under Audit, Financing and O&M.',
  subtitle:
    'We combine deep domain expertise across clean-energy verticals with institutional-grade project governance — giving our clients one accountable partner instead of a fragmented supply chain.',
  features: [
    {
      icon: 'shield' as IconName,
      title: 'Multi-Vertical Depth',
      description:
        'A single team covering Solar, Wind, H₂, CBG, WtE, Environmental and Water. Critical when your decarbonisation roadmap spans several fuels and infrastructure types.',
    },
    {
      icon: 'clock' as IconName,
      title: 'Stage-Gated Delivery',
      description:
        'Every project is governed through formalised gates — Feasibility, DDES, PDR, CDR, FAT, SAT, OPR. This translates to predictable timelines and quality that survives audit.',
    },
    {
      icon: 'award' as IconName,
      title: 'Bankable Documentation',
      description:
        'Technical diligence packages, safety studies, O&M manuals and guarantees are structured to pass institutional-lender and investor scrutiny.',
    },
    {
      icon: 'users' as IconName,
      title: 'Accountable Execution',
      description:
        'We do not layer subcontractors behind loose PMCs. Our engineers own the integration. You have a single point of contact and a single warranty surface.',
    },
    {
      icon: 'energy' as IconName,
      title: 'Performance, Not Promises',
      description:
        'Designs are performance-modelled first and signed up to — then commissioned against measured output, not paper drawings.',
    },
    {
      icon: 'globe' as IconName,
      title: 'PAN India Coverage',
      description:
        'Project offices and on-site teams across states — coastal, desert, Himalayan and industrial corridor conditions alike are part of our operating envelope.',
    },
  ],
};

/* ===========================================================
   VISION & MISSION — split layout
   =========================================================== */
export const VISION_MISSION = {
  vision: {
    eyebrow: 'Our Vision',
    title: 'A Clean-Energy Economy Where Every Project is Built to World-Class Standards.',
    description:
      'Green Nova is working towards a cleaner and energy-independent India by accelerating the adoption of sustainable energy, resource recovery and environmental technologies.',
    bullets: [
      'Set a new benchmark for engineering excellence, where every asset is bankable, auditable and built to outlast its design life.',
    ],
  },
  mission: {
    eyebrow: 'Our Mission',
    title: 'Deliver Every Asset on the Merit of its Engineering.',
    description:
      'To accelerate the transition to a cleaner energy economy by making sustainable technologies easier to adopt and turning waste into energy, resources, and value.',
    bullets: [
      'Select the right technology for each site — vendor neutrality as a design principle.',
      'Execute with process and documentation that pass the strictest institutional audits.',
      'Transfer operating know-how to clients through training, manuals and long-term O&M partnerships.',
      'Contribute to India\'s clean-energy transition through credible, measurable, scalable projects.',
    ],
  },
};

/* ===========================================================
   INDIA'S CLEAN ENERGY FUTURE — national context
   -----------------------------------------------------------
   FRAMING RULE: National targets & policies are presented as
   the MARKET CONTEXT our clients operate within — NOT as
   company achievements or company commitments.
   =========================================================== */
export const INDIA_FUTURE = {
  eyebrow: 'National Context',
  title: 'India\'s Energy Transition is Reshaping Infrastructure for a Generation.',
  subtitle:
    'Against the backdrop of India\'s long-term climate commitments, institutional capital is flowing into renewable power, green fuels, waste management and water infrastructure at unprecedented scale. Green Nova helps sponsors, developers and operators turn national ambition into individual project-level execution.',
  contextBlocks: [
    {
      tag: 'Renewables',
      title: 'Multi-Hundred-GW Pipeline',
      body:
        'India\'s stated clean-energy capacity trajectory is driving utility-scale solar, wind and battery hybrid projects — combined with round-the-clock requirements from corporates and discoms.',
    },
    {
      tag: 'Green Fuels',
      title: 'Hydrogen & CBG Enter Mainstream',
      body:
        'Flagship national missions and standards are creating offtake clarity for Green Hydrogen, Green Ammonia and Compressed Biogas. Early-mover project pipelines are under active tendering and development.',
    },
    {
      tag: 'Urban & Municipal',
      title: 'MSW, Water & Circular Economy',
      body:
        'Urbanisation and regulatory momentum are lifting municipal solid waste management, sewage treatment, water reuse and ZLD from cost-centres to investable infrastructure classes.',
    },
    {
      tag: 'Corporate ESG',
      title: 'Decarbonisation is a Board-Level Agenda',
      body:
        'Listed entities, PSUs and multinational subsidiaries are converting ESG, BRSR and net-zero commitments into measurable scope 1/2 reduction projects — energy, fuel, waste and water.',
    },
  ],
};

/* ===========================================================
   TECHNOLOGY & ENGINEERING CAPABILITIES
   =========================================================== */
export const TECHNOLOGY = {
  eyebrow: 'Technology & Engineering',
  title: 'A Full-Stack Engineering House Across the Asset Lifecycle.',
  subtitle:
    'Our engineering practice spans the full lifecycle — from feasibility and modelling through detailed engineering, procurement, construction, commissioning, and long-term performance.',
  stages: [
    {
      phase: 'Phase 01',
      title: 'Feasibility & Strategy',
      bullets: [
        'Techno-economic modelling & LCOE/LCOH analysis',
        'Resource assessment — solar, wind, biomass, waste, water',
        'Grid interconnection & off-take advisory',
        'Policy & regulatory compliance mapping',
      ],
    },
    {
      phase: 'Phase 02',
      title: 'Detailed Engineering',
      bullets: [
        'Process design & P&ID development',
        'Civil, structural, mechanical, electrical, C&I engineering',
        '3D plant layouts and BIM workflows',
        'HAZOP, safety, and environmental studies',
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Procurement & Quality',
      bullets: [
        'Technology-agnostic OEM selection & bid evaluation',
        'Vendor audits & inspection protocols',
        'Inspection & expediting across the supply chain',
        'FAT witness & shipping QC',
      ],
    },
    {
      phase: 'Phase 04',
      title: 'EPC & Commissioning',
      bullets: [
        'Turnkey construction management',
        'EHS, quality and schedule governance',
        'Pre-commissioning, cold/hot commissioning',
        'SAT & handover with as-built documentation',
      ],
    },
    {
      phase: 'Phase 05',
      title: 'O&M & Performance',
      bullets: [
        'Long-term operations & maintenance frameworks',
        'Performance monitoring, SCADA & digital dashboards',
        'O&M manuals, training & competence transfer',
        'Warranty & lifecycle spares support',
      ],
    },
  ],
};

/* ===========================================================
   ROADMAP — horizontal professional timeline
   =========================================================== */
export const ROADMAP = {
  eyebrow: 'Our Roadmap',
  title: 'How We Build a Project from Concept to Commissioning.',
  items: [
    {
      stage: '01',
      title: 'Discovery & Scoping',
      description:
        'Site visits, stakeholder alignment, preliminary resource and off-take work, and a clear project charter — signed off before engineering begins.',
    },
    {
      stage: '02',
      title: 'Feasibility & Tech Selection',
      description:
        'Independent techno-economic comparison of technologies and OEMs. Technology selection is justified to you in writing — never by default.',
    },
    {
      stage: '03',
      title: 'Detailed Engineering',
      description:
        'Full 3D model, P&IDs, GA drawings, BOQs, bid documents. Formal reviews (30/60/90) with client, lender and inspector-of-choice.',
    },
    {
      stage: '04',
      title: 'Procurement & Manufacturing',
      description:
        'Vendor selection, inspections, FATs, packing & shipping — all logged and visible through our project controls dashboards.',
    },
    {
      stage: '05',
      title: 'Site Execution',
      description:
        'Construction, erection, testing and commissioning run under formal EHS, quality and schedule systems. Daily, weekly and monthly reporting.',
    },
    {
      stage: '06',
      title: 'Handover & O&M',
      description:
        'SAT, as-builts, manuals, training and the O&M contract — so the asset is performant and documented on day one of operations.',
    },
  ],
};

/* ===========================================================
   LEADERSHIP PREVIEW — cards
   -----------------------------------------------------------
   Leadership names/bios are NOT invented. We render a
   preview section with generic roles that the client can
   populate. The copy avoids any personal names.
   =========================================================== */
export const LEADERSHIP = {
  eyebrow: 'Leadership',
  title: 'An Experienced Team Across Clean-Energy & Environmental Verticals.',
  subtitle:
    'Our practice is led by engineers, project directors and commercial leaders who have delivered large-scale energy and environmental projects across the country. The preview below represents core roles — full leadership bios are available on request.',
  owner: {
    photo: '/owner-photo.jpeg',
    alt: 'Owner of Green Nova Energy & Environment Solutions',
    role: 'Founder & Managing Director',
    function: 'Strategy, Client Relations & Project Governance',
    description:
      'Leads Green Nova with a focus on institutional delivery, client outcomes and integrated clean-energy project execution across India.',
  },
  preview: [],
};

/* ===========================================================
   PARTNER WITH US — dark premium CTA
   =========================================================== */
export const CTA = {
  eyebrow: 'Partner With Us',
  title: 'Have a Project or a Decarbonisation Roadmap to Deliver?',
  subtitle:
    'Speak to our team early — from concept stage onwards. We help our clients scope projects correctly, select the right technology, and deliver them to institutional standards.',
  primary: { label: 'Start a conversation', href: WHATSAPP_HREF },
  secondary: { label: 'Download capability note', href: '#' },
  highlight: 'greennovaenergyandenvironment@gmail.com',
};

/* ===========================================================
   FOOTER content is embedded in the Footer component props;
   COMPANY data above feeds through to the homepage layout.
   =========================================================== */

/* KPIs section is intentionally generic — we do not pin numbers
   to the company unless explicitly provided. */
export const KEY_STATS: StatItem[] = [];
