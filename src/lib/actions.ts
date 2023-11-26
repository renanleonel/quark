'use server';

import { FormType } from '@/types/schema';
import { redirect } from 'next/navigation';

export const loginAction = async (data: FormType) => {
	console.log(data);
	redirect('/support');
	// await new Promise((resolve) => setTimeout(resolve, 2000))
	// 	.then(() => {
	// 		console.log('Login realizado!');
	// 		return redirect('/support');
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
};
