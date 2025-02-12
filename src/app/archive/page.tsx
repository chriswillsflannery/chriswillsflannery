import Link from "next/link";
import { HL } from "@/components/HorizontalLine";
const Archive = () => {
  return (
    <div>
      <main className="space-y-4 p-4">
        <p>Archive.</p>

        <HL />

        <p>
          <Link href="./posts/archive/htmlRenderingEngine">
            Aug 13 2022: HTML Rendering Engine.
          </Link>
        </p>

        <p>
          <Link href="./posts/archive/cssRenderingEngine">
            Aug 13 2022: CSS Rendering Engine. (1/2)
          </Link>
        </p>

        <p>
          <Link href="./posts/archive/cssRenderingEngine2">
            Aug 13 2022: CSS Rendering Engine. (2/2)
          </Link>
        </p>

        <p>
          <a href="https://medium.com/@chriswillsflannery_54084/time-traveling-state-debugger-reactime-now-supporting-concurrent-mode-routers-and-more-56f9ca6f7601">
            [EXT] Nov 19 2019: Time Traveling State Debugger — Reactime — Now
            Supporting Concurrent Mode, Routers, and more
          </a>
        </p>

        <p>
          <a href="https://react.statuscode.com/issues/165">
            [EXT] Nov 19 2019: Reactime feature in React Status
          </a>
        </p>

        <p>
          <a href="https://medium.com/itnext/sort-of-beginners-guide-to-webpack-dev-server-98f8843b1bc1">
            [EXT] Nov 29 2019: Sort-of-beginner&quot;s guide to
            webpack-dev-server
          </a>
        </p>

        <p>
          <a href="https://medium.com/itnext/deep-in-the-weeds-with-reactime-concurrent-react-fiberroot-and-browser-history-caching-7ce9d7300abb">
            [EXT] Nov 21 2019: Deep in the Weeds with Reactime, Concurrent React
            _fiberRoot, and Browser History Caching
          </a>
        </p>

        <p>
          <Link href="./posts/archive/binaryChristmasTree">
            Binary Christmas Tree
          </Link>
        </p>
        <HL />

        <p>
          <Link href="./">Home</Link>
        </p>
      </main>
    </div>
  );
};

export default Archive;
