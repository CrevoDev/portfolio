import React from 'react';
import { FaTimes, FaHome, FaUser, FaWrench, FaBriefcase, FaTrophy, FaComments } from 'react-icons/fa';

export default function SidebarComponent({ isOpen, onClose, sections }) {
    const sidebarItems = [
        { id: 'skills', name: 'Habilidades', icon: <FaWrench />, href: '#skills' },
        { id: 'experience', name: 'Experiência', icon: <FaBriefcase />, href: '#experience' },
        { id: 'realizations', name: 'Realizações', icon: <FaTrophy />, href: '#realizations' }
    ];

    const handleLinkClick = (href) => {
        onClose();
        // Scroll suave para a seção
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div 
                    className="sidebar-overlay" 
                    onClick={onClose}
                />
            )}
            
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Menu</h3>
                    <button className="sidebar-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                
                <nav className="sidebar-nav">
                    <a 
                        href="#about" 
                        className="sidebar-link"
                        onClick={() => handleLinkClick('#about')}
                    >
                        <FaUser />
                        <span>Sobre Mim</span>
                    </a>
                    
                    {sidebarItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="sidebar-link"
                            onClick={() => handleLinkClick(item.href)}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                    
                    <a 
                        href="#contact" 
                        className="sidebar-link"
                        onClick={() => handleLinkClick('#contact')}
                    >
                        <FaComments />
                        <span>Contato</span>
                    </a>
                </nav>
            </div>
        </>
    );
}
