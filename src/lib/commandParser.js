import { social } from "../data/social";
import { bio } from "../data/bio";
import { fileTree } from "../data/fileTree";
import { techStack } from "../data/techStack";

const ROUTE_MAP = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
  resume: "/resume",
};

function flattenFiles(node, acc = []) {
  if (node.type === "file") acc.push(node.name);
  node.children?.forEach((child) => flattenFiles(child, acc));
  return acc;
}

// ctx = {
//   print(lines: string[]), clear(), navigate(path),
//   path: string,              // current prompt path, e.g. "~/about"
//   commandHistory: string[],  // previously submitted raw commands
//   openExternal(url: string),
// }
export const commands = [
  {
    name: "help",
    describe: "List available commands",
    run: (args, ctx) => {
      ctx.print(
        commands
          .filter((c) => !c.hidden)
          .map((c) => `  ${c.name.padEnd(10)} ${c.describe}`)
      );
    },
  },
  {
    name: "ls",
    describe: "List files in this portfolio",
    run: (args, ctx) => ctx.print([flattenFiles(fileTree).join("  ")]),
  },
  {
    name: "pwd",
    describe: "Print the current page path",
    run: (args, ctx) => ctx.print([ctx.path]),
  },
  {
    name: "cat",
    describe: "Print a file's contents (try: cat about.md)",
    run: (args, ctx) => {
      if (args[0] === "about.md") {
        ctx.print([bio.summary, "", `role: ${bio.role}`]);
      } else {
        ctx.print([`cat: ${args[0] || "(none)"}: No such file`]);
      }
    },
  },
  {
    name: "echo",
    describe: "Print back some text (try: echo hello)",
    run: (args, ctx) => ctx.print([args.join(" ")]),
  },
  {
    name: "date",
    describe: "Print the current date and time",
    run: (args, ctx) => ctx.print([new Date().toString()]),
  },
  {
    name: "history",
    describe: "Show previously run commands",
    run: (args, ctx) => {
      if (ctx.commandHistory.length === 0) {
        ctx.print(["(no history yet)"]);
        return;
      }
      ctx.print(
        ctx.commandHistory.map((cmd, i) => `  ${String(i + 1).padStart(3)}  ${cmd}`)
      );
    },
  },
  {
    name: "banner",
    describe: "Print a quick system summary",
    run: (args, ctx) =>
      ctx.print([
        `${social.name}`,
        "-".repeat(social.name.length),
        `role:    ${social.role}`,
        `stack:   React, Node.js, MongoDB, Express, Python`,
        `status:  open to work`,
      ]),
  },
  {
    name: "socials",
    describe: "Print my contact links",
    run: (args, ctx) =>
      ctx.print([
        `email:     ${social.email}`,
        `github:    ${social.github}`,
        `linkedin:  ${social.linkedin}`,
      ]),
  },
  {
    name: "skills",
    describe: "Print my tech stack",
    run: (args, ctx) =>
      ctx.print(
        Object.entries(techStack).map(
          ([category, items]) => `${category}: ${items.map((i) => i.name).join(", ")}`
        )
      ),
  },
  {
    name: "resume",
    describe: "Open my résumé",
    run: (args, ctx) => {
      ctx.print(["Opening résumé..."]);
      ctx.navigate("/resume");
    },
  },
  {
    name: "open",
    describe: "Open a page (try: open projects)",
    run: (args, ctx) => {
      const route = ROUTE_MAP[(args[0] || "").toLowerCase()];
      if (!route) {
        ctx.print([
          `open: unknown target '${args[0] || ""}'. Try: home, about, projects, contact, resume`,
        ]);
        return;
      }
      ctx.print([`Opening ${args[0]}...`]);
      ctx.navigate(route);
    },
  },
  {
    name: "contact",
    describe: "Jump to the contact page",
    run: (args, ctx) => {
      ctx.print(["Opening contact..."]);
      ctx.navigate("/contact");
    },
  },
  {
    name: "whoami",
    describe: "Print current user",
    run: (args, ctx) => ctx.print([`${social.name} — ${social.role}`]),
  },
  {
    name: "clear",
    describe: "Clear the terminal",
    run: (args, ctx) => ctx.clear(),
  },
  {
    name: "sudo",
    describe: "Superuser things",
    run: (args, ctx) => {
      const joined = args.join(" ");

      if (args.length === 0) {
        ctx.print([
          "usage: sudo <command>",
          "available: hire-ali, make-coffee, rm -rf resume.pdf",
        ]);
        return;
      }

      if (joined === "hire-ali") {
        ctx.print([
          "[sudo] password for recruiter: ********",
          "Permission granted.",
          "Redirecting to /contact ...",
        ]);
        setTimeout(() => ctx.navigate("/contact"), 1200);
        return;
      }

      if (joined === "make-coffee") {
        ctx.print(["Brewing coffee...", "418 I'm a teapot — try again after 5 more coffees."]);
        return;
      }

      if (joined === "rm -rf resume.pdf") {
        ctx.print(["Nice try.", "Some things are permanent — like this résumé."]);
        return;
      }

      ctx.print(["sudo: command not found"]);
    },
  },
  {
    name: "rm",
    describe: "",
    hidden: true,
    run: (args, ctx) => ctx.print(["rm: permission denied.", "(also, that was a little aggressive)"]),
  },
];

export function runCommand(rawInput, ctx) {
  const trimmed = rawInput.trim();
  if (!trimmed) return;
  const [name, ...args] = trimmed.split(/\s+/);
  const cmd = commands.find((c) => c.name === name.toLowerCase());
  if (!cmd) {
    ctx.print([`command not found: ${name}. Type 'help' for available commands.`]);
    return;
  }
  cmd.run(args, ctx);
}
