'use client';

import { Icons } from '../ui/icons';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button type='submit'>
			{pending && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
			Entrar
		</Button>
	);
};

export default SubmitButton;
