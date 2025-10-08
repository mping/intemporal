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

# or run everything
bin/run-coverage

# focusing
./bin/kaocha test --focus intemporal.shutdown-restart-test

# cljs focus is a bit different
./bin/kaocha test-cljs --focus 'cljs:intemporal.shutdown-restart-test'

```

# CI runs

Install earthly: https://earthly.dev

```
earthly -P -i +test
```

# Check FDB is working for your architecture

```shell

$ JAVA_OPTS="-DFDB_LIBRARY_PATH_FDB_C=/usr/local/lib/libfdb_c.dylib -DFDB_LIBRARY_PATH_FDB_JAVA=/usr/local/lib/libfdb_java.jnilib" clj -A:fdb:jdbc

(import 'com.apple.foundationdb.JNIUtil)
(let [method (.getDeclaredMethod com.apple.foundationdb.JNIUtil "loadLibrary" (into-array Class [String]))]
  (.setAccessible method true)
  (.invoke method com.apple.foundationdb.JNIUtil (object-array ["fdb_java"]))
  (.invoke method com.apple.foundationdb.JNIUtil (object-array ["fdb_c"])))

```