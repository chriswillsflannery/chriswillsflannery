import { HL } from "@/components/HorizontalLine";

export default function ForwardDeployed() {
  return (
    <>
      <main>
        <h1>Why Everyone Is Hiring Forward-Deployed Engineers</h1>
        <p style={{ fontStyle: "italic", color: "#aaa" }}>
          AI made bespoke software cheap, and that&apos;s pulling SaaS back toward the thing it
          spent 15 years escaping. Also available as a{" "}
          <a
            href="https://www.youtube.com/watch?v=XYsd7-32LMk"
            style={{ textDecoration: "underline" }}
          >
            video
          </a>
          .
        </p>
        <HL />
        <article>
          <p>
            Harvey is one of the largest legal AI companies out there. In September it raised $550
            million at a $15.5 billion valuation.
          </p>
          <p>
            Harvey&apos;s cofounder Gabe Pereyra described in a recent interview what he sees as the
            natural progression for companies like his. You start out selling software as a
            service. Then, as you move upmarket, which mostly means your customers get bigger, you
            get pulled beyond pure SaaS into customer-specific infrastructure: custom deployments,
            custom integrations, sometimes on-prem.
          </p>
          <p>
            The reason is simple. Large companies want the product wired into their own proprietary
            data, workflows, and internal systems, and they have a ton of all three.
          </p>
          <p>
            That&apos;s why you now hear the term &quot;forward-deployed engineer&quot; everywhere.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            How a vendor ends up inside the customer
          </h3>
          <p>
            Take a hypothetical. Harvey sells to large businesses, so say it lands Walmart.
          </p>
          <p>
            At first, Harvey pitches Walmart its main platform. Someone inside Walmart becomes a
            champion for it and evangelizes it across Walmart&apos;s corporate structure. As more
            teams start using the platform, they start wanting more from Harvey.
          </p>
          <p>
            Now Walmart doesn&apos;t just want the main platform. It wants an Excel add-in, or a
            sales tool, or something custom that lives inside the software Walmart already uses.
          </p>
          <p>
            This keeps growing until Harvey is building so many bespoke products for Walmart that
            it has to dedicate entire teams to nothing but Walmart.
          </p>
          <p>
            Those are forward-deployed engineers: software engineers deployed inside the walls of
            the client company to build whatever that client needs. In practice, the work is
            usually integration, connecting what Harvey offers to what Walmart already runs
            internally. At that point, Harvey&apos;s engineer is acting a lot like a Walmart
            employee.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            SaaS was built to avoid exactly this
          </h3>
          <p>
            As a bit of an old head, I find this fun to watch, because it&apos;s how software
            companies operated 15 or 20 years ago. Then SaaS came along with the opposite premise:
            build one piece of software once, put it on the internet, and sell the same product to
            thousands or even millions of customers.
          </p>
          <p>
            What you did not want was a bunch of people manually customizing it for every customer.
            Do that and you&apos;re a consulting company, and consulting companies don&apos;t scale
            the way a Salesforce does.
          </p>
          <p>
            So small AI companies embedding engineers inside large legacy companies is a reversal
            of what the industry has been working toward for the last 15 years.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Why AI pushes the other way</h3>
          <p>
            The value prop of enterprise AI is that it understands your company specifically, and
            understands it deeply.
          </p>
          <p>
            Your company doesn&apos;t want a generic AI agent. It could build that internally for
            much less. What it wants is an agent that understands its data, its weird internal
            processes, its permissions, its documents, its databases, its Slack channels, and the
            proprietary software it built 15 years ago that nobody understands anymore.
          </p>
          <p>
            The catch is that your company often can&apos;t do this itself. Bureaucratic red tape
            makes it move too slowly. So it hires a small, fast-moving AI startup to do it instead.
          </p>
          <p>
            For that startup, the highest-value version of the product is no longer a standardized
            subscription app. It&apos;s an underlying set of tools, prompts, and skills, plus the
            customization that makes the platform understand how this one company works.
          </p>
          <p>
            And that blurs the line between a software company and a consulting company.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">
            What keeps it from being consulting
          </h3>
          <p>
            Imagine Harvey has 50 forward-deployed engineers working inside Walmart. They&apos;re
            Harvey employees, but day to day they&apos;re solving Walmart problems. They talk to
            Walmart employees. They know how Walmart&apos;s systems work. Eventually they understand
            parts of Walmart&apos;s technical infrastructure better than a lot of actual Walmart
            employees do.
          </p>
          <p>
            In other words, Walmart is letting Harvey accumulate some of its tribal knowledge.
          </p>
          <p>
            But Harvey isn&apos;t a consulting company in the traditional sense, because all of
            those engineers are building on top of the same underlying Harvey platform. If the work
            were completely detached from that platform, you&apos;d have Accenture: pure consulting,
            doing whatever the client asks.
          </p>
          <p>
            Instead, Harvey takes what it learns at Walmart and turns the repeatable pieces into
            features of the platform. That&apos;s the flywheel. A customer asks for something. Your
            forward-deployed engineers build it. You realize your other customers have the same
            problem, so the custom solution becomes a general product feature. The next customer
            gets it out of the box, or sees it in the sales pitch.
          </p>
          <p>
            Skip that last step and you&apos;re back to being a consulting company.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">The engineer&apos;s job changes too</h3>
          <p>
            Historically, an engineer at a SaaS company sat a long way from the customer. A product
            manager stood in between, and whatever requirements came out of those meetings
            eventually made their way down as tickets.
          </p>
          <p>
            The forward-deployed model collapses that. Companies now want someone who can write the
            software, think like a product person, act as a solutions architect, and talk to
            customers directly. Deep domain knowledge matters more too, whether that&apos;s finance,
            healthcare, or legal.
          </p>
          <p>
            The job stops being &quot;give me a ticket and I&apos;ll write some code.&quot; It
            becomes: go inside this complicated organization, figure out what their actual problem
            is, work out which parts of our platform already solve it, and build the pieces that
            don&apos;t exist yet.
          </p>

          <h3 className="text-yellow-500 text-lg mt-8 mb-4">Jevons paradox, for software</h3>
          <p>
            All of this is happening for one reason: AI makes bespoke software much cheaper to
            build. So companies are building a lot more of it.
          </p>
          <p>
            A lot of people expected the opposite. AI was supposed to make generic SaaS infinitely
            scalable and eliminate a bunch of software engineering work. What we&apos;re seeing
            instead looks like Jevons paradox, where making the use of a resource more efficient
            leads to more consumption of that resource, not less.
          </p>
          <p>
            Here the resource is software engineering work. Specifically, bespoke software
            engineering work.
          </p>
          <p>
            Every company gets its own constellation of agents, internal applications, and
            workflows, built around how it operates. And the people building all of it may not work
            for the company using it.
          </p>
          <p>
            You can see startups operating this way in one industry after another. Palantir in
            government. Harvey and GC AI in legal. My company, AgentSmyth, in capital markets. And
            a ton more in healthcare.
          </p>
          <p>
            SaaS was the bet that every customer could run the same software. The forward-deployed
            engineer is the bet that, now that building is cheap, they don&apos;t have to.
          </p>
        </article>
      </main>
    </>
  );
}
