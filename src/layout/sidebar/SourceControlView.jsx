import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { VscGitCommit } from "react-icons/vsc";
import { experience } from "../../data/experience";
import CommitFlyout from "../../components/ide/CommitFlyout";

export default function SourceControlView({ onNavigateComplete }) {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleRowClick = (entry, e) => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
      setActive({ entry, rect: e.currentTarget.getBoundingClientRect() });
    } else {
      onNavigateComplete?.();
      navigate(`/about#experience-${entry.id}`);
    }
  };

  return (
    <div className="py-2 px-2">
      <p className="px-1 pb-3 text-xs tracking-widest text-gruvbox-subtle uppercase">
        Source Control &middot; main
      </p>
      <div className="space-y-1">
        {experience.map((entry) => (
          <button
            key={entry.id}
            onClick={(e) => handleRowClick(entry, e)}
            className="w-full flex items-start gap-2 p-2 rounded-md text-left hover:bg-gruvbox-elevated transition-colors"
          >
            <VscGitCommit className="text-gruvbox-green mt-0.5 shrink-0" size={13} />
            <div className="min-w-0">
              <p className="text-xs text-gruvbox-fg leading-snug line-clamp-2">
                {entry.commitMessage}
              </p>
              <p className="text-[11px] text-gruvbox-subtle mt-0.5">{entry.date}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <CommitFlyout
            entry={active.entry}
            anchorRect={active.rect}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
