'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { recover } from '@/lib/actions';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { recoverIS } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/form/submit-button';
import { useRouter } from 'next/navigation';

export const RecoverForm = () => {
    const ref = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const [formState, formAction] = useFormState(recover, recoverIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('E-mail enviado com sucesso!', {
                description: 'Verifique sua caixa de entrada.',
            });
            ref.current?.reset();

            router.replace('/');
        }

        if (message === 'email not found') {
            toast.error('E-mail não encontrado!');
        }

        if (message === 'email error') {
            toast.error('Erro ao enviar o e-mail de recuperação!');
        }

        if (message === 'unknown error') {
            toast.error('Erro desconhecido!');
        }
    }, [formState, message, router]);

    return (
        <main className='grid gap-6'>
            <form action={formAction} ref={ref}>
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
                            className={cn(errors?.email && 'border-red-400')}
                        />
                        <p className='text-xs text-red-400'>{errors?.email}</p>
                    </div>

                    <SubmitButton text='Recuperar' />
                </section>
            </form>
        </main>
    );
};
