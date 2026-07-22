import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';
  const lastModDate = new Date('2026-07-22');

  // Real blog posts that have actual page content
  const blogPosts = [
    { slug: 'free-digital-signature-certificate', modified: '2026-07-22' },
    { slug: 'create-digital-signature-online-free', modified: '2026-07-22' },
    { slug: 'are-electronic-signatures-legally-binding', modified: '2026-07-22' },
    { slug: 'ultimate-guide-signing-pdf-securely', modified: '2026-07-22' },
    { slug: 'how-to-sign-a-document-online-free-pdf-editor', modified: '2026-07-22' },
    { slug: 'how-to-sign-pdf-on-iphone-android-free', modified: '2026-07-22' },
    { slug: 'how-to-sign-nda-online-free', modified: '2026-07-22' },
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
