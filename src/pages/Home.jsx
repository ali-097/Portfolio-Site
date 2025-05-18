import { motion } from "framer-motion";
import profilePic from "/profilepicture.png";
import resume from "/Ali_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen pt-26 bg-[#0D0D0D] text-[#EDEDED] px-6 py-16 md:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f]">
        <div className="absolute inset-0 bg-[url('/noise-overlay.png')] opacity-[0.03] mix-blend-screen animate-pulse-slow" />
      </div>

      <motion.div
        className="absolute top-1/2 left-2/3 w-[600px] h-[600px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-lg"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#8B5CF6]">
            Muhammad Ali Mehmood
          </h1>

          <p className="text-xl md:text-2xl text-[#A1A1A1] mt-4">
            I am a{" "}
            <Typewriter
              words={["Web Developer", "Software Engineer", "Tech Enthusiast"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="text-md md:text-lg text-[#A1A1A1] mt-2">
            Bringing ideas to life with code — from frontends that wow to
            backends that scale.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              View My Work
            </Link>
            <a
              href={resume}
              download
              className="px-6 py-3 border border-[#8B5CF6] text-[#8B5CF6] font-semibold rounded-md hover:bg-[#8B5CF6] hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative z-10 w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] blur-2xl opacity-30 z-0" />
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-[#1E1E1E] bg-[#0D0D0D]">
            <img
              src={profilePic}
              alt="Muhammad Ali Mehmood"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
