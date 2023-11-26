import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InputFile() {
	return (
		<div className='grid w-full items-center gap-1.5'>
			<Label htmlFor='screenshot'>Screenshot</Label>
			<Input className='file:text-white' id='screenshot' type='file' />
		</div>
	);
}
