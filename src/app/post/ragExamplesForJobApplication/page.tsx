import { HL } from "@/components/HorizontalLine";

export default function Subtitler() {
  return (
    <>
      <main>
        <h1>{`Here are some Q&A examples we can do RAG on for easier job application form field completion.`}</h1>
        <HL />

        <p>
          <a
            style={{ color: "coral" }}
            href="https://github.com/chriswillsflannery/rag-from-scratch/blob/main/rag-for-job-apps.ipynb"
          >
            Jupyter notebook with RAG pipeline using these Q&A
          </a>
        </p>

        <p>
          <a
            style={{ color: "darkcyan" }}
            href="https://application-answer-generator-wxo6nxdvpq-uk.a.run.app/"
          >
            Try it out here (Flask app)
          </a>
        </p>

        <HL />

        <p>Todo: (consider this a living document)</p>
        <ul>
          <li>Explore reflection-70b reflection-type system prompt efficacy</li>
          <li>Expand document base</li>
        </ul>

        <HL />
        <p>Changelog</p>

        <h5>9-11-24</h5>
        <ul>
          <li>
            Improved document chunking by semantic q&a tags rather than char
            count
          </li>
          <li>Improved system prompt to force 1st person tone</li>
        </ul>

        <HL />

        <article>
          <h3>{`What considerations do you make when designing and implementing a technical solution?`}</h3>
          <p>{`What is it that the end user really needs / are the product requirements clearly defined, and do they correctly align with the real needs of the platform / customer?`}</p>
          <p>{`What are the timelines, needs, contingencies, potential blockers? Let's roadmap a potential solution and estimate how much time each portion will take.`}</p>
          <p>{`Is there an existing solution which is battle-tested? Are we re-inventing the wheel? To what extend can we use proven solutions to inform the decisions we make? To what extent can we use AI to 10x our design and development process?`}</p>
          <p>{`Who are the people I need to talk to with specific expertise, eg. we need to build out a serverless function which will run on a Lambda. If not me, who is the AWS expert at the company who can review this design document and give it a thumbs up?`}</p>
        </article>
        <HL />

        <article>
          <h3>{`What kind of problems do you most enjoy working on and why?`}</h3>
          <p>{`I consider myself a middle-of-the-stack developer. I obsess over things like performance, observability, type safety across API boundaries, developer tooling. I like "bridging the gaps" so to speak. I think this comes from a place of valuing strong technical communication and recognizing the power that a well-oiled machine (team) can have when they are strongly aligned.`}</p>
          <p>{`One idea I just had while writing this is to build a RAG pipeline that ingests answers to questions like these as documents and can generate application answers in the applicant's tone of voice. Next startup idea/project.`}</p>
          <p>{`I like stuff like the above. Building, tinkering on stuff to make users' experience and developers' experience iteratively more pleasant and more beautiful.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`Describe your ideal team / working environment, what does it look like?`}</h3>
          <p>{`Smallish team, a lot of autonomy. Kind people who are willing to help and highly knowledgeable in diverse areas. Strong, clear product market fit and roadmap. I may need guidance from time to time, ie. on architectural decisions, and I recognize that this is an area for growth.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`How would you describe your balance and depth between backend and frontend skills?`}</h3>
          <p>{`60/40 frontend-backend, but continuously learning across the stack. Devops novice continuously improving my skills with the help of AI. Builder, hacker, learner, community-oriented.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`Can you provide an example of a challenging project you worked on and how you overcame the difficulties?`}</h3>
          <p>{`One of the services I worked on in a previous role was the ability to conduct remote clinical trials in a way which more closely reflects how on-prem clinical trials are conducted. It was necessary to introduce the concept of a "visit" to the digital platform. A "Visit" describes a predefined period of time in which the Study Coordinator and the Participant(s) conduct any assessments, including participant assessments and clinician assessments.`}</p>
          <p>{`For this to work, we needed a concept of a "Study visit" as well as a concept of a "participant visit". The clinician should be able to go into a Study dashboard, and create a configuration for an upcoming Visit for that study. This configuration describes all of the tasks, including participant assessments, checkbox-like tasks, and clinician assessments which are required to be completed on that study visit day. The study visit configuration should also include information like how long that visit should last, and to which Study Schedule Period it pertains.`}</p>
          <p>{`With the study visit configured, the clinician should then be able to go into the individual Participant dashboard, and create a configuration for that individual Participant's visit, as it pertains to the larger Study Visit. The date, start time and end time are configured as an offset value of the Study Period which the visit pertains to. For example, the clinician may decide that the Participant Visit should start on Day 1 of Study Period 1, become active at 9am, and last 5 hours. Once the configuration is complete for the Participant visit and the clinician saves the configuration, the Visit will populate the Participant's calendar view. `}</p>
          <p>{`On the day of the Participant Visit, the clinician can open a panel to view information about the visit, such as start and end time, and a task list - including manually launchable assessments which are scoped to that Visit, checkbox-type tasks, and clinician assessments which are scoped to that Visit.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`How do you stay current with industry trends and new technologies?`}</h3>
          <p>{`To be clear, I don't think that "keeping up to date" directly equates to "career growth" or even "becoming a better engineer", although there is probably some correlation and overlap. I think keeping up with trends is important, but we've seen recently in Pieter Levels' interview on the Lex Fridman podcast that you can hack on the same PHP stack for 20 years and be a wildly successful entrepreneur millionaire. Not everybody needs to be an early adopter to RAG pipelines and Tanstack Query.`}</p>
          <p>{`That being said, there can be a lot of benefit to being an early adopter, depending on how you spin it. Just knowing what RAG is at a conceptual level, and that it is possible, and relatively easy to implement, can plant a seed for a future project or startup. X is one of the best places to discover what's trending in the hivemind, although it can also be an echo chamber of un-vetted ideas. Yes, Cursor is awesome, but if you're only learning about it today, that's totally OK. You're going to be just fine.`}</p>
          <p>{`At the end of the day, the most important tech stack, library, framework, technology, etc. is the one which best does the job, not necessarily the one which is the most hyped on tiktok. Yes, Vercel is great for early startups, but it may not be the right solution at scale. There is nuance to everything. As with most great engineering designs, the correct response is almost always "it depends."`}</p>
        </article>
        <HL />

        <article>
          <h3>{`What excites you about NextJS?`}</h3>
          <p>{`In a previous job I worked on a major version migration from NextJS 13 to 14. It was a haul. We had a huge application, with hundreds of components, pages, and utils. Next 14 uses a new compiler technique and in looking at the numbers in NewRelic after finishing the migration, so far as I can tell, performance boosts seem to reflect the numbers that Vercel boasts about on the NextJS website. I'm still getting used to the App router and logical groupings of utils and components.`}</p>
          <p>{`Overall Next14 is a good way to build apps. It's easy to stand up a full stack application rather quickly and get it deployed. I'm not sure about how I feel with the Vercel environment as a whole - and how there seems to be increasing vendor lock-in as the complexity of your application scales. On the one hand, Vercel is extremely simple to set up and get rolling. Documentation is fairly robust, and I like that their secrets manager partitions your secrets by environment as a configuration option (rather than say, in GCP, where you need to signify that a particular secret is for a particular environment by prefixing its name like prod_MY_VAR. Vercel is great for indie hacker startup founders, it's great for personal projects, and it's great for folks who don't want to get bogged down in infra and cloud stuff early on. The dashboard is friendly, simple monitoring and logging are easy to navigate, and the UX is generally good. Seems like a good chunk of the OG React team has since moved over to work on Vercel.`}</p>
          <p>{`But the downsides, yeesh.`}</p>
          <p>{`When you start to scale, the costs grow - fast. (https://www.indiehackers.com/post/vercel-is-ridiculously-expensive-4d7bce8ca8) And now, here's where the really ugly anecdotal stuff comes in. When I was working at a startup, Vercel went down globally, and our users with it. More than 30 minutes passed before Vercel acknowledged the outage on their status page, and they really seemed to bury the truth - minimizing the scale of the problem. This happened just 2 weeks after our users experienced regional outages, where again, the Vercel team was somewhat slow, and somewhat moreso untruthful in acknowledging the scope and impact of the problem. Our team got fed up with Vercel, and moved to GCP.`}</p>
          <p>{`As you can tell, my thoughts on NextJS are somewhat overshadowed by my thoughts on Vercel. It's hard to separate the art from the artist. But I think what excites me most is just the general trend in the way things are moving. Next is like the gold standard of frontend and middle-of-the-stack development for the foreseeable future. The community around it is robust. But there is a healthy amount of space for pushback and differing opinions - which is almost always a good thing.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`Do you have a strong track record at companies building complicated technology?`}</h3>
          <p>{`In my last role, I worked on the next generation of a multi-tenant clinical trial platform, which included a Next/TS frontend, a TS edge server, and various Golang backend microservices. Many of the features I worked on interfaced with several services - for example, I built a localizations workspace for managing translated study content (Not all of our clinical trial coordinators, nor studies, nor study sites, nor study participants, live in english-speaking countries). This workspace interfaced with a GoLang microservice (serving as a repository and transformation hub for localization data) and AWS s3 pre-signed URLs (for storing translation files and allowing easy download on the FE), and built a custom secure GraphQL file upload/download to store and retrieve the localized JSON strings.`}</p>
          <p>{`Before that, at Caesars, one of the primary projects I directed was overhauling a massive React/Redux application (a hybrid mobile sports betting application, built with web tech but compiled using Apache Cordova to generate a native mobile app), and completely rebuilding the whole thing in TypeScript. A few reasons why - `}</p>
          <p>{`1. The JS interfaced with a gateway API server which used REST, and because the FE was all written in JS, there was no concept of type-sharing across the API boundary. Type schemas were all over the place. Constantly changing due to shifting product direction. Issues with versioning and forward/backward compatibility. Types could have been inferred by creating JSDoc comments in the (Scala) API layer but even that would need to be manually updated each time some functionality was changed. I'm not sure if TRPC existed or anyone was really talking about it at that time. That might have been too early. We did talk about dropping in GraphQL, but that would be a massive migration.`}</p>
          <p>{`2. Tons and tons of sports data coming in from BE services (think things like, which betting markets are available, who is playing today, who is playing tomorrow, and in which leagues, and in which tournaments, and odds changing in real-time). This sports data was essentially uncontrolled. Response schema was documented with swagger but on the FE it was the wild west.`}</p>
          <p>{`So, we started from the ground up using a "soft" TS adoption model. Essential configs and utils were converted first, with everything else getting "any's". We tracked which modules and features were converted so far with a shared spreadsheet. Everyone got on board - all hands on deck. Some of the most painful moments were converting Cordova library integrations - Cordova by this point was already towards the end of its life (was soon to be replaced with Capacitor) and had many outdated libraries or fixed forked versions - several with no TS support. Some of these had to be manually given type declaration files on our end. Then, there was still the issue of type safety across the API boundary. As a naive implementation, Core Entity types were generated based on JSDoc/OpenAPI. This was around the time I left Caesars - I'm not sure if they have adopted a more robust type-boundary solution in the time since.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`What is the need to upgrade from NextJS 13 to NextJS 14? I want to understand the rationale behind the upgrade as well as what is involved as far as codebase changes.`}</h3>
          <p>{`The biggest changes are structural changes around routing, some performance improvements, and Server Components.`}</p>
          <p>{`Next 14 fully embraces the App Router pattern. This means that instead of a top level "pages" folder, we have a top level "app" folder. Previously, any file in the pages directory would become a route, whereas now, only certain files with certain naming conventions ('page' for frontend, 'route' for api, for example) within the app directory become routes. There is also a new dedicated "layout" naming convention for any file which serves as the base layout for the files within that route. Previously, we would have to roll our own layout solution to accomplish the same.`}</p>
          <p>{`In the new version, the Link component itself becomes an anchor tag, rather than needing to wrap an anchor tag. Simple change, but a very good one. Intuitive. Also in the new version, there are some new methods on the useRouter hook, and they've removed some event listeners and overall made the whole pattern of using the hook feel more "react-y". In other words, changes are caught "reactively" (like having a useEffect "listen" for changes to the URL params) rather than proactively setting up a new listener object.`}</p>
          <p>{`Next 14 uses Turbopack, which is a next-gen compiler and outperforms webpack on several metrics. It has faster refresh rates, meaning hot-reloading is faster, and we get better build times as well. Next 13 primarily used webpack as a build tool, but later introduced turbopack as an experimental, semi-supported configuration option.`}</p>
          <p>{`The last big change is that Next 14 encourages the use of Server Components. This involves reviewing all components and deciding which can be server-rendered and which must be client only. In effect, this creates a 3-tiered rendering system where server-rendered HTML is compiled first, and populates the "bones" of the webpage, then server components get dropped in, and then finally, client components. This attempts to create an extremely buttery user experience, where it doesn't really "feel" like you have to wait for things to become interactive.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`What's the most ambitious project you've built in a weekend? What drove you to build it?`}</h3>
          <p>{`Recently I became interested in how tiktok and instagram automatically generate subtitles based on the audio of the video you upload. Due to a mistake in my own understanding about the platforms, I went deep down the rabbit hole trying to understand how audio models like Google USM and AWS Transcribe work. I wrote about it here: https://chriswillsflannery.vercel.app/posts/autosubtitler`}</p>
          <p>{`In a weekend, I built a prototype for an automatic subtitler pipeline in AWS. I used findings from the Google whitepaper mentioned in my blog post to inform the decision-making process. Currently, I can upload a video to s3 on my phone, and it will spit out the same video with subtitles burned on. It's pretty cheap to run (a single Lambda process on a cold start) and was a lot of fun to learn about FFmpeg and AWS Transcribe.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`Share a story about when you broke something significant in production. What did you learn?`}</h3>
          <p>{`I haven't had the pleasure of breaking production yet, but during my first software dev role, I distinctly remember 2 times nearly in succession accidentally exposing my API keys in a git commit. I wasn't sure what to do - do I just scrub the git history? I told my manager and he was totally understanding, but basically just told me "go figure out how to fix this, take an hour or two and if you can't figure it out give me a shout. Work fast, this is a scenario where it's important to get this fixed quickly". Mind you, this was before LLMs so I had to read a ton of documentation, and reach out to a devops person to collaborate on the fix.`}</p>
          <p>{`This experience was a little scary, definitely high pressure, but taught me 2 very important lessons: 1. about application secrets/credentials rotation and why that's important - and was a little embarrassing too. But I think often those types of scenarios are the best ways to really make the high level important stuff stick. 2. About why it's important to know your team and build a "knowledge graph" of the people you work with. It's a good practice to get an idea of what everyone typically works on and what they're good at, and what they can help you with. Had I made an intro to that devops person earlier (thus knowing earlier in the process that I could go to them with my problem), I may have shaved a good 15-20 minutes off of the fix process.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`Outside of standard web frameworks, what's the most interesting technology you've taught yourself recently? Why did you choose to learn it?`}</h3>
          <p>{`For a few years I was in a touring band playing drums, and these days I don't have a full drum kit anymore (apartment life) but I recently picked up a Roland TD27KV2 kit and have been playing around with sound modeling - in particular, around trying to reproduce as best as possible the sounds (tone, timbre) and feel (gating, threshold, volume) of various real kits.`}</p>
          <p>{`It's a good practice to still scratch the technical/creative itch while giving my eyes a break and putting my ears to work.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`Without any prior RAG experience, how would you approach building a RAG pipeline for financial documents? What questions would you ask?`}</h3>
          <p>{`First I would want to understand the different data sources at our disposal. What is the structured data? What is unstructured data? Are we using any nontraditional data sources like scraping social media or news?`}</p>
          <p>{`Do the data sources we have, best lend themselves to traditional RAG or is there a graph-entity relationship in the data which we can leverage? For example, in the legal world, it's often the case that one case law paper will reference other case law papers and we can leverage this graph structure. Is there something similar in financial documents - one document references other documents or document owners? Then we can explore things like graph RAG, or graph RAG alternatives like Light RAG (which on average outperform traditional graphRAG on a number of metrics).`}</p>
          <p>{`In an extremely distilled arbitrary example I could imagine we might want to do something like:`}</p>
          <p>{`1. An end-user queries a chatbot to ask about their tax implications for the next year.`}</p>
          <p>{`2. The user's query is sent with a system prompt to a small distill model to determine which of several vector databases to hit, to augment the query to an LLM, with either information about the user's spending history, or some similar internal/proprietary data.`}</p>
          <p>{`3. Chunked vector data is appropriately retrieved and added to the context of a query to an LLM to forecast the answer to the user's question, and the answer is displayed as a response in the chat UI.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`What's your philosophy on technical debt? When do you embrace it, and when do you fight it?`}</h3>
          <p>{`The absolute number 1 most important thing for a company should be delivering a product that users like, that works well for users, and that users enjoy. Everything else should flow downstream from there. At the beginning, a company should be squarely focused on delivering customer value. They should hire incredible early contributors who have been through the ringer and know how to deliver future-proofed solutions which help the company ship fast and ship often. Of course, some things will slip through the cracks. That's the nature of software. It's inevitable to some degree. Early on though, it's important not to get sidetracked. Focus on tech debt too early and runway will run out. In My Humble Opinion you can temper the results of bad tech debt accumulation by making smart hiring decisions early. When the company grows larger, you can take a minute to breathe and reflect and allocate some people resources to cleanup.`}</p>
          <p>{`One thing to maybe consider here is that tech debt buildup is often a result of either poor planning/deadlines, changing requirements, and knowledge gaps. LLMs are largely helping us close the gap on all of these things. They are helping us deliver products faster than ever, and understand where the best value-adds might be in a system. Something I feel is incredibly important in startup world is to "do it the right way the first time". Maybe we can shave some days off delivery by rolling out a lightweight MVP to probe user interest/market value. But we shouldn't take shortcuts in system considerations where it matters - for example, don't roll out a RBAC permissioning for proprietary data/information unless you're 100% sure it's working as expected, has been thoroughly tested across all roles, etc. Use good judgment. That HAS to be done right the first time. And my point here is, maybe in the past, a consideration like that may have set a team's schedule back a few days or weeks. Now, with copilot tools we can ship it fast, and right, the first time.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`You discover a potential 10x improvement in our system's performance, but it requires a complete rewrite of a critical component. It's month-end, and users are relying on the current system. What's your play?`}</h3>
          <p>{`Hackathon. Get it done. Document everything and build as PoC in isolation. Extensively test, even A-B test with a small group of company friends/power users to ensure functionality. Feature flag. Ship and monitor. If possible, it would be good to (blue-green deploy) build parallel processes and gradually migrate real users to the new process (for example, after usual user hours). Rollback contingency plan also involves the ability to gradually migrate users back to stable platform.`}</p>
        </article>
        <HL />

        <article>
          <h3>{`If you had unlimited resources and no constraints, what would you build?`}</h3>
          <p>{`Are we saying that time is not a constraint? I would probably become interested in building space civilization/governance and helping develop new worlds.`}</p>
          <p>{`If time is a constraint and I had unlimited power and money, I would probably be most interested in renewable energy/natural resource conservation on earth and involvement in Mars planning. I am also interested in consciousness and neuron-mapping like we see in the show "Pantheon". Longevity science is tangential and also fascinating. As AI becomes more and more advanced, I find myself becoming more interested in exploring what it is that makes humans - human. Some of my favorite human things in the world are: a cup of coffee and conversation with my family, a book and a quiet spot in the woods by the lake, and surfing. I would like to see these things stand the test of time.`}</p>
        </article>
        <HL />

      </main>
    </>
  );
}
