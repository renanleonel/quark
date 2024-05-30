'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { Ticket } from '@/types';
import { deleteTicket } from '@/lib/actions';
import { useMediaQuery } from '@/hooks/use-media-query';

import {
    Dialog,
    DialogTitle,
    DialogClose,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogDescription,
} from '@/components/ui/dialog';

import {
    Drawer,
    DrawerTitle,
    DrawerClose,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerTrigger,
    DrawerDescription,
} from '@/components/ui/drawer';

import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

interface DeleteTicketProps {
    ticket: Ticket;
    children: React.ReactNode;
}

export function DeleteTicket({ ticket, children }: DeleteTicketProps) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
