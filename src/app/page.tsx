import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-4">
      <header className="mb-8">
        <nav className="flex justify-end space-x-2 mb-6">
          <Link href="/espanol">
            Ponte mosca pe 🇵🇪
          </Link>
        </nav>
        <div className="h-2 bg-gray-800 rounded-full" />
      </header>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{`Hello There.`}</h1>

        <ul className="list-disc pl-5 space-y-2">
          <ListItem
            href="./genericPost/subtitler"
          >
            Auto-subtitler and Universal Speech <span className="text-yellow-200">Model</span>
          </ListItem>
          <ListItem
            href="https://youtu.be/7i37SSc14Dg?si=FMSfpUUihhNpIB5D"
          >
            Everything is an AI Agent... or is it?
          </ListItem>
          <ListItem
            href="https://www.youtube.com/watch?v=_y77s1gH0Eg"
          >
            I no longer welcome AI replacing me, I fear it
          </ListItem>
          <ListItem
            href="./genericPost/deadInternet"
          >
            <span className="text-yellow-200">Dead</span> internet theory is dead!
          </ListItem>
          {/* <ListItem
            href="./posts/whyIsJavascriptSingleThreaded"
          >
            Why is JavaScript single threaded? (Go is multi-threaded)
          </ListItem>
          <ListItem
            href="https://www.youtube.com/watch?v=5dmiGyppRGw"
          >
            Game-Based Eval of ChatGPT o1-preview | Strawberry | Q*
          </ListItem>
          <ListItem
            href="./posts/ragExamplesForJobApplication"
          >
            RAG documents for job application autofill
          </ListItem>
          <ListItem
            href="./posts/uiStringPatternMatching"
          >
            React: UI string pattern matching with Regex
          </ListItem>
          <ListItem
            href="./posts/cookieClickerReact"
          >
            Cookie Clicker: <span className="text-yellow-200">React Refs</span>
          </ListItem>
          <ListItem
            href="./posts/goRoutine"
          >
            Go Routines
          </ListItem>
          <ListItem
            href="./posts/useFetch"
          >
            Custom TS React hook: useFetch
          </ListItem>
          <ListItem
            href="./posts/willAITakeCodingJobs"
          >
            Will A.I. Replace Coding Jobs?
          </ListItem>
          <ListItem
            href="./posts/snowCrash"
          >
            Snow Crash: Machine Learning & The Future of Research
          </ListItem>
          <ListItem
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
          </ListItem>
          <ListItem
            href="./posts/extendingTsGenerics"
          >
            Constraining TS Generics with "Extends" pattern
          </ListItem>
          <ListItem
            href="./posts/introToGenerics"
          >
            Intro to <span className="text-yellow-200">Generics</span> with Type-Level-Typescript
          </ListItem>
          <ListItem
            href="./posts/discriminatedUnionsTS"
          >
            Discriminated Unions in TypeScript
          </ListItem>
          <ListItem
            href="./posts/destructuredVariableFromArray"
          >
            Destructured variable from array (JS)
          </ListItem>
          <ListItem
            href="./posts/turnNextIntoCra"
          >
            Turning NextJS into CRA
          </ListItem>
          <ListItem
            href="https://www.youtube.com/watch?v=ByuEfCcj1vg"
          >
            Parse data like a Blade Runner with JavaScript
          </ListItem>
          <ListItem
            href="https://www.youtube.com/watch?v=0V2Mi16xd04"
          >
            Find the Mode of a dataset (sub. Español)
          </ListItem> */}
        </ul>
      </main>

      <footer className="mt-8 pt-4 border-t border-white">
        <p>
          <Link href="./archive" className="underline mr-4">
            Archive
          </Link>
          <Link href="./crossword" className="underline">
            Crossword
          </Link>
        </p>
      </footer>
    </div>
  );
};

const ListItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="underline hover:no-underline">
        {children}
      </Link>
    </li>
  );
};

export default Home;
