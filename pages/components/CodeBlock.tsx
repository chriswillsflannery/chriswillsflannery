import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';
import { FC } from "react";

type CodeBlockProps = {
  code: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ code }) => (
  <Highlight {...defaultProps} code={code} language="tsx" theme={dracula}>
    {({ style, tokens, getTokenProps }) => (
      <pre style={{ ...style, fontSize: '16px', padding: '0 8px 0 8px' }}>
        {tokens.map((line, i) => (
          <div key={i} style={{ display: 'flex'}} >
            <div style={{ marginRight: '8px' }}>{i + 1}</div>
            <div>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)