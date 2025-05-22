import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaClock,
  FaUserCheck,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0D0D0D] text-[#EDEDED] px-6 py-20 md:px-20 overflow-hidden"
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
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B5CF6] mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-[#A1A1A1]">
          I’m currently open to freelance or full-time opportunities. Let's
          build something impactful together — just drop me a message below or
          connect through my socials.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
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
          className="space-y-6 bg-[#161616] p-8 rounded-2xl border border-[#1F1F1F] shadow-sm"
        >
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#8B5CF6] mt-1" />
              <div>
                <p className="text-sm text-[#A1A1A1]">Email</p>
                <a
                  href="mailto:aalimehmoodd@gmail.com"
                  className="text-[#EDEDED] hover:text-[#8B5CF6] transition"
                >
                  aalimehmoodd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLinkedin className="text-[#8B5CF6] mt-1" />
              <div>
                <p className="text-sm text-[#A1A1A1]">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/ali097"
                  target="_blank"
                  className="text-[#EDEDED] hover:text-[#8B5CF6] transition"
                >
                  linkedin.com/in/ali097
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGithub className="text-[#8B5CF6] mt-1" />
              <div>
                <p className="text-sm text-[#A1A1A1]">GitHub</p>
                <a
                  href="https://github.com/ali-097"
                  target="_blank"
                  className="text-[#EDEDED] hover:text-[#8B5CF6] transition"
                >
                  github.com/ali-097
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#8B5CF6] mt-1" />
              <div>
                <p className="text-sm text-[#A1A1A1]">Location</p>
                <p className="text-[#EDEDED]">Islamabad, Pakistan (GMT+5)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-[#8B5CF6] mt-1" />
              <div>
                <p className="text-sm text-[#A1A1A1]">Availability</p>
                <p className="text-[#EDEDED]">
                  Open to freelance, remote or onsite work
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#2A2A2A]">
            <h4 className="text-lg font-semibold text-[#8B5CF6] mb-3 flex items-center gap-2">
              <FaUserCheck /> Why Work With Me?
            </h4>
            <ul className="list-disc list-inside text-[#D4D4D4] space-y-2 text-sm">
              <li>Strong communication & async collaboration</li>
              <li>Efficient, clean, and maintainable codebase</li>
              <li>Pixel-perfect implementation of designs</li>
              <li>100% committed to deadlines & quality</li>
              <li>Adaptable to fast-paced environments</li>
            </ul>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="space-y-6 bg-[#161616] p-8 rounded-2xl border border-[#1F1F1F] shadow-sm relative"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-[#1E1E1E] text-[#EDEDED] rounded-md border border-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-[#1E1E1E] text-[#EDEDED] rounded-md border border-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="10"
              className="w-full p-4 bg-[#1E1E1E] text-[#EDEDED] rounded-md border border-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-[#8B5CF6] text-white px-6 py-3 rounded-md font-medium hover:bg-[#7C3AED] transition duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>

          {/* Success Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="fixed inset-0 bg-black bg-opacity-70"
                  onClick={() => setShowModal(false)}
                ></div>
                <motion.div
                  className="bg-[#161616] border border-[#2C2C2C] rounded-xl p-8 w-full max-w-md z-10 relative"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  >
                    <FaTimes
                      className="text-xl"
                      onClick={() => setShowModal(false)}
                    />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <FaCheck className="text-white text-2xl" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible!
                    </p>
                    <motion.div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden mt-4">
                      <motion.div
                        className="bg-[#8B5CF6] h-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
