import { Metadata } from 'next';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ChangePasswordForm from '@/components/form/change-password-form';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

export default async function Account() {
    return (
        <main className='space-y-20'>
            <section className='space-y-4'>
                <div>
                    <h3 className='text-lg font-medium'>Account</h3>
                    <p className='text-sm text-muted-foreground'>
                        Update your password or deactivate your account.
                    </p>
                </div>
                <Separator />
                <ChangePasswordForm />
            </section>

            <div className='space-y-4'>
                <div>
                    <Label>Deactivate account</Label>
                    <p className='text-sm text-muted-foreground'>
                        Click the button to deactivate your account.
                    </p>
                </div>
                <Button
                    variant='ghost'
                    className='w-full text-red-800 hover:bg-red-800 hover:text-white'
                >
                    Deactivate account
                </Button>
            </div>
        </main>
    );
}
