'use server';

import { Resend } from 'resend';
import { AuthError } from 'next-auth';
import { revalidatePath, revalidateTag } from 'next/cache';
import { auth, signIn, signOut } from '@/auth';

import {
    authSchema,
    signUpForm,
    ticketSchema,
    recoverSchema,
    projectSchema,
    changeProfileSchema,
    changePasswordSchema,
    validateOrganizationSchema,
} from '@/types/schema';

import {
    authDV,
    signupDV,
    ticketDV,
    recoverDV,
    projectDV,
    changeProfileDV,
    changePasswordDV,
    deactivateAccountDV,
    deleteOrganizationDV,
    validateOrganizationDV,
} from '@/content/default-values';

import { Ticket } from '@/types';
import {
    fetchOrganization,
    fetchProjects,
    fetchTicketByID,
    fetchTickets,
    patchTicket,
    postTicket,
    removeTicket,
} from '@/lib/api';

export async function signin(_: any, formData: FormData) {
    try {
        const form = Object.fromEntries(formData.entries());

        const validatedFields = authSchema.safeParse(form);

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const payload = {
            ...validatedFields.data,
        };

        await signIn('credentials', payload);

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
                            ...authDV,
                            credentials: 'Email ou senha incorretos.',
                        },
                    };
                default:
                    return {
                        message: 'unknown error',
                        errors: {
                            ...authDV,
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
        const form = Object.fromEntries(formData.entries());
        const { organizationName, organizationCode } = form;

        if (!organizationName && !organizationCode) {
            return {
                message: 'missing organization',
                errors: {
                    ...signupDV,
                },
            };
        }

        const validatedFields = signUpForm.safeParse(form);

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        if (organizationCode) {
            // link organization to user
        } else {
            // const organization = await createOrganization(organizationName);
            // link organization to user
        }

        // await sendConfirmationEmail(email);

        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...signupDV,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function signout() {
    await signOut();
}

export async function recover(_: any, formData: FormData) {
    try {
        const form = Object.fromEntries(formData.entries());

        const validatedFields = recoverSchema.safeParse(form);

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const { email } = validatedFields.data;

        // verify if email exists in database

        const emailExists = false;

        if (!emailExists) {
            return {
                message: 'email not found',
                errors: {
                    ...recoverDV,
                    email: 'Email não encontrado.',
                },
            };
        }

        const request = await sendRecoverEmail(email);

        const { error, message } = request;

        if (error) {
            return {
                message: 'email error',
                errors: {
                    ...recoverDV,
                    unknown: message,
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
                ...recoverDV,
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

    const request = await resend.emails
        .send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'test',
            html: '<h1>test</h1>',
        })
        .then((res) => {
            if (res.error) {
                return {
                    error: true,
                    message: res.error.message,
                };
            }

            return {
                error: false,
                message: 'success',
            };
        })
        .catch((error) => {
            return {
                error: true,
                message: error.message,
            };
        });

    return request;
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
                ...validateOrganizationDV,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function createTicket(_: any, formData: FormData) {
    try {
        const form = Object.fromEntries(formData.entries());
        const validatedFields = ticketSchema.safeParse({
            ...form,
            status: 'na fila',
        });

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const body = {
            ...validatedFields.data,
        };

        const { error, statusCode, message } = await postTicket(body);

        if (error) {
            return {
                message: 'api error',
                errors: {
                    ...ticketDV,
                    unknown: `statusCode: ${statusCode}, message: ${message}`,
                },
            };
        }

        revalidateTag('@tickets');

        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...ticketDV,
                unknown: `unknown error: ${error}`,
            },
        };
    }
}

export async function editTicket(id: string, _: any, formData: FormData) {
    try {
        const form = Object.fromEntries(formData.entries());

        const validatedFields = ticketSchema.safeParse(form);

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const payload = {
            id: id,
            ...validatedFields.data,
        };

        const { error } = await patchTicket(payload);

        if (error) {
            return {
                message: 'unknown error',
                errors: {
                    ...ticketDV,
                    unknown: 'Erro desconhecido.',
                },
            };
        }

        revalidateTag('@tickets');

        return {
            message: 'success',
            errors: {},
        };
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...ticketDV,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function deleteTicket(id: string) {
    try {
        const { statusCode } = await removeTicket(id);

        return statusCode;
    } catch {
        //sentry
    }
}

export async function getTickets() {
    try {
        const tickets = await fetchTickets();

        return tickets;
    } catch (error) {
        //sentry
    }
}

export async function getTicketByID(id: string): Promise<Ticket> {
    try {
        const ticket = await fetchTicketByID(id);

        return ticket;
    } catch (error) {
        throw new Error('Ticket not found');
    }
}

export async function editProject(id: string, _: any, formData: FormData) {
    try {
        const name = formData.get('name');

        const validatedFields = projectSchema.safeParse({
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
                ...projectDV,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function createProject(_: any, formData: FormData) {
    try {
        const name = formData.get('name');

        const validatedFields = projectSchema.safeParse({
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
                ...projectDV,
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
                ...changePasswordDV,
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
                ...deactivateAccountDV,
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

export async function deleteOrganization(_: any, formData: FormData) {
    let success = false;

    try {
        // const name = formData.get('name');

        //check if org name == name

        success = true;

        // delete org
    } catch (error) {
        return {
            message: 'unknown error',
            errors: {
                ...deleteOrganizationDV,
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

export async function changeProfile(_: any, formData: FormData) {
    try {
        const session = await auth();

        const name = formData.get('name');
        const language = formData.get('language');
        const profilePic = formData.get('profilePic');

        if (name === session?.user?.name) {
            return {
                message: 'validation error',
                errors: {
                    ...changeProfileDV,
                    name: 'Nome não pode ser igual ao atual.',
                },
            };
        }

        const validatedFields = changeProfileSchema.safeParse({
            name: name,
            language: language,
            profilePic: profilePic,
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
                ...changeProfileDV,
                unknown: 'Erro desconhecido.',
            },
        };
    }
}

export async function getProjects() {
    try {
        const session = await auth();

        const organizationID = session?.user.organization;

        if (!organizationID) {
            throw new Error('Organization not found');
        }

        const {
            error,
            statusCode,
            message,
            data: projects,
        } = await fetchProjects(organizationID);

        if (error) {
            throw new Error(
                `Projects not found! Status: ${statusCode}, Message: ${message}`
            );
        }

        return projects;
    } catch (error) {
        //sentry
    }
}

export async function getOrganization() {
    try {
        const organization = await fetchOrganization();

        return organization;
    } catch (error) {
        //sentry
    }
}
