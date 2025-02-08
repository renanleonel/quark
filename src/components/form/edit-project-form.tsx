'use client';

import { projectIS } from '@/content/initial-states';
import { editProject } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '../ui/icons';

interface EditProjectFormProps {
    id: string;
    setOpen: (open: boolean) => void;
}

export const EditProjectForm = ({ id, setOpen }: EditProjectFormProps) => {
    const action = editProject.bind(null, id);
    const [formState, formAction, isPending] = useActionState(
        action,
        projectIS
    );

    const { message, errors } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Projeto editado com sucesso!');

            setOpen(false);
        }
    }, [formState, message]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <form action={formAction} className='space-y-4'>
            <div className='space-y-2'>
                <Label>Nome</Label>
                <Input
                    name='name'
                    className={cn(errors.name && 'border-red-400')}
                />
            </div>
            <Button type='submit' className='w-full'>
                {isPending && (
                    <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                )}
                Editar
            </Button>
        </form>
    );
};
