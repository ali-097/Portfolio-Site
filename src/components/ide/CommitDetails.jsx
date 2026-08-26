export default function CommitDetails({ title, achievements }) {
  return (
    <>
      <h4 className="text-gruvbox-fg font-semibold text-sm mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {achievements.map((line, i) => (
          <li key={i} className="text-sm text-gruvbox-fg/85 flex gap-2 font-mono">
            <span className="text-gruvbox-green shrink-0">+</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
