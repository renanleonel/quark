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

interface DrawerOrganizationProps {
    children: React.ReactNode;
}

export function DrawerOrganization({ children }: DrawerOrganizationProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm'>
                    <DrawerHeader>
                        <DrawerTitle>Criar organização</DrawerTitle>
                        <DrawerDescription>
                            Insira os dados da sua organização
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className='p-4 max-w-sm flex flex-col gap-4'>
                        <Input placeholder='Nome' />
                        <Input placeholder='@' />
                        <Input placeholder='TEST' />
                        <Input placeholder='TEST' />
                        <Input placeholder='TEST' />
                    </div>

                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant='outline'>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
