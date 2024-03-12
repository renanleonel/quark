// 'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
// import { usePathname } from 'next/navigation';
import User from './user';

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // const pathname = usePathname();

    return (
        <div
            className={cn(
                'lg:px-0- fixed left-0 top-0 z-10 flex h-16 w-full items-center bg-background px-4 py-4 lg:static'
                // pathname === '/create-organization' && 'hidden'
            )}
        >
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
            <div className='ml-auto flex items-center space-x-4'>
                <User
                    icon='https://github.com/aeduojioiujaejiolaejiolea.png'
                    alt='@shadcn'
                    fallback=' '
                />
            </div>
        </div>
    );
};

export default Navbar;
