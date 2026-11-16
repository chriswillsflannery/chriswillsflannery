import { HL } from "@/components/HorizontalLine";
import Link from "next/link";

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
    {children}
  </a>
);

export default function AccessIsExpensive() {
  return (
    <>
      <main>
        <h1>When Creation Gets Cheap, Access Gets Expensive</h1>
        <p style={{ fontStyle: "italic", color: "#aaa" }}>
          AI is making code and content abundant. The value is moving to whoever controls context,
          attention, and trust. Also available as a{" "}
          <a
            href="https://www.youtube.com/watch?v=eZ198TCu-BE"
            style={{ textDecoration: "underline" }}
          >
            video
          </a>
          .
        </p>
        <HL />
        <article>
          <p>
            As AI model tokens get cheaper, production gets cheaper across the board. Code is the
            obvious example, but the same thing is happening to content. Long-form, short-form,
            images, video, research, analysis, advertising assets: all of it costs less to create
            than it ever has.
          </p>
          <p>
            You can see this clearly in the world of{" "}
            <Ext href="https://www.thewrap.com/media-platforms/tv/creators-rise-of-clipping-explained/">
              clippers
            </Ext>
            . There&apos;s an enormous ecosystem
            of editors who take long-form content, say a three-hour IShowSpeed livestream, and
            turn it into dozens of individual clips. Those clips get distributed across TikTok,
            YouTube Shorts, Instagram, and X, and for a lot of the audience, the clips are the
            only version of the stream they ever see.
          </p>
          <p>
            AI can now automate huge pieces of that process. It can find the interesting moments,
            cut them, caption them, reformat them, and write the titles and descriptions. One
            source video can become dozens or hundreds of derivative pieces.
          </p>
          <p>
            So the amount of content we can produce is exploding while the cost of each piece
            approaches zero.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            In software, the scarce thing is context
          </h3>
          <p>
            Software is going through the same shift. AI is making code abundant, and once code is
            abundant, code stops being the scarce resource. Context takes its place.
          </p>
          <p>
            Large companies don&apos;t want a generic AI agent that can write code or answer
            questions. They want one that understands their proprietary data, their permissions,
            their workflows, their legacy software, their weird exceptions: all the tribal
            knowledge that has accumulated inside the company over 20 or 30 years.
          </p>
          <p>
            That&apos;s what&apos;s behind the explosion of the forward-deployed engineer, which I
            wrote about <Link href="/post/forwardDeployed" className="underline">here</Link>. An AI
            company embeds engineers with the customer. Those engineers learn how the
            customer&apos;s systems work, connect the vendor&apos;s platform to them, and build
            the missing pieces.
          </p>
          <p>
            As that relationship deepens, the vendor accumulates the client&apos;s context. It
            learns the legacy processes. It learns which systems technically do one thing while
            everybody inside the company uses them for something completely different. And the
            more of that context the vendor holds, the harder the vendor is to replace.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            In media, the scarce thing is attention
          </h3>
          <p>
            Content creation is following the same pattern. Writing gets cheaper, images get
            cheaper, video gets cheaper, editing gets cheaper. Producing the content is no longer
            the difficult part. Getting anybody to look at it is.
          </p>
          <p>
            If every company can produce 500 pieces of content a day, the 501st isn&apos;t worth
            much. The scarce resource in content is attention, and as production gets cheaper,
            distribution becomes more valuable.
          </p>
          <p>
            That&apos;s the opportunity for a company like{" "}
            <Ext href="https://doomers.ai">Doomers AI</Ext>. At first glance it looks
            like a marketing agency or a content shop, but that misses what it sells, which is
            access. Doomers has access to creators. Those creators have access to audiences. And
            those audiences have already decided that these particular people are worth paying
            attention to.
          </p>
          <p>
            The creator has accumulated something a company can&apos;t manufacture with AI, and
            maybe never will be able to: trust.
          </p>
          <p>
            If you&apos;re a startup launching a product, you can generate 100 promotional videos
            yourself. That part is trivial now. What you can&apos;t do is press a button and
            generate an audience of 200,000 people who&apos;ve spent the last three years
            voluntarily listening to you. That takes time, consistency, and effort. So instead of
            spending years building that distribution yourself, you plug into a network that
            already has it.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Case study: the Jev launch</h3>
          <p>
            A good recent example is one Doomers coordinated:{" "}
            <Ext href="https://typesafe.ai">TypeSafe AI</Ext>&apos;s launch of{" "}
            <Ext href="https://www.infoq.com/news/2026/10/typesafe-ai-jev-released/">Jev</Ext>, a
            model that returns typed decisions with probabilities instead of text.
          </p>
          <p>
            TypeSafe had been in stealth for two years. When it{" "}
            <Ext href="https://x.com/CompleteSkeptic/status/2099925682726002904">
              launched on September 15
            </Ext>
            , its
            founder, Diogo Almeida, had around 1,500 followers on X, and the company account had
            about 200. They&apos;d built an interesting piece of new technology and had no
            distribution to tell anyone about it.
          </p>
          <p>
            So they hired Doomers to orchestrate the launch. Doomers seeded the announcement to
            somewhere between 80 and 100 specific engineers, founders, and builders whose
            audiences overlapped with exactly the people TypeSafe needed to reach first. All of
            those nodes in the network started talking about the same product inside roughly the
            same window, each from a slightly different angle to a slightly different audience.
          </p>
          <p>
            It took off.{" "}
            <Ext href="https://doomers.ai/work/typesafe-ai-case-study">By Doomers&apos; count</Ext>,
            the launch post got 40 million views. TypeSafe
            says it took more than 150,000 waitlist signups in the first 24 hours. The
            founder&apos;s account went from 1,500 followers to well over 100,000.
          </p>
          <p>
            And it wasn&apos;t just impressions.{" "}
            <Ext href="https://vercel.com/blog/ai-gateway-jev-model-launch">According to Vercel</Ext>
            , Jev became the fastest-adopted model in the history of its AI Gateway, with nearly
            13% of paid teams using it within 24 hours.
          </p>
          <p>
            None of that works without a product people wanted once they saw it. But TypeSafe
            already had the product. What it lacked was the attention network, and Doomers had
            one. So TypeSafe paid to plug into an existing distribution layer and borrowed its
            trust long enough to build an audience of its own.
          </p>
          <p>
            After the launch, some of that borrowed distribution becomes owned distribution. The
            founder and the company now have audiences they can go to directly the next time they
            ship something.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Underneath both is trust</h3>
          <p>
            In software, code becomes abundant and proprietary context becomes scarce. In media,
            content becomes abundant and attention becomes scarce.
          </p>
          <p>
            The forward-deployed AI company embeds itself in an organization to get access to
            institutional context. The creator network embeds a company in an existing
            distribution graph to get access to human attention. Underneath both of those scarce
            resources is trust.
          </p>
          <p>
            A company has to trust an AI vendor enough to expose increasingly sensitive systems,
            data, workflows, and tribal knowledge to it. An audience has to trust a creator enough
            to keep giving that person its attention. Neither can be generated by spending more
            tokens.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            The company as an orchestration layer
          </h3>
          <p>
            This changes what companies keep in-house. You don&apos;t need a giant internal
            engineering organization to build every piece of custom software. You plug into a
            specialized AI company that has the platform and the engineers to build on top of it.
          </p>
          <p>
            You don&apos;t need to spend five years building an internal media operation and
            growing every social account organically, either. You plug into a creator network
            that already reaches the people you want.
          </p>
          <p>
            The larger company becomes less of a vertically integrated machine that does
            everything for itself, and more of an orchestration layer over specialized external
            networks.
          </p>
          <p>
            AI doesn&apos;t eliminate scarcity. It moves it, toward the things that stay difficult
            to produce: institutional knowledge, proprietary context, relationships, trust,
            distribution. You can&apos;t manufacture those by throwing more compute or more money
            at the problem.
          </p>
          <p>
            So some of the most valuable companies today may not be the ones that are best at
            producing things. They may be the ones that control access to the scarce resources all
            of that abundant production needs.
          </p>
          <p>When creation gets cheap, access gets expensive.</p>

          <HL />
          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Sources</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <Ext href="https://doomers.ai/work/typesafe-ai-case-study">
                TypeSafe AI and Jev Launch: 40M Views, $100M in 7 Days
              </Ext>{" "}
              (Doomers AI case study; the agency&apos;s own account of the launch)
            </li>
            <li>
              <Ext href="https://vercel.com/blog/ai-gateway-jev-model-launch">
                Jev is the fastest-adopted model in AI Gateway history
              </Ext>{" "}
              (Vercel, Sep 18, 2026)
            </li>
            <li>
              <Ext href="https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/">
                A new kind of AI model from a ChatGPT inventor is thrilling developers
              </Ext>{" "}
              (TechCrunch, Sep 18, 2026)
            </li>
            <li>
              <Ext href="https://www.infoq.com/news/2026/10/typesafe-ai-jev-released/">
                TypeSafe AI Releases Jev: a Decision-Only Model That Returns Typed Probabilities
                Instead of Text
              </Ext>{" "}
              (InfoQ)
            </li>
            <li>
              <Ext href="https://x.com/CompleteSkeptic/status/2099925682726002904">
                Diogo Almeida&apos;s launch post
              </Ext>{" "}
              (X, Sep 15, 2026)
            </li>
            <li>
              <Ext href="https://www.thewrap.com/media-platforms/tv/creators-rise-of-clipping-explained/">
                Clipping Viral Social Videos Has Become Big Business
              </Ext>{" "}
              (TheWrap)
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}
