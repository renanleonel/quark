import Navbar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='flex min-h-screen w-full flex-col gap-4 px-4 text-white md:px-8 lg:w-[1000px]'>
                <Navbar />
                <div className='mt-20 flex-1 lg:mt-0'>{children}</div>
            </div>
        </main>
    );
}
