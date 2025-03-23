import { HL } from "@/components/HorizontalLine";

export default function ThereIsNoMoat() {
  return (
    <>
      <main>
        <h1>There Is No Moat!</h1>
        <h2>The old moat is dead, long live the moat</h2>
        <HL />
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <p>
            Up until earlier this year (2025), a startup could have a fighting chance
            solely based upon great engineering. That is now no longer the case. With tools
            like Grok Deep Research, Manus, Claude Code and Cursor fundamentally changing the
            ways we not only build software, but also ideate, distribute, market, pitch, sell,
            iterate, and ship, this is truly a different landscape.
            </p>
            <p>
              Software is now 100% a commodity. Anyone can build a great web app using AI tooling.
              (At least, that is, a 0-1 product that is functional enough to show to investors.)
              Startups in 2025 will no longer be made or broken by having great software. It will
              all come down to distribution, network, synergy and speed.
            </p>
            <p>
              Most vibe-coded early iterations of products just need to work enough to validate ideas,
              find product market fit and get funding.
            </p>
            <p className="text-yellow-500">
              It doesn&apos;t really matter if your codebase is a mess early on.
            </p>
            <p>
              In some cases, it can actually be preferable. For example, it could be a time-saver to keep
              a React component in one giant file which is constantly being iterated on (by AI) than to
              painstakingly modularize. With AI tools (at least when vibecoding in the early product stages)
              it is often preferable to start from scratch and generate a new component than to identify and
              fix bugs in the old one.
            </p>
            <p>
              This is a pretty radical shift from how I&apos;ve written software in the past. And in my experience so
              far, vibecoding is really only worthwhile when you&apos;re writing small, highly modularized functions
              (like React components) where the entire scope of what the LLM needs to understand, can be constrained
              to a very small window (in this case - what does the function/component need to look like and do?)
            </p>
            <p>
              Vibecoding mostly fails when working with larger tasks that require more context. Good examples would be
              configuring an auth service, or doing data manipulation on a very large set of data. These are probably
              better done manually. Letting an LLM try to, say, integrate auth in your frontend is probably going to get hairy
              for a number of reasons including but not limited to: library versioning, JWT/sessions and how they&apos;re implemented
              in the backend, how much of the process are you offloading to a SaaS, exposing secrets, security measures.
            </p>
            <p>
              <span className="text-yellow-500">To build a great startup</span> in 2025 you need to be relentless. You need
              to ship extremely fast and get the product in front of real users. Figure out what they actually need, not
              necessarily what they say they need. Have someone in leadership who is the &quot;idea&quot; person. Ideally this person
              should be technical. They should understand AI, and they should keep on the bleeding edge of trends.
            </p>
            <p>
              New software creation is increasingly becoming the domain of technical people who have a breadth and depth of
              understanding of traditional SWE experiences and schooling/education, but also keep on the bleeding edge
              of AI tooling. It is imperative to understand which tools are at your disposal, when and how to use them.
              And perhaps just as importantly, when not to use them. When estimating a project or task, it&apos;s imperative to
              be able to predict whether using AI to build code will speed you up or slow you down.
            </p>
            <p>
              It&apos;s also increasingly difficult for startups to find and hire these sorts of people. Most applicants fall into
              one or the other category - they have the technicals down but haven&apos;t kept up (or are resistant to keeping up)
              with modern AI practices, or they&apos;re non-technical vibecoders who are using LLMs to spin up code they don&apos;t
              understand. Both have their disadvantages.
            </p>
            <p>
              We are entering a new age of product creation. We need people who can be jack-of-all-trades, who are relentless,
              who are hungry and who are technical or willing to become technical. <span className="text-yellow-500">We are
              wearing all the hats.</span> We need to be wearing all the hats. If we don&apos;t wear the hats, 10 other startups
              will be wearing the hats tomorrow. We are tastemakers. We must wear the hats.
            </p> 
        </article>
      </main>
    </>
  );
}
