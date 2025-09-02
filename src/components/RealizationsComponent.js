import React, { useEffect } from 'react';

function ListItemComponent({ project, index }) {
    const className = index % 2 === 0 ? 'project left' : 'project right';
    return (
        <div className={className + ' ' + 'project-body glow-spiral'} key={project.id}>
            {project.component}
        </div>
    );
}

export default function RealizationsComponent({ items }) {
    useEffect(() => {
        if (window.innerWidth <= 768) {
            // Se a largura da tela for menor ou igual a 768px, não use animações
            document.querySelectorAll('.project').forEach((el) => {
                el.classList.add('visible');
                el.classList.remove('hidden');
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        entry.target.classList.remove('hidden');
                    } else {
                        entry.target.classList.add('hidden');
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.4 } // 40% do elemento precisa estar visível
        );

        const projectElements = document.querySelectorAll('.project');
        projectElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [])

    return (
        (
            <div className="projects-container">
                {items.map((project, index) => (
                    <ListItemComponent project={project} index={index} key={project.id} />
                ))}
            </div>
        )
    )
}