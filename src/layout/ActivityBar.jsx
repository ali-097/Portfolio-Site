import { VscSettingsGear } from "react-icons/vsc";
import { useIDEShell } from "../hooks/useIDEShell";
import { SIDEBAR_NAV_ITEMS } from "./sidebarNavItems";

export default function ActivityBar() {
  const { activeSidebarView, sidebarOpen, openSidebarView, togglePalette } = useIDEShell();

  return (
    <div className="hidden md:flex flex-col items-center w-13 py-3 bg-gruvbox-bg border-r border-gruvbox-border shrink-0">
      <div className="flex flex-col gap-1">
        {SIDEBAR_NAV_ITEMS.map(({ key, icon: Icon, label }) => {
          const active = sidebarOpen && activeSidebarView === key;
          return (
            <button
              key={key}
              onClick={() => openSidebarView(key)}
              title={label}
              aria-label={label}
              className={`relative w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                active
                  ? "text-gruvbox-orange bg-gruvbox-elevated"
                  : "text-gruvbox-subtle hover:text-gruvbox-fg"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-gruvbox-orange rounded-full" />
              )}
              <Icon size={20} />
            </button>
          );
        })}
      </div>

      <div className="mt-auto">
        <button
          onClick={togglePalette}
          title="Command Palette (Ctrl/Cmd+K)"
          aria-label="Open command palette"
          className="w-10 h-10 flex items-center justify-center rounded-md text-gruvbox-subtle hover:text-gruvbox-fg transition-colors"
        >
          <VscSettingsGear size={20} />
        </button>
      </div>
    </div>
  );
}
