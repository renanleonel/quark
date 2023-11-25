import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Suporte',
	description: 'Envie um ticket para o suporte',
};

const Support = () => {
	return (
		<main className='dark bg-background h-screen flex items-center justify-center'>
			<div className='text-white w-[350px] flex flex-col gap-4'>
				<div className='flex flex-col gap-2 text-center'>
					<h1 className='text-2xl font-semibold'>Entrar</h1>
					<p className='text-sm text-muted-foreground'>
						Digite seu email de acesso
					</p>
				</div>
			</div>
		</main>
	);
};

export default Support;
