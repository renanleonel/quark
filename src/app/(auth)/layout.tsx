import { Navbar } from '@/components/navbar';
import { verifyAuth } from '@/lib/actions';

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await verifyAuth();

    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='flex min-h-screen w-full flex-col gap-4 px-4 text-white md:px-8 lg:w-[1000px]'>
                <Navbar user={user} />
                <div className='mt-20 flex-1 pb-4 lg:mt-0'>{children}</div>
            </div>
        </main>
    );
}
