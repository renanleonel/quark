import '@/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { Toaster } from '@/components/ui/sonner';

import { ThemeWrapper } from '@/components/theme-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
    title: 'Quark',
    description: 'Quark',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-BR' className={GeistSans.className}>
            <body className='min-h-screen h-full bg-background'>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <ThemeWrapper>
                        <SessionProvider>
                            <main>{children}</main>
                        </SessionProvider>
                    </ThemeWrapper>
                    <ThemeSwitcher />
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
