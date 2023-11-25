'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { redirect } from 'next/navigation';

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm = ({ className, ...props }: AuthFormProps) => {
	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		redirect('/support');
	}

	return (
		<div className={cn('dark grid gap-6', className)} {...props}>
			<form onSubmit={onSubmit}>
				<div className='grid gap-4'>
					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='email'>
							Email
						</Label>
						<Input
							id='email'
							placeholder='email@gmail.com'
							type='email'
							autoCapitalize='none'
							autoComplete='email'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>

					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='email'>
							Email
						</Label>
						<Input
							id='password'
							placeholder='********'
							type='password'
							autoCapitalize='none'
							autoComplete='password'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>

					<Button disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
						)}
						Entrar
					</Button>
				</div>
			</form>

			<Separator className='bg-white/20' />
			<Button variant='outline' type='button' disabled={isLoading}>
				Recuperar senha
			</Button>
			<Label htmlFor='email'>Não tem uma conta?</Label>
			<Button variant='outline' type='button' disabled={isLoading}>
				Cadastrar
			</Button>
		</div>
	);
};

export default AuthForm;
