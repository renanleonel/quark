import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { SuperLink } from '@/components/super-link';
import { RecoverForm } from '@/components/form/recover-form';

export const metadata: Metadata = {
    title: 'Recuperar senha',
    description: 'Digite seu email para recuperar sua senha',
};

export default function Recover() {
    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='flex w-[350px] flex-col gap-4 text-white'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-2xl font-semibold'>Recuperar senha</h1>
                    <p className='text-muted-foreground text-sm'>
                        Digite seu email de acesso
                    </p>
                </div>

                <RecoverForm />

                <SuperLink href='/'>
                    <Button variant='outline' type='button' className='w-full'>
                        Voltar
                    </Button>
                </SuperLink>
            </div>
        </main>
    );
}
