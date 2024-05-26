import { Roles } from '@/components/roles';
import { Input } from '@/components/ui/input';
import { DeleteMember } from '@/components/delete-member';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getMembers } from '@/lib/api';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Members() {
    const members = await getMembers('orgID');

    return (
        <Suspense fallback={<Loading />}>
            <main className='space-y-8'>
                <div>
                    <h3 className='text-lg font-medium'>Membros</h3>
                    <p className='text-sm text-muted-foreground'>
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
                                        <p className='text-sm font-medium leading-none'>
                                            {member.name}
                                        </p>
                                        <p className='text-sm text-muted-foreground'>
                                            {member.email}
                                        </p>
                                    </div>
                                    <div className='flex w-full justify-end md:hidden'>
                                        <DeleteMember />
                                    </div>
                                </div>
                                <div className='flex w-full items-center justify-center gap-2 md:justify-end'>
                                    <Roles role={member.role} />
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
