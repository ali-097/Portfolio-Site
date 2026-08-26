import { AnimatePresence, motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { useIDEShell } from "../hooks/useIDEShell";
import { SIDEBAR_NAV_ITEMS } from "./sidebarNavItems";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import BottomPanel from "./BottomPanel";
import EditorChrome from "./editor/EditorChrome";

export default function IDEShell({ children }) {
  const { sidebarOpen, setSidebarOpen, activeSidebarView, openSidebarView } =
    useIDEShell();

  return (
    <div className="ide-shell-height flex flex-col bg-gruvbox-bg text-gruvbox-fg font-mono overflow-hidden">
      <div className="flex-1 flex overflow-hidden min-h-0 relative">
        <ActivityBar />

        {sidebarOpen && (
          <div className="hidden md:block w-64 shrink-0 border-r border-gruvbox-border overflow-hidden">
            <Sidebar />
          </div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <TabBar />
          <EditorChrome>{children}</EditorChrome>
          <BottomPanel />
        </div>

        {/* Mobile: sidebar becomes a slide-in drawer with its own activity switcher */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="md:hidden fixed inset-0 z-30 bg-black/50"
              />
              <motion.div
                key="drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.22 }}
                className="md:hidden fixed inset-y-0 left-0 z-40 w-[85vw] max-w-xs bg-gruvbox-bg border-r border-gruvbox-border-strong flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-gruvbox-border shrink-0">
                  <div className="flex">
                    {SIDEBAR_NAV_ITEMS.map(({ key, icon: Icon, label }) => (
                      <button
                        key={key}
                        onClick={() => openSidebarView(key)}
                        aria-label={label}
                        className={`p-3 ${
                          activeSidebarView === key
                            ? "text-gruvbox-orange bg-gruvbox-elevated"
                            : "text-gruvbox-subtle"
                        }`}
                      >
                        <Icon size={18} />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-3 text-gruvbox-subtle hover:text-gruvbox-fg"
                    aria-label="Close sidebar"
                  >
                    <VscClose size={18} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <Sidebar onNavigateComplete={() => setSidebarOpen(false)} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <StatusBar />
    </div>
  );
}
