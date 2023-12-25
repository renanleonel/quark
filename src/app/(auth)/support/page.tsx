import { Metadata } from 'next';

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import SupportForm from '@/components/form/support/support-form';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
	title: 'Suporte',
	description: 'Envie um ticket para o suporte',
};

const Support = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Suporte</CardTitle>
				<CardDescription>
					Envie um ticket para a nossa equipe
				</CardDescription>
			</CardHeader>
			<Separator className='mb-6' />

			<SupportForm />
		</Card>
	);
};

export default Support;
