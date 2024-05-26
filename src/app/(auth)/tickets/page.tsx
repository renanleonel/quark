import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Expand, X } from 'lucide-react';
import { SuperLink } from '@/components/super-link';

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

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { columns } from './components/columns';
import { Button } from '@/components/ui/button';
import { DataTable } from './components/data-table';
import { Separator } from '@/components/ui/separator';
import { DeleteTicket } from './components/delete-ticket';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Suspense } from 'react';
import Loading from './loading';
import { fetchTickets } from '@/lib/actions';

export const metadata: Metadata = {
    title: 'Tickets',
    description: 'Tickets',
};

export default async function Tickets() {
    const tickets = await fetchTickets();

    return (
        <Suspense fallback={<Loading />}>
            <Card className='hidden lg:block'>
                <CardHeader>
                    <CardTitle>Tickets</CardTitle>
                    <CardDescription>
                        Tickets abertos no momento
                    </CardDescription>
                </CardHeader>
                <Separator />

                {tickets && <DataTable data={tickets} columns={columns} />}
                {!tickets && (
                    <div className='flex flex-col items-center justify-center gap-4 p-10'>
                        <h1>Error</h1>
                        <Button variant='secondary'>Try again</Button>
                    </div>
                )}
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
                        <Input placeholder='Filtrar ticket' className='h-8' />
                        <ScrollArea className='h-[450px]'>
                            <div className='space-y-4'>
                                {tickets &&
                                    tickets.map((ticket, key) => {
                                        return (
                                            <Drawer key={key}>
                                                <DrawerTrigger asChild>
                                                    <Card
                                                        key={key}
                                                        className={cn(
                                                            'flex cursor-pointer items-center justify-between gap-8 p-4 hover:bg-muted/20',
                                                            ticket.status ===
                                                                'concluído' &&
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
                                                                    <DrawerClose
                                                                        asChild
                                                                    >
                                                                        <X
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                    </DrawerClose>
                                                                </div>
                                                            </header>
                                                            <DrawerTitle className='text-start'>
                                                                {ticket.title}
                                                            </DrawerTitle>

                                                            <DrawerDescription className='space-y-2 pt-4'>
                                                                <div className='flex justify-between'>
                                                                    <h1>
                                                                        {
                                                                            ticket.project
                                                                        }
                                                                    </h1>
                                                                    <Badge>
                                                                        {
                                                                            ticket.type
                                                                        }
                                                                    </Badge>
                                                                </div>
                                                                <div className='flex flex-col items-start gap-2'>
                                                                    <div>
                                                                        Priority:{' '}
                                                                        {
                                                                            ticket.priority
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        Status:{' '}
                                                                        {
                                                                            ticket.status
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </DrawerDescription>
                                                        </DrawerHeader>

                                                        <DrawerFooter>
                                                            <div className='space-y-2'>
                                                                <SuperLink
                                                                    href={`/edit/${ticket.id}`}
                                                                    className='w-full'
                                                                >
                                                                    <Button
                                                                        variant='default'
                                                                        className='w-full'
                                                                    >
                                                                        Edit
                                                                    </Button>
                                                                </SuperLink>

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

                                {!tickets && <div>Erro</div>}
                            </div>
                        </ScrollArea>
                    </main>
                </Card>
            </div>
        </Suspense>
    );
}
