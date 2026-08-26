import { motion } from "framer-motion";

export default function StatTile({ icon: Icon, value, label, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`bg-gruvbox-panel border border-gruvbox-border hover:border-gruvbox-orange/40 rounded-xl p-4 flex flex-col justify-between gap-3 transition-colors ${className}`}
    >
      {Icon && <Icon className="text-gruvbox-orange" size={18} />}
      <div>
        <p className="text-xl md:text-2xl font-bold text-gruvbox-fg leading-none">{value}</p>
        <p className="text-xs text-gruvbox-subtle mt-1.5">{label}</p>
      </div>
    </motion.div>
  );
}
