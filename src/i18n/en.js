/** English content. Same shape as pt.js. */
const en = {
  htmlLang: 'en',
  meta: {
    title: 'Cleverson Pedroso | Fullstack Developer',
    description:
      'Portfolio of Cleverson Domingues Pedroso, fullstack developer. 5 years of programming, 3 with applied AI: AWS Bedrock, Gemini, Angular, NestJS, Python and Google Cloud.',
  },

  nav: {
    aria: 'Main',
    sub: 'engineering · applied AI',
    about: 'About',
    stack: 'Stack',
    path: 'Journey',
    projects: 'Projects',
    contact: 'Contact',
    switchTo: 'Português',
    switchLabel: 'Mudar para português',
  },

  hero: {
    eyebrow: 'Fullstack Developer · Generative AI · Cloud',
    location: 'Ponta Grossa, Brazil — remote',
    lines: ['I turn slow processes', 'into systems'],
    lastLine: ['that ', { em: 'think.' }],
    intro: [
      "I'm ",
      { b: 'Cleverson Domingues Pedroso' },
      '. 5 years of programming, 3 of them taking generative AI from prototype to production: agents on AWS Bedrock, document classification with Gemini and NestJS back-ends that handle real load.',
    ],
    ctaProjects: 'See projects',
    ctaTalk: "Let's talk",
    terminal: {
      title: 'pipeline · doc-ai',
      cmd: 'pipeline.run --doc petition.pdf',
      steps: [
        '→ extracting text ................ ',
        '→ classifying via Bedrock ........ ',
        '→ parties, deadlines, actions .... ',
      ],
      ok: 'ok',
      done: 'done in seconds. before: hours.',
    },
  },

  metrics: {
    aria: 'Impact',
    items: [
      { prefix: '−', count: 'c80', suffix: '%', label: 'in processing time for legal documents, compared with the manual process' },
      { count: 'c99', suffix: '%', label: 'less time classifying PDFs than doing it by hand: from hours to seconds' },
      { prefix: '−', count: 'c60', suffix: '%', label: 'in report generation time with asynchronous queues' },
      { count: 'c3', suffix: '+', label: 'years applying AI in production, out of 5 programming' },
    ],
  },

  about: {
    label: 'ABOUT',
    statement: ['I believe technology is a ', { em: 'tool for transformation' }, ' — and that only happens when the code reaches production and stays up.'],
    paragraphs: [
      [
        "I'm currently a ",
        { b: 'Fullstack Developer at Hrestart' },
        ', on the app team: Angular, Node.js and TypeScript on Google Cloud. I take part in product and architecture decisions, and use AI tools like Claude to deliver faster and with more confidence: skills that run tests from unit to e2e, and migrations that remove performance and technical-quality limits.',
      ],
      [
        'At ',
        { b: 'Docato (COUNT)' },
        ', from 2021 to 2025, I went from intern to fullstack developer and was part of the team’s technical leadership, as the only person implementing. I shipped generative AI to production for the legal sector with AWS Bedrock and Gemini: agents, PDF document classification, AWS infrastructure and messaging with RabbitMQ.',
      ],
      [
        'I came into tech with nobody in the field among my family or friends. I chose this path because I felt it was the best future for me, and because what technology does for people has always made my eyes light up.',
      ],
      ['I study ', { b: 'Software Engineering' }, ' at Anhanguera (distance learning) and have intermediate English for reading and technical communication.'],
    ],
    now: {
      aria: 'Now',
      k: 'NOW',
      on: 'active',
      role: 'Fullstack @ Hrestart',
      sub: 'Angular · Node.js · GCP · Firebase',
      buildK: 'BUILDING',
      build: 'Products of my own that I plan to launch: Nexo, an offline-first PWA lite ERP, and Financial Copilot, with Flutter, Firebase and AI.',
      openK: 'AVAILABLE',
      open: 'For full-time or contract roles and freelance projects.',
    },
    principles: [
      { id: 'P.01', title: 'Engineering rigor', text: 'Clean architecture, readable code and tests. Systems someone else can maintain tomorrow.' },
      { id: 'P.02', title: 'AI with purpose', text: 'AI measured in hours given back to people, not in demos. Problem first, model second.' },
      { id: 'P.03', title: 'Continuous growth', text: 'Every project is applied learning. I study, test and bring what works to the team.' },
    ],
  },

  stack: {
    label: 'STACK',
    title: ['From interface', 'to ', { em: 'model' }, '.'],
    aside: 'I organize my stack the way I organize systems: in layers. Each with a clear responsibility, all working well together.',
    layers: [
      { id: 'L5', name: 'Interface', tags: ['Angular', 'AngularJS', 'React', 'Flutter', 'TypeScript', 'JavaScript', 'PWA', 'Chrome Extensions'] },
      { id: 'L4', name: 'Intelligence', hot: 2, tags: ['AWS Bedrock', 'Gemini AI', 'Agents', 'RAG', 'LLM integration'] },
      { id: 'L3', name: 'Services', tags: ['Node.js', 'NestJS', 'Python', 'C# (.NET)', 'REST', 'Swagger', 'WebSocket', 'GraphQL'] },
      {
        id: 'L2',
        name: 'Data & messaging',
        tags: ['Firestore', 'Realtime Database', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'SQLite', 'Qdrant', 'RabbitMQ', 'SQS', 'Bull Queue'],
      },
      {
        id: 'L1',
        name: 'Infrastructure',
        tags: ['AWS Lambda · EC2 · S3 · ECS', 'Cloud Run', 'Cloud Functions', 'Firebase', 'Docker', 'GitHub Actions', 'Jenkins', 'Rancher', 'Git'],
      },
    ],
  },

  marquee: ['AWS Bedrock', 'Gemini', 'NestJS', 'Angular', 'Python', 'Flutter', 'Cloud Run', 'Firebase', 'RabbitMQ', 'PostgreSQL'],

  path: {
    label: 'JOURNEY',
    title: ['Built ', { em: 'commit' }, ' by commit.'],
    jobs: [
      {
        period: 'Feb 2026 — present',
        kind: 'Remote · current',
        role: 'Fullstack Developer',
        org: 'Hrestart',
        dot: 'accent',
        desc: "App team for the platform, in Angular, Node.js and TypeScript on Google Cloud: APIs, authentication, serverless with Cloud Functions and Cloud Run, Firebase and CI/CD with GitHub Actions. I take part in product and architecture decisions, together with product, operations and clients. Claude skills automate tests from unit to e2e; migrations removed performance and technical-quality limits, and the tests reduced incidents.",
        tech: ['Angular', 'Node.js', 'TypeScript', 'Cloud Run', 'Firebase', 'GitHub Actions', 'Claude'],
      },
      {
        period: 'Nov 2021 — Oct 2025',
        kind: 'Intern → Fullstack',
        role: 'Fullstack & AI Developer',
        org: 'Docato (COUNT)',
        dot: 'light',
        desc: 'Intern until Jun 2022 and, from Jul 2022, fullstack developer, part of the technical leadership and the only person implementing. Generative AI for the legal sector with AWS Bedrock and Gemini: agents, automatic PDF classification and form filling, automation scripts (−60% operational time), AWS infrastructure and Jenkins pipelines, messaging with RabbitMQ.',
        tech: ['AWS Bedrock', 'Gemini', 'Python', 'NestJS', 'Angular', 'Jenkins', 'RabbitMQ'],
      },
      {
        period: 'in progress',
        kind: 'Distance learning · year 2',
        role: 'Software Engineering',
        org: 'Anhanguera',
        dot: 'muted',
        desc: "Bachelor's degree focused on software architecture, requirements engineering and testing, data structures and agile methods. Intermediate English for reading and technical communication.",
        tech: ['Architecture', 'Scrum', 'UML', 'SQL'],
      },
      {
        period: 'May — Jun 2021',
        kind: 'First step',
        role: 'IT Instructor',
        org: 'Jumper Profissões e Idiomas',
        dot: 'muted',
        desc: 'Taught Word, Excel and PowerPoint, and handled hardware and software maintenance and support.',
        tech: [],
      },
    ],
  },

  projects: {
    label: 'PROJECTS',
    title: ['Work that ', { em: 'ships' }, '.'],
    filterCategory: 'Filter by category',
    filterOrigin: 'Filter by origin',
    categories: { Todos: 'All', IA: 'AI', Backend: 'Backend', Web: 'Web', Mobile: 'Mobile', Estudos: 'Studies' },
    origins: { all: 'All origins', public: 'Public', private: 'Private', case: 'Company' },
    note: (s) =>
      `${s.total} repositories on GitHub: ${s.public} public, with a link to the code, and ${s.private} private, shown here as a description only. Company cases have no open code.`,
    badges: { public: 'open on GitHub', private: 'private', case: 'company' },
    privateTitle: 'Private repository',
    openRepo: (title) => `Open ${title} on GitHub`,
    sample: 'view code sample →',
    empty: 'No projects match this filter.',
    allCode: 'See all code on GitHub',
    status: { Produção: 'Production', Concluído: 'Done', 'Em desenvolvimento': 'In development', Estudo: 'Study', Conceito: 'Concept' },
    featured: {
      badge: 'FEATURED',
      meta: 'AI/ML · Production · 2023',
      title: 'Generative AI for legal document analysis',
      desc: 'Automatic classification of legal PDFs orchestrating multiple AI providers. Extracts parties, deadlines and recommended actions, and automates the flow end to end.',
      stats: [
        { v: '99%', l: 'less time than the manual process', accent: true },
        { v: 'hours → s', l: 'time per document' },
      ],
      tags: ['AWS Bedrock', 'Gemini AI', 'Python', 'Apps Script', 'PDF'],
    },
  },

  sample: {
    copy: 'Copy',
    copied: 'Copied!',
    close: 'Close code sample',
    titles: {
      'report-queue': ['Report optimization — BullMQ queue', 'BullMQ producer/consumer that generates heavy reports asynchronously, cutting API response time.'],
      'chat-realtime': ['Real-time chat — WebSocket gateway', 'NestJS gateway with WebSocket for real-time messages between users connected to the platform.'],
      'browser-ext': ['Chrome extension — autofill', 'Manifest V3 content script that fills repetitive forms from profiles saved by the user.'],
      'bedrock-ia': ['AI with AWS Bedrock — InvokeModel', 'Function that invokes generative models on AWS Bedrock to automate legal document analysis.'],
      'legacy-angular': ['AngularJS → Angular migration', 'Modern Angular component and service replacing legacy AngularJS logic, with typing and dependency injection.'],
    },
  },

  contact: {
    label: 'CONTACT',
    title: ["Let's build something that ", { em: 'lasts' }, '.'],
    text: 'A full-time role, a freelance project, or a team that needs one more serious person on the code: write to me.',
    footerRight: 'Brazil — built with rigor',
  },
};

export default en;
