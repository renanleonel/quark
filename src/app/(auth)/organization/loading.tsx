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
                <CardTitle>Organização</CardTitle>
                <CardDescription>Organização</CardDescription>
            </CardHeader>
            <Separator />

            <div className='hidden lg:block'>
                <div className='flex justify-between px-6 pt-6'>
                    <Skeleton className='h-10 w-40' />
                    <div className='flex gap-2'>
                        <Skeleton className='h-10 w-20' />
                        <Skeleton className='h-10 w-20' />
                    </div>
                </div>
                <div className='hidden grid-cols-2 gap-4 p-6 lg:grid'>
                    <div className='space-y-4'>
                        <div className='flex gap-4'>
                            <Skeleton className='h-36 w-60' />
                            <Skeleton className='h-36 w-60' />
                        </div>
                        <Skeleton className='h-64' />
                    </div>
                    <div className='space-y-4'>
                        <div className='flex gap-4'>
                            <Skeleton className='h-36 w-60' />
                            <Skeleton className='h-36 w-60' />
                        </div>
                        <Skeleton className='h-64' />
                    </div>
                </div>
            </div>

            <div className='lg:hidden'>
                <div className='flex flex-col gap-4 px-6 pt-6'>
                    <div className='grid grid-cols-2 gap-4'>
                        <Skeleton className='h-12' />
                        <Skeleton className='h-12' />
                    </div>
                    <Skeleton className='h-12' />
                </div>
                <div className='space-y-4 p-6'>
                    <Skeleton className='h-36' />
                    <Skeleton className='h-36' />
                    <Skeleton className='h-36' />
                    <Skeleton className='h-36' />
                    <Skeleton className='h-64' />
                    <Skeleton className='h-64' />
                </div>
            </div>
        </Card>
    );
}
