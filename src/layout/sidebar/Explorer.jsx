import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VscChevronRight, VscChevronDown, VscFolder } from "react-icons/vsc";
import { fileTree } from "../../data/fileTree";
import { fileIconFor } from "../../lib/fileIcons";

function TreeNode({ node, depth, onNavigate }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  if (node.type === "folder") {
    return (
      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-1.5 px-2 py-1 text-sm text-gruvbox-fg/90 hover:bg-gruvbox-elevated rounded transition-colors"
          style={{ paddingLeft: `${depth * 14 + 8}px` }}
        >
          {open ? <VscChevronDown size={14} /> : <VscChevronRight size={14} />}
          <VscFolder className="text-gruvbox-aqua shrink-0" size={14} />
          <span className="truncate">{node.name}</span>
        </button>
        {open &&
          node.children?.map((child) => (
            <TreeNode key={child.name} node={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
      </div>
    );
  }

  const active = location.pathname === node.route;
  const FileIcon = fileIconFor(node.name);

  return (
    <button
      onClick={() => onNavigate(node.route)}
      className={`w-full flex items-center gap-1.5 px-2 py-1 text-sm rounded transition-colors ${
        active
          ? "bg-gruvbox-elevated text-gruvbox-orange"
          : "text-gruvbox-subtle hover:bg-gruvbox-elevated hover:text-gruvbox-fg"
      }`}
      style={{ paddingLeft: `${depth * 14 + 8 + 18}px` }}
    >
      <FileIcon className="shrink-0" size={14} />
      <span className="truncate">{node.name}</span>
    </button>
  );
}

export default function Explorer({ onNavigateComplete }) {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
    onNavigateComplete?.();
  };

  return (
    <div className="py-2">
      <p className="px-3 pb-2 text-xs tracking-widest text-gruvbox-subtle uppercase">
        Explorer
      </p>
      <TreeNode node={fileTree} depth={0} onNavigate={handleNavigate} />
    </div>
  );
}
