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
            <body className='h-full min-h-screen bg-background'>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
