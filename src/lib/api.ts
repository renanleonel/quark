import 'server-only';

import { projects } from '@/content/constants';
import { members, tickets } from '@/content/mock';
import { Response, Ticket } from '@/types';

export async function fetchTickets(): Promise<Ticket[]> {
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

export async function fetchProjects(
    organizationID: string
): Promise<Response<typeof projects>> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    //tag @projects
    return {
        error: false,
        statusCode: 200,
        message: 'Projects found successfully',
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

export async function patchTicket(ticket: Ticket): Promise<Response> {
    const { id } = ticket;

    if (!id) {
        return {
            error: true,
            statusCode: 400,
            message: 'Ticket ID not found',
        };
    }

    return {
        error: false,
        statusCode: 200,
        message: 'Ticket updated successfully',
    };
}

export async function fetchTicketByID(ticketID: string): Promise<Ticket> {
    return {
        id: ticketID,
        title: 'Título do ticket',
        description: 'Descrição do ticket.',
        type: 'bug',
        priority: 'alta',
        status: 'concluído',
        project: 'projeto 1',
        link: 'https://www.google.com',
        file: {
            size: 123,
            type: 'Tipo',
            name: 'Nome do arquivo',
            lastModified: 123,
        },
        createdBy: 'eYuuioaeoujiarei987kolpçasdpo',
        createdAt: '2021-09-22',
        updatedAt: '2021-09-22',
    };
}

export async function removeTicket(ticketID: string): Promise<Response> {
    return {
        error: false,
        statusCode: 200,
        message: 'Ticket deleted successfully',
    };
}

export async function fetchOrganization() {
    return {
        id: '1',
        name: 'Organization Name',
        projects: projects,
        members: members,
    };
}
