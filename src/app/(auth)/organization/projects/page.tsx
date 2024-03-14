import DeleteProject from './delete-project';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { DrawerEditProject } from '@/components/drawer/drawer-edit-project';
import { DrawerNewProjects } from '@/components/drawer/drawer-new-projects';
import { getOrganization } from '@/lib/api';

export default async function Projects() {
    const organization = await getOrganization();

    const { name, projects } = organization;

    return (
        <main className='space-y-4'>
            <h1 className='text-xl font-semibold'>
                Estes são os projetos cadastrados na organização {name}
            </h1>
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
    );
}
