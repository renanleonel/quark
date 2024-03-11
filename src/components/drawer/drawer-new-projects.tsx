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
import { ProjectsForm } from '../form/projects/projects-form';

export function DrawerNewProjects() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button>Novo projeto</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm'>
                    <DrawerHeader>
                        <DrawerTitle>Criar projetos</DrawerTitle>
                        <DrawerDescription>
                            Insira o nome do projeto que cuidamos do resto.
                        </DrawerDescription>
                    </DrawerHeader>

                    <section className='flex max-w-sm flex-col gap-4 p-4'>
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
