'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { taskSchema } from '@/types/schema';
import { useRouter } from 'next/navigation';
import { DeleteTicket } from '@/app/(auth)/tickets/components/delete-ticket';

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function DataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const router = useRouter();
	const task = taskSchema.parse(row.original);

	const handleEdit = () => {
		router.push(`/edit/${task.id}`);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
				>
					<DotsHorizontalIcon className='h-4 w-4' />
					<span className='sr-only'>Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[160px]'>
				<DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
				<DeleteTicket />
				<DropdownMenuSeparator />
				<DropdownMenuItem>Alterar status</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
