import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EditProjectFormProps {
    id: string;
}

const EditProjectForm = ({ id }: EditProjectFormProps) => {
    return (
        <form className='space-y-4'>
            <div>
                <Label>Nome</Label>
                <Input name='name' />
            </div>
            <Button type='submit' className='w-full'>
                Editar
            </Button>
        </form>
    );
};

export default EditProjectForm;
