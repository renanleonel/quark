import { redirect } from 'next/navigation';
import { getInvitationOrigin } from '@/lib/actions';

import { Separator } from '@/components/ui/separator';
import CreateOrganizationForm from '@/components/form/create-organization/create-organization-form';
import ValidateOrganizationForm from '@/components/form/valiidate-organization/validate-organization-form';

export default async function CreateOrganization({
    searchParams,
}: {
    searchParams: { [id: string]: string };
}) {
    const { id } = searchParams;
    if (!id) redirect('/');

    const { email } = await getInvitationOrigin(id);

    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='flex w-[380px] flex-col gap-4 text-white'>
                <h1 className='text-center text-2xl font-semibold'>
                    Crie uma organização
                </h1>
                <p className='text-muted-foreground'>
                    <span className='font-bold'>{email}</span> será o
                    administrador da organização.
                </p>

                <CreateOrganizationForm />
                <Separator className='bg-muted' />

                <p className='text-sm text-muted-foreground'>
                    Já possui um código?
                </p>

                <ValidateOrganizationForm />
            </div>
        </main>
    );
}
