import { Metadata } from 'next';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Chart } from './components/chart';
import ProjectRanking from './components/project-ranking';
import CardData from './components/card-data';
import { Button } from '@/components/ui/button';
import { DrawerNewProjects } from '@/components/drawer/drawer-new-projects';

export const metadata: Metadata = {
    title: 'Organização',
    description: 'Organização',
};

export default function DashboardPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Organização</CardTitle>
                <CardDescription>Organização</CardDescription>
            </CardHeader>
            <Separator className='mb-6' />

            <main className='flex flex-col'>
                <div className='flex-1 space-y-4 px-8 pb-8'>
                    <Tabs defaultValue='overview' className='space-y-4'>
                        <div className='flex justify-between'>
                            <TabsList>
                                <TabsTrigger value='overview'>
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger value='analytics'>
                                    Analytics
                                </TabsTrigger>
                            </TabsList>
                            {/* if role === admin */}
                            <DrawerNewProjects />
                        </div>
                        <TabsContent value='overview' className='space-y-4'>
                            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                                <CardData
                                    title='Tickets'
                                    value='0'
                                    description='Total de tickets'
                                />
                                <CardData
                                    title='Tickets'
                                    value='0'
                                    description='Total de tickets'
                                />
                                <CardData
                                    title='Tickets'
                                    value='0'
                                    description='Total de tickets'
                                />
                                <CardData
                                    title='Tickets'
                                    value='0'
                                    description='Total de tickets'
                                />
                            </div>
                            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-8'>
                                <Card className='col-span-4'>
                                    <CardHeader>
                                        <CardTitle className='flex justify-between items-center mb-2'>
                                            Projetos
                                            <Button className='h-8'>
                                                Ver projetos
                                            </Button>
                                        </CardTitle>
                                        <CardDescription>
                                            Estes projetos receberam mais
                                            tickets nos últimos 30 dias.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ProjectRanking />
                                    </CardContent>
                                </Card>
                                <Card className='col-span-4'>
                                    <CardHeader>
                                        <CardTitle>Projects</CardTitle>
                                        <CardDescription>
                                            Projects
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ProjectRanking />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value='analytics' className='space-y-4'>
                            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
                                <Card className='col-span-7'>
                                    <CardHeader>
                                        <CardTitle>Tickets per month</CardTitle>
                                    </CardHeader>
                                    <CardContent className='pl-2'>
                                        <Chart />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </Card>
    );
}
