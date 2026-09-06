import { useEffect } from 'react';
import { COMPANY } from '@/data/site';

export interface SeoOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | 'service';
  canonical?: string;
  noIndex?: boolean;
  /** Breadcrumb JSON-LD (array of {name, item?} */
  breadcrumbs?: Array<{ name: string; item?: string }>;
  /** Service or page structured data */
  serviceName?: string;
  serviceDescription?: string;
}

const SITE_URL = 'https://greennovaenergy.in';
const DEFAULT_IMAGE = '/images/hero-clean-energy.jpg';

function upsertMeta(attr: 'name' | 'property', key: string, value: string) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertLink(rel: string, href: string) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: unknown) {
  if (typeof document === 'undefined') return;
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * useSeo — lightweight hook.
 * Applies <title>, description, OG/Twitter, canonical, robots,
 * breadcrumb JSON-LD, and optional service JSON-LD to the page.
 */
export default function useSeo(opts: SeoOptions = {}) {
  const {
    title,
    description,
    keywords,
    image = DEFAULT_IMAGE,
    url,
    type = 'website',
    canonical,
    noIndex = false,
    breadcrumbs,
    serviceName,
    serviceDescription,
  } = opts;

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const fullTitle = title ? `${title} — ${COMPANY.shortName}` : `${COMPANY.name}`;
    document.title = fullTitle;

    const desc =
      description ??
      'Green Nova Energy & Environment Solutions Pvt Ltd — end-to-end engineering partner for Renewable Hybrid Energy, Green Hydrogen, Compressed Biogas (CBG), Waste-to-Energy, Environmental Engineering and Sustainability Advisory. PAN India delivery to institutional standards.';

    upsertMeta('name', 'description', desc);
    if (keywords && keywords.length > 0) {
      upsertMeta('name', 'keywords', keywords.join(', '));
    }
    upsertMeta('name', 'author', COMPANY.name);
    upsertMeta(
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );
    upsertMeta('name', 'googlebot', noIndex ? 'noindex, nofollow' : 'index, follow');

    const canonicalUrl = canonical ?? url ?? (typeof window !== 'undefined' ? window.location.href : `${SITE_URL}/`);
    upsertLink('canonical', canonicalUrl);

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', COMPANY.shortName);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:locale', 'en_IN');
    if (image) {
      upsertMeta('property', 'og:image', image);
      upsertMeta('property', 'og:image:width', '1920');
      upsertMeta('property', 'og:image:height', '1080');
      upsertMeta('property', 'og:image:alt', `${COMPANY.shortName} — ${title ?? 'Home'}`);
    }

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', desc);
    if (image) upsertMeta('name', 'twitter:image', image);

    // Breadcrumb JSON-LD
    if (breadcrumbs && breadcrumbs.length > 0) {
      const bcList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        ...(b.item ? { item: b.item.startsWith('http') ? b.item : `${SITE_URL}${b.item}` } : {}),
      })),
    };
      upsertJsonLd('jsonld-breadcrumb', bcList);
    } else {
      const el = document.getElementById('jsonld-breadcrumb');
      el?.remove();
    }

    // Service JSON-LD (when provided)
    if (serviceName) {
      const svc = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDescription ?? desc,
        provider: {
          '@type': 'Organization',
          name: COMPANY.name,
          url: SITE_URL,
        },
        areaServed: {
          '@type': 'Place',
          name: 'India',
        },
        serviceType: serviceName,
      };
      upsertJsonLd('jsonld-service', svc);
    } else {
      const el = document.getElementById('jsonld-service');
      el?.remove();
    }
  }, [title, description, keywords, image, url, type, canonical, noIndex, breadcrumbs, serviceName, serviceDescription]);
}
