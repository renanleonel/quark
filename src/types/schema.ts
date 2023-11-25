import { z } from 'zod';

export type FormType = z.infer<typeof formSchema>;
export const formSchema = z.object({
	email: z.string().min(1, { message: 'Insira o email!' }),
	// .email({ message: 'Email inválido!' }),
	password: z.string().min(1, { message: 'Insira a senha!' }),
});
