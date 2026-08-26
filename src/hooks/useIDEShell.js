import { useContext } from "react";
import { IDEShellContext } from "../context/IDEShellRawContext";

export function useIDEShell() {
  const ctx = useContext(IDEShellContext);
  if (!ctx) {
    throw new Error("useIDEShell must be used within an IDEShellProvider");
  }
  return ctx;
}
