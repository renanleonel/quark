import Loading from './loading';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { verifyAuth } from '@/lib/actions';
import { HelpForm } from '@/components/form/help-form';

export const metadata: Metadata = {
    title: 'Help',
    description: 'Help',
};

export default async function Help() {
    await verifyAuth();

    return (
        <Suspense fallback={<Loading />}>
            <main>
                <h2 className='text-lg font-medium'>Ajuda</h2>
                <p className='text-muted-foreground text-sm'>
                    Encontrou algum problema durante a utilização? Entre em
                    contato conosco.
                </p>
                <HelpForm />
            </main>
        </Suspense>
    );
}
