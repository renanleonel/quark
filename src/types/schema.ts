import { z } from 'zod';

export type AuthType = z.infer<typeof authSchema>;
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

export type SignUpType = z.infer<typeof signUpForm>;
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

export type SupportType = z.infer<typeof supportSchema>;
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
