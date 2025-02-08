import '@/app/globals.css';
import type { Metadata } from 'next';

import { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'Quark',
    description: 'Quark',
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        // <html lang='en' className={GeistSans.className}>
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='manifest' href='/manifest.json' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='black-translucent'
                />
                <meta
                    name='viewport'
                    content='initial-scale=1, viewport-fit=cover'
                />
                <meta property='og:image' content='<generated>' />
                <meta property='og:image:type' content='<generated>' />
                <meta property='og:image:width' content='<generated>' />
                <meta property='og:image:height' content='<generated>' />
            </head>
            <body className='bg-background h-full min-h-screen'>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
