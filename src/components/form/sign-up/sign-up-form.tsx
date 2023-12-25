'use client';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signup } from '@/lib/actions';
import { useFormState } from 'react-dom';

import SubmitButton from '../submit-button';

interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const initialState = {
	message: '',
	errors: {
		email: '',
		password: '',
		confirmPassword: '',
		unknown: '',
	},
};

const SignUpForm = ({ className, ...props }: SignUpFormProps) => {
	const [formState, formAction] = useFormState(signup, initialState);

	console.log(formState);

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

					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='confirmPassword'>
							Confirmar senha
						</Label>
						<Input
							required
							id='confirmPassword'
							type='password'
							name='confirmPassword'
							placeholder='********'
							className={cn(
								formState.errors.confirmPassword &&
									'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState.errors.confirmPassword}
						</p>
					</div>

					<SubmitButton text='Cadastrar' />
				</section>
			</form>
		</main>
	);
};

export default SignUpForm;
