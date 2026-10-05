/** Conteúdo em português. Estrutura idêntica a en.js. */
const pt = {
  htmlLang: 'pt-BR',
  meta: {
    title: 'Cleverson Pedroso | Desenvolvedor Fullstack',
    description:
      'Portfólio de Cleverson Domingues Pedroso, desenvolvedor fullstack. 5 anos de programação, 3 com IA aplicada: AWS Bedrock, Gemini, Angular, NestJS, Python e Google Cloud.',
  },

  nav: {
    aria: 'Principal',
    sub: 'engenharia · IA aplicada',
    about: 'Sobre',
    stack: 'Stack',
    path: 'Trajetória',
    projects: 'Projetos',
    contact: 'Contato',
    switchTo: 'English',
    switchLabel: 'Switch to English',
  },

  hero: {
    eyebrow: 'Desenvolvedor Fullstack · IA Generativa · Cloud',
    location: 'Ponta Grossa, PR — remoto',
    lines: ['Transformo processos', 'lentos em sistemas'],
    lastLine: ['que ', { em: 'pensam.' }],
    intro: [
      'Sou ',
      { b: 'Cleverson Domingues Pedroso' },
      '. São 5 anos de programação, 3 deles levando IA generativa do protótipo à produção: agents em AWS Bedrock, classificação de documentos com Gemini e back-ends em NestJS que aguentam carga real.',
    ],
    ctaProjects: 'Ver projetos',
    ctaTalk: 'Vamos conversar',
    terminal: {
      title: 'pipeline · ia-documentos',
      cmd: 'pipeline.run --doc peticao.pdf',
      steps: [
        '→ extraindo texto ................ ',
        '→ classificando via Bedrock ...... ',
        '→ partes, prazos e ações ......... ',
      ],
      ok: 'ok',
      done: 'pronto em segundos. antes: horas.',
    },
  },

  metrics: {
    aria: 'Impacto',
    items: [
      { prefix: '−', count: 'c80', suffix: '%', label: 'no tempo de processamento de documentos jurídicos, frente ao processo manual' },
      { count: 'c99', suffix: '%', label: 'de redução de tempo na classificação de PDFs frente ao trabalho manual: de horas para segundos' },
      { prefix: '−', count: 'c60', suffix: '%', label: 'no tempo de geração de relatórios com filas assíncronas' },
      { count: 'c3', suffix: '+', label: 'anos aplicando IA em produção, em 5 de programação' },
    ],
  },

  about: {
    label: 'SOBRE',
    statement: ['Acredito que tecnologia é ', { em: 'ferramenta de transformação' }, ' — e isso só acontece quando o código chega em produção e continua de pé.'],
    paragraphs: [
      [
        'Hoje sou ',
        { b: 'Desenvolvedor Fullstack na Hrestart' },
        ', no time do aplicativo: Angular, Node.js e TypeScript sobre Google Cloud. Participo das definições de produto e da arquitetura, e uso IA como a Claude para entregar mais rápido e com mais confiança: skills que rodam testes de unitários a e2e, e migrações que removem limitações de performance e qualidade técnica.',
      ],
      [
        'Na ',
        { b: 'Docato (COUNT)' },
        ', de 2021 a 2025, fui de estagiário a desenvolvedor fullstack e integrei a liderança técnica do time, sendo a única pessoa na implementação. Entreguei IA generativa em produção para o setor jurídico com AWS Bedrock e Gemini: agents, classificação de documentos PDF, infraestrutura AWS e mensageria com RabbitMQ.',
      ],
      [
        'Cheguei à tecnologia sem ninguém da área na família ou entre os amigos. Escolhi esse caminho porque senti que era o melhor futuro para mim, e porque o que a tecnologia proporciona às pessoas sempre fez meus olhos brilharem.',
      ],
      ['Curso ', { b: 'Engenharia de Software' }, ' na Anhanguera (EAD) e tenho inglês intermediário para leitura e comunicação técnica.'],
    ],
    now: {
      aria: 'Agora',
      k: 'AGORA',
      on: 'em atividade',
      role: 'Fullstack @ Hrestart',
      sub: 'Angular · Node.js · GCP · Firebase',
      buildK: 'CONSTRUINDO',
      build: 'Produtos próprios que pretendo lançar: o Nexo, um ERP lite em PWA offline-first, e o Financial Copilot, com Flutter, Firebase e IA.',
      openK: 'DISPONÍVEL',
      open: 'Para vagas (CLT ou PJ) e projetos freelance.',
    },
    principles: [
      { id: 'P.01', title: 'Rigor de engenharia', text: 'Arquitetura limpa, código legível e testes. Sistemas que outra pessoa consegue manter amanhã.' },
      { id: 'P.02', title: 'IA com propósito', text: 'IA medida em horas devolvidas às pessoas, não em demos. Primeiro o problema, depois o modelo.' },
      { id: 'P.03', title: 'Evolução contínua', text: 'Cada projeto é aprendizado aplicado. Estudo, testo e trago o que funciona para o time.' },
    ],
  },

  stack: {
    label: 'STACK',
    title: ['Da interface', 'ao ', { em: 'modelo' }, '.'],
    aside: 'Organizo minha stack como organizo sistemas: em camadas. Cada uma com responsabilidade clara, todas conversando bem.',
    layers: [
      { id: 'L5', name: 'Interface', tags: ['Angular', 'AngularJS', 'React', 'Flutter', 'TypeScript', 'JavaScript', 'PWA', 'Chrome Extensions'] },
      { id: 'L4', name: 'Inteligência', hot: 2, tags: ['AWS Bedrock', 'Gemini AI', 'Agents', 'RAG', 'Integração de LLMs'] },
      { id: 'L3', name: 'Serviços', tags: ['Node.js', 'NestJS', 'Python', 'C# (.NET)', 'REST', 'Swagger', 'WebSocket', 'GraphQL'] },
      {
        id: 'L2',
        name: 'Dados & mensageria',
        tags: ['Firestore', 'Realtime Database', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'SQLite', 'Qdrant', 'RabbitMQ', 'SQS', 'Bull Queue'],
      },
      {
        id: 'L1',
        name: 'Infraestrutura',
        tags: ['AWS Lambda · EC2 · S3 · ECS', 'Cloud Run', 'Cloud Functions', 'Firebase', 'Docker', 'GitHub Actions', 'Jenkins', 'Rancher', 'Git'],
      },
    ],
  },

  marquee: ['AWS Bedrock', 'Gemini', 'NestJS', 'Angular', 'Python', 'Flutter', 'Cloud Run', 'Firebase', 'RabbitMQ', 'PostgreSQL'],

  path: {
    label: 'TRAJETÓRIA',
    title: ['Construído ', { em: 'commit' }, ' a commit.'],
    jobs: [
      {
        period: 'fev 2026 — presente',
        kind: 'Remoto · atual',
        role: 'Desenvolvedor Fullstack',
        org: 'Hrestart',
        dot: 'accent',
        desc: 'Time do aplicativo da plataforma, em Angular, Node.js e TypeScript sobre Google Cloud: APIs, autenticação, serverless com Cloud Functions e Cloud Run, Firebase e CI/CD com GitHub Actions. Participo das definições de produto e da arquitetura, junto a produto, operações e clientes. Skills no Claude automatizam testes de unitários a e2e; migrações removeram limitações de performance e qualidade técnica, e os testes reduziram incidentes.',
        tech: ['Angular', 'Node.js', 'TypeScript', 'Cloud Run', 'Firebase', 'GitHub Actions', 'Claude'],
      },
      {
        period: 'nov 2021 — out 2025',
        kind: 'Estágio → Fullstack',
        role: 'Desenvolvedor Fullstack & IA',
        org: 'Docato (COUNT)',
        dot: 'light',
        desc: 'Estagiário até jun/2022 e, desde jul/2022, desenvolvedor fullstack, na liderança técnica e como único responsável pela implementação. IA generativa para o jurídico com AWS Bedrock e Gemini: agents, classificação e preenchimento automático de PDFs, scripts de automação (−60% de tempo operacional), infraestrutura AWS e pipelines com Jenkins, mensageria com RabbitMQ.',
        tech: ['AWS Bedrock', 'Gemini', 'Python', 'NestJS', 'Angular', 'Jenkins', 'RabbitMQ'],
      },
      {
        period: 'em andamento',
        kind: 'EAD · 2º ano',
        role: 'Engenharia de Software',
        org: 'Anhanguera',
        dot: 'muted',
        desc: 'Bacharelado com foco em arquitetura de software, engenharia de requisitos e testes, estruturas de dados e metodologias ágeis. Inglês intermediário para leitura e comunicação técnica.',
        tech: ['Arquitetura', 'Scrum', 'UML', 'SQL'],
      },
      {
        period: 'mai — jun 2021',
        kind: 'Primeiro passo',
        role: 'Instrutor de Informática',
        org: 'Jumper Profissões e Idiomas',
        dot: 'muted',
        desc: 'Aulas de Word, Excel e PowerPoint, e manutenção e suporte de hardware e software.',
        tech: [],
      },
    ],
  },

  projects: {
    label: 'PROJETOS',
    title: ['Trabalho que ', { em: 'entrega' }, '.'],
    filterCategory: 'Filtrar por categoria',
    filterOrigin: 'Filtrar por origem',
    categories: { Todos: 'Todos', IA: 'IA', Backend: 'Backend', Web: 'Web', Mobile: 'Mobile', Estudos: 'Estudos' },
    origins: { all: 'Todas as origens', public: 'Públicos', private: 'Privados', case: 'Empresa' },
    note: (s) =>
      `${s.total} repositórios no GitHub: ${s.public} públicos, com link para o código, e ${s.private} privados, mostrados aqui só como descrição. Os casos de empresa não têm código aberto.`,
    badges: { public: 'abrir no GitHub', private: 'privado', case: 'empresa' },
    privateTitle: 'Repositório privado',
    openRepo: (title) => `Abrir ${title} no GitHub`,
    sample: 'ver amostra de código →',
    empty: 'Nenhum projeto encontrado para esse filtro.',
    allCode: 'Ver todo o código no GitHub',
    status: { Produção: 'Produção', Concluído: 'Concluído', 'Em desenvolvimento': 'Em desenvolvimento', Estudo: 'Estudo', Conceito: 'Conceito' },
    featured: {
      badge: 'DESTAQUE',
      meta: 'IA/ML · Produção · 2023',
      title: 'IA Generativa para análise de documentos jurídicos',
      desc: 'Classificação automática de PDFs jurídicos orquestrando múltiplos provedores de IA. Extrai partes, prazos e ações recomendadas, e automatiza o fluxo de ponta a ponta.',
      stats: [
        { v: '99%', l: 'menos tempo que o processo manual', accent: true },
        { v: 'horas → s', l: 'tempo por documento' },
      ],
      tags: ['AWS Bedrock', 'Gemini AI', 'Python', 'Apps Script', 'PDF'],
    },
  },

  sample: {
    copy: 'Copiar',
    copied: 'Copiado!',
    close: 'Fechar amostra de código',
    titles: {},
  },

  contact: {
    label: 'CONTATO',
    title: ['Vamos construir algo que ', { em: 'dure' }, '.'],
    text: 'Uma vaga, um projeto freelance ou um time que precisa de mais uma pessoa séria no código: me escreva.',
    footerRight: 'Brasil — feito com rigor',
  },
};

export default pt;
