'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { editProjectInitialState } from '@/content/initial-states';
import { editProject } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'sonner';

interface EditProjectFormProps {
    id: string;
    setOpen: (open: boolean) => void;
}

const EditProjectForm = ({ id, setOpen }: EditProjectFormProps) => {
    const action = editProject.bind(null, id);

    const [formState, formAction] = useFormState(
        action,
        editProjectInitialState
    );

    const { message, errors } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Projeto editado com sucesso!');

            setOpen(false);
        }
    }, [message, formState]);

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

export default EditProjectForm;
