import { projects } from '@/content/constants';
import { members, tickets } from '@/content/mock';

export async function getOrganization() {
    return {
        id: '1',
        name: 'Organization Name',
        projects: projects,
        members: members,
    };
}

export async function getTickets() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return tickets;
}

export async function getMembers(organizationID: string) {
    return members;
}
