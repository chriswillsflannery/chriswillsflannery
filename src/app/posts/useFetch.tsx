import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import styles from "@/styles/Home.module.css";
import { CodeBlock, HL } from "src/components";
import useWindowSize from "src/hooks/useWindowSize";
import { MyBlogExampleWithUseFetch } from "src/hooks/useFetch";

const link = { color: "darkSlateBlue" };

const useFetchEx = `
import { useCallback, useEffect, useReducer, useState } from "react";

type State<T> = {
  data?: T;
  error?: Error; 
  isLoading: boolean;
}

type Action<T> =
| { type: 'FETCHING' }
| { type: 'SUCCESS'; payload: T }
| { type: 'FAILURE'; payload: Error }

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, isLoading: true } 
    case 'SUCCESS':
      return { ...state, isLoading: false, data: action.payload }
    case 'FAILURE':
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state;
  }
}

function useFetch<T>(url: string, options?: RequestInit): State<T> {
  const [state, dispatch] = useReducer(fetchReducer<T>, {
    data: undefined,
    error: undefined,
    isLoading: false
  });
  const { isLoading, error, data } = state;

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    
    // attempt to fetch - if there is data, pass data to state
    // if there is an error, pass error to state
    try {
      // TODO implement abortController
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch({ type: 'SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FAILURE', payload: err as Error })
    }
  }, [url])
  

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return { data, error, isLoading };
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function MyBlogExampleWithUseFetch() {
  const postIds = [1,2,3,4,5,6,7,8];
  const [index, setIndex] = useState(0);
  const { data, error } = useFetch<Post>(
    \`https://jsonplaceholder.typicode.com/posts/\$\{postIds[index]\}\`
  );

  const incrementIndex = () => setIndex((i) => i === postIds.length - 1 ? i : i + 1);

  if (error) {
    // do something with error
  }

  if (!data) {
    // loading state
    return <p>...loading</p>;
  }

  return (
    <>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
      <div>
        <button onClick={incrementIndex}>Next Post</button>
      </div>
    </>
  );
}
`;

const a = `
const { data, error } = useFetch<Post>(
  \`https://jsonplaceholder.typicode.com/posts/\$\{postIds[index]\}\`
);
`;

const b = `
function useFetch<T>(url: string, options?: RequestInit): State<T> {
  const [state, dispatch] = useReducer(fetchReducer<T>, {
    data: undefined,
    error: undefined,
    isLoading: false
  });
  const { isLoading, error, data } = state;

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCHING' });
    
    // attempt to fetch - if there is data, pass data to state
    // if there is an error, pass error to state
    try {
      // TODO implement abortController
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch({ type: 'SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FAILURE', payload: err as Error })
    }
  }, [url])
  

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return { data, error, isLoading };
}
`;

const c = `
type State<T> = {
  data?: T;
  error?: Error; 
  isLoading: boolean;
}

type Action<T> =
| { type: 'FETCHING' }
| { type: 'SUCCESS'; payload: T }
| { type: 'FAILURE'; payload: Error }

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, isLoading: true } 
    case 'SUCCESS':
      return { ...state, isLoading: false, data: action.payload }
    case 'FAILURE':
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state;
  }
}
`;

const d = `
function useFetch<T>(url: string, options?: RequestInit): State<T> {
  const [state, dispatch] = useReducer(fetchReducer<T>, {
    data: undefined,
    error: undefined,
    isLoading: false
  });
  const { isLoading, error, data } = state;
  
  const fetchData = useCallback(async () => {
    const controller = new AbortController(); // Create an AbortController
    const signal = controller.signal; // Get the signal from the controller
    dispatch({ type: 'FETCHING' });

    try {
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const responseData = await response.json();
      dispatch({ type: 'SUCCESS', payload: responseData });
    } catch (err: any) {
      if (err.name !== 'AbortError') { // Check if the error is an AbortError
        dispatch({ type: 'FAILURE', payload: err as Error });
      }
    }

    return controller;
  }, [url])
  

  useEffect(() => {
    let controller: AbortController;

    fetchData().then((ctr) => controller = ctr);

    return () => {
      if (controller) {
        controller.abort();
      }
    }
  }, [fetchData]);

  return { data, error, isLoading };
}
`;

const useFetch: NextPage = () => {
  const size = useWindowSize();

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, [size]);

  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleMain}>
        <h1>{`React custom hook: useFetch`}</h1>
        <p>
          You can view me yap about this hook here:{" "}
          <a style={link} href="https://www.youtube.com/watch?v=jXFiuJ6Z5kg">
            useFetch Custom Hook
          </a>
        </p>
        <HL />

        <article>
          <h4>useFetch is a common React interview question.</h4>
          <CodeBlock code={useFetchEx} />
          <MyBlogExampleWithUseFetch />
        </article>

        <article>
          <h4>
            My implementation of useFetch hook makes use of a few interesting
            things:
          </h4>
          <ol>
            <li>The useReducer pattern for handling different states.</li>
            <li>TypeScript type generics.</li>
            <li>TypeScript discriminated unions.</li>
          </ol>
          <p>Let&apos;s examine how this hook works in depth.</p>
          <CodeBlock code={a} />
          <p>
            useFetch is a hook which we should be able to call, with a URL, and
            get back either some data, or an error.
          </p>
          <p>{`it works by creating a current "state" and a callable "dispatch" function, via the useReducer hook, just like we might see in something like redux.`}</p>
          <p>{`from the current "state", we can derive the values isLoading, error, and data.`}</p>
          <p>{`when the useFetch component mounts, its useEffect hook fires, triggering fetchData. This will change the current state to FETCHING, and attempt to fetch the data at the url. If the fetch is a success, state is updated to SUCCESS, and if it fails, state is updated to FAILURE.`}</p>
          <CodeBlock code={b} />
          <p>{`The fetchReducer function switches on one of three possible Actions, which are defined using a discriminated union type. Depending on which action is fired, the state is updated accordingly.`}</p>
          <CodeBlock code={c} />
          <p>{`There is one crucial piece of code missing here - you may have seen my TODO note.`}</p>
          <p>{`When we attempt a "fetch", we make a network request to jsonplaceholder.com for some data from a particular page, denoted with an index number.`}</p>
          <p>{`Let's imagine we're a user on a website, and we're clicking through some paginated results (You can actually view this implemented above - check out the button and lorem ipsum. each section of lorem ipsum represents a Post.)`}</p>
          <p>{`What would happen if we're a user, and we fetch page 1, then we click to page 2 (this sends a network request to GET page 2 data), but then we really quickly click through to page 3 (this sends a network request to GET page 3 data)?`}</p>
          <p>{`There's no guarantee that the network will resolve these 2 pending requests correctly - it's possible that we're on page 3, and we actually get back (and render) results from page 2. That's not a very good user experience.`}</p>
          <p>{`What we should do in this scenario is make sure that because we navigated away from page 2, that pending network request for page 2 data, gets cancelled. We can use the AbortController api to handle this.`}</p>
          <CodeBlock code={d} />
        </article>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="../">Home</Link>
        </p>
      </footer>
    </div>
  );
};

export default useFetch;
