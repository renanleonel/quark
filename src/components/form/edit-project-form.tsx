'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { editProject } from '@/lib/actions';
import { projectIS } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface EditProjectFormProps {
    id: string;
    setOpen: (open: boolean) => void;
}

export const EditProjectForm = ({ id, setOpen }: EditProjectFormProps) => {
    const action = editProject.bind(null, id);
    const [formState, formAction] = useFormState(action, projectIS);

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
                Editar
            </Button>
        </form>
    );
};
