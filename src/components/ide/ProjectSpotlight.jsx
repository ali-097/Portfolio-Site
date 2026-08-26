import { motion } from "framer-motion";
import { VscEye, VscLinkExternal, VscDeviceCamera } from "react-icons/vsc";
import { resolveIcon } from "../../lib/iconMap";
import { getWebPPath } from "../../data/projects";

export default function ProjectSpotlight({ project, index, total, onOpenCaseStudy }) {
  const Icon = resolveIcon(project.iconKey);
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, x: reversed ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`bg-gruvbox-panel border border-gruvbox-border hover:border-gruvbox-orange/50 rounded-xl overflow-hidden transition-colors flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <button
        type="button"
        onClick={onOpenCaseStudy}
        aria-label={`Open full case study for ${project.title}`}
        className="group relative lg:w-[45%] shrink-0 aspect-[16/9] lg:aspect-[2/1] bg-gruvbox-elevated overflow-hidden text-left cursor-pointer"
      >
        <picture>
          <source srcSet={getWebPPath(project.images[0])} type="image/webp" />
          <img
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </picture>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-gruvbox-fg font-medium text-sm bg-gruvbox-bg/80 px-3 py-1.5 rounded-full">
            <VscEye /> View case study
          </div>
        </div>
        <div
          className={`absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}
        >
          <Icon size={14} />
        </div>
        {project.images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-gruvbox-bg/70 text-gruvbox-fg text-xs font-medium px-2.5 py-1 rounded-full">
            <VscDeviceCamera size={12} /> {project.images.length} photos
          </div>
        )}
      </button>

      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
        <p className="text-xs text-gruvbox-aqua uppercase tracking-wide">
          Project 0{index + 1} of {total}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gruvbox-fg">
          {project.title}
        </h3>
        <p className="text-gruvbox-subtle font-sans leading-relaxed">
          {project.description}
        </p>
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
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onOpenCaseStudy}
            className="inline-flex items-center justify-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
          >
            <VscEye /> Full Case Study
          </button>
          <a
            href={project.deployment}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-gruvbox-aqua text-gruvbox-aqua px-5 py-2.5 rounded-lg font-medium hover:bg-gruvbox-aqua hover:text-gruvbox-bg transition"
          >
            <VscLinkExternal /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
