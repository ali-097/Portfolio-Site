import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscGitCommit, VscChevronDown } from "react-icons/vsc";
import CommitDetails from "./CommitDetails";

export default function CommitEntry({
  entry,
  defaultExpanded = false,
  isLast = false,
  id,
  forceExpand = false,
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  useEffect(() => {
    if (forceExpand) setExpanded(true);
  }, [forceExpand]);

  return (
    <div id={id} className="relative pl-8">
      {!isLast && (
        <span className="absolute left-[11px] top-6 bottom-0 w-px bg-gruvbox-border-strong" />
      )}
      <span className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-gruvbox-panel border border-gruvbox-border-strong text-gruvbox-green">
        <VscGitCommit size={14} />
      </span>

      <div className="bg-gruvbox-panel border border-gruvbox-border rounded-lg mb-4 overflow-hidden">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full flex items-start justify-between gap-3 p-4 text-left hover:bg-gruvbox-elevated/60 transition-colors"
        >
          <div className="min-w-0">
            <p className="font-mono text-sm text-gruvbox-green break-words">
              {entry.commitMessage}
            </p>
            <p className="text-xs text-gruvbox-subtle mt-1">
              {entry.company} &middot; {entry.date}
            </p>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-gruvbox-subtle mt-1"
          >
            <VscChevronDown size={16} />
          </motion.span>
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.25 }}
            className="px-4 pb-4"
          >
            <CommitDetails title={entry.title} achievements={entry.achievements} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
