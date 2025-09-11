# Arquitetura do Portfólio

## Princípios SOLID Aplicados

### 1. **Single Responsibility Principle (SRP)**
- Cada componente tem uma única responsabilidade
- `HeaderComponent`: Apenas navegação e header
- `MainLayout`: Apenas estrutura geral da aplicação
- `PageLayout`: Apenas estrutura de páginas
- `useSections`: Apenas gerenciamento de seções
- `useSidebar`: Apenas gerenciamento do sidebar

### 2. **Open/Closed Principle (OCP)**
- Componentes abertos para extensão, fechados para modificação
- `PORTFOLIO_CONFIG` permite adicionar novas configurações sem modificar código existente
- Hooks podem ser estendidos sem modificar implementação base

### 3. **Liskov Substitution Principle (LSP)**
- Componentes podem ser substituídos por suas implementações específicas
- Layouts podem ser trocados sem quebrar a aplicação

### 4. **Interface Segregation Principle (ISP)**
- Props específicas para cada componente
- Hooks com interfaces mínimas e específicas

### 5. **Dependency Inversion Principle (DIP)**
- Componentes dependem de abstrações (hooks, utils)
- Serviços injetados via hooks

## Estrutura de Diretórios

```
src/
├── components/          # Componentes reutilizáveis
├── layouts/            # Layouts da aplicação
├── pages/              # Páginas específicas
├── hooks/              # Hooks customizados
├── utils/              # Utilitários
├── constants/          # Constantes e configurações
├── services/           # Serviços e lógica de negócio
└── styles/             # Estilos (se necessário)
```

## Benefícios da Nova Arquitetura

### **Manutenibilidade**
- Código organizado e fácil de encontrar
- Responsabilidades bem definidas
- Fácil de testar individualmente

### **Escalabilidade**
- Fácil adicionar novas páginas
- Hooks reutilizáveis
- Layouts modulares

### **Legibilidade**
- Estrutura clara e intuitiva
- Nomes descritivos
- Documentação integrada

### **Reutilização**
- Hooks podem ser usados em outros projetos
- Utilitários genéricos
- Componentes modulares

## Como Adicionar Novos Recursos

### 1. **Nova Página**
```javascript
// src/pages/NewPage.js
import React from 'react';
import PageLayout from '../layouts/PageLayout';

const NewPage = () => (
  <PageLayout>
    {/* Conteúdo da página */}
  </PageLayout>
);

export default NewPage;
```

### 2. **Novo Hook**
```javascript
// src/hooks/useNewFeature.js
import { useState, useEffect } from 'react';

export const useNewFeature = () => {
  // Lógica do hook
  return { /* estado e funções */ };
};
```

### 3. **Novo Utilitário**
```javascript
// src/utils/newUtils.js
export const newUtility = () => {
  // Lógica do utilitário
};
```

## Padrões Utilizados

- **Custom Hooks**: Para lógica reutilizável
- **Layout Components**: Para estrutura consistente
- **Utility Functions**: Para funções puras
- **Constants**: Para configurações centralizadas
- **Index Files**: Para importações limpas
