import SiteShell from '@/components/layout/SiteShell';
import HeroBlock from '@/components/blocks/HeroBlock';
import ServicesSection from '@/components/blocks/ServicesSection';
import IndustriesSection from '@/components/blocks/IndustriesSection';
import RoadmapSection from '@/components/blocks/RoadmapSection';
import useSeo from '@/hooks/useSeo';

/**
 * Homepage — Green Nova Energy
 * Corporate platform featuring real brand logo assets
 * and utility-scale project visuals.
 */
export default function HomePage() {
  useSeo({
    title: undefined,
    description: 'Green Nova Energy & Environment Solutions — multi-vertical engineering partner for Renewable Hybrid Energy, Green Hydrogen, Compressed Biogas (CBG), Waste-to-Energy, Environmental Engineering and Sustainability Advisory. PAN India delivery to institutional standards.',
    keywords: ['Green Hydrogen India', 'CBG plant', 'Compressed Biogas', 'Waste to Energy', 'Renewable Hybrid Energy', 'Environmental Engineering', 'EIA consultant', 'ESG advisory India', 'Solar Wind BESS', 'Green Nova Energy'],
    type: 'website',
    breadcrumbs: [{ name: 'Home' }],
  });

  return (
    <SiteShell transparentNav>
      {/* 1. Hero Section */}
      <HeroBlock />

      {/* 2. Services (6 photo-rich cards) */}
      <ServicesSection />

      {/* 3. Industries We Serve (with industrial photography) */}
      <IndustriesSection />

      {/* 4. Strategic Roadmap (stage-gated delivery process) */}
      <RoadmapSection />
    </SiteShell>
  );
}
