import {
    Card,
    CardTitle,
    CardHeader,
    CardDescription,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function Loading() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit ticket</CardTitle>
                <CardDescription>Edit an existing ticket</CardDescription>
            </CardHeader>
            <Separator />
            <div className='space-y-4 p-6 lg:hidden'>
                <Skeleton className='h-10' />
                <Skeleton className='h-20' />
                <div className='grid grid-cols-2 gap-4'>
                    <Skeleton className='h-10' />
                    <Skeleton className='h-10' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <Skeleton className='h-10' />
                    <Skeleton className='h-10' />
                </div>
                <Skeleton className='h-10' />
                <Skeleton className='h-10' />
            </div>

            <div className='hidden grid-cols-2 gap-4 p-6 lg:grid'>
                <div className='space-y-4'>
                    <Skeleton className='h-10' />
                    <Skeleton className='h-60' />
                </div>
                <div className='space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <Skeleton className='h-10' />
                        <Skeleton className='h-10' />
                    </div>
                    <Skeleton className='h-12' />
                    <Skeleton className='h-12' />
                    <Skeleton className='h-12' />
                    <Skeleton className='h-12' />
                </div>
            </div>

            <div className='flex justify-between px-6 pb-6'>
                <Skeleton className='h-10 w-32' />
                <Skeleton className='h-10 w-32' />
            </div>
        </Card>
    );
}
