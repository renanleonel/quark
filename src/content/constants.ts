import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from '@radix-ui/react-icons';

export const types = [
    {
        value: 'bug',
        label: 'Bug',
    },
    {
        value: 'sugestão',
        label: 'Sugestão',
    },
    {
        value: 'outro',
        label: 'Outro',
    },
];

export const statuses = [
    {
        value: 'na fila',
        label: 'Na fila',
        icon: QuestionMarkCircledIcon,
    },
    {
        value: 'em análise',
        label: 'Em análise',
        icon: CircleIcon,
    },
    {
        value: 'em progresso',
        label: 'Em progresso',
        icon: StopwatchIcon,
    },
    {
        value: 'concluído',
        label: 'Concluído',
        icon: CheckCircledIcon,
    },
    {
        value: 'cancelado',
        label: 'Cancelado',
        icon: CrossCircledIcon,
    },
];

export const priorities = [
    {
        value: 'baixa',
        label: 'Baixa',
        icon: ArrowDownIcon,
    },
    {
        value: 'média',
        label: 'Média',
        icon: ArrowRightIcon,
    },
    {
        value: 'alta',
        label: 'Alta',
        icon: ArrowUpIcon,
    },
];

export const projects = [
    {
        value: 'projeto 1',
        label: 'Projeto 1',
    },
    {
        value: 'projeto 2',
        label: 'Projeto 2',
    },
    {
        value: 'projeto 3',
        label: 'Projeto 3',
    },
];

export const roles = [
    {
        name: 'Member',
        value: 'member',
        description: 'Can view and create tickets.',
        permissions: 'The user will be allowed to view and create tickets.',
    },
    {
        name: 'Developer',
        value: 'developer',
        description: 'Can view, create and manage tickets.',
        permissions:
            'The user will be allowed to view, create and manage tickets.',
    },
    {
        name: 'Admin',
        value: 'admin',
        description: 'Admin-level access to all resources.',
        permissions:
            'The user will be granted admin-level access to all resources.',
    },
];
