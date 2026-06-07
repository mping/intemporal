(ns intemporal.internal.workflow-registry
  "Maps a stable workflow name -> workflow function so a workflow can be resumed
   knowing only its id (the name + args are recorded in the :workflow-started
   event). This is what lets a restarted process — or, in a multi-pod
   deployment, a different pod — resume a workflow it did not itself start
   (improvements.md §B3, load-bearing for the Phase C worker loop).

   The registry is a process-global atom: each process registers the workflow
   functions it can resolve (Temporal's model). start-workflow auto-registers
   the function it is given, which covers same-process resume; for cross-process
   resume the application must register its workflow vars at startup."
  #?(:cljs (:require [clojure.string :as str])))

(defonce ^{:doc "Process-global name -> workflow-fn registry."}
  registry
  (atom {}))

(defn workflow-name
  "Stable string name for a workflow function (a var or a top-level fn)."
  [f]
  #?(:clj
     (if (var? f)
       (subs (str f) 2)                      ; #'ns/name -> "ns/name"
       (clojure.lang.Compiler/demunge        ; ns$fn_name -> "ns/fn-name"
        (.getName (class f))))
     :cljs
     (if-let [raw (and (fn? f) (.-name f))]
       (if (str/blank? raw)
         (str f)
         (let [parts (str/split raw #"\$")]
           (if (> (count parts) 1)
             (str (str/join "." (map #(str/replace % "_" "-") (butlast parts)))
                  "/"
                  (str/replace (last parts) "_" "-"))
             (str/replace raw "_" "-"))))
       (str f))))

(defn register-workflow!
  "Register a workflow function under its derived name (or an explicit name).
   Accepts a var or a fn. Returns the name used."
  ([f] (register-workflow! (workflow-name f) f))
  ([name f]
   (let [resolved (if (var? f) #?(:clj @f :cljs f) f)]
     (swap! registry assoc name resolved)
     name)))

(defn resolve-workflow
  "Return the registered workflow fn for `name`. Throws a descriptive ex-info if
   the name is not registered in this process, rather than returning nil and
   surfacing an obscure NPE deeper in execution. A fresh process must register its
   workflow vars at startup for cross-process resume to work."
  [name]
  (or (get @registry name)
      (throw (ex-info (str "No workflow function registered for name: " name
                           ". Register the workflow var at startup so it can be resumed by id.")
                      {:workflow-name name
                       :registered    (vec (keys @registry))}))))

(defn clear-registry!
  "Test helper: empties the global registry."
  []
  (reset! registry {}))
