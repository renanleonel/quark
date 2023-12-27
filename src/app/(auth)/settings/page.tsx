import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '../../../components/form/profile/profile-form';
import { ThemeCustomizer } from '@/components/theme';

import '@/styles/themes.css';

export const metadata: Metadata = {
	title: 'Configurações',
	description: 'Configurações',
};

const Settings = () => {
	return (
		<div className='space-y-6'>
			<div>
				<h3 className='text-lg font-medium'>Profile</h3>
				<p className='text-sm text-muted-foreground'>
					This is how others will see you on the site.
				</p>
			</div>
			<ThemeCustomizer />
			<Separator />
			<ProfileForm />
		</div>
	);
};

export default Settings;
