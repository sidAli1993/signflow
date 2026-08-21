import { NextResponse } from 'next/server';

/**
 * IndexNow API Route
 * 
 * Submits all sitemap URLs to Bing and Yandex via the IndexNow protocol
 * for instant indexing. Call this endpoint after deploying new pages.
 * 
 * Usage: POST /api/indexnow
 * 
 * IndexNow is supported by: Bing, Yandex, Seznam, Naver
 * When you submit to one, they share with all participating engines.
 */

const INDEXNOW_KEY = 'a1b2c3d4e5f6789012345678abcdef01';
const HOST = 'mydigitsign.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// All indexable URLs from the sitemap
function getAllUrls(): string[] {
  const baseUrl = `https://${HOST}`;

  const blogPosts = [
    'free-digital-signature-certificate',
    'create-digital-signature-online-free',
    'are-electronic-signatures-legally-binding',
    'ultimate-guide-signing-pdf-securely',
    'how-to-sign-a-document-online-free-pdf-editor',
    'how-to-sign-pdf-on-iphone-android-free',
    'how-to-sign-nda-online-free',
    'how-to-add-signature-in-word',
    'what-is-a-signature-line',
    'how-to-ask-someone-to-sign-nda',
    'can-you-notarize-your-own-signature',
    // New posts — August 8, 2026
    'how-to-fill-out-uber-inspection-form',
    'voided-check-example',
    'what-is-a-wet-signature',
    'docusign-vs-mydigitsign-honest-review',
    'electronic-signature-for-small-business',
    'digital-signature-for-freelancers',
    'esignature-for-realtors',
    'sign-lease-agreement-online-free',
    'best-smallpdf-alternatives-free',
    'what-is-a-digit-sign',
    'where-to-get-digital-signature-certificate',
    'pdf-editor-with-signature-free',
    'digital-signature-laws-by-country',
    'how-to-extract-youtube-tags',
    'how-to-write-strong-youtube-titles',
  ];

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
    'pdf-to-jpg',
    'jpg-to-pdf',
    'split-pdf-online',
    'sign-word-document',
    'generate-signature-line',
    'youtube-tag-extractor',
    'youtube-title-strength-checker',
  ];

  const comparisons = [
    'docusign-alternative',
    'smallpdf-alternative',
    'adobe-sign-alternative',
    'pandadoc-alternative',
    'hellosign-alternative',
    'signwell-alternative',
  ];

  return [
    baseUrl,
    `${baseUrl}/tools`,
    `${baseUrl}/compare`,
    ...comparisons.map((cmp) => `${baseUrl}/compare/${cmp}`),
    `${baseUrl}/features`,
    `${baseUrl}/how-it-works`,
    `${baseUrl}/blog`,
    ...blogPosts.map((slug) => `${baseUrl}/blog/${slug}`),
    ...tools.map((tool) => `${baseUrl}/tools/${tool}`),
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/cookie-policy`,
    `${baseUrl}/terms-of-service`,
  ];
}

export async function POST() {
  const urlList = getAllUrls();

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    // Submit to Bing's IndexNow endpoint
    // Bing automatically shares with all IndexNow participating engines
    // (Yandex, Seznam, Naver)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    const statusCode = response.status;

    // IndexNow status codes:
    // 200 = OK, URLs submitted successfully
    // 202 = Accepted, URLs will be processed later
    // 400 = Bad request (invalid format)
    // 403 = Forbidden (key not valid)
    // 422 = Unprocessable (URLs don't match host)
    // 429 = Too many requests

    if (statusCode === 200 || statusCode === 202) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urlList.length} URLs to IndexNow`,
        statusCode,
        urlsSubmitted: urlList.length,
        urls: urlList,
      });
    }

    return NextResponse.json({
      success: false,
      message: `IndexNow returned status ${statusCode}`,
      statusCode,
    }, { status: statusCode });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to submit to IndexNow',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// GET handler — shows status info
export async function GET() {
  const urlList = getAllUrls();

  return NextResponse.json({
    service: 'IndexNow',
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    totalUrls: urlList.length,
    urls: urlList,
    usage: 'Send a POST request to /api/indexnow to submit all URLs to Bing/Yandex/Seznam/Naver',
  });
}
