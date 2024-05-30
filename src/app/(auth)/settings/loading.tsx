import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function Loading() {
    return (
        <main className='space-y-6'>
            <div>
                <h3 className='text-lg font-medium'>Profile</h3>
                <p className='text-sm text-muted-foreground'>
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />

            <div className='space-y-8 pt-4'>
                <Skeleton className='h-10' />
                <Skeleton className='h-10' />
                <Skeleton className='h-10' />

                <div>
                    <Skeleton className='h-10 w-32' />
                </div>
            </div>
        </main>
    );
}
