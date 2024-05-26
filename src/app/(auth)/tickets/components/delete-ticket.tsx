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

interface DeleteTicketProps {
    children: React.ReactNode;
}

export function DeleteTicket({ children }: DeleteTicketProps) {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const handleDeleteTicket = () => {
        setOpen(false);
        toast.success('Ticket deletado com sucesso!');
    };

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
                    <Button onClick={handleDeleteTicket} variant='destructive'>
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
                    <Button onClick={handleDeleteTicket} variant='destructive'>
                        Delete
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
