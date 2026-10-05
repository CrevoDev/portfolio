import Rich from './Rich';
import { useLang } from '../i18n';

const NODES = [
  [120, 180, 6], [250, 120, 5], [390, 170, 6], [520, 120, 5], [200, 300, 5], [450, 290, 6],
  [150, 440, 5], [280, 470, 6], [430, 450, 5], [540, 400, 6], [240, 560, 5], [400, 560, 5],
];

function NeuralField() {
  return (
    <svg className="neural hide-sm" aria-hidden="true" viewBox="0 0 640 640">
      <g fill="none" stroke="#2A2E34" strokeWidth="1">
        <circle className="ring" cx="320" cy="320" r="250" strokeDasharray="2 8" />
        <circle cx="320" cy="320" r="170" />
        <path d="M120 180 L250 120 L390 170 L520 120" />
        <path d="M120 180 L200 300 L320 320 L450 290 L520 120" />
        <path d="M200 300 L150 440 L280 470 L320 320 L390 170" />
        <path d="M280 470 L430 450 L450 290" />
        <path d="M430 450 L540 400 L450 290" />
        <path d="M250 120 L320 320 L540 400" />
        <path d="M150 440 L240 560 L400 560 L430 450" />
      </g>
      <g fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round">
        <path className="pulse" d="M120 180 L200 300 L320 320 L450 290 L520 120" />
        <path className="pulse" style={{ animationDelay: '-1.1s' }} d="M150 440 L280 470 L320 320 L390 170 L520 120" />
        <path className="pulse" style={{ animationDelay: '-2.2s' }} d="M240 560 L400 560 L430 450 L540 400 L450 290" />
        <path className="pulse" style={{ animationDelay: '-0.6s', animationDuration: '4s' }} d="M250 120 L320 320 L540 400" />
      </g>
      <g fill="#0A0B0D" stroke="#3A3F47" strokeWidth="1.2">
        {NODES.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      <g fill="var(--accent)">
        <circle className="node" cx="320" cy="320" r="9" />
        <circle className="node" style={{ animationDelay: '-1.2s' }} cx="390" cy="170" r="3.5" />
        <circle className="node" style={{ animationDelay: '-2.4s' }} cx="280" cy="470" r="3.5" />
        <circle className="node" style={{ animationDelay: '-0.6s' }} cx="540" cy="400" r="3.5" />
      </g>
    </svg>
  );
}

const STEP_DELAYS = ['2.2s', '3.0s', '3.8s'];

function Terminal() {
  const { t } = useLang();
  const term = t.hero.terminal;

  return (
    <div className="term fade">
      <div className="scan" aria-hidden="true" />
      <div className="term-bar">
        <div className="term-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        <span className="term-title mono">{term.title}</span>
      </div>
      <div className="term-body mono">
        <div className="tl" style={{ animationDelay: '1.3s' }}>
          <span className="ac">$</span> {term.cmd}
        </div>
        {term.steps.map((step, i) => (
          <div key={step} className="tl dim" style={{ animationDelay: STEP_DELAYS[i] }}>
            {step}
            <span className="ok">{term.ok}</span>
          </div>
        ))}
        <div className="tl ok" style={{ animationDelay: '4.6s' }}>
          <span className="ac">✓</span> {term.done}
        </div>
        <div className="fade" style={{ animationDelay: '5.4s' }}>
          <span className="ac">$</span> <span className="cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const { hero } = t;

  return (
    <section id="topo" className="hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <NeuralField />

      <div className="hero-in">
        <div className="hero-eyebrow fade mono">
          <span className="live" aria-hidden="true">
            <span className="ping" />
            <span />
          </span>
          <span>{hero.eyebrow}</span>
          <span style={{ color: '#4A4E55' }}>/</span>
          <span>{hero.location}</span>
        </div>

        <h1>
          <span className="line-mask"><span style={{ animationDelay: '.15s' }}>{hero.lines[0]}{' '}</span></span>
          <span className="line-mask"><span style={{ animationDelay: '.27s' }}>{hero.lines[1]}{' '}</span></span>
          <span className="line-mask">
            <span style={{ animationDelay: '.39s' }}>
              <Rich parts={hero.lastLine} />
            </span>
          </span>
        </h1>

        <div className="hero-row">
          <div className="hero-copy">
            <p className="fade">
              <Rich parts={hero.intro} />
            </p>
            <div className="hero-actions fade">
              <a className="btn btn-primary" href="#projetos">
                {hero.ctaProjects} <span className="arr" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#contato">{hero.ctaTalk}</a>
            </div>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
