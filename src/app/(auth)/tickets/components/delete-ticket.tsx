'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog';
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

import { toast } from 'sonner';
import { Ticket } from '@/types';
import { deleteTicket } from '@/lib/actions';
import { Icons } from '@/components/ui/icons';

interface DeleteTicketProps {
    ticket: Ticket;
    children: React.ReactNode;
}

export function DeleteTicket({ ticket, children }: DeleteTicketProps) {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    async function handleDeleteTicket() {
        if (!ticket.id) return;

        setIsLoading(true);
        const status = await deleteTicket(ticket.id);

        if (status !== 200) {
            toast.error('Erro ao deletar ticket!');
            setIsLoading(false);
            return;
        }

        toast.success('Ticket deletado com sucesso!');
        setOpen(false);
        setIsLoading(false);
    }

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Delete ticket</DialogTitle>
                        <DialogDescription>
                            Este ticket será deletado permanentemente. Você tem
                            certeza?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button
                        disabled={isLoading}
                        variant='destructive'
                        onClick={handleDeleteTicket}
                    >
                        {isLoading && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Delete
                    </Button>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>Delete ticket</DrawerTitle>
                    <DrawerDescription>
                        Este ticket será deletado permanentemente. Você tem
                        certeza?
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='pt-2'>
                    <DrawerClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                    <Button
                        disabled={isLoading}
                        variant='destructive'
                        onClick={handleDeleteTicket}
                    >
                        {isLoading && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Delete
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
