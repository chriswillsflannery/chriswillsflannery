import { HL } from "@/components/HorizontalLine";
import Image from "next/image";
import { CodeBlock } from "@/components/CodeBlock";
import CookieClicker from '@/public/cookieClickerReact/cookie.png'

const reactQuestion = `
We want to create a red button.
When you click the button, your points increase by 1.
You can buy a blue factory for 5 points.
For each factory you have, your points increase by
N each 1 second on an interval,
where N is the number of factories you have.

So if you have 2 factories, your points should increase
by 2 every 1 second.
`;

const reactRefsExample = `
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState(0);
  const [numFactories, setNumFactories] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const numFactoriesRef = useRef(numFactories);

  useEffect(() => {
    numFactoriesRef.current = numFactories;
  }, [numFactories]);

  useEffect(() => {
    if (intervalRef.current) {
      return;
    }

    const intervalId = setInterval(() => {
      setPoints((prev) => prev + numFactoriesRef.current);
    }, 1000);

    intervalRef.current = intervalId;
  }, []);

  const handleBuyFactory = () => {
    if (points >= 5) {
      setPoints((prev) => {
        return prev - 5;
      });
      setNumFactories(numFactories + 1);
    }
  };

  return (
    <>
      <p>{\`\${points} points\`}</p>
      <div className="circle" onClick={() => setPoints(points + 1)}></div>
      <button onClick={handleBuyFactory}>buy factory - 5 pts</button>
      <div className="factories">
        {new Array(numFactories).fill(0).map((_, idx) => (
          <div key={idx} className="factory"></div>
        ))}
      </div>
    </>
  );
}
}
`;

const singleInterval = `
const intervalRef = useRef<number | null>(null);

const intervalId = setInterval(() => {
  setPoints((prev) => prev + numFactoriesRef.current);
}, 1000);

intervalRef.current = intervalId;
`;

const numFactoriesAsObject = `
const [numFactories, setNumFactories] = useState({ number: 0 });
`;

const setPointsWithNumFactoriesObject = `
const intervalId = setInterval(() => {
  setPoints((prev) => prev + numFactories.number);
}, 1000);
`;

const expectedTearDown = `
// typically, we might expect to see something like:

useEffect(() => {
  const intervalID = setInterval(() => {}, 1000);

  return () => {
    clearInterval(intervalId);
  }
}, []);
`;

const setUpAndTearDown = `
useEffect(() => {
  const timeoutID = setTimeout(() => {}, 1000);

  return () => {
    clearTimeout(timeoutID);
  }
}, []);
`;

export default function CookieClickerReact() {
  return (
    <main>
      <h1>{`Cookie Clicker: React Interview Question`}</h1>
      <HL />

      <article>
        <h4>In this React interview problem, you are asked to:</h4>
        <CodeBlock code={reactQuestion} />
        <Image
          src={CookieClicker}
          alt="CookieClicker"
          priority
        />
        <CodeBlock code={reactRefsExample} />
        <h4>Why this works:</h4>
        <p>{`We ideally only want to ever create a single interval which should run in the background of the program.`}</p>
        <p>{`By having a single interval, we come as close as possible in React world to satisfying the constraint that
          some action should happen every second (or as close as possible to every second).`}</p>
        <p>{`Here, we store a reference to the interval (which should be treated as a singleton) in a ref, so that
          we can later check to ensure whether we have already created our single interval.`}</p>
        <CodeBlock code={singleInterval} />
        <p>{`
          We store the number of points and number of factories as primitive numbers in state.
          We also store the number of factories in a ref. Each time the number of factories in state is updated,
          we update the number of factories stored in the ref.
          `}</p>
        <p>{`This is because when we initially create the interval and it gets stored in memory, it will retain (in a closure)
          the values of any variables which it references.`}</p>
        <p>{`So in the above implementation, if we had referenced numFactories
          inside of the callback function in setPoints, rather than referencing numFactoriesRef.current, we would have seen
          the initial value of numFactories - 0 - used here - even on subsequent iterations of the interval loop.
          However, setPoints always needs the most up-to-date value of numFactories. Thus, we continuously store the value
          of numFactories inside a ref (so this value can persist across re-renders.)`}</p>
      </article>
      <HL />

      <article>
        <h4>Why use a ref for this? (numFactories)</h4>
        <p>{`What if we had instead declared numFactories as an object rather than a primitive value?`}</p>
        <CodeBlock code={numFactoriesAsObject} />
        <p>{`Objects are passed by reference right? So if numFactories was an object and it got passed along in the closure in
          setPoints, then setPoints wouldn't lose reference to whatever is the current value of numFactories, right?`}</p>
        <CodeBlock code={setPointsWithNumFactoriesObject} />
        <p>{`Wrong. We have to consider that even though objects are passed by reference, if are referring to numFactories (as an object)
          within the closure, anytime a piece of state in React is updated, we have to overwrite the entire object,
          in order to avoid potentially unexpected downstream issues.`}</p>
        <p>{`This is why it's considered bad practice to mutate state
          directly in React - if we mutate our state (object), React will not have recognized the state as having been changed, and
          so will not re-render the consuming component. However, technically, the inner parts of that state will have changed - 
          and may cause funny business in whatever components consume it (without having been given proper notice to account for
          this change, basically.) `}</p>
        <p>{`So to re-examine the problem, if we are referring to numFactories (as an object) within the closure,
          yes, it will have a reference to that object in state, but that entire object will become stale, and replaced by a new
          object, when the state (in this case numFactories) is changed.`}</p>
      </article>
      <HL />

      <article>
        <h4>{`Worth noting, in this code implementation we are missing a "tear-down" of the interval.`}</h4>
        <CodeBlock code={expectedTearDown} />
        <p>{`Maybe we can make an argument that since only one is ever created, it is trivial, and
          perhaps will not create a memory leak.`}</p>
        <p>{`But probably a better pattern would be to have created the interval at some root level of the
          application, and create a tear-down function to clearInterval when the application root layer unmounts.`}</p>
        <p>{`This is because, if we were to perform a cleanup (clearInterval) within the useEffect cleanup function
          here in the App component, this would fire almost immediately when the state is updated thus
          re-rendering (unmounting and re-mounting) the component. This would delete the interval. But we need
          the interval to continue running across re-renders of App.tsx!`}</p>
        <p>{`Another approach would be to continuously create and tear down a new setTimeout each time App renders.
          However, this moves away from the nature of just having a single timer.`}</p>
        <CodeBlock code={setUpAndTearDown} />
        <p>{`If we were to continuously create
          and tear down a new timer on each re-mount, there's no guarantee that we're really satisfying the "should
          happen every 1 second" requirement, because there could be an arbitrary amount of time between unmount and
          remount, in theory.`}</p>
      </article>
    </main>
  );
}
