'use client';

import { Ticket } from '@/types';
import { Row } from '@tanstack/react-table';
import { useSession } from 'next-auth/react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { SuperLink } from '@/components/super-link';

import { DeleteTicket } from './delete-ticket';
import { ChangeTicketStatus } from './change-ticket-status';

interface DataTableRowActionsProps {
    row: Row<Ticket>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
    const ticket = row.original;

    const session = useSession();
    const role = session.data?.user.role;

    const hasPermissions =
        role === 'ADMIN' || ticket.createdBy === session.data?.user.id;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    className='data-[state=open]:bg-muted flex h-8 w-8 p-0'
                >
                    <DotsHorizontalIcon className='h-4 w-4' />
                    <span className='sr-only'>Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[160px]'>
                {hasPermissions && (
                    <div>
                        <SuperLink href={`/edit/${ticket.id}`}>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                        </SuperLink>

                        <ChangeTicketStatus selected={ticket.status}>
                            <DropdownMenuItem>Change status</DropdownMenuItem>
                        </ChangeTicketStatus>
                        <DropdownMenuSeparator />
                        <DeleteTicket ticket={ticket}>
                            <h1 className='hover:bg-accent focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50'>
                                Delete
                            </h1>
                        </DeleteTicket>
                    </div>
                )}
                {!hasPermissions && (
                    <div className='pointer-events-none opacity-30'>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Change status</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
