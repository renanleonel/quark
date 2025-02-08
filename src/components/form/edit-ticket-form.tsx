'use client';

import { priorities, statuses, types } from '@/content/constants';
import { ticketIS } from '@/content/initial-states';
import { editTicket } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { Ticket } from '@/types';
import { Link as LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { InputFile } from '@/components/input-file';
import { SuperLink } from '@/components/super-link';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Icons } from '../ui/icons';

interface EditFormProps {
    ticket: Ticket;
    projects: {
        value: string;
        label: string;
    }[];
}

export const EditTicketForm = ({ ticket, projects }: EditFormProps) => {
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const action = editTicket.bind(null, ticket.id as string);
    const [formState, formAction, isPending] = useActionState(action, ticketIS);

    const { errors, message } = formState;

    useEffect(() => {
        if (message === 'success') {
            toast.success('Ticket updated successfully!');
            ref.current?.reset();
            router.replace('/tickets');
        }

        if (message === 'unknown error') {
            toast.error('Error updating ticket, please try again.');
        }
    }, [message, formState, router]);

    return (
        <form action={formAction}>
            <CardContent className='flex flex-col gap-6 lg:flex-row'>
                <section className='flex w-full flex-col gap-6'>
                    <div className='grid gap-2'>
                        <Label htmlFor='subject'>Título</Label>
                        <Input
                            name='title'
                            id='subject'
                            defaultValue={ticket.title}
                            placeholder='Preciso de ajuda com...'
                            className={cn(errors.title && 'border-red-400')}
                        />
                    </div>
                    <div className='flex h-full flex-col gap-2'>
                        <Label htmlFor='description'>Descrição</Label>
                        <Textarea
                            name='description'
                            id='description'
                            defaultValue={ticket.description}
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
                            <Select defaultValue={ticket.type} name='type'>
                                <SelectTrigger
                                    id='type'
                                    className={cn(
                                        'truncate lg:w-full',
                                        errors.type && 'border-red-400'
                                    )}
                                >
                                    <SelectValue placeholder='Tipo' />
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
                            <Select
                                name='priority'
                                defaultValue={ticket.priority}
                            >
                                <SelectTrigger
                                    id='priority'
                                    className={cn(
                                        'truncate lg:w-full',
                                        errors.priority && 'border-red-400'
                                    )}
                                >
                                    <SelectValue placeholder='Prioridade' />
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
                            <Label htmlFor='project'>Project</Label>
                            <Combobox
                                options={projects}
                                defaultValue={ticket.project}
                                placeholderText='Selecione'
                                searchText='Pesquise'
                                name='project'
                                className={cn(
                                    errors.project && 'border-red-400'
                                )}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='status'>Status</Label>
                            <Select
                                name='status'
                                value={ticket.status}
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
                                    <input
                                        type='hidden'
                                        name='status'
                                        value={ticket.status}
                                    />
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
                            placeholder='Link'
                            defaultValue={ticket.link}
                        />
                        {errors.file && (
                            <span className='text-xs text-red-400'>
                                {errors.file}
                            </span>
                        )}
                    </div>
                </section>
            </CardContent>
            <CardFooter className='justify-between space-x-2'>
                <SuperLink href='/tickets'>
                    <Button variant='ghost'>Cancelar</Button>
                </SuperLink>

                <Button type='submit' className='w-24'>
                    {isPending && (
                        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
                    )}
                    Enviar
                </Button>
            </CardFooter>
        </form>
    );
};
