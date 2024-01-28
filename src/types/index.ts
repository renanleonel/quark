import { z } from 'zod';
import { ticketSchema } from './schema';

export type Ticket = z.infer<typeof ticketSchema>;
