import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto');

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
