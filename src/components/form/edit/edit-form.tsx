'use client';

import Combobox from '@/components/ui/combobox';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { InputFile } from '@/components/input-file';
import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import SubmitButton from '@/components/form/submit-button';

import { cn } from '@/lib/utils';
import { newTicket } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { ticketInitialState } from '@/content/initial-states';

const EditForm = () => {
    const [formState, formAction] = useFormState(newTicket, ticketInitialState);

    const { errors } = formState;

    return (
        <form action={formAction}>
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
                            <Select defaultValue='1' name='type'>
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
                                    <SelectItem value='1'>Bug</SelectItem>
                                    <SelectItem value='2'>Sugestão</SelectItem>
                                    <SelectItem value='3'>Outro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className='grid gap-2'>
                            <Label htmlFor='priority'>Prioridade</Label>
                            <Select name='priority' defaultValue='3'>
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
                                    <SelectItem value='1'>Alta</SelectItem>
                                    <SelectItem value='2'>Média</SelectItem>
                                    <SelectItem value='3'>Baixa</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 lg:grid-cols-1'>
                        <div className='grid gap-2'>
                            <Label htmlFor='project'>Project</Label>
                            <Combobox
                                options={[
                                    { value: '1', label: 'Site' },
                                    {
                                        value: '2',
                                        label: 'App',
                                    },
                                ]}
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
                            <Select name='priority' defaultValue='1' disabled>
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
                                    <SelectItem value='1'>Na fila</SelectItem>
                                    <SelectItem value='2'>
                                        Em análise
                                    </SelectItem>
                                    <SelectItem value='3'>
                                        Em progresso
                                    </SelectItem>
                                    <SelectItem value='4'>Concluído</SelectItem>
                                    <SelectItem value='5'>Cancelado</SelectItem>
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
                        {errors.file && (
                            <span className='text-xs text-red-500'>
                                {errors.file}
                            </span>
                        )}
                    </div>
                </section>
            </CardContent>
            <CardFooter className='justify-between space-x-2'>
                <Link href='/tickets'>
                    <Button variant='ghost'>Cancelar</Button>
                </Link>
                <SubmitButton text='Enviar' className='w-24' />
            </CardFooter>
        </form>
    );
};

export default EditForm;
