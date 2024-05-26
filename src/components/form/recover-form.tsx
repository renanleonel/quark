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

export const RecoverForm = () => {
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(recover, recoverIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Verifique seu e-mail.');
            ref.current?.reset();
        }
    }, [formState, message]);

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
