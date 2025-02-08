'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import { deleteOrganization } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useActionState, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { DrawerDescription } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { deleteOrganizationIS } from '@/content/initial-states';
import { Icons } from '../ui/icons';

export function DrawerDeleteOrganization() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLFormElement>(null);

    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [formState, formAction, isPending] = useActionState(
        deleteOrganization,
        deleteOrganizationIS
    );

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Organization deleted successfully!');
            ref.current?.reset();
        }

        if (message === 'unknown error') {
            toast.error('An unknown error occurred. Please try again.');
        }
    }, [formState, message]);

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant='ghost'
                        className='w-full text-red-800 hover:bg-red-800 hover:text-white'
                    >
                        Delete organization
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[525px]'>
                    <DialogHeader>
                        <DialogTitle>Delete organization</DialogTitle>
                        <DialogDescription className='space-y-4 pt-4'>
                            <div>
                                You’re about to delete your organization. This
                                will remove all your projects and data.
                            </div>
                            <div>
                                To confirm this action, type the organization
                                name and click the confirm button.
                            </div>
                            <div>
                                You will be logged out after deleting. This
                                action is irreversible.
                            </div>
                            <form action={formAction} className='space-y-4'>
                                <div className='space-y-2'>
                                    <Input
                                        name='name'
                                        placeholder='Organização'
                                        className={cn(
                                            errors.name && 'border-red-400'
                                        )}
                                    />
                                    <p className='text-xs text-red-400'>
                                        {errors.name}
                                    </p>
                                </div>
                                <div className='flex w-full gap-4 pt-4'>
                                    <DialogClose asChild>
                                        <Button
                                            variant='outline'
                                            className='w-full'
                                            type='button'
                                        >
                                            Cancel
                                        </Button>
                                    </DialogClose>

                                    <Button
                                        type='submit'
                                        variant='destructive'
                                        className='w-full'
                                    >
                                        {isPending && (
                                            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                                        )}
                                        Confirm
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant='ghost'
                    className='w-full text-red-800 hover:bg-red-800 hover:text-white'
                >
                    Delete organization
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>Delete organization</DrawerTitle>
                    <DrawerDescription className='space-y-4 pt-4'>
                        <div>
                            You’re about to delete your organization. This will
                            remove all your projects and data.
                        </div>
                        <div>
                            To confirm this action, type the organization name
                            and click the confirm button.
                        </div>
                        <div>
                            You will be logged out after deleting. This action
                            is irreversible.
                        </div>
                        <form action={formAction} className='space-y-4'>
                            <div className='space-y-2'>
                                <Input
                                    name='name'
                                    placeholder='Organização'
                                    className={cn(
                                        errors.name && 'border-red-400'
                                    )}
                                />
                                <p className='text-xs text-red-400'>
                                    {errors.name}
                                </p>
                            </div>
                            <div className='flex w-full gap-4 pt-4'>
                                <DialogClose asChild>
                                    <Button
                                        variant='outline'
                                        className='w-full'
                                        type='button'
                                    >
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button
                                    type='submit'
                                    variant='destructive'
                                    className='w-full'
                                >
                                    {isPending && (
                                        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                                    )}
                                    Confirm
                                </Button>
                            </div>
                        </form>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}
