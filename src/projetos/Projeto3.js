import React from 'react';
import './Projeto.css'; // Adicionado

function Projeto3() {
  return (
    <div className="project-container">
      <h2>
        <span role="img" aria-label="IA">🤖</span> Solução de IA para Análise de PDFs
      </h2>
      <p>
        Trabalhei em um projeto que visava facilitar e otimizar a entrega de dados classificados, que até então eram feitos manualmente. Esse processo era demorado e sensível, muitas vezes resultando na ausência de campos classificados corretamente. Observando essa complexidade e o trabalho envolvido, eu e minha equipe tivemos a ideia de automatizar e otimizar todo esse processo.
      </p>
      <p>
        <strong>Objetivos do Projeto:</strong>
      </p>
      <ul>
        <li>Facilitar a classificação de dados em PDFs</li>
        <li>Reduzir o tempo de entrega de dados classificados</li>
        <li>Minimizar erros humanos na classificação de dados</li>
      </ul>
      <p>
        <strong>Abordagem e Solução:</strong>
      </p>
      <p>
        Desenvolvemos um script utilizando o Google Apps Script, que integrava a inteligência artificial da Geminy para classificar os dados via prompts. A IA analisava os PDFs e classificava os dados automaticamente, reduzindo a complexidade e o tempo de entrega para segundos.
      </p>
      <p>
        Além disso, criamos um aplicativo em Python para rodar a integração da plataforma com os modelos de IA de maneira independente, permitindo a utilização tanto da Gemini quanto da Bedrock conforme a necessidade do projeto. Esse app tornou o processo mais flexível e escalável, facilitando a escolha e alternância entre diferentes provedores de IA.
      </p>
      <p>
        <strong>Principais Atividades:</strong>
      </p>
      <ul>
        <li>
          <strong>Desenvolvimento do Script:</strong> Criação de um script no Google Apps Script para automatizar a análise e classificação de dados em PDFs.
        </li>
        <li>
          <strong>Integração com IA:</strong> Utilização da IA da Geminy para classificar os dados via prompts, garantindo precisão e eficiência.
        </li>
        <li>
          <strong>Desenvolvimento do App em Python:</strong> Implementação de um aplicativo independente para integração da plataforma com os modelos Gemini e Bedrock, proporcionando maior flexibilidade e autonomia no uso das IAs.
        </li>
        <li>
          <strong>Otimização do Processo:</strong> Redução do tempo de entrega de dados classificados de horas para segundos, aumentando a produtividade e a eficiência.
        </li>
      </ul>
      <p>
        <strong>Resultados:</strong>
      </p>
      <ul>
        <li>
          <strong>Redução de Tempo:</strong> O tempo de entrega de dados classificados foi reduzido de horas para segundos.
        </li>
        <li>
          <strong>Precisão na Classificação:</strong> A utilização da IA garantiu uma classificação precisa e consistente dos dados.
        </li>
        <li>
          <strong>Aumento da Produtividade:</strong> A automação do processo permitiu que a equipe se concentrasse em outras tarefas importantes, aumentando a produtividade geral.
        </li>
        <li>
          <strong>Minimização de Erros:</strong> A automação reduziu significativamente os erros humanos na classificação de dados.
        </li>
      </ul>
    </div>
  );
}

export default Projeto3;
