import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar o envio do formulário
        const mailtoLink = `mailto:cleverson.pedroso.professional@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
        window.open(mailtoLink);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "cleverson.pedroso.professional@gmail.com",
            link: "mailto:cleverson.pedroso.professional@gmail.com"
        },
        {
            icon: <FaPhone />,
            label: "Telefone",
            value: "+55 (42) 99875-5280",
            link: "tel:+5542998755280"
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Localização",
            value: "Ponta Grossa, PR - Brasil",
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/cleverson-pedroso-9a8226287",
            color: "#0077B5"
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
            url: "https://github.com/CrevoDev",
            color: "#333"
        },
        {
            icon: <FaWhatsapp />,
            name: "WhatsApp",
            url: "https://wa.me/5542998755280",
            color: "#25D366"
        },
        // {
        //     icon: <FaTelegram />,
        //     name: "Telegram",
        //     url: "https://t.me/cleversonpedroso",
        //     color: "#0088cc"
        // }
    ];

    return (
        <div className="contact-container">
            <div className="contact-intro">
                <h3>📞 Vamos Conversar!</h3>
                <p>Estou sempre aberto a novas oportunidades e projetos interessantes</p>
            </div>

            <div className="contact-content">
                <div className="contact-info-section">
                    <h4>Informações de Contato</h4>
                    <div className="contact-info-list">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-info-item">
                                <div className="contact-info-icon">
                                    {info.icon}
                                </div>
                                <div className="contact-info-text">
                                    <span className="contact-info-label">{info.label}</span>
                                    {info.link ? (
                                        <a href={info.link} className="contact-info-value">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span className="contact-info-value">{info.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="social-links">
                        <h4>Redes Sociais</h4>
                        <div className="social-links-grid">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    style={{ '--social-color': social.color }}
                                >
                                    <div className="social-icon">
                                        {social.icon}
                                    </div>
                                    <span className="social-name">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h4>Envie uma Mensagem</h4>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nome *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Seu nome completo"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Assunto *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                placeholder="Qual o assunto da sua mensagem?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="5"
                                placeholder="Conte-me sobre seu projeto ou oportunidade..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            <FaEnvelope />
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}