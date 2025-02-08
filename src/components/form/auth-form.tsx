'use client';

import { signinIS } from '@/content/initial-states';
import { signin } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';

import { SubmitButton } from '@/components/form/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const AuthForm = () => {
    const [formState, formAction] = useFormState(signin, signinIS);

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

                    <SubmitButton text='Entrar' />
                </section>
            </form>
        </main>
    );
};
