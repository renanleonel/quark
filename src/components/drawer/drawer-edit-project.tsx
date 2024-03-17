'use client';

import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { Pencil } from 'lucide-react';
import EditProjectForm from '../form/edit-project-form';
import { useState } from 'react';

interface DrawerEditProjectProps {
    project: {
        label: string;
        value: string;
    };
}

export function DrawerEditProject({ project }: DrawerEditProjectProps) {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button className='cursor-pointer rounded-md p-2 hover:bg-muted'>
                    <Pencil size={16} />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm'>
                    <DrawerHeader>
                        <DrawerTitle>Editar {project.label}</DrawerTitle>
                    </DrawerHeader>

                    <section className='flex max-w-sm flex-col gap-4 p-4'>
                        <EditProjectForm
                            id={'clt8928932klç'}
                            setOpen={setOpen}
                        />
                    </section>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant='outline'>Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
