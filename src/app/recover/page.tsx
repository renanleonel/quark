import Link from 'next/link';
import { Metadata } from 'next';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
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
                    <p className='text-sm text-muted-foreground'>
                        Digite seu email de acesso
                    </p>
                </div>

                <RecoverForm />

                <Label className='sr-only' htmlFor='back'>
                    Voltar
                </Label>
                <Link href='/'>
                    <Button variant='outline' type='button' className='w-full'>
                        Voltar
                    </Button>
                </Link>
            </div>
        </main>
    );
}
