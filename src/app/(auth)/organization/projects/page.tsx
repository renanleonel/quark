import { DeleteProject } from './delete-project';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { DrawerEditProject } from '@/components/drawer/drawer-edit-project';
import { DrawerNewProjects } from '@/components/drawer/drawer-new-projects';
import { getOrganization } from '@/lib/api';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Projects() {
    const organization = await getOrganization();

    const { projects } = organization;

    return (
        <Suspense fallback={<Loading />}>
            <main className='space-y-4'>
                <h1 className='text-xl font-semibold'>Projetos</h1>
                <div className='flex gap-4'>
                    <Input placeholder='Procurar ' />
                    <DrawerNewProjects />
                </div>
                {projects.map((project, key) => {
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
            </main>
        </Suspense>
    );
}
