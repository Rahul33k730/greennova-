import { Link } from 'react-router-dom';
import SiteShell from '@/components/layout/SiteShell';
import { SectionHeader } from '@/components/section/Section';
import {
  FAQBlock,
  ServiceCTA,
} from '@/components/blocks/PageBuildingBlocks';
import Icon from '@/components/primitives/Icon';
import type { ServiceDetailData } from '@/data/services-data';
import { WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';

export default function ServiceDetailPage({ service }: { service: ServiceDetailData }) {
  const serviceKeywords = [
    service.shortTitle,
    service.title,
    `${service.shortTitle} engineering`,
    `${service.shortTitle} EPC`,
    `${service.shortTitle} India`,
    `${service.shortTitle} advisory`,
    `${service.shortTitle} consulting`,
  ];

  useSeo({
    title: `${service.shortTitle} — ${service.title}`,
    description: service.tagline || service.overview.paragraphs[0]?.split('.')[0],
    keywords: serviceKeywords,
    type: 'service',
    serviceName: service.shortTitle,
    serviceDescription: service.tagline,
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: 'Services', item: '/services' }, { name: service.shortTitle }],
  });

  return (
    <SiteShell>
      {/* ========== PAGE HERO ========== */}
      <section className="relative isolate overflow-hidden bg-paper pt-[calc(var(--nav-height)+2rem)] pb-16 lg:pb-24 border-b border-line">
        {/* Ambient signature atmosphere */}
        <div aria-hidden className="absolute -top-32 -left-32 w-96 h-96 bg-nova-500/5 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute top-1/2 -right-32 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="ds-container relative">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="inline-flex flex-wrap items-center gap-2 text-[0.82rem] text-ink-muted">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-forest-800 transition-colors inline-flex items-center leading-none">
                  Home
                </Link>
              </li>
              <li aria-hidden className="inline-flex items-center text-charcoal-400 opacity-60">
                <Icon name="arrow-right" size={11} />
              </li>
              <li className="inline-flex items-center">
                <Link to="/services" className="hover:text-forest-800 transition-colors inline-flex items-center leading-none">
                  Services
                </Link>
              </li>
              <li aria-hidden className="inline-flex items-center text-charcoal-400 opacity-60">
                <Icon name="arrow-right" size={11} />
              </li>
              <li aria-current="page" className="inline-flex items-center text-forest-900 font-semibold leading-none">
                {service.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-forest-800/15 bg-forest-900/5 text-forest-800 text-[0.72rem] font-bold uppercase tracking-[0.15em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-nova-500 shadow-[0_0_8px_rgba(0,214,133,0.8)]" />
                <span>Practice Area • {service.shortTitle}</span>
              </div>

              <h1 className="font-display text-[clamp(2.1rem,3.2vw+0.7rem,3.4rem)] font-semibold tracking-tight text-forest-950 leading-[1.12] text-balance">
                {service.title}
              </h1>

              <p className="mt-5 text-[1.08rem] md:text-[1.15rem] leading-[1.7] text-ink-muted font-normal max-w-xl">
                {service.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_HREF}
                  className="tactile-btn group inline-flex items-center gap-2 rounded-xl bg-forest-900 hover:bg-forest-800 active:bg-forest-950 text-white font-medium text-[0.94rem] px-6 py-3 shadow-sm hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
                >
                  <span>Discuss this service</span>
                  <Icon name="arrow-right" size={15} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 text-emerald-300" />
                </a>
                <Link
                  to="/services"
                  className="tactile-btn inline-flex items-center gap-2 rounded-xl border border-line bg-white hover:bg-paper-warm hover:border-line-strong text-ink font-medium text-[0.94rem] px-6 py-3 shadow-xs hover:shadow-md"
                >
                  All practice areas
                </Link>
              </div>
            </div>

            {/* Right: Framed photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-line bg-forest-950 shadow-xl group">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  {service.backgroundImage ? (
                    <img
                      src={service.backgroundImage}
                      alt={`${service.shortTitle} project`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES SERVED ========== */}
      <section
        id="industries"
        aria-labelledby="industries-title"
        className="ds-section bg-white"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrowVariant="gold"
              eyebrow="Sectors & Client Profiles"
              title={`Industries We Serve With ${service.shortTitle}.`}
              subtitle="From public-sector corporations and regulated utilities through to industrial developers and concessionaires, every asset meets institutional bankability standards."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.industries.map((ind) => (
              <article
                key={ind.name}
                className="tactile-card group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm cursor-pointer select-none"
              >
                {/* Photo header with gradient overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
                  <img
                    src={ind.image || '/images/industries/refinery.jpg'}
                    alt={ind.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent pointer-events-none" />

                  {/* Sector Icon badge */}
                  <div className="absolute top-3 left-3 h-8 w-8 rounded-lg bg-forest-950/75 border border-white/20 backdrop-blur-md flex items-center justify-center text-emerald-300 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                    <Icon name={ind.icon as any} size={16} />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display font-semibold tracking-tight text-[1.05rem] leading-snug text-ink transition-colors duration-300 group-hover:text-forest-900">
                      {ind.name}
                    </h3>
                    {ind.detail && (
                      <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-muted font-normal">
                        {ind.detail}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-[0.74rem] font-semibold uppercase tracking-wider text-forest-700">
                    <span>Sector Focus</span>
                    <span className="text-emerald-600 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ========== FREQUENTLY ASKED QUESTIONS ========== */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="ds-section bg-paper"
      >
        <div className="ds-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              eyebrowVariant="gold"
              eyebrow="Technical & Commercial Inquiries"
              title={`Frequently Asked Questions About ${service.shortTitle}.`}
              subtitle="If your technical or commercial query is not covered below, our practice engineers are available for a dedicated scoping conversation."
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQBlock items={service.faq} />
          </div>
        </div>
      </section>

      {/* ========== DEDICATED PRACTICE CTA ========== */}
      {service.cta && (
        <ServiceCTA
          headline={service.cta.headline}
          subcopy={service.cta.subcopy}
          primaryTo={WHATSAPP_HREF}
          primaryLabel="Discuss your project"
          secondaryTo="/services"
          secondaryLabel="Explore all services"
        />
      )}
    </SiteShell>
  );
}
