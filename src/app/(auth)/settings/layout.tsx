import { SidebarNav } from '@/components/sidebar-nav';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';

import {
    Card,
    CardTitle,
    CardHeader,
    CardDescription,
} from '@/components/ui/card';
import { verifyAuth } from '@/lib/actions';

const sidebarNavItems = [
    {
        title: 'Perfil',
        href: '/settings',
    },
    {
        title: 'Conta',
        href: '/settings/account',
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
    const { role } = await verifyAuth();

    if (role === 'ADMIN' && sidebarNavItems.length === 3) {
        sidebarNavItems.splice(1, 0, {
            title: 'Organização',
            href: '/settings/organization',
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Ajustes</CardDescription>
            </CardHeader>
            <Separator className='mb-6' />
            <div className='flex flex-col space-y-8 px-6 lg:flex-row lg:space-y-0 lg:space-x-12'>
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
