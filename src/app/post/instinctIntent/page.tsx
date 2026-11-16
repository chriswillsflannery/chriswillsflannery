import { HL } from "@/components/HorizontalLine";
import Link from "next/link";

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
    {children}
  </a>
);

export default function InstinctIntent() {
  return (
    <>
      <main>
        <h1>Why Instinct Is Worth as Much as Snap</h1>
        <p style={{ fontStyle: "italic", color: "#aaa" }}>
          Personal agents replace the interface with intent. Investors are paying for what that
          does to the customer relationship. Also available as a{" "}
          <a
            href="https://www.youtube.com/watch?v=Emvvoo3W67U"
            style={{ textDecoration: "underline" }}
          >
            video
          </a>
          .
        </p>
        <HL />
        <article>
          <p>
            A lot of the conversation in AI right now is converging on personal agents. Meta
            shipped Muse in early September.{" "}
            <Ext href="https://www.cnbc.com/2026/09/30/openai-follows-meta-into-the-red-hot-market-for-personal-agents.html">
              OpenAI followed with Dots
            </Ext>{" "}
            three weeks later. And around the same time,{" "}
            <Ext href="https://colossus.com/episode/instinct-the-personal-agent/">
              Noah Shinn gave his first long interview
            </Ext>{" "}
            about <Ext href="https://instinct.com/">Instinct</Ext>.
          </p>
          <p>
            Instinct is a tiny company. It&apos;s invite-only, it has no app, and it reportedly
            has just over 100,000 users. On September 28 it{" "}
            <Ext href="https://techfundingnews.com/ai-agent-instinct-jumps-to-10b-valuation-with-1b-led-by-sequoia-benchmark-and-coatue/">
              raised $1 billion at a $10 billion valuation
            </Ext>
            , about a month after raising at $2.5 billion.
          </p>
          <p>
            Compare that to Snap. Snap has hundreds of millions of daily users, billions in annual
            revenue, mature ad infrastructure, and a product that&apos;s already global. Its{" "}
            <Ext href="https://companiesmarketcap.com/snap/marketcap/">market cap</Ext> is around
            $9 billion. So a startup in early access is priced in the same neighborhood as
            a public company with several thousand times as many users.
          </p>
          <p>
            On current fundamentals, that comparison makes no sense. So why were investors willing
            to pay it, and what are they trying to get ahead of?
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">A price on future possibility</h3>
          <p>
            Start with who&apos;s making the call. Snap&apos;s valuation gets tested every day by a
            liquid public market. Instinct&apos;s comes from a single financing round negotiated
            among a small set of venture investors.
          </p>
          <p>
            That doesn&apos;t make the number fake. It does make it much more explicitly a price on
            what the company could become. And what it could become depends on whether the basic
            model of how we use software changes.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">From interfaces to intent</h3>
          <p>
            The surface-level description of Instinct is an AI assistant that takes actions. It
            books travel, makes reservations, cancels subscriptions, reschedules appointments.
            People mock the demos for exactly this, and fair enough. Booking a flight is a toy
            example. It&apos;s in every demo because it&apos;s easy to reason about and quick to
            show.
          </p>
          <p>
            The more important shift is from UI-mediated software to intent-mediated software.
            Shinn&apos;s own{" "}
            <Ext href="https://x.com/noahrshinn/status/2092691344456351744">pitch</Ext> is that
            &quot;there are no new interfaces.&quot; You text it or call it.
          </p>
          <p>
            Today, the user opens an app, the app has an interface, and the interface calls an API
            or a service. We do almost all of the procedural work ourselves. We learn the menus,
            compare options, fill out forms, move between tabs, and keep track of what&apos;s in
            the cart. The software exposes capabilities, and it&apos;s on us to assemble them into
            an outcome.
          </p>
          <p>
            In the agent model, the user states an objective. A planner then decides which tools,
            APIs, and browser actions to use, and runs the loop end to end. The interface layer
            between the human and the internet gets replaced with something new.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">From commands to standing mandates</h3>
          <p>
            &quot;Book me a flight&quot; is still a command. The agent does one task and stops.
            The bigger change comes when you stop thinking in commands and start thinking in
            policy: &quot;Never let me miss a meeting because of travel.&quot;
          </p>
          <p>
            Imagine a busy parent hauling kids to practices, games, and appointments. The command
            version is &quot;schedule my kids&apos; appointments this week.&quot; The policy
            version is &quot;keep my kids&apos; schedules coordinated so they always have a ride
            and nothing important overlaps, and tell me when there&apos;s a conflict I need to
            deal with.&quot;
          </p>
          <p>That&apos;s a standing mandate.</p>
          <p>
            Once software can hold a mandate over time, the question becomes which resources
            you&apos;re letting it control. Your money? Your calendar? Your communication? Your
            recurring obligations? At that point the core product isn&apos;t the chat interface.
            It&apos;s a permissioned system for turning high-level intent into bounded action.
          </p>
          <p>
            That comes with a different set of technical problems. What is the agent authorized to
            do? How long does that authority last, and under what conditions? Can the agent
            delegate? What happens when a mandate is violated, and who&apos;s liable? How do you
            prove after the fact that an action was authorized?
          </p>
          <p>
            None of those are UX questions. They&apos;re identity, security, auditability, and
            governance questions. And they matter because an agent is only useful if you trust it
            enough to stop watching it act.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">The moat is a learned model of you</h3>
          <p>
            There&apos;s a running joke that every time OpenAI or Anthropic ships a new model,
            someone announces that a hundred startups just lost their moat. So what would
            Instinct&apos;s be?
          </p>
          <p>
            The easy answer is data: it knows your calendar, your preferences, your purchase
            history. But raw data probably isn&apos;t the deepest moat. A new agent can import
            your calendar and your Amazon orders on day one.
          </p>
          <p>
            What it can&apos;t import is the policy function the old agent learned for you. Given
            this context, these options, and these constraints, what would you choose? Maybe you
            usually take the cheaper hotel, except when the expensive one saves you 40 minutes.
            Maybe you care about price on personal travel and location on work travel.
          </p>
          <p>
            That isn&apos;t a database of facts. It&apos;s a learned model of how you allocate
            money, time, risk, and convenience, and it&apos;s hard to reproduce. Those learned
            decision boundaries are the switching cost. If your software gets better the longer
            you use it, you won&apos;t want to start over with something that suddenly
            doesn&apos;t know you.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Agents attack inertia</h3>
          <p>
            That same aversion to switching props up a huge amount of the current economy. People
            don&apos;t shop for new insurance every month. They don&apos;t renegotiate
            subscriptions or move banks every time a better savings rate appears. Human attention
            is scarce, so businesses earn rent from inertia, switching costs, information
            asymmetry, and the fact that nobody can optimize everything all the time.
          </p>
          <p>
            A persistent agent with your context can. It can search, compare, renegotiate, and
            switch continuously. &quot;Find me cheaper insurance&quot; becomes &quot;keep my
            household insured at the best available price, subject to these coverage
            constraints.&quot;
          </p>
          <p>
            Software like that could shrink entire categories of friction that businesses have
            depended on for a long time. If enough consumers use it, margins compress across
            industries.
          </p>
          <p>
            It also creates buyer power. Say an agent layer, Instinct&apos;s or one Amazon builds,
            eventually routes tens of billions of dollars a year in purchasing intent. It can go
            to merchants and say: we control a large pool of demand, so give our users better
            pricing, better inventory, better cancellation rights. More users means more
            aggregated demand, which means better terms, which means better outcomes, which means
            more users. That&apos;s a stronger network effect than &quot;people use the product
            because it&apos;s good.&quot; And it&apos;s worth far more than a take rate on each
            transaction.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Whose side is the agent on?</h3>
          <p>
            Now the problems. If the agent is supposed to represent the user, but its business
            model depends on merchant take rates, who does it work for?
          </p>
          <p>
            Say it&apos;s choosing between two hotels. Hotel A is better for you. Hotel B pays the
            agent more. Which one gets recommended?
          </p>
          <p>
            Search and marketplaces have always had this conflict. Google started as a neutral
            search layer and built an ad business on top of it. Amazon built sponsored placement
            into its rankings. The personal agent has the same problem with a higher trust
            requirement, because the whole point of the product is that you don&apos;t inspect
            every decision.
          </p>
          <p>
            We may end up with two categories: a fiduciary agent that works only for the user and
            charges them directly, and a commercial agent that&apos;s free and paid by merchants.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            Ads, websites, and the exception interface
          </h3>
          <p>
            It&apos;s tempting to say agents kill advertising. More likely, advertising changes
            form. If the user is no longer browsing pages, advertisers stop competing for human
            attention and start competing for machine routing. The ad becomes structured economic
            data that an agent can evaluate directly: price, availability, commission. Persuasion
            turns into machine-readable bidding. Humans see fewer ads while a lot more
            machine-to-machine negotiation happens underneath.
          </p>
          <p>
            Websites probably split the same way. Businesses maintain two interfaces. The
            human-facing one handles branding, storytelling, and discovery. The machine-facing
            one exposes deterministic APIs for availability, pricing, transactions, identity,
            returns, and permissions. The API becomes the primary economic interface, and the
            website becomes the secondary one.
          </p>
          <p>
            The app changes too. If the agent does most of the work, the ideal interface
            isn&apos;t a dashboard showing everything that&apos;s happening. It&apos;s an
            exception interface:
          </p>
          <ul className="list-disc pl-5">
            <li>Flight changed. Rebooked automatically.</li>
            <li>Insurance renewal up 23%. Two alternatives found. Approval required.</li>
            <li>Unusual purchase blocked.</li>
            <li>Dinner moved to 8. No action needed.</li>
          </ul>
          <p>
            The human only sees the cases where judgment or authorization is needed as a final
            pass.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            Being right about the future isn&apos;t owning it
          </h3>
          <p>
            Even if this worldview is right, it doesn&apos;t follow that Instinct captures the
            value.
          </p>
          <p>
            Agent interoperability could get standardized. Permissions could become portable.
            Payments and identity could stay with other platforms. If Google, Apple, Visa,
            Mastercard, OpenAI, or some future protocol layer controls the underlying
            infrastructure, Instinct could be correct about where things are going and still fail
            to own the outcome.
          </p>
          <p>
            And incumbents won&apos;t help. Amazon has no interest in handing its customer
            relationships to an outside agent that bypasses its sponsored listings.
          </p>
          <p>
            People make this mistake a lot: being right about a technology and assuming
            that makes them right about a particular company. The web became enormous, and
            Netscape didn&apos;t capture it. Mobile became enormous, and most early mobile
            companies didn&apos;t win.
          </p>
          <p>
            So the $10 billion valuation is two bets at once. The first is that delegated agents
            become a major computing layer. The second is that Instinct becomes one of the
            companies that controls it. I think the first one happens in some form. The second is
            a toss-up.
          </p>
          <p>
            Venture capital is fine with that. Investors don&apos;t need every bet to work, and if
            this one does, the upside is enormous. The winner will be the company or protocol that
            holds persistent authority over the user&apos;s intent, money, and time: the one that
            owns the permissions, the policy model, the demand, and the point where every other
            business has to negotiate for access to the customer.
          </p>
          <p>
            That&apos;s the same thing I argued{" "}
            <Link href="/post/accessIsExpensive" className="underline">
              last time
            </Link>
            . When AI makes creation cheap, access is what gets expensive.
          </p>
          <p>
            The internet as we know it was built around capturing attention. Incumbents spend
            enormous amounts of money getting you to open their apps and stay there. If personal
            agents get good, businesses that make money by controlling what you see have a serious
            problem. Businesses that provide the underlying service don&apos;t. You still need
            the thing you&apos;re buying.
          </p>
          <p>
            That&apos;s why 100,000 users doesn&apos;t bother the investors. They&apos;re betting
            that opening apps, navigating interfaces, and filling out forms will someday feel as
            dated as getting a call on a landline.
          </p>

          <HL />
          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Sources</h3>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <Ext href="https://techfundingnews.com/ai-agent-instinct-jumps-to-10b-valuation-with-1b-led-by-sequoia-benchmark-and-coatue/">
                AI agent Instinct jumps to $10B valuation with $1B led by Sequoia, Benchmark and
                Coatue
              </Ext>{" "}
              (Tech Funding News, Sep 29, 2026; includes the reported 100,000-user figure)
            </li>
            <li>
              <Ext href="https://colossus.com/episode/instinct-the-personal-agent/">
                Noah Shinn: Building Instinct, The Personal Agent
              </Ext>{" "}
              (Invest Like the Best, EP.493)
            </li>
            <li>
              <Ext href="https://x.com/noahrshinn/status/2092691344456351744">
                Noah Shinn&apos;s launch post
              </Ext>{" "}
              (X)
            </li>
            <li>
              <Ext href="https://www.cnbc.com/2026/09/30/openai-follows-meta-into-the-red-hot-market-for-personal-agents.html">
                OpenAI follows Meta into the red-hot market for personal agents. But will users
                pay?
              </Ext>{" "}
              (CNBC, Sep 30, 2026)
            </li>
            <li>
              <Ext href="https://companiesmarketcap.com/snap/marketcap/">
                Snap market capitalization
              </Ext>{" "}
              (CompaniesMarketCap)
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}
