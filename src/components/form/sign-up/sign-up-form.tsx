'use client';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signup } from '@/lib/actions';
import { useFormState } from 'react-dom';

import SubmitButton from '../submit-button';
import { Separator } from '@/components/ui/separator';
import { DrawerOrganization } from '@/components/drawer-organization';

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
								formState?.errors.email && 'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState?.errors.email}
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
								formState?.errors.password && 'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState?.errors.password}
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
								formState?.errors.confirmPassword &&
									'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState?.errors.confirmPassword}
						</p>
					</div>

					<Separator className='bg-white/20' />

					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='name'>
							Nome
						</Label>
						<Input
							required
							id='name'
							type='text'
							name='name'
							placeholder='John Doe'
							className={cn(
								formState?.errors.confirmPassword &&
									'border-red-500'
							)}
						/>
						<p className='text-xs text-red-500'>
							{formState?.errors.confirmPassword}
						</p>
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='name'>Organização</Label>

						<div className='grid gap-1'>
							<Label className='sr-only' htmlFor='code'>
								Código
							</Label>
							<Input
								required
								id='code'
								type='text'
								name='code'
								placeholder='#000000'
								className={cn(
									formState?.errors.confirmPassword &&
										'border-red-500'
								)}
							/>
							<p className='text-xs text-red-500'>
								{formState?.errors.confirmPassword}
							</p>
						</div>

						<p className='text-xs text-red-500'>
							{formState?.errors.confirmPassword}
						</p>

						<Label className='mb-2'>
							Não possui um código?{' '}
							<DrawerOrganization>
								<Label className='underline cursor-pointer'>
									Criar
								</Label>
							</DrawerOrganization>
						</Label>
					</div>

					<SubmitButton text='Cadastrar' />
				</section>
			</form>
		</main>
	);
};

export default SignUpForm;
