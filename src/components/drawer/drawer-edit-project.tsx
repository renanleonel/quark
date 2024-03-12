import * as React from 'react';

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
