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
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { ProjectsForm } from './form/projects/projects-form';

interface DrawerNewProjectsProps {
    children: React.ReactNode;
}

export function DrawerNewProjects({ children }: DrawerNewProjectsProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm'>
                    <DrawerHeader>
                        <DrawerTitle>Criar projetos</DrawerTitle>
                        <DrawerDescription>
                            Insira o nome do projeto que cuidamos do resto.
                        </DrawerDescription>
                    </DrawerHeader>

                    <section className='p-4 max-w-sm flex flex-col gap-4'>
                        <ProjectsForm />
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
