import { getProjects, verifyAuth } from '@/lib/actions';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { NewTicketForm } from '@/components/form/new-ticket-form';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
    title: 'Novo ticket',
    description: 'Crie um novo ticket para a nossa equipe',
};

export default async function NewTicket() {
    await verifyAuth();

    const projects = await getProjects();

    if (!projects) {
        return;
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

                <NewTicketForm projects={projects} />
            </Card>
        </Suspense>
    );
}
