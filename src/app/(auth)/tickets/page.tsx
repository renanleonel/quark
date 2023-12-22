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

export const metadata: Metadata = {
	title: 'Tasks',
	description: 'A task and issue tracker build using Tanstack Table.',
};

async function getTasks() {
	return tasks;
}

interface TicketsProps {}

const Tickets = async ({}: TicketsProps) => {
	const tasks = await getTasks();

	return (
		<Card className='hidden lg:block'>
			<CardHeader>
				<CardTitle>Tickets</CardTitle>
				<CardDescription>Esses são os tickets abertos.</CardDescription>
			</CardHeader>

			<DataTable data={tasks} columns={columns} />
		</Card>
	);
};

export default Tickets;
