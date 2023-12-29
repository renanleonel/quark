import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/components/sidebar-nav';

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';

const sidebarNavItems = [
	{
		title: 'Perfil',
		href: '/settings',
	},
	{
		title: 'Organização',
		href: '/settings/organization',
	},
];

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Card className='hidden lg:block'>
			<CardHeader>
				<CardTitle>Configurações</CardTitle>
				<CardDescription>Ajustes</CardDescription>
			</CardHeader>
			<Separator className='mb-6' />
			<div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 px-6'>
				<aside className='-mx-4 lg:w-1/5'>
					<SidebarNav items={sidebarNavItems} />
				</aside>
				<div className='flex-1 lg:max-w-2xl pb-6'>
					<TooltipProvider>{children}</TooltipProvider>
				</div>
			</div>
		</Card>
	);
}
