'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { organizationNameIS } from '@/content/initial-states';
import { updateOrganizationName } from '@/lib/actions';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Icons } from '../ui/icons';

export const UpdateOrganizationForm = () => {
    const ref = useRef<HTMLFormElement>(null);

    const currentName = 'Organization';

    const action = updateOrganizationName.bind(null, currentName);
    const [formState, formAction, isPending] = useActionState(
        action,
        organizationNameIS
    );

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

            <Button className='w-40'>
                {isPending && (
                    <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                )}
                Alterar
            </Button>
        </form>
    );
};
