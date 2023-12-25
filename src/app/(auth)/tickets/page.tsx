import { Metadata } from 'next';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { tasks } from './data/tasks';

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
	title: 'Tasks',
	description: 'A task and issue tracker build using Tanstack Table.',
};

async function getTasks() {
	return tasks;
}

const Tickets = async () => {
	const tasks = await getTasks();

	return (
		<Card className='hidden lg:block'>
			<CardHeader>
				<CardTitle>Tickets</CardTitle>
				<CardDescription>Esses são os tickets abertos.</CardDescription>
			</CardHeader>
			<Separator />
			<DataTable data={tasks} columns={columns} />
		</Card>
	);
};

export default Tickets;
