/**
 * Utilitários para scroll e navegação
 * Segue o princípio Single Responsibility Principle (SRP)
 */

/**
 * Faz scroll suave para um elemento específico
 * @param {string} elementId - ID do elemento para scroll
 */
export const scrollToElement = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Atualiza o hash da URL sem fazer scroll
 * @param {string} hash - Hash para adicionar à URL
 */
export const updateUrlHash = (hash) => {
  if (hash) {
    window.history.replaceState(null, null, `#${hash}`);
  } else {
    window.history.replaceState(null, null, window.location.pathname);
  }
};

/**
 * Verifica se um elemento está visível na viewport
 * @param {HTMLElement} element - Elemento para verificar
 * @returns {boolean} - True se o elemento está visível
 */
export const isElementVisible = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Adiciona classe de interação aos links de navegação
 * @param {string} activeSectionId - ID da seção ativa
 */
export const updateActiveNavigation = (activeSectionId) => {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    let isActive = false;
    
    // Verificar se é a seção ativa
    if (activeSectionId === '') {
      // Seção ativa é "Início"
      isActive = href === '/portfolio/#' || href === '#';
    } else {
      // Seção ativa específica
      isActive = href === `#${activeSectionId}`;
    }
    
    if (isActive) {
      link.classList.add('interacting');
    } else {
      link.classList.remove('interacting');
    }
  });
};
