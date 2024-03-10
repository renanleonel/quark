import { Metadata } from 'next';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import EditForm from '@/components/form/edit/edit-form';
import { getTicket } from '@/lib/actions';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Edit',
    description: 'Edit ticket',
};
export default async function Edit({ params }: { params: { id: string } }) {
    const session = await auth();
    if (!session) redirect('/');
    const { id, role } = session.user;

    const ticket = await getTicket(params.id);

    if (role !== 'admin' && ticket.createdBy !== id) redirect('/tickets');

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit</CardTitle>
                <CardDescription>{params.id}</CardDescription>
            </CardHeader>
            <Separator className='mb-6' />
            <EditForm ticket={ticket} />
        </Card>
    );
}
