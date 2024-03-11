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
import { Separator } from '@/components/ui/separator';
import { Expand, Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
    title: 'Tasks',
    description: 'A task and issue tracker build using Tanstack Table.',
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
                                            className='flex justify-between items-center p-4 cursor-pointer hover:bg-muted/20 gap-8'
                                        >
                                            <div className='flex items-center gap-2 truncate'>
                                                <div className='h-2 w-2 rounded-full bg-green-600' />
                                                <h2 className='text-sm truncate font-semibold'>
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
                                                <header className='flex justify-end w-full'>
                                                    <Link
                                                        href={`/edit/${ticket.id}`}
                                                        className='hover:bg-muted cursor-pointer p-2 rounded-md'
                                                    >
                                                        <Pencil size={16} />
                                                    </Link>
                                                    <button className='hover:bg-muted cursor-pointer p-2 rounded-md'>
                                                        <Trash size={16} />
                                                    </button>
                                                </header>
                                                <DrawerTitle>
                                                    {ticket.title}
                                                </DrawerTitle>

                                                <DrawerDescription>
                                                    <div>{ticket.project}</div>
                                                    <Badge>
                                                        {ticket.label}
                                                    </Badge>
                                                    <div>{ticket.priority}</div>
                                                    <div>{ticket.status}</div>
                                                </DrawerDescription>
                                            </DrawerHeader>

                                            <DrawerFooter>
                                                <DrawerClose asChild>
                                                    <Button variant='outline'>
                                                        Cancelar
                                                    </Button>
                                                </DrawerClose>
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
