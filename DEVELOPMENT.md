# cljs repl

```shell
npx shadow-cljs watch dev
```

Observe browser window open with a message like:
> Code entered in a browser-repl prompt will be evaluated here.

The, connect and select the appropriate shadow repl.

```clojure
(require '[shadow.cljs.devtools.api :as shadow])
(shadow/browser-repl)
```

# doc

```shell
npx shadow-cljs watch doc
...
shadow-cljs - HTTP server available at http://localhost:8000
#open the browser

# or
npx shadow-cljs compile doc
python -m http.server --directory public
```

# cljs repl

```
clj -A:dev:doc:cljs
```

# Tests

```shell
bin/kaocha test
bin/kaocha test-cljs

;; or run everything
bin/run-coverage
```

# CI runs

Install earthly: https://earthly.dev

```
earthly -P -i +test
```
