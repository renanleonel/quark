import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            role: string;
            organization: string;
        };
    }
}
