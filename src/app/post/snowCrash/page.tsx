import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";

const gptRes1 = `
If a user creates a derivative work based on
another artist's work without permission,
the original artist may have the legal right
to claim royalties for the use of their work.
This is because the copyright holder of the
original work has the exclusive right to create
derivative works based on their work. If someone
else creates a derivative work without permission,
they may be infringing on the copyright holder's
exclusive rights. In order to use another artist's
work as the basis for a new work, it is generally
necessary to obtain permission from the copyright
holder and possibly pay royalties.
`;

const gptRes2 = `
If you are referring to an image that is created
using software or a program developed by MidJourney
and the image is based on or incorporates another
artist's work, then it is possible that the
original artist may have the legal right to claim
royalties for the use of their work. This would
depend on whether the use of the original work is
protected by copyright and whether the user has
obtained permission to use the work or has a valid
defense to copyright infringement.
`;

const gptRes3 = `
Stringers are able to tag their information with
a digital signature, which allows the Library to
identify the source of the information and ensure
that they are properly compensated for their work.
Stringers can also set their own prices for the
information they provide, and the Library will
automatically pay them when a user accesses their
information. The Library uses a system of smart
contracts to facilitate these transactions and
ensure that stringers are paid fairly for their
contributions.
`;

const gptRes4 = `
It is not clear how the use of machine learning
would specifically impact the world of Snow Crash
as depicted in the novel. However, the use of
machine learning could potentially enhance the
abilities of the CIC (Central Intelligence
Corporation) Library by allowing it to process
and analyze large amounts of data more quickly
and accurately. For example, the Library could
use machine learning algorithms to identify
patterns and trends in the data that might not
be easily discernible by humans, or to automate
the classification and organization of information.
The use of machine learning could also potentially
allow the Library to provide more personalized
recommendations or search results to users based
on their individual interests and preferences.
However, it is important to note that the use of
machine learning also raises certain ethical and
social issues that would need to be carefully
considered and addressed.
`;

export default function SnowCrash() {
  return (
    <>
      <main>
        <h1>Snow Crash: Machine Learning & The Future of Research</h1>
        <HL />
        <article style={{ maxWidth: "600px", lineHeight: "24px" }}>
          <h4>What determines &apos;original&apos; content anyway? </h4>
          <p>
            In the novel Snow Crash by Neal Stephenson we meet our protagonist,
            aptly named Hiro Protagonist, who describes his life as a Loose Cannon
            Ninja Pizza Delivery Driver and Sometimes Hacker, and there is an
            interesting bit about his &quot;emergency backup job&quot; as a &quot;freelance
            stringer&quot; for the CIC, the Central Intelligence Corporation. The CIC was
            built on the bones of the Library of Congress and the Central
            Intelligence agency after the government collapsed.
          </p>
          <h4>
            &quot;Most people are not entirely clear on what the world &apos;congress&apos; means.
            And even the word &apos;library&apos; is getting hazy. It used to be a place full
            of books, mostly old ones. Then they began to include videotapes,
            records, and magazines. Then all of the information got converted into
            machine-readable form, which is to say, ones and zeroes.&quot;
          </h4>
          <p>
            As the government was falling apart, a merger between the Library of
            Congress and the CIA happened and the CIC database now simply known as
            the &quot;Library&quot;, became more and more searchable by increasingly
            sophisticated means. This effectively created an open-source library of
            all known knowledge.
          </p>
          <p>
            Hiro&apos;s job as a &quot;stringer&quot; is basically a freelance journalist - these
            &quot;stringers&quot; upload information, which clients of the CIC can then
            access. At any point, millions of stringers are uploading millions of
            fragments at the same time. This information can be video, audio, code,
            poetry, prose, gossip, jokes, etc. Stringers are then paid piecemeal
            based on whether the information uploaded actually gets used.
          </p>
          <p>
            There is a piece of this which struck me as particularly interesting.
            Clients of the CIC can access the database and have to manually search
            it to find what they need. However sophisticated this searching
            mechanism may be, this struck me as odd in 2023 because of the advent of
            machine learning, especially chatGPT.
          </p>
          <p>
            So some questions which came to mind when thinking about this passage
            were: How would machine learning disrupt this data-lookup process? We
            have seen how tools like ChatGPT can effortlessly scrape a mountain of
            information and provide reasonable answers a majority of the time. What
            would the world of Snow Crash look like with today&apos;s machine learning
            processes in the mix?
          </p>
          <h4>
            &quot;CIC&apos;s clients, mostly large corporations and Sovereigns, rifle through
            the Library looking for useful information, and if they find a use for
            something that Hiro put into it, Hiro gets paid&quot;
          </h4>
          <p>
            But what if there was no need for this rifling? What if, with machine
            learning, an algorithm could simply spit out the information needed,
            based on a prompt? And would this change how data would be attributed to
            a Stringer? If the uploaded data needs to be attributed to a Stringer in
            order to get them paid, how does this work exactly if, instead of
            searching for a particular fragment of data in its original state, a
            machine learning algorithm returns a mixed response to best serve the
            input prompt, and draws from multiple sources? In this context, is there
            any concept of Intellectual Property? Can a &quot;fact&quot; be stored on the
            blockchain with authorship attributed to a Stringer? We have already
            seen how ChatGPT struggles with this: ie. if you ask ChatGPT to return
            the sources of its information it can&apos;t. And what determines &quot;original&quot;
            content anyway? What if the substance of the content uploaded is nearly
            identical to preexisting content by coincidence?
          </p>
          <p>
            And what if the substance of the content is derivative of preexisting
            content? This idea in particular brings to mind image-generation
            software like MidJourney. With Midjourney, a user can generate an image
            based on a text prompt, or even based on a preexisting image. Is a
            Midjourney user an artist? Do they have any claim to intellectual
            property of an image generated based on machine learning which studied
            other images? If a MidJourney user decides to sell an image which was
            generated based on another artist&apos;s work, can the original artist claim
            royalties?
          </p>
          <p>
            Well, I don&apos;t know the answers to any of these questions so let&apos;s ask
            ChatGPT.
          </p>
          <p>
            [<b>ask chat GPT:</b> If a MidJourney user decides to sell an image
            which was generated based on another artist&apos;s work, can the original
            artist claim royalties?]
          </p>
          <CodeBlock code={gptRes1} />
          <p>
            [<b>ask chat GPT:</b> is an image generated by midjourney considered to
            be based on another artist&apos;s work?]
          </p>
          <CodeBlock code={gptRes2} />
          <p>
            [<b>ask chat GPT:</b> in the world of Snow Crash, how does a stringer
            get paid? How does the Library know that this fragment of information is
            attributed to that Stringer?]
          </p>
          <CodeBlock code={gptRes3} />
          <p>
            [<b>ask chat GPT:</b> What would the world of Snow Crash look like if
            the CIC library used machine learning?]
          </p>
          <CodeBlock code={gptRes4} />
        </article>
        <HL />
      </main>
    </>
  );
}
