import { useCallback, useState } from "react";
import { IDEShellContext } from "./IDEShellRawContext";

export function IDEShellProvider({ children }) {
  const [activeSidebarView, setActiveSidebarView] = useState("explorer");
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const openSidebarView = useCallback((view) => {
    setActiveSidebarView((current) => {
      if (current === view) {
        setSidebarOpen((open) => !open);
        return current;
      }
      setSidebarOpen(true);
      return view;
    });
  }, []);

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
