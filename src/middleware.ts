import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Read the Next-Action header
  const nextAction = request.headers.get('next-action');
  
  // Real Next.js server action IDs are hashes (e.g. 33-40 characters long like "7e52a94...")
  // Bots send fake short actions like "1", "x", "action" to overload the server
  if (nextAction && nextAction.length < 15) {
    return new NextResponse('Bad Request: Invalid Server Action', { status: 400 });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
