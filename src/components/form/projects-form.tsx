'use client';

import { projectIS } from '@/content/initial-states';
import { createProject } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

interface ProjectsFormProps {
    setOpen: (open: boolean) => void;
}

export const ProjectsForm = ({ setOpen }: ProjectsFormProps) => {
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction, isPending] = useActionState(
        createProject,
        projectIS
    );

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

            <Button type='submit' className='w-full'>
                {isPending && (
                    <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                )}
                Criar
            </Button>
        </form>
    );
};
