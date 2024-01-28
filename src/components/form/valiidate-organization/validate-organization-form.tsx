'use client';

import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';
import { validateOrganization } from '@/lib/actions';
import { validateOrganizationInitialState } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/form/submit-button';

const ValidateOrganizationForm = () => {
    const [formState, formAction] = useFormState(
        validateOrganization,
        validateOrganizationInitialState
    );

    return (
        <form action={formAction} className='flex gap-2'>
            <div className='space-y-2 w-full'>
                <Input
                    id='code'
                    name='code'
                    placeholder='Insira o nome da organização'
                    className={cn(formState.errors.code && 'border-red-500')}
                />
                <p className='text-xs text-red-500'>{formState.errors.code}</p>
            </div>

            <SubmitButton text='Validar' variant='secondary' />
        </form>
    );
};

export default ValidateOrganizationForm;
