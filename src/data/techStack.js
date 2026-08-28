const devicon = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export const techStack = {
  languages: [
    { name: "TypeScript", logo: devicon("typescript"), version: "^5.7.0" },
    { name: "JavaScript", logo: devicon("javascript"), version: "ES2024" },
    { name: "Python", logo: devicon("python"), version: "^3.12" },
  ],
  frontend: [
    { name: "ReactJs", logo: devicon("react"), version: "^19.1.0" },
    { name: "React Native", logo: devicon("reactnative"), version: "^0.81.0" },
    { name: "Expo", logo: devicon("expo"), version: "~54.0.0" },
    { name: "NextJs", logo: devicon("nextjs"), version: "^15.1.0" },
    { name: "Redux Toolkit", logo: devicon("redux"), version: "^2.5.0" },
    // devicon has no TanStack icon — the React logo is the closest stand-in.
    { name: "TanStack Query", logo: devicon("react"), version: "^5.66.0" },
    { name: "Material-UI", logo: devicon("materialui"), version: "^6.1.0" },
    {
      name: "Tailwind CSS",
      logo: devicon("tailwindcss", "original-wordmark"),
      version: "^4.1.7",
    },
  ],
  backend: [
    { name: "NodeJs", logo: devicon("nodejs"), version: "^22.11.0" },
    { name: "ExpressJs", logo: devicon("express"), version: "^4.21.0" },
    { name: "Django", logo: devicon("django", "plain"), version: "5.1.3" },
  ],
  databases: [
    { name: "PostgreSQL", logo: devicon("postgresql"), version: "17.0" },
    { name: "SQL Server", logo: devicon("microsoftsqlserver"), version: "2022" },
    { name: "MongoDB", logo: devicon("mongodb"), version: "8.0" },
  ],
  testing: [
    { name: "Jest", logo: devicon("jest", "plain"), version: "^29.7.0" },
    { name: "Playwright", logo: devicon("playwright"), version: "^1.50.0" },
    { name: "Docker", logo: devicon("docker"), version: "27.4" },
    { name: "GitHub Actions", logo: devicon("githubactions"), version: "latest" },
    { name: "DigitalOcean", logo: devicon("digitalocean"), version: "latest" },
    {
      name: "AWS",
      logo: devicon("amazonwebservices", "original-wordmark"),
      version: "latest",
    },
  ],
  tools: [{ name: "Git", logo: devicon("git"), version: "2.47.0" }],
};

export const techStackFlat = [
  ...techStack.languages,
  ...techStack.frontend,
  ...techStack.backend,
  ...techStack.databases,
  ...techStack.testing,
  ...techStack.tools,
];
