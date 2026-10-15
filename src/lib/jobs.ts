/**
 * Green Nova — Jobs Store
 * -----------------------
 * Shared, localStorage-backed job postings so that jobs created by the
 * admin panel automatically appear on the public Careers page.
 *
 * On first load the store is seeded with the default openings that were
 * previously hardcoded in CareerPage.tsx.
 */

export type JobType = 'Full-Time' | 'Contract' | 'Internship';

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  /** ISO timestamp of creation */
  createdAt: string;
  /** Whether the role is published to the careers page */
  published: boolean;
}

const STORAGE_KEY = 'green_nova_jobs_v1';

/* =========================================================================
   DEFAULT / SEED JOBS
   ========================================================================= */
const DEFAULT_JOBS: JobOpening[] = [
  {
    id: 'sr-process-engineer',
    title: 'Sr. Process Engineer — Green Hydrogen',
    department: 'Green Hydrogen',
    location: 'Pune / Project Site',
    type: 'Full-Time',
    experience: '5–10 years',
    description:
      'Lead process design for alkaline and PEM electrolyser systems, hydrogen compression, storage and dispensing infrastructure. Work directly with OEMs and site teams.',
    responsibilities: [
      'Develop P&IDs, heat & mass balances and process simulations for H₂ plants',
      'Lead HAZOP, safety studies and design reviews',
      'Coordinate with procurement for OEM evaluation and FAT',
      'Support site commissioning and performance testing',
    ],
    qualifications: [
      'B.Tech/M.Tech in Chemical / Electrochemical Engineering',
      '5+ years in process plant design (oil & gas, chemicals or green hydrogen)',
      'Familiarity with ASPEN, HYSYS or equivalent simulation tools',
      'Willingness to travel to project sites across India',
    ],
    createdAt: new Date('2026-01-10').toISOString(),
    published: true,
  },
  {
    id: 'project-manager-re',
    title: 'Project Manager — Renewable Energy',
    department: 'Renewable Hybrid Energy',
    location: 'Pune / Site-Based',
    type: 'Full-Time',
    experience: '6–12 years',
    description:
      'Manage utility-scale solar, wind and solar-wind-BESS hybrid projects from feasibility through commissioning and handover. Own schedule, quality and stakeholder delivery.',
    responsibilities: [
      'End-to-end project execution from mobilisation to COD',
      'Manage subcontractors, vendors and site teams',
      'Monthly reporting, MIS and client presentations',
      'EHS governance and quality assurance on site',
    ],
    qualifications: [
      'B.E./B.Tech in Electrical, Mechanical or Civil Engineering',
      '6+ years in solar/wind EPC project management',
      'PMP or equivalent certification preferred',
      'Strong understanding of grid interconnection and CERC/SERC regulations',
    ],
    createdAt: new Date('2026-01-12').toISOString(),
    published: true,
  },
  {
    id: 'env-engineer',
    title: 'Environmental Engineer',
    department: 'Environmental Engineering',
    location: 'Pune',
    type: 'Full-Time',
    experience: '3–6 years',
    description:
      'Conduct EIA studies, air and noise pollution assessments, and environmental compliance audits for industrial and infrastructure projects across India.',
    responsibilities: [
      'Prepare EIA/EMP reports for MoEFCC and SEIAA submissions',
      'Design air pollution control systems (APCS) and stack monitoring plans',
      'Coordinate with regulatory bodies for environmental clearances',
      'Support clients with compliance monitoring and reporting',
    ],
    qualifications: [
      'M.Tech/M.Sc in Environmental Engineering or Environmental Science',
      '3+ years in EIA consulting or environmental compliance',
      'Knowledge of MoEFCC notification, CPCB/SPCB standards',
      'Proficiency in GIS tools and environmental modelling software',
    ],
    createdAt: new Date('2026-01-15').toISOString(),
    published: true,
  },
  {
    id: 'sustainability-analyst',
    title: 'Sustainability Analyst — ESG Advisory',
    department: 'Sustainability Advisory',
    location: 'Pune (Hybrid)',
    type: 'Full-Time',
    experience: '2–5 years',
    description:
      'Support corporate clients with GHG inventories, BRSR reporting, decarbonisation roadmaps and net-zero target setting across scope 1, 2 and 3 emissions.',
    responsibilities: [
      'Conduct GHG emission inventories using GHG Protocol',
      'Draft BRSR/BRSR Core disclosures for listed entities',
      'Develop net-zero pathways and science-based targets',
      'Research carbon credit mechanisms and I-REC markets',
    ],
    qualifications: [
      'MBA / M.Tech with specialisation in Sustainability or Energy',
      '2+ years in ESG consulting, sustainability reporting or carbon advisory',
      'Familiarity with SEBI BRSR, GRI, TCFD and SBTi frameworks',
      'Strong analytical and client-facing skills',
    ],
    createdAt: new Date('2026-01-18').toISOString(),
    published: true,
  },
  {
    id: 'cbg-intern',
    title: 'Graduate Engineer Trainee — CBG',
    department: 'Compressed Biogas',
    location: 'Pune / Project Site',
    type: 'Internship',
    experience: 'Fresher / 0–1 year',
    description:
      'Join our Compressed Biogas team to learn anaerobic digestion plant design, feedstock analysis and biogas upgrading systems. Ideal for recent graduates passionate about green fuels.',
    responsibilities: [
      'Assist with feedstock characterisation and lab testing',
      'Support process design documentation and BOQ preparation',
      'Participate in site visits and vendor coordination',
      'Contribute to techno-economic feasibility models',
    ],
    qualifications: [
      'B.Tech in Biotechnology, Chemical, or Environmental Engineering',
      'Strong interest in biogas, biomass and circular economy',
      'Good communication and documentation skills',
      'Willingness to work on-site for project durations',
    ],
    createdAt: new Date('2026-01-20').toISOString(),
    published: true,
  },
];

/* =========================================================================
   STORAGE HELPERS
   ========================================================================= */

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readRaw(): JobOpening[] {
  if (!isBrowser()) return [...DEFAULT_JOBS];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...DEFAULT_JOBS];
    const parsed = JSON.parse(raw) as JobOpening[];
    if (!Array.isArray(parsed)) return [...DEFAULT_JOBS];
    return parsed;
  } catch {
    return [...DEFAULT_JOBS];
  }
}

function writeRaw(jobs: JobOpening[]): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    // Notify other tabs / listeners
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY }));
    window.dispatchEvent(new CustomEvent('green-nova-jobs-updated'));
  } catch {
    /* ignore quota errors */
  }
}

/* =========================================================================
   PUBLIC API
   ========================================================================= */

export interface JobDraft {
  title: string;
  department: string;
  location: string;
  type: JobType;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  published?: boolean;
}

/** Return all jobs (admin sees everything; public page filters by published). */
export function getAllJobs(): JobOpening[] {
  return readRaw().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

/** Return only published jobs for the public careers page. */
export function getPublishedJobs(): JobOpening[] {
  return getAllJobs().filter((j) => j.published);
}

export function getJobById(id: string): JobOpening | undefined {
  return readRaw().find((j) => j.id === id);
}

export function createJob(draft: JobDraft): JobOpening {
  const jobs = readRaw();
  const job: JobOpening = {
    id: slugifyId(draft.title),
    ...draft,
    published: draft.published ?? true,
    createdAt: new Date().toISOString(),
  };
  // Ensure uniqueness by appending a short random suffix if needed
  if (jobs.some((j) => j.id === job.id)) {
    job.id = `${job.id}-${Math.random().toString(36).slice(2, 7)}`;
  }
  writeRaw([job, ...jobs]);
  return job;
}

export function updateJob(id: string, patch: Partial<JobDraft>): JobOpening | undefined {
  const jobs = readRaw();
  const idx = jobs.findIndex((j) => j.id === id);
  if (idx === -1) return undefined;
  const updated: JobOpening = { ...jobs[idx], ...patch };
  jobs[idx] = updated;
  writeRaw(jobs);
  return updated;
}

export function deleteJob(id: string): boolean {
  const jobs = readRaw();
  const next = jobs.filter((j) => j.id !== id);
  if (next.length === jobs.length) return false;
  writeRaw(next);
  return true;
}

/** Toggle published state. */
export function toggleJobPublished(id: string): JobOpening | undefined {
  const job = getJobById(id);
  if (!job) return undefined;
  return updateJob(id, { published: !job.published });
}

/* =========================================================================
   UTILITIES
   ========================================================================= */

function slugifyId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export const JOB_TYPES: JobType[] = ['Full-Time', 'Contract', 'Internship'];

export const DEFAULT_DEPARTMENTS = [
  'Green Hydrogen',
  'Compressed Biogas',
  'Waste-to-Energy',
  'Environmental Engineering',
  'Renewable Hybrid Energy',
  'Sustainability Advisory',
  'Water Treatment',
  'Operations & Maintenance',
  'Corporate',
];
