'use client';

import { Icons } from '../ui/icons';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}

const SubmitButton = ({ text, className }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' className={className}>
            {pending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
            {text}
        </Button>
    );
};

export default SubmitButton;
