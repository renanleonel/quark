import { z } from 'zod';
import { ticketSchema } from './schema';

export type Ticket = z.infer<typeof ticketSchema> & {
    id?: string;
    createdBy?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type Role = 'ADMIN' | 'USER';

export type Response<T = void> = {
    error: boolean;
    statusCode: number;
    message: string;
    data?: T;
};
