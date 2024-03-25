'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const GoogleLogin = () => {
    async function handleGoogleLogin() {
        await signIn('google', {
            callbackUrl: '/tickets',
        });
    }

    return (
        <Button className='w-full' onClick={handleGoogleLogin}>
            Entrar com Google
        </Button>
    );
};

export default GoogleLogin;
