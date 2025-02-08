import { TrashIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <main className='space-y-8'>
            <div>
                <h3 className='text-lg font-medium'>Membros</h3>
                <p className='text-muted-foreground text-sm'>
                    Gerencie os membros da sua organização
                </p>
            </div>
            <Input placeholder='Filtrar' className='h-8' />

            <div className='hidden space-y-8 md:block'>
                {[...Array(3)].map((_, key) => {
                    return (
                        <div className='flex justify-between' key={key}>
                            <div className='flex gap-4'>
                                <Skeleton className='h-10 w-10 rounded-full' />
                                <Skeleton className='h-10 w-32' />
                            </div>
                            <div className='flex items-center gap-4'>
                                <Skeleton className='h-10 w-32' />
                                <TrashIcon className='text-muted-foreground h-4 w-4' />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='space-y-8 md:hidden'>
                {[...Array(3)].map((_, key) => {
                    return (
                        <div key={key} className='space-y-4'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <Skeleton className='h-10 w-10 rounded-full' />
                                    <Skeleton className='h-10 w-32' />
                                </div>
                                <div className='flex items-center gap-4'>
                                    <TrashIcon className='text-muted-foreground h-4 w-4' />
                                </div>
                            </div>
                            <Skeleton className='h-10' />
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
