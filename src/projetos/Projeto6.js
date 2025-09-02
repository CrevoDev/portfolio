import React from 'react';
import './Projeto.css'; // Adicionado

function Projeto6() {
  return (
    <div className="project-container">
      <h2>
        <span role="img" aria-label="mobile app" style={{ marginRight: '8px' }}>📱</span>
        Desenvolvimento Mobile com Dart
      </h2>
      <p>
        Buscando aprender sobre desenvolvimento mobile e atendendo a uma necessidade pessoal, desenvolvi uma aplicação de lista de mercados utilizando Dart. O objetivo principal era gerir melhor minhas compras, garantindo que todos os itens necessários fossem adquiridos sem ultrapassar o orçamento.
      </p>
      <p>
        <strong>Objetivos do Projeto:</strong>
      </p>
      <ul>
        <li>Aprender e aplicar desenvolvimento mobile com Dart</li>
        <li>Gerir melhor as compras de mercado</li>
        <li>Manter controle dos itens adquiridos e do orçamento</li>
      </ul>
      <p>
        <strong>Funcionalidades da Aplicação:</strong>
      </p>
      <ul>
        <li>
          <strong>Lista de Compras:</strong> Cada lista contém o nome do item, unidade e valor, além de uma checkbox para marcar os itens adquiridos.
        </li>
        <li>
          <strong>Controle de Orçamento:</strong> A aplicação calcula o valor total dos itens com base na quantidade e no valor unitário, ajudando a manter o controle do orçamento.
        </li>
        <li>
          <strong>Interface Intuitiva:</strong> A interface foi projetada para ser fácil de usar, permitindo a adição, edição e remoção de itens de forma rápida e eficiente.
        </li>
      </ul>
      <p>
        <strong>Resultados:</strong>
      </p>
      <ul>
        <li>
          <strong>Aprendizado em Desenvolvimento Mobile:</strong> O projeto proporcionou um aprendizado significativo em desenvolvimento mobile com Dart, permitindo a aplicação prática dos conhecimentos adquiridos.
        </li>
        <li>
          <strong>Melhoria na Gestão de Compras:</strong> A aplicação ajudou a gerir melhor as compras de mercado, garantindo que todos os itens necessários fossem adquiridos sem ultrapassar o orçamento.
        </li>
        <li>
          <strong>Controle de Orçamento:</strong> A funcionalidade de controle de orçamento permitiu uma melhor gestão financeira, evitando gastos excessivos.
        </li>
        <li>
          <strong>Facilidade de Uso:</strong> A interface intuitiva tornou a aplicação fácil de usar, melhorando a experiência do usuário.
        </li>
      </ul>
    </div>
  );
}

export default Projeto6;
