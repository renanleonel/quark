import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';

import { publicRoutes } from '@/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;

	const isAuthenticated = !!req.auth;

	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

	if (isPublicRoute) {
		if (isAuthenticated) {
			return Response.redirect(new URL('/tickets', nextUrl));
		}
		return null;
	}

	if (!isAuthenticated && !isPublicRoute) {
		return Response.redirect(new URL('/', nextUrl));
	}

	return null;
});

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
