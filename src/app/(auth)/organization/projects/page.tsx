import { Card } from '@/components/ui/card';
import { projects } from '@/content/table-data';

import DeleteProject from './delete-project';
import { DrawerEditProject } from '@/components/drawer/drawer-edit-project';
import { DrawerNewProjects } from '@/components/drawer/drawer-new-projects';
import { Input } from '@/components/ui/input';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Projects() {
    const session = await auth();
    if (!session) redirect('/');

    const { role } = session.user;
    if (role !== 'admin') redirect('/tickets');

    return (
        <main className='space-y-4'>
            <h1 className='text-xl font-semibold'>
                Estes são os projetos cadastrados na organização
                __organization__
            </h1>
            <div className='flex gap-4'>
                <Input placeholder='Procurar ' />
                {/* if role === admin */}
                <DrawerNewProjects />
            </div>
            {projects.map((project, key) => {
                return (
                    <Card
                        className='flex justify-between items-center p-4'
                        key={key}
                    >
                        <h2 className='text-lg font-semibold'>
                            {project.label}
                        </h2>
                        <div className='flex'>
                            <DrawerEditProject project={project} />
                            <DeleteProject project={project} />
                        </div>
                    </Card>
                );
            })}
        </main>
    );
}
