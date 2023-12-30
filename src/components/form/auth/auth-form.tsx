'use client';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useFormState } from 'react-dom';
import { authenticate } from '@/lib/actions';

import SubmitButton from '../submit-button';
import { authInitialState } from '@/content/initial-states';

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm = ({ className, ...props }: AuthFormProps) => {
	const [formState, formAction] = useFormState(
		authenticate,
		authInitialState
	);

	return (
		<main className={cn('dark grid gap-6', className)} {...props}>
			<form action={formAction}>
				<section className='grid gap-4'>
					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='email'>
							Email
						</Label>
						<Input
							required
							id='email'
							type='email'
							name='email'
							placeholder='email@gmail.com'
							className={cn(
								formState.errors.email && 'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState.errors.email}
						</p>
					</div>

					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='password'>
							Senha
						</Label>
						<Input
							required
							id='password'
							type='password'
							name='password'
							placeholder='********'
							className={cn(
								formState.errors.password && 'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState.errors.password}
						</p>
					</div>

					<SubmitButton text='Entrar' />
				</section>
			</form>
		</main>
	);
};

export default AuthForm;
