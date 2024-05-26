'use client';

import { usePathname } from 'next/navigation';
import { SuperLink } from '@/components/super-link';

import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname();

    return (
        <nav
            className={cn(
                'flex flex-wrap space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
                className
            )}
            {...props}
        >
            {items.map((item) => (
                <SuperLink
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        pathname === item.href
                            ? 'bg-muted hover:bg-muted'
                            : 'hover:bg-transparent hover:underline',
                        'justify-start'
                    )}
                >
                    {item.title}
                </SuperLink>
            ))}
        </nav>
    );
}
