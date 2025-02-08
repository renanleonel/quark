'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { TrashIcon } from 'lucide-react';
import { deleteMember } from '@/lib/actions';
import { useMediaQuery } from '@/hooks/use-media-query';

import {
    Dialog,
    DialogClose,
    DialogTitle,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogDescription,
} from '@/components/ui/dialog';

import {
    Drawer,
    DrawerClose,
    DrawerTitle,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
    DrawerContent,
    DrawerDescription,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';

export const DeleteMember = () => {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    async function handleDeleteMember() {
        const status = await deleteMember('memberID');

        if (status === 200) {
            toast.success('Membro deletado com sucesso!');

            setOpen(false);
        }

        if (status === 404) {
            toast.error('Membro não encontrado.');
        }

        if (status === 500) {
            toast.error('Erro ao deletar membro.');
        }
    }

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant='ghost' className='hover:bg-muted flex p-2'>
                        <TrashIcon
                            className='text-muted-foreground h-4 w-4'
                            color='#fff'
                        />
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Delete member</DialogTitle>
                        <DialogDescription>
                            Este membro será deletado permanentemente. Você tem
                            certeza?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleDeleteMember} variant='destructive'>
                        Delete
                    </Button>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant='ghost'
                    className='p- hover:bg-muted flex h-8 w-8'
                >
                    <TrashIcon className='text-muted-foreground h-4 w-4' />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>Delete member</DrawerTitle>
                    <DrawerDescription>
                        Este membro será deletado permanentemente. Você tem
                        certeza?
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='pt-2'>
                    <DrawerClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                    <Button onClick={handleDeleteMember} variant='destructive'>
                        Delete
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
