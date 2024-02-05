import { tickets } from '@/content/tickets-mock';
import { Metadata } from 'next';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
    title: 'Tasks',
    description: 'A task and issue tracker build using Tanstack Table.',
};

async function getTickets() {
    return tickets;
}

const Tickets = async () => {
    const tickets = await getTickets();

    return (
        <>
            <Card className='hidden lg:block'>
                <CardHeader>
                    <CardTitle>Tickets</CardTitle>
                    <CardDescription>
                        Tickets abertos no momento
                    </CardDescription>
                </CardHeader>
                <Separator />
                <DataTable data={tickets} columns={columns} />
            </Card>
            <div className='lg:hidden'>
                <Card>
                    <CardHeader>
                        <CardTitle>Tickets</CardTitle>
                        <CardDescription>
                            Tickets abertos no momento
                        </CardDescription>
                    </CardHeader>
                    <Separator />
                    <main className='space-y-4 p-6'>
                        <Input placeholder='Filtrar ticket' className='h-8 ' />
                        {tickets.map((ticket, key) => {
                            return (
                                <Card
                                    className='flex justify-between items-center p-4'
                                    key={key}
                                >
                                    <h2 className='text-lg font-semibold'>
                                        test
                                    </h2>
                                    <div className='flex'>
                                        {/* EDITAR*/}
                                        {/* DELETAR */}
                                    </div>
                                </Card>
                            );
                        })}
                    </main>
                </Card>
            </div>
        </>
    );
};

export default Tickets;
