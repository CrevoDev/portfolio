import { PROFILE } from '../data/profile';
import { useLang } from '../i18n';

export default function Nav() {
  const { t, toggle } = useLang();

  return (
    <header className="nav">
      <nav className="nav-in" aria-label={t.nav.aria}>
        <a className="brand" href="#topo">
          <span className="brand-mark mono">
            cp
            <i />
          </span>
          <span className="brand-text">
            <span className="brand-name">{PROFILE.shortName}</span>
            <span className="brand-sub mono">{t.nav.sub}</span>
          </span>
        </a>
        <div className="nav-right">
          <a className="nav-link" href="#sobre">{t.nav.about}</a>
          <a className="nav-link" href="#stack">{t.nav.stack}</a>
          <a className="nav-link" href="#trajetoria">{t.nav.path}</a>
          <a className="nav-link" href="#projetos">{t.nav.projects}</a>
          <button type="button" className="lang-btn mono" onClick={toggle} aria-label={t.nav.switchLabel}>
            {t.nav.switchTo}
          </button>
          <a className="btn btn-primary btn-sm" href="#contato">
            {t.nav.contact} <span className="arr" aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
