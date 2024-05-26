import Link from 'next/link';
import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { SignUpForm } from '@/components/form/sign-up-form';

export const metadata: Metadata = {
    title: 'Cadastro',
    description: 'Cadastre-se',
};

export default function SignUp() {
    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='flex w-[450px] flex-col gap-4 text-white'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-2xl font-semibold'>Cadastro</h1>
                    <p className='text-sm text-muted-foreground'>
                        Insira seus dados
                    </p>
                </div>

                <SignUpForm />

                <Link href='/'>
                    <Button variant='outline' type='button' className='w-full'>
                        Voltar
                    </Button>
                </Link>
            </div>
        </main>
    );
}
