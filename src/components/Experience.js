import Rich from './Rich';
import SectionLabel from './SectionLabel';
import { useLang } from '../i18n';

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="trajetoria" className="trajetoria">
      <div className="sec">
        <div className="sec-title-wrap">
          <SectionLabel n="03">{t.path.label}</SectionLabel>
          <h2 className="h2 reveal">
            <Rich parts={t.path.title} />
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-line grow" aria-hidden="true" />
          {t.path.jobs.map((job) => (
            <div key={`${job.org}-${job.period}`} className="job reveal">
              <span className={`job-dot job-dot-${job.dot}`} aria-hidden="true"><i /></span>
              <div className="job-when">
                <span className="p mono">{job.period}</span>
                <span className="k mono">{job.kind}</span>
              </div>
              <div className="job-what">
                <div className="job-title">
                  <span className="job-role">{job.role}</span>
                  <span className="job-org">— {job.org}</span>
                </div>
                <p className="job-desc">{job.desc}</p>
                {job.tech.length > 0 && (
                  <div className="tags">
                    {job.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
