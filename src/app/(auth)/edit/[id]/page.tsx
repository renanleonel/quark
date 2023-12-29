import { Metadata } from 'next';

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import EditForm from '@/components/form/edit/edit-form';
import { getTicket } from '@/lib/actions';

export const metadata: Metadata = {
	title: 'Edit',
	description: 'Edit ticket',
};

const Edit = async ({ params }: { params: { id: string } }) => {
	const ticket = await getTicket(params.id);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Edit</CardTitle>
				<CardDescription>{params.id}</CardDescription>
			</CardHeader>
			<Separator className='mb-6' />
			<EditForm ticket={ticket} />
		</Card>
	);
};

export default Edit;
