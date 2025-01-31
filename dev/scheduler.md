
Lets define a simple workflow.
Side effects are stubbed to ensure we keep a record of their invocation.

```clojure
(defn http-get [url]
  (http/get ...))

(defn http-put [url]
  (http/put ...))

(defn-workflow simple-workflow []
  (let [do-get (stub http-get)
        result (do-get "http://some/url.json")]
    result))

(simple-workflow)
```

The library will save all invocations and results.

| num | event                   | id | args                   | result         |
|-----|-------------------------|----|------------------------|----------------|
| 1   | simple-workflow/invoke  | 1  |                        |                |
| 2   | http-get/invoke         | 2  | "http://some/url.json" |                |
| 3   | http-get/success        | 2  |                        | {:some "json"} |
| 4   | simple-workflow/success | 1  |                        |                |

If the workflow crashed at any point, we can replay the function and the stubs will take care of 
retrieving the correct values to ensure we restore the workflow state. This has to be deterministic so the events
exactly match the function/stub calls.


Now it gets tricky. Assume some macro `async-thread` that allows you to run code within a separate thread.

```clojure
(defn-workflow threaded-workflow []
  (let [do-get (stub http-get)
        do-put (stub http-put)
        prom1  (async-thread (do-get "http://some/data.json")) ;; thread t1
        prom2  (async-thread (do-put "http://some/other.json"))] ;; thread t2 (2)
    ;; (1) lets assume a crash here
    ;; block and wait for all promises
    (deref (p/all [prom1 prom2]))))

(threaded-workflow)
```

The produced log can look like this:

| num | event                     | id  | args                     | result                 |
|-----|---------------------------|-----|--------------------------|------------------------|
| 1   | simple-workflow/invoke    | 1   |                          |                        |
| 2   | http-get/invoke           | 2   | "http://some/data.json"  |                        |
| 3   | http-put/invoke           | 3   | "http://some/other.json" |                        |
| 4   | http-get/success          | 2   |                          | {:data "json"}         |
| 5   | http-put/success          | 3   |                          | :ok                    |
| ~6~ | ~simple-workflow/success~ | ~1~ |                          | ~[{:data "json"} :ok]~ |

However, because the threaded code can run arbitrarily slow (eg slow http server response), how do we guarantee the replay
is deterministic? More specifically, if the workflow crashed on `(1)` and we saved up to `num` `5`, when replaying the code
there's a chance the second thread (2) finishes faster than the first one; in this scenario we would produce 
`http-put/success` first, and it wouldn't match the event log, making replay impossible.

This stack overflow post has a nice explanation: https://stackoverflow.com/questions/71356668/how-does-multi-threading-works-in-cadence-temporal-workflow/71356669#71356669
but I still haven't fully wrapped my head around how they implement it; the way I did it in my lib is a bit convoluted (I do the event save for threads lazily, in order, on the main workflow thread)
but it appears to work, but I'd like a cleaner, saner approach to this problem.

TLDR: a deterministic way to run (cooperative) multithreaded code so the "event" log is always the same for the same inputs

Hope the problem is clear by now