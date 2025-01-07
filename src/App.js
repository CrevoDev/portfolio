import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cléverson Domingues</h1>
        <p>Desenvolvedor Fullstack | Engenheiro de Software</p>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="sobre">
        <h2>Sobre mim</h2>
        <p>
          Sou desenvolvedor fullstack com experiência em projetos complexos,
          otimização de sistemas e mentoria de desenvolvedores.
        </p>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
        <ul>
          <li><a href="#projeto1">Otimização de relatórios financeiros</a></li>
          <li><a href="#projeto2">Modernização de sistema legado</a></li>
          <li><a href="#projeto3">Solução de IA para análise de PDFs</a></li>
        </ul>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>
          Entre em contato pelo <a href="https://www.linkedin.com/in/cleverson-domingues">LinkedIn</a> ou veja meus projetos no <a href="https://github.com/seu-usuario">GitHub</a>.
        </p>
      </section>

      <footer>
        <p>&copy; 2025 Cléverson Domingues</p>
      </footer>
    </div>
  );
}

export default App;