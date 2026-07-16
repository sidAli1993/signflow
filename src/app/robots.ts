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
          '/private/',   // Any private routes
        ],
      },
      // ─── Bing ──────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/uploads/'],
      },
      // ─── Yandex ────────────────────────────────────────────────
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/api/', '/uploads/'],
      },
      // ─── DuckDuckGo ────────────────────────────────────────────
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/uploads/'],
      },
      // ─── AI Crawlers — Explicitly Allowed ──────────────────────
      // These crawlers power AI assistants like ChatGPT, Perplexity,
      // Claude, Gemini, and Apple Intelligence. Allowing them helps
      // MyDigitSign appear in AI-powered search and recommendations.
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'Applebot',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/uploads/'],
      },
    ],
    sitemap: 'https://mydigitsign.com/sitemap.xml',
  };
}
