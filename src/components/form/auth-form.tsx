'use client';

import { signinIS } from '@/content/initial-states';
import { signin } from '@/lib/actions';
import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

export const AuthForm = () => {
    const [formState, formAction, isPending] = useActionState(signin, signinIS);

    const { errors } = formState;

    return (
        <main className='grid gap-6'>
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
                            className={cn(errors.email && 'border-red-400')}
                        />
                        <p className='text-xs text-red-400'>{errors.email}</p>
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
                            className={cn(errors.password && 'border-red-400')}
                        />
                        <p className='text-xs text-red-400'>
                            {errors.password}
                        </p>
                    </div>

                    <Button type='submit'>
                        {isPending && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Entrar
                    </Button>
                </section>
            </form>
        </main>
    );
};
