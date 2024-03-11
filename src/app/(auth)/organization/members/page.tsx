import Roles from '@/components/roles';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DeleteMember } from '@/app/(auth)/settings/organization/components/delete-member';

export default async function Members() {
    return (
        <main className='space-y-8'>
            <div>
                <h3 className='text-lg font-medium'>Membros</h3>
                <p className='text-sm text-muted-foreground'>
                    Gerencie os membros da sua organização
                </p>
            </div>
            <Input placeholder='Filtrar' className='h-8' />
            {Array.from({ length: 6 }).map((_, key) => {
                return (
                    <section key={key} className='flex flex-col gap-6'>
                        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
                            <div className='flex items-center space-x-4 w-full'>
                                <Avatar>
                                    <AvatarImage src='/avatars/01.png' />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className='text-sm font-medium leading-none'>
                                        Sofia Davis
                                    </p>
                                    <p className='text-sm text-muted-foreground'>
                                        m@example.com
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center w-full'>
                                <Roles />
                                <DeleteMember />
                            </div>
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
