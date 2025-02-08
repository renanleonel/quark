import { User } from '@/types/index';
import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: User;
    }
}
