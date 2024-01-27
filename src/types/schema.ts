import { z } from 'zod';

export const recoverSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Insira o email!' })
        .email({ message: 'Email inválido!' }),
});

export const authSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Insira o email!' })
        .email({ message: 'Email inválido!' }),
    password: z
        .string()
        .min(1, { message: 'Insira a senha!' })
        .min(6, { message: 'Senha deve ter no mínimo 6 caracteres!' }),
});

export const signUpForm = z
    .object({
        email: z
            .string()
            .min(1, { message: 'Insira o email!' })
            .email({ message: 'Email inválido!' }),
        password: z
            .string()
            .min(1, { message: 'Insira a senha!' })
            .min(3, { message: 'Senha deve ter no mínimo 6 caracteres!' }),
        confirmPassword: z.string().min(1, { message: 'Confirme a senha!' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Senhas não coincidem!',
        path: ['confirmPassword'],
    });

export const supportSchema = z.object({
    name: z.string().min(1, { message: 'Insira o nome!' }),
    type: z.string().min(1, { message: 'Insira o tipo!' }),
    urgency: z.string().min(1, { message: 'Insira a urgência!' }),
    application: z.string().min(1, { message: 'Insira a aplicação!' }),
    file: z
        .object({
            size: z.number(),
            type: z.string(),
            name: z.string(),
            lastModified: z.number(),
        })
        .optional(),
    link: z.string().optional(),
    title: z.string().min(1, { message: 'Insira o título!' }),
    description: z.string().min(1, { message: 'Insira a descrição!' }),
});

export const ticketSchema = z.object({
    id: z.string(),
    title: z.string(),
    project: z.string(),
    status: z.string(),
    label: z.string(),
    priority: z.string(),
});
