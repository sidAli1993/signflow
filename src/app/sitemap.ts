import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';

  // Real blog posts that have actual page content
  const blogPosts = [
    { slug: 'free-digital-signature-certificate', modified: '2026-07-18' },
    { slug: 'create-digital-signature-online-free', modified: '2026-07-18' },
    { slug: 'are-electronic-signatures-legally-binding', modified: '2026-07-18' },
    { slug: 'ultimate-guide-signing-pdf-securely', modified: '2026-07-18' },
    { slug: 'how-to-sign-a-document-online-free-pdf-editor', modified: '2026-07-18' },
    { slug: 'how-to-sign-pdf-on-iphone-android-free', modified: '2026-07-18' },
    { slug: 'how-to-sign-nda-online-free', modified: '2026-07-21' },
  ];

  // Micro-tool landing pages targeting SEO search queries
  const tools = [
    'draw-signature-online',
    'sign-image-online',
    'type-signature-online',
    'sign-pdf-online',
  ];

  return [
    // Homepage — the tool itself
    {
      url: baseUrl,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Core tool pages
    {
      url: `${baseUrl}/features`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Dedicated tool landing pages
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Individual blog posts — updated today
    ...blogPosts.map(({ slug, modified }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(modified),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Legal pages — very rarely change
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ];
}
