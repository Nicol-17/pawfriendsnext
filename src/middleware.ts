import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always',
});

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith('/Dashboard');
  const isLoginPage = pathname.includes('/Login');

 
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/Login', request.url));
  }

 
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/Dashboard', request.url));
  }

  const response = intlMiddleware(request);
  response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');

  return response;
}

export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)',
};