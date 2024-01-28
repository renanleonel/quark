import { redirect } from 'next/navigation';
import SignOut from '@/components/sign-out';

const CreateOrganization = ({
    searchParams,
}: {
    searchParams: { [id: string]: string };
}) => {
    const { id } = searchParams;

    if (!id) redirect('/');

    return (
        <main>
            <h1>Crie uma organização ou cadastre-se em uma já existente.</h1>
            <SignOut />
        </main>
    );
};

export default CreateOrganization;
