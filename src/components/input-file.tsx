import { Label } from '@/components/ui/label';
import { Input, InputProps } from '@/components/ui/input';

interface InputFileProps extends InputProps {
    label: string;
}

export function InputFile({ label, ...props }: InputFileProps) {
    return (
        <div className='grid w-full cursor-pointer items-center gap-1.5'>
            <Label htmlFor='screenshot'>{label}</Label>
            <Input
                {...props}
                className='cursor-pointer file:text-white'
                id='screenshot'
                type='file'
            />
        </div>
    );
}
