// import { useCallback, useEffect, useReducer, useState } from "react";

// type State<T> = {
//   data?: T;
//   error?: Error;
//   isLoading: boolean;
// };

// type Action<T> =
//   | { type: "FETCHING" }
//   | { type: "SUCCESS"; payload: T }
//   | { type: "FAILURE"; payload: Error };

// function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
//   switch (action.type) {
//     case "FETCHING":
//       return { ...state, isLoading: true };
//     case "SUCCESS":
//       return { ...state, isLoading: false, data: action.payload };
//     case "FAILURE":
//       return { ...state, isLoading: false, error: action.payload };
//     default:
//       return state;
//   }
// }

// function useFetch<T>(url: string, options?: RequestInit): State<T> {
//   const [state, dispatch] = useReducer(fetchReducer<T>, {
//     data: undefined,
//     error: undefined,
//     isLoading: false,
//   });
//   const { isLoading, error, data } = state;

//   const fetchData = useCallback(async () => {
//     const controller = new AbortController(); // Create an AbortController
//     const signal = controller.signal; // Get the signal from the controller
//     dispatch({ type: "FETCHING" });

//     try {
//       const response = await fetch(url, { signal });
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       const responseData = await response.json();
//       dispatch({ type: "SUCCESS", payload: responseData });
//     } catch (err: any) {
//       if (err.name !== "AbortError") {
//         // Check if the error is an AbortError
//         dispatch({ type: "FAILURE", payload: err as Error });
//       }
//     }

//     return controller;
//   }, [url]);

//   useEffect(() => {
//     let controller: AbortController;

//     fetchData().then((ctr) => (controller = ctr));

//     return () => {
//       if (controller) {
//         controller.abort();
//       }
//     };
//   }, [fetchData]);

//   return { data, error, isLoading };
// }

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// export function MyBlogExampleWithUseFetch() {
//   const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
//   const [index, setIndex] = useState(0);
//   const { data, error } = useFetch<Post>(
//     `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`,
//   );

//   const incrementIndex = () =>
//     setIndex((i) => (i === postIds.length - 1 ? i : i + 1));

//   if (error) {
//     // do something with error
//   }

//   if (!data) {
//     // loading state
//     return <p>...loading</p>;
//   }

//   return (
//     <>
//       <div>
//         <h1>{data.title}</h1>
//         <p>{data.body}</p>
//       </div>
//       <div>
//         <button onClick={incrementIndex}>Next Post</button>
//       </div>
//     </>
//   );
// }
