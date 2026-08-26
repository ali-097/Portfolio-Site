import { useEffect, useRef, useState } from "react";

const LOG_LINES = [
  "$ npm run build",
  "vite v6.3.5 building for production...",
  "transforming...",
  "✓ 214 modules transformed.",
  "rendering chunks...",
  "computing gzip size...",
  "dist/index.html                 0.62 kB",
  "dist/assets/index.css           41.18 kB",
  "dist/assets/index.js           186.40 kB",
  "✓ built in 0.4s",
  "Build succeeded — welcome.",
];

const STORAGE_KEY = "portfolio-boot-played";

export function useBootSequence() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(STORAGE_KEY);
  });
  const [lines, setLines] = useState([]);
  const guard = useRef(false);

  useEffect(() => {
    if (!visible || guard.current) return;
    guard.current = true;

    let i = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, LOG_LINES[i]]);
      i += 1;
      if (i >= LOG_LINES.length) {
        clearInterval(interval);
        setTimeout(dismiss, 500);
      }
    }, 110);

    return () => clearInterval(interval);
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = () => dismiss();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  return { visible, lines, dismiss };
}
