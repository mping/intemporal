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

# cljs repl

```
clj -A:dev
```

# Tests

```shell
clj -Atest
```
