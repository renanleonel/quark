import { Metadata } from 'next';

import Combobox from '@/components/combobox';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
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
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Clock, Link } from 'lucide-react';
import { signOut } from '@/auth';
import Test from '@/components/test';

export const metadata: Metadata = {
	title: 'Suporte',
	description: 'Envie um ticket para o suporte',
};

const Home = () => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Suporte</CardTitle>
					<CardDescription>
						Envie um ticket para a nossa equipe
					</CardDescription>
				</CardHeader>

				{/* <form
					action={async () => {
						await signOut();
					}}
				>
					<Button type='submit'>Sair</Button>
				</form> */}

				<CardContent className='flex flex-col lg:flex-row gap-6'>
					<section className='flex flex-col gap-6 w-full'>
						<div className='grid gap-2'>
							<Label htmlFor='nome'>Seu nome</Label>
							<Input id='nome' placeholder='Nome' />
						</div>

						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='security-level'>Tipo</Label>
								<Select defaultValue='1'>
									<SelectTrigger
										id='security-level'
										className='line-clamp-1 w-[160px] lg:w-full truncate'
									>
										<SelectValue placeholder='Tipo' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='1'>Bug</SelectItem>
										<SelectItem value='2'>
											Sugestão
										</SelectItem>
										<SelectItem value='3'>Outro</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className='grid gap-2'>
								<Label htmlFor='security-level'>Urgência</Label>
								<Select defaultValue='3'>
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
								<Label htmlFor='security-level'>
									Aplicação
								</Label>
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
								/>
							</div>
							<InputFile />
						</div>
						<div className='grid gap-2'>
							<div className='flex gap-2 items-center'>
								<Label htmlFor='link'>Link</Label>
								<Link className='h-3 w-3' />
							</div>
							<Input id='link' placeholder='Link' />
						</div>
					</section>

					<section className='flex flex-col gap-6 w-full'>
						<div className='grid gap-2'>
							<Label htmlFor='subject'>Título</Label>
							<Input
								id='subject'
								placeholder='Preciso de ajuda com...'
							/>
						</div>
						<div className='flex flex-col gap-2 h-full'>
							<Label htmlFor='description'>Descrição</Label>
							<Textarea
								id='description'
								className='h-full'
								placeholder='Insira todas as informações necessárias para que possamos te ajudar.'
							/>
						</div>
					</section>
				</CardContent>
				<CardFooter className='justify-between space-x-2'>
					<Button variant='ghost'>Cancelar</Button>
					<Button>Enviar</Button>
				</CardFooter>
			</Card>
			<Alert className='hidden lg:flex'>
				<Clock className='h-4 w-4' />
				<AlertTitle className='text-muted-foreground text-xs'>
					Analisaremos seu ticket e entraremos em contato assim que
					possível!
				</AlertTitle>
			</Alert>

			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
					<div className='hidden md:block'>Sign Out</div>
				</button>
			</form>
		</>
	);
};

export default Home;
