import { HL } from "@/components/HorizontalLine";
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image";
import jsEventLoop from "@/public/jsSingleThreaded/jsEventLoop.jpg";

const goRoutine = `
type fetchState struct {
	mu      sync.Mutex
	fetched map[string]bool
}

func (fs *fetchState) testAndSet(url string) bool {
	fs.mu.Lock()
	defer fs.mu.Unlock()
	r := fs.fetched[url]
	fs.fetched[url] = true
	return r
}

func ConcurrentMutex(url string, fetcher Fetcher, fs *fetchState) {
	if fs.testAndSet(url) {
		return
	}
	urls, err := fetcher.Fetch(url)
	if err != nil {
		return
	}
	var done sync.WaitGroup
	for _, u := range urls {
		done.Add(1)
		go func(u string) {
			ConcurrentMutex(u, fetcher, fs)
			done.Done()
		}(u)
	}
	done.Wait()
	return
}
`;

export default function WhyIsJavaScriptSingleThreaded() {
  return (
    <main>
      <h1>{`Why is JavaScript single threaded?`}</h1>
      <HL />

      <article>
        <h3>{`JavaScript was probably originally created as a single threaded language because, quite simply, it's way easier to reason about. Remember, JS was built in about 10 days, with the intention of just being a tool to add some extra flair to web pages, not as a fully-featured programming language.`}</h3>
        
        <p>{`If you're a software bootcamp grad or you've been in the JS world for a while, you've almost definitely had it drilled into you - JavaScript is a dynamically typed, single threaded language. We understand what single threaded means - single thread of execution which is responsible for parsing and executing our code. But the question here is, why? There are lots of other languages which are multithreaded. What gives?`}</p>
        
        <p>{`To attempt to explain this, I want to look at some GoLang code. Go is a multithreaded language, which means it can have multiple different processes running concurrently or in parallel across different cores, simultaneously.`}</p>
        
        <CodeBlock code={goRoutine} />
        
        <p>{`Here, we're building a recursive web scraper. The scraper gathers all of the links on each page, and visits them. We have multiple threads that are sharing a reference to the same struct which includes a map; this is a map of all the visited links.`}</p>
        
        <p>{`Because Go routines can be distributed across multiple cores and run in parallel, we need to make sure that no 2 subroutines attempt to update same value in the map at the same time. We can do this by creating a mutex lock, which will make it so only one subroutine can access the struct at a time. This is, by the way, one way to do "pessimistic locking".`}</p>
        
        <p>{`So, broadly speaking, in multi-threaded languages, we employ some kind of locking mechanism like this when we have multiple threads accessing the same resource, and we want to ensure that any operation which updates that resource, will be at that time, the only thread which can update that resource, thus ensuring that any operations against the shared resource are atomic, which basically means that from the perspective of all other subroutines, this operation is performed as a single unit of work, it's non interruptible, right, so either all of the smaller transactions which make up this operation either complete entirely, or don't happen at all, instantaneously.`}</p>
        
        <p>{`Now let's back up here and talk about one of the most important features of the JavaScript ecosystem - the Event Loop.`}</p>
        
        <Image
          src={jsEventLoop}
          alt="JavaScript Event Loop"
          priority
          width={1000}
          height={700}
        />
        
        <p>{`Here, we have a long-running process which places synchronous and non-synchronous events onto a call stack, then plucks them off one by one and executes the synchronous operations, and puts the async operations into some task queues or offloads them to some web APIs. Then when the call stack is freed up, it plucks the async events off the task queue and executes them. So let's run a thought experiment. What if the event loop was multi-threaded?`}</p>
        
        <p>{`If there were multiple threads working against the same processes in the loop which are shared by reference like the map in the golang example, it would be really complicated to figure out which thread gets access to the call stack at any given time, or the task queue, or which of these needs to be locked, and if they need to get locked, how does that impact the end user's experience?`}</p>
        
        <p>{`[Yes, it is worth mentioning here that there are some processes in modern browsers which use multiple threads, such as the web API handlers, but what we're focused on here is the main event loop being single threaded.]`}</p>
        
        <p>{`Multithreaded operations are not guaranteed to operate in a particular order. What if the user clicked a button, but this operation which should be synchronous and takes precedence, gets blocked by other threads trying to access the call stack? That's bad UX. With a single thread, we can always ensure the order of event execution is predictable, at least for the most part. [Yes, the inclusion of asynchronous process handling still introduces some degree of non-determinism.]`}</p>
      </article>
    </main>
  );
}
