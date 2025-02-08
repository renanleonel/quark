'use client';

import { changePasswordIS } from '@/content/initial-states';
import { changePassword } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

export const AccountForm = () => {
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction, isPending] = useActionState(
        changePassword,
        changePasswordIS
    );

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Password updated successfully!');
            ref.current?.reset();
        }
    }, [formState, message]);

    return (
        <form action={formAction} ref={ref} className='space-y-4'>
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
                <Button type='submit' className='px-8'>
                    {isPending && (
                        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                    )}
                    Save
                </Button>
            </div>
        </form>
    );
};
