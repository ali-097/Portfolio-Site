import { useEffect, useRef, useState } from "react";
import { useTerminal } from "../../hooks/useTerminal";
import { commands } from "../../lib/commandParser";

const completionCandidates = commands.filter((c) => !c.hidden).map((c) => c.name);

export default function Terminal() {
  const { history, commandHistory, submit, currentPath } = useTerminal();
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const historyPointer = useRef(null); // index into commandHistory, or null = live draft
  const draft = useRef("");
  const tabState = useRef({ prefix: null, index: 0 });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    submit(input);
    setInput("");
    historyPointer.current = null;
    draft.current = "";
    tabState.current = { prefix: null, index: 0 };
  };

  const recallHistory = (direction) => {
    if (commandHistory.length === 0) return;

    if (direction === "up") {
      if (historyPointer.current === null) {
        draft.current = input;
        historyPointer.current = commandHistory.length - 1;
      } else {
        historyPointer.current = Math.max(0, historyPointer.current - 1);
      }
      setInput(commandHistory[historyPointer.current]);
    } else {
      if (historyPointer.current === null) return;
      if (historyPointer.current >= commandHistory.length - 1) {
        historyPointer.current = null;
        setInput(draft.current);
      } else {
        historyPointer.current += 1;
        setInput(commandHistory[historyPointer.current]);
      }
    }
  };

  const handleTabComplete = () => {
    const firstWord = input.split(/\s+/)[0] ?? "";
    const matches = completionCandidates.filter((name) => name.startsWith(firstWord));
    if (matches.length === 0) return;

    if (tabState.current.prefix !== firstWord) {
      tabState.current = { prefix: firstWord, index: 0 };
    } else {
      tabState.current.index = (tabState.current.index + 1) % matches.length;
    }
    setInput(matches[tabState.current.index] + " ");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      recallHistory("up");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      recallHistory("down");
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabComplete();
    } else {
      tabState.current = { prefix: null, index: 0 };
    }
  };

  return (
    <div
      className="h-full flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-2 text-sm">
        {history.map((line, i) =>
          line.type === "input" ? (
            <p key={i} className="text-gruvbox-fg">
              <span className="text-gruvbox-green">➜</span>{" "}
              <span className="text-gruvbox-aqua">{line.path ?? "~"}</span> {line.text}
            </p>
          ) : (
            <p key={i} className="text-gruvbox-subtle whitespace-pre-wrap">
              {line.text}
            </p>
          )
        )}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-0.5">
          <span className="text-gruvbox-green">➜</span>
          <span className="text-gruvbox-aqua">{currentPath}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent outline-none text-gruvbox-fg font-mono"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
}
