// Hand-rolled formatters for SyntaxBlock — deliberately NOT a general JS
// parser. Each function knows the exact shape of the data it's fed and
// emits an array of "lines", where each line is an array of
// { type, text } tokens. Keeping this scoped (rather than generalizing
// into a real tokenizer) keeps the bundle tiny and the output predictable.

const t = (type, text) => ({ type, text });
const punct = (text) => t("punctuation", text);

const indent = (level) => t("whitespace", "  ".repeat(level));

/**
 * Renders the About-page bio as a commented JS object, e.g.
 *
 * /**
 *  * what I actually do
 *  *\/
 * const developer = {
 *   role: "full-stack developer",
 *   focus: [...],
 *   summary: "...",
 * };
 */
export function tokenizeBio(bio) {
  const lines = [];

  lines.push([t("comment", "/**")]);
  lines.push([t("comment", " * what I actually do")]);
  lines.push([t("comment", " */")]);
  lines.push([
    t("keyword", "const"),
    t("whitespace", " "),
    t("identifier", "developer"),
    t("whitespace", " "),
    punct("="),
    t("whitespace", " "),
    punct("{"),
  ]);

  lines.push([indent(1), t("key", "role"), punct(":"), t("whitespace", " "), t("string", `"${bio.role}"`), punct(",")]);

  lines.push([indent(1), t("key", "focus"), punct(":"), t("whitespace", " "), punct("[")]);
  bio.focus.forEach((item, i) => {
    lines.push([
      indent(2),
      t("string", `"${item}"`),
      punct(i === bio.focus.length - 1 ? "" : ","),
    ]);
  });
  lines.push([indent(1), punct("],")]);

  lines.push([indent(1), t("key", "summary"), punct(":"), t("whitespace", " "), t("string", `"${bio.summary}"`)]);
  lines.push([punct("};")]);

  return lines;
}

/**
 * Renders a techStack category map as a package.json-flavored dependency
 * list, grouped under comment headers per category.
 */
export function tokenizePackage(techStack) {
  const lines = [];
  const categoryLabels = {
    languages: "languages",
    frontend: "frontend",
    backend: "backend & apis",
    databases: "databases",
    testing: "testing & devops",
    tools: "tooling",
  };

  lines.push([punct("{")]);
  lines.push([indent(1), t("key", '"dependencies"'), punct(":"), t("whitespace", " "), punct("{")]);

  const categories = Object.entries(techStack);
  categories.forEach(([category, items], catIdx) => {
    lines.push([indent(2), t("comment", `// ${categoryLabels[category] ?? category}`)]);
    items.forEach((item, i) => {
      const isLast = catIdx === categories.length - 1 && i === items.length - 1;
      lines.push([
        indent(2),
        t("key", `"${item.name.toLowerCase().replace(/\s+/g, "-")}"`),
        punct(":"),
        t("whitespace", " "),
        t("string", `"${item.version}"`),
        punct(isLast ? "" : ","),
      ]);
    });
  });

  lines.push([indent(1), punct("}")]);
  lines.push([punct("}")]);

  return lines;
}
