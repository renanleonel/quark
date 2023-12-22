import Navbar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='h-screen flex items-center justify-center'>
			<div className='text-white w-[400px] lg:w-[1000px] flex flex-col gap-4 h-full'>
				<Navbar />
				{children}
			</div>
		</main>
	);
}
