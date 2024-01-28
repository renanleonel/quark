'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { signup } from '@/lib/actions';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import SubmitButton from '@/components/form/submit-button';
import { signUpInitialState } from '@/content/initial-states';

interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignUpForm = ({ className, ...props }: SignUpFormProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(signup, signUpInitialState);

    useEffect(() => {
        if (formState.message === 'success') {
            toast.success('E-mail de confirmação enviado');
            formRef.current?.reset();
        }
    }, [formState]);

    return (
        <main className={cn('dark grid gap-6', className)} {...props}>
            <form ref={formRef} action={formAction}>
                <section className='grid gap-4'>
                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='name'>Nome</Label>
                        <Input
                            required
                            id='name'
                            type='text'
                            name='name'
                            placeholder='John Doe'
                            className={cn(
                                formState?.errors?.name && 'border-red-500'
                            )}
                        />
                        <p className='text-xs text-red-500'>
                            {formState?.errors?.name}
                        </p>
                    </div>
                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            required
                            id='email'
                            type='email'
                            name='email'
                            placeholder='email@gmail.com'
                            className={cn(
                                formState?.errors?.email && 'border-red-500'
                            )}
                        />
                        <p className='text-xs text-red-500'>
                            {formState?.errors?.email}
                        </p>
                    </div>

                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='password'>Senha</Label>
                        <Input
                            required
                            id='password'
                            type='password'
                            name='password'
                            placeholder='********'
                            className={cn(
                                formState?.errors?.password && 'border-red-500'
                            )}
                        />
                        <p className='text-xs text-red-500'>
                            {formState?.errors?.password}
                        </p>
                    </div>

                    <div className='grid gap-1 space-y-1'>
                        <Label htmlFor='confirmPassword'>Confirmar senha</Label>
                        <Input
                            required
                            id='confirmPassword'
                            type='password'
                            name='confirmPassword'
                            placeholder='********'
                            className={cn(
                                formState?.errors?.confirmPassword &&
                                    'border-red-500'
                            )}
                        />
                        <p className='text-xs text-red-500'>
                            {formState?.errors?.confirmPassword}
                        </p>
                    </div>

                    {/* <div className='grid gap-2'>
                        <Label htmlFor='name'>Organização</Label>

                        <div className='grid gap-1 space-y-1'>
                            <Label htmlFor='code'>
                                Código
                            </Label>
                            <Input
                                id='code'
                                type='text'
                                name='code'
                                placeholder='#000000'
                                className={cn(
                                    formState?.errors?.code && 'border-red-500'
                                )}
                            />
                            <p className='text-xs text-red-500'>
                                {formState?.errors?.code}
                            </p>
                        </div>

                        <Label className='mb-2'>
                            Não possui um código?{' '}
                            <DrawerOrganization>
                                <Label className='underline cursor-pointer'>
                                    Criar
                                </Label>
                            </DrawerOrganization>
                        </Label>
                    </div> */}

                    <SubmitButton text='Cadastrar' />
                </section>
            </form>
        </main>
    );
};

export default SignUpForm;
