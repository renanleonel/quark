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
                <CardTitle>Tickets</CardTitle>
                <CardDescription>Tickets abertos no momento</CardDescription>
            </CardHeader>
            <Separator />
            <div className='space-y-4 p-4'>
                <Skeleton className='h-10' />
                <Skeleton className='h-10' />
                <Skeleton className='h-20' />
                <Skeleton className='h-10' />
                <Skeleton className='h-20' />
                <Skeleton className='h-10' />
                <Skeleton className='h-10' />
                <Skeleton className='h-14' />
                <Skeleton className='h-10' />
            </div>
        </Card>
    );
}
