import Link from 'next/link';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Expand, X } from 'lucide-react';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DeleteTicket } from './components/delete-ticket';

import { tickets } from '@/content/tickets-mock';

export const metadata: Metadata = {
    title: 'Tasks',
    description: 'Tasks page',
};

async function getTickets() {
    return tickets;
}

export default async function Tickets() {
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
                                <Drawer key={key}>
                                    <DrawerTrigger asChild>
                                        <Card
                                            key={key}
                                            className={cn(
                                                'flex cursor-pointer items-center justify-between gap-8 p-4 hover:bg-muted/20',
                                                ticket.status === 'concluído' &&
                                                    'opacity-40'
                                            )}
                                        >
                                            <div className='flex items-center gap-2 truncate'>
                                                <div className='h-2 w-2 rounded-full bg-green-600' />
                                                <h2 className='truncate text-sm font-semibold'>
                                                    {ticket.title}
                                                </h2>
                                            </div>
                                            <div>
                                                <Expand size={16} />
                                            </div>
                                        </Card>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <div className='mx-auto w-full max-w-sm'>
                                            <DrawerHeader>
                                                <header className='flex w-full justify-end'>
                                                    <div className='cursor-pointer rounded-lg p-2 hover:bg-muted/20'>
                                                        <DrawerClose asChild>
                                                            <X size={16} />
                                                        </DrawerClose>
                                                    </div>
                                                </header>
                                                <DrawerTitle className='text-start'>
                                                    {ticket.title}
                                                </DrawerTitle>

                                                <DrawerDescription className='space-y-2 pt-4'>
                                                    <div className='flex justify-between'>
                                                        <h1>
                                                            {ticket.project}
                                                        </h1>
                                                        <Badge>
                                                            {ticket.label}
                                                        </Badge>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-2'>
                                                        <div>
                                                            Priority:{' '}
                                                            {ticket.priority}
                                                        </div>
                                                        <div>
                                                            Status:{' '}
                                                            {ticket.status}
                                                        </div>
                                                    </div>
                                                </DrawerDescription>
                                            </DrawerHeader>

                                            <DrawerFooter>
                                                <div className='space-y-2'>
                                                    <Link
                                                        href={`/edit/${ticket.id}`}
                                                        className='w-full'
                                                    >
                                                        <Button
                                                            variant='default'
                                                            className='w-full'
                                                        >
                                                            Edit
                                                        </Button>
                                                    </Link>

                                                    <DeleteTicket>
                                                        <Button
                                                            variant='destructive'
                                                            className='w-full'
                                                        >
                                                            Delete
                                                        </Button>
                                                    </DeleteTicket>
                                                </div>
                                            </DrawerFooter>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            );
                        })}
                    </main>
                </Card>
            </div>
        </>
    );
}
