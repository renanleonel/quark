import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
    return (
        <main className='min-h-screen flex flex-col gap-10 items-center justify-center'>
            <Label className='' htmlFor='password'>
                não encontrado.
            </Label>
            <Link href='/'>
                <Button variant='outline' type='button'>
                    voltar para home
                </Button>
            </Link>
        </main>
    );
};

export default NotFound;
