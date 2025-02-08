'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { Trash } from 'lucide-react';
import { deleteProject } from '@/lib/actions';
import { useMediaQuery } from '@/hooks/use-media-query';

import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
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
    DrawerClose,
    DrawerTitle,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
    DrawerContent,
    DrawerDescription,
} from '@/components/ui/drawer';

interface DeleteProjectProps {
    project: {
        label: string;
        value: string;
    };
}

export const DeleteProject = ({ project }: DeleteProjectProps) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    async function handleDeleteProject() {
        setIsLoading(true);
        const { error, message } = await deleteProject('');

        if (error) {
            toast.error(message);
            setIsLoading(false);
            return;
        }

        toast.success(message);
        setOpen(false);
        setIsLoading(false);
    }

    if (isDesktop)
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className='hover:bg-muted cursor-pointer rounded-md p-2'>
                        <Trash size={16} />
                    </button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Delete project</DialogTitle>
                        <DialogDescription>
                            Este projeto será deletado permanentemente. Os
                            tickets atrelados à este projeto também serão
                            excluídos. Você tem certeza?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button
                        disabled={isLoading}
                        variant='destructive'
                        onClick={handleDeleteProject}
                    >
                        {isLoading && (
                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Delete
                    </Button>
                </DialogContent>
            </Dialog>
        );

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button className='hover:bg-muted cursor-pointer rounded-md p-2'>
                    <Trash size={16} />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>Delete project</DrawerTitle>
                    <DrawerDescription>
                        Este projeto será deletado permanentemente. Os tickets
                        atrelados à este projeto também serão excluídos. Você
                        tem certeza?
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='pt-2'>
                    <DrawerClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                    <Button
                        disabled={isLoading}
                        variant='destructive'
                        onClick={handleDeleteProject}
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
};
