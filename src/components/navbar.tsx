import Link from 'next/link';

import { cn } from '@/lib/utils';

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
	return (
		<nav
			className={cn(
				'flex items-center space-x-4 lg:space-x-6',
				className
			)}
			{...props}
		>
			<Link
				href='/support'
				className='text-sm font-medium transition-colors hover:text-primary'
			>
				Suporte
			</Link>
			<Link
				href='/tickets'
				className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
			>
				Tickets
			</Link>
		</nav>
	);
};

export default Navbar;
