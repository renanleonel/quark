import { auth } from '@/auth';
import { Metadata } from 'next';
import { getTicket } from '@/lib/actions';
import { redirect } from 'next/navigation';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import EditTicketForm from '@/components/form/edit-ticket/edit-ticket-form';

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
                <CardTitle>Edit ticket</CardTitle>
                <CardDescription>Edit an existing ticket</CardDescription>
            </CardHeader>
            <Separator className='mb-6' />
            <EditTicketForm ticket={ticket} />
        </Card>
    );
}
