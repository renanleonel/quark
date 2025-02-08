import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                <SessionProvider>{children}</SessionProvider>
            </ThemeProvider>
            <Toaster />
        </>
    );
}
