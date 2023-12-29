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
import { Overview } from './overview';
import { RecentSales } from './recent-sales';

export const metadata: Metadata = {
	title: 'Organização',
	description: 'Organização',
};

export default function DashboardPage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Organização</CardTitle>
				<CardDescription>org org org org org</CardDescription>
			</CardHeader>
			<Separator className='mb-6' />

			<div className='flex-col flex'>
				<div className='flex-1 space-y-4 px-8 pb-8'>
					<Tabs defaultValue='overview' className='space-y-4'>
						<TabsList>
							<TabsTrigger value='overview'>Overview</TabsTrigger>
							<TabsTrigger value='analytics'>
								Analytics
							</TabsTrigger>
						</TabsList>
						<TabsContent value='overview' className='space-y-4'>
							<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
								<Card>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Tickets abertos
										</CardTitle>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='h-4 w-4 text-muted-foreground'
										>
											<path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
										</svg>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>
											10
										</div>
										<p className='text-xs text-muted-foreground'>
											+20.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											TEST
										</CardTitle>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='h-4 w-4 text-muted-foreground'
										>
											<rect
												width='20'
												height='14'
												x='2'
												y='5'
												rx='2'
											/>
											<path d='M2 10h20' />
										</svg>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>
											TEST
										</div>
										<p className='text-xs text-muted-foreground'>
											TEST
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											TEST
										</CardTitle>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='h-4 w-4 text-muted-foreground'
										>
											<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
										</svg>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>
											TEST
										</div>
										<p className='text-xs text-muted-foreground'>
											TEST
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
										<CardTitle className='text-sm font-medium'>
											Membros
										</CardTitle>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='h-4 w-4 text-muted-foreground'
										>
											<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
											<circle cx='9' cy='7' r='4' />
											<path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
										</svg>
									</CardHeader>
									<CardContent>
										<div className='text-2xl font-bold'>
											28
										</div>
										<p className='text-xs text-muted-foreground'>
											+180.1% from last month
										</p>
									</CardContent>
								</Card>
							</div>
							<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-8'>
								<Card className='col-span-4'>
									<CardHeader>
										<CardTitle>Projetos</CardTitle>
										<CardDescription>
											Estes projetos receberam mais
											tickets nos últimos 30 dias.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<RecentSales />
									</CardContent>
								</Card>
								<Card className='col-span-4'>
									<CardHeader>
										<CardTitle>TEST</CardTitle>
										<CardDescription>TEST</CardDescription>
									</CardHeader>
									<CardContent>
										<RecentSales />
									</CardContent>
								</Card>
							</div>
						</TabsContent>
						<TabsContent value='analytics' className='space-y-4'>
							<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
								<Card className='col-span-7'>
									<CardHeader>
										<CardTitle>Analytics</CardTitle>
									</CardHeader>
									<CardContent className='pl-2'>
										<Overview />
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</Card>
	);
}
