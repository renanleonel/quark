import '@/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { Toaster } from '@/components/ui/sonner';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@/components/theme-provider';

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
                <SessionProvider>
                    <main>{children}</main>
                </SessionProvider>
            </ThemeProvider>
            <Toaster />
        </>
    );
}
