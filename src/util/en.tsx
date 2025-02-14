export const en = {
  snowCrash: {
    title: <h1>Snow Crash: Machine Learning & The Future of Research</h1>,
    sub1: <h4>What determines &apos;original&apos; content anyway? </h4>,
    1: (
      <p>
        In the novel Snow Crash by Neal Stephenson we meet our protagonist,
        aptly named Hiro Protagonist, who describes his life as a Loose Cannon
        Ninja Pizza Delivery Driver and Sometimes Hacker, and there is an
        interesting bit about his “emergency backup job” as a “freelance
        stringer” for the CIC, the Central Intelligence Corporation. The CIC was
        built on the bones of the Library of Congress and the Central
        Intelligence agency after the government collapsed.
      </p>
    ),
    2: (
      <h4>
        “Most people are not entirely clear on what the world ‘congress’ means.
        And even the word ‘library’ is getting hazy. It used to be a place full
        of books, mostly old ones. Then they began to include videotapes,
        records, and magazines. Then all of the information got converted into
        machine-readable form, which is to say, ones and zeroes.”
      </h4>
    ),
    3: (
      <p>
        As the government was falling apart, a merger between the Library of
        Congress and the CIA happened and the CIC database now simply known as
        the “Library”, became more and more searchable by increasingly
        sophisticated means. This effectively created an open-source library of
        all known knowledge.
      </p>
    ),
    4: (
      <p>
        Hiro’s job as a “stringer” is basically a freelance journalist - these
        “stringers” upload information, which clients of the CIC can then
        access. At any point, millions of stringers are uploading millions of
        fragments at the same time. This information can be video, audio, code,
        poetry, prose, gossip, jokes, etc. Stringers are then paid piecemeal
        based on whether the information uploaded actually gets used.
      </p>
    ),
    5: (
      <p>
        There is a piece of this which struck me as particularly interesting.
        Clients of the CIC can access the database and have to manually search
        it to find what they need. However sophisticated this searching
        mechanism may be, this struck me as odd in 2023 because of the advent of
        machine learning, especially chatGPT.
      </p>
    ),
    6: (
      <p>
        So some questions which came to mind when thinking about this passage
        were: How would machine learning disrupt this data-lookup process? We
        have seen how tools like ChatGPT can effortlessly scrape a mountain of
        information and provide reasonable answers a majority of the time. What
        would the world of Snow Crash look like with today’s machine learning
        processes in the mix?
      </p>
    ),
    7: (
      <h4>
        “CIC’s clients, mostly large corporations and Sovereigns, rifle through
        the Library looking for useful information, and if they find a use for
        something that Hiro put into it, Hiro gets paid”
      </h4>
    ),
    8: (
      <p>
        But what if there was no need for this rifling? What if, with machine
        learning, an algorithm could simply spit out the information needed,
        based on a prompt? And would this change how data would be attributed to
        a Stringer? If the uploaded data needs to be attributed to a Stringer in
        order to get them paid, how does this work exactly if, instead of
        searching for a particular fragment of data in its original state, a
        machine learning algorithm returns a mixed response to best serve the
        input prompt, and draws from multiple sources? In this context, is there
        any concept of Intellectual Property? Can a “fact” be stored on the
        blockchain with authorship attributed to a Stringer? We have already
        seen how ChatGPT struggles with this: ie. if you ask ChatGPT to return
        the sources of its information it can’t. And what determines “original”
        content anyway? What if the substance of the content uploaded is nearly
        identical to preexisting content by coincidence?
      </p>
    ),
    9: (
      <p>
        And what if the substance of the content is derivative of preexisting
        content? This idea in particular brings to mind image-generation
        software like MidJourney. With Midjourney, a user can generate an image
        based on a text prompt, or even based on a preexisting image. Is a
        Midjourney user an artist? Do they have any claim to intellectual
        property of an image generated based on machine learning which studied
        other images? If a MidJourney user decides to sell an image which was
        generated based on another artist’s work, can the original artist claim
        royalties?
      </p>
    ),
    10: (
      <p>
        Well, I don’t know the answers to any of these questions so let’s ask
        ChatGPT.
      </p>
    ),
    11: (
      <p>
        [<b>ask chat GPT:</b> If a MidJourney user decides to sell an image
        which was generated based on another artist’s work, can the original
        artist claim royalties?]
      </p>
    ),
    12: (
      <p>
        [<b>ask chat GPT:</b> is an image generated by midjourney considered to
        be based on another artist’s work?]
      </p>
    ),
    13: (
      <p>
        [<b>ask chat GPT:</b> in the world of Snow Crash, how does a stringer
        get paid? How does the Library know that this fragment of information is
        attributed to that Stringer?]
      </p>
    ),
    14: (
      <p>
        [<b>ask chat GPT:</b> What would the world of Snow Crash look like if
        the CIC library used machine learning?]
      </p>
    ),
  },
  oop1: {
    title: (
      <h1>Object-Oriented Programming in JS: 1. Data lookup on objects</h1>
    ),
    sub1: <h4>Objects: how do they work?</h4>,
    1: (
      <p>
        Today we will talk about how to retrieve data from objects and a couple
        of pitfalls and edge cases to watch out for.
      </p>
    ),
    2: <p>Here I have defined an object literal:</p>,
    3: (
      <p>
        It has 2 properties or key-value pairs which have string values, as well
        as one key which has a function for a value. We call this a{" "}
        <i>method.</i>
      </p>
    ),
    4: <p>Properties can be retrieved in one of two ways:</p>,
    5: (
      <p>
        We can use dot notation, or bracket notation - which we will discuss
        later. Dot notation is used when we want to look up a property on an
        object, and we know the name of the property we are looking up (in the
        above example, this is <i>fur</i>). So when we directly reference the
        property <i>fur</i> on <b>dog</b>, this will return the associated
        value, &quot;brown&quot;.
      </p>
    ),
    6: (
      <p>
        What happens if we try to reference a property that doesn&apos;t exist?
        For example:
      </p>
    ),
    7: (
      <p>
        If we are not necessarily sure that a property exists on an object, one
        way we can prevent against this is by using the logical <b>OR</b>{" "}
        operator:
      </p>
    ),
    8: (
      <p>
        What we are saying here is, if the property <b>height</b> does not exist
        on <b>dog</b>, then we want to return 10. This is part of a larger
        concept known as <i>defensive coding.</i>
      </p>
    ),
    9: (
      <p>
        What if we want to update a property on an object? Let&apos;s say we
        want to change <b>dog</b>&apos;s eyes to be <i>green.</i> We can
        reassign the property:
      </p>
    ),
    10: (
      <p>
        We can use dot notation here because we know that <i>eyes</i> is an
        existing property on the object. But what would happen if we tried to do
        this with a property that does not exist on the object?
      </p>
    ),
    11: (
      <p>
        It&apos;s not going to update anything - there&apos;s no preexisting
        property called <b>weight</b> to update - rather, it will simply add a
        new property to the object:
      </p>
    ),
    12: <h4>Bracket Notation</h4>,
    13: (
      <p>
        What if we don&apos;t necessarily know the name of the key we are trying
        to reference? Or if for some reason we don&apos;t have access to that
        key?
      </p>
    ),
    14: (
      <p>
        We have declared an object with 2 properties, then a function - this
        function takes in as parameters an object and a name, and attempts to
        lookup this &apos;name&apos; on the object via bracket notation and
        return its corresponding value. So later when we call this function,
        passing in as arguments a reference to the object &apos;scores&apos; and
        the string &apos;chris&apos;, the function will return{" "}
        <b>scores[&apos;chris&apos;]</b>.
      </p>
    ),
    15: (
      <p>
        This is a great pattern because it makes this function reusable - the
        bracket lookup notation allows us to dynamically look up a property on
        the object using a <i>variable</i> rather than the literal name of the
        key.
      </p>
    ),
    16: (
      <p>
        In every object in JavaScript, it is implied that the keys of an object
        are type <i>string</i>:
      </p>
    ),
    17: (
      <p>
        Here, the <i>date</i> is a string and its corresponding value is a
        number. Same thing for <i>price.</i> What if we needed to create a key
        on the object with special characters?
      </p>
    ),
    18: (
      <p>
        For non-alphanumerical key names (here our key has a dash) we can wrap
        the keys in quotes:
      </p>
    ),
    19: (
      <p>
        The we can later lookup <i>price-USD</i> using bracket notation:
      </p>
    ),
  },
  oop2: {
    title: (
      <h1>Object-Oriented Programming in JS: 2. Prototypal Inheritance</h1>
    ),
    sub1: (
      <h4>
        What the heck is an object prototype? This isn&apos;t the Java I know
        and love! Argh!! In this video I break down parent-child relationships
        inherent to all objects in JavaScript and why understanding this
        matters.
      </h4>
    ),
    1: (
      <p>
        So, a fundamental piece of OOP in JavaScript: all objects in JavaScript
        are interconnected in a parent-child relationship. The way that they
        actually connect is via this invisible chain, and the property which
        will give us access to that chain is something called{" "}
        <b>[[Prototype]]</b>.
      </p>
    ),
    2: (
      <p>
        If I open up a new browser tab and enter into the browser devtools, into
        the `console` tab, I want to see that chain link from the parent to the
        child.
      </p>
    ),
    3: (
      <p>
        In JavaScript, there is a single `parent` object which exists as a
        `model` for all of the objects that we create. We want to see what the
        chain link looks like on this parent object. I&apos;m going to create a
        new object using object literal syntax to instantiate it.
      </p>
    ),
    4: (
      <p>
        It says undefined - I haven&apos;t actually done anything with this
        variable yet, so this is expected. What I want to do is look at the
        properties of myObj - I&apos;m going to open this little triangle icon
        to view this object&apos;s properties:
      </p>
    ),
    5: (
      <p>
        This is a new object, it has no properties yet, because I haven&apos;t
        done anything inside of it yet. But it has this one, kind of greyed-out,
        secret property, called <b>[[Prototype]]</b>. So where does this link
        to? Well, it&apos;s a pointer to another object - if you&apos;ve seen
        some of my other videos, we know that this all objects in JavaScript are
        `passed by reference`. So it is referencing another object called
        `Object`.
      </p>
    ),
    6: (
      <p>
        If we open this panel up we&apos;ll see all of the properties of Object.
        Now this chain, this connection between Object and all of the regular
        objects we create, is called the <i>Prototypal Chain</i>. It is called
        this because anytime we have this parent-child relationship between 2
        objects, the parent is called the object&apos;s `Prototype`.
      </p>
    ),
    7: (
      <p>
        All objects in JavaScript inherit from Object. If I create more objects,
        they will all have a prototypal link to Object.
      </p>
    ),
    8: (
      <p>
        Similarly, we have something in JavaScript called Array. And when I
        create a new array, using array literal syntax (square brackets), this
        will now inherit properties from Array. So Array will be the Prototype
        of the array I just created. Interestingly, the Prototype of Array is
        Object. This means that when I instantiate a new array, it will inherit
        all of the available properties of the parent Prototype Array, as well
        as all of the properties of the grandparent Prototype Object.
      </p>
    ),
    9: (
      <p>
        If we re-enter the browser devtools and create a new array, then view
        the properties of this array, we can see a [[Prototype]] link to Array,
        then in Array we can see a [[Prototype]] link to Object.
      </p>
    ),
    10: (
      <p>
        So we always refer to an object&apos;s parent as its Prototype. But an
        object&apos;s prototype doesn&apos;t necessarily need to be Array or
        Object. We can actually create this parent-child relationships between 2
        objects that we create, so that one can inherit properties from the
        other. In the past (up to ES6), we used do this using a special method
        called <b>Object.create().</b> Nowadays, this method is essentially
        deprecated, but it is still instructive to show how the language works
        under the hood.
      </p>
    ),
    11: (
      <p>
        So we&apos;ve created a new object here, <b>myPerson</b>, and we want
        this to act as the `parent`, so that other objects can have a link to
        myPerson. If I create an object called Chris, using Object.create()...
      </p>
    ),
    12: (
      <p>
        ...And if I were to pass in null, what do we think will happen? This
        will create an empty object. In the past, this newly created object
        would have a [[Prototype]] link, but interestingly, this seems to have
        now been removed as a feature. Where do we think the [[Prototype]] of
        this new object would have linked to? Well, if we use null here, then
        the [[Prototype]] would link up to Object, just like what we saw when we
        created a new object using object literal syntax (brackets). These days,
        with improvements to the language, Object.create(null) actually just
        seems to create an empty object with nothing inside it at all!
      </p>
    ),
    13: (
      <p>
        I want my <b>chris</b> object to inherit properties from{" "}
        <b>myPerson.</b> In other words, I want myPerson to be the parent, and
        chris to be the child. How do we do that? We will pass in myPerson as
        the argument to Object.create().
      </p>
    ),
    14: (
      <p>
        Let&apos;s now take a look at <b>chris</b> in the browser devtools and
        see what happened - I&apos;m going to paste this in:
      </p>
    ),
    15: (
      <p>
        We see here that Object.create() created an object - and let&apos;s open
        it up and take a look at its properties - let&apos;s see where the
        [[Prototype]] links to:
      </p>
    ),
    16: (
      <p>
        We can see that the properties of its Prototype - its parent - are the
        properties of myPerson. And we can see that this object&apos;s
        [[Prototype]] links to Object. So you can see that by using the
        Object.create() method, passing in a reference to another object, we
        have effectively created a parent-child relationship between 2 objects
        which we have created. We&apos;ll explore why this is useful in more
        depth later.
      </p>
    ),
    17: (
      <p>
        Why is this useful? When we want to look up a property on an object,
        that object might not have the property we are looking for. So what
        JavaScript will do is it will say, okay, this current object
        doesn&apos;t have the property we&apos;re looking for, so let&apos;s
        look up the prototypal chain to see if maybe some ancestor of this
        object has that property. If this property doesn&apos;t exist anywhere
        in the prototypal chain, it will return <i>undefined.</i>
      </p>
    ),
    18: (
      <p>
        This process of searching up the prototypal chain is called{" "}
        <i>delegation.</i>
      </p>
    ),
  },
  oop3: {
    title: <h1>Object-Oriented Programming in JS: 3. Data Manipulation</h1>,
    sub1: (
      <h4>
        Breaking down reflection, enumeration and deletion - 3 critical pieces
        of working with data in objects.
      </h4>
    ),
    1: (
      <p>
        As we saw in the previous OOP article, we can use the Object.create()
        method to create a new object which links up to another object, and when
        we have this parent-child relationship, the parent object is called the
        child&apos;s <b>Prototype.</b>
      </p>
    ),
    2: (
      <p>
        In the example below, <b>myPerson</b> would be considered the Prototype
        of <b>chris.</b>
      </p>
    ),
    3: (
      <p>
        If you want to know whether an object has a property, we can look it up
        using either dot or bracket notation. What if we were to look up a
        property that does not exist on the object? For example,{" "}
        <b>chris.hands</b> would yield the value undefined. But what if we want
        to look up a property that exists further up the prototypal chain?
      </p>
    ),
    4: (
      <p>
        If we try and reference <b>chris.arms</b> the JavaScript interpreter
        will first look on the <i>chris</i> object, see that it&apos;s not
        there, then attempt to look further up the prototypal chain, up to{" "}
        <i>myPerson</i>, and there it will see that myPerson does indeed have
        the property <b>arms</b>, and it will return the corresponding value, 2.
      </p>
    ),
    5: (
      <p>
        So using dot or bracket notation to lookup a property doesn&apos;t
        necessarily guarantee that that that property is on the object itself -
        it might be on that object&apos;s prototype. So how can we be sure that
        a property exists on the object itself?
      </p>
    ),
    6: (
      <p>
        One way to accomplish this is by using the <b>hasOwnProperty</b> method.
        Let&apos;s give this a try:
      </p>
    ),
    7: (
      <p>
        We can see from the above example that no, the object <b>chris</b>{" "}
        itself does not have the property <b>arms.</b>
      </p>
    ),
    8: (
      <p>
        Another way to check if an object has a property: we can use the{" "}
        <b>for..in</b> loop to loop over the properties of an object, for
        example:
      </p>
    ),
    9: (
      <p>
        The issue with this is that when I console.log() each key, the for..in
        loop will not only loop over the keys of <b>chris</b> itself, but it
        will also loop over any keys I have created on that object&apos;s
        prototype. So, we can combine a for..in loop with the{" "}
        <b>hasOwnProperty</b> method:
      </p>
    ),
    10: (
      <p>
        In the above example we can use hasOwnProperty to filter out the
        properties which we don&apos;t care about. One thing to bear in mind
        during this process is that the order of keys in an object is not
        necessarily guaranteed. So if you need a solution that ensures the keys
        are always in order, you can reach for a different data structure like a
        Map, or make sure your object is always sorted.
      </p>
    ),
    11: (
      <p>
        You can also use an array, and if you&apos;re using some sort of method
        to loop over the array, you don&apos;t need to worry about properties
        that exist up the prototypal chain, but there might be some performance
        drawbacks to using an array over an object. You can learn more about
        this by studying Big O Notation, specifically around constant time
        lookup of Objects, and linear time lookup of Array elements.
      </p>
    ),
    12: (
      <p>
        If we want to delete a property from an object, for example, if we have
        a property on chris:
      </p>
    ),
    13: (
      <p>
        What if we want to delete this property from chris? We can use the
        delete keyword:
      </p>
    ),
    14: (
      <p>
        However, what would happen if we try to delete a property that exists
        further up the prototypal chain?
      </p>
    ),
    15: (
      <p>
        Does chris still have the property arms - which exists up the chain?
        Yes, it still does. So I was not able to delete a property up the chain
        using <b>delete.</b> So in order to delete that property <b>arms</b>, I
        would need to either remove the link between chris and myPerson, or
        delete <b>arms</b> directly from myPerson. When we have properties that
        exist up the chain which cannot be deleted, they are called{" "}
        <i>non-configurable properties.</i>
      </p>
    ),
    16: (
      <p>
        Any properties that exist on objects by default, such as{" "}
        <b>Object.hasOwnProperty</b> or <b>Array.push</b>, are considered
        non-configurable properties. They exist by default - they are there
        natively - and they cannot be deleted.
      </p>
    ),
  },
  aiTakeCodingJobs: {
    title: <h1>Will AI replace coding jobs?</h1>,
    sub1: (
      <h4>
        Short answer, <i>yeah, probably.</i> How soon? Well, that largely
        remains to be seen.
      </h4>
    ),
    1: (
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
    ),
    2: (
      <p>
        But at least a subset of those risks is already well known,
        well-documented, and well-discussed. What happens when a majority of
        jobs have been automated? Can we meaningfully rely on the government to
        make something like UBI happen? We saw during the pandemic what may have
        been a &apos;trial run&apos; at UBI with 2 $1200 checks sent out to
        every citizen, but the overwhelming response was that{" "}
        <i>that simply wasn&apos;t enough.</i>
      </p>
    ),
    3: (
      <p>
        And of course, the &apos;risks&apos; that Solana is talking about
        aren&apos;t just related to jobs. AI, if left to its own devices, could
        self-correct to the point where communication is fundamentally altered.
        It could change the way we think about money and transactions. It could
        change the way we think about education. If at some point automation of
        jobs forces us to redefine what &apos;work&apos; means, school might no
        longer be treated as a pipeline into the workforce.
      </p>
    ),
    4: (
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
    ),
    5: (
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
    ),
    6: <p>There are kind of two schools of thought on this.</p>,
    7: (
      <p>
        There are the AI doomers, the camp I think I&apos;m maybe sorta kinda
        finding myself falling into.
      </p>
    ),
    8: (
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
    ),
    9: (
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
    ),
    10: (
      <p>
        So, AI&apos;s math skills still aren&apos;t great. However, as AI
        continues to improve at a breakneck pace approaching the singularity,
        we&apos;ll see problems like the one I just mentioned solved more
        rapidly as the datasets these models are trained on grow larger by
        orders of magnitude, and the training is further refined by user input.
        This could mean that AI will be able to perform more of the tasks that a
        software developer can, sooner than we probably thought.
      </p>
    ),
    11: (
      <p>
        So, is it almost time to start actively dissuading people from pursuing
        traditional software engineering in school or a bootcamp? Not just yet,
        I think. Here&apos;s the other side of the argument.
      </p>
    ),
    12: (
      <p>
        The subtle nuances and many levels of complexity in custom software and
        architecture will probably forever be out of reach for large language
        models unless they can meaningfully ingest contextual information about
        a problem. I&apos;ll give a concrete example:
      </p>
    ),
    13: (
      <p>
        I work on a React frontend of an application that allows healthcare
        professionals to administer clinical trials to patients at home. A lot
        of the visual content on the pages is traditional React Typescript stuff
        — components, modules, pages, routing, etc. Surely AI could pretty
        easily do a lot of this stuff — code up a grid system that shows various
        metrics for some clinical trial study participants, for example.
      </p>
    ),
    14: (
      <p>
        But what happens when specific domain knowledge is needed to determine
        how to build complex interactions between services? For example,
        let&apos;s say we need to build a custom query language on the frontend
        that allows the user to filter various criteria about the participants
        displayed?
      </p>
    ),
    15: (
      <p>
        It&apos;s a complex task, yes, but similar things have been done before,
        and an AI could likely figure out a pretty optimal way to accomplish
        this.
      </p>
    ),
    16: (
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
    ),
    17: (
      <p>
        Now, this knowledge that we <i>may</i> in the future need to support
        many, many participants <i>may</i> be something the AI could figure out
        and optimize for on its own. But more realistically, it&apos;s probably
        an implementation detail that the AI could only figure out if it somehow
        gained &apos;inside access&apos; to our chat logs, conversations,
        historical data about how similar companies with similar tasks have
        handled something like this in the past, etc.
      </p>
    ),
    18: (
      <p>
        So this opens up an interesting question. Sort of the logical &apos;next
        step&apos; of training AI models for software engineering might be
        training a private instance of ChatGPT, for example, on our private
        Slack logs, our Jira board tickets and comments, our technical
        documentation, etc.
      </p>
    ),
    19: (
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
    ),
    20: (
      <p>
        So if LLMs don&apos;t have access to all of this rich contextual
        information, then it&apos;s kind of just like, in the same way a TI80
        graphing calculator doesn&apos;t make you a viable mathematician or
        physicist, a chatbot is not going to make everyone a viable software
        engineer. (Thanks to my friend Dan for that astute analogy). What&apos;s
        more likely is AI will just become another class of tools that requires
        nuanced contextual and technical knowledge to use efficiently.
      </p>
    ),
    21: (
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
    ),
    22: (
      <p>
        However, again, AI is advancing exponentially, so who&apos;s to say it
        won&apos;t be a matter of months or weeks before these bugs are smoothed
        out? Time will tell—we&apos;ll just have to wait and see. In any case,
        it&apos;s certainly an interesting time to be in tech, and I anticipate
        that in the next few years, we&apos;ll see some absolutely incredible
        things. Or some horrible dystopia. AI is like a box of chocolates.
      </p>
    ),
  },
};
