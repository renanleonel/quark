import Loading from './loading';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getOrganization, verifyAuth } from '@/lib/actions';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DrawerEditProject } from '@/components/drawer/drawer-edit-project';
import { DrawerNewProjects } from '@/components/drawer/drawer-new-projects';

import { DeleteProject } from './delete-project';

export default async function Projects() {
    await verifyAuth();

    const organization = await getOrganization();

    if (!organization) redirect('/');

    const { projects } = organization;

    return (
        <Suspense fallback={<Loading />}>
            <main className='space-y-4'>
                <h1 className='text-xl font-semibold'>Projetos</h1>
                <div className='flex gap-4'>
                    <Input placeholder='Procurar ' />
                    <DrawerNewProjects />
                </div>
                {projects.length > 0 &&
                    projects.map((project, key) => {
                        return (
                            <Card
                                className='flex items-center justify-between p-4'
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

                {projects.length === 0 && (
                    <h2 className='text-center text-lg font-semibold'>
                        Nenhum projeto encontrado
                    </h2>
                )}
            </main>
        </Suspense>
    );
}
