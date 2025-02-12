'use client'
import { FC, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

type CodeBlockProps = {
  code: string;
  lang?: string;
};

export const CodeBlock: FC<CodeBlockProps> = ({
  code,
  lang = "tsx",
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre
      className={`language-${lang}`}
      style={{ padding: "0 10px 15px 10px", fontSize: "14px", maxWidth: "800px" }}
      tabIndex={0}
    >
      <code ref={codeRef} className={`language-${lang}`}>
        {code}
      </code>
    </pre>
  );
};
