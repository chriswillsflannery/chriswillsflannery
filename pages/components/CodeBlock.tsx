import { FC } from "react";

type CodeBlockProps = {
  code: string;
  className?: string;
  lang?: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, className, lang = 'tsx' }) => (
  <pre className={className} style={{ padding: '0 10px 15px 10px', fontSize: '14px', maxWidth: '800px' }}>
    <code className={`language-${lang}`}>
      {code}
    </code>
  </pre>
);
