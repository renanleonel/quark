'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import { authSchema, signUpForm, supportSchema } from '@/types/schema';
import { redirect } from 'next/navigation';

const defaultAuthValues = {
	email: '',
	password: '',
};

const defaultSignUpValues = {
	email: '',
	password: '',
	confirmPassword: '',
};

const defaultSupportValues = {
	name: '',
	type: '',
	urgency: '',
	application: '',
	file: '',
	link: '',
	title: '',
	description: '',
};

export async function authenticate(prevState: any, formData: FormData) {
	try {
		const email = formData.get('email');
		const password = formData.get('password');

		const validatedFields = authSchema.safeParse({
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
							...defaultAuthValues,
							credentials: 'Email ou senha incorretos.',
						},
					};
				default:
					return {
						message: 'unknown error',
						errors: {
							...defaultAuthValues,
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

export const signup = async (prevState: any, formData: FormData) => {
	let success = false;
	try {
		const email = formData.get('email');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		const validatedFields = signUpForm.safeParse({
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		});

		if (!validatedFields.success) {
			return {
				message: 'validation error',
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		//workaround enquanto action ta bugada
		success = true;
		redirect('/sign-up/info');
	} catch (error) {
		console.log(error);

		//workaround enquanto action ta bugada
		if (success) redirect('/sign-up/info');

		return {
			message: 'unknown error',
			errors: {
				...defaultSignUpValues,
				unknown: 'Erro desconhecido.',
			},
		};
	}
};

export const support = async (prevState: any, formData: FormData) => {
	try {
		const name = formData.get('name');
		const type = formData.get('type');
		const urgency = formData.get('urgency');
		const application = formData.get('application');
		const file = formData.get('file');
		const link = formData.get('link');
		const title = formData.get('title');
		const description = formData.get('description');

		const validatedFields = supportSchema.safeParse({
			name: name,
			type: type,
			urgency: urgency,
			application: application,
			file: file,
			link: link,
			title: title,
			description: description,
		});

		if (!validatedFields.success) {
			console.log(validatedFields.error.flatten().fieldErrors);
			return {
				message: 'validation error',
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		return {
			message: 'success',
			errors: {},
		};
	} catch (error) {
		return {
			message: 'unknown error',
			errors: {
				...defaultSupportValues,
				unknown: 'Erro desconhecido.',
			},
		};
	}
};
