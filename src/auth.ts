import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

async function getUser(email: string, password: string): Promise<any> {
    return {
        id: 1,
        name: 'username',
        email: email,
        password: password,
    };
}

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                const user = await getUser(
                    credentials.email as string,
                    credentials.password as string
                );

                if (!user) return null;
                return user;
            },
        }),
    ],
});
