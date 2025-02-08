import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <main>
            <h3 className='text-lg font-medium'>Account</h3>
            <p className='text-muted-foreground text-sm'>
                Update your password or deactivate your account.
            </p>
            <div className='space-y-8 pt-4'>
                <Skeleton className='h-10' />
                <div className='hidden grid-cols-2 gap-4 pt-4 lg:grid'>
                    <Skeleton className='h-10' />
                    <Skeleton className='h-10' />
                </div>
                <div className='space-y-2 lg:hidden'>
                    <Skeleton className='h-10' />
                    <Skeleton className='h-10' />
                </div>
                <div className='flex justify-end pt-4'>
                    <Skeleton className='h-10 w-28' />
                </div>
            </div>
        </main>
    );
}
