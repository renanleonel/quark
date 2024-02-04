import * as React from 'react';

import { Button } from '@/components/ui/button';
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
import { Pencil } from 'lucide-react';
import EditProjectForm from '../form/projects/edit-project-form';

interface DrawerEditProjectProps {
    project: {
        label: string;
        value: string;
    };
}

export function DrawerEditProject({ project }: DrawerEditProjectProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className='hover:bg-muted cursor-pointer p-2 rounded-md'>
                    <Pencil size={16} />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm'>
                    <DrawerHeader>
                        <DrawerTitle>Editar {project.label}</DrawerTitle>
                    </DrawerHeader>

                    <section className='p-4 max-w-sm flex flex-col gap-4'>
                        <EditProjectForm id={'clt8928932klç'} />
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
