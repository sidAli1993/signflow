import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';

  // Real blog posts that have actual page content
  const blogPosts = [
    'create-digital-signature-online-free',
    'are-electronic-signatures-legally-binding',
    'ultimate-guide-signing-pdf-securely',
  ];

  return [
    // Homepage — the tool itself; changes only when new features ship
    {
      url: baseUrl,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },

    // Core tool pages — high value, change infrequently
    {
      url: `${baseUrl}/features`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Individual blog posts — static, not updated frequently
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date('2026-06-25'),
      changeFrequency: 'yearly' as const,
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
