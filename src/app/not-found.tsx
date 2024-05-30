import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { SuperLink } from '@/components/super-link';

export default function NotFound() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-10'>
            <Label>não encontrado.</Label>
            <SuperLink href='/'>
                <Button variant='outline' type='button'>
                    voltar para home
                </Button>
            </SuperLink>
        </main>
    );
}
