import { useLang } from '../i18n';

export default function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((name, i) => (
          <span key={`${name}-${i}`} style={{ display: 'contents' }}>
            <span>{name}</span>
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
