'use client';

import { useFormState } from 'react-dom';
import { createOrganization } from '@/lib/actions';
import { createOrganizationInitialState } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

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
                className='mb-2'
                placeholder='Insira o nome da organização'
            />
            <Button>Criar organização</Button>
        </form>
    );
};

export default CreateOrganizationForm;
