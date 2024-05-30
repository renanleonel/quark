import { z } from 'zod';
import { helpSchema, ticketSchema } from './schema';

export type Ticket = z.infer<typeof ticketSchema> & {
    id?: string;
    createdBy?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type Role = 'ADMIN' | 'MEMBER' | 'DEVELOPER';

export type Response<T = void> = {
    error: boolean;
    statusCode: number;
    message: string;
    data?: T;
};

export type Member = {
    id: string;
    name: string;
    email: string;
    role: Role;
    icon: string;
};

export type Help = z.infer<typeof helpSchema>;
