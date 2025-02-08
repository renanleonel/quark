'use client';

import { recoverIS } from '@/content/initial-states';
import { recover } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

export const RecoverForm = () => {
    const ref = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const [formState, formAction, isPending] = useActionState(
        recover,
        recoverIS
    );

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

                    <Button type='submit'>
                        {isPending && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Recuperar
                    </Button>
                </section>
            </form>
        </main>
    );
};
