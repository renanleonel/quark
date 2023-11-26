import { Metadata } from 'next';

import AuthForm from '@/components/form/auth-form';

export const metadata: Metadata = {
	title: 'Entrar',
	description: 'Faça login na sua conta para acessar a página de suporte',
};

const Auth = () => {
	return (
		<main className='h-screen flex items-center justify-center'>
			<div className='text-white w-[350px] flex flex-col gap-4'>
				<div className='flex flex-col gap-2 text-center'>
					<h1 className='text-2xl font-semibold'>Entrar</h1>
					<p className='text-sm text-muted-foreground'>
						Digite seu email de acesso
					</p>
				</div>
				<AuthForm />
			</div>
		</main>
	);
};

export default Auth;
