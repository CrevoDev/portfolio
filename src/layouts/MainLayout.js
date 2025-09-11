import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import SidebarComponent from '../components/SidebarComponent';
import FooterComponent from '../components/FooterComponent';
import { useSections } from '../hooks/useSections';
import { useSidebar } from '../hooks/useSidebar';

/**
 * Layout principal do portfólio
 * Segue o princípio Single Responsibility Principle (SRP)
 * Responsável apenas pela estrutura geral da aplicação
 */
const MainLayout = ({ children }) => {
  const { sections, sectionsHeader, loading, error } = useSections();
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  if (loading) {
    return (
      <div className="App">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando portfólio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error-container">
          <h2>Erro ao carregar o portfólio</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <HeaderComponent 
        sectionsHeader={sectionsHeader} 
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onCloseSidebar={closeSidebar}
      />
      
      <SidebarComponent
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        sections={sections}
      />

      {children}

      <FooterComponent />
    </div>
  );
};

export default MainLayout;
