/**
 * Single Source of Truth — All indexable slugs for MyDigitSign
 *
 * Used by: sitemap.ts, blog/[slug]/page.tsx (generateStaticParams),
 * and api/indexnow/route.ts. Never duplicate slug lists elsewhere.
 *
 * When you add a new page, add it HERE and all three consumers update automatically.
 */

// ─── Blog Post Slugs ────────────────────────────────────────────────────────
export const BLOG_SLUGS: { slug: string; modified: string }[] = [
  // Original batch
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
  // August 8 batch 1
  { slug: 'how-to-fill-out-uber-inspection-form', modified: '2026-08-09' },
  { slug: 'voided-check-example', modified: '2026-08-09' },
  { slug: 'what-is-a-wet-signature', modified: '2026-08-09' },
  { slug: 'docusign-vs-mydigitsign-honest-review', modified: '2026-08-09' },
  { slug: 'electronic-signature-for-small-business', modified: '2026-08-09' },
  { slug: 'digital-signature-for-freelancers', modified: '2026-08-09' },
  { slug: 'esignature-for-realtors', modified: '2026-08-09' },
  { slug: 'sign-lease-agreement-online-free', modified: '2026-08-09' },
  { slug: 'best-smallpdf-alternatives-free', modified: '2026-08-09' },
  // August 8 batch 2
  { slug: 'what-is-a-digit-sign', modified: '2026-08-09' },
  { slug: 'where-to-get-digital-signature-certificate', modified: '2026-08-09' },
  { slug: 'pdf-editor-with-signature-free', modified: '2026-08-09' },
  { slug: 'digital-signature-laws-by-country', modified: '2026-08-09' },
  // Phase 4 posts
  { slug: 'sample-email-request-to-sign-nda', modified: '2026-08-12' },
  { slug: 'how-to-extract-youtube-tags', modified: '2026-08-21' },
  { slug: 'how-to-write-strong-youtube-titles', modified: '2026-08-21' },
  { slug: 'when-is-a-w9-not-required', modified: '2026-08-30' },
  { slug: 'how-to-fill-out-w9-for-llc', modified: '2026-08-30' },
  { slug: 'w9-exempt-payee-codes-request-letter', modified: '2026-08-30' },
  { slug: 'what-is-a-disregarded-entity', modified: '2026-08-30' },
  { slug: 'esignature-in-georgia', modified: '2026-08-30' },
  { slug: 'georgia-esignature-law-mandates-guide', modified: '2026-09-04' },
  { slug: 'how-to-save-outlook-email-as-pdf', modified: '2026-09-08' },
  // Posts that exist in generateStaticParams but were missing from sitemap
  { slug: 'what-is-ssl-email', modified: '2026-08-21' },
  { slug: 'what-is-dsign', modified: '2026-08-21' },
  { slug: 'can-you-change-your-signature', modified: '2026-08-21' },
  { slug: 'signature-and-date-line', modified: '2026-08-21' },
  { slug: 'how-to-create-transparent-signature-png', modified: '2026-08-21' },
  { slug: 'how-to-add-digital-signature-to-google-docs', modified: '2026-08-21' },
  { slug: 'sign-real-estate-contract-online', modified: '2026-08-21' },
  { slug: 'how-to-make-a-pdf-black-and-white', modified: '2026-09-10' },
];

// ─── Tool Slugs ──────────────────────────────────────────────────────────────
export const TOOL_SLUGS: string[] = [
  'sign-pdf-online',
  'edit-pdf-online',
  'merge-pdf-online',
  'compress-pdf-online',
  'protect-pdf-online',
  'rotate-pdf-online',
  'draw-signature-online',
  'type-signature-online',
  'sign-image-online',
  // Phase 3
  'pdf-to-jpg',
  'jpg-to-pdf',
  'split-pdf-online',
  // Phase 4
  'sign-word-document',
  'generate-signature-line',
  'sign-nda-online',
  // Document-type tools
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
  // Misc tools
  'youtube-tag-extractor',
  'youtube-title-strength-checker',
  'convert-pdf-to-black-and-white',
];

// ─── Compare Page Slugs ──────────────────────────────────────────────────────
export const COMPARE_SLUGS: string[] = [
  'docusign-alternative',
  'smallpdf-alternative',
  'adobe-sign-alternative',
  'pandadoc-alternative',
  'hellosign-alternative',
  'signwell-alternative',
];
