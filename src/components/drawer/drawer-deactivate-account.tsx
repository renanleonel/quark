'use client';

import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';

import * as React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { DrawerDescription } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Input } from '../ui/input';
import { useFormState } from 'react-dom';
import { deactivateAccount } from '@/lib/actions';
import { deactivateAccountInitialState } from '@/content/initial-states';
import { cn } from '@/lib/utils';
import { DialogClose } from '@radix-ui/react-dialog';
import SubmitButton from '../form/submit-button';

export function DrawerDeactivateAcount() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [formState, formAction] = useFormState(
        deactivateAccount,
        deactivateAccountInitialState
    );

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant='ghost'
                        className='w-full text-red-800 hover:bg-red-800 hover:text-white'
                    >
                        Deactivate account
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[525px]'>
                    <DialogHeader>
                        <DialogTitle>Deactivate account</DialogTitle>
                        <DialogDescription className='space-y-4 pt-4'>
                            <div>
                                You’re about to start the process of
                                deactivating your Quark account.
                            </div>
                            <div>
                                To confirm this action, type the email
                                associated with your account and click the
                                confirm button.
                            </div>
                            <div>This action is irreversible.</div>
                            <form action={formAction} className='space-y-4'>
                                <div className='space-y-2'>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        className={cn(
                                            formState?.errors.email &&
                                                'border-red-400'
                                        )}
                                    />
                                    <p className='text-xs text-red-400'>
                                        {formState?.errors.email}
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
                                    <SubmitButton
                                        text='Confirm'
                                        variant='destructive'
                                        className='w-full'
                                    />
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
                    Deactivate account
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>Deactivate account</DrawerTitle>
                    <DrawerDescription className='space-y-4 pt-4'>
                        <div>
                            You’re about to start the process of deactivating
                            your Quark account.
                        </div>
                        <div>
                            To confirm this action, type the email associated
                            with your account and click the confirm button.
                        </div>
                        <div>This action is irreversible.</div>
                        <form action={formAction} className='space-y-4'>
                            <div className='space-y-2'>
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    className={cn(
                                        formState?.errors.email &&
                                            'border-red-400'
                                    )}
                                />
                                <p className='text-xs text-red-400'>
                                    {formState?.errors.email}
                                </p>
                            </div>
                            <div className='flex w-full gap-4 pt-4'>
                                <DrawerClose asChild>
                                    <Button
                                        variant='outline'
                                        className='w-full'
                                        type='button'
                                    >
                                        Cancel
                                    </Button>
                                </DrawerClose>
                                <SubmitButton
                                    text='Confirm'
                                    variant='destructive'
                                    className='w-full'
                                />
                            </div>
                        </form>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}
