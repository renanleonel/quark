import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <main>
            <h2 className='text-lg font-medium'>Ajuda</h2>
            <p className='text-muted-foreground text-sm'>
                Encontrou algum problema durante a utilização? Entre em contato
                conosco.
            </p>
            <div className='space-y-2 pt-4'>
                <Skeleton className='h-10' />
                <Skeleton className='h-40' />
                <div className='flex justify-end pt-4'>
                    <Skeleton className='h-10 w-28' />
                </div>
            </div>
        </main>
    );
}
