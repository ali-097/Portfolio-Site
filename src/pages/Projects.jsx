import { AnimatePresence, motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectSpotlight from "../components/ide/ProjectSpotlight";
import ProjectCaseStudy from "../components/ide/ProjectCaseStudy";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-6 py-16 md:px-16 md:py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm text-gruvbox-subtle mb-2">
          <span className="text-gruvbox-green">// </span>Projects.jsx
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gruvbox-fg">
          Featured Projects
        </h2>
        <p className="text-gruvbox-subtle mt-3 max-w-2xl font-sans leading-relaxed">
          Here are some of my recent projects that showcase my skills in
          full-stack development, machine learning integration, and modern web
          technologies. Click any card for the full case study.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectSpotlight
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            onOpenCaseStudy={() => setSelected(project)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-gruvbox-subtle mb-6">
          Want to see more of my work or discuss a potential project?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition"
        >
          Let's Work Together
          <FaRocket />
        </Link>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectCaseStudy project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
