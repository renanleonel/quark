'use client';

import { Input } from '@/components/ui/input';
import { projectIS } from '@/content/initial-states';
import { createProject } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';
import SubmitButton from './submit-button';

export function ProjectsForm() {
    const [formState, formAction] = useFormState(createProject, projectIS);

    const { message, errors } = formState;

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
}
