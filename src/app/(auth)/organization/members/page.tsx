import Loading from './loading';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getMembers, verifyAuth } from '@/lib/actions';

import { Roles } from '@/components/roles';
import { Input } from '@/components/ui/input';
import { DeleteMember } from './delete-member';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function Members() {
    await verifyAuth();

    const members = await getMembers('orgID');

    if (!members) {
        redirect('/organization');
    }

    return (
        <Suspense fallback={<Loading />}>
            <main className='space-y-8'>
                <div>
                    <h3 className='text-lg font-medium'>Membros</h3>
                    <p className='text-muted-foreground text-sm'>
                        Gerencie os membros da sua organização
                    </p>
                </div>
                <Input placeholder='Filtrar' className='h-8' />
                {members.map((member, key) => {
                    return (
                        <section key={key} className='flex flex-col gap-6'>
                            <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                                <div className='flex w-full items-center space-x-4'>
                                    <Avatar>
                                        <AvatarImage src={member.icon} />
                                        <AvatarFallback />
                                    </Avatar>
                                    <div>
                                        <p className='text-sm leading-none font-medium'>
                                            {member.name}
                                        </p>
                                        <p className='text-muted-foreground text-sm'>
                                            {member.email}
                                        </p>
                                    </div>
                                    <div className='flex w-full justify-end md:hidden'>
                                        <DeleteMember />
                                    </div>
                                </div>
                                <div className='flex w-full items-center justify-center gap-2 md:justify-end'>
                                    <Roles member={member} />
                                    <div className='hidden md:block'>
                                        <DeleteMember />
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </main>
        </Suspense>
    );
}
