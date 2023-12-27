'use client';

import Combobox from '@/components/combobox';
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
import { Link } from 'lucide-react';
import SubmitButton from '../submit-button';

import { support } from '@/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
	message: '',
	errors: {
		name: '',
		type: '',
		urgency: '',
		application: '',
		title: '',
		description: '',
		file: '',
		link: '',
		unknown: '',
	},
};

const SupportForm = () => {
	const [formState, formAction] = useFormState(support, initialState);

	return (
		<form action={formAction}>
			<CardContent className='flex flex-col lg:flex-row gap-6'>
				<section className='flex flex-col gap-6 w-full'>
					<div className='grid gap-2'>
						<Label htmlFor='nome'>Seu nome</Label>
						<Input id='nome' placeholder='Nome' name='name' />
					</div>

					<div className='grid grid-cols-2 gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='security-level'>Tipo</Label>
							<Select defaultValue='1' name='type'>
								<SelectTrigger
									id='security-level'
									className='line-clamp-1 w-[160px] lg:w-full truncate'
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
							<Label htmlFor='security-level'>Urgência</Label>
							<Select name='urgency' defaultValue='3'>
								<SelectTrigger
									id='security-level'
									className='line-clamp-1 w-[160px] lg:w-full truncate'
								>
									<SelectValue placeholder='Urgência' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='1'>Alta</SelectItem>
									<SelectItem value='2'>Média</SelectItem>
									<SelectItem value='3'>Baixa</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className='grid grid-cols-2 lg:grid-cols-1 gap-4'>
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
								name='application'
							/>
						</div>
						<InputFile name='file' label='Screenshot' />
					</div>
					<div className='grid gap-2'>
						<div className='flex gap-2 items-center'>
							<Label htmlFor='link'>Link</Label>
							<Link className='h-3 w-3' />
						</div>
						<Input id='link' name='link' placeholder='Link' />
					</div>
				</section>

				<section className='flex flex-col gap-6 w-full'>
					<div className='grid gap-2'>
						<Label htmlFor='subject'>Título</Label>
						<Input
							name='title'
							id='subject'
							placeholder='Preciso de ajuda com...'
						/>
					</div>
					<div className='flex flex-col gap-2 h-full'>
						<Label htmlFor='description'>Descrição</Label>
						<Textarea
							name='description'
							id='description'
							className='h-full'
							placeholder='Insira todas as informações necessárias para que possamos te ajudar.'
						/>
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

export default SupportForm;
