import { Metadata } from 'next';
import Loading from './loading';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getProjects, getTicketByID, verifyAuth } from '@/lib/actions';

import {
    Card,
    CardTitle,
    CardHeader,
    CardDescription,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { EditTicketForm } from '@/components/form/edit-ticket-form';

export const metadata: Metadata = {
    title: 'Edit',
    description: 'Edit ticket',
};
export default async function Edit({ params }: { params: { id: string } }) {
    const { id: userID, role } = await verifyAuth();

    const { id: ticketID } = params;

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
