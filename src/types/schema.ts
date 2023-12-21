import { z } from 'zod';

export type FormType = z.infer<typeof formSchema>;
export const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Insira o email!' })
		.email({ message: 'Email inválido!' }),
	password: z
		.string()
		.min(1, { message: 'Insira a senha!' })
		.min(6, { message: 'Senha deve ter no mínimo 6 caracteres!' }),
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
