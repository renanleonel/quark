'use client';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useFormState, useFormStatus } from 'react-dom';
import { recover } from '@/lib/actions';

import SubmitButton from '@/components/form/submit-button';
import { recoverInitialState } from '@/content/initial-states';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { toast } from 'sonner';

interface RecoverFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const RecoverForm = ({ className, ...props }: RecoverFormProps) => {
    const { pending } = useFormStatus();
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(recover, recoverInitialState);

    useEffect(() => {
        if (formState.message === 'success') {
            toast.success('Verifique seu e-mail.');
            formRef.current?.reset();
        }
    }, [formState]);

    return (
        <main className={cn('dark grid gap-6', className)} {...props}>
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
                                formState?.errors?.email && 'border-red-500'
                            )}
                        />
                        <p className='text-xs text-red-500'>
                            {formState?.errors?.email}
                        </p>
                    </div>

                    <Button
                        type='submit'
                        className={className}
                        disabled={pending}
                    >
                        {pending && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Recuperar
                    </Button>
                </section>
            </form>
        </main>
    );
};

export default RecoverForm;
