/* eslint-disable no-unused-vars */

import NextAuth from 'next-auth';
import { Role, User } from '@/types/index';

declare module 'next-auth' {
    interface Session {
        user: User;
    }
}
