import { Metadata } from 'next';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DrawerDeleteOrganization } from '@/components/drawer/drawer-delete-organization';
import { Suspense } from 'react';
import Loading from './loading';
import { UpdateOrganizationForm } from '@/components/form/update-organization-form';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

export default async function Settings() {
    return (
        <Suspense fallback={<Loading />}>
            <main className='space-y-4'>
                <section className='space-y-4'>
                    <h3 className='text-lg font-medium'>Nome</h3>
                    <section className='space-y-4'>
                        <div className='grid gap-2'>
                            <UpdateOrganizationForm />
                        </div>
                    </section>
                </section>
                <section className='space-y-4'>
                    <div>
                        <h3 className='text-lg font-medium'>Convites</h3>
                        <p className='text-sm text-muted-foreground'>
                            Anyone with the link can view this document.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <div className='grid gap-2'>
                            <div className='flex gap-2'>
                                <Input
                                    id='email'
                                    value='quark.com'
                                    name='name'
                                />
                                <Button className='w-40' variant='secondary'>
                                    Copiar link
                                </Button>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <span className='w-full border-t' />
                            </div>
                            <div className='relative flex justify-center text-xs uppercase'>
                                <span className='bg-background px-2 text-muted-foreground'>
                                    Ou
                                </span>
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <Label className='text-muted-foreground'>
                                Convide seus colaboradores
                            </Label>
                            <div className='flex gap-2'>
                                <Input
                                    id='email'
                                    placeholder='user@gmail.com'
                                    name='name'
                                />
                                <Button className='w-40'>Enviar</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='space-y-4 pt-10'>
                    <div>
                        <Label>Delete organization</Label>
                        <p className='text-sm text-muted-foreground'>
                            Click the button to delete this organization
                        </p>
                    </div>
                    <DrawerDeleteOrganization />
                </div>
            </main>
        </Suspense>
    );
}
