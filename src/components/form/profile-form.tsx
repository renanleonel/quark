'use client';

import { InputFile } from '@/components/input-file';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Combobox from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';
import { changeProfileIS } from '@/content/initial-states';
import { changeProfile } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { cn } from '@/lib/utils';
import { Theme } from '../ui/theme';

const languages = [
    { label: 'Português', value: 'ptbr' },
    { label: 'English', value: 'en' },
];

interface ProfileFormProps {
    name: string;
}

export function ProfileForm({ name }: ProfileFormProps) {
    const [formState, formAction] = useFormState(
        changeProfile,
        changeProfileIS
    );

    const { errors, message } = formState;

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
                <p className='text-sm text-muted-foreground'>
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
                <p className='text-sm text-muted-foreground'>
                    This is the name that will be displayed on your profile and
                    in emails.
                </p>
            </div>

            {/* <InputFile
                name='file'
                label='Profile Pic'
                className={cn(errors.profilePic && 'border-red-400')}
            /> */}

            <p className='text-xs text-red-400'>{errors.profilePic}</p>

            <div className='flex justify-between'>
                <Button type='submit'>Update</Button>
                <Theme />
            </div>
        </form>
    );
}
