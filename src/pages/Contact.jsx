import { motion } from "framer-motion";
import { FaCopy, FaGithub } from "react-icons/fa";
import { VscCloudDownload } from "react-icons/vsc";
import { social } from "../data/social";
import {
  contactIntro,
  contactPitch,
  workInfo,
  whatYouGet,
  specializations,
  contactMethods,
} from "../data/contactMethods";
import { resolveIcon } from "../lib/iconMap";
import { useClipboard } from "../hooks/useClipboard";
import Toast from "../components/ide/Toast";

export default function Contact() {
  const { copied, copy } = useClipboard();

  return (
    <section className="px-6 py-16 md:px-16 md:py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="text-sm text-gruvbox-subtle mb-2">
          <span className="text-gruvbox-green">// </span>contact.json
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gruvbox-fg">
          {contactIntro.heading}
        </h2>
        <p className="text-gruvbox-subtle mt-3 font-sans leading-relaxed">
          {contactIntro.copy}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gruvbox-panel border border-gruvbox-border rounded-xl p-6 md:p-8 space-y-6"
        >
          <div>
            <h3 className="text-lg font-bold text-gruvbox-orange mb-2">
              {contactPitch.heading}
            </h3>
            <p className="text-gruvbox-subtle text-sm font-sans leading-relaxed">
              {contactPitch.copy}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gruvbox-border">
            {workInfo.map((item) => {
              const Icon = resolveIcon(item.iconKey);
              return (
                <div key={item.label} className="flex items-start gap-2">
                  <Icon className="text-gruvbox-orange mt-0.5 shrink-0" size={14} />
                  <div>
                    <p className="text-gruvbox-subtle text-xs">{item.label}</p>
                    <p className="text-gruvbox-fg text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gruvbox-border">
            <h4 className="text-sm font-semibold text-gruvbox-aqua mb-3 uppercase tracking-wide">
              What You Get
            </h4>
            <div className="space-y-2">
              {whatYouGet.map((item) => {
                const Icon = resolveIcon(item.iconKey);
                return (
                  <div key={item.text} className="flex items-center gap-2">
                    <Icon className="text-gruvbox-orange shrink-0" size={12} />
                    <span className="text-sm text-gruvbox-fg/85 font-sans">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-gruvbox-border">
            <h4 className="text-sm font-semibold text-gruvbox-aqua mb-3 uppercase tracking-wide">
              Specializing In
            </h4>
            <div className="flex flex-wrap gap-2">
              {specializations.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-gruvbox-orange/10 text-gruvbox-orange px-2.5 py-1 rounded-full border border-gruvbox-orange/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = resolveIcon(method.iconKey);
              return (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.external ? "_blank" : "_self"}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group bg-gruvbox-panel border border-gruvbox-border hover:border-gruvbox-orange/50 p-5 rounded-xl transition-colors flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-gruvbox-elevated flex items-center justify-center text-gruvbox-orange shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-gruvbox-fg font-semibold truncate">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gruvbox-subtle truncate">
                      {method.subtitle}
                    </p>
                  </div>
                  <span className="text-xs text-gruvbox-subtle group-hover:text-gruvbox-orange transition-colors shrink-0 hidden sm:inline">
                    {method.action} &rarr;
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              onClick={() => copy(social.email)}
              className="flex items-center justify-center gap-2 bg-gruvbox-elevated hover:bg-gruvbox-border-strong px-5 py-3 rounded-lg transition text-gruvbox-fg text-sm font-medium"
            >
              <FaCopy /> Copy Email
            </button>

            <a
              href={social.resumeUrl}
              download
              className="flex items-center justify-center gap-2 bg-gruvbox-elevated hover:bg-gruvbox-border-strong px-5 py-3 rounded-lg transition text-gruvbox-fg text-sm font-medium"
            >
              <VscCloudDownload /> Download Resume
            </a>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gruvbox-elevated hover:bg-gruvbox-border-strong px-5 py-3 rounded-lg transition text-gruvbox-fg text-sm font-medium"
            >
              <FaGithub /> View GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <Toast show={copied} message="Email copied to clipboard!" />
    </section>
  );
}
