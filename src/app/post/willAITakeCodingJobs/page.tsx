import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";
import Image from "next/image";
import AIdoomer from "@/public/aiTakeCodingJobs/AIdoomer.jpg";
import selectAllFilter from "@/public/aiTakeCodingJobs/selectAllFilter.jpg";

const chatgptfail = `
Sidenote, I found this out the other day:
ChatGPT fails miserably when trying to guess
sequences of numbers. For example, I asked it,

Given this series of numbers, what is the next
number in the list?

1, 4, 4, 7, 10, 16, ?

And it failed miserably several times,
even after I provided it with hints.

By the way, let me know in the comments
if you can solve this one.
`;

export default function WillAITakeCodingJobs() {
  return (
    <>
      <main>
        <h1>Will AI replace coding jobs?</h1>
        <HL />
        <h3>Note from author Feb 16, 2025</h3>
        <p>
          I wrote this post in early 2024, and a ton has changed.
          There are very likely points in this article that I now disagree with,
          or that are no longer relevant.
          </p>
        <HL />
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>
            Short answer, <i>yeah, probably.</i> How soon? Well, that largely
            remains to be seen.
          </h4>
          <p>
            Up until a couple weeks ago, I wasn&apos;t afraid of AI taking software
            engineering jobs. I tend to agree with thinkfluencers in the tech and AI
            space like Mike Solana,{" "}
            <a
              style={{ color: "purple" }}
              href="https://www.piratewires.com/p/the-boy-who-cried-extinction?utm_source=substack&utm_medium=email"
            >
              who says in his newsletter Pirate Wires,
            </a>{" "}
            &apos;Artificial intelligence is a serious and potentially (probably!)
            paradigm-altering technology. There are risks here, which will become
            obvious in a more concrete sense as the technology matures.&apos;
          </p>
          <p>
            But at least a subset of those risks is already well known,
            well-documented, and well-discussed. What happens when a majority of
            jobs have been automated? Can we meaningfully rely on the government to
            make something like UBI happen? We saw during the pandemic what may have
            been a &apos;trial run&apos; at UBI with 2 $1200 checks sent out to
            every citizen, but the overwhelming response was that{" "}
            <i>that simply wasn&apos;t enough.</i>
          </p>
          <p>
            And of course, the &apos;risks&apos; that Solana is talking about
            aren&apos;t just related to jobs. AI, if left to its own devices, could
            self-correct to the point where communication is fundamentally altered.
            It could change the way we think about money and transactions. It could
            change the way we think about education. If at some point automation of
            jobs forces us to redefine what &apos;work&apos; means, school might no
            longer be treated as a pipeline into the workforce.
          </p>
          <p>
            Some world leaders have been more proactive in identifying the risks
            associated with unrestricted AI growth.{" "}
            <a
              style={{ color: "purple" }}
              href="https://rootaccess.substack.com/p/unpacking-chinas-generative-ai-draft"
            >
              China&apos;s Cyberspace Administration, for example,
            </a>{" "}
            published draft regulations for generative AI services last month. And
            that&apos;s not their first set of regulations targeting AI growth.
            After all, China&apos;s not far behind the US, if at all, in how their
            LLMs measure up.
          </p>
          <p>
            Lately, I&apos;ve been watching{" "}
            <a
              style={{ color: "purple" }}
              href="https://www.youtube.com/watch?v=zrW3K_K_kuo"
            >
              videos like this
            </a>{" "}
            and thinking about the state of how AI will influence tech jobs in the
            coming months and years.
          </p>
          <p>There are kind of two schools of thought on this.</p>
          <p>
            There are the AI doomers, the camp I think I&apos;m maybe sorta kinda
            finding myself falling into.
          </p>
          <Image
            src={AIdoomer}
            alt="AI Doomer"
            priority
            width={500}
            height={300}
          />
          <p>
            These are people who believe we&apos;re rapidly approaching an AI
            singularity, noting things like massive improvements to GPT models in a
            very short timeframe, and a timeline where we&apos;re now measuring AI
            advancements week-to-week rather than month-to-month. Notably, several
            key figures in the space, like the CEOs of OpenAI, Google Deepmind, and
            Anthropic,{" "}
            <a
              style={{ color: "purple" }}
              href="https://www.safe.ai/statement-on-ai-risk"
            >
              have signed a statement
            </a>{" "}
            urging world leaders to consider AI as an equally great risk as
            pandemics and nuclear war.
          </p>
          <p>
            So, going back to the original topic of this video: how does this affect
            software development? Well, the CEO of Nvidia says that with generative
            AI,{" "}
            <a
              style={{ color: "purple" }}
              href="https://www.cnbc.com/2023/05/30/everyone-is-a-programmer-with-generative-ai-nvidia-ceo-.html"
            >
              everyone can be a programmer.
            </a>{" "}
            That is, we soon won&apos;t even need to write code anymore; we&apos;ll
            just be able to feed information to the data models and let them do the
            coding for us. Now, no, ChatGPT hasn&apos;t quite gotten to the point
            where this is a reality yet. In fact, many of the code and math examples
            it spits out are often incorrect.
          </p>
          <CodeBlock code={chatgptfail} />
          <p>
            So, AI&apos;s math skills still aren&apos;t great. However, as AI
            continues to improve at a breakneck pace approaching the singularity,
            we&apos;ll see problems like the one I just mentioned solved more
            rapidly as the datasets these models are trained on grow larger by
            orders of magnitude, and the training is further refined by user input.
            This could mean that AI will be able to perform more of the tasks that a
            software developer can, sooner than we probably thought.
          </p>
          <p>
            So, is it almost time to start actively dissuading people from pursuing
            traditional software engineering in school or a bootcamp? Not just yet,
            I think. Here&apos;s the other side of the argument.
          </p>
          <p>
            The subtle nuances and many levels of complexity in custom software and
            architecture will probably forever be out of reach for large language
            models unless they can meaningfully ingest contextual information about
            a problem. I&apos;ll give a concrete example:
          </p>
          <p>
            I work on a React frontend of an application that allows healthcare
            professionals to administer clinical trials to patients at home. A lot
            of the visual content on the pages is traditional React Typescript stuff
            — components, modules, pages, routing, etc. Surely AI could pretty
            easily do a lot of this stuff — code up a grid system that shows various
            metrics for some clinical trial study participants, for example.
          </p>
          <p>
            But what happens when specific domain knowledge is needed to determine
            how to build complex interactions between services? For example,
            let&apos;s say we need to build a custom query language on the frontend
            that allows the user to filter various criteria about the participants
            displayed?
          </p>
          <Image
            src={selectAllFilter}
            alt="Custom frontend selection query language"
            width={500}
            height={300}
          />
          <p>
            It&apos;s a complex task, yes, but similar things have been done before,
            and an AI could likely figure out a pretty optimal way to accomplish
            this.
          </p>
          <p>
            The curveball here, though, is that with the domain knowledge our team
            has — the specific knowledge we have about how this particular study
            will run — we know that in the future, this study will likely need to
            support tens of thousands of participants. This means we&apos;ll need to
            implement some sort of most likely server-side pagination of results.{" "}
            <i>That</i> means when we&apos;re considering how to filter the results,
            we will need to take into consideration that each time we construct one
            of these custom filtering queries on the frontend, we may need to send
            an additional network request to somehow get more paginated results
            which satisfy the filter query criteria.
          </p>
          <p>
            Now, this knowledge that we <i>may</i> in the future need to support
            many, many participants <i>may</i> be something the AI could figure out
            and optimize for on its own. But more realistically, it&apos;s probably
            an implementation detail that the AI could only figure out if it somehow
            gained &apos;inside access&apos; to our chat logs, conversations,
            historical data about how similar companies with similar tasks have
            handled something like this in the past, etc.
          </p>
          <p>
            So this opens up an interesting question. Sort of the logical &apos;next
            step&apos; of training AI models for software engineering might be
            training a private instance of ChatGPT, for example, on our private
            Slack logs, our Jira board tickets and comments, our technical
            documentation, etc.
          </p>
          <p>
            By the way, I explicitly said it will need to be a private instance of
            an AI service because divulging proprietary company code to LLMs is a
            huge no-no - just look at{" "}
            <a
              style={{ color: "purple" }}
              href="https://mashable.com/article/samsung-chatgpt-leak-leads-to-employee-ban"
            >
              what happened to the Samsung employees
            </a>{" "}
            who copy-pasted huge swaths of proprietary code into ChatGPT recently
            and got canned for it.
          </p>
          <p>
            So if LLMs don&apos;t have access to all of this rich contextual
            information, then it&apos;s kind of just like, in the same way a TI80
            graphing calculator doesn&apos;t make you a viable mathematician or
            physicist, a chatbot is not going to make everyone a viable software
            engineer. (Thanks to my friend Dan for that astute analogy). What&apos;s
            more likely is AI will just become another class of tools that requires
            nuanced contextual and technical knowledge to use efficiently.
          </p>
          <p>
            And as a software engineer hoping for a long career in the field, I
            certainly hope this is the case. One of the reasons why AI seems to be
            struggling so mightily with coding, specifically, is that the language
            models are an aggregate of huge sources of data <i>including</i> the
            data that users input when using things like ChatGPT. This means if I
            ask ChatGPT a coding question and I input a piece of code that has, for
            example, a syntax error that the AI doesn&apos;t pick up on, it may, in
            turn, be trained on my incorrect input. This means there&apos;s enormous
            potential for these language models to become contaminated by erroneous
            data.
          </p>
          <p>
            However, again, AI is advancing exponentially, so who&apos;s to say it
            won&apos;t be a matter of months or weeks before these bugs are smoothed
            out? Time will tell—we&apos;ll just have to wait and see. In any case,
            it&apos;s certainly an interesting time to be in tech, and I anticipate
            that in the next few years, we&apos;ll see some absolutely incredible
            things. Or some horrible dystopia. AI is like a box of chocolates.
          </p>
        </article>
        <HL />
      </main>
    </>
  );
}
