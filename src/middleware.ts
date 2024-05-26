import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { ADMIN_ROUTES, DEFAULT_REDIRECT, PUBLIC_ROUTES } from '@/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;

    const role = req.auth?.user?.role;

    const isAuthenticated = !!req.auth;
    const isAdminRoute = ADMIN_ROUTES.includes(nextUrl.pathname);
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

    if (isPublicRoute && isAuthenticated) {
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }

    if (!isAuthenticated && !isPublicRoute) {
        return Response.redirect(new URL('/', nextUrl));
    }

    if (isAdminRoute && role !== 'ADMIN') {
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
