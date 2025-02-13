"use client";

import { HL } from "@/components/HorizontalLine";
import { CodeBlock } from "@/components/CodeBlock";
import React, { useState } from "react";

const reactQuestion = `
const terms = {
  brownie: "A delicious dessert made with chocolate and nuts",
  "root beer": "A sweet, carbonated beverage made from the root of the sassafras tree",
  chocolate: "A sweet, brown food made from cacao seeds",
  tempura: "A Japanese dish of seafood or vegetables that have been battered and deep-fried",
  mondo: "A large or great thing",
};

const items = [
  {
    id: "1",
    name: "Maine Root-Beer",
    description: "A classic root beer made with fair trade sugar.",
  },
  {
    id: "2",
    name: "Tempura layered Brownie",
    description: "A delicious brownie covered in a tempura layer",
  },
];

For each of the above items, we want to render a JSX element.
The JSX element should display the name and description of the item.
If any of the terms in the description of the item match any of the terms above,
that term should be rendered in the UI with an underline, and when the user
hovers on that item, a dialogue box should appear which shows the description of the item.
`;

const reactExampleStringMatching = `
const Tooltip = ({ description, children }) => {
  return (
    <span className="tooltip">
      {children}
      <span className="tooltiptext">{description}</span>
    </span>
  );
};

const processDescription = (
  description,
  terms
): (React.JSX.Element | string)[] => {
  const termKeys = Object.keys(terms);
  const parts: (React.JSX.Element | string)[] = [];
  let lastIndex = 0;

  termKeys.forEach((term) => {
    // match whole term, case insensitive
    const regex = new RegExp(\`\\\\b\${term}\\\\b\`, "gi");
    let match = regex.exec(description);

    while (match !== null) {
      const before = description.slice(lastIndex, match.index);
      if (before) parts.push(before);
      parts.push(<Tooltip description={terms[term]}>{match[0]}</Tooltip>);
      lastIndex = regex.lastIndex;
      match = regex.exec(description);
    }
  });

  parts.push(description.slice(lastIndex));

  return parts;
};

const Item = ({ item }) => {
  const { name, description } = item;

  const processedDescription = processDescription(description, terms);

  return (
    <div className="item">
      <h2>{name}</h2>
      <p>{processedDescription}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default App;
`;

export const renderApp = `
const App = () => {
  return (
    <div className="app">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
`;

const renderItem = `
const Item = ({ item }) => {
  const { name, description } = item;

  const processedDescription = processDescription(description, terms);

  return (
    <div className="item">
      <h2>{name}</h2>
      <p>{processedDescription}</p>
    </div>
  );
};
`;

const processDescriptionCode = `
const processDescription = (
  description,
  terms
): (React.JSX.Element | string)[] => {
  const termKeys = Object.keys(terms);
  const parts: (React.JSX.Element | string)[] = [];
  let lastIndex = 0;

  termKeys.forEach((term) => {
    // match whole term, case insensitive
    const regex = new (\`\\\\b\${term}\\\\b\`, "gi");
    let match = regex.exec(description);

    while (match !== null) {
      const before = description.slice(lastIndex, match.index);
      if (before) parts.push(before);
      parts.push(<Tooltip description={terms[term]}>{match[0]}</Tooltip>);
      lastIndex = regex.lastIndex;
      match = regex.exec(description);
    }
  });

  parts.push(description.slice(lastIndex));

  return parts;
};
`;

const oneMatcherMatching = `
// match whole term, case insensitive
const regex = new (\`\\\\b\${term}\\\\b\`, "gi");
let match = regex.exec(description);

// so for example, if the description is:
"A classic root beer made with fair trade sugar."
// and the term we are trying to match against is:
"root beer"
// then the variable "match" will capture the string "root beer",
// with some other important information like match.index
// and THAT is the real power of regex.
`;

const slicedBefore = `
while (match !== null) {
  const before = description.slice(lastIndex, match.index);

// if the description is:
"A classic root beer made with fair trade sugar."
// and the term we are trying to match against is:
"root beer"
// then "before" will capture "A classic "
`;

const whyRegexExecAgain = `
lastIndex = regex.lastIndex;
match = regex.exec(description);

Why should we need to re-assign the value of match, to the value of running
regex.exec again?

What would happen if we were to omit this line?
`;

export default function WhyIsJavaScriptSingleThreaded() {
  const terms = {
    brownie: "A delicious dessert made with chocolate and nuts",
    "root beer":
      "A sweet, carbonated beverage made from the root of the sassafras tree",
    chocolate: "A sweet, brown food made from cacao seeds",
    tempura:
      "A Japanese dish of seafood or vegetables that have been battered and deep-fried",
    mondo: "A large or great thing",
  };

  const items = [
    {
      id: "1",
      name: "Maine Root-Beer",
      description: "A classic root beer made with fair trade sugar.",
    },
    {
      id: "2",
      name: "Tempura layered Brownie",
      description: "A delicious brownie covered in a tempura layer",
    },
  ];

  // Tooltip component with inline styles
  const Tooltip = ({ term, description, children }: any) => {
    const [visible, setVisible] = useState(false);

    const tooltipStyle = {
      position: "relative",
      display: "inline-block",
      textDecoration: "underline",
    };

    const tooltipTextStyle = {
      visibility: visible ? "visible" : "hidden",
      width: "200px",
      backgroundColor: "black",
      color: "#fff",
      textAlign: "center",
      borderRadius: "5px",
      padding: "5px 0",
      position: "absolute",
      zIndex: 1,
      bottom: "125%",
      left: "50%",
      marginLeft: "-100px",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s",
    };

    return (
      <span
        style={tooltipStyle as any}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
        <span style={tooltipTextStyle as any}>{description}</span>
      </span>
    );
  };

  const processDescription = (description: any, terms: any) => {
    const termKeys = Object.keys(terms);
    const parts = [];
    let lastIndex = 0;

    termKeys.forEach((term) => {
      // match whole term, case insensitive
      const regex = new RegExp(`\\b${term}\\b`, "gi");
      let match = regex.exec(description);

      while (match !== null) {
        const before = description.slice(lastIndex, match.index);
        if (before) parts.push(before);
        parts.push(<Tooltip key={`tooltip-${term}-${match[0]}`} description={terms[term]}>{match[0]}</Tooltip>);
        lastIndex = regex.lastIndex;
        match = regex.exec(description);
      }
    });

    parts.push(description.slice(lastIndex));

    return parts;
  };

  const Item = ({ item }: { item: { name: string; description: string } }) => {
    const { name, description } = item;

    const processedDescription = processDescription(description, terms);

    return (
      <div className="item">
        <h2>{name}</h2>
        <p>{processedDescription}</p>
      </div>
    );
  };

  return (
    <main>
      <h1>{`UI Pattern matching with Regex: React Interview Question`}</h1>
      <HL />

      <article>
        <h4>In this React interview problem, you are asked to:</h4>
        <CodeBlock code={reactQuestion} />
        <p>Hover the below underlined terms to view descriptions:</p>
        <div style={{ border: "1px solid white", padding: "5px" }}>
          {items.map((item) => (
            <React.Fragment key={`item-${item.name}-${item.description}`}>
              <Item key={`item-${item.name}-${item.description}`} item={item} />
            </React.Fragment>
          ))}
        </div>

        <CodeBlock code={reactExampleStringMatching} />
      </article>

      <article>
        <h3>{`Let's break this down:`}</h3>
        <CodeBlock code={renderApp} />
        <p>{`We render a list of our items.`}</p>
        <CodeBlock code={renderItem} />
        <p>{`We render an item, which has a name and a description. Building the description will be taken care of in a helper function.`}</p>
        <CodeBlock code={processDescriptionCode} />
        <p>{`First we need to grab the keys of the terms object. This is a pretty inexpensive operation, so here, it's OK that we're doing this each time we call the processDescription function. But if the list of terms grew, it would probably be a good idea to only perform this operation once, at the top level.`}</p>
        <p>{`Next we create an empty array for "parts". We will push strings (which do not need special styling) and JSX elements representing key terms (which do need special styling) into this.`}</p>
        <p>{`We'll also store a value 'lastIndex' which represents the position in the parent string (in this case, description) immediately following the last match.`}</p>
        <p>{`Next, we'll loop over each of the terms.`}</p>
        <p>{`For each term, we define a regex which will find that term (if it exists) within the description. We then create a matcher which will store the matched value.`}</p>
        <CodeBlock code={oneMatcherMatching} />
        <p>{`Next we check that "match" is defined, and we slice out the string before the matched index:`}</p>
        <CodeBlock code={slicedBefore} />
        <p>{`We push the "before" slice into "parts" (which crucially, can hold either a string or a JSX element)`}</p>
        <p>{`We then define some JSX to represent our "special" UI display terms, pass the matched term to it as a child, and push the whole Tooltip JSX element into "parts".`}</p>
        <p>{`We then use another great feature of regex: LastIndex. This will tell us the index of the character immediately following the matched term. Then we re-assign the value `}</p>
        <p>{`Then we reassign the value of "match" to once again run regex.exec on our description. But why?`}</p>
        <CodeBlock code={whyRegexExecAgain} />
        <p>{`Curiously, if we were to omit this line, we find that the while loop runs infinitely, and crashes our page. So what is it exactly that this line of code is doing?`}</p>
        <p>{`The critical piece to understand here is that any time we call the method "regex.exec", this will mutate the value of "lastIndex" on the regex object. So any subsequent calls to "regex.exec" will use whatever the current value of "regex.lastIndex" to determine ~from what index~ to start matching.`}</p>
        <p>{`Thus, if we were to have omitted the final line of the while loop, the while loop will never update "match", thus never updating the value of "regex.lastIndex", so "match" will always contain the first match found. Thus the loop condition will always be true, resulting in an infinite loop.`}</p>
      </article>

      <HL />
    </main>
  );
}
