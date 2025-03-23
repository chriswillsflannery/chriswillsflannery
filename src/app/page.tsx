import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-4">
      <header className="mb-8">
        <nav className="flex justify-end space-x-2 mb-6">
          <Link href="/esp">Ponte mosca pe 🇵🇪</Link>
        </nav>
        <div className="h-2 bg-gray-800 rounded-full" />
      </header>
      <main className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{`Hello There.`}</h1>

        <ul className="list-disc pl-5 space-y-2">
          <ListItem href="./post/thereIsNoMoat">
            Sun Mar 22, 2025: There Is No <span className="text-yellow-200">Moat!</span>
          </ListItem>
          <ListItem href="./post/inspirations">
            I owe my love of programming to these things
          </ListItem>
          <ListItem href="./post/problemRLHF">
            One BIG problem with RLHF/Human Labeling
          </ListItem>
          <ListItem href="./post/subtitler">
            Auto-subtitler and Universal Speech{" "}
            <span className="text-yellow-200">Model</span>
          </ListItem>
          <ListItem href="https://youtu.be/7i37SSc14Dg?si=FMSfpUUihhNpIB5D">
            [YT]: Everything is an AI Agent... or is it?
          </ListItem>
          <ListItem href="https://www.youtube.com/watch?v=_y77s1gH0Eg">
            [YT]: I no longer welcome AI replacing me, I fear it
          </ListItem>
          <ListItem href="./post/deadInternet">
            <span className="text-yellow-200">Dead</span> internet theory is
            dead!
          </ListItem>
          <ListItem href="./post/whyIsJavascriptSingleThreaded">
            Why is JavaScript single threaded? (Go is multi-threaded)
          </ListItem>
          <ListItem href="https://www.youtube.com/watch?v=5dmiGyppRGw">
            [YT]: Game-Based Eval of ChatGPT o1-preview | Strawberry | Q*
          </ListItem>
          <ListItem href="./post/ragExamplesForJobApplication">
            RAG documents for job application autofill
          </ListItem>
          <ListItem href="./post/uiStringPatternMatching">
            React: UI string{" "}
            <span className="text-yellow-200">pattern matching</span> with Regex
          </ListItem>
          <ListItem href="./post/cookieClickerReact">
            Cookie Clicker: <span className="text-yellow-200">React Refs</span>
          </ListItem>
          <ListItem href="./post/goRoutine">Go Routines</ListItem>

          <ListItem href="./post/willAITakeCodingJobs">
            Will A.I. Replace Coding Jobs? (2024)
          </ListItem>
          <ListItem href="./post/snowCrash">
            Snow Crash: Machine Learning & The Future of Research
          </ListItem>

          <ListItem
            href="./post/extendingTsGenerics"
          >
            Constraining TS <span className="text-yellow-200">Generics</span> with Extends pattern
          </ListItem>
          {/*<ListItem
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
            href="./posts/turnNextIntoCra"
          >
            Turning NextJS into CRA
          </ListItem> */}
          <br />
          <li> Under (Re)Construction </li>
        </ul>
      </main>

      <footer className="mt-8 pt-4 border-t border-white flex justify-between">
        <div>
          <Link href="./archive" className="underline mr-4">
            Archive
          </Link>
          <Link href="./crossword" className="underline">
            Crossword
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="mx-4 my-0 flex items-center justify-center">
            Ask me how I used Cursor Agent to port my old blog!
          </div>
          <Link
            href="https://www.linkedin.com/in/chriswillsflannery"
            className="text-amber-200 hover:text-amber-400"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://x.com/chriswflannery"
            className="text-amber-200 hover:text-amber-400"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

const ListItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link href={href} className="underline hover:no-underline">
        {children}
      </Link>
    </li>
  );
};

export default Home;
