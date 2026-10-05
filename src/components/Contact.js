import Rich from './Rich';
import SectionLabel from './SectionLabel';
import { PROFILE, SOCIAL } from '../data/profile';
import { useLang } from '../i18n';

const CHANNELS = [
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'GitHub', href: SOCIAL.github },
];

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contato" className="contato">
      <div className="grid-bg" aria-hidden="true" />
      <div className="contato-in">
        <div className="contato-main">
          <SectionLabel n="05">{t.contact.label}</SectionLabel>
          <h2 className="reveal">
            <Rich parts={t.contact.title} />
          </h2>
          <p className="reveal">{t.contact.text}</p>
          <div className="reveal">
            <a className="btn btn-primary btn-lg" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email} <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="socials reveal">
          {CHANNELS.map((channel) => (
            <a key={channel.label} className="social" href={channel.href} target="_blank" rel="noopener noreferrer">
              <span>{channel.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="footer mono">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>{t.contact.footerRight}</span>
      </footer>
      <div className="wordmark" aria-hidden="true">CLEVERSON</div>
    </section>
  );
}
