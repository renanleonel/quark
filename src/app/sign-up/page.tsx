import { Metadata } from 'next';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import SignUpForm from '@/components/form/sign-up/sign-up-form';

export const metadata: Metadata = {
	title: 'Cadastrar',
	description: 'Cadastre-se',
};

const SignUp = () => {
	return (
		<main className='h-screen flex items-center justify-center'>
			<div className='text-white w-[350px] flex flex-col gap-4'>
				<div className='flex flex-col gap-2 text-center'>
					<h1 className='text-2xl font-semibold'>Cadastro</h1>
					<p className='text-sm text-muted-foreground'>
						Digite seu email de acesso
					</p>
				</div>
				<SignUpForm />

				<Separator className='bg-white/20' />
				<Link href='/'>
					<Button variant='outline' type='button' className='w-full'>
						Voltar
					</Button>
				</Link>
			</div>
		</main>
	);
};

export default SignUp;