import React from 'react';
import './Projeto.css'; // Adicionado

function Projeto5() {
  return (
    <div className="project-container">
      <button onClick={() => window.location.href = '/portfolio/'}>Voltar para Início</button>
      <h2>Chat em NestJS com Banco Relacional e WebSocket</h2>
      <p>
        Desenvolvi um chat utilizando NestJS, com banco de dados relacional, com o objetivo de aprender e aplicar WebSocket, NestJS e TypeORM. Após criar meu chat pessoal, implementei essa versão na plataforma Correspondente, onde trabalho, melhorando significativamente a comunicação entre os usuários.
      </p>
      <p>
        <strong>Objetivos do Projeto:</strong>
      </p>
      <ul>
        <li>Aprender e aplicar WebSocket, NestJS e TypeORM</li>
        <li>Desenvolver um chat funcional e eficiente</li>
        <li>Melhorar a comunicação entre os usuários da plataforma Correspondente</li>
      </ul>
      <p>
        <strong>Abordagem e Solução:</strong>
      </p>
      <ul>
        <li>
          <strong>Desenvolvimento do Chat:</strong> Criação de um chat utilizando NestJS, com integração de WebSocket para comunicação em tempo real e TypeORM para gerenciamento do banco de dados relacional.
        </li>
        <li>
          <strong>Implementação na Plataforma:</strong> Integração do chat desenvolvido na plataforma Correspondente, melhorando a comunicação entre os usuários.
        </li>
      </ul>
      <p>
        <strong>Resultados:</strong>
      </p>
      <ul>
        <li>
          <strong>Melhoria na Comunicação:</strong> A implementação do chat resultou em uma comunicação mais eficiente e rápida entre os usuários da plataforma.
        </li>
        <li>
          <strong>Impacto Positivo:</strong> A melhoria na comunicação impactou positivamente o uso da plataforma, aumentando a satisfação dos usuários.
        </li>
        <li>
          <strong>Aprendizado e Aplicação:</strong> O projeto proporcionou um aprendizado significativo em WebSocket, NestJS e TypeORM, permitindo a aplicação prática desses conhecimentos.
        </li>
      </ul>
    </div>
  );
}

export default Projeto5;
