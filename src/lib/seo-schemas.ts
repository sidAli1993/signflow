/**
 * SEO Schema Generators for MyDigitSign
 * Generate fresh Schema.org JSON-LD data for Google Rich Results.
 */

export const BASE_URL = 'https://mydigitsign.com';
/** Auto-calculated at build time — no manual updates needed */
export const CURRENT_DATE = new Date().toISOString().split('T')[0];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

/**
 * Generates SoftwareApplication schema for tools.
 *
 * aggregateRating is ONLY included when the caller provides a rating
 * backed by visible on-page reviews (per Google structured data guidelines).
 */
export function getSoftwareAppSchema(opts: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  rating?: { ratingValue: string; ratingCount: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    operatingSystem: 'Windows, macOS, Linux, iOS, Android',
    applicationCategory: opts.applicationCategory || 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    // Only include aggregateRating when backed by visible on-page reviews
    ...(opts.rating ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: opts.rating.ratingValue,
        ratingCount: opts.rating.ratingCount,
        bestRating: '5',
        worstRating: '1',
      },
    } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'MyDigitSign',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og-image.png`,
      },
    },
    datePublished: '2026-06-01',
    dateModified: CURRENT_DATE,
  };
}

/**
 * Generates HowTo schema for step-by-step guides & micro-tools.
 */
export function getHowToSchema(opts: {
  name: string;
  description: string;
  url?: string;
  totalTime?: string;
  steps: HowToStep[];
}) {
  const pageUrl = opts.url || BASE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime || 'PT1M',
    step: opts.steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
      url: s.url || pageUrl,
      ...(s.image ? { image: s.image } : {}),
    })),
    datePublished: '2026-06-01',
    dateModified: CURRENT_DATE,
  };
}

/**
 * Generates FAQPage schema for search snippet accordions.
 */
export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList schema for Google breadcrumbs.
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  };
}

/**
 * Generates ItemList schema for tools index directory.
 */
export function getItemListSchema(tools: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Online PDF & Signature Micro-Tools',
    description: 'Suite of 100% free, client-side browser tools to sign, edit, merge, compress, and create signatures.',
    itemListElement: tools.map((t, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: t.name,
      url: t.url.startsWith('http') ? t.url : `${BASE_URL}${t.url.startsWith('/') ? '' : '/'}${t.url}`,
      description: t.description,
    })),
  };
}
