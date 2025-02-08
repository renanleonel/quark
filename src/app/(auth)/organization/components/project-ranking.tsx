interface ProjectRankingProps {
    projects: {
        value: string;
        label: string;
    }[];
}

export const ProjectRanking = ({ projects }: ProjectRankingProps) => {
    return (
        <div className='space-y-8'>
            {projects.map((project, index) => {
                return (
                    <div key={index} className='flex items-center'>
                        <div className='space-y-1'>
                            <p className='text-sm leading-none font-medium'>
                                {project.label}
                            </p>
                            <p className='text-muted-foreground text-sm'>
                                www.com.br
                            </p>
                        </div>
                        <div className='ml-auto font-medium'>+{index}</div>
                    </div>
                );
            })}
        </div>
    );
};
