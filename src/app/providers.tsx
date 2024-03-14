import '@/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { Toaster } from '@/components/ui/sonner';
import { SessionProvider } from 'next-auth/react';

import { ThemeWrapper } from '@/components/theme-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <>
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
        </>
    );
}
