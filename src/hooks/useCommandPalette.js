import { useEffect } from "react";
import { useIDEShell } from "./useIDEShell";

export function useCommandPalette() {
  const { paletteOpen, setPaletteOpen, togglePalette } = useIDEShell();

  useEffect(() => {
    const onKeyDown = (e) => {
      const isK = e.key.toLowerCase() === "k";
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        togglePalette();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [togglePalette]);

  return { paletteOpen, setPaletteOpen };
}
