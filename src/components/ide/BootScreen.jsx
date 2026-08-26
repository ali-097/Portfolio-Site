import { AnimatePresence, motion } from "framer-motion";
import { useBootSequence } from "../../hooks/useBootSequence";

export default function BootScreen() {
  const { visible, lines, dismiss } = useBootSequence();

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
          {lines.map((line, i) => (
            <p key={i} className="whitespace-pre-wrap leading-relaxed">
              {line}
            </p>
          ))}
          <span className="inline-block w-2 h-4 bg-gruvbox-green align-middle animate-pulse" />
          <p className="absolute bottom-6 right-6 text-xs text-gruvbox-subtle">
            click / press any key to skip
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
