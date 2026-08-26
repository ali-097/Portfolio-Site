import { AnimatePresence, motion } from "framer-motion";
import { useBootSequence } from "../../hooks/useBootSequence";

const Cursor = () => (
  <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-gruvbox-green align-middle animate-pulse" />
);

export default function BootScreen() {
  const { visible, completedLines, current, dismiss } = useBootSequence();

  const lines = current ? [...completedLines, current] : completedLines;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={dismiss}
          aria-label="Skip loading animation"
          className="fixed inset-0 z-[100] bg-gruvbox-bg text-gruvbox-green font-mono text-sm px-6 py-8 md:px-16 md:py-16 overflow-hidden cursor-pointer"
        >
          {lines.map((line, i) => {
            const isLast = i === lines.length - 1;
            const text =
              typeof line === "string"
                ? line
                : line.kind === "spinner"
                ? `${line.frame}  ${line.label}`
                : line.text;

            return (
              <p key={i} className="whitespace-pre-wrap leading-relaxed">
                {text || " "}
                {isLast && <Cursor />}
              </p>
            );
          })}
          <p className="absolute bottom-6 right-6 text-xs text-gruvbox-subtle">
            click / press any key to skip
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
