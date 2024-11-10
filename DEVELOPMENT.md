# cljs repl

```clojure
(require '[shadow.cljs.devtools.api :as shadow])
(require '[shadow.cljs.devtools.server :as server])
(server/start!)
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
bin/kaocha unit
bin/kaocha unit-cljs
```
