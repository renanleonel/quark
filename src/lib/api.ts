import 'server-only';

import { projects } from '@/content/constants';
import { members, tickets } from '@/content/mock';
import { Help, Response, Ticket } from '@/types';

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

export async function postProject(project: {
    name: string;
}): Promise<Response> {
    return {
        error: false,
        statusCode: 201,
        message: 'Project created successfully',
    };
}

export async function patchProject(
    id: string,
    project: {
        name: string;
    }
): Promise<Response> {
    return {
        error: false,
        statusCode: 200,
        message: 'Project updated successfully',
    };
}

export async function removeProject(id: string): Promise<Response> {
    return {
        error: false,
        statusCode: 200,
        message: 'Project deleted successfully',
    };
}

export async function fetchMembers(
    organizationID: string
): Promise<Response<typeof members>> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    //tags @members

    return {
        error: false,
        statusCode: 200,
        message: 'Members found successfully',
        data: members,
    };
}

export async function postMember(): Promise<Response> {
    return {
        error: false,
        statusCode: 201,
        message: 'Member created successfully',
    };
}

export async function patchMember(id: string, body: any): Promise<Response> {
    return {
        error: false,
        statusCode: 200,
        message: 'Member updated successfully',
    };
}

export async function removeMember(id: string) {
    return {
        error: false,
        statusCode: 200,
        message: 'Member deleted successfully',
    };
}

export async function fetchUser(email: string, password: string) {
    return {
        id: '1',
        name: 'username',
        email: email,
        password: password,
        role: 'ADMIN',
        organization: '#12345',
    };
}

export async function postHelp(body: Help) {
    return {
        error: false,
        statusCode: 201,
        message: 'Help created successfully',
    };
}

export async function patchOrganization(id: string, name: string) {
    return {
        error: false,
        statusCode: 200,
        message: 'Organization updated successfully',
    };
}

export async function removeOrganization(id: string) {
    return {
        error: false,
        statusCode: 200,
        message: 'Organization deleted successfully',
    };
}
