'use client';

import { priorities, statuses, types } from '@/content/constants';
import { createTicket } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { Link as LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { InputFile } from '@/components/input-file';
import { ticketIS } from '@/content/initial-states';
import { Icons } from '../ui/icons';

interface NewTicketFormProps {
    projects: {
        value: string;
        label: string;
    }[];
}

export const NewTicketForm = ({ projects }: NewTicketFormProps) => {
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);
    const [formState, formAction, isPending] = useActionState(
        createTicket,
        ticketIS
    );

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Ticket created successfully!');
            ref.current?.reset();

            router.replace('/tickets');
        }

        if (message === 'api error') {
            toast.error('Error while creating ticket!');
        }

        if (message === 'unknown error') {
            toast.error('Unknown error!');
        }
    }, [formState, message, router]);

    return (
        <form action={formAction} ref={ref}>
            <CardContent className='flex flex-col gap-6 lg:flex-row'>
                <section className='flex w-full flex-col gap-6'>
                    <div className='grid gap-2'>
                        <Label htmlFor='subject'>Título</Label>
                        <Input
                            name='title'
                            id='subject'
                            placeholder='Preciso de ajuda com...'
                            className={cn(errors.title && 'border-red-400')}
                        />
                    </div>
                    <div className='flex h-full flex-col gap-2'>
                        <Label htmlFor='description'>Descrição</Label>
                        <Textarea
                            name='description'
                            id='description'
                            className={cn(
                                'h-full',
                                errors.description && 'border-red-400'
                            )}
                            placeholder='Insira todas as informações necessárias para que possamos te ajudar.'
                        />
                    </div>
                </section>
                <section className='flex w-full flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='type'>Tipo</Label>
                            <Select name='type'>
                                <SelectTrigger
                                    id='type'
                                    className={cn(
                                        'truncate lg:w-full',
                                        errors.type && 'border-red-400'
                                    )}
                                >
                                    <SelectValue placeholder='Select the type' />
                                </SelectTrigger>
                                <SelectContent>
                                    {types.map((type, key) => {
                                        return (
                                            <SelectItem
                                                key={key}
                                                value={type.value}
                                            >
                                                {type.label}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='grid gap-2'>
                            <Label htmlFor='priority'>Prioridade</Label>
                            <Select name='priority'>
                                <SelectTrigger
                                    id='priority'
                                    className={cn(
                                        'truncate lg:w-full',
                                        errors.priority && 'border-red-400'
                                    )}
                                >
                                    <SelectValue placeholder='Select the priority' />
                                </SelectTrigger>
                                <SelectContent>
                                    {priorities.map((priority, key) => {
                                        return (
                                            <SelectItem
                                                key={key}
                                                value={priority.value}
                                            >
                                                {priority.label}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 lg:grid-cols-1'>
                        <div className='grid gap-2'>
                            <Label htmlFor='project'>Projeto</Label>
                            <Combobox
                                options={projects}
                                className={cn(
                                    errors.project && 'border-red-400'
                                )}
                                placeholderText='Select the project'
                                searchText='Pesquise'
                                name='project'
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='status'>Status</Label>
                            <Select
                                name='priority'
                                defaultValue='na fila'
                                disabled
                            >
                                <SelectTrigger
                                    id='status'
                                    className={cn(
                                        'truncate lg:w-full',
                                        errors.status && 'border-red-400'
                                    )}
                                >
                                    <SelectValue placeholder='Prioridade' />
                                </SelectTrigger>
                                <SelectContent>
                                    {statuses.map((status, key) => {
                                        return (
                                            <SelectItem
                                                key={key}
                                                value={status.value}
                                            >
                                                {status.label}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <InputFile name='file' label='Screenshot' />
                    <div className='grid gap-2'>
                        <div className='flex items-center gap-2'>
                            <Label htmlFor='link'>Link</Label>
                            <LinkIcon className='h-3 w-3' />
                        </div>
                        <Input
                            id='link'
                            name='link'
                            placeholder='Insert a reproducible link'
                        />
                    </div>
                </section>
            </CardContent>
            <CardFooter className='justify-between space-x-2'>
                <Button type='reset' variant='ghost'>
                    Cancel
                </Button>
                <Button type='submit' className='w-24'>
                    {isPending && (
                        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                    )}
                    Submit
                </Button>
            </CardFooter>
        </form>
    );
};
