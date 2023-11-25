import { z } from 'zod';

export type LoginData = z.infer<typeof loginSchema>;
export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type SigninData = z.infer<typeof signinSchema>;
export const signinSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});
