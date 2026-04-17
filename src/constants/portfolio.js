/**
 * Constantes do portfólio
 * Centraliza todas as configurações e textos estáticos
 * Segue o princípio Open/Closed Principle (OCP)
 */

export const PORTFOLIO_CONFIG = {
  AUTHOR: {
    NAME: 'Cleverson Domingues Pedroso',
    EMAIL: 'cleverson.pedroso.professional@gmail.com',
    PHONE: '+55 (42) 99875-5280',
    LOCATION: 'Ponta Grossa, PR - Brasil'
  },
  
  ROUTES: {
    HOME: '/portfolio/',
    ABOUT: '#sobre-mim',
    SKILLS: '#habilidades',
    EXPERIENCE: '#experiencia',
    PROJECTS: '#projetos',
    CONTACT: '#contato'
  },

  ANIMATION_DELAYS: {
    HEADER: 0.8,
    SECTIONS: 0.6,
    CARDS: 0.5,
    LINKS: 0.4
  },

  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1200
  }
};

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/cleverson-pedroso-9a8226287',
  GITHUB: 'https://github.com/CrevoDev',
  WHATSAPP: 'https://wa.me/5542998755280'
};

export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${PORTFOLIO_CONFIG.AUTHOR.NAME}`;
