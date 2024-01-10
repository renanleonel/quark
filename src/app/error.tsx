'use client';

import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ErrorProps {}

const Error = ({}: ErrorProps) => {
    return (
        <main className='min-h-screen flex flex-col gap-10 items-center justify-center'>
            <Label className='' htmlFor='password'>
                erro.
            </Label>
            <Link href='/'>
                <Button variant='outline' type='button'>
                    voltar para home
                </Button>
            </Link>
        </main>
    );
};

export default Error;
