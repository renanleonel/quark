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

import { newTicket } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { editInitialState } from '@/content/initial-states';
import { Ticket } from '@/types';

interface EditFormProps {
    ticket: Ticket;
}

const EditForm = ({ ticket }: EditFormProps) => {
    const [formState, formAction] = useFormState(newTicket, editInitialState);

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
                        />
                    </div>
                    <div className='flex h-full flex-col gap-2'>
                        <Label htmlFor='description'>Descrição</Label>
                        <Textarea
                            name='description'
                            id='description'
                            className='h-full'
                            placeholder='Insira todas as informações necessárias para que possamos te ajudar.'
                        />
                    </div>
                </section>

                <section className='flex w-full flex-col gap-6'>
                    {/* <div className='grid gap-2'>
                        <Label htmlFor='nome'>Seu nome</Label>
                        <Input id='nome' placeholder='Nome' name='name' />
                    </div> */}

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='security-level'>Tipo</Label>
                            <Select defaultValue='1' name='type'>
                                <SelectTrigger
                                    id='security-level'
                                    className='line-clamp-1 w-[160px] truncate lg:w-full'
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
                            <Label htmlFor='security-level'>Prioridade</Label>
                            <Select name='priority' defaultValue='3'>
                                <SelectTrigger
                                    id='security-level'
                                    className='line-clamp-1 w-[160px] truncate lg:w-full'
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
                            <Label htmlFor='security-level'>Aplicação</Label>
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
                            />
                        </div>
                        <InputFile name='file' label='Screenshot' />
                    </div>
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
                <Link href='/tickets'>
                    <Button variant='ghost'>Cancelar</Button>
                </Link>
                <SubmitButton text='Enviar' className='w-24' />
            </CardFooter>
        </form>
    );
};

export default EditForm;
