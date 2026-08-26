import { AnimatePresence, motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-gruvbox-orange text-gruvbox-bg px-5 py-3 rounded-lg shadow-lg z-[70] flex items-center gap-2 font-mono font-semibold text-sm"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <FaCheck />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
