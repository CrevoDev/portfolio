import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";

export default function HeaderComponent({ sectionsHeader }) {
    useEffect(() => {
        const navLinks = document.querySelectorAll('nav a');
        function handleScroll() {
            let currentPath = window.location.hash || '#';

            navLinks.forEach((link) => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('interacting');
                } else {
                    link.classList.remove('interacting');
                }
            });

        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Chama inicialmente para definir o estado correto

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [sectionsHeader]);

    return (
        <>
            <header className="App-header">
                <div className="header-title">
                    <h1>Cleverson Domingues Pedroso</h1>
                    <p>Desenvolvedor Fullstack | Engenheiro de Software</p>
                </div>
            </header>
            <nav>
                <a href="/portfolio/#" ><FaHome /> Início</a>
                {sectionsHeader.map((section) => (
                    <a key={section.id} href={`#${section.id}`}>{section.icon} {section.title}</a>
                ))}
            </nav>
        </>
    )
}