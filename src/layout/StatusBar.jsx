import { useLocation } from "react-router-dom";
import { VscSourceControl, VscSearch, VscBell } from "react-icons/vsc";
import { useIDEShell } from "../hooks/useIDEShell";
import { routeFileMap } from "../data/fileTree";

export default function StatusBar() {
  const location = useLocation();
  const { togglePalette } = useIDEShell();
  const fileLabel = routeFileMap[location.pathname]?.label ?? "Home.jsx";

  return (
    <div className="flex items-center justify-between h-6 md:h-[26px] bg-gruvbox-orange text-gruvbox-bg text-xs px-2 shrink-0 select-none font-mono">
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <span className="flex items-center gap-1 shrink-0">
          <VscSourceControl size={13} />
          main
        </span>
        <span className="flex items-center gap-1 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-gruvbox-green" />
          Open to work
        </span>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <span>UTF-8</span>
        <span>Ln 24, Col 7</span>
        <span>{fileLabel.endsWith(".jsx") ? "JavaScript JSX" : "Plain Text"}</span>
        <button
          onClick={togglePalette}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          aria-label="Open command palette"
        >
          <VscSearch size={13} />
          Ctrl+K
        </button>
        <VscBell size={13} />
      </div>
    </div>
  );
}
