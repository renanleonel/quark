'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import {
    Command,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandInput,
} from '@/components/ui/command';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import {
    AlertDialog,
    AlertDialogTitle,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogDescription,
} from '@/components/ui/alert-dialog';

import { roles } from '@/content/constants';
import { Button } from '@/components/ui/button';
import { updateMember } from '@/lib/actions';
import { toast } from 'sonner';
import { Member, Role } from '@/types';

interface RolesProps {
    member: Member;
}

export const Roles = ({ member }: RolesProps) => {
    const { role } = member;

    const [open, setOpen] = useState(false);

    async function handleChangeRole(role: Role) {
        const payload = {
            ...member,
            role,
        };

        const status = await updateMember(member.id, payload);

        if (status === 200) {
            toast.success('Role updated successfully!');
        }

        if (status === 500) {
            toast.error('Error updating role.');
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    aria-expanded={open}
                    className='w-full justify-between md:ml-auto md:w-fit'
                >
                    {roles.find((r) => r.value === role)?.name || 'Select role'}

                    <ChevronDownIcon className='ml-2 h-4 w-4 text-muted-foreground' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0' align='end'>
                <Command>
                    <CommandInput placeholder='Select new role...' />
                    <CommandList>
                        <CommandEmpty>No roles found.</CommandEmpty>
                        <CommandGroup>
                            {roles.map((role, key) => {
                                return (
                                    <AlertDialog key={key}>
                                        <AlertDialogTrigger className='w-full'>
                                            <CommandItem className='teamaspace-y-1 flex cursor-pointer flex-col items-start px-4 py-2'>
                                                <p>{role.name}</p>
                                                <p className='text-sm text-muted-foreground'>
                                                    {role.description}
                                                </p>
                                            </CommandItem>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Are you absolutely sure?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    {role.permissions}
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                                >
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => {
                                                        handleChangeRole(
                                                            role.value as Role
                                                        );
                                                        setOpen(false);
                                                    }}
                                                >
                                                    Confirm
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
