import { FaCode, FaGraduationCap, FaRocket, FaHeart } from "react-icons/fa";

export default function AboutMeComponent() {
    return (
        <div className="about-me">
            <div className="about-intro">
                <h3>👋 Olá! Sou o Cleverson</h3>
                <p className="about-subtitle">
                    Desenvolvedor Fullstack apaixonado por transformar ideias em soluções tecnológicas inovadoras
                </p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <div className="about-icon">
                        <FaCode />
                    </div>
                    <div className="about-text">
                        <h4>💼 Atualmente na Hrestart</h4>
                        <p>
                            Atuo como <strong>Desenvolvedor Fullstack</strong> no desenvolvimento e melhoria da plataforma em
                            <strong> Angular</strong>, utilizando o ecossistema completo do <strong>Google Cloud Platform (GCP)</strong>:
                            Cloud Functions, Cloud Run, Vertex AI e Cloud Vision.
                            Trabalho com <strong>leitura de documentos por IA</strong> e integração de serviços de IA generativa no backend com <strong>NestJS</strong>.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-icon">
                        <FaRocket />
                    </div>
                    <div className="about-text">
                        <h4>🤖 Desenvolvimento com IA e Integração</h4>
                        <p>
                            Trabalho com <strong>integração e desenvolvimento de aplicações com IA</strong>, criando soluções
                            que conectam sistemas com <strong>AWS Bedrock, Gemini AI, Python e APIs de IA Generativa</strong>.
                            Desenvolvo agents inteligentes e aplicações que utilizam IA para automatizar processos.
                            Atualmente, estou desenvolvendo um <strong>aplicativo de controle financeiro inteligente</strong> com <strong>Flutter</strong>, integrando planilhas Google, Firestore e Gemini AI.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-icon">
                        <FaRocket />
                    </div>
                    <div className="about-text">
                        <h4>🚀 Infraestrutura e Sistemas</h4>
                        <p>
                            Trabalho com infraestrutura cloud e sistemas de mensageria, utilizando
                            <strong> AWS (EC2, RDS, ECS, CodePipeline), RabbitMQ, SQS, Firebase e Elasticsearch</strong>.
                            Tenho experiência em automação de deploy e gerenciamento de ambientes.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="about-text">
                        <h4>🎓 Formação Acadêmica</h4>
                        <p>
                            Cursando <strong>Engenharia de Software</strong> na Anhanguera, complementando minha
                            vivência prática com fundamentos acadêmicos, metodologias ágeis e arquitetura de sistemas.
                            Acredito na importância do aprendizado contínuo e na aplicação prática do conhecimento.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-icon">
                        <FaHeart />
                    </div>
                    <div className="about-text">
                        <h4>💡 Minha Missão</h4>
                        <p>
                            Meu objetivo é evoluir continuamente como desenvolvedor, explorando novos desafios,
                            aprendendo com cada projeto e aplicando tecnologia para impactar positivamente negócios e pessoas.
                            Acredito que a tecnologia deve ser uma ferramenta de transformação e inclusão.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-stats">
                <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projetos Desenvolvidos</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Tecnologias Dominadas</span>
                </div>
            </div>
        </div>
    )
}