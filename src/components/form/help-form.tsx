'use client';

import { help } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { helpIS } from '@/content/initial-states';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

export const HelpForm = () => {
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction, isPending] = useActionState(help, helpIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Your message has been sent successfully!');
            ref.current?.reset();
        }

        if (message === 'unknown error') {
            toast.error('An error occurred. Please try again later.');
        }
    }, [formState, message]);

    return (
        <form
            action={formAction}
            ref={ref}
            className='mt-4 flex h-full flex-col gap-2'
        >
            <div className='space-y-1'>
                <Label>Como podemos ajudar?</Label>
                <Input
                    required
                    id='title'
                    name='title'
                    placeholder='Título'
                    className={cn(errors.title && 'border-red-400')}
                />
                <p className='text-xs text-red-400'>{errors.title}</p>
            </div>

            <div className='space-y-1'>
                <Label>Descreva o problema encontrado</Label>
                <Textarea
                    required
                    id='message'
                    name='message'
                    className={cn(
                        'h-full min-h-[200px]',
                        errors.message && 'border-red-400'
                    )}
                    placeholder='Descrição'
                />
                <div className='flex justify-between'>
                    <p className='text-xs text-red-400'>{errors.message}</p>
                    <p className='text-muted-foreground text-xs'>
                        max 500 caracteres
                    </p>
                </div>
            </div>

            <div className='mt-4 flex w-full justify-end'>
                <Button type='submit' className='w-28'>
                    {isPending && (
                        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                    )}
                    Enviar
                </Button>
            </div>
        </form>
    );
};
