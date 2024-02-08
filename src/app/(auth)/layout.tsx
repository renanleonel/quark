import Navbar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='min-h-screen flex items-center justify-center'>
            <div className='fixed top-6 text-white w-full lg:w-[1000px] flex flex-col gap-4 h-full px-4 md:px-8'>
                <Navbar />
                {children}
            </div>
        </main>
    );
}
