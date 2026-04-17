import React, { useState, useEffect, useRef } from 'react';
import { 
    FaReact, 
    FaJs, 
    FaNodeJs, 
    FaPython, 
    FaDocker, 
    FaAws, 
    FaGitAlt, 
    FaHtml5, 
    FaCss3Alt, 
    FaAngular,
    FaDatabase,
    FaServer,
    FaCloud,
    FaRobot,
    FaGoogle,
    FaPlug,
    FaMicrochip,
    FaUsers,
    FaComments,
    FaLightbulb,
    FaClock,
    FaStar,
    FaLink
} from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';

const FILTERS = ['Todos', 'Frontend', 'Backend', 'IA', 'Database', 'Cloud', 'DevOps'];

export default function SkillsComponent() {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            category: "Frontend",
            filter: "Frontend",
            icon: <FaReact />,
            color: "#61DAFB",
            items: [
                { name: "React", level: 90, icon: <FaReact /> },
                { name: "JavaScript", level: 95, icon: <FaJs /> },
                { name: "TypeScript", level: 85, icon: <SiTypescript /> },
                { name: "Angular", level: 80, icon: <FaAngular /> },
                { name: "HTML5", level: 95, icon: <FaHtml5 /> },
                { name: "CSS3", level: 90, icon: <FaCss3Alt /> }
            ]
        },
        {
            category: "Backend",
            filter: "Backend",
            icon: <FaServer />,
            color: "#4ac9be",
            items: [
                { name: "Node.js", level: 90, icon: <FaNodeJs /> },
                { name: "NestJS", level: 85, icon: <SiNestjs /> },
                { name: "Python", level: 90, icon: <FaPython /> },
                { name: "REST APIs", level: 95, icon: <FaServer /> },
                { name: "GraphQL", level: 70, icon: <FaServer /> }
            ]
        },
        {
            category: "Inteligência Artificial",
            filter: "IA",
            icon: <FaRobot />,
            color: "#7fffd4",
            items: [
                { name: "AWS Bedrock", level: 80, icon: <FaAws /> },
                { name: "Gemini AI", level: 75, icon: <FaGoogle /> },
                { name: "IA Generativa", level: 78, icon: <FaRobot /> },
                { name: "APIs de IA", level: 82, icon: <FaPlug /> },
                { name: "Dev. de Agents", level: 70, icon: <FaMicrochip /> },
                { name: "LLM Integration", level: 75, icon: <FaLink /> }
            ]
        },
        {
            category: "Banco de Dados",
            filter: "Database",
            icon: <FaDatabase />,
            color: "#336791",
            items: [
                { name: "MongoDB", level: 85, icon: <SiMongodb /> },
                { name: "PostgreSQL", level: 80, icon: <SiPostgresql /> },
                { name: "Redis", level: 75, icon: <SiRedis /> },
                { name: "SQL", level: 90, icon: <FaDatabase /> }
            ]
        },
        {
            category: "AWS & Infraestrutura",
            filter: "Cloud",
            icon: <FaAws />,
            color: "#FF9500",
            items: [
                { name: "AWS EC2", level: 75, icon: <FaAws /> },
                { name: "AWS RDS", level: 70, icon: <FaAws /> },
                { name: "AWS ECS", level: 65, icon: <FaAws /> },
                { name: "Load Balancers", level: 70, icon: <FaServer /> },
                { name: "CodeCommit", level: 75, icon: <FaGitAlt /> },
                { name: "CodePipeline", level: 70, icon: <FaAws /> }
            ]
        },
        {
            category: "Sistemas de Mensageria",
            filter: "Backend",
            icon: <FaServer />,
            color: "#FF6B35",
            items: [
                { name: "RabbitMQ", level: 75, icon: <FaServer /> },
                { name: "AWS SQS", level: 70, icon: <FaAws /> },
                { name: "Queue Systems", level: 72, icon: <FaServer /> }
            ]
        },
        {
            category: "Google Cloud Platform",
            filter: "Cloud",
            icon: <FaCloud />,
            color: "#4285F4",
            items: [
                { name: "Cloud Functions", level: 80, icon: <FaCloud /> },
                { name: "Cloud Run", level: 78, icon: <FaCloud /> },
                { name: "Vertex AI", level: 75, icon: <FaRobot /> },
                { name: "Cloud Vision", level: 73, icon: <FaCloud /> },
                { name: "Firebase", level: 75, icon: <FaCloud /> },
                { name: "Firestore", level: 72, icon: <FaCloud /> },
                { name: "Google App Scripts", level: 78, icon: <FaGoogle /> }
            ]
        },
        {
            category: "DevOps & Ferramentas",
            filter: "DevOps",
            icon: <FaDocker />,
            color: "#2496ED",
            items: [
                { name: "Docker", level: 75, icon: <FaDocker /> },
                { name: "Rancher", level: 65, icon: <FaDocker /> },
                { name: "Elasticsearch", level: 70, icon: <FaDatabase /> },
                { name: "CI/CD", level: 70, icon: <FaGitAlt /> },
                { name: "Git", level: 90, icon: <FaGitAlt /> }
            ]
        }
    ];

    const softSkills = [
        { name: "Trabalho em Equipe", icon: <FaUsers /> },
        { name: "Comunicação", icon: <FaComments /> },
        { name: "Resolução de Problemas", icon: <FaLightbulb /> },
        { name: "Aprendizado Contínuo", icon: <FaStar /> },
        { name: "Gestão de Tempo", icon: <FaClock /> },
        { name: "Liderança Técnica", icon: <FaMicrochip /> }
    ];

    const filteredSkills = activeFilter === 'Todos'
        ? skills
        : skills.filter(s => s.filter === activeFilter);

    return (
        <div className="skills-container" ref={containerRef}>
            <div className="skills-intro">
                <h3>🛠️ Habilidades Técnicas</h3>
                <p>Minhas competências e tecnologias que utilizo</p>
            </div>

            <div className="skills-filter">
                {FILTERS.map(filter => (
                    <button
                        key={filter}
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="skills-grid">
                {filteredSkills.map((category) => (
                    <div key={`${activeFilter}-${category.category}`} className="skill-category">
                        <div className="category-header">
                            <div className="category-icon" style={{ color: category.color }}>
                                {category.icon}
                            </div>
                            <div>
                                <h4>{category.category}</h4>
                                <span className="skill-count">{category.items.length} skills</span>
                            </div>
                        </div>
                        <div className="skills-list">
                            {category.items.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <div className="skill-info">
                                        <div className="skill-icon" style={{ color: category.color }}>
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            style={{ 
                                                width: isVisible ? `${skill.level}%` : '0%',
                                                backgroundColor: category.color,
                                            }}
                                        ></div>
                                    </div>
                                    <span className="skill-level">{skill.level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="soft-skills">
                <h4>💡 Soft Skills</h4>
                <div className="soft-skills-grid">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="soft-skill-badge">
                            <span className="soft-skill-icon">{skill.icon}</span>
                            <span className="soft-skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
