export default function PageLoadingFallback() {
  return (
    <div
      className="min-h-screen w-full bg-paper flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Page loading"
    >
      <div className="ds-container py-section flex flex-col items-center gap-6">
        <div className="relative flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src="/brand/logo-emblem.png"
              alt="Green Nova Logo"
              className="h-14 w-14 rounded-2xl object-contain drop-shadow-md"
              width={56}
              height={56}
            />
            <div className="absolute inset-0 rounded-2xl ring-2 ring-emerald-500 animate-ping opacity-25" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="block w-2 h-2 rounded-full bg-emerald-600 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="block w-2 h-2 rounded-full bg-emerald-600 animate-bounce" style={{ animationDelay: '120ms' }} />
            <span className="block w-2 h-2 rounded-full bg-emerald-600 animate-bounce" style={{ animationDelay: '240ms' }} />
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
            Loading page&hellip;
          </div>
          <p className="mt-1 text-[0.82rem] text-ink-muted">
            Preparing content.
          </p>
        </div>
      </div>
    </div>
  );
}
