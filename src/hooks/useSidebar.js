import { useState, useCallback } from 'react';

/**
 * Hook customizado para gerenciar o estado do sidebar
 * Segue o princípio Single Responsibility Principle (SRP)
 */
export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar
  };
};
