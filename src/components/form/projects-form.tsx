'use client';

import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';
import { createProject } from '@/lib/actions';
import { projectIS } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { SubmitButton } from '@/components/form/submit-button';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface ProjectsFormProps {
    setOpen: (open: boolean) => void;
}

export const ProjectsForm = ({ setOpen }: ProjectsFormProps) => {
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(createProject, projectIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Project created successfully!');
            ref.current?.reset();

            setOpen(false);
        }

        if (message === 'unique constraint') {
            toast.error(
                'There is already a project with this name, please choose another one.'
            );
        }

        if (message === 'unknown error') {
            toast.error('Error creating project, please try again.');
        }
    }, [formState, message, setOpen]);

    return (
        <form action={formAction} className='space-y-4'>
            <div className='space-y-1'>
                <Input
                    name='name'
                    placeholder='Name'
                    className={cn(errors.name && 'border-red-400')}
                />

                <p className='text-xs text-red-400'>{errors.name}</p>
            </div>

            <SubmitButton className='w-full' text='Criar' />
        </form>
    );
};
