import React from 'react';
import './Projeto.css'; // Adicionado

function Projeto1() {
    return (
        <div className="project-container">
            <h2>
                <span role="img" aria-label="Relatório Otimizado" style={{ marginRight: '8px' }}>📈</span>
                Otimização de Relatórios
            </h2>
            <p>
                Trabalhei na otimização da geração de relatórios da plataforma, buscando:
            </p>
            <ul>
                <li>Reduzir gargalos</li>
                <li>Diminuir o tempo de processamento</li>
                <li>Eliminar funções e variáveis desnecessárias</li>
                <li>Criar uma fila para executar todo o processo de geração de relatório em um ambiente separado da API principal utilizando a biblioteca <strong>QueueBull</strong></li>
            </ul>
            <p>
                <strong>Resultados:</strong>
            </p>
            <ul>
                <li>Redução significativa de sobrecargas</li>
                <li>Redução de custos</li>
            </ul>
            <p>
                <strong>Detalhes das Melhorias:</strong>
            </p>
            <ul>
                <li>
                    <strong>Redução de Gargalos:</strong> Identificação e eliminação de pontos de estrangulamento no processo de geração de relatórios, permitindo um fluxo de dados mais eficiente.
                </li>
                <li>
                    <strong>Tempo de Processamento:</strong> Implementação de algoritmos mais eficientes e otimização de consultas ao banco de dados, resultando em uma diminuição significativa no tempo total de geração de relatórios.
                </li>
                <li>
                    <strong>Funções e Variáveis Desnecessárias:</strong> Revisão e refatoração do código para remover funções e variáveis que não eram essenciais, simplificando a manutenção e melhorando a legibilidade do código.
                </li>
                <li>
                    <strong>Fila de Processamento:</strong> Desenvolvimento de um sistema de fila utilizando a biblioteca <strong>QueueBull</strong> para processar a geração de relatórios em um ambiente separado da API principal, garantindo que a geração de relatórios não impacte o desempenho da aplicação principal.
                </li>
            </ul>
            <p>
                <strong>Impacto dos Resultados:</strong>
            </p>
            <ul>
                <li>
                    <strong>Redução de Sobrecargas:</strong> A separação do processo de geração de relatórios da API principal resultou em uma redução significativa das sobrecargas no sistema, melhorando a performance geral da plataforma.
                </li>
                <li>
                    <strong>Redução de Custos:</strong> A otimização do processo de geração de relatórios e a redução do tempo de processamento contribuíram para uma diminuição nos custos operacionais, devido ao uso mais eficiente dos recursos computacionais.
                </li>
            </ul>
        </div>
    );
}

export default Projeto1;
