import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaRocket } from 'react-icons/fa';

const projectsData = [
    {
        id: 'projeto1',
        title: 'Controle Financeiro Inteligente',
        description: 'Aplicativo mobile desenvolvido em Flutter para controle financeiro pessoal com integração de IA. Conecta com planilhas Google, Firestore e utiliza Gemini AI para análise e insights financeiros.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop&q=80',
        category: 'Mobile & IA',
        status: 'Em Desenvolvimento',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Gemini AI', 'Google Sheets API', 'Google App Scripts'],
        achievements: [
            'Desenvolvimento de aplicativo mobile multiplataforma com Flutter',
            'Integração com planilhas Google via API',
            'Sincronização de dados em tempo real com Firestore',
            'Implementação de IA para análise financeira',
            'Automação de categorização de gastos com Gemini AI',
            'Geração de insights e relatórios financeiros'
        ],
        githubUrl: 'https://github.com/CrevoDev/money_gestor_app',
        githubTag: null,
        liveUrl: null,
        year: '2024',
        icon: '📱'
    },
    {
        id: 'projeto2',
        title: 'Aplicativo de IA com AWS Bedrock',
        description: 'Desenvolvimento e manutenção de aplicativo de Inteligência Artificial para automação de processos jurídicos na Docato',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop&q=80',
        category: 'IA/ML',
        status: 'Produção',
        technologies: ['AWS Bedrock', 'Python', 'Node.js', 'NestJS', 'TypeScript', 'IA Generativa', 'APIs de IA'],
        achievements: [
            'Desenvolvimento e manutenção de aplicativo de IA em produção',
            'Integração completa com AWS Bedrock para IA Generativa',
            'Criação de agents inteligentes para automação de processos',
            'Desenvolvimento de aplicações que utilizam IA para processamento',
            'Redução de 80% no tempo de processamento de documentos'
        ],
        githubUrl: null,
        githubTag: 'REPOSITÓRIO EM BREVE',
        liveUrl: null,
        year: '2023-2024',
        icon: '🤖'
    },
    {
        id: 'projeto3',
        title: 'Otimização de Relatórios',
        description: 'Sistema de otimização de geração de relatórios com redução de 60% no tempo de processamento',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&q=80',
        category: 'Backend',
        status: 'Produção',
        technologies: ['Node.js', 'NestJS', 'QueueBull', 'MongoDB', 'AWS'],
        achievements: [
            'Redução de 60% no tempo de processamento',
            'Implementação de sistema de filas assíncronas',
            'Redução significativa de custos operacionais'
        ],
        githubUrl: null,
        githubTag: 'REPOSITÓRIO EM BREVE',
        liveUrl: null,
        year: '2023',
        icon: '📈'
    },
    {
        id: 'projeto4',
        title: 'Modernização de Sistema Legado',
        description: 'Refatoração completa de sistema legado com migração do AngularJS para Angular 7',
        image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=450&fit=crop&q=80',
        category: 'Fullstack',
        status: 'Concluído',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'JavaScript', 'CSS3'],
        achievements: [
            'Migração completa do AngularJS para Angular 7',
            'Redução de bugs em 80%',
            'Melhoria na performance geral do sistema'
        ],
        githubUrl: null,
        githubTag: 'REPOSITÓRIO EM BREVE',
        liveUrl: null,
        year: '2022',
        icon: '⚙️'
    },
    {
        id: 'projeto5',
        title: 'Solução de IA Generativa para Análise de PDFs',
        description: 'Sistema avançado de IA Generativa para classificação automática de documentos jurídicos, integrando múltiplos provedores de IA',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&q=80',
        category: 'IA/ML',
        status: 'Produção',
        technologies: ['AWS Bedrock', 'Gemini AI', 'Python', 'Google Apps Script', 'PDF Processing', 'IA Generativa'],
        achievements: [
            'Redução de tempo de horas para segundos (99% de eficiência)',
            'Desenvolvimento de sistema que utiliza IA para classificação automática',
            'Integração com AWS Bedrock e Gemini AI',
            'Processamento de milhares de documentos por dia',
            'Criação de agents inteligentes para automação de processos'
        ],
        githubUrl: 'https://github.com/CrevoDev/ia-class',
        githubTag: null,
        liveUrl: null,
        year: '2023',
        icon: '🤖'
    },
    {
        id: 'projeto6',
        title: 'Extensões de Navegador',
        description: 'Extensão otimizada para automação de preenchimento de formulários com scripts personalizados',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop&q=80',
        category: 'Frontend',
        status: 'Produção',
        technologies: ['JavaScript', 'Chrome Extension API', 'HTML5', 'CSS3', 'DevTools'],
        achievements: [
            'Interface intuitiva e moderna',
            'Automação 100% funcional',
            'Redução de 90% no tempo de preenchimento'
        ],
        githubUrl: null,
        githubTag: 'REPOSITÓRIO EM BREVE',
        liveUrl: null,
        year: '2022',
        icon: '🧩'
    },
    {
        id: 'projeto7',
        title: 'Chat em Tempo Real',
        description: 'Sistema de chat desenvolvido com NestJS, WebSocket e banco relacional',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop&q=80',
        category: 'Backend',
        status: 'Produção',
        technologies: ['NestJS', 'TypeORM', 'WebSocket', 'PostgreSQL', 'TypeScript'],
        achievements: [
            'Comunicação em tempo real implementada',
            'Integração bem-sucedida na plataforma',
            'Melhoria significativa na comunicação'
        ],
        githubUrl: null,
        githubTag: 'REPOSITÓRIO EM BREVE',
        liveUrl: null,
        year: '2023',
        icon: '💬'
    },
    {
        id: 'projeto8',
        title: 'App Mobile de Lista de Compras',
        description: 'Aplicativo mobile desenvolvido em Dart para gestão de compras e controle de orçamento',
        image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&h=450&fit=crop&q=80',
        category: 'Mobile',
        status: 'Pessoal',
        technologies: ['Dart', 'Flutter', 'SQLite', 'State Management'],
        achievements: [
            'Controle total de orçamento',
            'Interface intuitiva e responsiva',
            'Funcionalidades completas de gestão'
        ],
        githubUrl: 'https://github.com/CrevoDev/market-list',
        githubTag: null,
        liveUrl: null,
        year: '2023',
        icon: '📱'
    }
];

function ProjectCard({ project, index }) {
    const getCategoryColor = (category) => {
        switch (category) {
            case 'Backend': return '#4ac9be';
            case 'Frontend': return '#61DAFB';
            case 'Fullstack': return '#FF9500';
            case 'IA/ML': return '#9C27B0';
            case 'Mobile': return '#25D366';
            case 'Mobile & IA': return '#7fffd4';
            default: return '#4ac9be';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Produção': return '#4CAF50';
            case 'Concluído': return '#2196F3';
            case 'Pessoal': return '#FF9800';
            case 'Em Desenvolvimento': return '#FF5722';
            default: return '#4ac9be';
        }
    };

    return (
        <div className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <div className="project-category" style={{ backgroundColor: getCategoryColor(project.category) }}>
                        {project.category}
                    </div>
                    <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                        {project.status}
                    </div>
                </div>
            </div>
            
            <div className="project-content">
                <div className="project-header">
                    <div className="project-title-section">
                        <h3>
                            <span className="project-icon">{project.icon}</span>
                            {project.title}
                        </h3>
                        <div className="project-meta">
                            <span className="project-year">
                                <FaCalendarAlt /> {project.year}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-achievements">
                    <h4><FaRocket /> Principais Conquistas</h4>
                    <ul>
                        {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-technologies">
                    <h4><FaCode /> Tecnologias</h4>
                    <div className="tech-tags">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="project-links">
                    {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaGithub />
                            Código
                        </a>
                    ) : (
                        <span className="project-tag">
                            <FaGithub />
                            {project.githubTag}
                        </span>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaExternalLinkAlt />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function RealizationsComponent() {
    useEffect(() => {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.project-card').forEach((el) => {
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
            { threshold: 0.3 }
        );

        const projectElements = document.querySelectorAll('.project-card');
        projectElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="realizations-container">
            <div className="realizations-intro">
                <h3>🚀 Meus Projetos e Realizações</h3>
                <p>Alguns dos projetos que desenvolvi e que demonstram minhas habilidades técnicas</p>
            </div>

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}