import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaClock,
  FaUserCheck,
  FaCopy,
  FaDownload,
  FaExternalLinkAlt,
  FaCheck,
  FaRocket,
  FaLightbulb,
  FaCode,
  FaHandshake,
  FaBolt,
  FaGlobeAmericas,
} from "react-icons/fa";

export default function Contact() {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopyNotification(true);
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      subtitle: "aalimehmoodd@gmail.com",
      description: "Best for project inquiries",
      href: "mailto:aalimehmoodd@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Ali,%0D%0A%0D%0AI'm%20interested%20in%20discussing...",
      gradient: "from-[#8B5CF6] to-[#7C3AED]",
      action: "Send Email",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn Message",
      subtitle: "linkedin.com/in/ali097",
      description: "Professional networking",
      href: "https://www.linkedin.com/in/ali097",
      gradient: "from-[#0077B5] to-[#005885]",
      action: "Connect & Message",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="text-[#EDEDED] px-4 py-20 md:px-6 lg:px-20 min-h-screen bg-contain bg-center"
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
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#8B5CF6] mb-4">
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-[#A1A1A1] px-2">
          I’m currently open to freelance or full-time opportunities. Let's
          build something impactful together — just drop me a message below or
          connect through my socials.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="space-y-6 bg-[#161616] p-4 md:p-8 rounded-2xl border border-[#1F1F1F] shadow-sm"
        >
          {/* Professional Intro */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#8B5CF6] mb-2 flex items-center justify-center gap-2">
              <FaRocket /> Let's Build Something Great
            </h3>
            <p className="text-[#A1A1A1] text-sm">
              Full-stack developer creating modern, scalable web applications
              with clean code and pixel-perfect designs.
            </p>
          </div>

          {/* Work Info - Compact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaGlobeAmericas className="text-[#8B5CF6] text-sm" />
              <div>
                <p className="text-[#A1A1A1] text-xs">Work Style</p>
                <p className="text-[#EDEDED] text-sm">Flexible & Adaptive</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#8B5CF6] text-sm" />
              <div>
                <p className="text-[#A1A1A1] text-xs">Location</p>
                <p className="text-[#EDEDED] text-sm">Pakistan (GMT+5)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaClock className="text-[#8B5CF6] text-sm" />
              <div>
                <p className="text-[#A1A1A1] text-xs">Availability</p>
                <p className="text-[#EDEDED] text-sm">Open for work</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaBolt className="text-[#8B5CF6] text-sm" />
              <div>
                <p className="text-[#A1A1A1] text-xs">Response</p>
                <p className="text-[#EDEDED] text-sm">Within 24h</p>
              </div>
            </div>
          </div>

          {/* What You Get - Simplified */}
          <div className="pt-4 border-t border-[#2A2A2A]">
            <h4 className="text-lg font-semibold text-[#8B5CF6] mb-3 flex items-center gap-2">
              <FaUserCheck /> What You Get
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <FaCode className="text-[#8B5CF6] text-xs" />
                <span className="text-[#D4D4D4]">
                  Clean, scalable code & fast delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaHandshake className="text-[#8B5CF6] text-xs" />
                <span className="text-[#D4D4D4]">
                  Transparent communication & regular updates
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaLightbulb className="text-[#8B5CF6] text-xs" />
                <span className="text-[#D4D4D4]">
                  Creative problem-solving & pixel-perfect design
                </span>
              </div>
            </div>
          </div>

          {/* Project Types - Compact */}
          <div className="pt-4 border-t border-[#2A2A2A]">
            <h4 className="text-sm font-semibold text-[#8B5CF6] mb-3">
              Specializing In
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Applications",
                "E-commerce Sites",
                "Business Dashboards",
                "API Development",
                "Machine Learning",
                "Cloud Solutions",
                "Mobile-First Design",
              ].map((item, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#8B5CF6]/20 text-[#8B5CF6] px-2 py-1 rounded-full border border-[#8B5CF6]/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="space-y-6 md:space-y-8"
        >
          {/* Primary Contact CTA */}
          <div className="text-center bg-[#161616] p-4 md:p-8 rounded-2xl border border-[#1F1F1F]">
            <h3 className="text-xl md:text-2xl font-bold text-[#8B5CF6] mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-[#A1A1A1] mb-6 px-2">
              Choose your preferred way to get in touch
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.external ? "_blank" : "_self"}
                  rel={method.external ? "noopener noreferrer" : ""}
                  className={`group bg-gradient-to-br ${method.gradient} p-4 md:p-8 rounded-2xl text-center transition-all hover:scale-105 hover:shadow-2xl block text-white`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 min-w-0">
                      <div className="bg-white/20 p-3 md:p-4 rounded-xl shrink-0">
                        <IconComponent className="text-2xl md:text-3xl group-hover:scale-110 transition" />
                      </div>
                      <div className="text-center sm:text-left min-w-0 flex-1">
                        <h3 className="text-lg md:text-xl font-bold mb-1 truncate">
                          {method.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-1 break-words">
                          {method.subtitle}
                        </p>
                        <p className="text-xs opacity-75 break-words">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm bg-white/20 px-3 md:px-4 py-2 rounded-full shrink-0">
                      <span className="hidden sm:inline">{method.action}</span>
                      <span className="sm:hidden">Contact</span>
                      {method.external && (
                        <FaExternalLinkAlt className="text-xs" />
                      )}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Quick Actions */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={() => copyToClipboard("aalimehmoodd@gmail.com")}
              className="flex items-center justify-center gap-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] px-4 md:px-6 py-3 rounded-lg transition text-[#EDEDED] font-medium text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCopy /> Copy Email
            </motion.button>

            <motion.a
              href="/Muhammad_Ali_WebDev_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] px-4 md:px-6 py-3 rounded-lg transition text-[#EDEDED] font-medium text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>

            <motion.a
              href="https://github.com/ali-097"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] px-4 md:px-6 py-3 rounded-lg transition text-[#EDEDED] font-medium text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCopyNotification && (
          <motion.div
            className="fixed bottom-8 right-8 bg-[#8B5CF6] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <FaCheck className="text-lg" />
            <span className="font-medium">Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
