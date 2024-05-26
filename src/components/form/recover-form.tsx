'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { recover } from '@/lib/actions';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { recoverIS } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/form/submit-button';

const RecoverForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(recover, recoverIS);

    useEffect(() => {
        if (formState?.message === 'success') {
            toast.success('Verifique seu e-mail.');
            formRef.current?.reset();
        }
    }, [formState]);

    return (
        <main className='grid gap-6'>
            <form action={formAction} ref={formRef}>
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
                                formState?.errors?.email && 'border-red-400'
                            )}
                        />
                        <p className='text-xs text-red-400'>
                            {formState?.errors?.email}
                        </p>
                    </div>

                    <SubmitButton text='Recuperar' />
                </section>
            </form>
        </main>
    );
};

export default RecoverForm;
