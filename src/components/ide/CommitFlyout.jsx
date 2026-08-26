import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { VscClose, VscGitCommit, VscArrowRight } from "react-icons/vsc";
import CommitDetails from "./CommitDetails";

const FLYOUT_WIDTH = 360;

export default function CommitFlyout({ entry, anchorRect, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const onPointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [onClose]);

  if (!anchorRect) return null;

  const left = Math.min(anchorRect.right + 8, window.innerWidth - FLYOUT_WIDTH - 12);
  const top = Math.min(Math.max(anchorRect.top, 12), window.innerHeight - 280);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96, x: -6 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.15 }}
      style={{ position: "fixed", top, left, width: FLYOUT_WIDTH }}
      className="z-[60] max-h-[70vh] overflow-y-auto bg-gruvbox-panel border border-gruvbox-border-strong rounded-lg shadow-2xl"
    >
      <div className="flex items-start justify-between gap-3 p-4 border-b border-gruvbox-border sticky top-0 bg-gruvbox-panel">
        <div className="min-w-0 flex items-start gap-2">
          <VscGitCommit className="text-gruvbox-green mt-0.5 shrink-0" size={15} />
          <div className="min-w-0">
            <p className="font-mono text-sm text-gruvbox-green break-words">
              {entry.commitMessage}
            </p>
            <p className="text-xs text-gruvbox-subtle mt-1">
              {entry.company} &middot; {entry.date}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gruvbox-subtle hover:text-gruvbox-fg shrink-0"
          aria-label="Close"
        >
          <VscClose size={16} />
        </button>
      </div>

      <div className="p-4">
        <CommitDetails title={entry.title} achievements={entry.achievements} />
        <Link
          to={`/about#experience-${entry.id}`}
          onClick={onClose}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-gruvbox-aqua hover:underline"
        >
          View in About <VscArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}
