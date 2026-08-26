import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  VscCloudDownload,
  VscBriefcase,
  VscOrganization,
  VscSymbolMisc,
  VscExtensions,
  VscCircleFilled,
  VscArrowRight,
} from "react-icons/vsc";
import profilePic from "/profilepicture.png";
import { social } from "../data/social";
import { heroContent } from "../data/heroContent";
import { experience } from "../data/experience";
import { certifications } from "../data/certifications";
import { techStackFlat } from "../data/techStack";
import { projects, getWebPPath } from "../data/projects";
import StatTile from "../components/ide/StatTile";

const nameWords = social.name.split(" ");
const currentRole = experience[0];
const featured = projects[0];
const CORE_STACK_COUNT = 8;
const coreStack = techStackFlat.slice(0, CORE_STACK_COUNT);
const remainingStackCount = techStackFlat.length - coreStack.length;

export default function Home() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gruvbox-subtle mb-6"
          >
            <span className="text-gruvbox-green">// </span>
            welcome to my portfolio — feel free to look around
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gruvbox-fg flex flex-wrap gap-x-4">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 90 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gruvbox-orange mt-4 min-h-[1.75rem]"
          >
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
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gruvbox-subtle mt-4 max-w-lg font-sans leading-relaxed"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[240px] sm:max-w-[280px] mx-auto lg:mx-0 lg:ml-auto aspect-[4/5] rounded-2xl overflow-hidden border border-gruvbox-border-strong"
        >
          <img
            src={profilePic}
            alt={social.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="mt-14 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gruvbox-panel border border-gruvbox-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <VscBriefcase className="text-gruvbox-orange shrink-0" size={16} />
              <p className="text-sm font-semibold text-gruvbox-fg leading-snug">
                {currentRole.title} <span className="text-gruvbox-subtle font-normal">@ {currentRole.company}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <VscCircleFilled className="text-gruvbox-green shrink-0" size={16} />
              <p className="text-sm text-gruvbox-fg">
                Open to work <span className="text-gruvbox-subtle">— Full-time &amp; freelance</span>
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 flex items-center justify-center bg-gruvbox-elevated border border-gruvbox-border rounded-full text-gruvbox-fg hover:text-gruvbox-aqua hover:border-gruvbox-aqua transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 flex items-center justify-center bg-gruvbox-elevated border border-gruvbox-border rounded-full text-gruvbox-fg hover:text-gruvbox-orange hover:border-gruvbox-orange transition-colors"
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={`mailto:${social.email}`}
              whileHover={{ y: -2 }}
              className="w-10 h-10 flex items-center justify-center bg-gruvbox-elevated border border-gruvbox-border rounded-full text-gruvbox-fg hover:text-gruvbox-green hover:border-gruvbox-green transition-colors"
              title={social.email}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          <StatTile icon={VscOrganization} value={String(experience.length)} label="Roles held" />
          <StatTile icon={VscBriefcase} value={String(projects.length)} label="Projects shipped" />
          <StatTile icon={VscSymbolMisc} value={String(techStackFlat.length)} label="Tools & frameworks" />
          <StatTile icon={VscExtensions} value={String(certifications.length)} label="Certifications" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to="/projects"
            className="group bg-gruvbox-panel border border-gruvbox-border hover:border-gruvbox-orange/50 rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 transition-colors"
          >
            <div className="w-full sm:w-36 aspect-video sm:aspect-square rounded-lg overflow-hidden border border-gruvbox-border shrink-0">
              <picture>
                <source srcSet={getWebPPath(featured.images[0])} type="image/webp" />
                <img
                  src={featured.images[0]}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </picture>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gruvbox-aqua uppercase tracking-wide mb-1">
                Featured project
              </p>
              <h3 className="text-lg font-bold text-gruvbox-fg group-hover:text-gruvbox-orange transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-gruvbox-subtle mt-1 line-clamp-2 font-sans">
                {featured.description}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gruvbox-aqua shrink-0">
              View all projects <VscArrowRight />
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gruvbox-panel border border-gruvbox-border rounded-xl p-4"
        >
          <p className="text-xs text-gruvbox-subtle uppercase tracking-wide mb-3">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span
                key={tech.name}
                className="px-2.5 py-1 text-xs bg-gruvbox-elevated text-gruvbox-fg/85 rounded-full border border-gruvbox-border"
              >
                {tech.name}
              </span>
            ))}
            {remainingStackCount > 0 && (
              <Link
                to="/about"
                className="px-2.5 py-1 text-xs bg-gruvbox-orange/10 text-gruvbox-orange rounded-full border border-gruvbox-orange/30 hover:bg-gruvbox-orange/20 transition-colors"
              >
                +{remainingStackCount} more in About
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
