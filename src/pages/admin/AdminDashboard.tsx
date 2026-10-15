import { useState, useEffect, useCallback, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Icon from '@/components/primitives/Icon';
import { COMPANY } from '@/data/site';
import { logout } from '@/lib/auth';
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  toggleJobPublished,
  DEFAULT_DEPARTMENTS,
  JOB_TYPES,
  type JobOpening,
  type JobDraft,
  type JobType,
} from '@/lib/jobs';

/* =========================================================================
   JOB FORM (modal)
   ========================================================================= */

interface JobFormProps {
  initial?: JobOpening | null;
  onSave: (draft: JobDraft) => void;
  onClose: () => void;
}

function JobForm({ initial, onSave, onClose }: JobFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [department, setDepartment] = useState(initial?.department ?? DEFAULT_DEPARTMENTS[0]);
  const [location, setLocation] = useState(initial?.location ?? '');
  const [type, setType] = useState<JobType>(initial?.type ?? 'Full-Time');
  const [experience, setExperience] = useState(initial?.experience ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [responsibilities, setResponsibilities] = useState<string[]>(
    initial?.responsibilities?.length ? initial.responsibilities : ['']
  );
  const [qualifications, setQualifications] = useState<string[]>(
    initial?.qualifications?.length ? initial.qualifications : ['']
  );
  const [published, setPublished] = useState(initial?.published ?? true);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Job title is required.');
      return;
    }
    if (!location.trim()) {
      setError('Location is required.');
      return;
    }

    const cleanResp = responsibilities.map((r) => r.trim()).filter(Boolean);
    const cleanQual = qualifications.map((q) => q.trim()).filter(Boolean);

    onSave({
      title: title.trim(),
      department: department.trim() || 'General',
      location: location.trim(),
      type,
      experience: experience.trim(),
      description: description.trim(),
      responsibilities: cleanResp,
      qualifications: cleanQual,
      published,
    });
  };

  const updateList = (
    setter: (v: string[]) => void,
    list: string[],
    idx: number,
    value: string
  ) => {
    const next = [...list];
    next[idx] = value;
    setter(next);
  };

  const addRow = (setter: (v: string[]) => void, list: string[]) => {
    setter([...list, '']);
  };

  const removeRow = (setter: (v: string[]) => void, list: string[], idx: number) => {
    if (list.length <= 1) {
      setter(['']);
      return;
    }
    setter(list.filter((_, i) => i !== idx));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative my-4 w-full max-w-3xl rounded-2xl bg-white shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl border-b border-line bg-forest-950 px-6 py-5">
          <div>
            <h2 className="font-display text-[1.3rem] font-bold text-white">
              {initial ? 'Edit Job Posting' : 'Create New Job'}
            </h2>
            <p className="text-[0.8rem] text-white/60 mt-0.5">
              {initial ? 'Update the details below' : 'Fill in the details to publish a new opening'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 w-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.85rem] text-red-700 flex items-center gap-2">
              <Icon name="close" size={14} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Title */}
          <div className="space-y-1.5">
            <label className="block text-[0.82rem] font-semibold text-forest-900">
              Job Title <span className="text-gold-600">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Sr. Process Engineer — Green Hydrogen"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
            />
          </div>

          {/* Department + Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[0.82rem] font-semibold text-forest-900">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
              >
                {DEFAULT_DEPARTMENTS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-[0.82rem] font-semibold text-forest-900">Employment Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as JobType)}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
              >
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Location + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[0.82rem] font-semibold text-forest-900">
                Location <span className="text-gold-600">*</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Pune / Project Site"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[0.82rem] font-semibold text-forest-900">Experience</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. 5–10 years"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="block text-[0.82rem] font-semibold text-forest-900">Job Description</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief overview of the role..."
              className="w-full resize-y rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
            />
          </div>

          {/* Responsibilities */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[0.82rem] font-semibold text-forest-900">
                Key Responsibilities
              </label>
              <button
                type="button"
                onClick={() => addRow(setResponsibilities, responsibilities)}
                className="text-[0.78rem] font-semibold text-nova-700 hover:text-nova-800 inline-flex items-center gap-1"
              >
                <Icon name="plus" size={13} /> Add
              </button>
            </div>
            <div className="space-y-2">
              {responsibilities.map((r, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    value={r}
                    onChange={(e) => updateList(setResponsibilities, responsibilities, i, e.target.value)}
                    placeholder={`Responsibility ${i + 1}`}
                    className="flex-1 rounded-xl border border-line bg-paper px-4 py-2.5 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => removeRow(setResponsibilities, responsibilities, i)}
                    className="shrink-0 h-[42px] w-[42px] rounded-xl border border-line bg-paper text-ink-muted hover:text-red-600 hover:border-red-200 transition-colors flex items-center justify-center"
                    aria-label="Remove responsibility"
                  >
                    <Icon name="close" size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[0.82rem] font-semibold text-forest-900">
                Qualifications
              </label>
              <button
                type="button"
                onClick={() => addRow(setQualifications, qualifications)}
                className="text-[0.78rem] font-semibold text-nova-700 hover:text-nova-800 inline-flex items-center gap-1"
              >
                <Icon name="plus" size={13} /> Add
              </button>
            </div>
            <div className="space-y-2">
              {qualifications.map((q, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    value={q}
                    onChange={(e) => updateList(setQualifications, qualifications, i, e.target.value)}
                    placeholder={`Qualification ${i + 1}`}
                    className="flex-1 rounded-xl border border-line bg-paper px-4 py-2.5 text-ink focus:border-nova-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => removeRow(setQualifications, qualifications, i)}
                    className="shrink-0 h-[42px] w-[42px] rounded-xl border border-line bg-paper text-ink-muted hover:text-red-600 hover:border-red-200 transition-colors flex items-center justify-center"
                    aria-label="Remove qualification"
                  >
                    <Icon name="close" size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Published toggle */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="sr-only peer"
            />
            <span className="relative h-6 w-11 rounded-full bg-charcoal-200 peer-checked:bg-nova-500 transition-colors">
              <span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
            </span>
            <span className="text-[0.88rem] font-medium text-ink">
              Publish on careers page {published ? '(Visible to candidates)' : '(Saved as draft)'}
            </span>
          </label>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-line">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white text-ink font-semibold text-[0.92rem] px-6 py-3 hover:bg-paper transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-forest-950 hover:bg-forest-900 text-white font-semibold text-[0.92rem] px-6 py-3 shadow-lg shadow-forest-950/20 transition-all"
            >
              <Icon name="check" size={16} />
              {initial ? 'Save Changes' : 'Create Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* =========================================================================
   ADMIN DASHBOARD
   ========================================================================= */

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<JobOpening | null>(null);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const refresh = useCallback(() => {
    setJobs(getAllJobs());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Listen for storage changes from other tabs
  useEffect(() => {
    const handler = () => refresh();
    window.addEventListener('storage', handler);
    window.addEventListener('green-nova-jobs-updated', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('green-nova-jobs-updated', handler);
    };
  }, [refresh]);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const handleSave = (draft: JobDraft) => {
    if (editing) {
      updateJob(editing.id, draft);
      showToast('Job updated successfully.');
    } else {
      createJob(draft);
      showToast('Job created successfully.');
    }
    setShowForm(false);
    setEditing(null);
    refresh();
  };

  const handleDelete = (job: JobOpening) => {
    if (window.confirm(`Delete "${job.title}"? This action cannot be undone.`)) {
      deleteJob(job.id);
      showToast('Job deleted.');
      refresh();
    }
  };

  const handleTogglePublish = (job: JobOpening) => {
    toggleJobPublished(job.id);
    showToast(job.published ? 'Job unpublished (draft).' : 'Job published.');
    refresh();
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  const filtered = jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase())
  );

  const publishedCount = jobs.filter((j) => j.published).length;

  return (
    <div className="min-h-screen bg-paper-warm">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 animate-fade-in">
          <div
            className={[
              'flex items-center gap-2 rounded-xl px-5 py-3.5 shadow-xl text-[0.9rem] font-medium',
              toast.type === 'success'
                ? 'bg-forest-900 text-white'
                : 'bg-red-600 text-white',
            ].join(' ')}
          >
            <Icon name={toast.type === 'success' ? 'check' : 'close'} size={16} />
            <span>{toast.msg}</span>
          </div>
        </div>
      )}

      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-forest-950 text-white shadow-lg">
        <div className="ds-container flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/brand/logo-transparent-full.png"
              alt={COMPANY.shortName}
              className="h-9 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <h1 className="font-display text-[1.15rem] font-bold leading-none">Admin Portal</h1>
              <p className="text-[0.72rem] text-white/50 mt-1">{COMPANY.shortName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/careers"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-4 py-2 text-[0.82rem] font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon name="globe" size={14} />
              View Careers
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2 text-[0.82rem] font-semibold text-white transition-colors"
            >
              <Icon name="arrow-right" size={14} className="rotate-180" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="ds-container py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard label="Total Jobs" value={jobs.length} icon="award" tint="forest" />
          <StatCard label="Published" value={publishedCount} icon="check" tint="nova" />
          <StatCard label="Drafts" value={jobs.length - publishedCount} icon="clock" tint="gold" />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-[1.6rem] font-bold tracking-tight text-ink">
              Job Postings
            </h2>
            <p className="text-[0.88rem] text-ink-muted">
              Create, edit and manage career opportunities on the website.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:flex-initial">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400">
                <Icon name="search" size={15} />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs..."
                className="w-full sm:w-64 rounded-xl border border-line bg-white pl-10 pr-4 py-2.5 text-[0.9rem] text-ink focus:border-nova-400 focus:outline-none focus:ring-2 focus:ring-nova-400/20 transition-all"
              />
            </div>
            <button
              onClick={() => {
                setEditing(null);
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-forest-950 hover:bg-forest-900 text-white font-semibold text-[0.9rem] px-5 py-2.5 shadow-lg shadow-forest-950/20 transition-all whitespace-nowrap"
            >
              <Icon name="plus" size={16} />
              New Job
            </button>
          </div>
        </div>

        {/* Job list */}
        <div className="rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <div className="h-14 w-14 rounded-2xl bg-paper-grey mx-auto mb-4 flex items-center justify-center text-charcoal-400">
                <Icon name="search" size={24} />
              </div>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink mb-1">
                {jobs.length === 0 ? 'No jobs yet' : 'No matching jobs'}
              </h3>
              <p className="text-[0.88rem] text-ink-muted">
                {jobs.length === 0
                  ? 'Click "New Job" to create your first posting.'
                  : 'Try a different search term.'}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {filtered.map((job) => (
                <li
                  key={job.id}
                  className="px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-paper/60 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={[
                          'text-[0.66rem] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full',
                          job.type === 'Full-Time'
                            ? 'bg-nova-50 text-nova-700'
                            : job.type === 'Internship'
                              ? 'bg-gold-50 text-gold-700'
                              : 'bg-blue-50 text-blue-700',
                        ].join(' ')}
                      >
                        {job.type}
                      </span>
                      <span
                        className={[
                          'text-[0.66rem] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full',
                          job.published
                            ? 'bg-forest-100 text-forest-800'
                            : 'bg-charcoal-100 text-charcoal-600',
                        ].join(' ')}
                      >
                        {job.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    <h3 className="font-display text-[1.02rem] font-semibold text-ink truncate">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[0.8rem] text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Icon name="building" size={12} />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Icon name="location" size={12} />
                        {job.location}
                      </span>
                      {job.experience && (
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="clock" size={12} />
                          {job.experience}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleTogglePublish(job)}
                      className="h-9 w-9 rounded-lg border border-line bg-white text-ink-muted hover:text-nova-700 hover:border-nova-200 transition-colors flex items-center justify-center"
                      title={job.published ? 'Unpublish' : 'Publish'}
                      aria-label={job.published ? 'Unpublish job' : 'Publish job'}
                    >
                      <Icon name={job.published ? 'check' : 'close'} size={15} />
                    </button>
                    <button
                      onClick={() => {
                        setEditing(job);
                        setShowForm(true);
                      }}
                      className="h-9 w-9 rounded-lg border border-line bg-white text-ink-muted hover:text-forest-900 hover:border-forest-200 transition-colors flex items-center justify-center"
                      title="Edit"
                      aria-label="Edit job"
                    >
                      <Icon name="award" size={15} />
                    </button>
                    <button
                      onClick={() => handleDelete(job)}
                      className="h-9 w-9 rounded-lg border border-line bg-white text-ink-muted hover:text-red-600 hover:border-red-200 transition-colors flex items-center justify-center"
                      title="Delete"
                      aria-label="Delete job"
                    >
                      <Icon name="close" size={15} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hint */}
        <p className="mt-6 text-[0.78rem] text-ink-muted text-center">
          Posted jobs are stored locally in this browser and appear on the{' '}
          <Link to="/careers" target="_blank" className="text-nova-700 font-semibold underline">
            Careers page
          </Link>
          .
        </p>
      </main>

      {showForm && (
        <JobForm
          initial={editing}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}

/* =========================================================================
   STAT CARD
   ========================================================================= */

function StatCard({
  label,
  value,
  icon,
  tint,
}: {
  label: string;
  value: number;
  icon: 'award' | 'check' | 'clock';
  tint: 'forest' | 'nova' | 'gold';
}) {
  const tints: Record<string, string> = {
    forest: 'bg-forest-100 text-forest-800',
    nova: 'bg-nova-100 text-nova-700',
    gold: 'bg-gold-100 text-gold-700',
  };
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-sm flex items-center gap-4">
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${tints[tint]}`}>
        <Icon name={icon} size={22} />
      </div>
      <div>
        <div className="text-[1.9rem] font-bold font-display leading-none text-ink">{value}</div>
        <div className="text-[0.78rem] text-ink-muted mt-1">{label}</div>
      </div>
    </div>
  );
}
