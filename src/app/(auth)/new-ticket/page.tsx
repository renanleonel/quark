import { Metadata } from 'next';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import SupportForm from '@/components/form/new-ticket/new-ticket-form';

export const metadata: Metadata = {
    title: 'Novo ticket',
    description: 'Crie um novo ticket para a nossa equipe',
};

export default function NewTicket() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Novo ticket</CardTitle>
                <CardDescription>
                    Crie um ticket para a nossa equipe
                </CardDescription>
            </CardHeader>
            <Separator className='mb-6' />

            <SupportForm />
        </Card>
    );
}
