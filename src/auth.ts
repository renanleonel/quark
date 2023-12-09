import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

async function getUser(email: string, password: string): Promise<any> {
	return {
		id: 1,
		name: 'John Doe',
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
			async authorize(credentials) {
				const user = await getUser('email', 'password');
				if (!user) return null;
				return user;
			},
		}),
	],
});
