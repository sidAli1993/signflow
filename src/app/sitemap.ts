import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';

  // In the future, we could fetch blog posts from a database here
  // and map them to sitemap entries.
  const blogPosts = [
    '/blog',
    '/blog/create-digital-signature-online-free',
    '/blog/are-electronic-signatures-legally-binding',
    '/blog/ultimate-guide-signing-pdf-securely'
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogUrls
  ];
}
