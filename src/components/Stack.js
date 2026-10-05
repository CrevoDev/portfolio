import Rich from './Rich';
import SectionLabel from './SectionLabel';
import { useLang } from '../i18n';

export default function Stack() {
  const { t } = useLang();
  const { stack } = t;
  const [first, ...rest] = stack.title;

  return (
    <section id="stack" className="sec stack">
      <div className="sec-head">
        <div className="sec-title-wrap">
          <SectionLabel n="02">{stack.label}</SectionLabel>
          <h2 className="h2 reveal">
            {first}
            <br />
            <Rich parts={rest} />
          </h2>
        </div>
        <p className="sec-aside reveal">{stack.aside}</p>
      </div>

      <div className="layers">
        {stack.layers.map((layer) => (
          <div key={layer.id} className="layer reveal">
            <span className="layer-idx mono">{layer.id}</span>
            <span className="layer-name">{layer.name}</span>
            <div className="tags">
              {layer.tags.map((tag, i) => (
                <span key={tag} className={`tag${layer.hot && i < layer.hot ? ' tag-hot' : ''}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
