import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all real pages for all crawlers
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // API routes — not indexable pages
          '/uploads/',   // User file uploads — private content
          '/_next/',     // Next.js internal assets
          '/private/',   // Any private routes
        ],
      },
    ],
    sitemap: 'https://mydigitsign.com/sitemap.xml',
  };
}
