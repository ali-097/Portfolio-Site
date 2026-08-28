import { motion } from "framer-motion";
import { VscCloudDownload, VscLinkExternal, VscFilePdf } from "react-icons/vsc";
import { social } from "../data/social";

function ResumeActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={social.resumeUrl}
        download
        className="flex items-center justify-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-5 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition"
      >
        <VscCloudDownload /> Download
      </a>
      <a
        href={social.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gruvbox-elevated hover:bg-gruvbox-border-strong px-5 py-3 rounded-lg transition text-gruvbox-fg text-sm font-medium"
      >
        <VscLinkExternal /> Open in new tab
      </a>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <p className="text-sm text-gruvbox-subtle mb-2">
            <span className="text-gruvbox-green">// </span>Resume.pdf
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gruvbox-fg">Resume</h2>
          <p className="text-gruvbox-subtle mt-3 max-w-lg font-sans leading-relaxed">
            {social.role} &mdash; the same document I send to recruiters, rendered
            inline so you can read it without leaving the editor.
          </p>
        </div>
        <ResumeActions />
      </motion.div>

      {/* Desktop: inline preview. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden md:block bg-gruvbox-panel border border-gruvbox-border rounded-xl overflow-hidden"
      >
        <iframe
          src={social.resumeUrl}
          title={`${social.name} — Resume`}
          className="w-full h-[80vh] border-0"
        />
      </motion.div>

      {/* Mobile: iOS Safari and most Android browsers refuse to render a PDF
          inside an iframe, so offer the actions instead of a blank frame. */}
      <div className="md:hidden bg-gruvbox-panel border border-gruvbox-border rounded-xl p-6 text-center">
        <VscFilePdf className="mx-auto text-gruvbox-orange" size={36} />
        <p className="text-sm text-gruvbox-fg mt-4 font-sans">
          Your browser can&rsquo;t preview PDFs inline.
        </p>
        <p className="text-xs text-gruvbox-subtle mt-1 font-sans">
          Download the file or open it in a new tab to read it.
        </p>
        <div className="mt-5">
          <ResumeActions />
        </div>
      </div>
    </section>
  );
}
