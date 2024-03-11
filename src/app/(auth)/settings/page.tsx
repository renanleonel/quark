import '@/styles/themes.css';
import { Metadata } from 'next';

import { ThemeCustomizer } from '@/components/theme';
import { Separator } from '@/components/ui/separator';
import { AccountForm } from '@/components/form/account/account-form';

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
            <ThemeCustomizer />
            <Separator />
            <AccountForm />
        </div>
    );
}
