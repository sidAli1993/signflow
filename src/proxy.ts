import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto');
  
  // Real Next.js server action IDs are hashes (e.g. 33-40 characters long like "7e52a94...")
  // Bots send fake short actions like "1", "x", "action" to overload the server
  const nextAction = request.headers.get('next-action');
  if (nextAction && nextAction.length < 15) {
    return new NextResponse('Bad Request: Invalid Server Action', { status: 400 });
  }

  // Enforce HTTPS in production environments if forwarded via HTTP
  if (proto === 'http' && host && !host.includes('localhost') && !host.includes('127.0.0.1')) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = 'https:';
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image).*)',
  ],
};
