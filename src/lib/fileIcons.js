import { VscFile, VscFilePdf } from "react-icons/vsc";

// Explorer nodes and editor tabs both render a file icon; keeping the
// extension → icon mapping here stops the two from drifting apart.
export function fileIconFor(name = "") {
  if (name.toLowerCase().endsWith(".pdf")) return VscFilePdf;
  return VscFile;
}

export function languageFor(name = "") {
  const lower = name.toLowerCase();
  if (lower.endsWith(".jsx")) return "JavaScript JSX";
  if (lower.endsWith(".pdf")) return "PDF";
  return "Plain Text";
}
