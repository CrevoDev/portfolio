# Estrutura de Estilos do Portfólio

## Organização Modular

A estrutura de estilos foi refatorada seguindo os princípios de **modularidade** e **manutenibilidade**, separando o CSS monolítico em módulos organizados.

## Estrutura de Diretórios

```
src/styles/
├── index.css              # Arquivo principal que importa todos os módulos
├── globals.css            # Estilos globais e variáveis CSS
├── animations.css         # Animações e keyframes
├── responsive.css         # Media queries e design responsivo
├── layouts/               # Estilos de layouts
│   └── main.css          # Layout principal
└── components/            # Estilos de componentes
    ├── header.css        # Header e navegação
    ├── sidebar.css       # Sidebar mobile
    ├── sections.css      # Seções gerais
    ├── skills.css        # Componente de habilidades
    ├── projects.css      # Componente de projetos
    └── contact.css       # Componente de contato
```

## Benefícios da Nova Estrutura

### **1. Modularidade**
- ✅ Cada componente tem seus próprios estilos
- ✅ Fácil localizar e editar estilos específicos
- ✅ Reduz conflitos entre estilos

### **2. Manutenibilidade**
- ✅ Código organizado e fácil de navegar
- ✅ Responsabilidades bem definidas
- ✅ Fácil de debugar problemas de estilo

### **3. Escalabilidade**
- ✅ Fácil adicionar novos componentes
- ✅ Estilos reutilizáveis
- ✅ Estrutura preparada para crescimento

### **4. Performance**
- ✅ CSS modular pode ser otimizado
- ✅ Imports específicos por componente
- ✅ Reduz tamanho do bundle final

## Arquivos Principais

### **`globals.css`**
- Variáveis CSS centralizadas
- Reset CSS
- Estilos base do body
- Classes utilitárias
- Estados de loading/error

### **`animations.css`**
- Keyframes para animações
- Classes de animação
- Efeitos de hover
- Transições suaves

### **`responsive.css`**
- Media queries organizadas
- Breakpoints consistentes
- Design responsivo
- Suporte a diferentes dispositivos

### **`components/`**
- Estilos específicos de cada componente
- Organizados por funcionalidade
- Fácil manutenção individual

## Variáveis CSS

### **Cores**
```css
--primary-color: #4ac9be;
--secondary-color: #ffffff;
--background-color: #0d1117;
--card-bg: #161b22;
--text-color: #e6edf3;
```

### **Espaçamentos**
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
```

### **Transições**
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-fast: all 0.2s ease;
--transition-slow: all 0.5s ease;
```

## Como Adicionar Novos Estilos

### **1. Novo Componente**
```css
/* src/styles/components/novo-componente.css */
.novo-componente {
  /* estilos específicos */
}
```

### **2. Atualizar Index**
```css
/* src/styles/index.css */
@import './components/novo-componente.css';
```

### **3. Usar no Componente**
```javascript
// No componente React
import './styles/components/novo-componente.css';
```

## Padrões Utilizados

- **BEM Methodology**: Para nomenclatura de classes
- **CSS Custom Properties**: Para variáveis reutilizáveis
- **Mobile First**: Design responsivo
- **Modular CSS**: Separação por funcionalidade
- **Consistent Naming**: Convenções de nomenclatura

## Responsividade

### **Breakpoints**
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 768px

### **Estratégia**
- Mobile First
- Progressive Enhancement
- Flexible Grid System
- Responsive Typography

## Animações

### **Princípios**
- Suaves e profissionais
- Performance otimizada
- Acessibilidade considerada
- Reduzidas para usuários com preferência

### **Tipos**
- Fade In/Out
- Scale In/Out
- Slide In/Out
- Hover Effects
- Loading States
