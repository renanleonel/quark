'use server';

import { Resend } from 'resend';
import { AuthError } from 'next-auth';
import { auth, signIn, signOut } from '@/auth';

import {
    authSchema,
    signUpForm,
    ticketSchema,
    recoverSchema,
    validateOrganizationSchema,
    editProjectSchema,
    changePasswordSchema,
} from '@/types/schema';

import {
    defaultAuthValues,
    defaultSignUpValues,
    defaultTicketValues,
    defaultRecoverValues,
    defaultChangePasswordValues,
    defaultValidateOrganizationValues,
    defaultEditProjectValues,
    defaultDeactivateAccountValues,
} from '@/content/default-values';
import { Ticket } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signout() {
    await signOut();
}

export async function authenticate(_: any, formData: FormData) {
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

export async function signup(_: any, formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        const organizationName = formData.get('organizationName') as string;
        const organizationCode = formData.get('organizationCode') as string;

        if (!organizationName && !organizationCode) {
            return {
                message: 'missing organization',
                errors: {
                    ...defaultSignUpValues,
                },
            };
        }

        const validatedFields = signUpForm.safeParse({
            name: name,
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

        if (organizationCode) {
            // link organization to user
        }

        if (organizationName) {
            const organization = await createOrganization(organizationName);
            // link organization to user
        }

        const body = {
            name,
            email,
            password,
        };
        await sendConfirmationEmail(email);

        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...defaultSignUpValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function recover(_: any, formData: FormData) {
    try {
        const email = formData.get('email') as string;

        const validatedFields = recoverSchema.safeParse({
            email: email,
        });

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        await sendRecoverEmail(email);
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...defaultRecoverValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function sendConfirmationEmail(email: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'oi',
        html: '<h1>account created successfully!</h1>',
    });
}

export async function sendRecoverEmail(email: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails
        .send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'test',
            html: '<h1>test</h1>',
        })
        .then((res) => {
            if (res.error) {
                return {
                    message: 'unknown error',
                    errors: {
                        ...defaultRecoverValues,
                        unknown: 'Erro desconhecido.',
                    },
                };
            }

            return {
                message: 'success',
                errors: {},
            };
        });
}

export async function getInvitationOrigin(id: string) {
    return {
        email: 'test@quark.com',
    };
}

export async function createOrganization(name: string) {
    return {
        id: '12345',
        name: name,
    };
}

export async function validateOrganization(_: any, formData: FormData) {
    try {
        const code = formData.get('code') as string;

        const validatedFields = validateOrganizationSchema.safeParse({
            code: code,
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
                ...defaultValidateOrganizationValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function newTicket(_: any, formData: FormData) {
    try {
        const title = formData.get('title');
        const description = formData.get('description');
        const project = formData.get('project');
        const status = 'na fila';
        const type = formData.get('type');
        const priority = formData.get('priority');
        const file = formData.get('file');
        const link = formData.get('link');

        const validatedFields = ticketSchema.safeParse({
            title: title,
            description: description,
            project: project,
            type: type,
            status: status,
            priority: priority,
            file: file,
            link: link,
        });

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const request = false;

        if (!request) {
            return {
                message: 'unknown error',
                errors: {
                    ...defaultTicketValues,
                    unknown: 'Erro desconhecido.',
                },
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
                ...defaultTicketValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function editTicket(_: any, formData: FormData) {
    try {
        const title = formData.get('title');
        const description = formData.get('description');
        const project = formData.get('project');
        const status = formData.get('status');
        const type = formData.get('type');
        const priority = formData.get('priority');
        const file = formData.get('file');
        const link = formData.get('link');

        const validatedFields = ticketSchema.safeParse({
            title: title,
            description: description,
            project: project,
            type: type,
            status: status,
            priority: priority,
            file: file,
            link: link,
        });

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const request = false;

        if (!request) {
            return {
                message: 'unknown error',
                errors: {
                    ...defaultTicketValues,
                    unknown: 'Erro desconhecido.',
                },
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
                ...defaultTicketValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function getTicket(id: string): Promise<Ticket> {
    return {
        id: id,
        title: 'Título do ticket',
        description: 'Descrição do ticket.',
        type: 'bug',
        priority: 'alta',
        status: 'concluído',
        project: 'projeto 1',
        link: 'https://www.google.com',
        file: {
            size: 123,
            type: 'Tipo',
            name: 'Nome do arquivo',
            lastModified: 123,
        },
        createdBy: 'eYuuioaeoujiarei987kolpçasdpo',
        createdAt: '2021-09-22',
        updatedAt: '2021-09-22',
    };
}

export async function editProject(id: string, _: any, formData: FormData) {
    try {
        const name = formData.get('name');

        const validatedFields = editProjectSchema.safeParse({
            name: name,
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
                ...defaultEditProjectValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function deleteMember(memberID: string) {
    revalidatePath('/organization/members');

    return true;
}

export async function changePassword(_: any, formData: FormData) {
    try {
        const password = formData.get('password');
        const newPassword = formData.get('newPassword');
        const confirmNewPassword = formData.get('confirmNewPassword');

        const validatedFields = changePasswordSchema.safeParse({
            password: password,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword,
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
                ...defaultChangePasswordValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function deactivateAccount(_: any, formData: FormData) {
    let success = false;

    try {
        const email = formData.get('email');
        const session = await auth();

        if (session?.user?.email !== email) {
            return {
                message: 'validation error',
                errors: {
                    email: 'Email incorreto.',
                },
            };
        }
        success = true;

        // delete user
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...defaultDeactivateAccountValues,
                unknown: 'Erro desconhecido.',
            },
        };
    }

    if (success) {
        await signOut();

        return {
            message: 'success',
            errors: {},
        };
    }
}
