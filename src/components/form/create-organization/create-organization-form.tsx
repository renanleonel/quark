'use client';

import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';
import { createOrganization } from '@/lib/actions';
import { createOrganizationInitialState } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/form/submit-button';

const CreateOrganizationForm = () => {
    const [formState, formAction] = useFormState(
        createOrganization,
        createOrganizationInitialState
    );

    return (
        <form action={formAction} className='grid gap-2'>
            <Label htmlFor='nome' className='text-muted-foreground'>
                Nome
            </Label>
            <Input
                id='nome'
                name='name'
                placeholder='Insira o nome da organização'
                className={cn(formState.errors.name && 'border-red-500')}
            />
            <p className='text-xs text-red-500'>{formState.errors.name}</p>
            <SubmitButton className='mt-2' text='Criar organização' />
        </form>
    );
};

export default CreateOrganizationForm;
