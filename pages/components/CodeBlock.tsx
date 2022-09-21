import { FC } from "react";

type CodeBlockProps = {
  code: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ code }) => (
  <pre style={{ padding: '0 10px 15px 10px' }}>
    <code className="language-tsx">
      {code}
    </code>
  </pre>
);

export default CodeBlock;