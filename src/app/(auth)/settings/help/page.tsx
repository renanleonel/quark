import { Metadata } from 'next';
import HelpForm from '@/components/form/help/help-form';

export const metadata: Metadata = {
    title: 'Help',
    description: 'Help',
};

export default function Help() {
    return (
        <main>
            <h2 className='text-lg font-medium'>Ajuda</h2>
            <p className='text-sm text-muted-foreground'>
                Encontrou algum problema durante a utilização? Entre em contato
                conosco.
            </p>
            <HelpForm />
        </main>
    );
}
