import Navbar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='min-h-screen flex items-center justify-center'>
            <div className='text-white w-full lg:w-[1000px] flex flex-col gap-4 px-4 md:px-8 min-h-screen'>
                <Navbar />
                <div className='mt-20'>{children}</div>
            </div>
        </main>
    );
}
