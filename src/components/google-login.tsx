'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export const GoogleLogin = () => {
    async function handleGoogleLogin() {
        await signIn('google', {
            callbackUrl: '/tickets',
        });
    }

    return (
        <Button className='flex w-full gap-2' onClick={handleGoogleLogin}>
            {/* <Image
                src={google}
                alt='Google'
                width={16}
                height={16}
                className='dark:invert'
            /> */}
            Entrar com Google
        </Button>
    );
};
