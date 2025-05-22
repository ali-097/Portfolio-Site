import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  const linkClasses = (path) =>
    location.pathname === path
      ? "text-[#8B5CF6] font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#8B5CF6] after:scale-x-100 after:origin-left after:transition-transform"
      : "hover:text-[#8B5CF6] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#8B5CF6] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100";

  return (
    <nav className="w-full fixed top-0 left-0 h-16 z-50 bg-[#0D0D0D] text-white shadow-md px-6 py-4 flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="text-xl font-bold text-[#8B5CF6]">
          Muhammad Ali
        </Link>
      </motion.div>

      <motion.div
        className="hidden md:flex gap-6 items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link to={link.path} className={linkClasses(link.path)}>
              {link.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 top-16 w-full bg-[#1a1a1a] border-t border-gray-700 p-6 rounded-b-lg flex flex-col gap-4 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg ${
                      location.pathname === link.path
                        ? "text-[#8B5CF6] font-semibold"
                        : "text-white hover:text-[#8B5CF6]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
