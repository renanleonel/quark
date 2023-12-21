'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import { formSchema, supportSchema } from '@/types/schema';

const defaultValues = {
	email: '',
	password: '',
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
