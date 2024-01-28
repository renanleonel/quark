'use client';

import { validateOrganizationInitialState } from '@/content/initial-states';
import { validateOrganization } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ValidateOrganizationForm = () => {
    const [formState, formAction] = useFormState(
        validateOrganization,
        validateOrganizationInitialState
    );

    return (
        <form action={formAction} className='flex gap-2'>
            <Input
                id='code'
                placeholder='Insira o nome da organização'
                name='code'
            />
            <Button type='submit' variant='secondary'>
                Validar
            </Button>
        </form>
    );
};

export default ValidateOrganizationForm;
