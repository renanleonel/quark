import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import { DEFAULT_REDIRECT, publicRoutes } from '@/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isAuthenticated = !!req.auth;
    const userHasOrganization = req.auth?.user?.organization;
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isPublicRoute && isAuthenticated)
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

    if (!isAuthenticated && !isPublicRoute)
        return Response.redirect(new URL('/', nextUrl));

    if (!userHasOrganization && nextUrl.pathname !== '/create-organization')
        return Response.redirect(new URL('/create-organization', nextUrl));

    if (userHasOrganization && nextUrl.pathname === '/create-organization')
        return Response.redirect(new URL('/tickets', nextUrl));

    return null;
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
