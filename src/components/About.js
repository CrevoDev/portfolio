import Rich from './Rich';
import SectionLabel from './SectionLabel';
import { useLang } from '../i18n';

export default function About() {
  const { t } = useLang();
  const { about } = t;

  return (
    <section id="sobre" className="sec sobre">
      <SectionLabel n="01">{about.label}</SectionLabel>

      <p className="statement reveal">
        <Rich parts={about.statement} />
      </p>

      <div className="sobre-cols">
        <div className="sobre-text reveal">
          {about.paragraphs.map((parts, i) => (
            <p key={i}>
              <Rich parts={parts} />
            </p>
          ))}
        </div>

        <aside className="now card reveal" aria-label={about.now.aria}>
          <div className="now-top">
            <span className="k mono">{about.now.k}</span>
            <span className="on mono"><i />{about.now.on}</span>
          </div>
          <div className="now-col">
            <span className="now-role">{about.now.role}</span>
            <span className="now-sub">{about.now.sub}</span>
          </div>
          <hr />
          <div className="now-col">
            <span className="now-k mono">{about.now.buildK}</span>
            <span className="now-build">{about.now.build}</span>
          </div>
          <hr />
          <div className="now-col">
            <span className="now-k mono">{about.now.openK}</span>
            <span className="now-build">{about.now.open}</span>
          </div>
        </aside>
      </div>

      <div className="principles">
        {about.principles.map((item) => (
          <div key={item.id} className="principle reveal">
            <span className="id mono">{item.id}</span>
            <span className="t">{item.title}</span>
            <span className="d">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
