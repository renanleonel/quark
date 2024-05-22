'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';
import { newTicket } from '@/lib/actions';
import { Link as LinkIcon } from 'lucide-react';
import { priorities, projects, statuses, types } from '@/content/constants';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Combobox from '@/components/ui/combobox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CardContent, CardFooter } from '@/components/ui/card';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { InputFile } from '@/components/input-file';
import SubmitButton from '@/components/form/submit-button';
import { ticketIS } from '@/content/initial-states';

const NewTicketForm = () => {
    const [formState, formAction] = useFormState(newTicket, ticketIS);

    const { errors, message } = formState;
    const ref = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (message === 'success') {
            toast.success('Created!');

            ref.current?.reset();
        }

        if (message === 'unknown error') {
            toast.error('Error!');
        }
    }, [message, formState]);

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
                            <Select defaultValue='outro' name='type'>
                                <SelectTrigger
                                    id='type'
                                    className={cn(
                                        'line-clamp-1 truncate lg:w-full',
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
                            <Select name='priority' defaultValue='baixa'>
                                <SelectTrigger
                                    id='priority'
                                    className={cn(
                                        'line-clamp-1 truncate lg:w-full',
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
                            <Label htmlFor='project'>Projeto</Label>
                            <Combobox
                                options={projects}
                                className={cn(
                                    errors.project && 'border-red-400'
                                )}
                                placeholderText='Selecione'
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
                                        'line-clamp-1 truncate lg:w-full',
                                        errors.priority && 'border-red-400'
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
                        <Input id='link' name='link' placeholder='Link' />
                    </div>
                </section>
            </CardContent>
            <CardFooter className='justify-between space-x-2'>
                <Button type='reset' variant='ghost'>
                    Cancelar
                </Button>
                <SubmitButton text='Enviar' className='w-24' />
            </CardFooter>
        </form>
    );
};

export default NewTicketForm;
