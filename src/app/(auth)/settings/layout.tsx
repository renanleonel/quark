import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/components/sidebar-nav';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const sidebarNavItems = [
    {
        title: 'Perfil',
        href: '/settings',
    },
    {
        title: 'Ajuda',
        href: '/settings/help',
    },
];

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    if (!session) redirect('/');

    const { role } = session.user;

    if (role === 'admin') {
        sidebarNavItems.splice(1, 0, {
            title: 'Organização',
            href: '/settings/organization',
        });
    }

    return (
        <Card className='hidden lg:block'>
            <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Ajustes</CardDescription>
            </CardHeader>
            <Separator className='mb-6' />
            <div className='flex flex-col space-y-8 px-6 lg:flex-row lg:space-x-12 lg:space-y-0'>
                <aside className='-mx-4 lg:w-1/5'>
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className='flex-1 pb-6 lg:max-w-2xl'>
                    <TooltipProvider>{children}</TooltipProvider>
                </div>
            </div>
        </Card>
    );
}
