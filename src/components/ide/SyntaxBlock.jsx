import { tokenizeBio, tokenizePackage } from "../../lib/tokenizer";

const TOKEN_CLASS = {
  comment: "text-gruvbox-subtle italic",
  keyword: "text-gruvbox-purple",
  identifier: "text-gruvbox-fg",
  key: "text-gruvbox-yellow",
  string: "text-gruvbox-green",
  punctuation: "text-gruvbox-muted",
  whitespace: "",
};

const TOKENIZERS = {
  bio: tokenizeBio,
  package: tokenizePackage,
};

export default function SyntaxBlock({ data, variant }) {
  const lines = TOKENIZERS[variant](data);

  return (
    <pre className="bg-gruvbox-panel border border-gruvbox-border rounded-lg p-4 md:p-5 text-[13px] md:text-sm leading-relaxed whitespace-pre-wrap break-words">
      <code>
        {lines.map((line, i) => (
          <div key={i}>
            {line.length === 0 ? (
              " "
            ) : (
              line.map((token, j) => (
                <span key={j} className={TOKEN_CLASS[token.type]}>
                  {token.text}
                </span>
              ))
            )}
          </div>
        ))}
      </code>
    </pre>
  );
}
