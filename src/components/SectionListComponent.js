import React, { useEffect } from 'react';

function createSections(className, id, icon, title, content) {
    return (
        <section id={id} className={className} key={id}>
            <h2>{icon} {title}</h2>
            {content}
        </section>
    );
}

export default function SectionListComponent({ sections }) {
    useEffect(() => {
        const sectionsElement = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        window.history.replaceState(null, '', `#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.10 } // 10% do elemento precisa estar visível
        );
        sectionsElement.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {sections.map((section) =>
                createSections(section.className, section.id, section.icon, section.title, section.content)
            )}
        </>
    );
}