import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-boot-played";

const TYPE_SPEED = 35; // ms per character for "typed" lines
const PRINT_DELAY = 110; // ms between "printed" lines
const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const SPINNER_INTERVAL = 80; // ms per spinner frame
const SPINNER_DURATION = 700; // total ms the spinner runs
const FINAL_PAUSE = 700; // ms to hold the last line before dismissing

const STEPS = [
  { kind: "typed", text: "$ npm run build" },
  { kind: "spinner", label: "vite v6.3.5 building for production..." },
  { kind: "printed", text: "transforming..." },
  { kind: "printed", text: "✓ 214 modules transformed." },
  { kind: "printed", text: "rendering chunks..." },
  { kind: "printed", text: "computing gzip size..." },
  { kind: "printed", text: "dist/index.html                 1.76 kB │ gzip:   0.76 kB" },
  { kind: "printed", text: "dist/assets/index.css          33.29 kB │ gzip:   6.57 kB" },
  { kind: "printed", text: "dist/assets/index.js          517.35 kB │ gzip: 169.21 kB" },
  { kind: "printed", text: "✓ built in 6.93s" },
  { kind: "printed", text: "" },
  { kind: "typed", text: "$ vercel deploy --prod" },
  { kind: "printed", text: "🔍  Inspecting build output..." },
  { kind: "printed", text: "✅  Production: https://muhammadalimehmood.vercel.app" },
  { kind: "printed", text: "" },
  { kind: "typed", text: "Welcome." },
];

export function useBootSequence() {
  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" ? !sessionStorage.getItem(STORAGE_KEY) : false
  );
  const [completedLines, setCompletedLines] = useState([]);
  const [current, setCurrent] = useState(null);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    let cancelled = false;
    const timers = [];
    const schedule = (fn, delay) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timers.push(id);
    };

    setCompletedLines([]);
    setCurrent(null);

    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex >= STEPS.length) {
        schedule(dismiss, FINAL_PAUSE);
        return;
      }
      const step = STEPS[stepIndex];
      stepIndex += 1;

      if (step.kind === "typed") {
        let charIndex = 0;
        const typeChar = () => {
          charIndex += 1;
          setCurrent({ kind: "typed", text: step.text.slice(0, charIndex) });
          if (charIndex < step.text.length) {
            schedule(typeChar, TYPE_SPEED);
          } else {
            setCompletedLines((prev) => [...prev, step.text]);
            setCurrent(null);
            schedule(runStep, PRINT_DELAY);
          }
        };
        typeChar();
      } else if (step.kind === "printed") {
        setCurrent({ kind: "printed", text: step.text });
        schedule(() => {
          setCompletedLines((prev) => [...prev, step.text]);
          setCurrent(null);
          runStep();
        }, PRINT_DELAY);
      } else if (step.kind === "spinner") {
        const start = Date.now();
        let frame = 0;
        const tick = () => {
          setCurrent({
            kind: "spinner",
            frame: SPINNER_FRAMES[frame % SPINNER_FRAMES.length],
            label: step.label,
          });
          frame += 1;
          if (Date.now() - start < SPINNER_DURATION) {
            schedule(tick, SPINNER_INTERVAL);
          } else {
            setCompletedLines((prev) => [...prev, step.label]);
            setCurrent(null);
            runStep();
          }
        };
        tick();
      }
    };

    runStep();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [visible, dismiss]);

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = () => dismiss();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, dismiss]);

  return { visible, completedLines, current, dismiss };
}
