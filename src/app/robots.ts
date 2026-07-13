import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default rule: allow all real pages for all crawlers
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // API routes — not indexable pages
          '/uploads/',   // User file uploads — private content
          '/_next/',     // Next.js internal assets
          '/private/',   // Any private routes
        ],
      },
      // ─── Bing ──────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      // ─── Yandex ────────────────────────────────────────────────
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      // ─── DuckDuckGo ────────────────────────────────────────────
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      // ─── AI Crawlers — Explicitly Allowed ──────────────────────
      // These crawlers power AI assistants like ChatGPT, Perplexity,
      // Claude, Gemini, and Apple Intelligence. Allowing them helps
      // MyDigitSign appear in AI-powered search and recommendations.
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'Applebot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/', '/_next/'],
      },
    ],
    sitemap: 'https://mydigitsign.com/sitemap.xml',
  };
}
