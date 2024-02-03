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

export const labels = [
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
        value: 'finalizado',
        label: 'Finalizado',
        icon: CheckCircledIcon,
    },
    {
        value: 'cancelado',
        label: 'Cancelado',
        icon: CrossCircledIcon,
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
