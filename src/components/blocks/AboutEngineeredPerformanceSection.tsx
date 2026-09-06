import useReveal from '@/hooks/useReveal';

export default function AboutEngineeredPerformanceSection() {
  const rootRef = useReveal<HTMLElement>();

  return (
    <section
      ref={rootRef}
      id="engineered-performance"
      className="ds-section bg-paper"
      aria-labelledby="engineered-performance-title"
    >
      <div className="ds-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 reveal-up">
            <div className="relative rounded-3xl overflow-hidden border border-line bg-forest-950 shadow-2xl">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 tech-grid-bg-dark opacity-[0.7] pointer-events-none z-10"
                />

                <img
                  src="/images/about-engineering-facility.jpg"
                  alt="Green Nova clean-energy engineering facility with telemetry monitoring and advanced bioreactors"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/35 to-forest-950/55 z-10"
                />

                <div className="absolute top-5 left-5 z-20">
                  <span className="tech-chip">
                    <span className="telemetry-dot telemetry-dot--sm" />
                    SCADA Telemetry
                  </span>
                </div>

                <div className="absolute top-5 right-5 z-20">
                  <span className="tech-chip">
                    <span className="telemetry-dot telemetry-dot--sm" />
                    Real-Time Monitoring
                  </span>
                </div>

                <div className="absolute top-1/2 left-5 -translate-y-1/2 z-20 hidden sm:flex">
                  <span className="tech-chip">
                    <span className="telemetry-dot telemetry-dot--sm" />
                    Bio-Processing
                  </span>
                </div>

                <div className="absolute top-1/2 right-5 -translate-y-1/2 z-20 hidden sm:flex">
                  <span className="tech-chip">
                    <span className="telemetry-dot telemetry-dot--sm" />
                    Process Control
                  </span>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <span className="tech-chip tech-chip--lg">
                    <span className="telemetry-dot" />
                    Stage-Gated Operations
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="reveal-up">
              <span className="ds-eyebrow">05 / Performance Engineering</span>
            </div>

            <h2
              id="engineered-performance-title"
              className="mt-6 font-display font-semibold leading-[1.08] tracking-[-0.03em] text-forest-950 text-balance text-[clamp(1.75rem,2.2vw+1rem,2.75rem)] reveal-up"
            >
              Engineered For Performance
            </h2>

            <p className="mt-8 font-display font-semibold leading-[1.2] tracking-[-0.02em] text-forest-950 text-[clamp(1.35rem,1.6vw+0.8rem,2rem)] text-balance reveal-up">
              Technology is only valuable when it performs in the field.
            </p>

            <p className="mt-6 text-[1rem] leading-[1.8] text-ink-muted max-w-xl reveal-up">
              Green Nova combines advanced process technologies with disciplined engineering,
              automation, monitoring and operational controls to create systems designed for
              measurable and repeatable performance.
            </p>

            <div className="mt-10 max-w-md reveal-up">
              <div className="data-panel">
                <div className="data-panel__row">
                  <span className="data-panel__k">Monitoring</span>
                  <span className="data-panel__v">24 / 7</span>
                </div>
                <div className="data-panel__row">
                  <span className="data-panel__k">Process Control</span>
                  <span className="data-panel__v">SCADA</span>
                </div>
                <div className="data-panel__row">
                  <span className="data-panel__k">Operations</span>
                  <span className="data-panel__v">Stage-Gated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
