'use server';

import { FormType, formSchema } from '@/types/schema';
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
import { defaultValues } from '@/content/constants';

// ...

export async function authenticate(prevState: any, formData: FormData) {
	try {
		console.log(formData);

		const email = formData.get('email');
		const password = formData.get('password');

		const validatedFields = formSchema.safeParse({
			email: email,
			password: password,
		});

		if (!validatedFields.success) {
			return {
				message: 'validation error',
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		await signIn('credentials', formData);

		return {
			message: 'success',
			errors: {},
		};
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return {
						message: 'credentials error',
						errors: {
							...defaultValues,
							credentials: 'Email ou senha incorretos.',
						},
					};
				default:
					return {
						message: 'unknown error',
						errors: {
							...defaultValues,
							unknown: 'Erro desconhecido.',
						},
					};
			}
		}
		throw error;
	}
}

export const signout = async () => {
	await signOut();
};
