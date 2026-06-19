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
          <ListItem href="./post/allegiance">
            <span className="text-gray-500">Jun 20, 2026:</span>{" "}
            To Whom Does Your <span className="text-yellow-200">Allegiance</span> Lie?
          </ListItem>
          <ListItem href="./post/thoughtLeadershipVsAccomplishment">
            <span className="text-gray-500">Jun 10, 2026:</span>{" "}
            <span className="text-yellow-200">Thought leadership</span> and accomplishment are not
            the same thing
          </ListItem>
          <ListItem href="./post/peptidesSupplyChains">
            <span className="text-gray-500">May 23, 2026:</span>{" "}
            <span className="text-yellow-200">Peptides</span>, supply chains &amp; Altered Carbon
          </ListItem>
          <ListItem href="./post/generativeUI">
            <span className="text-gray-500">Apr 11, 2026:</span>{" "}
            Why <span className="text-yellow-200">Generative UI</span> Isn&apos;t Ubiquitous
          </ListItem>
          <ListItem href="./post/thereIsNoMoat">
            <span className="text-gray-500">Mar 22, 2025:</span>{" "}
            There Is No <span className="text-yellow-200">Moat!</span>
          </ListItem>
          <ListItem href="./post/inspirations">
            <span className="text-gray-500">Mar 8, 2025:</span>{" "}
            I owe my love of programming to these things
          </ListItem>
          <ListItem href="./post/problemRLHF">
            <span className="text-gray-500">Feb 17, 2025:</span>{" "}
            One BIG problem with RLHF/Human Labeling
          </ListItem>
          <ListItem href="./post/subtitler">
            <span className="text-gray-500">Feb 11, 2025:</span>{" "}
            Auto-subtitler and Universal Speech{" "}
            <span className="text-yellow-200">Model</span>
          </ListItem>
          <ListItem href="https://youtu.be/7i37SSc14Dg?si=FMSfpUUihhNpIB5D">
            <span className="text-gray-500">Feb 17, 2025:</span>{" "}
            [YT]: Everything is an AI Agent... or is it?
          </ListItem>
          <ListItem href="https://www.youtube.com/watch?v=_y77s1gH0Eg">
            <span className="text-gray-500">Feb 17, 2025:</span>{" "}
            [YT]: I no longer welcome AI replacing me, I fear it
          </ListItem>
          <ListItem href="./post/deadInternet">
            <span className="text-gray-500">Feb 12, 2025:</span>{" "}
            <span className="text-yellow-200">Dead</span> internet theory is
            dead!
          </ListItem>
          <ListItem href="./post/whyIsJavascriptSingleThreaded">
            <span className="text-gray-500">Feb 12, 2025:</span>{" "}
            Why is JavaScript single threaded? (Go is multi-threaded)
          </ListItem>
          <ListItem href="https://www.youtube.com/watch?v=5dmiGyppRGw">
            <span className="text-gray-500">Feb 17, 2025:</span>{" "}
            [YT]: Game-Based Eval of ChatGPT o1-preview | Strawberry | Q*
          </ListItem>
          <ListItem href="./post/ragExamplesForJobApplication">
            <span className="text-gray-500">Feb 11, 2025:</span>{" "}
            RAG documents for job application autofill
          </ListItem>
          <ListItem href="./post/uiStringPatternMatching">
            <span className="text-gray-500">Jun 14, 2024:</span>{" "}
            React: UI string{" "}
            <span className="text-yellow-200">pattern matching</span> with Regex
          </ListItem>
          <ListItem href="./post/cookieClickerReact">
            <span className="text-gray-500">Feb 15, 2025:</span>{" "}
            Cookie Clicker: <span className="text-yellow-200">React Refs</span>
          </ListItem>
          <ListItem href="./post/goRoutine">
            <span className="text-gray-500">Feb 15, 2025:</span> Go Routines
          </ListItem>

          <ListItem href="./post/willAITakeCodingJobs">
            <span className="text-gray-500">Feb 15, 2025:</span>{" "}
            Will A.I. Replace Coding Jobs? (2024)
          </ListItem>
          <ListItem href="./post/snowCrash">
            <span className="text-gray-500">Feb 15, 2025:</span>{" "}
            Snow Crash: Machine Learning & The Future of Research
          </ListItem>

          <ListItem
            href="./post/extendingTsGenerics"
          >
            <span className="text-gray-500">Mar 1, 2025:</span>{" "}
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
          <Link href="./minute-cryptic" className="underline ml-4">
            Minute Cryptic
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-4">
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
      <Link href={href} className="no-underline hover:underline">
        {children}
      </Link>
    </li>
  );
};

export default Home;
