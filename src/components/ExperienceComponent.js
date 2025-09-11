import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

export default function ExperienceComponent() {
    const experiences = [
        {
            type: 'work',
            icon: <FaBriefcase />,
            title: 'Desenvolvedor Fullstack & Desenvolvedor com IA',
            company: 'Docato',
            period: '2023 - Presente',
            location: 'Remoto',
            description: 'Desenvolvimento e manutenção de aplicativos com integração de IA para automação de processos jurídicos',
            achievements: [
                'Desenvolvimento e manutenção de aplicativos com AWS Bedrock',
                'Implementação de soluções de IA Generativa para automação',
                'Criação de agents inteligentes para automação de processos',
                'Integração de APIs de IA (Bedrock, Gemini AI) com aplicações',
                'Configuração de pipelines CI/CD com AWS CodePipeline e ECS',
                'Implementação de sistemas de mensageria com RabbitMQ e SQS',
                'Otimização de relatórios com redução de 60% no tempo de processamento'
            ],
            technologies: ['AWS Bedrock', 'Gemini AI', 'Python', 'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Angular', 'AWS EC2', 'AWS RDS', 'AWS ECS', 'CodePipeline', 'RabbitMQ', 'SQS', 'Docker', 'MongoDB', 'PostgreSQL']
        },
        {
            type: 'education',
            icon: <FaGraduationCap />,
            title: 'Engenharia de Software',
            company: 'Anhanguera',
            period: '2022 - 2026',
            location: 'Ponta Grossa, PR',
            description: 'Graduação em Engenharia de Software com foco em desenvolvimento de sistemas',
            achievements: [
                'Fundamentos de arquitetura de software',
                'Metodologias ágeis e gestão de projetos',
                'Estruturas de dados e algoritmos',
                'Engenharia de requisitos e testes',
                'Segurança da informação e boas práticas'
            ],
            technologies: ['Java', 'C++', 'SQL', 'UML', 'Scrum', 'Git']
        },
        {
            type: 'project',
            icon: <FaCode />,
            title: 'Projetos Pessoais',
            company: 'Freelancer',
            period: '2021 - 2023',
            location: 'Remoto',
            description: 'Desenvolvimento de aplicações web e mobile para clientes diversos',
            achievements: [
                'Criação de e-commerce com React e Node.js',
                'Desenvolvimento de aplicativo mobile com React Native',
                'Implementação de dashboards de analytics',
                'Integração com APIs de pagamento e serviços terceiros',
                'Otimização de performance e SEO'
            ],
            technologies: ['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase']
        },
        {
            type: 'achievement',
            icon: <FaRocket />,
            title: 'Certificações e Cursos',
            company: 'Diversas Plataformas',
            period: '2020 - Presente',
            location: 'Online',
            description: 'Aprendizado contínuo e certificações em tecnologias modernas',
            achievements: [
                'AWS Certified Cloud Practitioner',
                'Docker e Containerização',
                'Metodologias Ágeis (Scrum Master)',
                'Git e Controle de Versão',
                'Clean Code e Arquitetura Limpa'
            ],
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Git', 'Clean Architecture', 'TDD']
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'work': return '#4ac9be';
            case 'education': return '#61DAFB';
            case 'project': return '#FF9500';
            case 'achievement': return '#7fffd4';
            default: return '#4ac9be';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'work': return 'Experiência Profissional';
            case 'education': return 'Formação Acadêmica';
            case 'project': return 'Projetos Pessoais';
            case 'achievement': return 'Certificações';
            default: return 'Experiência';
        }
    };

    return (
        <div className="experience-container">
            <div className="experience-intro">
                <h3>💼 Minha Jornada Profissional</h3>
                <p>Timeline da minha carreira e conquistas</p>
            </div>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker" style={{ backgroundColor: getTypeColor(exp.type) }}>
                            {exp.icon}
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div className="timeline-title-section">
                                    <h4>{exp.title}</h4>
                                    <span className="timeline-company">{exp.company}</span>
                                </div>
                                <div className="timeline-meta">
                                    <span className="timeline-period">{exp.period}</span>
                                    <span className="timeline-location">{exp.location}</span>
                                </div>
                            </div>
                            
                            <div className="timeline-type">
                                <span style={{ color: getTypeColor(exp.type) }}>
                                    {getTypeLabel(exp.type)}
                                </span>
                            </div>
                            
                            <p className="timeline-description">{exp.description}</p>
                            
                            <div className="timeline-achievements">
                                <h5>Principais Conquistas:</h5>
                                <ul>
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="timeline-technologies">
                                <h5>Tecnologias:</h5>
                                <div className="tech-tags">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag" style={{ borderColor: getTypeColor(exp.type) }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
