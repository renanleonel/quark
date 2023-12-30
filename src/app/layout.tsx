import '@/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';

import { Toaster } from '@/components/ui/sonner';

import { ThemeWrapper } from '@/components/theme-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';

export const metadata: Metadata = {
	title: 'gon',
	description: 'gon',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR' className={GeistSans.className}>
			<body className='min-min-h-screen bg-background'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<ThemeWrapper>
						<main className='bg-background flex-1'>{children}</main>
					</ThemeWrapper>
					<ThemeSwitcher />
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
