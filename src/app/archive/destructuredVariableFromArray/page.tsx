"use client";
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import styles from "@/styles/Home.module.css";
import { CodeBlock } from "@/components/CodeBlock";
import useWindowSize from "@/hooks/useWindowSize";
const link = { color: "darkSlateBlue" };


const theBoys = `
const theboys = ['butcher', 'hughie', 'soldier boy'];
`;

const firstElement = `
const first = theboys[0];
console.log(first);
// butcher
`;

const emptyErray = `
const vought = [];
const first = vought[0];
console.log(first);
// undefined
`;

const destructure = `
const theboys = ['butcher', 'hughie', 'soldier boy'];
const [first] = theboys;
console.log(first);
// butcher
`;

const emptyArray2 = `
const vought = [];
const [first] = vought;
console.log(first);
// undefined
`;

const restParam = `
const [first, ...rest] = theboys;
console.log(first);
// butcher
console.log(rest);
// [hughie, soldier boy]
`;

const mikeNorth = `
const [firstUser] = db.getAllUsers();
if (!firstUser) throw new Error();
return firstUser;
`;

const useString = `
const myfriend = 'jimmy';
const [first, ...rest] = myfriend;
console.log(first);
// 'j'
console.log(rest);
// ['i','m','m','y']
`;

const useFetch: NextPage = () => {
  const size = useWindowSize();

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, [size]);

  return (
    <div className={styles.container}>

      <main className={styles.articleMain}>
        <h1>{`Destructured variable from array (JS)`}</h1>

        <div>
          <p>Quick hack for JavaScript cracks</p>
        </div>

        <article>
          <h4>Grab the first element of an array.</h4>
          <p>Say we create an array of variables, something like:</p>
          <CodeBlock code={theBoys} />
          <p>
            Then we want to grab the first element of the array (if it exists):
          </p>
          <CodeBlock code={firstElement} />
          <p>What if the original array was empty?</p>
          <CodeBlock code={emptyErray} />
        </article>

        <article>
          <h4>
            We can do the same thing with destructuring and the rest parameter:
          </h4>
          <CodeBlock code={destructure} />
          <p>Again, what if the original array was empty?</p>
          <CodeBlock code={emptyArray2} />
          <p>Same end result.</p>
          <p>
            We can continue by accessing the &rdquo;rest&rdquo; of the elements
            of the array using the rest parameter:
          </p>
          <CodeBlock code={restParam} />
        </article>

        <article>
          <h4>
            Mike North uses this in a{" "}
            <a
              style={link}
              href="https://frontendmasters.com/courses/fullstack-typescript/data-from-the-database/"
            >
              GraphQL Tutorial
            </a>
            , where he does something like this:
          </h4>
          <CodeBlock code={mikeNorth} />
        </article>

        <article>
          <h4>
            An interesting side note is that this will work with strings as
            well:
          </h4>
          <CodeBlock code={useString} />
          <br />
        </article>
      </main>

    </div>
  );
};

export default useFetch;
