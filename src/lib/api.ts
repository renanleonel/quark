import 'server-only';

import { projects } from '@/content/constants';
import { members, tickets } from '@/content/mock';
import { Response, Ticket } from '@/types';

export async function getOrganization() {
    return {
        id: '1',
        name: 'Organization Name',
        projects: projects,
        members: members,
    };
}

export async function getTickets(): Promise<Ticket[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // const request = await fetch(``, {
    //     method: 'GET',
    //     next: {
    //         tags: ['@tickets'],
    //     },
    // });

    // const response = await request.json();

    // const { data, message, statusCode } = response;

    // if (statusCode !== 200) {
    //     throw new Error(
    //         `Tickets not found! Status: ${statusCode}, Message: ${message}`
    //     );
    // }

    const data = tickets;

    return data;
}

export async function getProjects(): Promise<Response<any>> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    //tag @projects
    return {
        error: false,
        statusCode: 200,
        message: 'Tickets found successfully',
        data: projects,
    };
}

export async function getMembers(organizationID: string) {
    return members;
}

export async function postTicket(ticket: Ticket): Promise<Response> {
    return {
        error: false,
        statusCode: 201,
        message: 'Ticket created successfully',
    };
}
