import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { PORTFOLIO_CONFIG, SOCIAL_LINKS } from '../constants/portfolio';
import VersionComponent from './VersionComponent';

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            icon: <FaLinkedin />,
            name: 'LinkedIn',
            url: SOCIAL_LINKS.LINKEDIN,
            color: '#0077B5'
        },
        {
            icon: <FaGithub />,
            name: 'GitHub',
            url: SOCIAL_LINKS.GITHUB,
            color: '#333'
        },
        {
            icon: <FaWhatsapp />,
            name: 'WhatsApp',
            url: SOCIAL_LINKS.WHATSAPP,
            color: '#25D366'
        },
        {
            icon: <FaEnvelope />,
            name: 'Email',
            url: `mailto:${PORTFOLIO_CONFIG.AUTHOR.EMAIL}`,
            color: '#EA4335'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-info">
                        <h3 className="footer-title">
                            <FaCode className="footer-icon" />
                            {PORTFOLIO_CONFIG.AUTHOR.NAME}
                        </h3>
                        <p className="footer-subtitle">
                            Desenvolvedor Fullstack | Desenvolvedor com IA | Engenheiro de Software
                        </p>
                        <p className="footer-location">
                            📍 {PORTFOLIO_CONFIG.AUTHOR.LOCATION}
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-links-title">Links Rápidos</h4>
                        <div className="footer-nav">
                            <a href="/portfolio/#" className="footer-link">Início</a>
                            <a href="#sobre-mim" className="footer-link">Sobre Mim</a>
                            <a href="#habilidades" className="footer-link">Habilidades</a>
                            <a href="#experiencia" className="footer-link">Experiência</a>
                            <a href="#projetos" className="footer-link">Projetos</a>
                            <a href="#contato" className="footer-link">Contato</a>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-social-title">Redes Sociais</h4>
                        <div className="footer-social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    style={{ '--social-color': social.color }}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} {PORTFOLIO_CONFIG.AUTHOR.NAME}. Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="footer-made-with">
                        <p>
                            Feito com <FaHeart className="heart-icon" /> usando React
                        </p>
                    </div>
                </div>
                
                <VersionComponent />
            </div>
        </footer>
    );
}
