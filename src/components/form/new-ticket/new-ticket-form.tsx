'use client';

import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';
import { useFormState } from 'react-dom';
import { newTicket } from '@/lib/actions';
import { newTicketInitialState } from '@/content/initial-states';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Combobox from '@/components/ui/combobox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CardContent, CardFooter } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { InputFile } from '@/components/input-file';
import SubmitButton from '@/components/form/submit-button';

const NewTicketForm = () => {
    const [formState, formAction] = useFormState(
        newTicket,
        newTicketInitialState
    );

    const session = useSession();
    const name = session.data?.user?.name;

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
                            className={cn(
                                formState.errors.title && 'border-red-400'
                            )}
                        />
                    </div>
                    <div className='flex h-full flex-col gap-2'>
                        <Label htmlFor='description'>Descrição</Label>
                        <Textarea
                            name='description'
                            id='description'
                            className={cn(
                                'h-full',
                                formState.errors.description && 'border-red-400'
                            )}
                            placeholder='Insira todas as informações necessárias para que possamos te ajudar.'
                        />
                    </div>
                </section>
                <section className='flex w-full flex-col gap-6'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='security-level'>Tipo</Label>
                            <Select defaultValue='3' name='type'>
                                <SelectTrigger
                                    id='security-level'
                                    className={cn(
                                        'line-clamp-1 w-[160px] truncate lg:w-full',
                                        formState.errors.type &&
                                            'border-red-400'
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
                            <Label htmlFor='security-level'>Prioridade</Label>
                            <Select name='priority' defaultValue='3'>
                                <SelectTrigger
                                    id='security-level'
                                    className={cn(
                                        'line-clamp-1 w-[160px] truncate lg:w-full',
                                        formState.errors.priority &&
                                            'border-red-400'
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
                            <Label htmlFor='security-level'>Projeto</Label>
                            <Combobox
                                options={[
                                    { value: '1', label: 'Site' },
                                    {
                                        value: '2',
                                        label: 'App',
                                    },
                                ]}
                                className={cn(
                                    formState.errors.project && 'border-red-400'
                                )}
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
                            <Link className='h-3 w-3' />
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
