import { signout } from '@/lib/actions';

export const SignOut = () => {
    return (
        <form className='w-full' action={signout}>
            <button className='w-full text-start'>Sair</button>
        </form>
    );
};
