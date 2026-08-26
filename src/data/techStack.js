const devicon = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export const techStack = {
  frontend: [
    { name: "ReactJs", logo: devicon("react"), version: "^19.1.0" },
    { name: "NextJs", logo: devicon("nextjs"), version: "^15.1.0" },
    { name: "ElectronJs", logo: devicon("electron"), version: "^33.0.0" },
    { name: "Material-UI", logo: devicon("materialui"), version: "^6.1.0" },
    {
      name: "Tailwind CSS",
      logo: devicon("tailwindcss", "original-wordmark"),
      version: "^4.1.7",
    },
    { name: "Bootstrap", logo: devicon("bootstrap"), version: "^5.3.3" },
  ],
  backend: [
    { name: "NodeJs", logo: devicon("nodejs"), version: "^22.11.0" },
    { name: "ExpressJs", logo: devicon("express"), version: "^4.21.0" },
    { name: "Flask", logo: devicon("flask"), version: "3.0.3" },
    { name: "Django", logo: devicon("django", "plain"), version: "5.1.3" },
    { name: "WordPress", logo: devicon("wordpress", "plain"), version: "6.7" },
  ],
  databases: [
    { name: "PostgreSQL", logo: devicon("postgresql"), version: "17.0" },
    { name: "MongoDB", logo: devicon("mongodb"), version: "8.0" },
  ],
  tools: [{ name: "Git", logo: devicon("git"), version: "2.47.0" }],
};

export const techStackFlat = [
  ...techStack.frontend,
  ...techStack.backend,
  ...techStack.databases,
  ...techStack.tools,
];
