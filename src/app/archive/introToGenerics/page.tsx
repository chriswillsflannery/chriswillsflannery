"use client";
import type { NextPage } from "next";

import styles from "@/styles/Home.module.css";
import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";
import Image from "next/image";
import functionSignature from "@/public/introToGenerics/functionSignature.png";
import functionSignatureTypescript from "@/public/introToGenerics/functionSignatureTypescript.png";
import mcConify from "@/public/introToGenerics/mcConify.png";
import mcTriple from "@/public/introToGenerics/mcTriple.png";

const singleGeneric = `
function identity(a: TODO): TODO {
  return a;
}

identity('Derek');
// expected result -> 'Derek'
`;

const singleGenericSolution = `
function identity<T>(a: T): T {
  return a;
}

identity('Derek');
// expected result -> 'Derek'
`;

const twoGenericsDesktop = `
function map(array: TODO[], fn: (value: TODO) => TODO): TODO[] {
  return array.map(fn);
}

map(['peas', 'carrots'], (str) => str.length);
// expected result -> [4, 7]
`;

const twoGenericsSolutionDesktop = `
function map<T,U>(array: T[], fn: (value: T) => U): U[] {
  return array.map(fn);
}

map(['peas', 'carrots'], (str) => str.length);
// expected result -> [4, 7]
`;

const threeGenerics = `
function pipe2(
  x: TODO,
  f1: (value: TODO) => TODO,
  f2: (value: TODO) => TODO
): TODO {
  return f2(f1(x));
}

pipe(
  { name: 'Alice' },
  user => user.name,
  name => name.length > 5,
);
// expected result => false
`;

const threeGenericsSolution = `
function pipe2<T,U,V>(
  x: T,
  f1: (value: T) => U,
  f2: (value: U) => V
): V {
  return f2(f1(x));
}

pipe(
  { name: 'Alice' },
  user => user.name,
  name => name.length > 5,
);
// expected result -> false
`;

const introToGenerics: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.articleMain}>
        <h1>{`Intro to Generics with Type-Level-TypeScript`}</h1>

        <div>
          <p>
            The TypeScript beginner&rsquo;s handbook I wish I had when I was a
            beginner.
          </p>
        </div>

        <article>
          <h4>
            Have you ever come across a resource that&rsquo;s so good, you think
            to yourself, gee whilikers,
          </h4>
          <h3>
            had only that I <i>had had</i> this resource whilst I were but a wee
            sapling, mightier still such an oak may haft sprang{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
              }}
            >
              fortht?
            </span>
          </h3>
          <br />
          <p>
            This is what I though to myself when I came across{" "}
            <a
              style={{ color: "purple" }}
              href="https://www.type-level-typescript.com"
            >
              Type-Level Typescript.
            </a>
          </p>
          <p>
            Simple, explained in terms that make sense, and great code examples
            to boot.
          </p>
          <p>
            What really makes this site special, though, is the interactive code
            tests at the end of each section.
          </p>
          <p>
            Below I will give my take on <i>Generics,</i> and show a few code
            examples with explanations.
          </p>
        </article>

        <HL />

        <article>
          <h4>What da heck is Generics</h4>
          <p>Functions in JavaScript (and TypeScript) have signatures.</p>
          <p>A function&rsquo;s signature is like a formula.</p>
          <p>
            It&rsquo;s probably best thought of as a way to describe how a
            function&rsquo;s inputs and outputs relate to each other.
          </p>
          <p>
            One caveat here being that in JavaScript, we don&rsquo;t define
            outputs.
          </p>
          <p>For example, in something like the below:</p>
          <Image
            src={functionSignature}
            alt="Function Signature Javascript"
            width={400}
            height={100}
            priority
            className={styles.image}
          />
          <p>
            the function signature is simply the function&rsquo;s name
            (addByTwo) and argument (num).
          </p>
          <p>
            Unfortunately, simply looking at the function name and inputs
            doesn&rsquo;t give us a whole lot of rich information about what the
            function does.
          </p>
          <p>
            Especially compared with other languages where we explicitly define
            inputs and outputs.
          </p>
        </article>

        <HL />

        <article>
          <h4>
            One of the ways TypeScript tries to assuage this issue is by
            including <i>types</i>, and for that matter, <i>return types.</i>
          </h4>
          <p>Our earlier function now becomes something like this:</p>
          <Image
            src={functionSignatureTypescript}
            alt="Function Signature Typescript"
            width={500}
            height={100}
            className={styles.image}
          />
          <p>
            Now by simply glancing at this function&rsquo;s signature we get a
            whole hecka lot more information.
          </p>
          <p>
            We can now see that it must take a number as an input and return a
            number as an output.
          </p>
          <p>
            Without explicitly needing to look at this function&rsquo;s{" "}
            <i>definition</i> (the code inside the curly braces),
          </p>
          <p>
            we can more or less infer what its purpose is, and how the pieces
            relate to one another.
          </p>
        </article>

        <HL />

        <article>
          <h4>Generics take this relationship business to the next level.</h4>
          <p>
            Let&rsquo;s say we have a function that takes in a string
            &rsquo;Alright&rsquo;
          </p>
          <p>
            And returns an array where that string has been duplicated 3 times:
          </p>
          <Image
            src={mcConify}
            alt="Function which takes a string and returns an array of that string, repeated 3 times"
            width={550}
            height={120}
          />
          <p>
            Ok, simple enough to create TypeScript types for this. A function
            that takes in a string and returns an array of strings.
          </p>
        </article>

        <HL />

        <article>
          <h4>The next day your boss comes to you with a request.</h4>
          <p>
            Your boss says to you, this is no good {`{firstName} {lastName}`}!
          </p>
          <p>The shareholders are not happy! Not happy at all!</p>
          <p>
            Now you have to change this function so its input is not necessarily
            a string.
          </p>
          <p>
            It could be a string, it could be a number, it doesn&rsquo;t really
            matter, but what is important,
          </p>
          <p>
            is that whatever <i>thing</i> it takes in, it must return an array
            of three of those <i>things.</i>
          </p>
          <br />
          <p>
            This is the exact scenario <i>Generics</i> are built for;
          </p>
          <p>
            Variable inputs/outputs where the <i>type</i> of the input and the{" "}
            <i>type</i> of the output are somehow related.
          </p>
          <Image
            src={mcTriple}
            alt="Function which takes a thing and returns an array of that thing, repeated 3 times"
            width={550}
            height={160}
          />
          <p>
            With a pattern like this, we get FAR more information about the
            purpose of the function simply by looking at its signature,
          </p>
          <p>
            and it is now flexible enough to satisfy your boss and shareholders.
          </p>
        </article>

        <HL />

        <article>
          <h4>
            Lettuce take a look at a few examples from Type-Level Typescript:
          </h4>
          <CodeBlock code={singleGeneric} />
          <p>
            What can we infer here? We know that this function will need to take
            in a value (parameter), and return a value which is of the same type
            as the parameter.
          </p>
          <p>
            This is a great example of a function that can make use of a single
            generic value:
          </p>
          <CodeBlock code={singleGenericSolution} />
          <p>
            The first T is best thought of as a representation that this
            function will make use of a single generic value.
          </p>
          <p>
            The second T, used as a type for the parameter &rsquo;a&rsquo;,
            shows that the value the function takes in may be of any type.
          </p>
          <p>
            The third T, used as a return type, shows us that the value this
            function returns must be of the same type as the parameter it took
            in.
          </p>
        </article>

        <HL />

        <article>
          <h4>
            Another one, now using a function signature which requires 2 generic
            values:
          </h4>
          <CodeBlock code={twoGenericsDesktop} />
          <p>
            What is the relationship between the inputs and the outputs here?
          </p>
          <p>
            We know the function takes an array of things. Here they are
            strings, but really their type could be anything.
          </p>
          <p>
            It also takes in a (callback) function which will run over each
            value of the array.
          </p>
          <p>
            So we know that the value this callback function takes in as a
            parameter must be of the same type as each element in the array. We
            can call this value T.
          </p>
          <p>
            The callback function returns a thing. Its type could be anything,
            and is completely independent of the elements of the array, as well
            as independent of the parameter the callback function takes in.
          </p>
          <p>We can call this 2nd variable value U.</p>
          <p>We would then write this function like:</p>
          <CodeBlock code={twoGenericsSolutionDesktop} />
        </article>

        <HL />

        <article>
          <h4>Now one which uses 3 generics:</h4>
          <CodeBlock code={threeGenerics} />
          <p>
            We have a function that takes in a value, then passes that value
            through a callback function and transforms it into a different
            value.
          </p>
          <p>
            This new value may or may not be the same type as the original
            value.
          </p>
          <p>
            We then take the result of the first callback function and pass it
            through a second callback function.
          </p>
          <p>
            The result of the 2nd callback function becomes the return value.
          </p>
          <p>
            Its value may or may not be the same type as the value passed into
            the 2nd callback function.
          </p>
          <p>In total, then, we need 3 generic values:</p>
          <CodeBlock code={threeGenericsSolution} />
        </article>
      </main>
    </div>
  );
};

export default introToGenerics;
