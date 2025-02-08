'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';

import {
    Drawer,
    DrawerTitle,
    DrawerClose,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
    DrawerContent,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { EditProjectForm } from '@/components/form/edit-project-form';

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
                <button className='hover:bg-muted cursor-pointer rounded-md p-2'>
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
