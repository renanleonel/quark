import Loading from './loading';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { verifyAuth } from '@/lib/actions';

import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '@/components/form/profile-form';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

export default async function Settings() {
    const { name } = await verifyAuth();

    return (
        <Suspense fallback={<Loading />}>
            <div className='space-y-6'>
                <div>
                    <h3 className='text-lg font-medium'>Profile</h3>
                    <p className='text-muted-foreground text-sm'>
                        This is how others will see you on the site.
                    </p>
                </div>
                <Separator />
                <ProfileForm name={name} />
            </div>
        </Suspense>
    );
}
