'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { roles } from '@/content/constants';

interface RolesProps {
    role: string;
}

const Roles = ({ role }: RolesProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(role);

    const handleChangeRole = (role: string) => {
        setValue(role);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    aria-expanded={open}
                    className='w-full justify-between md:ml-auto md:w-fit'
                >
                    {value
                        ? roles.find((role) => role.value === value)?.name
                        : 'Select framework...'}
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
                                                            role.value
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

export default Roles;
