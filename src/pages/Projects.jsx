import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaRocket,
  FaBrain,
  FaUtensils,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  const getWebPPath = (pngPath) => {
    const fileName = pngPath.split("/").pop().replace(".png", ".webp");
    return `/images/compressed-images/${fileName}`;
  };

  const projects = [
    {
      id: 1,
      title: "Smart Estate",
      description:
        "An intelligent real estate platform that revolutionizes property investment through cutting-edge machine learning. Features advanced price prediction algorithms, automated sentiment analysis of community reviews, AI-powered property verification through image recognition, and dynamic bidding systems that adapt to market conditions in real-time.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Flask",
        "TailwindCSS",
        "Machine Learning",
        "Python",
      ],
      deployment: "https://smartestate-fe.vercel.app/",
      icon: <FaBrain className="text-2xl" />,
      gradient: "from-blue-500 to-purple-600",
      features: [
        "ML Price Prediction",
        "Sentiment Analysis",
        "Image Verification",
        "Dynamic Bidding",
      ],
      images: [
        "/images/smart-estate-main.png",
        "/images/smart-estate-2.png",
        "/images/smart-estate-3.png",
      ],
    },
    {
      id: 2,
      title: "Workforce Management System",
      description:
        "A comprehensive cloud-based solution designed specifically for restaurant operations. This GPS-enabled system streamlines employee management by automatically tracking attendance, calculating work hours, and processing payroll with precision. The intuitive dashboard provides real-time insights into workforce productivity and operational efficiency.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TailwindCSS",
        "GPS Integration",
        "AWS Cloud Services",
      ],
      deployment: "https://wms-frontend-omega.vercel.app/",
      icon: <FaClock className="text-2xl" />,
      gradient: "from-green-500 to-teal-600",
      features: [
        "GPS Tracking",
        "Attendance Management",
        "Payroll Automation",
        "Cloud-based",
      ],
      images: [
        "/images/wms-main.png",
        "/images/wms-2.png",
        "/images/wms-3.png",
      ],
    },
    {
      id: 3,
      title: "Fork & Flame",
      description:
        "A stunning restaurant website that combines elegant design with smooth functionality. Built with carefully crafted custom animations and intuitive user interactions, this platform showcases modern web development techniques while providing an exceptional dining experience online. The responsive design ensures seamless navigation across all devices.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Custom CSS",
        "Animations",
        "JavaScript",
      ],
      deployment: "https://fork-flame-five.vercel.app/",
      icon: <FaUtensils className="text-2xl" />,
      gradient: "from-orange-500 to-red-600",
      features: [
        "Custom Animations",
        "Restaurant Management",
        "Interactive UI",
        "Responsive Design",
      ],
      images: ["/images/fork-flame-main.png"],
    },
    {
      id: 4,
      title: "Luxora Limos",
      description:
        "A modern, responsive limousine service website built with React and Vite, designed to deliver a premium user experience. It features an interactive booking form with validation and EmailJS integration for instant confirmations. Users can explore a luxury fleet with zoomable images, read testimonials, and find answers in the FAQ section. The clean design and smooth UI reflect the elegance and professionalism of a high-end transport service.",
      technologies: ["React", "Tailwind", "EmailJs", "Responsive Design"],
      deployment: "https://luxoralimos.com/",
      icon: <FaUtensils className="text-2xl" />,
      gradient: "from-orange-500 to-red-600",
      features: [
        "EmailJS integration for booking confirmations",
        "Interactive booking with validation",
        "Responsive Design",
        "Luxury fleet display",
      ],
      images: ["/images/luxora-limos-main.png", "/images/luxora-limos-2.png"],
    },
  ];

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
  }, [modalOpen, modalImage, modalProject]);

  return (
    <section
      id="projects"
      className="text-[#EDEDED] px-6 py-20 md:px-20 overflow-hidden bg-contain bg-center"
      style={{
        backgroundColor: "#0D0D0D",
        backgroundImage: "url('/bg-image.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B5CF6] mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-[#A1A1A1]">
          Here are some of my recent projects that showcase my skills in
          full-stack development, machine learning integration, and modern web
          technologies.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              <div className="bg-[#161616] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-2xl hover:shadow-[#8B5CF6]/10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <div className="relative mb-6 group/image">
                      <div
                        className="aspect-video bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#2C2C2C] cursor-pointer relative"
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
                            className="w-full h-full object-fit group-hover/image:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                        </picture>

                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <FaSearchPlus className="text-white text-2xl" />
                          </div>
                        </div>

                        <div className="w-full h-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#7C3AED]/20 hidden items-center justify-center">
                          <div className="text-center">
                            <div
                              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mx-auto mb-2`}
                            >
                              {project.icon}
                            </div>
                            <p className="text-[#A1A1A1] text-sm">
                              Preview Coming Soon
                            </p>
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
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
                          >
                            <FaChevronLeft />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(project.id, project.images.length);
                            }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
                          >
                            <FaChevronRight />
                          </button>

                          <div className="flex justify-center mt-3 space-x-2">
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
                                    ? "bg-[#8B5CF6]"
                                    : "bg-[#3A3A3A] hover:bg-[#5A5A5A]"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Project Title & Tech */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6 w-full">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-[#2A2A2A] text-[#A1A1A1] rounded-full border border-[#3A3A3A] hover:border-[#8B5CF6] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <p className="text-[#D4D4D4] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#8B5CF6] mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-[#D4D4D4]"
                          >
                            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7C3AED] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaRocket />
                        Live Demo
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#A1A1A1] mb-6">
            Want to see more of my work or discuss a potential project?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
            <FaRocket />
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
              >
                <FaTimes className="text-lg" />
              </button>

              {modalProject && modalProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                  >
                    <FaChevronLeft className="text-lg" />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                  >
                    <FaChevronRight className="text-lg" />
                  </button>
                </>
              )}

              <div className="bg-[#161616] rounded-2xl overflow-hidden border border-[#2C2C2C] shadow-2xl">
                <picture>
                  <source srcSet={getWebPPath(modalImage)} type="image/webp" />
                  <img
                    src={modalImage}
                    alt={`${modalProject?.title} screenshot`}
                    className="w-full h-auto max-h-[70vh] object-fit"
                  />
                </picture>

                <div className="p-6 border-t border-[#2C2C2C]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {modalProject?.title}
                      </h3>
                      <div className="flex items-center gap-4 text-[#A1A1A1] text-sm">
                        <span>
                          Use arrow keys to navigate • Press ESC to close
                        </span>
                        {modalProject && modalProject.images.length > 1 && (
                          <span>
                            {modalProject.images.indexOf(modalImage) + 1} of{" "}
                            {modalProject.images.length}
                          </span>
                        )}
                      </div>
                    </div>
                    <motion.a
                      href={modalProject?.deployment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7C3AED] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaRocket />
                      Visit Site
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
