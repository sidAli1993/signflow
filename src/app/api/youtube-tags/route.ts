import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'YouTube URL is required' }, { status: 400 });
  }

  // Validate URL format (very basic)
  if (!url.includes('youtube.com/') && !url.includes('youtu.be/')) {
    return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        // Use a generic user agent so YouTube doesn't block the fetch request
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 3600 } // Cache results for an hour to reduce outbound requests
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch video page. Make sure the URL is correct and public.' }, { status: response.status });
    }

    const html = await response.text();
    let tags: string[] = [];

    // Strategy 1: Extract from <meta name="keywords">
    const metaKeywordsMatch = html.match(/<meta name="keywords" content="([^"]*)"/i);
    if (metaKeywordsMatch && metaKeywordsMatch[1]) {
      const metaTags = metaKeywordsMatch[1].split(',').map(t => t.trim()).filter(Boolean);
      // Remove the old generic YouTube tags if they happen to be injected
      const genericTags = ["video", "sharing", "camera phone", "video phone", "free", "upload"];
      const filteredTags = metaTags.filter(t => !genericTags.includes(t.toLowerCase()));
      
      if (filteredTags.length > 0) {
        tags = filteredTags;
      }
    }

    // Strategy 2: If Strategy 1 fails, extract from embedded JSON ytInitialPlayerResponse
    if (tags.length === 0) {
      const jsonMatch = html.match(/"keywords":\[(.*?)\]/);
      if (jsonMatch && jsonMatch[1]) {
        try {
          // It looks like "keyword1","keyword2"
          const parsed = JSON.parse(`[${jsonMatch[1]}]`);
          if (Array.isArray(parsed)) {
            tags = parsed;
          }
        } catch (e) {
          console.error('Error parsing JSON keywords', e);
        }
      }
    }

    if (tags.length === 0) {
      return NextResponse.json({ tags: [], message: 'No tags found for this video. The creator might not have added any tags.' });
    }

    return NextResponse.json({ tags });
  } catch (error) {
    console.error('YouTube Tag Extractor Error:', error);
    return NextResponse.json({ error: 'Failed to extract tags. The URL might be invalid or the server blocked the request.' }, { status: 500 });
  }
}
