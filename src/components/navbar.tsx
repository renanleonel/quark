'use client';

import { User } from './user';
import { cn } from '@/lib/utils';
import { User as TUser } from '@/types';
import { usePathname } from 'next/navigation';
import { SuperLink } from '@/components/super-link';

interface NavbarProps {
    className?: string;
    user: TUser;
}

export const Navbar = ({ className, user, ...props }: NavbarProps) => {
    const pathname = usePathname();
    const hasOrganization = user.organization !== null;

    return (
        <div
            className={cn(
                'bg-background fixed top-0 left-0 z-10 flex h-16 w-full items-center px-4 py-4 lg:static lg:px-0',
                pathname === '/create-organization' && 'hidden'
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
                    <SuperLink
                        href='/tickets'
                        className={cn(
                            'text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:underline',
                            pathname === '/tickets' && 'text-primary'
                        )}
                    >
                        Tickets
                    </SuperLink>
                    <SuperLink
                        href='/new-ticket'
                        className={cn(
                            'text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:underline',
                            pathname === '/support' && 'text-primary'
                        )}
                    >
                        New ticket
                    </SuperLink>
                    <SuperLink
                        href='/organization'
                        className={cn(
                            'text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:underline',
                            pathname === '/organization' && 'text-primary'
                        )}
                    >
                        Organização
                    </SuperLink>
                </nav>
            )}

            <div className='ml-auto flex items-center space-x-4'>
                <User
                    icon={user.image}
                    alt='@shadcn'
                    fallback=''
                    username={user.name}
                />
            </div>
        </div>
    );
};
