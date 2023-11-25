'use server';

import { LoginData } from '@/types/schema';
import { redirect } from 'next/navigation';

export const handleLogin = async (data: LoginData) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	console.log(data);
	// redirect('/dashboard');
};
