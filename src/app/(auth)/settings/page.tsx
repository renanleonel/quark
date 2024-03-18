import { Metadata } from 'next';
import { Theme } from '@/components/ui/theme';
import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '@/components/form/profile-form';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

export default function Settings() {
    return (
        <div className='space-y-6'>
            <div>
                <h3 className='text-lg font-medium'>Profile</h3>
                <p className='text-sm text-muted-foreground'>
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <ProfileForm />
            <div className='flex w-full justify-end'>
                <Theme />
            </div>
        </div>
    );
}
