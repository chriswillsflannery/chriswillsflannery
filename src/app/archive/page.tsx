import Link from "next/link";
import { HL } from "@/components/HorizontalLine";
const Archive = () => {
  return (
    <div>
      <main className="space-y-4 p-4">
        <p>Archive.</p>

        <HL />

        <p>
          <Link href="./archive/useFetch">
            Feb 15 2025: Custom TS React hook: useFetch
          </Link>
        </p>

        <p>
          <Link href="https://www.tiktok.com/@codetourtiktok/video/7470939791530429742">
            [Tiktok] RAG or tool call for new technical documentation?
          </Link>
        </p>

        <p>
          <Link href="https://www.tiktok.com/@codetourtiktok/video/7428347045611588895">
            [Tiktok] This Silicon Valley scene is funny
          </Link>
        </p>

        <p>
          <Link href="https://www.tiktok.com/@codetourtiktok/video/7430691423613160735">
            [Tiktok] How to safely manage multi-threaded subroutines
          </Link>
        </p>

        <p>
          <Link href="https://www.youtube.com/watch?v=Z940KApqpoM">
            [YT] Where the heck is my frontend data?
          </Link>
        </p>

        <p>
          <Link href="https://www.youtube.com/watch?v=JoWMUApWnug">
            [YT] Design an AutoComplete component
          </Link>
        </p>

        <p>
          <Link href="https://www.youtube.com/watch?v=zgIyzEEXfiA">
            [YT] Design a URL Shortener
          </Link>
        </p>

        {/* <p>
          <Link href="./archive/htmlRenderingEngine">
            Aug 13 2022: HTML Rendering Engine.
          </Link>
        </p> */}

        {/* <p>
          <Link href="./archive/cssRenderingEngine">
            Aug 13 2022: CSS Rendering Engine. (1/2)
          </Link>
        </p> */}

        {/* <p>
          <Link href="./archive/cssRenderingEngine2">
            Aug 13 2022: CSS Rendering Engine. (2/2)
          </Link>
        </p> */}

        <p>
          <a href="https://medium.com/@chriswillsflannery_54084/time-traveling-state-debugger-reactime-now-supporting-concurrent-mode-routers-and-more-56f9ca6f7601">
            [Medium] Nov 19 2019: Time Traveling State Debugger — Reactime — Now
            Supporting Concurrent Mode, Routers, and more
          </a>
        </p>

        <p>
          <a href="https://react.statuscode.com/issues/165">
            [React Status] Nov 19 2019: Reactime feature in React Status
          </a>
        </p>

        <p>
          <a href="https://medium.com/itnext/sort-of-beginners-guide-to-webpack-dev-server-98f8843b1bc1">
            [Medium] Nov 29 2019: Sort-of-beginner&quot;s guide to
            webpack-dev-server
          </a>
        </p>

        <p>
          <a href="https://medium.com/itnext/deep-in-the-weeds-with-reactime-concurrent-react-fiberroot-and-browser-history-caching-7ce9d7300abb">
            [Medium] Nov 21 2019: Deep in the Weeds with Reactime, Concurrent React
            _fiberRoot, and Browser History Caching
          </a>
        </p>

        {/* <ListItem
            href="./posts/oop3DataManipulation"
          >
            Object-Oriented Programming in JS: 3. Data Manipulation
          </ListItem>
          <ListItem
            href="./posts/oop2PrototypeChain"
          >
            Object-Oriented Programming in JS: 2. Prototypal Inheritance
          </ListItem>
          <ListItem
            href="./posts/oop1DataLookup"
          >
            Object-Oriented Programming in JS: 1. Data lookup on objects
          </ListItem> */}

        <p>
          <Link href="./archive/introToGenerics">
            Intro to Generics with Type-Level-Typescript
          </Link>
        </p>

        <p>
          <Link href="https://www.youtube.com/watch?v=ByuEfCcj1vg">
            [YT]: Parse data like a Blade Runner with JavaScript
          </Link>
        </p>

        <p>
          <Link href="https://www.youtube.com/watch?v=0V2Mi16xd04">
            [YT]: Find the Mode of a dataset (sub. Español)
          </Link>
        </p>

        <p>
          <Link href="./archive/destructuredVariableFromArray">
            Destructured variable from array (JS)
          </Link>
        </p>

        {/* <p>
          <Link href="./archive/binaryChristmasTree">
            Binary Christmas Tree
          </Link>
        </p> */}
        <HL />

        <p>
          <Link href="./">Home</Link>
        </p>
      </main>
    </div>
  );
};

export default Archive;
