import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { VscCloudDownload } from "react-icons/vsc";
import profilePic from "/profilepicture.png";
import { social } from "../data/social";
import { heroContent } from "../data/heroContent";

export default function Home() {
  return (
    <section className="min-h-full px-6 py-16 md:px-16 md:py-20 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-gruvbox-subtle mb-6"
      >
        <span className="text-gruvbox-green">// </span>
        welcome to my portfolio — feel free to look around
      </motion.p>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gruvbox-fg">
            {social.name}
          </h1>
          <p className="text-lg md:text-xl text-gruvbox-orange mt-3 min-h-[1.75rem]">
            {heroContent.greeting}{" "}
            <Typewriter
              words={heroContent.typewriterWords}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <p className="text-gruvbox-subtle mt-4 max-w-lg mx-auto md:mx-0 font-sans leading-relaxed">
            {heroContent.tagline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to={heroContent.primaryCta.to}
              className="px-6 py-3 bg-gruvbox-orange text-gruvbox-bg font-semibold rounded-md hover:opacity-90 transition text-center"
            >
              {heroContent.primaryCta.label}
            </Link>
            <a
              href={social.resumeUrl}
              download
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gruvbox-aqua text-gruvbox-aqua font-semibold rounded-md hover:bg-gruvbox-aqua hover:text-gruvbox-bg transition"
            >
              <VscCloudDownload /> {heroContent.secondaryCta.label}
            </a>
          </div>

          <div className="mt-6 flex gap-3 justify-center md:justify-start">
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 flex items-center justify-center bg-gruvbox-panel border border-gruvbox-border rounded-full text-gruvbox-fg hover:text-gruvbox-aqua hover:border-gruvbox-aqua transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 flex items-center justify-center bg-gruvbox-panel border border-gruvbox-border rounded-full text-gruvbox-fg hover:text-gruvbox-orange hover:border-gruvbox-orange transition-colors"
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={`mailto:${social.email}`}
              whileHover={{ y: -2 }}
              className="w-10 h-10 flex items-center justify-center bg-gruvbox-panel border border-gruvbox-border rounded-full text-gruvbox-fg hover:text-gruvbox-green hover:border-gruvbox-green transition-colors"
              title={social.email}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-44 sm:w-56 md:w-64 aspect-[941/1672] shrink-0"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gruvbox-border-strong shadow-xl">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-gruvbox-orange/30 z-10 pointer-events-none" />
            <img
              src={profilePic}
              alt={social.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
