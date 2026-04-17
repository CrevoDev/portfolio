import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaComments, FaBars } from "react-icons/fa";

export default function HeaderComponent({ 
    sectionsHeader, 
    isSidebarOpen, 
    onToggleSidebar, 
    onCloseSidebar 
}) {
    const [activeSection, setActiveSection] = useState('');
    

    // Detectar seção ativa baseada na URL inicial
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setActiveSection(hash);
        }
    }, []);

    useEffect(() => {
        function handleScroll() {
            // Atualizar navegação ativa baseada na posição do scroll
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';
            const scrollY = window.scrollY;
            
            // Se estiver no topo, mostrar "Início"
            if (scrollY < 200) {
                currentSection = '';
            } else {
                // Verificar cada seção de forma mais simples
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    const sectionTop = section.offsetTop - 150;
                    const sectionHeight = section.offsetHeight;
                    
                    // Se a seção está visível na viewport
                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        currentSection = section.id;
                        break; // Usar a primeira seção encontrada
                    }
                }
            }
            
            setActiveSection(currentSection);
            updateUrlHash(currentSection);
            
        }

        function updateUrlHash(hash) {
            if (hash) {
                window.history.replaceState(null, null, `#${hash}`);
            } else {
                window.history.replaceState(null, null, window.location.pathname);
            }
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
                    <p>Desenvolvedor Fullstack | Desenvolvedor com IA | Engenheiro de Software</p>
                </div>
            </header>
            <nav>
                <div className="nav-desktop">
                    <a href="/portfolio/#" className={activeSection === '' ? 'interacting' : ''}>
                        <FaHome /> Início
                    </a>
                    {sectionsHeader.map((section) => (
                        <a 
                            key={section.id} 
                            href={`#${section.id}`}
                            className={activeSection === section.id ? 'interacting' : ''}
                        >
                            {section.icon} {section.title}
                        </a>
                    ))}
                </div>
                
                <div className="nav-mobile">
                    <a href="/portfolio/#" className={activeSection === '' ? 'interacting' : ''}>
                        <FaHome /> Início
                    </a>
                    <a href="#sobre" className={activeSection === 'sobre' ? 'interacting' : ''}>
                        <FaUser /> Sobre Mim
                    </a>
                    <a href="#contato" className={activeSection === 'contato' ? 'interacting' : ''}>
                        <FaComments /> Contato
                    </a>
                    <button className="hamburger-btn" onClick={onToggleSidebar}>
                        <FaBars />
                    </button>
                </div>
            </nav>
        </>
    )
}