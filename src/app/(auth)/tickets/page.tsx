import { Metadata } from 'next';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { tasks } from './data/tasks';

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
		<div className='border rounded-md hidden flex-col space-y-8 p-8 lg:flex'>
			<div className='flex items-center justify-between space-y-2'>
				<div>
					<h2 className='text-2xl font-bold tracking-tight'>
						Tickets
					</h2>
					<p className='text-muted-foreground'>
						Esses são os tickets abertos.
					</p>
				</div>
			</div>
			<DataTable data={tasks} columns={columns} />
		</div>
	);
};

export default Tickets;
