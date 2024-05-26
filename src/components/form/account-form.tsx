'use client';

import { changePassword } from '@/lib/actions';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { changePasswordIS } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/form/submit-button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const AccountForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, formAction] = useFormState(
        changePassword,
        changePasswordIS
    );

    useEffect(() => {
        if (formState?.message === 'success') {
            toast.success('Password updated successfully!');
            formRef.current?.reset();
        }
    }, [formState]);

    const { errors } = formState;

    return (
        <form action={formAction} ref={formRef} className='space-y-4'>
            <div className='space-y-1'>
                <Label>Password</Label>
                <Input
                    placeholder='Your current password'
                    name='password'
                    className={cn(errors.password && 'border-red-400')}
                />
                <p className='text-xs text-red-400'>{errors.password}</p>
            </div>

            <div className='flex flex-col gap-4 pt-2 md:flex-row'>
                <div className='w-full space-y-1'>
                    <Label>New password</Label>
                    <Input
                        placeholder='New password'
                        name='newPassword'
                        className={cn(errors.newPassword && 'border-red-400')}
                    />
                    <p className='text-xs text-red-400'>{errors.newPassword}</p>
                </div>
                <div className='w-full space-y-1'>
                    <Label>Confirm new password</Label>
                    <Input
                        placeholder='Confirm new password'
                        name='confirmNewPassword'
                        className={cn(
                            errors.confirmNewPassword && 'border-red-400'
                        )}
                    />
                    <p className='text-xs text-red-400'>
                        {errors.confirmNewPassword}
                    </p>
                </div>
            </div>
            <div className='flex justify-end'>
                <SubmitButton text='Save' className='px-8' />
            </div>
        </form>
    );
};

export default AccountForm;
