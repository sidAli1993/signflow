import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';

  const blogPosts = [
    '/blog',
    '/blog/create-digital-signature-online-free',
    '/blog/are-electronic-signatures-legally-binding',
    '/blog/ultimate-guide-signing-pdf-securely'
  ];

  const staticPages = [
    { path: '/features', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/how-it-works', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/cookie-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...staticUrls,
    ...blogUrls
  ];
}
