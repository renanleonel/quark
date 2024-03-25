import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '@/components/form/profile-form';
import { Suspense } from 'react';
import { auth } from '@/auth';
import Loading from './loading';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

export default async function Settings() {
    const session = await auth();
    if (!session) return null;

    const name = session.user.name;

    return (
        <Suspense fallback={<Loading />}>
            <div className='space-y-6'>
                <div>
                    <h3 className='text-lg font-medium'>Profile</h3>
                    <p className='text-sm text-muted-foreground'>
                        This is how others will see you on the site.
                    </p>
                </div>
                <Separator />
                <ProfileForm name={name} />
            </div>
        </Suspense>
    );
}
