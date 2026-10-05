import { useLang } from '../i18n';

export default function Metrics() {
  const { t } = useLang();

  return (
    <section className="metrics" aria-label={t.metrics.aria}>
      <div className="metrics-in">
        {t.metrics.items.map((metric) => (
          <div key={metric.count} className="metric">
            <div className="metric-value">
              {metric.prefix && <span>{metric.prefix}</span>}
              <span className={`count ${metric.count}`} />
              <span className="u">{metric.suffix}</span>
            </div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
