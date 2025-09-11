import React from 'react';

/**
 * Layout para páginas específicas
 * Segue o princípio Single Responsibility Principle (SRP)
 * Responsável apenas pela estrutura de páginas
 */
const PageLayout = ({ children, className = '' }) => {
  return (
    <main className={`page-layout ${className}`}>
      {children}
    </main>
  );
};

export default PageLayout;
