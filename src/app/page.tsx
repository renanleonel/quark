import { Metadata } from 'next';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { SuperLink } from '@/components/super-link';
import { AuthForm } from '@/components/form/auth-form';
import { GoogleLogin } from '@/components/google-login';

export const metadata: Metadata = {
    title: 'Entrar',
    description: 'Faça login na sua conta para acessar a dashboard',
};

export default function Auth() {
    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='flex w-[350px] flex-col gap-4 text-white'>
                <div className='flex flex-col gap-2 text-center'>
                    <h1 className='text-2xl font-semibold'>Entrar</h1>
                    <p className='text-muted-foreground text-sm'>
                        Digite seu email de acesso
                    </p>
                </div>

                <AuthForm />

                <SuperLink href='/recover'>
                    <Button variant='outline' type='button' className='w-full'>
                        Recuperar senha
                    </Button>
                </SuperLink>
                <Separator className='bg-white/20' />

                <GoogleLogin />

                <Label htmlFor='sign-in'>Não tem uma conta?</Label>
                <SuperLink href='/sign-up'>
                    <Button variant='outline' type='button' className='w-full'>
                        Cadastrar
                    </Button>
                </SuperLink>
            </div>
            <div className='absolute bottom-4 flex w-full max-w-xs justify-center'>
                <SuperLink href='/policy' className='text-sm hover:underline'>
                    Policy and Terms
                </SuperLink>
            </div>
        </main>
    );
}
