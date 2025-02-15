import Loading from './loading';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { verifyAuth } from '@/lib/actions';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { AccountForm } from '@/components/form/account-form';
import { DrawerDeactivateAccount } from '@/components/drawer/drawer-deactivate-account';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

export default async function Account() {
    await verifyAuth();

    return (
        <Suspense fallback={<Loading />}>
            <main className='space-y-20'>
                <section className='space-y-4'>
                    <div>
                        <h3 className='text-lg font-medium'>Account</h3>
                        <p className='text-muted-foreground text-sm'>
                            Update your password or deactivate your account.
                        </p>
                    </div>
                    <Separator />
                    <AccountForm />
                </section>

                <div className='space-y-4'>
                    <div>
                        <Label>Deactivate account</Label>
                        <p className='text-muted-foreground text-sm'>
                            Click the button to deactivate your account.
                        </p>
                    </div>
                    <DrawerDeactivateAccount />
                </div>
            </main>
        </Suspense>
    );
}
