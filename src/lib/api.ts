import { projects } from '@/content/constants';
import { members, tickets } from '@/content/mock';
import { revalidatePath } from 'next/cache';

export async function getOrganization() {
    return {
        id: '1',
        name: 'Organization Name',
        projects: projects,
        members: members,
    };
}

export async function getTickets() {
    return tickets;
}

export async function getMembers(organizationID: string) {
    return members;
}
