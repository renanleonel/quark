import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <main>
            <h1 className='pb-4 text-xl font-semibold'>Projetos</h1>
            <div className='flex gap-4'>
                <Input placeholder='Procurar' />
                <Button>Novo projeto</Button>
            </div>

            <div className='space-y-4 pt-6'>
                <Skeleton className='h-16' />
                <Skeleton className='h-16' />
                <Skeleton className='h-16' />
                <Skeleton className='h-16' />
                <Skeleton className='h-16' />
            </div>
        </main>
    );
}
