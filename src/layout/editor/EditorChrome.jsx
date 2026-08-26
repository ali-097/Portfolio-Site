import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { routeFileMap } from "../../data/fileTree";
import Minimap from "./Minimap";

export default function EditorChrome({ children }) {
  const location = useLocation();
  const scrollRef = useRef(null);
  const breadcrumb =
    routeFileMap[location.pathname]?.path ?? "portfolio > src > pages > Home.jsx";

  useEffect(() => {
    // Skip when a hash is present — a page-level deep link (e.g. the
    // Source Control flyout's mobile fallback) owns the scroll target then.
    if (location.hash) return;
    scrollRef.current?.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <div className="flex-1 flex overflow-hidden min-h-0">
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <div className="px-4 py-1.5 text-xs text-gruvbox-subtle border-b border-gruvbox-border shrink-0 truncate">
          {breadcrumb}
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
      <Minimap scrollContainerRef={scrollRef} />
    </div>
  );
}
