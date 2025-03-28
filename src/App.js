import React, { useEffect } from 'react';
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
  useEffect(() => {
    if (window.innerWidth <= 768) {
      // Se a largura da tela for menor ou igual a 768px, não use animações
      document.querySelectorAll('.project').forEach((el) => {
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
      { threshold: 0.5 } // 50% do elemento precisa estar visível
    );

    const projectElements = document.querySelectorAll('.project');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
            <main>
              <section id="sobre">
                <h2>Sobre mim</h2>
                <p className="about-me">
                  Sou Cleverson, um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes para problemas reais. Atualmente, trabalho na Docato, uma empresa que oferece uma plataforma para gestão e automações de processos juridicos, utilizando linguagens como JavaScript e Python, e frameworks como Angular, Node, e Nest. Também possuo conhecimento em infraestrutura, utilizando recursos da Amazon Web Services (AWS), Docker e Rancher.
                  Além da minha experiência profissional, estou cursando bacharelado em Engenharia de Software na Anhanguera, onde aprendo sobre as melhores práticas, metodologias e ferramentas para desenvolver sistemas de qualidade, segurança e performance. Meu objetivo é me aperfeiçoar continuamente na área de desenvolvimento de software, buscando novos desafios, aprendizados e oportunidades para contribuir para o avanço da tecnologia e da sociedade.
                </p>
              </section>

              <section id="projetos">
                <div className="projects-container">
                  <div className="project left">
                    <Projeto1 />
                  </div>
                  <div className="project right">
                    <Projeto2 />
                  </div>
                  <div className="project left">
                    <Projeto3 />
                  </div>
                  <div className="project right">
                    <Projeto4 />
                  </div>
                  <div className="project left">
                    <Projeto5 />
                  </div>
                  <div className="project right">
                    <Projeto6 />
                  </div>
                </div>
              </section>

              <section id="contato">
                <h2>Contato</h2>
                <div className="contact-link">
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/cleverson-pedroso-9a8226287" target='_blank'>LinkedIn</a>
                </div>
                <div className="contact-link">
                  <FaGithub />
                  <a href="https://github.com/CrevoDev" target='_blank'>GitHub</a>
                </div>
              </section>
            </main>
          } />
        </Routes>

        <footer>
          <p>&copy; 2025 Cleverson Domingues Pedroso</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;