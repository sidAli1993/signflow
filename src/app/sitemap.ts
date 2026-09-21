import { MetadataRoute } from 'next';
import templatesData from '@/data/templates.json';
import categoriesData from '@/data/categories.json';
import { BLOG_SLUGS, TOOL_SLUGS, COMPARE_SLUGS } from '@/data/slugs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mydigitsign.com';
  // Using a static date instead of new Date() to prevent Google from ignoring the sitemap due to constant false updates.
  // Update this date manually when major site changes occur.
  const lastModifiedDate = new Date('2026-09-14T10:00:00Z');

  return [
    // Homepage — the primary tool itself
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Tools Index Directory Hub
    {
      url: `${baseUrl}/tools`,
      lastModified: lastModifiedDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // Templates Hub
    {
      url: `${baseUrl}/templates`,
      lastModified: lastModifiedDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // Template Categories
    ...categoriesData.map((category) => ({
      url: `${baseUrl}/templates/${category.slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Individual Templates
    ...templatesData.map((template) => ({
      url: `${baseUrl}/templates/${template.category}/${template.slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Compare Hub
    {
      url: `${baseUrl}/compare`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Compare Pages (from single source of truth)
    ...COMPARE_SLUGS.map((slug) => ({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Core informational pages
    {
      url: `${baseUrl}/features`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Individual dedicated micro-tools (from single source of truth)
    ...TOOL_SLUGS.map((tool) => ({
      url: `${baseUrl}/tools/${tool}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Individual blog posts (from single source of truth)
    ...BLOG_SLUGS.map(({ slug, modified }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(modified),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),

    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];
}
