import { useCallback, useState } from "react";
import { IDEShellContext } from "./IDEShellRawContext";

export function IDEShellProvider({ children }) {
  const [activeSidebarView, setActiveSidebarView] = useState("explorer");
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Both setters are called at the top level rather than nesting one inside
  // the other's updater — an updater that fires a side effect gets run twice
  // under StrictMode, which would toggle sidebarOpen back to where it started.
  const openSidebarView = useCallback(
    (view) => {
      if (activeSidebarView === view) {
        setSidebarOpen((open) => !open);
        return;
      }
      setActiveSidebarView(view);
      setSidebarOpen(true);
    },
    [activeSidebarView]
  );

  const toggleTerminal = useCallback(() => setTerminalOpen((v) => !v), []);
  const togglePalette = useCallback(() => setPaletteOpen((v) => !v), []);

  const value = {
    activeSidebarView,
    sidebarOpen,
    setSidebarOpen,
    openSidebarView,
    terminalOpen,
    setTerminalOpen,
    toggleTerminal,
    paletteOpen,
    setPaletteOpen,
    togglePalette,
  };

  return (
    <IDEShellContext.Provider value={value}>
      {children}
    </IDEShellContext.Provider>
  );
}
