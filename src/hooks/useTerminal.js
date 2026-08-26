import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { runCommand } from "../lib/commandParser";
import { routeToShellPath } from "../data/fileTree";

const WELCOME = [
  "Portfolio Terminal — type 'help' to see available commands.",
];

export function useTerminal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [history, setHistory] = useState(() =>
    WELCOME.map((text) => ({ type: "output", text }))
  );
  const [commandHistory, setCommandHistory] = useState([]);

  const print = useCallback((lines) => {
    setHistory((h) => [
      ...h,
      ...lines.map((text) => ({ type: "output", text })),
    ]);
  }, []);

  const clear = useCallback(() => setHistory([]), []);

  const openExternal = useCallback((url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const submit = useCallback(
    (input) => {
      const path = routeToShellPath[location.pathname] ?? "~";
      setHistory((h) => [...h, { type: "input", text: input, path }]);
      setCommandHistory((h) => [...h, input]);
      runCommand(input, {
        print,
        clear,
        navigate,
        openExternal,
        path,
        commandHistory: [...commandHistory, input],
      });
    },
    [print, clear, navigate, openExternal, location.pathname, commandHistory]
  );

  return { history, commandHistory, submit, currentPath: routeToShellPath[location.pathname] ?? "~" };
}
