import SiteShell from '@/components/layout/SiteShell';
import { PageHero } from '@/components/blocks/PageBuildingBlocks';
import Button from '@/components/primitives/Button';
import { WHATSAPP_HREF } from '@/data/site';
import useSeo from '@/hooks/useSeo';

export default function NotFoundPage() {
  useSeo({
    title: '404 — Page Not Found',
    description: 'The page you are looking for does not exist. Return to the Green Nova homepage to explore services, leadership, ESG and contact.',
    type: 'website',
    noIndex: true,
    breadcrumbs: [{ name: 'Home', item: '/' }, { name: '404' }],
  });

  return (
    <SiteShell>
      <PageHero
        eyebrow="404 — Page not found"
        eyebrowVariant="gold"
        title="The page you are looking for does not exist."
        subtitle="It may have been moved, renamed, or the address was typed incorrectly. Start again from the homepage or contact our team directly."
        primaryCta={{ label: 'Return home', to: '/' }}
        secondaryCta={{ label: 'Contact us', to: WHATSAPP_HREF }}
      />

      <section className="ds-container pb-section-lg">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[5rem] font-display font-semibold text-forest-800/15 select-none leading-none mb-8">404</p>
          <div className="inline-flex gap-3">
            <Button as="a" href="/" variant="primary" iconRight="arrow-right">
              Home
            </Button>
            <Button as="a" href="/services" variant="outline">
              Services
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
