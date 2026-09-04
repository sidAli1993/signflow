import { MetadataRoute } from 'next';
import templatesData from '@/data/templates.json';
import categoriesData from '@/data/categories.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';
  const lastModDate = new Date('2026-08-15');
  const todayDate = new Date();

  // Real blog posts that have actual page content
  const blogPosts = [
    { slug: 'free-digital-signature-certificate', modified: '2026-08-09' },
    { slug: 'create-digital-signature-online-free', modified: '2026-08-09' },
    { slug: 'are-electronic-signatures-legally-binding', modified: '2026-08-09' },
    { slug: 'ultimate-guide-signing-pdf-securely', modified: '2026-08-09' },
    { slug: 'how-to-sign-a-document-online-free-pdf-editor', modified: '2026-08-09' },
    { slug: 'how-to-sign-pdf-on-iphone-android-free', modified: '2026-08-09' },
    { slug: 'how-to-sign-nda-online-free', modified: '2026-08-09' },
    { slug: 'how-to-add-signature-in-word', modified: '2026-08-09' },
    { slug: 'what-is-a-signature-line', modified: '2026-08-09' },
    { slug: 'how-to-ask-someone-to-sign-nda', modified: '2026-08-09' },
    { slug: 'can-you-notarize-your-own-signature', modified: '2026-08-09' },
    // New posts — August 8, 2026
    { slug: 'how-to-fill-out-uber-inspection-form', modified: '2026-08-09' },
    { slug: 'voided-check-example', modified: '2026-08-09' },
    { slug: 'what-is-a-wet-signature', modified: '2026-08-09' },
    { slug: 'docusign-vs-mydigitsign-honest-review', modified: '2026-08-09' },
    { slug: 'electronic-signature-for-small-business', modified: '2026-08-09' },
    { slug: 'digital-signature-for-freelancers', modified: '2026-08-09' },
    { slug: 'esignature-for-realtors', modified: '2026-08-09' },
    { slug: 'sign-lease-agreement-online-free', modified: '2026-08-09' },
    { slug: 'best-smallpdf-alternatives-free', modified: '2026-08-09' },
    { slug: 'what-is-a-digit-sign', modified: '2026-08-09' },
    { slug: 'where-to-get-digital-signature-certificate', modified: '2026-08-09' },
    { slug: 'pdf-editor-with-signature-free', modified: '2026-08-09' },
    { slug: 'digital-signature-laws-by-country', modified: '2026-08-09' },
    { slug: 'sample-email-request-to-sign-nda', modified: '2026-08-12' },
    { slug: 'how-to-extract-youtube-tags', modified: '2026-08-21' },
    { slug: 'how-to-write-strong-youtube-titles', modified: '2026-08-21' },
    { slug: 'when-is-a-w9-not-required', modified: '2026-08-30' },
    { slug: 'how-to-fill-out-w9-for-llc', modified: '2026-08-30' },
    { slug: 'w9-exempt-payee-codes-request-letter', modified: '2026-08-30' },
    { slug: 'what-is-a-disregarded-entity', modified: '2026-08-30' },
    { slug: 'esignature-in-georgia', modified: '2026-08-30' },
    { slug: 'georgia-esignature-law-mandates-guide', modified: '2026-09-04' },
  ];

  // Dedicated micro-tools suite
  const tools = [
    'sign-pdf-online',
    'edit-pdf-online',
    'merge-pdf-online',
    'compress-pdf-online',
    'protect-pdf-online',
    'rotate-pdf-online',
    'draw-signature-online',
    'type-signature-online',
    'sign-image-online',
    // Phase 3 new tools
    'pdf-to-jpg',
    'jpg-to-pdf',
    'split-pdf-online',
    // Phase 4 new tools
    'sign-word-document',
    'generate-signature-line',
    'sign-nda-online',
    // 10 new document-type tools
    'sign-lease-agreement-online',
    'sign-employment-contract-online',
    'sign-offer-letter-online',
    'sign-invoice-online',
    'sign-waiver-online',
    'sign-medical-form-online',
    'sign-consent-form-online',
    'sign-real-estate-contract-online',
    'sign-freelance-contract-online',
    'sign-business-agreement-online',
    'youtube-tag-extractor',
    'youtube-title-strength-checker',
  ];

  return [
    // Homepage — the primary tool itself
    {
      url: baseUrl,
      lastModified: lastModDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Tools Index Directory Hub
    {
      url: `${baseUrl}/tools`,
      lastModified: lastModDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // Templates Hub
    {
      url: `${baseUrl}/templates`,
      lastModified: todayDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // Template Categories
    ...categoriesData.map((category) => ({
      url: `${baseUrl}/templates/${category.slug}`,
      lastModified: todayDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Individual Templates
    ...templatesData.map((template) => ({
      url: `${baseUrl}/templates/${template.category}/${template.slug}`,
      lastModified: todayDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Compare Hub
    {
      url: `${baseUrl}/compare`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Compare Pages
    {
      url: `${baseUrl}/compare/docusign-alternative`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Phase 1: SmallPDF alternative compare page
    {
      url: `${baseUrl}/compare/smallpdf-alternative`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Phase 3: Additional competitor compare pages
    {
      url: `${baseUrl}/compare/adobe-sign-alternative`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compare/pandadoc-alternative`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compare/hellosign-alternative`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compare/signwell-alternative`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Core informational pages
    {
      url: `${baseUrl}/features`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Individual dedicated micro-tools
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: lastModDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Individual blog posts
    ...blogPosts.map(({ slug, modified }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(modified),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),

    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: lastModDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastModDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];
}
