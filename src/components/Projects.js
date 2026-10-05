import { useMemo, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import Rich from './Rich';
import SectionLabel from './SectionLabel';
import CodeSampleModal from './CodeSampleModal';
import { CATEGORY_FILTERS, ORIGIN_FILTERS, PROJECTS, localize } from '../data/projects';
import { GITHUB_SNAPSHOT, SOCIAL } from '../data/profile';
import { useLang } from '../i18n';
import { samplesById } from '../samples';

function FeaturedCase() {
  const { t } = useLang();
  const featured = t.projects.featured;

  return (
    <article className="card featured reveal">
      <div className="featured-main">
        <div className="featured-meta">
          <span className="badge mono">{featured.badge}</span>
          <span className="m mono">{featured.meta}</span>
        </div>
        <h3>{featured.title}</h3>
        <p className="featured-desc">{featured.desc}</p>
        <div className="featured-stats">
          {featured.stats.map((stat) => (
            <div key={stat.v} className="fstat">
              <span className={`v${stat.accent ? ' ac' : ''}`}>{stat.v}</span>
              <span className="l">{stat.l}</span>
            </div>
          ))}
        </div>
        <div className="tags">
          {featured.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="featured-code">
        <div className="code-bar mono">
          <span className="f">bedrock_service.py</span>
          <span className="l">python</span>
        </div>
        <pre className="mono">
          <code>
            <span className="kw">import</span> json, boto3{'\n\n'}
            bedrock = boto3.client(<span className="st">'bedrock-runtime'</span>){'\n\n'}
            <span className="kw">def</span> <span className="fn">analyze_document</span>(text: str, doc_type: str)
            -&gt; dict:{'\n'}
            {'    '}prompt = ({'\n'}
            {'        '}<span className="st">f"Analise o documento jurídico ({'{'}doc_type{'}'}). "</span>{'\n'}
            {'        '}<span className="st">"Extraia partes, prazos e ações recomendadas."</span>{'\n'}
            {'    '}){'\n'}
            {'    '}response = bedrock.invoke_model({'\n'}
            {'        '}modelId=MODEL_ID,{'\n'}
            {'        '}body=build_body(prompt, text[:8000]),{'\n'}
            {'    '}){'\n'}
            {'    '}body = json.loads(response[<span className="st">'body'</span>].read()){'\n'}
            {'    '}<span className="kw">return</span> json.loads(body[<span className="st">'content'</span>][0][
            <span className="st">'text'</span>])
          </code>
        </pre>
      </div>
    </article>
  );
}

function ProjectCard({ project, onOpenSample }) {
  const { t } = useLang();
  const text = t.projects;

  return (
    <article className="card project reveal">
      <div className="project-top">
        <span className="project-cat mono">
          {project.idx} · {text.categories[project.category] ?? project.category}
        </span>
        {project.origin === 'public' && (
          <a
            className="corner"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.openRepo(project.title)}
          >
            ↗
          </a>
        )}
        {project.origin === 'private' && (
          <span className="corner corner-private" title={text.privateTitle}>
            <FaLock aria-hidden="true" size={11} /> {text.badges.private}
          </span>
        )}
        {project.origin === 'case' && <span className="corner corner-private">{text.badges.case}</span>}
      </div>
      <h3>{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      {project.sampleId && (
        <button type="button" className="sample-btn" onClick={() => onOpenSample(project.sampleId)}>
          {text.sample}
        </button>
      )}
      <div className="project-impact">
        <i />
        <span>{project.impact}</span>
      </div>
      <div className="project-foot">
        {project.tech.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
        <span className="meta mono">
          {text.status[project.status] ?? project.status} · {project.year}
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const text = t.projects;
  const [category, setCategory] = useState('Todos');
  const [origin, setOrigin] = useState('all');
  const [openSampleId, setOpenSampleId] = useState(null);

  const visible = useMemo(
    () =>
      PROJECTS.filter(
        (project) =>
          (category === 'Todos' || project.category === category) && (origin === 'all' || project.origin === origin)
      ).map((project) => localize(project, lang)),
    [category, origin, lang]
  );

  const showFeatured = (category === 'Todos' || category === 'IA') && (origin === 'all' || origin === 'case');

  return (
    <section id="projetos" className="sec projetos">
      <div className="sec-head">
        <div className="sec-title-wrap">
          <SectionLabel n="04">{text.label}</SectionLabel>
          <h2 className="h2 reveal">
            <Rich parts={text.title} />
          </h2>
        </div>
        <div className="filters">
          <div className="chips" role="group" aria-label={text.filterCategory}>
            {CATEGORY_FILTERS.map((id) => (
              <button
                key={id}
                type="button"
                className="chip"
                aria-pressed={category === id}
                onClick={() => setCategory(id)}
              >
                {text.categories[id]}
              </button>
            ))}
          </div>
          <div className="chips" role="group" aria-label={text.filterOrigin}>
            {ORIGIN_FILTERS.map((id) => (
              <button key={id} type="button" className="chip" aria-pressed={origin === id} onClick={() => setOrigin(id)}>
                {text.origins[id]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="projetos-note">{text.note(GITHUB_SNAPSHOT)}</p>

      {showFeatured && <FeaturedCase />}

      {visible.length === 0 ? (
        <p className="empty">{text.empty}</p>
      ) : (
        <div className="grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenSample={setOpenSampleId} />
          ))}
        </div>
      )}

      <a className="all-code reveal" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
        <span>{text.allCode}</span>
        <span className="mono">github.com/CrevoDev ↗</span>
      </a>

      <CodeSampleModal sample={openSampleId ? samplesById[openSampleId] : null} onClose={() => setOpenSampleId(null)} />
    </section>
  );
}
