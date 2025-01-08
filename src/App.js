import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaHome } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projeto1 from './projetos/Projeto1';
import Projeto2 from './projetos/Projeto2';
import Projeto3 from './projetos/Projeto3';
import Projeto4 from './projetos/Projeto4';
import Projeto5 from './projetos/Projeto5';
import Projeto6 from './projetos/Projeto6'; // Adicionado

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cleverson Domingues Pedroso</h1>
          <p>Desenvolvedor Fullstack | Engenheiro de Software</p>
          <nav>
            <Link to="/portfolio/"><FaHome /> Início</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/portfolio/" element={
            <>
              <section id="sobre">
                <h2>Sobre mim</h2>
                <p>
                  Sou Cleverson, um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes para problemas reais. Atualmente, trabalho na Docato, uma empresa que oferece uma plataforma para gestão e automações de processos juridicos, utilizando linguagens como JavaScript e Python, e frameworks como Angular, Node, e Nest. Também possuo conhecimento em infraestrutura, utilizando recursos da Amazon Web Services (AWS), Docker e Rancher.
                  Além da minha experiência profissional, estou cursando bacharelado em Engenharia de Software na Anhanguera, onde aprendo sobre as melhores práticas, metodologias e ferramentas para desenvolver sistemas de qualidade, segurança e performance. Meu objetivo é me aperfeiçoar continuamente na área de desenvolvimento de software, buscando novos desafios, aprendizados e oportunidades para contribuir para o avanço da tecnologia e da sociedade.
                </p>
              </section>

              <section id="projetos">
                <h2>Projetos</h2>
                <ul>
                  <li><Link to="/portfolio/projetos/projeto1">Otimização de relatórios</Link></li>
                  <li><Link to="/portfolio/projetos/projeto2">Modernização de sistema legado</Link></li>
                  <li><Link to="/portfolio/projetos/projeto3">Solução de IA para análise de PDFs</Link></li>
                  <li><Link to="/portfolio/projetos/projeto4">Extensões de navegador</Link></li>
                  <li><Link to="/portfolio/projetos/projeto5">Chat em NestJs com banco relacional e WebSocket</Link></li>
                  <li><Link to="/portfolio/projetos/projeto6">Desenvolvimento Mobile com Dart</Link></li> {/* Adicionado */}
                </ul>
              </section>

              <section id="contato">
                <h2>Contato</h2>
                <div className="contact-link">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/cleverson-pedroso-9a8226287">LinkedIn</a>
                </div>
                <div className="contact-link">
                  <FaGithub />
                  <a href="https://github.com/CrevoDev">GitHub</a>
                </div>
              </section>
            </>
          } />
          <Route path="/portfolio/projetos/projeto1" element={<Projeto1 />} />
          <Route path="/portfolio/projetos/projeto2" element={<Projeto2 />} />
          <Route path="/portfolio/projetos/projeto3" element={<Projeto3 />} />
          <Route path="/portfolio/projetos/projeto4" element={<Projeto4 />} />
          <Route path="/portfolio/projetos/projeto5" element={<Projeto5 />} />
          <Route path="/portfolio/projetos/projeto6" element={<Projeto6 />} /> {/* Adicionado */}
        </Routes>

        <footer>
          <p>&copy; 2025 Cleverson Domingues Pedroso</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;