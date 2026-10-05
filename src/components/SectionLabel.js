export default function SectionLabel({ n, children }) {
  return (
    <div className="eyebrow reveal mono">
      <span className="n">{n}</span>
      <span className="rule" />
      <span>{children}</span>
    </div>
  );
}
