import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function InputFile({ ...props }: InputFileProps) {
	return (
		<div className='grid w-full items-center gap-1.5'>
			<Label htmlFor='screenshot'>Screenshot</Label>
			<Input {...props} className='file:text-white' id='screenshot' type='file' />
		</div>
	);
}
