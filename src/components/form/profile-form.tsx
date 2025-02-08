'use client';

import { changeProfileIS } from '@/content/initial-states';
import { changeProfile } from '@/lib/actions';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Theme } from '@/components/ui/theme';
import { useActionState } from 'react';
import { Icons } from '../ui/icons';

const languages = [
    { label: 'Português', value: 'ptbr' },
    { label: 'English', value: 'en' },
];

interface ProfileFormProps {
    name: string;
}

export function ProfileForm({ name }: ProfileFormProps) {
    const [formState, formAction, isPending] = useActionState(
        changeProfile,
        changeProfileIS
    );

    const { errors } = formState;

    return (
        <form action={formAction} className='space-y-8'>
            <div className='space-y-2'>
                <Label>Name</Label>
                <Input
                    name='name'
                    defaultValue={name}
                    placeholder='Your name'
                    className={cn(errors.name && 'border-red-400')}
                />
                <p className='text-xs text-red-400'>{errors.name}</p>
                <p className='text-muted-foreground text-sm'>
                    This is the name that will be displayed on your profile and
                    in emails.
                </p>
            </div>

            <div className='flex flex-col space-y-2'>
                <Label>Language</Label>
                <Combobox
                    name='language'
                    defaultValue='ptbr'
                    options={languages}
                    placeholderText='Language'
                    searchText='Select a language'
                    className={cn(
                        'lg:max-w-xs',
                        errors.language && 'border-red-400'
                    )}
                />
                <p className='text-muted-foreground text-sm'>
                    This is the name that will be displayed on your profile and
                    in emails.
                </p>
            </div>

            <p className='text-xs text-red-400'>{errors.profilePic}</p>

            <div className='flex justify-between'>
                {isPending && (
                    <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                )}
                <Button type='submit'>Update</Button>
                <Theme />
            </div>
        </form>
    );
}
