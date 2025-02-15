import { CodeBlock } from "@/components/CodeBlock";
import { HL } from "@/components/HorizontalLine";

const goRoutine = `
package main

import (
	"fmt"
	"time"
)

func sayHello() {
	for i := 0; i < 5; i++ {
		fmt.Println("Hello")
		time.Sleep(1 * time.Second)
	}
}

func main() {
	go sayHello() // Start go routine to execute sayHello function concurrently
	fmt.Println("Main function")

	// Wait to allow go routine to execute
	time.Sleep(3 * time.Second)

	fmt.Println("End of main function")
}
`;

const printed = `
Main function
Hello
Hello
Hello
Hello
End of main function

Program exited.
`;

const goroutineWithStackTrace = `
package main

import (
	"bytes"
	"fmt"
	"net/http"
	_ "net/http/pprof"
	"runtime/pprof"
	"time"
)

func main() {
	// Start an HTTP server to expose the pprof profiling endpoints
	go func() {
		fmt.Println("Starting pprof server at http://localhost:6060/debug/pprof")
		http.ListenAndServe("localhost:6060", nil)
	}()

	// Start profiling goroutines
	go func() {
		time.Sleep(3 * time.Second) // Wait for a few seconds before starting the profiling
		var buf bytes.Buffer
		p := pprof.Lookup("goroutine")
		p.WriteTo(&buf, 1)
		fmt.Println(buf.String()) // Print the goroutine profile to the console
	}()

	// Start a goroutine to execute the sayHello function
	go sayHello()

	fmt.Println("Main function")

	// Wait indefinitely to keep the program running
	select {}
}
`;

export default function GoRoutine() {
  return (
    <>
      <main className="max-w-3xl mx-auto">
        <h1>{`Intro to Go Routines`}</h1>
        <HL />
        <article>
          <h4>
            In Go, we can natively achieve concurrent operations using Go
            routines.
          </h4>
          <p>{`Go routines are lightweight threads spun up ON THE GO ha ha ha that are created using the go keyword.`}</p>
          <CodeBlock code={goRoutine} />
          <ul style={{ lineHeight: "20px" }}>
            <li>{`In the above example, we define a funtion sayHello which prints Hello five times with a one second delay between each print.`}</li>
            <li>{`In the main function, we start a new go routine by calling go sayHello(). This exectures the function concurrently with the rest of the program.`}</li>
            <li>{`After starting the go routine, the main function continues to execute independently. It prints "main function" to the console.`}</li>
            <li>{`To allow time for the go routine to execute, we use time.sleep(3 * time.Second) to pause the main thread for 3 seconds.`}</li>
            <li>{`During this time, the sayHello function is still running concurrently in its own go routine, printing Hello to the console.`}</li>
            <li>{`Finally after the sleep in the main function, "End of main function" is printed, indicating that the main function has completed execution.`}</li>
          </ul>
          <p>{`Here's what we see printed to the console:`}</p>
          <CodeBlock code={printed} lang="none" />
          <p>{`There is tooling in the Go ecosystem that can show us what each thread is doing, to confirm that there are indeed 2 threads concurrently executing.`}</p>
          <p>{`For example, the Go runtime includes a built-in profiling tool called pprof which can be used to generate stats like go routine information. You can use the runtime/pprof package to programmatically collect profiling data or use the command line tool 'go tool pprof' to analyze it. This will show you the stack traces of each go routine and identify concurrent execution:`}</p>
          <CodeBlock code={goroutineWithStackTrace} />
          <ul style={{ lineHeight: "20px" }}>
            <li>{`Above, we start an http server on port 6060 to expose the pprof profiling endpoints. The net/http/pprof package automatically registeres the HTTP handlers for pprof profiling.`}</li>
            <li>{`We then define a go routine to start the http server using ListenAndServe()`}</li>
            <li>{`Then we start another go routine to profile the go routines after a delay of 3 seconds. We create a bytes.Buffer to write to, then use pprof.Lookup("goroutine") to get the goroutine profile and write it to a writer - in this case, os.Stdout - using p.WriteTo(). We then print the goroutine profile to the console.`}</li>
            <li>{`The sayHello function is executed concurrently in another goroutine`}</li>
            <li>{`Finally the main function prints "Main function" and waits indefinitely using select {} to keep the program running so that the profiling endpoints stay available.`}</li>
            <li>{`At this point to see the goroutine profile we can visit localhost:6060/debug/pprof/goroutine after running the program to see the current stack traces of all active goroutines.`}</li>
          </ul>
        </article>
      </main>
    </>
  );
}
