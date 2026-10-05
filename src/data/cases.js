/**
 * Casos profissionais (grade de projetos). O código original é privado das
 * empresas; `sampleId` aponta para uma amostra reescrita em `src/samples`.
 * O caso de classificação de PDFs é o destaque fixo da seção (ver Projects.js).
 */
export const CASES = [
  {
    id: 'bedrock-ia',
    title: 'Aplicativo de IA com AWS Bedrock',
    category: 'IA',
    text: 'Aplicação em produção para automação de processos jurídicos, com agents inteligentes sobre IA generativa no AWS Bedrock.',
    result: '−80% no tempo de processamento',
    stack: ['Bedrock', 'Python', 'NestJS', 'TypeScript'],
    status: 'Produção',
    year: '2023–24',
    sampleId: 'bedrock-ia',
  },
  {
    id: 'report-queue',
    title: 'Otimização de Relatórios',
    category: 'Backend',
    text: 'Geração de relatórios reescrita sobre filas assíncronas, reduzindo custo operacional e tempo de espera do usuário.',
    result: '−60% no tempo de geração',
    stack: ['NestJS', 'Bull Queue', 'MongoDB', 'AWS'],
    status: 'Produção',
    year: '2023',
    sampleId: 'report-queue',
  },
  {
    id: 'legacy-angular',
    title: 'Modernização de Sistema Legado',
    category: 'Web',
    text: 'Migração completa de AngularJS para Angular, com ganho de performance, manutenibilidade e estabilidade.',
    result: '−80% em bugs reportados',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    status: 'Concluído',
    year: '2022',
    sampleId: 'legacy-angular',
  },
  {
    id: 'chat-realtime',
    title: 'Chat em Tempo Real',
    category: 'Backend',
    text: 'Mensageria instantânea com WebSocket e persistência relacional, em arquitetura pensada para escalar.',
    result: 'Tempo real com persistência confiável',
    stack: ['NestJS', 'WebSocket', 'TypeORM', 'PostgreSQL'],
    status: 'Produção',
    year: '2022',
    sampleId: 'chat-realtime',
  },
  {
    id: 'browser-ext',
    title: 'Extensões de Navegador',
    category: 'Web',
    text: 'Extensão Chrome que automatiza preenchimento de formulários com scripts personalizados por site.',
    result: 'Produtividade em tarefas repetitivas',
    stack: ['JavaScript', 'Chrome API', 'DevTools'],
    status: 'Produção',
    year: '2022',
    sampleId: 'browser-ext',
  },
];
