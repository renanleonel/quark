import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/',
		error: '/',
		signOut: '/',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isAuthenticated = !!auth?.user;
			const paths = [
				'/support',
				'/tickets',
				'/organization',
				'/settings',
				'/settings/account',
				'/edit/',
			];

			if (
				paths.includes(nextUrl.pathname) ||
				nextUrl.pathname.startsWith('/edit/')
			) {
				if (isAuthenticated) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isAuthenticated) {
				return Response.redirect(new URL('/support', nextUrl));
			}
			return true;
		},
	},
	providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
