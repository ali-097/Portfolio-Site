import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="bg-[#0D0D0D] text-[#EDEDED] min-h-screen flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-4xl md:text-6xl font-extrabold text-[#8B5CF6] mb-4"
      >
        Work in Progress
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        className="text-lg md:text-xl text-[#A1A1A1] text-center"
      >
        This page is currently under construction.
      </motion.p>
      {/* show github link to view projects */}
      <motion.a
        href="https://github.com/ali-097"
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        className="mt-6 text-[#8B5CF6] hover:text-[#6366F1] transition duration-300"
      >
        View my projects on GitHub Instead
      </motion.a>
    </div>
  );
}
