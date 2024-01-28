import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SubmitButton from '@/components/form/submit-button';

const HelpForm = () => {
    return (
        <form className='flex flex-col gap-2 h-full mt-4'>
            <Input id='email' placeholder='Como podemos ajudar?' name='name' />

            <Textarea
                name='description'
                id='description'
                className='h-full min-h-[200px]'
                placeholder='Descreva o problema encontrado aqui.'
            />
            <div className='w-full flex justify-end'>
                <SubmitButton text='Enviar' className='w-28' />
            </div>
        </form>
    );
};

export default HelpForm;