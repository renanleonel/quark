/* eslint-disable no-unused-vars */

import NextAuth from 'next-auth';
import { Role } from '@/types/index';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
            password: string;
            role: Role;
            organization: string;
        };
    }
}
