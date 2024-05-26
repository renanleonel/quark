import '@/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { Providers } from './providers';

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
        <html lang='en' className={GeistSans.className}>
            <body className='h-full min-h-screen bg-background'>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
