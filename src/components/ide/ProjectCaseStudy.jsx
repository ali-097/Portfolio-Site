import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VscClose,
  VscChevronLeft,
  VscChevronRight,
  VscLinkExternal,
  VscRocket,
} from "react-icons/vsc";
import { resolveIcon } from "../../lib/iconMap";
import { getWebPPath } from "../../data/projects";

export default function ProjectCaseStudy({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const Icon = resolveIcon(project.iconKey);
  const hasMultipleImages = project.images.length > 1;

  const next = () => setImageIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setImageIndex((i) => (i - 1 + project.images.length) % project.images.length);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMultipleImages) next();
      if (e.key === "ArrowLeft" && hasMultipleImages) prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, hasMultipleImages]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative bg-gruvbox-panel border border-gruvbox-border-strong rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gruvbox-bg/70 text-gruvbox-fg p-2.5 rounded-full hover:bg-gruvbox-bg transition"
          aria-label="Close case study"
        >
          <VscClose size={18} />
        </button>

        <div className="relative aspect-[7/3] bg-gruvbox-elevated">
          <picture>
            <source srcSet={getWebPPath(project.images[imageIndex])} type="image/webp" />
            <img
              src={project.images[imageIndex]}
              alt={`${project.title} screenshot ${imageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </picture>

          {hasMultipleImages && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-gruvbox-bg/70 text-gruvbox-fg p-2.5 rounded-full hover:bg-gruvbox-bg transition"
                aria-label="Previous image"
              >
                <VscChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-gruvbox-bg/70 text-gruvbox-fg p-2.5 rounded-full hover:bg-gruvbox-bg transition"
                aria-label="Next image"
              >
                <VscChevronRight size={18} />
              </button>
              <div className="absolute top-3 left-3 bg-gruvbox-bg/70 text-gruvbox-fg text-xs font-medium px-2.5 py-1 rounded-full">
                {imageIndex + 1} / {project.images.length}
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-gruvbox-bg/70 px-3 py-1.5 rounded-full">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === imageIndex
                        ? "bg-gruvbox-orange"
                        : "bg-gruvbox-fg/50 hover:bg-gruvbox-fg/80"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shrink-0`}
            >
              <Icon size={18} />
            </div>
            <h2 className="text-2xl font-bold text-gruvbox-fg">{project.title}</h2>
          </div>

          <p className="text-gruvbox-fg/85 leading-relaxed font-sans">{project.description}</p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gruvbox-aqua uppercase tracking-wide mb-3">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gruvbox-fg/85">
                  <div className="w-1.5 h-1.5 bg-gruvbox-orange rounded-full shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gruvbox-aqua uppercase tracking-wide mb-3">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs bg-gruvbox-elevated text-gruvbox-subtle rounded-full border border-gruvbox-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.deployment}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            <VscRocket />
            Live Demo
            <VscLinkExternal className="text-sm" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
