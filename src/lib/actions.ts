'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import {
    authSchema,
    recoverSchema,
    signUpForm,
    supportSchema,
} from '@/types/schema';
import { redirect } from 'next/navigation';

import {
    defaultAuthValues,
    defaultRecoverValues,
    defaultSignUpValues,
    defaultSupportValues,
} from '@/content/default-values';

export async function signout() {
    await signOut();
}

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

export async function signup(prevState: any, formData: FormData) {
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

        success = true;
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...defaultSignUpValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }

    if (success) redirect('/sign-up/info');
}

export async function newTicket(prevState: any, formData: FormData) {
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
}

export async function recover(prevState: any, formData: FormData) {
    let success = false;

    try {
        const email = formData.get('email');

        const validatedFields = recoverSchema.safeParse({
            email: email,
        });

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        success = true;
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...defaultRecoverValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }

    if (success) redirect('/');
}

export async function getTicket(id: string) {
    return {
        id: id,
        username: 'Usuário',
        title: 'Título do ticket',
        description: 'Descrição do ticket.',
        urgency: 'Alta',
        status: 'Aberto',
        application: 'Aplicação',
        type: 'Tipo',
        createdAt: '2021-09-22',
        updatedAt: '2021-09-22',
    };
}
