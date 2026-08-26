import { motion } from "framer-motion";
import { VscVerifiedFilled } from "react-icons/vsc";
import { resolveIcon } from "../../lib/iconMap";

export default function ExtensionCard({ cert }) {
  const Icon = resolveIcon(cert.iconKey);

  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="block bg-gruvbox-panel border border-gruvbox-border rounded-lg p-4 hover:border-gruvbox-orange/60 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-md bg-gruvbox-elevated flex items-center justify-center text-gruvbox-orange shrink-0">
          <Icon size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gruvbox-fg leading-snug">
            {cert.title}
          </p>
          <p className="text-xs text-gruvbox-subtle mt-0.5">{cert.publisher}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-gruvbox-green">
        <VscVerifiedFilled size={14} />
        <span>Installed</span>
      </div>
    </motion.a>
  );
}
