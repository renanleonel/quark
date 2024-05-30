import { auth } from '@/auth';
import { Metadata } from 'next';
import { getProjects, getTicketByID } from '@/lib/actions';
import { redirect } from 'next/navigation';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { EditTicketForm } from '@/components/form/edit-ticket-form';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
    title: 'Edit',
    description: 'Edit ticket',
};
export default async function Edit({ params }: { params: { id: string } }) {
    const session = await auth();

    if (!session) redirect('/');

    const { id: ticketID } = params;
    const { id: userID, role } = session.user;

    const [ticket, projects] = await Promise.all([
        getTicketByID(ticketID),
        getProjects(),
    ]);

    const isAllowedToEdit = ticket.createdBy === userID || role === 'ADMIN';

    if (!projects || !isAllowedToEdit) {
        redirect('/tickets');
    }

    return (
        <Suspense fallback={<Loading />}>
            <Card>
                <CardHeader>
                    <CardTitle>Edit ticket</CardTitle>
                    <CardDescription>Edit an existing ticket</CardDescription>
                </CardHeader>
                <Separator className='mb-6' />
                <EditTicketForm ticket={ticket} projects={projects} />
            </Card>
        </Suspense>
    );
}
