'use client';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useFormState } from 'react-dom';
import { recover } from '@/lib/actions';

import SubmitButton from '@/components/form/submit-button';
import { recoverInitialState } from '@/content/initial-states';

interface RecoverFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const RecoverForm = ({ className, ...props }: RecoverFormProps) => {
    const [formState, formAction] = useFormState(recover, recoverInitialState);

    return (
        <main className={cn('dark grid gap-6', className)} {...props}>
            <form action={formAction}>
                <section className='grid gap-4'>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='email'>
                            Email
                        </Label>
                        <Input
                            required
                            id='email'
                            type='email'
                            name='email'
                            placeholder='email@gmail.com'
                            className={cn(
                                formState?.errors?.email && 'border-red-500'
                            )}
                        />
                        <p className='text-xs text-red-500'>
                            {formState?.errors?.email}
                        </p>
                    </div>

                    <SubmitButton text='Recuperar' />
                </section>
            </form>
        </main>
    );
};

export default RecoverForm;
