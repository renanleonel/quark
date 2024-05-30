'use client';

import { useFormStatus } from 'react-dom';
import { Icons } from '@/components/ui/icons';
import { Button, ButtonProps } from '@/components/ui/button';

interface SubmitButtonProps extends ButtonProps {
    text: string;
}

export const SubmitButton = ({ text, ...props }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' {...props}>
            {pending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            {text}
        </Button>
    );
};
