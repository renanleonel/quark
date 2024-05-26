import { Metadata } from 'next';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { NewTicketForm } from '@/components/form/new-ticket-form';

import Loading from './loading';
import { Suspense } from 'react';
import { getProjects } from '@/lib/api';

export const metadata: Metadata = {
    title: 'Novo ticket',
    description: 'Crie um novo ticket para a nossa equipe',
};

export default async function NewTicket() {
    const { message, statusCode, data: tickets } = await getProjects();

    if (!tickets) {
        throw new Error(
            `Tickets not found! Status: ${statusCode}, Message: ${message}`
        );
    }

    return (
        <Suspense fallback={<Loading />}>
            <Card>
                <CardHeader>
                    <CardTitle>Novo ticket</CardTitle>
                    <CardDescription>
                        Crie um ticket para a nossa equipe
                    </CardDescription>
                </CardHeader>
                <Separator className='mb-6' />

                <NewTicketForm />
            </Card>
        </Suspense>
    );
}
