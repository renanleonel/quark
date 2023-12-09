import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/',
		error: '/',
		signOut: '/',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnDashboard = nextUrl.pathname.startsWith('/support');
			// console.log(auth);
			// console.log(auth?.user);
			// console.log(nextUrl);
			// console.log(nextUrl.pathname);

			if (isOnDashboard) {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/support', nextUrl));
			}
			return true;
		},

		async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
			console.log('url => ', url);
			console.log('baseUrl => ', baseUrl);
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
