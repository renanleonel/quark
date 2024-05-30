'use client';

import { organizationNameIS } from '@/content/initial-states';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { updateOrganizationName } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

export const UpdateOrganizationForm = () => {
    const ref = useRef<HTMLFormElement>(null);

    const currentName = 'Organization';

    const action = updateOrganizationName.bind(null, currentName);
    const [formState, formAction] = useFormState(action, organizationNameIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Organization name updated successfully!');
            ref.current?.reset();
        }

        if (message === 'unknown error') {
            toast.error('An error occurred. Please try again later.');
        }
    }, [formState, message]);

    return (
        <form action={formAction} ref={ref} className='flex gap-2'>
            <div className='w-full space-y-1'>
                <Input
                    id='name'
                    defaultValue={currentName}
                    name='name'
                    placeholder='Organization'
                />
                <p className='text-xs text-red-400'>{errors.name}</p>
            </div>

            <Button className='w-40'>Alterar</Button>
        </form>
    );
};
