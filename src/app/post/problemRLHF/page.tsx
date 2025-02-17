import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";
import Link from "next/link";

const gpt = `
Human: "Emily buys 3 apples and 2 oranges. Each orange costs $2.
The total cost of all the fruit is $13.
What is the cost of the apples?

Assistant choice 1 or choice 2.

Choice 1:
Assistant: "The answer is $3.
This is because 2 oranges at $2 are $4 total.
So the 3 apples cost $9, and therefore each apple is 9/3 = $3".

Choice 2:
Assistant: "The total cost of the oranges is $4.
13 - 4 = 9, the cost of the 3 apples is $9.
9/3 = 3, so each apple costs $3.
The answer is $3".
`;

export default function RLHF() {
  return (
    <>
      <main>
        <h1>One BIG problem with RLHF/post training</h1>
        <HL />
        <p>{`In Andrej Karpathy’s recent video “Deep Dive into LLMs like ChatGPT” he talks at length about how models are “corrected” in the post-training sequence, and how a part of this is RLHF. (Reinforcement Learning from Human Feedback)`}</p>
        <Link
          style={{ color: "coral" }}
          href="https://youtu.be/7xTGNNLPyMI?si=MI_VYb_DMDZ9DEi1"
        >
          (View from about the 1:45:45 mark)
        </Link>
        <p>{`The example he gives is the following:`}</p>
        <CodeBlock code={gpt} />
        <p>{`
				Here, Karpathy is talking about computational abilities in problem-solving scenarios, and specifically, about how much context we try to make each output token responsible for.

Human labelers are asked to choose which of the two choices would be a “better” answer. There is a clear RIGHT and WRONG choice here for the “best answer to the question”. Can you identify which is which? It’s not intuitive.

The correct answer is choice 2. Why? Because the way the response is phrased is like a big buildup to the very end, where the final answer is revealed.
				`}</p>
        <p>{`
				The key concept here is that LLMs, at their core, process information sequentially, token by token. Next-token prediction works by feeding ALL of the preceding tokens into the neural network, and the probabilities for the next token get spat out. Each token generation involves a fixed amount of computation. We want to train the model to distribute the reasoning and computation across the entire sequence of tokens, rather than trying to cram all the problem-solving into a single token. We want the model to get to the final answer slowly and sequentially, from left to right.
				`}</p>
        <p>{`
				So if the “answer” is revealed right in the beginning like in Choice 1, we’re not evenly distributing the reasoning throughout the entire sequence - we’re just forcing all of the problem-solving into the very first few tokens. And then for the tokens which follow, we’re already produced the answer, and it’s already in the context window for them, so they’re not really being used strategically for computation of the final result.
				`}</p>
        <h3>{`Fine. OK. Makes sense, all good and well.`}</h3>
				<p>{`The big problem here lies not with human labelers themselves, but with the documentation, frameworks, task onboarding instructions, and third-party companies built around the practice of outsourcing RLHF.`}</p>
        <p>{`Last year (2024) I did some freelance work as a labeler for a well-known AI training company, and the onboarding documentation was more often than not written in broken english, way too verbose in certain areas, and not verbose enough in others, would include examples of “correct” answers which go against what Karpathy is saying here, and in general were extremely disorganized, and difficult to follow - even for "expert code labeler" freelancers who had passed the bar of entry with flying colors.`}</p>
        <p>
          {`Large companies outsource human labeling to these types of AI-training companies. `}
          <Link
            style={{ color: "coral" }}
            href="https://www.reddit.com/r/outlier_ai/comments/1f18ohj/what_llms_does_outlier_work_on/"
          >{`We’re pretty sure both Meta and Google have outsourced labeling to Outlier.`}</Link>{" "}
          {`Outlier is probably one of the worst offenders. There's an entire `}
          <Link
            style={{ color: "cornflowerblue" }}
            href="https://www.reddit.com/r/outlier_ai/"
          >{`subreddit chock full of posts `}</Link>
          {`about how terrible they are. In comparison, companies like Data Annotation seem to be on average `}
					<Link style={{ color: 'coral' }} href="https://www.reddit.com/r/WFHJobs/comments/135xojm/is_data_annotation_a_scam/">{`pretty legit.`}</Link>
        </p>
				<h3>{`So there’s a blatant and obvious quality control issue here. Some data labeling is probably pretty good, and some is probably pretty bad. This does not make for consistent practice.`}</h3>
      </main>
    </>
  );
}
