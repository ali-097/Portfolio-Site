import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { VscBriefcase, VscMortarBoard, VscExtensions, VscArrowRight } from "react-icons/vsc";
import { bio } from "../data/bio";
import { techStack } from "../data/techStack";
import { experience } from "../data/experience";
import { certifications } from "../data/certifications";
import { education } from "../data/education";
import SyntaxBlock from "../components/ide/SyntaxBlock";
import CommitEntry from "../components/ide/CommitEntry";
import ExtensionCard from "../components/ide/ExtensionCard";

const EXPERIENCE_HASH_PREFIX = "#experience-";

export default function About() {
  const location = useLocation();
  const targetExperienceId = location.hash.startsWith(EXPERIENCE_HASH_PREFIX)
    ? location.hash.slice(EXPERIENCE_HASH_PREFIX.length)
    : null;

  useEffect(() => {
    if (!targetExperienceId) return;
    document
      .getElementById(`experience-${targetExperienceId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  return (
    <section className="px-6 py-16 md:px-16 md:py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm text-gruvbox-subtle mb-2">
          <span className="text-gruvbox-green">// </span>About.jsx
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gruvbox-fg mb-6">
          About Me
        </h2>
        <SyntaxBlock data={bio} variant="bio" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="flex items-center gap-2 text-2xl font-bold text-gruvbox-fg mb-6">
          <VscBriefcase className="text-gruvbox-orange" /> Experience
        </h3>
        <div>
          {experience.map((entry, i) => (
            <CommitEntry
              key={entry.id}
              id={`experience-${entry.id}`}
              entry={entry}
              defaultExpanded={i === 0}
              forceExpand={entry.id === targetExperienceId}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold text-gruvbox-fg mb-6">Tech Stack</h3>
        <SyntaxBlock data={techStack} variant="package" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="flex items-center gap-2 text-2xl font-bold text-gruvbox-fg mb-6">
          <VscExtensions className="text-gruvbox-orange" /> Certifications
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <ExtensionCard key={cert.id} cert={cert} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="flex items-center gap-2 text-2xl font-bold text-gruvbox-fg mb-6">
          <VscMortarBoard className="text-gruvbox-orange" /> Education
        </h3>
        <div className="bg-gruvbox-panel border border-gruvbox-border rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gruvbox-orange">
            {education.school}
          </h4>
          <p className="text-sm text-gruvbox-subtle mt-1">{education.degree}</p>
          <p className="text-xs text-gruvbox-subtle mt-1">{education.date}</p>
          <ul className="mt-4 space-y-2">
            {education.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-gruvbox-fg/85 font-sans"
              >
                <span className="text-gruvbox-green shrink-0">&bull;</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gruvbox-orange text-gruvbox-bg px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Let's Work Together
          <VscArrowRight />
        </Link>
      </div>
    </section>
  );
}
