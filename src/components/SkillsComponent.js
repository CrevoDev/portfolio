import React from 'react';
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
    FaMobile,
    FaCloud,
    FaRocket
} from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';

export default function SkillsComponent() {
    const skills = [
        {
            category: "Frontend",
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
            icon: <FaRocket />,
            color: "#7fffd4",
            items: [
                { name: "AWS Bedrock", level: 80, icon: <FaRocket /> },
                { name: "Gemini AI", level: 75, icon: <FaRocket /> },
                { name: "IA Generativa", level: 78, icon: <FaRocket /> },
                { name: "Integração de APIs de IA", level: 82, icon: <FaRocket /> },
                { name: "Desenvolvimento de Agents", level: 70, icon: <FaRocket /> },
                { name: "Desenvolvimento com IA", level: 75, icon: <FaRocket /> }
            ]
        },
        {
            category: "Banco de Dados",
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
            icon: <FaAws />,
            color: "#FF9500",
            items: [
                { name: "AWS EC2", level: 75, icon: <FaAws /> },
                { name: "AWS RDS", level: 70, icon: <FaAws /> },
                { name: "AWS ECS", level: 65, icon: <FaAws /> },
                { name: "Load Balancers", level: 70, icon: <FaAws /> },
                { name: "CodeCommit", level: 75, icon: <FaAws /> },
                { name: "CodePipeline", level: 70, icon: <FaAws /> }
            ]
        },
        {
            category: "Sistemas de Mensageria",
            icon: <FaServer />,
            color: "#FF6B35",
            items: [
                { name: "RabbitMQ", level: 75, icon: <FaServer /> },
                { name: "AWS SQS", level: 70, icon: <FaServer /> },
                { name: "Queue Systems", level: 72, icon: <FaServer /> }
            ]
        },
        {
            category: "Google Cloud & Firebase",
            icon: <FaCloud />,
            color: "#4285F4",
            items: [
                { name: "Firebase", level: 75, icon: <FaCloud /> },
                { name: "Firestore", level: 70, icon: <FaCloud /> },
                { name: "Google App Scripts", level: 78, icon: <FaCloud /> },
                { name: "Authentication", level: 75, icon: <FaCloud /> }
            ]
        },
        {
            category: "DevOps & Ferramentas",
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
        { name: "Trabalho em Equipe", level: 95 },
        { name: "Comunicação", level: 90 },
        { name: "Resolução de Problemas", level: 95 },
        { name: "Aprendizado Contínuo", level: 100 },
        { name: "Gestão de Tempo", level: 85 },
        { name: "Liderança Técnica", level: 80 }
    ];

    return (
        <div className="skills-container">
            <div className="skills-intro">
                <h3>🛠️ Habilidades Técnicas</h3>
                <p>Minhas competências e tecnologias que utilizo</p>
            </div>

            <div className="skills-grid">
                {skills.map((category, index) => (
                    <div key={index} className="skill-category">
                        <div className="category-header">
                            <div className="category-icon" style={{ color: category.color }}>
                                {category.icon}
                            </div>
                            <h4>{category.category}</h4>
                        </div>
                        <div className="skills-list">
                            {category.items.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <div className="skill-info">
                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            style={{ 
                                                width: `${skill.level}%`,
                                                backgroundColor: category.color,
                                                minWidth: skill.level > 0 ? '2px' : '0px'
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
                        <div key={index} className="soft-skill-item">
                            <span className="soft-skill-name">{skill.name}</span>
                            <div className="soft-skill-bar">
                                <div 
                                    className="soft-skill-progress" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
