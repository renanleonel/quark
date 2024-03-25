// 'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
// import { usePathname } from 'next/navigation';
import User from './user';
import { auth } from '@/auth';

const Navbar = async ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {
    // const pathname = usePathname();
    const session = await auth();
    if (!session) return;

    const hasOrganization = session.user.organization !== null;

    return (
        <div
            className={cn(
                'fixed left-0 top-0 z-10 flex h-16 w-full items-center bg-background px-4 py-4 lg:static lg:px-0'
                // pathname === '/create-organization' && 'hidden'
            )}
        >
            {hasOrganization && (
                <nav
                    className={cn(
                        'flex items-center space-x-4 lg:space-x-6',
                        className
                    )}
                    {...props}
                >
                    <Link
                        href='/tickets'
                        className={cn(
                            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline'
                            // pathname === '/tickets' && 'text-primary'
                        )}
                    >
                        Tickets
                    </Link>
                    <Link
                        href='/new-ticket'
                        className={cn(
                            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline'
                            // pathname === '/support' && 'text-primary'
                        )}
                    >
                        New ticket
                    </Link>
                    <Link
                        href='/organization'
                        className={cn(
                            'text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline'
                            // pathname === '/organization' && 'text-primary'
                        )}
                    >
                        Organização
                    </Link>
                </nav>
            )}

            <div className='ml-auto flex items-center space-x-4'>
                <User icon={session.user.image} alt='@shadcn' fallback=' ' />
            </div>
        </div>
    );
};

export default Navbar;
