import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscTerminal, VscWarning, VscClose } from "react-icons/vsc";
import { useIDEShell } from "../hooks/useIDEShell";
import Terminal from "../components/ide/Terminal";

const isTypingTarget = (el) =>
  el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);

export default function BottomPanel() {
  const { terminalOpen, toggleTerminal, setTerminalOpen } = useIDEShell();
  const [tab, setTab] = useState("terminal");

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "`") return;
      if (isTypingTarget(document.activeElement)) return;
      e.preventDefault();
      toggleTerminal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleTerminal]);

  return (
    <AnimatePresence>
      {terminalOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "clamp(220px, 32vh, 320px)" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="shrink-0 border-t border-gruvbox-border bg-gruvbox-panel overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between border-b border-gruvbox-border shrink-0">
            <div className="flex">
              <button
                onClick={() => setTab("terminal")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-gruvbox-border ${
                  tab === "terminal"
                    ? "text-gruvbox-fg bg-gruvbox-elevated"
                    : "text-gruvbox-subtle hover:text-gruvbox-fg"
                }`}
              >
                <VscTerminal size={13} /> TERMINAL
              </button>
              <button
                onClick={() => setTab("problems")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-gruvbox-border ${
                  tab === "problems"
                    ? "text-gruvbox-fg bg-gruvbox-elevated"
                    : "text-gruvbox-subtle hover:text-gruvbox-fg"
                }`}
              >
                <VscWarning size={13} /> PROBLEMS
              </button>
            </div>
            <button
              onClick={() => setTerminalOpen(false)}
              className="px-2 text-gruvbox-subtle hover:text-gruvbox-fg"
              aria-label="Close panel"
            >
              <VscClose size={15} />
            </button>
          </div>

          <div className="flex-1 min-h-0">
            {tab === "terminal" ? (
              <Terminal />
            ) : (
              <div className="p-4 text-sm text-gruvbox-subtle font-mono">
                0 errors, 0 warnings — ready to hire.
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
