'use client';

import { signOut } from '@/auth';

interface TestProps {}

const Test = ({}: TestProps) => {
	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}
		>
			<button type='submit'>submit</button>
		</form>
	);
};

export default Test;
