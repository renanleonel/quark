'use client';

import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Error() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-10'>
            <Label>erro.</Label>
            <Link href='/'>
                <Button variant='outline' type='button'>
                    voltar para home
                </Button>
            </Link>
        </main>
    );
}
