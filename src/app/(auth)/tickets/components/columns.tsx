'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { Ticket } from '@/types';
import { types, priorities, projects, statuses } from '@/content/constants';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Ticket>[] = [
    // {
    //     id: 'select',
    //     enableSorting: false,
    //     enableHiding: false,
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={table.getIsAllPageRowsSelected()}
    //             onCheckedChange={(value) =>
    //                 table.toggleAllPageRowsSelected(!!value)
    //             }
    //             aria-label='Select all'
    //             className='translate-y-[2px]'
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label='Select row'
    //             className='translate-y-[2px]'
    //         />
    //     ),
    // },
    {
        accessorKey: 'title',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Título' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex space-x-2'>
                    <span className='w-[320px] truncate font-medium'>
                        {row.getValue('title')}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'project',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Projeto' />
        ),
        cell: ({ row }) => {
            const project = projects.find(
                (project) => project.value === row.original.project
            );

            if (!project) {
                return null;
            }

            return (
                <div className='flex space-x-2'>
                    <span className='max-w-[400px] truncate font-medium'>
                        {project.label}
                    </span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: 'type',
        enableSorting: false,
        enableHiding: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tipo' />
        ),
        cell: ({ row }) => {
            const type = types.find((type) => type.value === row.original.type);

            return (
                <div className='flex justify-center space-x-2'>
                    {type && <Badge variant='outline'>{type.label}</Badge>}
                </div>
            );
        },
    },

    {
        accessorKey: 'priority',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Prioridade' />
        ),
        cell: ({ row }) => {
            const priority = priorities.find(
                (priority) => priority.value === row.getValue('priority')
            );

            if (!priority) {
                return null;
            }

            return (
                <div className='flex items-center'>
                    {priority.icon && (
                        <priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
                    )}
                    <span>{priority.label}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
            const status = statuses.find(
                (status) => status.value === row.getValue('status')
            );

            if (!status) {
                return null;
            }

            return (
                <div className='flex  items-center'>
                    {status.icon && (
                        <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
                    )}
                    <span>{status.label}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
];
