import { Metadata } from 'next';
import { tickets } from '@/content/tickets-mock';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { auth } from '@/auth';

export const metadata: Metadata = {
    title: 'Tasks',
    description: 'A task and issue tracker build using Tanstack Table.',
};

async function getTickets() {
    return tickets;
}

const Tickets = async () => {
    const tickets = await getTickets();

    const session = await auth();

    console.log('===========');
    console.log(session);
    console.log('===========');

    return (
        <Card className='hidden lg:block'>
            <CardHeader>
                <CardTitle>Tickets</CardTitle>
                <CardDescription>Tickets abertos no momento</CardDescription>
            </CardHeader>
            <Separator />
            <DataTable data={tickets} columns={columns} />
        </Card>
    );
};

export default Tickets;
