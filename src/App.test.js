import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { PROJECTS } from './data/projects';
import { REPOSITORIES } from './data/repositories';

const card = (title) => screen.getByRole('heading', { name: title }).closest('article');

beforeEach(() => {
  localStorage.clear();
  Object.defineProperty(window.navigator, 'language', { value: 'pt-BR', configurable: true });
});

test('mostra o título do hero e a navegação principal', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Transformo processos lentos em sistemas que pensam.');
  ['Sobre', 'Stack', 'Trajetória', 'Projetos', 'Contato'].forEach((label) => {
    expect(screen.getByRole('link', { name: new RegExp(`^${label}`) })).toBeInTheDocument();
  });
});

test('botão de idioma alterna para inglês e volta', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /switch to english/i }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('I turn slow processes into systems that think.');
  expect(document.documentElement.lang).toBe('en');
  const h2s = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
  expect(h2s).toContain('Work that ships.');
  expect(card('Real-time chat')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /mudar para português/i }));
  expect(document.documentElement.lang).toBe('pt-BR');
  expect(card('Chat em Tempo Real')).toBeInTheDocument();
});

test('contato só por e-mail, LinkedIn e GitHub, sem telefone nem WhatsApp', () => {
  const { container } = render(<App />);
  expect(container.querySelector('a[href*="wa.me"]')).toBeNull();
  expect(container.querySelector('a[href^="tel:"]')).toBeNull();
  expect(container.textContent).not.toMatch(/99875|9\s?9875/);
  expect(screen.getByRole('link', { name: /cleverson\.pedroso\.professional@gmail\.com/ })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
});

test('bio não afirma o que o CV não sustenta', () => {
  const { container } = render(<App />);
  const text = container.textContent;
  expect(text).toContain('5 anos de programação');
  expect(text).toContain('Docato (COUNT)');
  expect(text).not.toMatch(/Vertex AI|Cloud Vision|AWS Certified|Scrum Master/);
});

test('repositórios privados não têm link e mostram o selo privado', () => {
  render(<App />);
  REPOSITORIES.filter((repo) => repo.visibility === 'private').forEach((repo) => expect(repo.url).toBeUndefined());
  PROJECTS.filter((project) => project.origin === 'private').forEach((project) => expect(project.url).toBeUndefined());

  const nexo = card('Nexo');
  expect(within(nexo).getByText(/privado/i)).toBeInTheDocument();
  expect(within(nexo).queryByRole('link')).toBeNull();
});

test('repositórios públicos apontam para o GitHub', () => {
  render(<App />);
  const link = within(card('DevFlow')).getByRole('link', { name: /abrir devflow no github/i });
  expect(link).toHaveAttribute('href', 'https://github.com/CrevoDev/devflow');
});

test('filtro de origem "Privados" esconde públicos e casos', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Privados' }));
  expect(screen.getByRole('heading', { name: 'Nexo' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'DevFlow' })).toBeNull();
  expect(screen.queryByRole('heading', { name: 'Otimização de Relatórios' })).toBeNull();
});

test('filtro de categoria "Mobile" lista só projetos mobile', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Mobile' }));
  expect(screen.getByRole('heading', { name: 'Financial Copilot' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Nexo' })).toBeNull();
});

test('casos com amostra abrem o modal de código', () => {
  render(<App />);
  fireEvent.click(within(card('Chat em Tempo Real')).getByRole('button', { name: /ver amostra/i }));
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
