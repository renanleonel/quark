import SignUpForm from '@/components/form/sign-up/sign-up-form';

const Info = () => {
	// link opened via email after confirming sign up
	return (
		<main className='min-h-screen flex items-center justify-center'>
			<div className='text-white w-[350px] flex flex-col gap-4'>
				<div className='flex flex-col gap-2 text-center'>
					<h1 className='text-2xl font-semibold'>Bem-vindo(a)!</h1>
					<p className='text-sm text-muted-foreground'>
						Insira suas informações
					</p>
				</div>
				<SignUpForm />
			</div>
		</main>
	);
};

export default Info;
