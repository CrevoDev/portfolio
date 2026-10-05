import { CASES } from './cases';
import { PROJECTS_EN } from './projects.en';
import { REPOSITORIES, STATUS_LABEL } from './repositories';

/**
 * Lista única da grade de projetos: repositórios em destaque, casos
 * profissionais e demais repositórios. `origin` define o selo do card:
 * 'public' (link para o GitHub), 'private' (sem link) ou 'case' (empresa).
 * Os textos ficam em português; `localize` aplica o overlay em inglês.
 */
const fromRepo = (repo) => ({
  id: repo.id,
  origin: repo.visibility,
  category: repo.category,
  title: repo.title,
  desc: repo.summary,
  impact: repo.tagline,
  tech: repo.stack.slice(0, 4),
  status: STATUS_LABEL[repo.status],
  year: repo.year,
  url: repo.url,
});

const fromCase = (item) => ({
  id: item.id,
  origin: 'case',
  category: item.category,
  title: item.title,
  desc: item.text,
  impact: item.result,
  tech: item.stack,
  status: item.status,
  year: item.year,
  sampleId: item.sampleId,
});

const ordered = [
  ...REPOSITORIES.filter((repo) => repo.featured).map(fromRepo),
  ...CASES.map(fromCase),
  ...REPOSITORIES.filter((repo) => !repo.featured).map(fromRepo),
];

export const PROJECTS = ordered.map((project, index) => ({
  ...project,
  idx: String(index + 1).padStart(2, '0'),
}));

export function localize(project, lang) {
  if (lang !== 'en') return project;
  const en = PROJECTS_EN[project.id];
  if (!en) return project;
  return {
    ...project,
    title: en.title ?? project.title,
    desc: en.summary ?? project.desc,
    impact: en.tagline ?? project.impact,
  };
}

export const CATEGORY_FILTERS = ['Todos', 'IA', 'Backend', 'Web', 'Mobile', 'Estudos'];
export const ORIGIN_FILTERS = ['all', 'public', 'private', 'case'];
