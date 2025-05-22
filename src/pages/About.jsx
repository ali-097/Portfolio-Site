import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const techStack = [
  {
    name: "ReactJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NextJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "NodeJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "ExpressJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "ElectronJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "WordPress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Material-UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const softSkills = [
  "Leadership",
  "Team Collaboration",
  "Problem Solving",
  "Attention to Detail",
  "Time Management",
];

export default function About() {
  return (
    <section className="bg-[#0D0D0D] text-[#EDEDED] px-6 py-16 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B5CF6] mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-[#A1A1A1] leading-relaxed">
          I'm a full-stack developer passionate about building performant,
          user-friendly, and scalable applications. I specialize in bridging the
          gap between intuitive design and efficient backend systems, with a
          passion for learning and crafting innovative digital solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-[#EDEDED] mb-6 flex items-center gap-2">
          <FaBriefcase className="text-[#8B5CF6]" /> Experience
        </h3>
        <div className="space-y-8">
          {[
            {
              title: "Junior Web Developer – SysReforms",
              date: "April 2025 – Present",
              details: [
                "Engineered client-facing dashboards with dynamic data visualizations using React, Express, and SQL Server.",
                "Built scalable full-stack features, optimized queries, and tackled critical bugs in a live production environment.",
                "Wrote and consumed RESTful APIs, implemented role-based access control, and enhanced application responsiveness.",
                "Collaborated with cross-functional teams and followed Agile methodologies using Plane, Git, and weekly sprints.",
              ],
            },
            {
              title: "Software Developer Intern – PropSure",
              date: "July 2023 – Sep 2023",
              details: [
                "Developed immersive virtual tour experiences with Pannellum and React, enhancing property visualization.",
                "Delivered a full-stack blog platform with authentication, post management, and REST APIs using Node and PostgreSQL.",
                "Translated high-fidelity Figma mockups into responsive, production-grade React interfaces.",
              ],
            },
          ].map((experience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.3,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#161616] p-6 rounded-xl shadow-md border border-[#1F1F1F]"
            >
              <h4 className="text-xl font-semibold text-[#8B5CF6]">
                {experience.title}
              </h4>
              <p className="text-[#A1A1A1] text-sm mt-1 mb-2">
                {experience.date}
              </p>
              <ul className="list-disc list-inside text-[#D4D4D4] space-y-2 text-sm">
                {experience.details.map((detail, detailIdx) => (
                  <motion.li
                    key={detailIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + detailIdx * 0.2 }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-[#EDEDED] mb-6">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                type: "spring",
              }}
              className="bg-[#161616] p-4 rounded-xl flex flex-col items-center gap-3 border border-[#1F1F1F] transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
              <p className="text-sm text-[#D4D4D4]">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-[#EDEDED] mb-6 flex items-center gap-2">
          <FaCertificate className="text-[#8B5CF6]" /> Certifications
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {[
            {
              title: "UI/UX Design",
              link: "https://www.futurelearn.com/certificates/odzww6d",
            },
            {
              title: "WordPress Development",
              link: "https://www.coursera.org/account/accomplishments/verify/KQ5GG7HRPDWX",
            },
            {
              title: "IBM Enterprise Design Practitioner",
              link: "https://www.credly.com/badges/d1860d74-81c2-4558-b6db-bb6f1913ae9a/print",
            },
            {
              title: "Google Data Analytics",
              link: "https://www.coursera.org/account/accomplishments/verify/DD979196OY1K",
            },
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-[#161616] p-4 rounded-xl border border-[#1F1F1F]"
            >
              <p className="text-md font-semibold text-[#D4D4D4] mb-2">
                {cert.title}
              </p>
              <motion.a
                whileHover={{ x: 5 }}
                href={cert.link}
                target="_blank"
                className="text-sm text-[#8B5CF6] hover:underline inline-block"
              >
                View Certificate →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-[#EDEDED] mb-6 flex items-center gap-2">
          <FaGraduationCap className="text-[#8B5CF6]" /> Education
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, type: "spring" }}
          whileHover={{
            scale: 1.05,
          }}
          className="bg-gradient-to-r from-[#1F1F1F] to-[#2C2C2C] p-6 rounded-xl border border-[#1F1F1F] shadow-lg"
        >
          <h4 className="text-xl font-semibold text-[#8B5CF6]">
            Bahria University, Islamabad
          </h4>
          <p className="text-sm text-[#A1A1A1] mt-1">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-xs text-[#A1A1A1] mt-1">2021 – 2025</p>
          <ul className="list-disc list-inside text-[#D4D4D4] space-y-2 text-sm">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Focused on full-stack development, data science, and artificial
              intelligence.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Participated in multiple software projects, project galas and
              speeding coding competitions.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              Led final year research on AI-powered real estate platform.
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-[#0D0D0D] px-6 py-3 rounded-full font-semibold transition relative overflow-hidden"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] opacity-20 blur-lg "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1.2, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <Link
            to="/contact"
            className="flex items-center gap-2 text-[#0D0D0D] text-lg font-semibold z-10"
          >
            Let's Work Together
            <motion.div
              whileInView={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <FaArrowRight className="z-10" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
