import { useMemo } from "react";
import { useMinimapScrollSync } from "../../hooks/useMinimapScrollSync";

// Deterministic pseudo-random "code density" bars — purely decorative,
// not a mirror of real DOM content (kept intentionally lightweight).
function useDecorativeLines(count = 90) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const wobble = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
        const width = 20 + wobble * 65;
        const indent = ((i * 7) % 5) * 6;
        return { width, indent, id: i };
      }),
    [count]
  );
}

export default function Minimap({ scrollContainerRef }) {
  const { trackRef, viewport, onTrackClick, onViewportPointerDown } =
    useMinimapScrollSync(scrollContainerRef);
  const lines = useDecorativeLines();

  return (
    <div
      ref={trackRef}
      onClick={onTrackClick}
      className="hidden lg:block relative w-20 shrink-0 border-l border-gruvbox-border bg-gruvbox-bg cursor-pointer select-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 py-2 px-2 flex flex-col gap-[3px]">
        {lines.map((line) => (
          <span
            key={line.id}
            className="h-[2px] rounded-full bg-gruvbox-border-strong"
            style={{ width: `${line.width}%`, marginLeft: `${line.indent}%` }}
          />
        ))}
      </div>

      <div
        onPointerDown={onViewportPointerDown}
        className="absolute left-0 right-0 bg-gruvbox-fg/10 border border-gruvbox-orange/50 hover:bg-gruvbox-fg/15 transition-colors"
        style={{
          top: `${viewport.top * 100}%`,
          height: `${viewport.height * 100}%`,
        }}
      />
    </div>
  );
}
