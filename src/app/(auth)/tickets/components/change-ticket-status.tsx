'use client';

import { ReactNode, useState } from 'react';

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ChangeTicketStatusProps {
    children: ReactNode;
    selected: string;
}

const ChangeTicketStatus = ({
    children,
    selected,
}: ChangeTicketStatusProps) => {
    const [checks, setChecks] = useState({
        queue: selected === 'na fila',
        analysis: selected === 'em análise',
        progress: selected === 'em progresso',
        done: selected === 'concluído',
        canceled: selected === 'cancelado',
    });

    const handleCheckChange = (checkName: string, newCheckValue: boolean) => {
        setChecks({
            queue: false,
            analysis: false,
            progress: false,
            done: false,
            canceled: false,
            [checkName]: newCheckValue,
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuCheckboxItem
                    checked={checks.queue}
                    onCheckedChange={(newCheckValue) =>
                        handleCheckChange('queue', newCheckValue)
                    }
                >
                    Na fila
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={checks.analysis}
                    onCheckedChange={(newCheckValue) =>
                        handleCheckChange('analysis', newCheckValue)
                    }
                >
                    Em análise
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={checks.progress}
                    onCheckedChange={(newCheckValue) =>
                        handleCheckChange('progress', newCheckValue)
                    }
                >
                    Em progresso
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={checks.done}
                    onCheckedChange={(newCheckValue) =>
                        handleCheckChange('done', newCheckValue)
                    }
                >
                    Concluído
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={checks.canceled}
                    onCheckedChange={(newCheckValue) =>
                        handleCheckChange('canceled', newCheckValue)
                    }
                >
                    Cancelado
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ChangeTicketStatus;
