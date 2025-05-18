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
        Stay tuned! Exciting projects are on their way.
      </motion.p>
    </div>
  );
}
