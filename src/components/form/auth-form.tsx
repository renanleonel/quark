'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormType, formSchema } from '@/types/schema';
import { loginAction } from '@/lib/actions';
import { defaultValues } from '@/content/contants';
import { redirect } from 'next/navigation';

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm = ({ className, ...props }: AuthFormProps) => {
	const form = useForm<FormType>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues,
	});

	const {
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = form;

	const login = async (data: FormType) => {
		await loginAction(data)
			.then(() => {
				reset();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className={cn('dark grid gap-6', className)} {...props}>
			<Form {...form}>
				<form onSubmit={handleSubmit(login)}>
					<div className='grid gap-4'>
						<div className='grid gap-1'>
							<Label className='sr-only' htmlFor='email'>
								Email
							</Label>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<Input
											id='email'
											placeholder='email@gmail.com'
											type='email'
											autoCapitalize='none'
											autoComplete='email'
											autoCorrect='off'
											disabled={isSubmitting}
											{...field}
										/>
										<FormMessage className='ml-3 text-xs text-muted-foreground' />
									</FormItem>
								)}
							/>
						</div>

						<div className='grid gap-1'>
							<Label className='sr-only' htmlFor='password'>
								Senha
							</Label>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<Input
											id='password'
											placeholder='********'
											type='password'
											autoCapitalize='none'
											autoComplete='password'
											autoCorrect='off'
											disabled={isSubmitting}
											{...field}
										/>
										<FormMessage className='ml-3 text-xs text-muted-foreground' />
									</FormItem>
								)}
							/>
						</div>

						<Button type='submit' disabled={isSubmitting}>
							{isSubmitting && (
								<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
							)}
							Entrar
						</Button>
					</div>
				</form>
			</Form>

			<Separator className='bg-white/20' />
			<Button variant='outline' type='button' disabled={isSubmitting}>
				Recuperar senha
			</Button>
			<Label htmlFor='sign-in'>Não tem uma conta?</Label>
			<Button variant='outline' type='button' disabled={isSubmitting}>
				Cadastrar
			</Button>
		</div>
	);
};

export default AuthForm;
