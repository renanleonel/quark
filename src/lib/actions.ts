'use server';

import { FormType } from '@/types/schema';
import { redirect } from 'next/navigation';

export const loginAction = async (data: FormType) => {
	console.log(data);
	// redirect('/support');
	// await new Promise((resolve) => setTimeout(resolve, 2000))
	// 	.then(() => {
	// 		console.log('Login realizado!');
	// 		return redirect('/support');
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
};

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

// ...

export async function authenticate(formData: FormData) {
	try {
		await signIn('credentials', formData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.';
				default:
					return 'Something went wrong.';
			}
		}
		throw error;
	}
}

export const signout = async () => {
	await signOut();
};
