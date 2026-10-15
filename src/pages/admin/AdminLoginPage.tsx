import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Icon from '@/components/primitives/Icon';
import { login } from '@/lib/auth';
import { COMPANY } from '@/data/site';

/**
 * Green Nova — Admin Login
 * Styled as a secure management portal (dark theme, brand accents).
 */
export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const from = (location.state as { from?: string } | null)?.from || '/admin';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    // Small delay so the loading state is perceivable
    setTimeout(() => {
      const result = login(email, password);
      if (result.ok) {
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Login failed.');
        setSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen w-full bg-forest-950 text-white relative overflow-hidden flex items-center justify-center px-4 py-10">
      {/* Ambient background glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-nova-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,19,13,0.6)_100%)]" />
      </div>

      <div className="relative w-full max-w-[440px] animate-fade-in">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/brand/logo-transparent-full.png"
            alt={COMPANY.shortName}
            className="h-16 w-auto mb-4"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <h1 className="font-display text-[1.8rem] font-bold tracking-tight text-white">
            {COMPANY.shortName}
          </h1>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a1f17]/80 backdrop-blur-xl shadow-2xl">
          {/* Header band */}
          <div className="bg-gradient-to-r from-nova-600 to-forest-600 px-7 py-6 text-center">
            <h2 className="text-[1.1rem] font-bold uppercase tracking-[0.18em] text-white">
              Secure Management Portal
            </h2>
            <p className="mt-1.5 text-[0.82rem] text-white/70">
              Enter credentials to access administration
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-7 py-8 space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="admin-email"
                className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white/60"
              >
                Email Address:
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 group-focus-within:text-nova-400 transition-colors">
                  <Icon name="mail" size={16} />
                </div>
                <input
                  id="admin-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full text-[0.98rem] rounded-xl border border-white/10 bg-forest-900/60 text-white placeholder:text-charcoal-500 pl-11 pr-4 py-3.5 transition-all duration-200 focus:border-nova-400/60 focus:bg-forest-900 focus:outline-none focus:ring-2 focus:ring-nova-400/20"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="admin-password"
                className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white/60"
              >
                Password:
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-charcoal-400 group-focus-within:text-nova-400 transition-colors">
                  <Icon name="shield" size={16} />
                </div>
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-[0.98rem] rounded-xl border border-white/10 bg-forest-900/60 text-white placeholder:text-charcoal-500 pl-11 pr-12 py-3.5 transition-all duration-200 focus:border-nova-400/60 focus:bg-forest-900 focus:outline-none focus:ring-2 focus:ring-nova-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-charcoal-400 hover:text-white transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <Icon name="close" size={16} />
                  ) : (
                    <Icon name="shield" size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[0.84rem] text-red-300 flex items-center gap-2">
                <Icon name="close" size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-nova-500 to-nova-600 hover:from-nova-400 hover:to-nova-500 text-forest-950 font-bold text-[0.96rem] uppercase tracking-[0.1em] px-7 py-3.5 shadow-lg shadow-nova-500/20 hover:shadow-xl hover:shadow-nova-500/30 transition-all duration-250 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
                  </svg>
                  <span>Signing in…</span>
                </>
              ) : (
                <span>Log In</span>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[0.78rem] text-white/40">
          © {new Date().getFullYear()} {COMPANY.shortName}. Secure Administration.
        </p>

        <div className="mt-4 text-center">
          <Link
            to="/"
            className="text-[0.78rem] text-white/50 hover:text-nova-400 transition-colors inline-flex items-center gap-1.5"
          >
            <Icon name="arrow-left" size={12} />
            Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
