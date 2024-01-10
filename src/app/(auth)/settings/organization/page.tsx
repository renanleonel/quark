import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import '@/styles/themes.css';
import { TeamMembers } from './components/team-members';

export const metadata: Metadata = {
    title: 'Configurações',
    description: 'Configurações',
};

const Settings = () => {
    return (
        <main className='space-y-4'>
            <section className='space-y-4'>
                <h3 className='text-lg font-medium'>Nome</h3>
                <section className='space-y-4'>
                    <div className='grid gap-2'>
                        <div className='flex gap-2'>
                            <Input
                                id='name'
                                value='ORGANIZATION NAME'
                                name='name'
                                placeholder='ORGANIZATION NAME'
                            />
                            <Button className='w-40'>Alterar</Button>
                        </div>
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
                            <Input id='email' value='gon.com' name='name' />
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
            <TeamMembers />
        </main>
    );
};

export default Settings;
