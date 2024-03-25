import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <main>
            <div className='space-y-8 pt-4'>
                <div className='flex gap-4'>
                    <Skeleton className='h-10 w-full' />
                    <Skeleton className='h-10 w-32' />
                </div>
                <div className='flex gap-4'>
                    <Skeleton className='h-10 w-full' />
                    <Skeleton className='h-10 w-32' />
                </div>
                <div className='flex gap-4'>
                    <Skeleton className='h-10 w-full' />
                    <Skeleton className='h-10 w-32' />
                </div>
            </div>
        </main>
    );
}
