'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { signup } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signupIS } from '@/content/initial-states';
import { Separator } from '@/components/ui/separator';
import { SubmitButton } from '@/components/form/submit-button';

export const SignUpForm = () => {
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(signup, signupIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'missing organization') {
            toast.error('Crie uma organização ou insira um código válido');
        }

        if (message === 'success') {
            toast.success('Cadastro realizado com sucesso!');
            ref.current?.reset();

            router.replace('/');
        }
    }, [formState, message, router]);

    return (
        <main className='grid gap-6'>
            <form ref={ref} action={formAction}>
                <section className='grid gap-4'>
                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='name'>Nome</Label>
                        <Input
                            required
                            id='name'
                            type='text'
                            name='name'
                            placeholder='John Doe'
                            className={cn(errors.name && 'border-red-400')}
                        />
                        <p className='text-xs text-red-400'>{errors.name}</p>
                    </div>
                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='email'>Email</Label>
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
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        <div className='grid gap-1 space-y-1'>
                            <Label htmlFor='password'>Senha</Label>
                            <Input
                                required
                                id='password'
                                type='password'
                                name='password'
                                placeholder='********'
                                className={cn(
                                    errors.password && 'border-red-400'
                                )}
                            />
                            <p className='text-xs text-red-400'>
                                {errors.password}
                            </p>
                        </div>

                        <div className='grid gap-1 space-y-1'>
                            <Label htmlFor='confirmPassword'>
                                Confirmar senha
                            </Label>
                            <Input
                                required
                                id='confirmPassword'
                                type='password'
                                name='confirmPassword'
                                placeholder='********'
                                className={cn(
                                    errors.confirmPassword && 'border-red-400'
                                )}
                            />
                            <p className='text-xs text-red-400'>
                                {errors.confirmPassword}
                            </p>
                        </div>
                    </div>

                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='organizationName'>Organização</Label>
                        <Input
                            placeholder='Nome da organização'
                            name='organizationName'
                        />
                    </div>

                    <Separator className='bg-muted' />

                    <div className='space-y-1'>
                        <Label className='text-muted-foreground'>
                            Já possui uma organização?
                        </Label>

                        <div className='flex gap-2'>
                            <Input
                                placeholder='Código'
                                name='organizationCode'
                            />
                        </div>
                    </div>

                    <SubmitButton text='Cadastrar' />
                </section>
            </form>
        </main>
    );
};
