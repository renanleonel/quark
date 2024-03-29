'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { TrashIcon } from 'lucide-react';
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
import { deleteMember } from '@/lib/actions';

export function DeleteMember() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const handleDeleteMember = async () => {
        const req = await deleteMember('memberID');

        setOpen(false);

        if (!req) {
            return toast.error('Erro ao deletar membro');
        }

        return toast.success('Membro deletado com sucesso!');
    };

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant='ghost'
                        className='p- flex h-8 w-8 hover:bg-muted'
                    >
                        <TrashIcon className='h-4 w-4 text-muted-foreground' />
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
                    className='p- flex h-8 w-8 hover:bg-muted'
                >
                    <TrashIcon className='h-4 w-4 text-muted-foreground' />
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
}
