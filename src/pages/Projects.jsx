import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects, getWebPPath } from "../data/projects";
import { resolveIcon } from "../lib/iconMap";

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const openModal = (image, project) => {
    setModalImage(image);
    setModalProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    setModalProject(null);
  };

  const nextModalImage = () => {
    if (modalProject && modalProject.images.length > 1) {
      const currentIndex = modalProject.images.indexOf(modalImage);
      const nextIndex = (currentIndex + 1) % modalProject.images.length;
      setModalImage(modalProject.images[nextIndex]);
    }
  };

  const prevModalImage = () => {
    if (modalProject && modalProject.images.length > 1) {
      const currentIndex = modalProject.images.indexOf(modalImage);
      const prevIndex =
        (currentIndex - 1 + modalProject.images.length) %
        modalProject.images.length;
      setModalImage(modalProject.images[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!modalOpen) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          prevModalImage();
          break;
        case "ArrowRight":
          event.preventDefault();
          nextModalImage();
          break;
        case "Escape":
          event.preventDefault();
          closeModal();
          break;
        default:
          break;
      }
    };

    if (modalOpen) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen, modalImage, modalProject]);

  return (
    <section className="px-6 py-16 md:px-16 md:py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm text-gruvbox-subtle mb-2">
          <span className="text-gruvbox-green">// </span>5 projects, most recent first
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gruvbox-fg">
          Featured Projects
        </h2>
        <p className="text-gruvbox-subtle mt-3 max-w-2xl font-sans leading-relaxed">
          Here are some of my recent projects that showcase my skills in
          full-stack development, machine learning integration, and modern web
          technologies.
        </p>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, index) => {
          const Icon = resolveIcon(project.iconKey);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="bg-gruvbox-panel border border-gruvbox-border rounded-xl p-6 md:p-8 hover:border-gruvbox-orange/50 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="relative mb-6 group/image">
                      <div
                        className="aspect-video bg-gruvbox-elevated rounded-lg overflow-hidden border border-gruvbox-border cursor-pointer relative"
                        onClick={() =>
                          openModal(
                            project.images[currentImageIndex[project.id] || 0],
                            project
                          )
                        }
                      >
                        <picture>
                          <source
                            srcSet={getWebPPath(
                              project.images[currentImageIndex[project.id] || 0]
                            )}
                            type="image/webp"
                          />
                          <img
                            src={
                              project.images[currentImageIndex[project.id] || 0]
                            }
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                          />
                        </picture>

                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <FaSearchPlus className="text-gruvbox-fg text-2xl" />
                          </div>
                        </div>
                      </div>

                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(project.id, project.images.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gruvbox-bg/70 text-gruvbox-fg p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:bg-gruvbox-bg z-10"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(project.id, project.images.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gruvbox-bg/70 text-gruvbox-fg p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:bg-gruvbox-bg z-10"
                          >
                            <FaChevronRight />
                          </button>

                          <div className="flex justify-center mt-3 gap-2">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() =>
                                  setCurrentImageIndex((prev) => ({
                                    ...prev,
                                    [project.id]: imgIndex,
                                  }))
                                }
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  (currentImageIndex[project.id] || 0) ===
                                  imgIndex
                                    ? "bg-gruvbox-orange"
                                    : "bg-gruvbox-border-strong hover:bg-gruvbox-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-md bg-gruvbox-elevated flex items-center justify-center text-gruvbox-orange">
                        <Icon size={15} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gruvbox-fg group-hover:text-gruvbox-orange transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs bg-gruvbox-elevated text-gruvbox-subtle rounded-full border border-gruvbox-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <p className="text-gruvbox-fg/85 mb-6 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gruvbox-aqua mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gruvbox-fg/85"
                          >
                            <div className="w-1.5 h-1.5 bg-gruvbox-orange rounded-full shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
                    >
                      <FaRocket />
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
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
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-gruvbox-bg/70 text-gruvbox-fg p-3 rounded-full hover:bg-gruvbox-bg transition"
              >
                <FaTimes className="text-lg" />
              </button>

              {modalProject && modalProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gruvbox-bg/70 text-gruvbox-fg p-3 rounded-full hover:bg-gruvbox-bg transition"
                  >
                    <FaChevronLeft className="text-lg" />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gruvbox-bg/70 text-gruvbox-fg p-3 rounded-full hover:bg-gruvbox-bg transition"
                  >
                    <FaChevronRight className="text-lg" />
                  </button>
                </>
              )}

              <div className="bg-gruvbox-panel rounded-xl overflow-hidden border border-gruvbox-border-strong shadow-2xl">
                <picture>
                  <source srcSet={getWebPPath(modalImage)} type="image/webp" />
                  <img
                    src={modalImage}
                    alt={`${modalProject?.title} screenshot`}
                    className="w-full h-auto max-h-[70vh] object-contain bg-gruvbox-bg"
                  />
                </picture>

                <div className="p-5 border-t border-gruvbox-border flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gruvbox-fg mb-1">
                      {modalProject?.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gruvbox-subtle text-xs">
                      <span>Arrow keys to navigate &middot; Esc to close</span>
                      {modalProject && modalProject.images.length > 1 && (
                        <span>
                          {modalProject.images.indexOf(modalImage) + 1} of{" "}
                          {modalProject.images.length}
                        </span>
                      )}
                    </div>
                  </div>
                  <a
                    href={modalProject?.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
                  >
                    <FaRocket />
                    Visit Site
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
