// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            user && (token.user = user);
            return token;
        },

        async session({ session, token }) {
            session.user = token.user as unknown;
            return session;
        },
    },
    providers: [],
} satisfies NextAuthConfig;
