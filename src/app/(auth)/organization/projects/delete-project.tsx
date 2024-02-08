'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Trash } from 'lucide-react';

interface DeleteProjectProps {
    project: {
        label: string;
        value: string;
    };
}

const DeleteProject = ({ project }: DeleteProjectProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='hover:bg-muted cursor-pointer p-2 rounded-md'>
                    <Trash size={16} />
                </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Delete project</DialogTitle>
                    <DialogDescription>
                        Este projeto será deletado permanentemente. Os tickets
                        atrelados à este projeto também serão excluídos. Você
                        tem certeza?
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button variant='destructive'>Delete</Button>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteProject;
