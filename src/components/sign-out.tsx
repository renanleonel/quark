import { signout } from '@/lib/actions';

const SignOut = () => {
	return (
		<form className='w-full' action={signout}>
			<button className='w-full text-start'>Sair</button>
		</form>
	);
};

export default SignOut;
