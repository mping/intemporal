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
bin/kaocha unit
bin/kaocha unit-cljs
```
