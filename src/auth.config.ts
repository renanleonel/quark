import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        error: '/',
        signIn: '/',
        signOut: '/',
    },
    callbacks: {
        authorized({ auth }) {
            const isAuthenticated = !!auth?.user;
            return isAuthenticated;
        },

        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },

        async session({ session, token }) {
            session.user = token.user as any;
            return session;
        },
    },
    providers: [],
} satisfies NextAuthConfig;
