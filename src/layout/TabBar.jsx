import { Link } from "react-router-dom";
import { VscClose, VscMenu } from "react-icons/vsc";
import { useOpenTabs } from "../hooks/useOpenTabs";
import { useIDEShell } from "../hooks/useIDEShell";
import { fileIconFor } from "../lib/fileIcons";

export default function TabBar() {
  const { tabs, closeTab } = useOpenTabs();
  const { sidebarOpen, setSidebarOpen } = useIDEShell();

  return (
    <div className="flex items-stretch bg-gruvbox-bg border-b border-gruvbox-border shrink-0 overflow-x-auto">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
        className="md:hidden shrink-0 w-11 flex items-center justify-center text-gruvbox-subtle hover:text-gruvbox-fg border-r border-gruvbox-border"
      >
        <VscMenu size={18} />
      </button>

      {tabs.map((tab) => {
        const FileIcon = fileIconFor(tab.label);

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`group flex items-center gap-2 px-3 py-2.5 text-sm border-r border-gruvbox-border whitespace-nowrap shrink-0 transition-colors ${
              tab.active
                ? "bg-gruvbox-panel text-gruvbox-fg"
                : "text-gruvbox-subtle hover:text-gruvbox-fg hover:bg-gruvbox-elevated/50"
            }`}
          >
            <FileIcon
              size={14}
              className={tab.active ? "text-gruvbox-orange" : "text-gruvbox-subtle"}
            />
            <span>{tab.label}</span>
            {!tab.pinned && (
              <span
                role="button"
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeTab(tab.path);
                }}
                className="ml-1 opacity-0 group-hover:opacity-100 hover:text-gruvbox-red transition-opacity"
                aria-label={`Close ${tab.label}`}
              >
                <VscClose size={14} />
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
