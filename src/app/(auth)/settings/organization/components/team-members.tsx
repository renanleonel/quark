import { ChevronDownIcon, TrashIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { PaginationDemo } from '@/components/pagination';
import { DeleteMember } from '@/app/(auth)/settings/organization/components/delete-member';
import { Input } from '@/components/ui/input';

export function TeamMembers() {
	return (
		<section className='space-y-8'>
			<div>
				<h3 className='text-lg font-medium'>Membros</h3>
				<p className='text-sm text-muted-foreground'>
					Gerencie os membros da sua organização
				</p>
			</div>
			<Input placeholder='Filtrar' className='h-8' />
			<section className='flex flex-col gap-6'>
				<div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
					<div className='flex items-center space-x-4 w-full'>
						<Avatar>
							<AvatarImage src='/avatars/01.png' />
							<AvatarFallback>OM</AvatarFallback>
						</Avatar>
						<div>
							<p className='text-sm font-medium leading-none'>
								Sofia Davis
							</p>
							<p className='text-sm text-muted-foreground'>
								m@example.com
							</p>
						</div>
					</div>
					<div className='flex gap-2 items-center w-full'>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									className='w-full md:w-fit md:ml-auto'
								>
									Owner{' '}
									<ChevronDownIcon className='ml-2 h-4 w-4 text-muted-foreground' />
								</Button>
							</PopoverTrigger>
							<PopoverContent className='p-0' align='end'>
								<Command>
									<CommandInput placeholder='Select new role...' />
									<CommandList>
										<CommandEmpty>
											No roles found.
										</CommandEmpty>
										<CommandGroup>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Viewer</p>
												<p className='text-sm text-muted-foreground'>
													Can view and comment.
												</p>
											</CommandItem>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Developer</p>
												<p className='text-sm text-muted-foreground'>
													Can view, comment and edit.
												</p>
											</CommandItem>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Billing</p>
												<p className='text-sm text-muted-foreground'>
													Can view, comment and manage
													billing.
												</p>
											</CommandItem>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Owner</p>
												<p className='text-sm text-muted-foreground'>
													Admin-level access to all
													resources.
												</p>
											</CommandItem>
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
						<DeleteMember />
					</div>
				</div>
				<div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
					<div className='flex items-center space-x-4 w-full'>
						<Avatar>
							<AvatarImage src='/avatars/01.png' />
							<AvatarFallback>OM</AvatarFallback>
						</Avatar>
						<div>
							<p className='text-sm font-medium leading-none'>
								Sofia Davis
							</p>
							<p className='text-sm text-muted-foreground'>
								m@example.com
							</p>
						</div>
					</div>
					<div className='flex gap-2 items-center w-full'>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant='outline'
									className='w-full md:w-fit md:ml-auto'
								>
									Owner{' '}
									<ChevronDownIcon className='ml-2 h-4 w-4 text-muted-foreground' />
								</Button>
							</PopoverTrigger>
							<PopoverContent className='p-0' align='end'>
								<Command>
									<CommandInput placeholder='Select new role...' />
									<CommandList>
										<CommandEmpty>
											No roles found.
										</CommandEmpty>
										<CommandGroup>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Viewer</p>
												<p className='text-sm text-muted-foreground'>
													Can view and comment.
												</p>
											</CommandItem>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Developer</p>
												<p className='text-sm text-muted-foreground'>
													Can view, comment and edit.
												</p>
											</CommandItem>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Billing</p>
												<p className='text-sm text-muted-foreground'>
													Can view, comment and manage
													billing.
												</p>
											</CommandItem>
											<CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
												<p>Owner</p>
												<p className='text-sm text-muted-foreground'>
													Admin-level access to all
													resources.
												</p>
											</CommandItem>
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
						<DeleteMember />
					</div>
				</div>

				<div>
					<PaginationDemo />
				</div>
			</section>
		</section>
	);
}
