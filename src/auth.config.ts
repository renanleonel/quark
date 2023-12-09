import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/',
		error: '/',
		signOut: '/',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isAuthenticated = !!auth?.user;
			const paths = ['/support', '/tickets'];

			if (paths.includes(nextUrl.pathname)) {
				if (isAuthenticated) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isAuthenticated) {
				return Response.redirect(new URL('/support', nextUrl));
			}
			return true;
		},

		async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
			const isRelativeUrl = url.startsWith('/');
			if (isRelativeUrl) {
				return `${baseUrl}${url}`;
			}

			const isSameOriginUrl = new URL(url).origin === baseUrl;
			const alreadyRedirected = url.includes('callbackUrl=');
			if (isSameOriginUrl && alreadyRedirected) {
				const originalCallbackUrl = decodeURIComponent(
					url.split('callbackUrl=')[1]
				);

				return originalCallbackUrl;
			}

			if (isSameOriginUrl) {
				return url;
			}

			return baseUrl;
		},
	},
	providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
