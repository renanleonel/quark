'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TrashIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const profileFormSchema = z.object({
    urls: z
        .array(
            z.object({
                value: z.string().min(4, {
                    message: 'URL must be at least 4 characters.',
                }),
            })
        )
        .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
    urls: [{ value: '' }],
};

export function ProjectsForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: 'onChange',
    });

    const { fields, append, remove } = useFieldArray({
        name: 'urls',
        control: form.control,
    });

    function onSubmit(data: ProfileFormValues) {}

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <ScrollArea
                    className={cn(fields.length > 5 && 'h-72', 'w-full')}
                >
                    {fields.map((field, index) => (
                        <FormField
                            control={form.control}
                            key={field.id}
                            name={`urls.${index}.value`}
                            render={({ field }) => (
                                <FormItem className='mb-4'>
                                    <FormControl>
                                        <div className='flex gap-2 items-center'>
                                            <Input {...field} />
                                            <TrashIcon
                                                onClick={() =>
                                                    fields.length > 1 &&
                                                    remove(index)
                                                }
                                                className='cursor-pointer  h-4 w-4 text-muted-foreground'
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                </ScrollArea>
                <footer className='space-y-4 mt-2 w-full'>
                    <Button
                        type='button'
                        className='w-full'
                        onClick={() => append({ value: '' })}
                    >
                        Novo projeto
                    </Button>
                    <Separator className='bg-white/20' />

                    <Button type='submit' className='w-full'>
                        Criar
                    </Button>
                </footer>
            </form>
        </Form>
    );
}
